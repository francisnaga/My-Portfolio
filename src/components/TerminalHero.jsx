import { useState, useEffect, useRef } from 'react';
import { playClick } from '../utils/sound';

export default function TerminalHero() {
  const [time, setTime] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '[NAGA-OS v2.6] Marine Systems & Digital Product Studio' },
    { type: 'system', text: '[INFO] Discipline: B.Eng Marine Engineering (NMU) × Full-Stack' },
    { type: 'system', text: '[INFO] Flagship: Inkto (AI Legal OCR) · Pipeline: ₦80M+' },
    { type: 'dim', text: 'Tap an action chip below or type a command to explore.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const outputRef = useRef(null);

  // Live Lagos (WAT - UTC+1) Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll output on update
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    playClick(750, 'sine', 0.03);

    if (!cmd) return;

    if (cmd === 'clear' || cmd === 'cls') {
      setHistory([
        { type: 'system', text: '[NAGA-OS] Terminal cleared. Ready for input.' }
      ]);
      return;
    }

    const newHistory = [...history, { type: 'user', text: `> ${cmd}` }];

    switch (cmd) {
      case 'help':
        newHistory.push(
          { type: 'output', text: 'Available commands:' },
          { type: 'dim', text: '  skills       - Tech stack & engineering capabilities' },
          { type: 'dim', text: '  projects     - Active production projects' },
          { type: 'dim', text: '  marine-eng   - Marine engineering × Software architecture' },
          { type: 'dim', text: '  blueprint    - Inkto OCR & NCB Finance architecture flow' },
          { type: 'dim', text: '  status       - Real-time builder status & availability' },
          { type: 'dim', text: '  contact      - Direct WhatsApp and email coordinates' },
          { type: 'dim', text: '  clear        - Clear console window' }
        );
        break;

      case 'skills':
        newHistory.push(
          { type: 'output', text: '─── TECHNICAL CAPABILITIES ───' },
          { type: 'highlight', text: '[AI & OCR]       Gemini Vision, On-Device OCR, Document Parsers' },
          { type: 'highlight', text: '[FULL-STACK]    Next.js, React 19, TypeScript, Tailwind, REST' },
          { type: 'highlight', text: '[BACKEND & DB]  Supabase (PostgreSQL), Python (FastAPI/Scripts)' },
          { type: 'highlight', text: '[MOBILE]        React Native, Kotlin Native Bridges' },
          { type: 'highlight', text: '[PAYMENTS/CAC]  Paystack Gateway, FIRS/NRS E-Invoicing Engine' }
        );
        break;

      case 'projects':
        newHistory.push(
          { type: 'output', text: '─── VERIFIED PRODUCTION BUILDS ───' },
          { type: 'highlight', text: '01. INKTO       [AI Legal OCR] - Scans handwritten legal docs to DOCX' },
          { type: 'highlight', text: '02. NCB FINANCE [Fintech/CAC] - Compliant invoicing + Paystack' },
          { type: 'highlight', text: '03. CLASSYNC    [Edtech PWA] - Multi-role student/admin workflow' },
          { type: 'highlight', text: '04. VANTAGE     [SaaS Tracker] - Minimalist job application pipeline' },
          { type: 'highlight', text: '05. NAIRALENS   [Transparency] - Nigerian financial rate comparison' }
        );
        break;

      case 'marine-eng':
        newHistory.push(
          { type: 'output', text: '─── THE MARINE ENGINEERING FOUNDATION ───' },
          { type: 'dim', text: 'Studying B.Eng Marine Engineering at Nigeria Maritime University.' },
          { type: 'dim', text: 'Marine systems (propulsion, hydraulics, auxiliary plants) demand' },
          { type: 'dim', text: 'absolute fault tolerance—failure at sea is not an option.' },
          { type: 'highlight', text: 'I apply this exact industrial discipline to software systems:' },
          { type: 'dim', text: 'Zero unnecessary bloat, robust error states, and resilient logic.' }
        );
        break;

      case 'blueprint':
        newHistory.push(
          { type: 'output', text: '─── ARCHITECTURE BLUEPRINT: INKTO OCR ───' },
          { type: 'dim', text: '[CAMERA SCAN]' },
          { type: 'dim', text: '     ↓' },
          { type: 'highlight', text: '[KOTLIN NATIVE FILTER] (Binarization & deskewing)' },
          { type: 'dim', text: '     ↓' },
          { type: 'highlight', text: '[GEMINI VISION API] (Handwriting extraction & legal context)' },
          { type: 'dim', text: '     ↓' },
          { type: 'highlight', text: '[DOCX GENERATOR] (Formal court affidavit structure)' }
        );
        break;

      case 'status':
        newHistory.push(
          { type: 'output', text: '─── LIVE BUILDER TELEMETRY ───' },
          { type: 'highlight', text: 'Status:       AVAILABLE FOR CONTRACTS & NEW BUILDS' },
          { type: 'dim', text: 'Location:     Lagos & NMU, Nigeria (WAT)' },
          { type: 'dim', text: 'Metric:       ₦80M+ Enterprise Lead Pipeline Generated' },
          { type: 'dim', text: 'Active Focus: Inkto Android beta release & AI automation' }
        );
        break;

      case 'contact':
        newHistory.push(
          { type: 'output', text: '─── DIRECT COORDINATES ───' },
          { type: 'highlight', text: 'Email:    hello@francisnaga.site' },
          { type: 'highlight', text: 'WhatsApp: +234 913 043 6032' },
          { type: 'dim', text: 'GitHub:   github.com/francisnaga' },
          { type: 'dim', text: 'LinkedIn: linkedin.com/in/francisnaga' }
        );
        break;

      case 'whoami':
        newHistory.push(
          { type: 'highlight', text: 'Efobi Francis Chibundo (Naga)' },
          { type: 'dim', text: 'Marine Engineering Student & Full-Stack Systems Builder.' }
        );
        break;

      default:
        newHistory.push(
          { type: 'dim', text: `Command not found: "${cmd}". Type "help" or tap an action chip.` }
        );
        break;
    }

    setHistory(newHistory);
  };

  const handleChipClick = (cmd) => {
    handleCommand(cmd);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      handleCommand(inputVal);
      setInputVal('');
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#0B0C10] text-[#E0E2EC] font-mono text-xs border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] md:shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] relative overflow-hidden">
      
      {/* Terminal Title Bar */}
      <div className="bg-[#16181F] border-b border-[#2B2F3D] px-4 py-2.5 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-[#FF5F56] border border-[#E0443E]"></div>
          <div className="w-2.5 h-2.5 bg-[#FFBD2E] border border-[#DEA123]"></div>
          <div className="w-2.5 h-2.5 bg-[#27C93F] border border-[#1AAB29]"></div>
          <span className="text-[11px] text-white/70 ml-2 uppercase font-bold tracking-wider">
            NAGA-SHELL // LAGOS_WAT
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-white/60">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{time || '19:00:00'} WAT</span>
        </div>
      </div>

      {/* Output Buffer Area */}
      <div 
        ref={outputRef}
        className="flex-1 p-4 md:p-5 overflow-y-auto space-y-2 font-mono text-[11px] md:text-xs leading-relaxed max-h-[280px] md:max-h-[340px] no-scrollbar selection:bg-accent selection:text-white"
      >
        {history.map((line, idx) => {
          if (line.type === 'system') {
            return <div key={idx} className="text-white/90 font-bold">{line.text}</div>;
          }
          if (line.type === 'user') {
            return <div key={idx} className="text-accent font-bold">{line.text}</div>;
          }
          if (line.type === 'highlight') {
            return <div key={idx} className="text-emerald-300">{line.text}</div>;
          }
          if (line.type === 'dim') {
            return <div key={idx} className="text-white/50">{line.text}</div>;
          }
          return <div key={idx} className="text-white/80">{line.text}</div>;
        })}
      </div>

      {/* Interactive Quick-Action Chips (Crucial for Mobile Perfection) */}
      <div className="p-3 bg-[#12141A] border-t border-[#2B2F3D] flex flex-wrap gap-1.5 select-none">
        <button
          type="button"
          onClick={() => handleChipClick('skills')}
          className="px-2.5 py-1.5 text-[10px] bg-[#1E2230] text-white hover:bg-accent hover:text-white border border-[#3A405A] transition-colors active:scale-95"
        >
          [skills]
        </button>
        <button
          type="button"
          onClick={() => handleChipClick('projects')}
          className="px-2.5 py-1.5 text-[10px] bg-[#1E2230] text-white hover:bg-accent hover:text-white border border-[#3A405A] transition-colors active:scale-95"
        >
          [projects]
        </button>
        <button
          type="button"
          onClick={() => handleChipClick('marine-eng')}
          className="px-2.5 py-1.5 text-[10px] bg-[#1E2230] text-cyan-300 hover:bg-cyan-500 hover:text-black border border-cyan-500/40 transition-colors active:scale-95"
        >
          [marine-eng]
        </button>
        <button
          type="button"
          onClick={() => handleChipClick('blueprint')}
          className="px-2.5 py-1.5 text-[10px] bg-[#1E2230] text-emerald-300 hover:bg-emerald-500 hover:text-black border border-emerald-500/40 transition-colors active:scale-95"
        >
          [blueprint]
        </button>
        <button
          type="button"
          onClick={() => handleChipClick('status')}
          className="px-2.5 py-1.5 text-[10px] bg-[#1E2230] text-white hover:bg-accent hover:text-white border border-[#3A405A] transition-colors active:scale-95"
        >
          [status]
        </button>
        <button
          type="button"
          onClick={() => handleChipClick('clear')}
          className="px-2 py-1.5 text-[10px] bg-[#1E2230] text-white/50 hover:bg-red-500 hover:text-white border border-[#3A405A] transition-colors active:scale-95"
        >
          [clear]
        </button>
      </div>

      {/* Interactive Command Prompt Line */}
      <form onSubmit={onSubmit} className="bg-[#0B0C10] border-t border-[#2B2F3D] px-3 py-2.5 flex items-center gap-2">
        <span className="text-accent font-bold">{'>'}</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type a command (e.g. help, contact)"
          className="flex-1 bg-transparent text-white placeholder-white/30 text-[11px] md:text-xs font-mono outline-none border-none focus:ring-0 p-0"
        />
        <button
          type="submit"
          className="px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors"
        >
          Run
        </button>
      </form>

    </div>
  );
}
