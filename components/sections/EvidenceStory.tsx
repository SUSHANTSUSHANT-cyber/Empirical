import { engagementSteps } from '@/data/content';

export function EvidenceStory() {
  return <section id="engagement" className="section evidence-story"><div className="wide-shell evidence-story-layout"><div className="evidence-story-copy"><p className="eyebrow">REPRESENTATIVE ENGAGEMENT</p><h2>From product claim to evidence.</h2><p>A consumer wellness wearable with a respiratory and environmental-health positioning had a working product, retail traction and a claim it needed to support.</p><p className="note">Representative of a documented engagement. No client identity or study outcome is stated.</p></div><ol className="evidence-chain">{engagementSteps.map((step) => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></div></section>;
}
