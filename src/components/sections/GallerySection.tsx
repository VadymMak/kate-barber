import Image from 'next/image';
import { GALLERY_IMAGES } from '@/lib/constants';
import GoldDivider from '../ui/GoldDivider';
import ScrollReveal from '../ui/ScrollReveal';

export default function GallerySection() {
  return (
    <section id="galeria" className="gallery">
      <ScrollReveal direction="up" className="section-header">
        <p className="section-label">Naša práca</p>
        <h2 className="section-title">Galéria</h2>
        <GoldDivider />
      </ScrollReveal>

      <div className="gallery-grid">
        {GALLERY_IMAGES.map((image, index) => (
          <ScrollReveal key={image.src} direction="scale" delay={index * 80}>
            <div className="gallery-item">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="gallery-img"
                priority={index === 0}
              />
              <div className="gallery-overlay" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
