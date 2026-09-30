import { ContactForm } from '@/components/forms/ContactForm';
import { Footer } from '@/components/layout/Footer';
import { Navigation } from '@/components/layout/Navigation';
import { EvidenceStory } from '@/components/sections/EvidenceStory';
import { MedtechJourney } from '@/components/sections/MedtechJourney';
import { MetricsBand } from '@/components/sections/MetricsBand';
import { NetworkCapability } from '@/components/sections/NetworkCapability';
import { ServiceArchitecture } from '@/components/sections/ServiceArchitecture';
import { DeviceSystem } from '@/components/visuals/DeviceSystem';
import { EvidencePipeline } from '@/components/visuals/EvidencePipeline';
import { comparisonRows, engineeringDetails, evaluationItems, gettingStarted, serviceGroups } from '@/data/content';
import { siteConfig } from '@/lib/config/site';

const Arrow = () => <span className="arrow" aria-hidden="true">→</span>;

export default function HomePage() {
  return <><a className="skip-link" href="#main-content">Skip to main content</a><Navigation /><main id="main-content">
    <section id="home" className="hero"><div className="wide-shell hero-layout"><div className="hero-copy"><p className="eyebrow">VIVEKA MEDTECH</p><h1>From Device Claims <span>to Defensible</span> Evidence.</h1><p className="hero-lede">Engineering support, clinical study design, execution and evidence generation for medical devices, wearables and wellness technology.</p><div className="button-row"><a className="button button-primary" href="#contact">{siteConfig.primaryCta}<Arrow /></a><a className="button button-secondary" href="#approach">Explore our approach<Arrow /></a></div><div className="hero-proof"><span>TECHNICAL READINESS</span><i></i><span>CLINICAL VALIDATION</span><i></i><span>EVIDENCE</span></div></div><EvidencePipeline /></div></section>

    <section id="about" className="positioning-section"><div className="wide-shell positioning-layout"><div><p className="eyebrow">THE VIVEKA APPROACH</p><h2>Technology prepared for <em>real-world evidence.</em></h2></div><div className="positioning-detail"><p>Viveka Medtech connects engineering readiness with clinical-study discipline, helping teams translate a product claim into appropriate technical and clinical evidence.</p><div className="readiness-chain"><span>Technology</span><i></i><span>Engineering readiness</span><i></i><span>Clinical readiness</span><i></i><strong>Evidence</strong></div></div></div></section>

    <MetricsBand />
    <ServiceArchitecture />
    <MedtechJourney />

    <section className="section device-architecture-section"><div className="wide-shell device-architecture-layout"><div className="device-system-copy"><p className="eyebrow">DEVICE SYSTEM</p><h2>The device is more than the hardware.</h2><p>Modern MedTech evaluation may involve sensors, firmware, algorithms, data capture, reference standards, human interaction, clinical endpoints and real-world use.</p><ul>{engineeringDetails.map((item) => <li key={item}>{item}</li>)}</ul></div><DeviceSystem /></div></section>

    <section className="section specification-section"><div className="wide-shell"><div className="section-intro-row specification-heading"><div><p className="eyebrow">TECHNICAL DELIVERY</p><h2>Specification-led support, from device readiness to reporting.</h2></div><p>Each workstream is structured around the deliverables that make a study more defensible—not a generic service menu.</p></div><div className="specification-ledger">{serviceGroups.map((group) => <article key={group.id}><header><span>{group.number}</span><div><p>{group.title}</p><small>{group.intro}</small></div></header><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

    <section className="section evaluation-section"><div className="wide-shell"><div className="evaluation-heading"><p className="eyebrow">DEVICE EVALUATION</p><h2>Evaluate what the device actually does.</h2><p>From bench validation to performance in ordinary daily use, assessment is structured around how the device performs and how people use it.</p></div><div className="evaluation-system">{evaluationItems.map((item) => <article key={item.number}><span>{item.number}</span><div className="evaluation-rule" aria-hidden="true"></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>

    <section className="section comparison-section"><div className="wide-shell"><div className="comparison-heading"><p className="eyebrow">STUDY DESIGN</p><h2>Why a device study is not a small drug trial.</h2><p>Device and wearable evaluation needs design that accounts for a changing product, its use, and its sources of data.</p></div><div className="comparison-table-wrap" tabIndex={0} aria-label="Comparison of drug trials and device or wearable studies"><table><thead><tr><th scope="col">Dimension</th><th scope="col">Drug trial</th><th scope="col" className="device-column">Device or wearable study</th></tr></thead><tbody>{comparisonRows.map(([label, drug, device]) => <tr key={label}><th scope="row">{label}</th><td>{drug}</td><td className="device-column">{device}</td></tr>)}</tbody></table></div></div></section>

    <NetworkCapability />
    <EvidenceStory />

    <section className="section onboarding-section"><div className="wide-shell"><div className="onboarding-heading"><p className="eyebrow">HOW TO START</p><h2>Start with the claim you need to defend.</h2></div><ol className="onboarding-flow">{gettingStarted.map(([number, title, text]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol><a className="text-link" href="#contact">Start a conversation <Arrow /></a></div></section>

    <section id="contact" className="contact-section"><div className="wide-shell contact-layout"><div className="contact-intro"><p className="eyebrow">START A DEVICE DISCUSSION</p><h2>Have a device claim to defend?</h2><p>Let&apos;s discuss the evidence needed to support it.</p><ul><li><span>01</span>30-minute scoping conversation</li><li><span>02</span>Study design and realistic timeline</li><li><span>03</span>Indicative cost</li></ul></div><div className="form-surface"><div className="form-surface-head"><span>ENQUIRY</span><h3>Discuss your device</h3><p>Tell us what you are building and the claim you want to support.</p></div><ContactForm /></div></div></section>
  </main><Footer /></>;
}
