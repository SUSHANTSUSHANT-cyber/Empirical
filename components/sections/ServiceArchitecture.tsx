import { pillars } from '@/data/content';

export function ServiceArchitecture() {
  return <section id="services" className="section services-section"><div className="wide-shell"><div className="section-intro-row"><div><p className="eyebrow">SERVICE ARCHITECTURE</p><h2>One team across technical readiness and clinical evidence.</h2></div><p>Viveka Medtech brings clinical-study discipline to the full device-development-to-evidence journey.</p></div><div className="service-architecture">{pillars.map((pillar) => <article className={`service-plane ${pillar.tone}`} key={pillar.number}><div className="service-plane-head"><span>{pillar.number}</span><p>{pillar.eyebrow}</p></div><h3>{pillar.title}</h3><p className="service-plane-copy">{pillar.text}</p><ul>{pillar.capabilities.map((item) => <li key={item}>{item}</li>)}</ul><div className="service-plane-marker" aria-hidden="true"><i></i><i></i><i></i></div></article>)}</div></div></section>;
}
