'use client';

import { FormEvent, type ChangeEvent, useState } from 'react';
import { leadFormConfig } from '@/lib/config/lead-form';

type Errors = Record<string, string>;
const initial = { name: '', company: '', email: '', phone: '', technology: '', stage: '', claim: '', message: '', website: '' };

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus('sending'); setErrors({}); setMessage('');
    try {
      const response = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
      const result = await response.json() as { success?: boolean; error?: string; errors?: Errors };
      if (!response.ok) { setErrors(result.errors || {}); setMessage(result.error || 'We could not send your enquiry. Please try again.'); setStatus('error'); return; }
      setValues(initial); setStatus('success'); setMessage('Thank you. Your enquiry has been received.');
    } catch { setStatus('error'); setMessage('Your connection was interrupted. Please try again.'); }
  }

  return <form className="contact-form" onSubmit={submit} noValidate aria-busy={status === 'sending'}>
    <div className="form-grid">
      {leadFormConfig.map((field) => {
        const error = errors[field.name];
        const errorId = `${field.name}-error`;
        const sharedProps = { id: field.name, name: field.name, required: field.required, value: values[field.name], autoComplete: field.autoComplete, 'aria-invalid': Boolean(error), 'aria-describedby': error ? errorId : undefined, onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setValues({ ...values, [field.name]: event.target.value }) };
        return <div className={`${field.type === 'textarea' ? 'form-field field-wide' : 'form-field'}${error ? ' has-error' : ''}`} key={field.name}>
          <label htmlFor={field.name}>{field.label}{field.required && <span aria-hidden="true"> *</span>}</label>
          {field.type === 'select' ? <select {...sharedProps}><option value="">Select stage</option>{field.options?.map((option) => <option key={option}>{option}</option>)}</select>
          : field.type === 'textarea' ? <textarea {...sharedProps} rows={4} />
          : <input {...sharedProps} type={field.type} />}
          {error && <p id={errorId} className="form-error">{error}</p>}
        </div>;
      })}
      <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => setValues({ ...values, website: event.target.value })}/></div>
    </div>
    <button className="button button-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending enquiry…' : 'Discuss Your Device'}</button>
    {message && <p className={status === 'success' ? 'form-status success' : 'form-status error'} role="status" aria-live="polite">{message}</p>}
  </form>;
}
