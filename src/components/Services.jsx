import { motion } from 'framer-motion';
import { FaApple, FaAndroid, FaGooglePlay, FaAppStoreIos, FaPython, FaFacebook, FaInstagram, FaTiktok, FaGoogle, FaRocket } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import { BsStars } from 'react-icons/bs';

const productServices = [
  {
    id: '01',
    title: 'Mobile app development',
    price: 'From ₦500k',
    range: '₦500k - ₦3.5M+',
    desc: 'Custom Android and iOS apps, designed and built from first brief through launch.',
    icon: <div className="flex gap-2"><FaApple /><FaAndroid /><FaGooglePlay /><FaAppStoreIos /></div>,
  },
  {
    id: '02',
    title: 'Websites & web products',
    price: 'From ₦100k',
    range: '₦100k - ₦800k',
    desc: 'Fast, accessible websites and full-stack web products built around your users and goals.',
    icon: <FaComputer />,
  },
  {
    id: '03',
    title: 'AI tools & chatbots',
    price: 'From ₦150k',
    range: '₦150k - ₦1.5M',
    desc: 'Useful AI features and customer tools that fit into a real product or workflow.',
    icon: <BsStars />,
  },
  {
    id: '04',
    title: 'Automation & data tools',
    price: 'From ₦30k',
    range: '₦30k - ₦300k',
    desc: 'Python scripts, bots, and integrations that reduce repetitive work.',
    icon: <FaPython />,
  },
];

const launchServices = [
  {
    id: '05',
    title: 'Social advertising',
    price: 'From ₦100k/mo',
    range: '₦100k - ₦400k/month',
    desc: 'Campaign setup, tracking, and ongoing optimisation for social channels.',
    icon: <div className="flex gap-2"><FaFacebook /><FaInstagram /><FaTiktok /></div>,
  },
  {
    id: '06',
    title: 'Google Business Profile',
    price: 'From ₦20k',
    range: '₦20k - ₦80k',
    desc: 'Set up and improve your business presence on Google Search and Maps.',
    icon: <FaGoogle />,
  },
  {
    id: '07',
    title: 'Business launch package',
    price: 'From ₦250k',
    range: '₦250k - ₦900k',
    desc: 'A coordinated website, business profile, WhatsApp setup, and launch campaign.',
    icon: <FaRocket />,
  },
];

function ServiceCard({ service, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="flex min-h-[230px] flex-col justify-between border border-foreground/10 bg-white p-5 transition-colors hover:border-accent md:p-6"
    >
      <div>
        <div className="mb-6 flex items-start justify-between font-mono text-xs text-foreground/40">
          <span>[{service.id}]</span>
          <span aria-hidden="true" className="text-2xl text-foreground/40">{service.icon}</span>
        </div>
        <h4 className="font-mono text-lg font-bold uppercase leading-snug text-foreground md:text-xl">{service.title}</h4>
        <p className="mt-3 text-sm leading-relaxed text-foreground/65">{service.desc}</p>
      </div>
      <div className="mt-6 flex items-end justify-between gap-3 border-t border-foreground/10 pt-4">
        <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/45">Typical range<br /><strong className="mt-1 inline-block text-xs text-foreground/70">{service.range}</strong></span>
        <span className="font-mono text-sm font-bold text-accent">{service.price}</span>
      </div>
    </motion.article>
  );
}

function ServiceGroup({ title, description, services, offset = 0 }) {
  return (
    <div className="mb-12 last:mb-0">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground">{title}</h3>
        <p className="max-w-xl text-sm leading-relaxed text-foreground/55">{description}</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => <ServiceCard key={service.id} service={service} index={index + offset} />)}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="border-b border-foreground/10 bg-background px-6 py-16 noise-bg md:px-12 md:py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="mb-5 font-mono text-xs uppercase tracking-widest text-foreground/50">// Build with me</h2>
        <div className="mb-10 grid gap-4 border-l-2 border-accent pl-5 md:mb-14 md:grid-cols-[1fr_auto] md:items-end md:gap-8">
          <div>
            <h3 className="font-sans text-2xl font-bold tracking-tight text-foreground md:text-3xl">Product work for teams and founders.</h3>
            <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-foreground/65 md:text-base">
              Need a product built, an existing experience improved, or a business ready to launch? These are starting points; final scope and pricing depend on the brief.
            </p>
          </div>
          <a href="#contact" className="inline-flex min-h-11 items-center font-mono text-[10px] font-bold uppercase tracking-widest text-accent underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Talk through a brief ↗</a>
        </div>

        <ServiceGroup
          title="Product engineering"
          description="Core software work for teams that need a thoughtful build partner."
          services={productServices}
        />
        <ServiceGroup
          title="Launch support"
          description="Practical setup for smaller businesses preparing to reach customers."
          services={launchServices}
          offset={productServices.length}
        />

        <a href="#contact" className="mt-10 inline-flex min-h-12 items-center justify-center border-2 border-foreground px-5 font-mono text-[10px] font-bold uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
          Share your brief <span aria-hidden="true" className="ml-3">↗</span>
        </a>
      </div>
    </section>
  );
}
