import { TESTIMONIALS } from '@/lib/constants';
import GoldDivider from '../ui/GoldDivider';

export default function TestimonialsSection() {
  return (
    <section id="recenzie" className="testimonials">
      <div className="section-header">
        <p className="section-label">Recenzie</p>
        <h2 className="section-title">Čo hovoria naši klienti</h2>
        <GoldDivider />
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.author} className="testimonial-card">
            <div className="testimonial-stars">{'★'.repeat(testimonial.stars)}</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-author">{testimonial.author}</p>
            <p className="testimonial-date">{testimonial.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
