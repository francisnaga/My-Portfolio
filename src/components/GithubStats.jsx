import { useEffect, useState } from 'react';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';

const USERNAME = 'francisnaga';
const CACHE_KEY = 'naga:github-stats:v1';
const CACHE_TTL = 15 * 60 * 1000;
const API_HEADERS = { Accept: 'application/vnd.github+json' };

function readCache() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(CACHE_KEY));
    return saved?.data ? saved : null;
  } catch {
    return null;
  }
}

async function getJson(url, signal) {
  const response = await fetch(url, { headers: API_HEADERS, signal, cache: 'no-store' });
  if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
  return response;
}

async function loadGithubStats(signal) {
  const [profileResponse, firstReposResponse] = await Promise.all([
    getJson(`https://api.github.com/users/${USERNAME}`, signal),
    getJson(`https://api.github.com/users/${USERNAME}/repos?per_page=100&type=owner&sort=updated&page=1`, signal),
  ]);

  const [profile, firstRepos] = await Promise.all([
    profileResponse.json(),
    firstReposResponse.json(),
  ]);
  const repositories = [...firstRepos];
  let nextPage = firstReposResponse.headers.get('Link')?.match(/<([^>]+)>;\s*rel="next"/)?.[1];

  while (nextPage) {
    const response = await getJson(nextPage, signal);
    repositories.push(...await response.json());
    nextPage = response.headers.get('Link')?.match(/<([^>]+)>;\s*rel="next"/)?.[1];
  }

  return {
    followers: profile.followers,
    repositories: profile.public_repos,
    stars: repositories.reduce((sum, repo) => sum + (repo.fork ? 0 : repo.stargazers_count), 0),
  };
}

function formatCount(value) {
  return typeof value === 'number' ? new Intl.NumberFormat('en').format(value) : '—';
}

export default function GithubStats() {
  const [snapshot, setSnapshot] = useState(() => readCache());
  const [status, setStatus] = useState(() => {
    const cached = readCache();
    return cached && Date.now() - cached.checkedAt < CACHE_TTL ? 'cached' : 'loading';
  });

  useEffect(() => {
    const cached = readCache();
    const isFresh = cached && Date.now() - cached.checkedAt < CACHE_TTL;

    let activeController;
    const refresh = async () => {
      activeController?.abort();
      activeController = new AbortController();
      try {
        const data = await loadGithubStats(activeController.signal);
        const freshSnapshot = { data, checkedAt: Date.now() };
        setSnapshot(freshSnapshot);
        setStatus('live');
        try {
          window.localStorage.setItem(CACHE_KEY, JSON.stringify(freshSnapshot));
        } catch {
          // Private browsing or full storage should not prevent showing fresh stats.
        }
      } catch (error) {
        if (error.name !== 'AbortError') setStatus('offline');
      }
    };

    if (!isFresh) refresh();
    const interval = window.setInterval(refresh, CACHE_TTL);
    return () => {
      window.clearInterval(interval);
      activeController?.abort();
    };
  }, []);

  const labels = [
    { label: 'Public repositories', value: snapshot?.data.repositories },
    { label: 'Stars earned', value: snapshot?.data.stars },
    { label: 'GitHub followers', value: snapshot?.data.followers },
  ];
  const statusLabel = status === 'live'
    ? 'Live from GitHub'
    : status === 'cached'
      ? 'Recently synced'
      : status === 'offline' && snapshot
        ? 'Showing saved data'
        : status === 'offline'
          ? 'GitHub data unavailable'
          : 'Connecting to GitHub';

  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className="border-b border-foreground/10 bg-[#f0f1f3] px-6 py-12 md:px-12 md:py-16"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_2fr] md:items-center">
        <div>
          <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/55">
            <FaGithub aria-hidden="true" className="text-base text-foreground" />
            Open-source activity
          </p>
          <h2 id="github-heading" className="font-sans text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
            GitHub activity
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-foreground/65">
            Public GitHub profile data only. The snapshot includes repository, star, and follower counts—not website visits, customers, or app installs.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-3 border-y border-foreground/15">
            {labels.map(({ label, value }) => (
              <div key={label} className="py-5 pr-3 first:pl-0 md:py-6 md:pr-6">
                <p
                  aria-live="polite"
                  className="font-mono text-2xl font-bold tabular-nums text-foreground sm:text-3xl md:text-4xl"
                >
                  {formatCount(value)}
                </p>
                <p className="mt-2 font-mono text-[9px] uppercase leading-snug tracking-wider text-foreground/55 sm:text-[10px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-[9px] leading-relaxed text-foreground/45">
            Star total includes owned public repositories and excludes forks.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-foreground/55" role="status">
              <span className={`h-2 w-2 rounded-full ${status === 'live' ? 'bg-emerald-600' : status === 'offline' ? 'bg-amber-500' : 'bg-foreground/30'}`} />
              {statusLabel}
              {snapshot && status !== 'loading' && (
                <span className="normal-case tracking-normal">
                  · {new Intl.DateTimeFormat('en', { hour: 'numeric', minute: '2-digit' }).format(snapshot.checkedAt)}
                </span>
              )}
            </p>
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-accent transition-transform hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Explore GitHub <FaArrowUpRightFromSquare aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
