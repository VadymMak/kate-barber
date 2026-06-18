import { CONTACT } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">Kate Barber Studio</div>

      <div className="footer__social">
        <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="footer-link">
          Instagram
        </a>
        <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="footer-link">
          Facebook
        </a>
        <a href="https://wa.me/421900111222" target="_blank" rel="noopener noreferrer" className="footer-link">
          WhatsApp
        </a>
      </div>

      <p className="footer__copy">&copy; 2026 Kate Barber Studio. Všetky práva vyhradené.</p>
    </footer>
  );
}
