import { metrics } from '@/data/content';

export function MetricsBand() {
  return <section className="metrics-band" aria-label="Network scale"><div className="wide-shell metrics-layout"><p className="metrics-kicker">Documented network scale</p><div className="metrics-grid">{metrics.map((metric) => <article className="metric" key={metric.label}><strong>{metric.value}</strong><div><p>{metric.label}</p><small>{metric.detail}</small></div></article>)}</div></div></section>;
}
