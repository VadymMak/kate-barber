import Replicate from 'replicate';
import { writeFileSync, mkdirSync, createWriteStream } from 'fs';
import https from 'https';
import http from 'http';

const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN! });

const prompts = [
  {
    name: 'gallery-1-chair',
    prompt: 'Luxury barbershop interior, vintage leather barber chair, warm copper and dark tones, dramatic side lighting, bokeh background, professional photography, editorial style, no people',
  },
  {
    name: 'gallery-2-haircut',
    prompt: 'Professional barber giving precise haircut, scissors and comb close-up, shallow depth of field, warm golden hour lighting, barbershop atmosphere, cinematic photography',
  },
  {
    name: 'gallery-3-beard',
    prompt: 'Barber trimming stylish beard with straight razor, hot towel treatment, luxury grooming, close-up portrait, moody dark background, copper accent lighting, cinematic',
  },
  {
    name: 'gallery-4-result',
    prompt: 'Handsome man with perfect classic haircut, side part pompadour, fresh fade, confident pose, barbershop mirror reflection, dark moody background, editorial photography',
  },
  {
    name: 'gallery-5-studio',
    prompt: 'Upscale barbershop studio interior at night, copper and brass tools displayed, large mirrors, neon sign glow, atmospheric moody lighting, no people, architectural photography',
  },
];

async function download(url: string, dest: string): Promise<void> {
  const file = createWriteStream(dest);
  return new Promise<void>((resolve, reject) => {
    (url.startsWith('https') ? https : http).get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
  });
}

async function main() {
  mkdirSync('public/gallery', { recursive: true });

  for (const item of prompts) {
    console.log(`Generating ${item.name}...`);
    const output = await replicate.run(
      'black-forest-labs/flux-schnell' as `${string}/${string}`,
      { input: { prompt: item.prompt, width: 1024, height: 768, num_outputs: 1 } }
    );
    const raw = Array.isArray(output) ? output[0] : output;
    const url = String(raw);
    const dest = `public/gallery/${item.name}.webp`;
    await download(url, dest);
    console.log(`✅ Saved ${dest}`);
  }

  console.log('\nDone! Update constants.ts to use /gallery/gallery-1-chair.webp etc.');
}

main().catch(console.error);
