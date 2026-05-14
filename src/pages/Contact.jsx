import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ScrollReveal, Accordion } from '../components/ui/SharedUI';
import { faqData, doctors } from '../data/siteData';
import { MapPin, Phone, MessageCircle, Mail, Clock, Car, Accessibility, AlertTriangle, CheckCircle } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email().optional().or(z.literal('')),
  doctor: z.string().optional(),
  treatment: z.string().optional(),
  date: z.string().optional(),
  timeSlot: z.string().optional(),
  patientType: z.string().optional(),
  notes: z.string().optional(),
});

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = () => setSubmitted(true);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy-deep to-navy-mid min-h-[40vh] flex items-center text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <h1 className="font-display text-4xl md:text-[68px] font-light text-white-soft leading-tight mb-6">Let's Begin Your <span className="text-gold-light italic">Smile Journey</span></h1>
          <p className="font-body text-lg text-white-muted">We're here Monday to Sunday, 9AM to 8PM. Walk-ins welcome.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-navy-deep">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Col 1 - Contact Info */}
            <ScrollReveal>
              <div className="space-y-6">
                {[
                  { icon: <MapPin size={20} />, label: '404, Dental Plaza, MG Road', sub: 'Bangalore — 560001' },
                  { icon: <Phone size={20} />, label: '+91 98765 43210', sub: 'Primary Line', isPhone: true },
                  { icon: <MessageCircle size={20} />, label: 'WhatsApp', sub: 'Chat Now', isWa: true },
                  { icon: <Mail size={20} />, label: 'hello@smileaura.in', sub: 'Email Us' },
                  { icon: <Clock size={20} />, label: 'Mon–Sat: 9AM–8PM', sub: 'Sun: 10AM–6PM' },
                  { icon: <Car size={20} />, label: 'Parking Available', sub: '' },
                  { icon: <Accessibility size={20} />, label: 'Wheelchair Accessible', sub: '' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-accent/10 flex items-center justify-center text-teal-accent flex-shrink-0">{item.icon}</div>
                    <div>
                      {item.isPhone ? <a href="tel:+919876543210" className="font-mono text-xl text-gold-primary hover:text-gold-light block">{item.label}</a>
                        : item.isWa ? <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="font-heading font-semibold text-white-soft hover:text-gold-primary">{item.label}</a>
                        : <p className="font-body text-white-soft text-sm">{item.label}</p>}
                      {item.sub && <p className="font-mono text-[11px] text-white-muted">{item.sub}</p>}
                    </div>
                  </div>
                ))}
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] text-white-soft font-heading font-bold text-center py-4 rounded-xl hover:bg-[#20b858] transition-colors mt-6">
                  💬 Chat on WhatsApp for Instant Booking
                </a>
              </div>
            </ScrollReveal>

            {/* Col 2 - Form */}
            <ScrollReveal delay={0.15}>
              <div className="glass-card rounded-2xl p-8 border border-gold-border">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={48} className="text-gold-primary mx-auto mb-4" />
                    <h3 className="font-heading font-bold text-xl text-white-soft mb-2">Appointment Request Sent!</h3>
                    <p className="font-body text-white-muted text-sm">We'll confirm via WhatsApp within 15 minutes.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <h3 className="font-heading font-bold text-lg text-white-soft mb-2">Book Your Appointment</h3>
                    {[
                      { name: 'name', label: 'Full Name', type: 'text' },
                      { name: 'phone', label: 'Mobile Number (+91)', type: 'tel' },
                      { name: 'email', label: 'Email (optional)', type: 'email' },
                    ].map(f => (
                      <div key={f.name}>
                        <label className="font-body text-sm text-white-muted block mb-1">{f.label}</label>
                        <input {...register(f.name)} type={f.type} className="w-full bg-navy-mid border-b-2 border-overlay-10 focus:border-gold-primary px-4 py-3 rounded-lg text-white-soft font-body outline-none transition-colors" />
                        {errors[f.name] && <p className="text-red-400 text-xs mt-1">{errors[f.name].message}</p>}
                      </div>
                    ))}
                    <div>
                      <label className="font-body text-sm text-white-muted block mb-1">Preferred Doctor</label>
                      <select {...register('doctor')} className="w-full bg-navy-mid border-b-2 border-overlay-10 focus:border-gold-primary px-4 py-3 rounded-lg text-white-soft font-body outline-none">
                        <option value="">Any Available</option>
                        {doctors.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="font-body text-sm text-white-muted block mb-1">Treatment Interested In</label>
                      <select {...register('treatment')} className="w-full bg-navy-mid border-b-2 border-overlay-10 focus:border-gold-primary px-4 py-3 rounded-lg text-white-soft font-body outline-none">
                        <option value="">Select Treatment</option>
                        {['General Checkup', 'Teeth Whitening', 'Dental Implants', 'Braces/Invisalign', 'Veneers', 'Root Canal', 'Emergency'].map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="font-body text-sm text-white-muted block mb-1">Date</label>
                        <input {...register('date')} type="date" className="w-full bg-navy-mid border-b-2 border-overlay-10 focus:border-gold-primary px-4 py-3 rounded-lg text-white-soft font-body outline-none" />
                      </div>
                      <div>
                        <label className="font-body text-sm text-white-muted block mb-1">Time Slot</label>
                        <select {...register('timeSlot')} className="w-full bg-navy-mid border-b-2 border-overlay-10 focus:border-gold-primary px-4 py-3 rounded-lg text-white-soft font-body outline-none">
                          <option value="">Select</option>
                          <option value="morning">Morning 9–12</option>
                          <option value="afternoon">Afternoon 12–4</option>
                          <option value="evening">Evening 4–8</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="font-body text-sm text-white-muted block mb-2">Patient Type</label>
                      <div className="flex gap-3">
                        {['New Patient', 'Existing Patient'].map(t => (
                          <label key={t} className="flex-1">
                            <input {...register('patientType')} type="radio" value={t} className="sr-only peer" />
                            <div className="text-center py-2 rounded-lg border border-overlay-10 peer-checked:border-gold-primary peer-checked:bg-gold-primary/10 transition-all cursor-pointer font-heading text-sm text-white-soft">{t}</div>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="font-body text-sm text-white-muted block mb-1">Notes (optional)</label>
                      <textarea {...register('notes')} rows={3} className="w-full bg-navy-mid border-b-2 border-overlay-10 focus:border-gold-primary px-4 py-3 rounded-lg text-white-soft font-body outline-none resize-none" />
                    </div>
                    <button type="submit" className="w-full gold-shimmer-btn font-heading font-bold py-4 rounded-xl text-lg">Confirm My Appointment</button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Col 3 - Map & Emergency */}
            <ScrollReveal delay={0.3}>
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden bg-navy-card aspect-[4/3] border border-overlay relative group">
                  <img src="/images/clinic-exterior.png" alt="SmileAura clinic location" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 bg-navy-deep/80 rounded-full flex items-center justify-center shadow-gold-glow border border-gold-primary">
                      <MapPin size={24} className="text-gold-primary" />
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border-2 border-gold-primary/40 bg-navy-deep p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle size={24} className="text-gold-primary" />
                    <h3 className="font-heading font-bold text-white-soft text-lg">Dental Emergency?</h3>
                  </div>
                  <p className="font-body text-white-muted text-sm mb-4">Call us right now. We have same-day emergency slots.</p>
                  <a href="tel:+919876543210" className="font-mono text-2xl text-gold-primary block mb-4 hover:text-gold-light">+91 98765 43210</a>
                  <a href="https://wa.me/919876543210?text=DENTAL%20EMERGENCY" target="_blank" rel="noopener noreferrer"
                    className="block w-full bg-red-600/80 text-white-soft font-heading font-bold text-center py-3 rounded-xl hover:bg-red-600 transition-colors">Emergency WhatsApp</a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-navy-mid">
        <div className="max-w-[1000px] mx-auto px-6">
          <ScrollReveal className="text-center mb-12"><h2 className="font-heading font-bold text-4xl text-white-soft">Common Questions</h2></ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <Accordion items={faqData.slice(0, 5)} />
              <Accordion items={faqData.slice(5)} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
