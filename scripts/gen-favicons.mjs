import sharp from "sharp";
import pngToIco from "png-to-ico";
import { readFile, writeFile } from "node:fs/promises";

const svg = await readFile("public/favicon.svg");

const sizes = [
  { name: "public/favicon-16.png", size: 16 },
  { name: "public/favicon-32.png", size: 32 },
  { name: "public/apple-touch-icon.png", size: 180 },
  { name: "public/favicon-192.png", size: 192 },
  { name: "public/favicon-512.png", size: 512 },
];

for (const { name, size } of sizes) {
  await sharp(svg).resize(size, size).png().toFile(name);
  console.log(`generated ${name}`);
}

const icoBuf = await pngToIco([
  await sharp(svg).resize(16, 16).png().toBuffer(),
  await sharp(svg).resize(32, 32).png().toBuffer(),
  await sharp(svg).resize(48, 48).png().toBuffer(),
]);
await writeFile("public/favicon.ico", icoBuf);
console.log("generated public/favicon.ico");
