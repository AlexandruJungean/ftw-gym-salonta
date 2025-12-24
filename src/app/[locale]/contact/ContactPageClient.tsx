'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { CONTACT_INFO, WORKING_HOURS } from '@/lib/constants';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/getDictionary';

interface ContactPageClientProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function ContactPageClient({ locale, dictionary }: ContactPageClientProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/10 via-transparent to-transparent" />
        
        <div className="container-custom relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl mb-6">
              <span className="text-gradient">{dictionary.contact.title}</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              {dictionary.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-[var(--bg-darker)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="card">
                <h2 className="text-2xl font-bold text-white mb-8">
                  {locale === 'ro' ? 'Trimite-ne un mesaj' : locale === 'hu' ? 'Küldj üzenetet' : 'Send us a message'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="form-label">{dictionary.contact.name}</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="form-input"
                      placeholder={dictionary.contact.name}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label">{dictionary.contact.email}</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="form-input"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="form-label">{dictionary.contact.phone}</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="form-input"
                      placeholder="+40 7XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">{dictionary.contact.message}</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="form-input resize-none"
                      placeholder={dictionary.contact.message}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {dictionary.contact.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {dictionary.contact.send}
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400"
                    >
                      <CheckCircle className="w-5 h-5" />
                      {dictionary.contact.success}
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400"
                    >
                      <AlertCircle className="w-5 h-5" />
                      {dictionary.contact.error}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group hover:border-[var(--primary)]"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] transition-colors">
                    <MapPin className="w-6 h-6 text-[var(--primary)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{dictionary.contact.address}</h3>
                  <p className="text-[var(--text-secondary)] text-sm">{CONTACT_INFO.address}</p>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="card group hover:border-[var(--primary)]"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] transition-colors">
                    <Phone className="w-6 h-6 text-[var(--primary)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">
                    {locale === 'ro' ? 'Telefon' : locale === 'hu' ? 'Telefon' : 'Phone'}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm">{CONTACT_INFO.phone}</p>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="card group hover:border-[var(--primary)]"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] transition-colors">
                    <Mail className="w-6 h-6 text-[var(--primary)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-[var(--text-secondary)] text-sm">{CONTACT_INFO.email}</p>
                </a>

                <div className="card">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{dictionary.contact.schedule}</h3>
                  <p className="text-[var(--text-secondary)] text-sm">
                    {dictionary.schedule.monday}-{dictionary.schedule.friday}: {WORKING_HOURS.weekdays}
                  </p>
                  <p className="text-[var(--text-secondary)] text-sm">
                    {dictionary.schedule.saturday}: {WORKING_HOURS.saturday}
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="aspect-video rounded-2xl overflow-hidden border border-[var(--border-color)]">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=FitWorld+Gym+Salonta&zoom=15`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

