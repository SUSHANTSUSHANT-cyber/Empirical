import { journey } from '@/data/content';

export function MedtechJourney() {
  return <section id="approach" className="section journey-section"><div className="wide-shell"><div className="journey-heading"><div><p className="eyebrow">THE MEDTECH JOURNEY</p><h2>One connected route from intended claim to evidence.</h2></div><p>Stages can be purchased independently, or managed as one programme under one contract, one project manager and one timeline.</p></div><ol className="journey-system">{journey.map((stage) => <li key={stage.number}><div className="journey-node"><span>{stage.number}</span><b>{stage.code}</b></div><article><p className="journey-duration">{stage.duration}</p><h3>{stage.title}</h3><p>{stage.text}</p><small><b>DELIVERABLE</b> {stage.deliverable}</small></article></li>)}</ol><p className="journey-note">Typical timings are indicative and do not imply that every project follows the same duration.</p></div></section>;
}
