import { CONTACT } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">Lagoricio Barber</div>

      <div className="footer__social">
        <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="footer-link">
          Instagram
        </a>
        <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="footer-link">
          Facebook
        </a>
        <a href="https://wa.me/421900123456" target="_blank" rel="noopener noreferrer" className="footer-link">
          WhatsApp
        </a>
      </div>

      <p className="footer__copy">&copy; 2026 Lagoricio Barber Shop. Všetky práva vyhradené.</p>
    </footer>
  );
}
