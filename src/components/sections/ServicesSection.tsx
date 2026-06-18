import { SERVICES } from '@/lib/constants';
import GoldDivider from '../ui/GoldDivider';

export default function ServicesSection() {
  return (
    <section id="sluzby" className="services">
      <div className="section-header">
        <p className="section-label">Naše služby</p>
        <h2 className="section-title">Čo pre vás pripravíme</h2>
        <GoldDivider />
        <p className="section-subtitle">
          Od klasického strihu po kompletný grooming — postaráme sa o vás od hlavy po bradu.
        </p>
      </div>

      <div className="services__grid">
        {SERVICES.map((service) => (
          <div key={service.name} className="service-card">
            <div>
              <h3 className="service-card__name">{service.name}</h3>
              <p className="service-card__desc">{service.description}</p>
            </div>
            <div className="service-card__price">{service.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
