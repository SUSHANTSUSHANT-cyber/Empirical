export function DeviceSystem() {
  const terminals = [
    { code: 'FW', title: 'Firmware', desc: 'Version control & freeze' },
    { code: 'REF', title: 'Reference Standards', desc: 'Bench & clinical reference' },
    { code: 'ALG', title: 'Algorithms & Models', desc: 'Performance characterisation' },
    { code: 'DC', title: 'Data Capture', desc: 'Logging, timestamping, export' },
    { code: 'HF', title: 'Human Interaction', desc: 'Usability & human factors' },
    { code: 'CE', title: 'Clinical Endpoints', desc: 'Measured study outcomes' },
  ];

  return (
    <div
      className="device-system-visual"
      role="figure"
      aria-label="Device system technical architecture: a sensor system connected to firmware, reference standards, algorithms, data capture, human interaction and clinical endpoints within a real-world validation environment"
    >
      <p className="system-label">Real-world validation environment</p>

      {/* Central device node */}
      <div className="device-card device-card-central">
        <p className="device-card-title">Sensor System</p>
        <p className="device-card-subtitle">Sensors · Data · Algorithm</p>
      </div>

      {/* Surrounding terminal cards */}
      <div className="device-system-grid">
        {terminals.map((t) => (
          <div className="device-card" key={t.code}>
            <span className="device-card-icon">{t.code}</span>
            <p className="device-card-title">{t.title}</p>
            <p className="device-card-desc">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
