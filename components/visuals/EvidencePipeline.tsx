export function EvidencePipeline() {
  return <figure className="pipeline-figure" data-animate aria-labelledby="pipeline-title">
    <svg className="pipeline-svg pipeline-svg-desktop" viewBox="0 0 760 560" role="img" aria-labelledby="pipeline-title pipeline-desc">
      <title id="pipeline-title">Device to evidence pipeline</title><desc id="pipeline-desc">A sensor device generates a measured signal, passes through engineering verification and clinical validation, and produces an evidence package.</desc>
      <defs><marker id="pipeline-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 8 4 0 8Z" fill="#E97132" /></marker></defs>
      <g className="pipeline-grid"><path d="M58 75H702M58 178H702M58 281H702M58 384H702M58 487H702"/><path d="M58 75V487M219 75V487M380 75V487M541 75V487M702 75V487"/></g>
      <g className="pipeline-device"><rect x="72" y="208" width="132" height="148" rx="12"/><rect x="92" y="233" width="92" height="58" rx="5"/><path d="M92 315h25l10-14 15 27 14-19h28"/><circle cx="107" cy="252" r="5"/><circle cx="139" cy="252" r="5"/><circle cx="169" cy="252" r="5"/><path d="M113 356v26m25-26v26m25-26v26"/><text x="72" y="178">01 / DEVICE</text><text className="pipeline-caption" x="72" y="410">Sensor system</text></g>
      <g className="pipeline-flow"><path d="M204 282H292" markerEnd="url(#pipeline-arrow)"/><path d="M380 282H458" markerEnd="url(#pipeline-arrow)"/><path d="M547 282H625" markerEnd="url(#pipeline-arrow)"/></g>
      <g className="pipeline-engineering"><rect x="292" y="212" width="88" height="140" rx="8"/><path d="M312 252h48m-48 25h48m-48 25h48"/><path d="m316 318 12 11 29-30"/><text x="292" y="178">02 / ENGINEERING</text><text className="pipeline-caption" x="292" y="410">Verify / characterise</text></g>
      <g className="pipeline-clinical"><rect x="458" y="212" width="89" height="140" rx="8"/><path d="M478 249h49m-25-24v48"/><path d="M478 303c12-12 24-12 36 0s20 12 25 0"/><path d="m482 325 11 10 30-30"/><text x="458" y="178">03 / CLINICAL</text><text className="pipeline-caption" x="458" y="410">Measured endpoints</text></g>
      <g className="pipeline-evidence"><path d="M625 220h54l22 22v88l-22 22h-54l-22-22v-88Z"/><path d="M642 257h40m-40 22h40m-40 22h27"/><path d="m647 319 9 9 21-21"/><text x="603" y="178">04 / EVIDENCE</text><text className="pipeline-caption" x="603" y="410">Decision-ready package</text></g>
      <g className="pipeline-annotation"><text x="72" y="89">SIGNAL ACQUISITION</text><text x="292" y="89">TECHNICAL READINESS</text><text x="458" y="89">VALIDATION CHECKPOINT</text><text x="603" y="89">DEFENSIBLE OUTPUT</text><path d="M72 449H701"/><circle cx="204" cy="449" r="4"/><circle cx="380" cy="449" r="4"/><circle cx="547" cy="449" r="4"/><circle cx="625" cy="449" r="4"/></g>
    </svg>
    <svg className="pipeline-svg pipeline-svg-mobile" viewBox="0 0 360 620" role="img" aria-labelledby="pipeline-mobile-title pipeline-mobile-desc">
      <title id="pipeline-mobile-title">Device to evidence pipeline</title><desc id="pipeline-mobile-desc">A vertical sequence from device to engineering to clinical validation to evidence.</desc><defs><marker id="pipeline-mobile-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 8 4 0 8Z" fill="#E97132" /></marker></defs>
      <path className="pipeline-mobile-line" d="M180 123V190M180 274V341M180 425V492" markerEnd="url(#pipeline-mobile-arrow)"/>
      <g className="pipeline-mobile-node"><rect x="52" y="42" width="256" height="81" rx="8"/><path d="M78 83h36l9-12 13 23 13-18h31"/><text x="174" y="75">DEVICE</text><text x="174" y="99">Sensor signal</text></g>
      <g className="pipeline-mobile-node"><rect x="52" y="193" width="256" height="81" rx="8"/><path d="M79 223h45m-45 18h45m-45 18h31"/><text x="174" y="226">ENGINEERING</text><text x="174" y="250">Verify / characterise</text></g>
      <g className="pipeline-mobile-node"><rect x="52" y="344" width="256" height="81" rx="8"/><path d="M78 384h46m-23-20v40"/><text x="174" y="377">CLINICAL VALIDATION</text><text x="174" y="401">Measured endpoints</text></g>
      <g className="pipeline-mobile-node"><rect x="52" y="495" width="256" height="81" rx="8"/><path d="M78 525h45m-45 18h45m-45 18h28"/><text x="174" y="528">EVIDENCE</text><text x="174" y="552">Decision-ready package</text></g>
    </svg><figcaption>From signal acquisition to a defensible evidence package.</figcaption>
  </figure>;
}
