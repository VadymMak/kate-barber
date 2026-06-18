'use client';

import { useState } from 'react';
import { WHATSAPP_LINKS, SERVICE_OPTIONS, BARBERS } from '@/lib/constants';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import GoldDivider from '../ui/GoldDivider';
import DateTimePicker from '../ui/DateTimePicker';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function BookingSection() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateTimeSelect = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Ďakujeme! Potvrdenie vám pošleme cez WhatsApp.');
  };

  return (
    <section id="rezervacia" className="booking">
      <ScrollReveal direction="up" className="section-header">
        <p className="section-label">Rezervácia</p>
        <h2 className="section-title">Zarezervujte si termín</h2>
        <GoldDivider />
        <p className="section-subtitle">
          Vyberte si deň, čas a službu. Alebo nás kontaktujte cez WhatsApp.
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={200}>
        <div className="booking__container">
          <form onSubmit={handleSubmit} className="booking__form">

            <div className="booking__form-row">
              <div>
                <label className="booking__label">Služba</label>
                <select required className="booking__select">
                  <option value="">Vyberte službu...</option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="booking__label">Barber</label>
                <select className="booking__select">
                  <option value="">Bez preferencie</option>
                  {BARBERS.map((barber) => (
                    <option key={barber} value={barber}>{barber}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="booking__label">Vyberte deň a čas</label>
              <div className="booking__picker-wrap">
                <DateTimePicker onSelect={handleDateTimeSelect} />
              </div>
              <input type="hidden" name="date" value={selectedDate} />
              <input type="hidden" name="time" value={selectedTime} />
            </div>

            <div className="booking__form-row">
              <div>
                <label className="booking__label">Meno</label>
                <input
                  type="text"
                  placeholder="Vaše meno"
                  required
                  className="booking__input"
                />
              </div>
              <div>
                <label className="booking__label">Telefón</label>
                <input
                  type="tel"
                  placeholder="+421 9XX XXX XXX"
                  required
                  className="booking__input"
                />
              </div>
            </div>

            <div>
              <label className="booking__label">Poznámka (nepovinné)</label>
              <textarea
                placeholder="Špeciálne požiadavky alebo poznámky..."
                className="booking__textarea"
              />
            </div>

            <div className="booking__actions">
              <button type="submit" className="booking__btn-submit">
                Odoslať rezerváciu
              </button>
              <a
                href={WHATSAPP_LINKS.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="booking__btn-wa"
              >
                <WhatsAppIcon size={18} />
                Cez WhatsApp
              </a>
            </div>
          </form>

          <p className="booking__note">
            Potvrdenie rezervácie vám pošleme cez WhatsApp alebo SMS do 30 minút.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
