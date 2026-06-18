import Image from 'next/image';
import { GALLERY_IMAGES } from '@/lib/constants';
import GoldDivider from '../ui/GoldDivider';

export default function GallerySection() {
  return (
    <section id="galeria" className="gallery">
      <div className="section-header">
        <p className="section-label">Naša práca</p>
        <h2 className="section-title">Galéria</h2>
        <GoldDivider />
      </div>

      <div className="gallery-grid">
        {GALLERY_IMAGES.map((image, index) => (
          <div key={image.src} className="gallery-item">
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
        ))}
      </div>
    </section>
  );
}
