// @ts-nocheck
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook, Check, Star, ArrowRight } from 'lucide-react';
import { studio, instructors, stats, classes, testimonials, pricing, koriva } from '@/lib/site-data';

/* ── reveal ──────────────────────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}
function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)', transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

/* ── header ──────────────────────────────────────────────────────────────── */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 50); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn); }, []);
  const links = ['Classes', 'Coaches', 'Pricing', 'Contact'];
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${scrolled ? 'bg-[#0A0A0A]/96 backdrop-blur border-b border-[#FFD700]/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        <a href="#" data-cg-el="nav_logo_text"
          <span className="text-[#FFD700]">APEX</span><span className="text-white"> FITNESS</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="font-body text-sm font-medium text-[#888888] hover:text-white uppercase tracking-wider transition-colors">{l}</a>)}
          <a href="#" data-cg-el="hero_cta_primary" text-[#0A0A0A] font-heading font-black text-sm uppercase tracking-widest px-6 py-2.5 transition-colors">Join Now
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-1">{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {open && (
        <div className="md:hidden bg-[#141414] border-t border-[#FFD700]/20 px-6 py-4 flex flex-col gap-4">
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="font-body text-sm uppercase tracking-wider text-[#888888] hover:text-white transition-colors">{l}</a>)}
          <a href={`${koriva.baseUrl}/book?slug=${koriva.gymSlug}`} className="bg-[#FFD700] text-[#0A0A0A] font-heading font-black text-sm uppercase tracking-widest px-5 py-3 text-center">Join Now</a>
        </div>
      )}
    </header>
  );
}

/* ── hero (photo) ────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1800&h=1200&fit=crop&q=90"
          alt="Apex Fitness athlete"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlay + gold tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        {/* Gold glow from bottom-right */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#FFD700]/10 blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 w-full">
        {/* Gold label */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="w-12 h-[2px] bg-[#FFD700]" />
          <span data-cg-el="hero_eyebrow" className="font-body text-[#FFD700] uppercase tracking-[0.3em] text-sm">Houston, TX · Est. 2012</span>
        </div>

        <h1 data-cg-el="hero_headline_1" className="font-heading font-black text-[clamp(3.5rem,10vw,9.5rem)] text-white uppercase leading-none mb-6 gold-text-glow">
          WHERE<br /><span className="text-[#FFD700]">LEGENDS</span><br />ARE BUILT.
        </h1>

        <p data-cg-el="hero_subtitle" className="font-body text-lg text-[#888888] max-w-lg mb-10 leading-relaxed">
          Houston's premier strength & conditioning facility. Serious equipment, elite coaching, and a culture built on results.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href={`${koriva.baseUrl}/book?slug=${koriva.gymSlug}`} className="bg-[#FFD700] hover:bg-[#B8970A] text-[#0A0A0A] font-heading font-black text-lg uppercase tracking-widest px-10 py-4 transition-colors inline-flex items-center gap-3">
            Start For Free <ArrowRight size={18} />
          </a>
          <a href="#classes" className="border border-white/20 hover:border-[#FFD700]/60 text-white font-heading font-bold text-lg uppercase tracking-wider px-10 py-4 transition-colors">
            See Programs
          </a>
        </div>

        {/* Inline social proof */}
        <div className="flex items-center gap-6 mt-12">
          <div className="flex -space-x-3">
            {[
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop',
              'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop',
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop',
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop',
            ].map((src, i) => (
              <Image key={i} src={src} alt="member" width={36} height={36} className="rounded-full border-2 border-[#0A0A0A] object-cover" />
            ))}
          </div>
          <div>
            <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-[#FFD700]" fill="#FFD700" />)}</div>
            <p className="font-body text-xs text-[#888888] mt-0.5">Rated 4.9 by 300+ members</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── stats ───────────────────────────────────────────────────────────────── */
function StatsBar() {
  return (
    <section className="border-y border-[#FFD700]/20 bg-[#141414] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 80} className="text-center">
            <p className="font-heading text-5xl font-black text-[#FFD700]">{s.value}<span className="text-3xl">{s.unit}</span></p>
            <p className="font-body text-[#888888] text-sm mt-1 uppercase tracking-wider">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── about / split ───────────────────────────────────────────────────────── */
function About() {
  return (
    <section className="py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=900&fit=crop&q=80"
              alt="Training at Apex"
              width={600}
              height={700}
              className="object-cover w-full"
            />
            {/* Gold corner accent */}
            <div className="absolute -bottom-4 -right-4 w-40 h-40 border-r-4 border-b-4 border-[#FFD700] pointer-events-none" />
            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 bg-[#FFD700] text-[#0A0A0A] font-heading font-black text-center px-5 py-4">
              <p className="text-3xl">12+</p>
              <p className="text-xs uppercase tracking-wider">Years Strong</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <span className="font-body text-[#FFD700] uppercase tracking-[0.3em] text-sm">About Apex</span>
          <h2 className="font-heading font-black text-[clamp(2.5rem,5vw,4.5rem)] text-white uppercase mt-4 mb-6">
            Not a Gym.<br />A Proving Ground.
          </h2>
          <p className="font-body text-[#888888] text-lg leading-relaxed mb-6">
            Apex Fitness was founded in 2012 with one belief: every person who walks through our doors deserves elite-level coaching — regardless of their starting point.
          </p>
          <p className="font-body text-[#888888] text-lg leading-relaxed mb-10">
            No gimmicks. No trending fads. Just science-backed programming, hands-on coaching, and a community that shows up.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {['Elite Equipment', 'Science-Based Programs', 'Results Guaranteed', 'Community Culture', 'Open 7 Days', 'No Long Contracts'].map(f => (
              <div key={f} className="flex items-center gap-3">
                <Check size={14} className="text-[#FFD700] shrink-0" />
                <span className="font-body text-sm text-white">{f}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── classes ─────────────────────────────────────────────────────────────── */
function Classes() {
  return (
    <section id="classes" className="py-28 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <span className="font-body text-[#FFD700] uppercase tracking-[0.3em] text-sm">Training Programs</span>
          <h2 className="font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white uppercase mt-2 mb-12">Our Programs</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((c, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="group bg-[#0A0A0A] border border-[#1E1E1E] hover:border-[#FFD700]/40 transition-all duration-300 overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <Image src={c.image} alt={c.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:640px) 100vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 to-transparent" />
                  <div className="absolute top-3 right-3 bg-[#FFD700] text-[#0A0A0A] font-heading font-black text-xs uppercase px-2 py-1">{c.level}</div>
                  <div className="absolute bottom-3 left-4">
                    <span className="font-body text-xs text-white/60 border border-white/20 px-2 py-0.5">{c.duration}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-black text-xl text-white uppercase mb-2">{c.name}</h3>
                  <p className="font-body text-sm text-[#888888] leading-relaxed">{c.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <a href={`${koriva.baseUrl}/schedule?slug=${koriva.gymSlug}`} className="inline-flex items-center gap-3 border border-[#FFD700]/40 text-[#FFD700] hover:bg-[#FFD700] hover:text-[#0A0A0A] font-heading font-black text-base uppercase tracking-widest px-10 py-4 transition-colors">
              View Full Schedule <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── coaches ─────────────────────────────────────────────────────────────── */
function Coaches() {
  return (
    <section id="coaches" className="py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <span className="font-body text-[#FFD700] uppercase tracking-[0.3em] text-sm">Expert Trainers</span>
          <h2 className="font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white uppercase mt-2 mb-12">Your Coaches</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((c, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group relative overflow-hidden">
                <div className="relative h-[480px]">
                  <Image src={c.image} alt={c.name} fill className="object-cover group-hover:scale-105 transition-transform duration-600" sizes="(max-width:768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
                  {/* Gold border bottom on hover */}
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-[#FFD700] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                </div>
                <div className="bg-[#141414] p-6 border border-[#1E1E1E] group-hover:border-[#FFD700]/40 transition-colors">
                  <h3 className="font-heading font-black text-2xl text-white uppercase">{c.name}</h3>
                  <p className="font-body text-[#FFD700] text-sm uppercase tracking-wider mb-3">{c.specialty}</p>
                  <p className="font-body text-sm text-[#888888] leading-relaxed">{c.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── testimonials ────────────────────────────────────────────────────────── */
function Testimonials() {
  return (
    <section className="py-28 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <span className="font-body text-[#FFD700] uppercase tracking-[0.3em] text-sm">Member Results</span>
          <h2 className="font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white uppercase mt-2 mb-12">Real People. Real Gains.</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-[#0A0A0A] border border-[#1E1E1E] p-8 flex flex-col h-full">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-[#FFD700]" fill="#FFD700" />)}
                </div>
                <blockquote className="font-body text-white text-base leading-relaxed flex-1 mb-6 italic">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="flex items-center gap-4 pt-6 border-t border-[#1E1E1E]">
                  <Image src={t.image} alt={t.name} width={48} height={48} className="rounded-full object-cover ring-2 ring-[#FFD700]/40" />
                  <div>
                    <p className="font-heading font-black text-white uppercase">{t.name}</p>
                    <p className="font-body text-xs text-[#888888] uppercase tracking-wider">{t.title}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── pricing ─────────────────────────────────────────────────────────────── */
function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <span className="font-body text-[#FFD700] uppercase tracking-[0.3em] text-sm">Membership Options</span>
          <h2 className="font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white uppercase mt-2 mb-12">Invest in Yourself</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className={`relative flex flex-col h-full p-8 ${p.highlight ? 'bg-[#FFD700]' : 'bg-[#141414] border border-[#1E1E1E]'}`}>
                {p.highlight && <div className="absolute -top-3 left-8 bg-[#0A0A0A] text-[#FFD700] font-heading font-black text-xs uppercase tracking-wider px-4 py-1 border border-[#FFD700]/20">Most Popular</div>}
                <h3 className={`font-heading font-black text-2xl uppercase mb-2 ${p.highlight ? 'text-[#0A0A0A]' : 'text-white'}`}>{p.name}</h3>
                <div className="mb-6">
                  <span className={`font-heading font-black text-5xl ${p.highlight ? 'text-[#0A0A0A]' : 'text-[#FFD700]'}`}>{p.price}</span>
                  <span className={`font-body text-sm ml-2 ${p.highlight ? 'text-[#0A0A0A]/60' : 'text-[#888888]'}`}>{p.period}</span>
                </div>
                <ul className="flex-1 space-y-3 mb-8">
                  {p.features.map(f => (
                    <li key={f} className={`flex items-center gap-3 font-body text-sm ${p.highlight ? 'text-[#0A0A0A]' : 'text-[#888888]'}`}>
                      <Check size={14} className={p.highlight ? 'text-[#0A0A0A]' : 'text-[#FFD700]'} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={`${koriva.baseUrl}/book?slug=${koriva.gymSlug}`}
                  className={`font-heading font-black text-base uppercase tracking-widest px-6 py-4 text-center transition-colors ${p.highlight ? 'bg-[#0A0A0A] hover:bg-[#141414] text-[#FFD700]' : 'border border-[#FFD700]/40 text-[#FFD700] hover:bg-[#FFD700] hover:text-[#0A0A0A]'}`}>
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── footer ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0A0A] border-t border-[#FFD700]/20">
      {/* CTA banner */}
      <div className="bg-[#141414] border-b border-[#FFD700]/20 py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-heading font-black text-[20vw] text-[#FFD700]/[0.03] uppercase select-none">APEX</span>
        </div>
        <Reveal>
          <h2 className="font-heading font-black text-[clamp(2rem,6vw,5rem)] text-white uppercase mb-2">
            Your Legend<br /><span className="text-[#FFD700]">Starts Today.</span>
          </h2>
          <p className="font-body text-[#888888] mb-8 max-w-md mx-auto">First class is on us. Come see why 1,200+ members call Apex their home gym.</p>
          <a href={`${koriva.baseUrl}/book?slug=${koriva.gymSlug}`} className="inline-flex items-center gap-3 bg-[#FFD700] hover:bg-[#B8970A] text-[#0A0A0A] font-heading font-black text-xl uppercase tracking-widest px-12 py-5 transition-colors">
            Claim Free Class <ArrowRight size={20} />
          </a>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-heading font-black text-2xl uppercase mb-1"><span className="text-[#FFD700]">APEX</span> FITNESS</h3>
          <p className="font-body text-[#888888] text-sm mb-6">{studio.tagline}</p>
          <div className="flex gap-4">
            <a href={studio.social.instagram} className="text-[#888888] hover:text-[#FFD700] transition-colors"><Instagram size={20} /></a>
            <a href={studio.social.youtube} className="text-[#888888] hover:text-[#FFD700] transition-colors"><Youtube size={20} /></a>
            <a href={studio.social.facebook} className="text-[#888888] hover:text-[#FFD700] transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-black text-sm text-white uppercase tracking-wider mb-4">Find Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 font-body text-sm text-[#888888]"><MapPin size={14} className="text-[#FFD700] mt-0.5" />{studio.address.street}, {studio.address.city}, {studio.address.state}</li>
            <li className="flex items-center gap-3 font-body text-sm text-[#888888]"><Phone size={14} className="text-[#FFD700]" />{studio.phone}</li>
            <li className="flex items-center gap-3 font-body text-sm text-[#888888]"><Mail size={14} className="text-[#FFD700]" />{studio.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-black text-sm text-white uppercase tracking-wider mb-4">Hours</h4>
          <ul className="space-y-2">
            {Object.entries(studio.hours).map(([d, h]) => (
              <li key={d} className="flex items-center gap-3 font-body text-sm text-[#888888]"><Clock size={12} className="text-[#FFD700]" /><span className="text-white">{d}:</span> {h}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[#FFD700]/10 py-6 text-center">
        <p className="font-body text-xs text-[#888888]">© 2026 Apex Fitness. Powered by <span className="text-[#FFD700]">Koriva</span>.</p>
      </div>
    </footer>
  );
}

/* ── page ────────────────────────────────────────────────────────────────── */
export default function ApexPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Classes />
        <Coaches />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
