'use client';

import { useEffect, useState } from 'react';
import { siteConfig } from '@/lib/config/site';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    const sections = siteConfig.navigation.map(({ href }) => document.querySelector(href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveId(visible.target.id);
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, .2, .5] });
    sections.forEach((section) => observer.observe(section));
    window.addEventListener('keydown', closeOnEscape);
    return () => { observer.disconnect(); window.removeEventListener('keydown', closeOnEscape); };
  }, []);

  return <header className="site-header"><div className="nav-shell">
    <a className="brand" href="#home" aria-label={`${siteConfig.brandName} home`}><img src="/Viveka_Medtech_logo.png" alt="Viveka Medtech" /></a>
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><span className="sr-only">{open ? 'Close' : 'Open'} navigation</span><span aria-hidden="true"></span><span aria-hidden="true"></span></button>
    <nav id="primary-navigation" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
      {siteConfig.navigation.map((item) => <a key={item.href} href={item.href} aria-current={activeId === item.href.slice(1) ? 'page' : undefined} onClick={() => setOpen(false)}>{item.label}</a>)}
      <a className="button button-primary nav-cta" href="#contact" onClick={() => setOpen(false)}>{siteConfig.primaryCta}</a>
    </nav>
  </div></header>;
}
