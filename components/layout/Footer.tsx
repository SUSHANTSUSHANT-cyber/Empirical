import { siteConfig } from '@/lib/config/site';

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div><img className="footer-logo" src="/viveka-medtech-logo.svg" alt="Viveka Medtech" /><p className="footer-statement">{siteConfig.tagline}</p></div>
    <div><p className="footer-label">Explore</p>{siteConfig.navigation.slice(1).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div>
    <div><p className="footer-label">Start a conversation</p><p className="footer-statement">Tell us what you are building and the evidence you need to generate.</p><a className="footer-contact-link" href="#contact">{siteConfig.primaryCta} →</a></div>
  </div><div className="container footer-bottom">© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</div></footer>;
}
