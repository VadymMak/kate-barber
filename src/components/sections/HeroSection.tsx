import { WHATSAPP_LINKS } from '@/lib/constants';
import WhatsAppIcon from '../ui/WhatsAppIcon';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__tagline">EST. 2018 — TRENČÍN</p>

        <h1 className="hero__title">
          Umenie <em>klasického</em>
          <br />
          holičstva
        </h1>

        <p className="hero__subtitle">
          Prémiový barber studio v Trenčíne pre ženy aj mužov.
        </p>

        <div className="hero__buttons">
          <a href="#rezervacia" className="btn-outline-gold">
            Rezervovať termín
          </a>
          <a
            href={WHATSAPP_LINKS.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid-whatsapp"
          >
            <WhatsAppIcon size={18} />
            WhatsApp
          </a>
        </div>
      </div>

      <a href="#sluzby" className="hero__scroll-arrow" aria-label="Scroll down">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}
