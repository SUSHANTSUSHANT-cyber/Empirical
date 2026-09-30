export function DeviceSystem() {
  return <figure className="device-system-figure" data-animate aria-labelledby="device-system-title">
    <svg className="device-system-svg device-system-desktop" viewBox="0 0 820 560" role="img" aria-labelledby="device-system-title device-system-desc">
      <title id="device-system-title">Device system technical architecture</title><desc id="device-system-desc">A conceptual device sensor system connects to firmware, algorithms, data capture, reference standards, human interaction and clinical endpoints inside a real-world validation boundary.</desc>
      <path className="system-boundary" d="M52 58H768V500H52Z"/><text className="system-boundary-label" x="78" y="88">REAL-WORLD USE / VALIDATION ENVIRONMENT</text>
      <g className="system-links"><path d="M410 185V132H410V110"/><path d="M275 278H194"/><path d="M545 278H626"/><path d="M410 371V420"/><path d="M331 371 250 440"/><path d="M489 371 570 440"/></g>
      <g className="system-terminal firmware"><rect x="320" y="64" width="180" height="46" rx="5"/><text x="410" y="92">FIRMWARE</text></g>
      <g className="system-terminal reference"><rect x="70" y="245" width="124" height="66" rx="5"/><text x="132" y="272">REFERENCE</text><text x="132" y="291">STANDARDS</text></g>
      <g className="system-terminal algorithm"><rect x="626" y="245" width="124" height="66" rx="5"/><text x="688" y="272">ALGORITHMS</text><text x="688" y="291">& MODELS</text></g>
      <g className="system-terminal capture"><rect x="320" y="420" width="180" height="48" rx="5"/><text x="410" y="450">DATA CAPTURE</text></g>
      <g className="system-terminal human"><rect x="96" y="430" width="154" height="58" rx="5"/><text x="173" y="454">HUMAN</text><text x="173" y="474">INTERACTION</text></g>
      <g className="system-terminal endpoints"><rect x="570" y="430" width="154" height="58" rx="5"/><text x="647" y="454">CLINICAL</text><text x="647" y="474">ENDPOINTS</text></g>
      <g className="device-body"><rect x="275" y="185" width="270" height="186" rx="16"/><rect x="300" y="210" width="220" height="82" rx="8"/><path d="M318 260h24l14-20 19 37 18-25h33"/><circle cx="327" cy="232" r="7"/><circle cx="365" cy="232" r="7"/><circle cx="403" cy="232" r="7"/><circle cx="441" cy="232" r="7"/><circle cx="479" cy="232" r="7"/><path d="M313 320h60m17 0h44m17 0h55"/><text x="410" y="327">SENSOR SYSTEM</text><text x="342" y="351">SENSORS</text><text x="410" y="351">DATA</text><text x="476" y="351">ALGORITHM</text></g>
      <g className="system-port"><circle cx="410" cy="185" r="7"/><circle cx="275" cy="278" r="7"/><circle cx="545" cy="278" r="7"/><circle cx="410" cy="371" r="7"/><circle cx="331" cy="371" r="7"/><circle cx="489" cy="371" r="7"/></g>
    </svg>
    <svg className="device-system-svg device-system-mobile" viewBox="0 0 360 680" role="img" aria-labelledby="device-system-mobile-title device-system-mobile-desc">
      <title id="device-system-mobile-title">Device system technical architecture</title><desc id="device-system-mobile-desc">A mobile vertical view of a device sensor system connected to its technical and clinical dimensions.</desc><defs><marker id="system-mobile-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 8 4 0 8Z" fill="#E97132" /></marker></defs>
      <rect className="system-mobile-boundary" x="20" y="20" width="320" height="640" rx="12"/><text x="180" y="48">REAL-WORLD VALIDATION ENVIRONMENT</text>
      <g className="device-body mobile"><rect x="62" y="77" width="236" height="126" rx="12"/><rect x="82" y="96" width="196" height="54" rx="6"/><path d="M98 124h22l12-15 16 28 15-20h37"/><circle cx="108" cy="112" r="5"/><circle cx="140" cy="112" r="5"/><circle cx="172" cy="112" r="5"/><circle cx="204" cy="112" r="5"/><text x="180" y="173">SENSOR / DATA / ALGORITHM</text></g>
      <path className="system-mobile-flow" d="M180 204V238M180 296V330M180 388V422M180 480V514" markerEnd="url(#system-mobile-arrow)"/>
      <g className="system-mobile-terminal"><rect x="56" y="238" width="248" height="58" rx="5"/><text x="180" y="273">FIRMWARE + REFERENCE STANDARDS</text></g>
      <g className="system-mobile-terminal"><rect x="56" y="330" width="248" height="58" rx="5"/><text x="180" y="365">ALGORITHMS + DATA CAPTURE</text></g>
      <g className="system-mobile-terminal"><rect x="56" y="422" width="248" height="58" rx="5"/><text x="180" y="457">HUMAN INTERACTION</text></g>
      <g className="system-mobile-terminal"><rect x="56" y="514" width="248" height="58" rx="5"/><text x="180" y="549">CLINICAL ENDPOINTS</text></g>
      <text className="system-mobile-note" x="180" y="618">Structured for real-world use</text>
    </svg><figcaption>Technical architecture evaluated as a connected system—not isolated components.</figcaption>
  </figure>;
}
