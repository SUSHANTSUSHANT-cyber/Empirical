export const metrics = [
  { value: '50+', label: 'Active hospital sites', detail: 'Across Tier I & II India' },
  { value: '250+', label: 'Principal investigators', detail: 'In the documented network' },
  { value: '15+', label: 'Academic & medical institutions', detail: 'Collaborating institutions' },
  { value: '~90 days', label: 'Typical regulatory approval', detail: 'Source-documented timeline' },
];

export const pillars = [
  { number: '01', title: 'Drug Trials', eyebrow: 'Clinical research heritage', text: 'Full-service operations for interventional studies in India, from first in human through post-marketing.', capabilities: ['Phase I to IV support', 'Regulatory & ethics management', 'Pharmacovigilance', 'Clinical data management'], tone: 'heritage' },
  { number: '02', title: 'Device Clinical Validation', eyebrow: 'Evidence programme', text: 'Study programmes for devices and wearables where performance, agreement and user behaviour require the right endpoints.', capabilities: ['ICH E6 & ISO 14155 protocols', 'Pilot & pivotal execution', 'Accuracy & comparative benchmarking', 'Home & real-world studies'], tone: 'validation' },
  { number: '03', title: 'Engineering Support', eyebrow: 'Technical readiness', text: 'The technical work that prepares a device for clinical study and creates supporting documentation.', capabilities: ['V&V planning', 'Bench testing', 'Sensor & algorithm characterisation', 'Human factors & risk support'], tone: 'engineering' },
];

export const journey = [
  { number: '01', code: 'DEVICE', title: 'Device & intended claim', duration: 'Starting point', text: 'Working device, data output and the claim to be supported.', deliverable: 'Evidence gap defined' },
  { number: '02', code: 'ENGINEERING', title: 'Engineering support', duration: 'Typical duration: 2–3 months', text: 'V&V planning, bench testing, characterisation, human factors and technical readiness.', deliverable: 'Study-ready device' },
  { number: '03', code: 'PROTOCOL', title: 'Protocol & study design', duration: 'Typical duration: ~2 months', text: 'Feasibility, endpoint mapping, protocol design, SAP, CRF and submission packages.', deliverable: 'Defensible study design' },
  { number: '04', code: 'PILOT', title: 'Pilot execution', duration: 'Typical duration: 4–6 months', text: 'Site activation, recruitment, monitoring, clinical data management and device logistics.', deliverable: 'Clean study data' },
  { number: '05', code: 'EVALUATION', title: 'Device evaluation', duration: 'Runs with pilot execution', text: 'Accuracy, precision, reliability, benchmarking, usability and clinical endpoints.', deliverable: 'Performance assessment' },
  { number: '06', code: 'EVIDENCE', title: 'Evidence package', duration: 'Typical duration: 1–2 months', text: 'Database lock, analysis, study reports, manuscripts, abstracts and dossiers.', deliverable: 'Defensible evidence' },
];

export const serviceGroups = [
  { id: 'engineering', number: '01', title: 'Engineering support', intro: 'Make the device, data output and documentation study-ready before recruitment opens.', items: ['Claim-to-test matrix & acceptance criteria', 'Bench testing against reference standards', 'Sensor accuracy & algorithm performance', 'Logging, timestamping, export & EDC readiness', 'Human factors & usability', 'ISO 14971 risk file & technical file support'] },
  { id: 'protocol', number: '02', title: 'Protocol & study design', intro: 'Translate product claims into measurable, defensible endpoints designed for submission.', items: ['Feasibility & endpoint mapping', 'Claim-to-endpoint alignment', 'ICH E6 & ISO 14155-aligned protocols', 'Statistical analysis plan & CRF design', 'Ethics & regulatory submission packages'] },
  { id: 'pilot', number: '03', title: 'Pilot execution', intro: 'Run pilots with trial discipline so useful data can be carried forward.', items: ['Site selection & activation', 'Ethics & regulatory coordination', 'Recruitment, monitoring & adaptive design support', 'Clinical data management with audit trail', 'Device shipment & accountability'] },
  { id: 'evidence', number: '04', title: 'Evidence generation', intro: 'Turn data into a decision-ready clinical and technical evidence package.', items: ['Database lock, query resolution & quality control', 'Statistical analysis to the pre-specified plan', 'Clinical study reports to ICH E3 where relevant', 'Manuscript drafts & congress abstracts', 'Regulatory dossiers & HTA summaries'] },
];

export const engineeringDetails = ['Sensor accuracy', 'Algorithm performance', 'Failure modes', 'Edge cases', 'Data logging', 'Timestamping', 'Data export', 'EDC readiness', 'Firmware freeze', 'Human factors'];

export const evaluationItems = [
  { number: '01', title: 'Accuracy', text: 'Accuracy and precision assessment.' },
  { number: '02', title: 'Reliability', text: 'Reliability and repeatability.' },
  { number: '03', title: 'Benchmarking', text: 'Head-to-head comparison against reference or competing devices.' },
  { number: '04', title: 'Usability', text: 'Assessment of device use and user interaction.' },
  { number: '05', title: 'Real-world evaluation', text: 'Home, ambulatory and real-world evaluation where appropriate.' },
];

export const comparisonRows = [
  ['Product', 'Fixed molecule', 'Can change through hardware, firmware, fit and use'],
  ['Endpoints', 'Clinical / biochemical', 'Accuracy, agreement, symptoms, behaviour and usability'],
  ['Comparator', 'Placebo / standard care', 'Reference / competing device / no device'],
  ['Blinding', 'Often achievable', 'Often more difficult'],
  ['Data', 'Site / laboratory', 'Device + patient-reported + clinical data'],
  ['Standards', 'ICH E6 and drug-development requirements', 'ISO 14155, ISO 14971 and human factors considerations'],
  ['Common failure', 'Product does not work', 'Device works, but the study may not have been designed appropriately to demonstrate it'],
];

export const institutions = ['AIIMS Delhi', 'Tata Memorial', 'Safdarjung', 'Max', 'Fortis', 'Manipal', 'Ruby Hall'];
export const capabilities = ['Pharmacovigilance & safety review', 'Genomics laboratory', 'Temperature-controlled depot & pharmacy', 'SUGAM & CTRI desk', 'Clinical data management with audit trail', 'National & international archiving'];
export const categories = ['Oncology / Precision Oncology', 'Respiratory / Environmental Health', 'Endocrinology / Metabolic', 'Cardiology', 'Nephrology', 'Wearables / Remote Monitoring', 'Digital Health / Decentralised Trials', 'Consumer Wellness'];

export const engagementSteps = [
  { number: '01', title: 'Product', text: 'Working consumer wellness wearable with retail traction.' },
  { number: '02', title: 'Claim', text: 'Environmental-health positioning requiring support.' },
  { number: '03', title: 'Endpoints', text: 'Respiratory symptom scores and exposure measures.' },
  { number: '04', title: 'Pilot', text: 'Site-managed proof-of-concept with real-time monitoring.' },
  { number: '05', title: 'Evaluation', text: 'Performance and usability benchmarking.' },
  { number: '06', title: 'Evidence', text: 'Analysis, clinical study report and manuscript draft.' },
];

export const gettingStarted = [
  ['01', 'Share your device specification', 'Tell us what the device does and the claim you want to support.'],
  ['02', 'Identify the evidence gap', 'We review what needs to be demonstrated and what closing the gap may require.'],
  ['03', 'Scope the study', 'A 30-minute scoping discussion can lead toward study design, a realistic timeline and indicative cost.'],
];
