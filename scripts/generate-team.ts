import Replicate from 'replicate';
import { mkdirSync, createWriteStream } from 'fs';
import https from 'https';
import http from 'http';

const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN! });

const members = [
  {
    name: 'team-kate',
    prompt: 'Professional portrait of a confident European white woman in her 35s, barbershop owner, dark elegant barbershop studio background, barber scissors in hand, copper warm lighting, wearing stylish dark outfit, professional photography, sharp focus, editorial style, cinematic, photorealistic',
    negative: 'man, male, beard, cartoon, drawing, illustration, asian, african, low quality',
  },
  {
    name: 'team-lucia',
    prompt: 'Professional portrait of a young European white woman in her late 20s, senior barber, barbershop mirror and chair visible in background, holding comb and scissors, warm copper lighting, confident smile, dark professional outfit, editorial photography, sharp focus, photorealistic',
    negative: 'man, male, cartoon, drawing, asian, blurry, low quality',
  },
  {
    name: 'team-martin',
    prompt: 'Professional portrait of a stylish European man in his 30s, barber, modern dark barbershop studio background, leather barber chair visible, holding professional scissors, well-groomed beard, wearing dark apron, copper warm lighting, editorial photography, sharp focus, photorealistic',
    negative: 'woman, female, cartoon, drawing, blurry, low quality',
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
  mkdirSync('public/team', { recursive: true });

  for (const m of members) {
    console.log(`Generating ${m.name}...`);
    const output = await replicate.run(
      'stability-ai/stable-diffusion-3.5-large' as `${string}/${string}`,
      {
        input: {
          prompt: m.prompt,
          negative_prompt: m.negative,
          width: 768,
          height: 1024,
          num_outputs: 1,
          guidance_scale: 7.5,
          num_inference_steps: 30,
        },
      }
    );
    const raw = Array.isArray(output) ? output[0] : output;
    const url = String(raw);
    await download(url, `public/team/${m.name}.webp`);
    console.log(`✅ public/team/${m.name}.webp`);
  }
  console.log('Done!');
}

main().catch(console.error);
