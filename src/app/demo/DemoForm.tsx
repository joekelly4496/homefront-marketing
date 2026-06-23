'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const inputClasses =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-100';

const labelClasses = 'mb-1.5 block text-sm font-medium text-slate-700';

export function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    homesPerYear: '',
    hearAboutUs: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          homesPerYear: '',
          hearAboutUs: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
          <CheckCircle2 className="h-7 w-7 text-emerald-600" aria-hidden="true" />
        </span>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">
          Demo request received
        </h2>
        <p className="mt-3 text-base text-slate-600">
          We’ll reach out within one business day to schedule your demo. No
          pressure, no obligation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClasses}>
            Company name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="homesPerYear" className={labelClasses}>
          How many homes do you close per year? *
        </label>
        <select
          id="homesPerYear"
          name="homesPerYear"
          required
          value={formData.homesPerYear}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select…</option>
          <option value="1-10">1–10</option>
          <option value="11-25">11–25</option>
          <option value="26-50">26–50</option>
          <option value="51-100">51–100</option>
          <option value="100+">100+</option>
        </select>
      </div>

      <div>
        <label htmlFor="hearAboutUs" className={labelClasses}>
          How did you hear about us?
        </label>
        <select
          id="hearAboutUs"
          name="hearAboutUs"
          value={formData.hearAboutUs}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select…</option>
          <option value="Google">Google</option>
          <option value="Referral">Referral</option>
          <option value="Social Media">Social media</option>
          <option value="Trade Show">Trade show</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Anything else you’d like us to know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-y`}
        />
      </div>

      {status === 'error' && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          Something went wrong. Please try again or email us directly at
          joekelly4496@gmail.com.
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === 'sending'}
        className="w-full"
      >
        {status === 'sending' ? 'Sending…' : 'Request my demo'}
      </Button>

      <p className="text-center text-sm text-slate-500">
        We’ll reach out within one business day. No pressure, no obligation.
      </p>
    </form>
  );
}
