const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
  { regex: /border-white\/5/g, replace: 'border-overlay' },
  { regex: /bg-white\/5/g, replace: 'bg-overlay' },
  { regex: /border-white\/10/g, replace: 'border-overlay-10' },
  { regex: /bg-white\/10/g, replace: 'bg-overlay-10' },
  { regex: /border-white\/20/g, replace: 'border-overlay-10' },
  { regex: /bg-white\/20/g, replace: 'bg-overlay-10' },
  { regex: /bg-white\/\[0\.02\]/g, replace: 'bg-overlay' },
  { regex: /bg-white\/15/g, replace: 'bg-overlay-10' },
  { regex: /text-white(?!\-)/g, replace: 'text-white-soft' },
  { regex: /text-white\/20/g, replace: 'text-grey-text' },
  { regex: /text-white\/30/g, replace: 'text-grey-text' },
  { regex: /text-white\/15/g, replace: 'text-grey-text' },
  { regex: /border-white\b/g, replace: 'border-white-soft' },
  {
    regex: /<div className="absolute -right-4 -bottom-4 w-64 h-64 rounded-full bg-gradient-to-br from-gold-primary\/20 to-navy-mid blur-3xl" \/>\s*<div className="relative aspect-\[4\/5\] rounded-t-full bg-navy-card overflow-hidden border border-white\/5 flex items-center justify-center">\s*<p className="font-mono text-white-muted text-sm">Portrait Photo Placeholder<\/p>\s*<\/div>/g,
    replace: `<div className="absolute -right-4 -bottom-4 w-64 h-64 rounded-full bg-gradient-to-br from-gold-primary/20 to-navy-mid blur-3xl" />
            <div className="relative aspect-[4/5] rounded-t-full bg-navy-card overflow-hidden border border-overlay flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&q=80" alt="Happy patient" className="w-full h-full object-cover" />
            </div>`
  },
  {
    regex: /<div className="rounded-\[40px_12px_40px_12px\] border-\[1\.5px\] border-gold-primary\/30 overflow-hidden aspect-\[4\/5\] bg-gradient-to-br from-navy-card to-navy-mid flex items-center justify-center shadow-gold-glow">\s*<p className="font-mono text-sm text-white\/20">Hero Image Placeholder<\/p>\s*<\/div>/g,
    replace: `<div className="rounded-[40px_12px_40px_12px] border-[1.5px] border-gold-primary/30 overflow-hidden aspect-[4/5] bg-gradient-to-br from-navy-card to-navy-mid flex items-center justify-center shadow-gold-glow">
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80" alt="Premium Clinic" className="w-full h-full object-cover" />
            </div>`
  },
  {
    regex: /<div className="aspect-square rounded-3xl bg-gradient-to-br from-gold-primary\/10 via-navy-card to-teal-accent\/10 border border-white\/5 flex items-center justify-center">\s*<svg width="200" height="200" viewBox="0 0 32 32" fill="none" className="opacity-30">\s*<path d=".*?" stroke="#C9963A" strokeWidth="0.5" fill="none"\/>\s*<\/svg>\s*<\/div>/g,
    replace: `<div className="aspect-square rounded-3xl bg-gradient-to-br from-gold-primary/10 via-navy-card to-teal-accent/10 border border-overlay overflow-hidden">
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80" alt="Clinic Interior" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
            </div>`
  },
  {
    regex: /<div className="rounded-2xl overflow-hidden bg-navy-card aspect-\[4\/3\] border border-overlay flex items-center justify-center">\s*<div className="text-center">\s*<MapPin size=\{32\} className="text-gold-primary mx-auto mb-2" \/>\s*<p className="font-mono text-sm text-grey-text">Map Placeholder<\/p>\s*<p className="font-mono text-\[10px\] text-grey-text mt-1">Dark Themed Map<\/p>\s*<\/div>\s*<\/div>/g,
    replace: `<div className="rounded-2xl overflow-hidden bg-navy-card aspect-[4/3] border border-overlay flex items-center justify-center relative group">
                  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" alt="Map Location" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 bg-navy-deep rounded-full flex items-center justify-center shadow-gold-glow border border-gold-primary">
                      <MapPin size={24} className="text-gold-primary" />
                    </div>
                  </div>
                </div>`
  },
  {
    regex: /<div className="rounded-3xl overflow-hidden bg-gradient-to-br from-navy-card to-navy-mid aspect-\[4\/3\] border border-overlay flex items-center justify-center">\s*<p className="font-mono text-sm text-grey-text">Clinic Interior<\/p>\s*<\/div>/g,
    replace: `<div className="rounded-3xl overflow-hidden bg-gradient-to-br from-navy-card to-navy-mid aspect-[4/3] border border-overlay flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80" alt="Clinic Interior" className="w-full h-full object-cover" />
                </div>`
  },
  {
    regex: /<div className="w-full h-full flex items-center justify-center"><p className="font-mono text-\[10px\] text-grey-text">Clinic Interior \{i \+ 1\}<\/p><\/div>/g,
    replace: `<img src={"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&sig=" + i} alt="Clinic Area" className="w-full h-full object-cover" />`
  },
  {
    regex: /<div className="w-full h-full flex items-center justify-center"><p className="font-mono text-sm text-grey-text">Clinic Interior \{i \+ 1\}<\/p><\/div>/g,
    replace: `<img src={"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&sig=" + i} alt="Clinic View" className="w-full h-full object-cover" />`
  },
  {
    regex: /<p className="font-mono text-sm text-grey-text">\{galleryTab\} \{i \+ 1\}<\/p>/g,
    replace: `<img src={"https://images.unsplash.com/photo-" + (galleryTab === 'Treatment Process' ? '1606811841689-23dfddce3e95' : '1600618528240-fb9fc964b853') + "?auto=format&fit=crop&q=80&sig=" + i} alt={galleryTab} className="w-full h-full object-cover" />`
  },
  {
    regex: /<div className="w-full h-full flex items-center justify-center group-hover:scale-\[1\.03\] transition-transform duration-500">\s*<div className="text-center">\s*<div className="w-16 h-16 mx-auto rounded-full bg-gold-primary\/10 flex items-center justify-center mb-2">\s*<span className="font-display text-2xl text-gold-primary">\{doc\.name\.charAt\(4\)\}<\/span>\s*<\/div>\s*<p className="font-mono text-\[9px\] text-grey-text">Dr\. Portrait<\/p>\s*<\/div>\s*<\/div>/g,
    replace: `<img src={"https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&sig=" + doc.id} alt={doc.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]" />`
  },
  {
    regex: /<div className="lg:w-\[50%\] rounded-3xl overflow-hidden bg-gradient-to-b from-navy-card to-navy-deep aspect-\[3\/4\] flex items-center justify-center">\s*<p className="font-mono text-sm text-grey-text">Founder Portrait<\/p>\s*<\/div>/g,
    replace: `<div className="lg:w-[50%] rounded-3xl overflow-hidden bg-gradient-to-b from-navy-card to-navy-deep aspect-[3/4] flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80" alt={founder.name} className="w-full h-full object-cover" />
            </div>`
  },
  {
    regex: /<div className="w-full h-full flex items-center justify-center group-hover:scale-\[1\.04\] transition-transform duration-500">\s*<div className="text-center">\s*<div className="w-20 h-20 mx-auto rounded-full bg-gold-primary\/10 flex items-center justify-center mb-3">\s*<span className="font-display text-3xl text-gold-primary">\{doc\.name\.charAt\(4\)\}<\/span>\s*<\/div>\s*<p className="font-mono text-\[10px\] text-grey-text">Portrait Photo<\/p>\s*<\/div>\s*<\/div>/g,
    replace: `<img src={"https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&sig=" + doc.id} alt={doc.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.04]" />`
  },
  {
    regex: /<div className="rounded-\[40px_12px_40px_12px\] border-\[1\.5px\] border-gold-primary\/30 overflow-hidden aspect-\[4\/3\] bg-gradient-to-br from-navy-card to-navy-mid flex items-center justify-center shadow-gold-glow">\s*<p className="font-mono text-sm text-grey-text">Treatment Image<\/p>\s*<\/div>/g,
    replace: `<div className="rounded-[40px_12px_40px_12px] border-[1.5px] border-gold-primary/30 overflow-hidden aspect-[4/3] bg-gradient-to-br from-navy-card to-navy-mid flex items-center justify-center shadow-gold-glow">
                <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80" alt={treatment.name} className="w-full h-full object-cover" />
              </div>`
  }
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      processDir(filePath);
    } else if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      for (const { regex, replace } of replacements) {
        content = content.replace(regex, replace);
      }
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log("Updated " + filePath);
      }
    }
  }
}

// First replace the color strings in JS files
processDir(srcDir);

// Now update tailwind.config.js
const tailwindConfigPath = path.join(__dirname, 'tailwind.config.js');
let tailwindConfig = fs.readFileSync(tailwindConfigPath, 'utf8');
tailwindConfig = tailwindConfig.replace(
  /colors:\s*\{[^}]+\},/m,
  "colors: {" +
        "\\n'navy-deep': 'var(--color-bg-deep)'," +
        "\\n'navy-mid': 'var(--color-bg-mid)'," +
        "\\n'navy-card': 'var(--color-bg-card)'," +
        "\\n'gold-primary': '#C9963A'," +
        "\\n'gold-light': '#E8B964'," +
        "\\n'gold-border': 'var(--color-gold-border)'," +
        "\\n'teal-accent': '#2DD4BF'," +
        "\\n'white-soft': 'var(--color-text-soft)'," +
        "\\n'white-muted': 'var(--color-text-muted)'," +
        "\\n'grey-text': 'var(--color-text-grey)'," +
        "\\n'overlay': 'var(--color-overlay)'," +
        "\\n'overlay-10': 'var(--color-overlay-10)'," +
      "\\n},"
);
// Make sure darkMode class is there
if (!tailwindConfig.includes("darkMode: 'class'")) {
  tailwindConfig = tailwindConfig.replace(/export default \{/, "export default {\\n  darkMode: 'class',");
}
fs.writeFileSync(tailwindConfigPath, tailwindConfig);

// Now update index.css
const indexCssPath = path.join(srcDir, 'index.css');
let indexCss = fs.readFileSync(indexCssPath, 'utf8');

const cssVars = `
@layer base {
  :root {
    --color-bg-deep: #ffffff;
    --color-bg-mid: #f8fafc;
    --color-bg-card: #f1f5f9;
    --color-text-soft: #0f172a;
    --color-text-muted: #475569;
    --color-text-grey: #64748b;
    --color-overlay: rgba(0, 0, 0, 0.05);
    --color-overlay-10: rgba(0, 0, 0, 0.1);
    --color-gold-border: rgba(201, 150, 58, 0.3);
  }

  .dark {
    --color-bg-deep: #0A1128;
    --color-bg-mid: #101B3A;
    --color-bg-card: #162347;
    --color-text-soft: #F8FAFC;
    --color-text-muted: #94A3B8;
    --color-text-grey: #64748B;
    --color-overlay: rgba(255, 255, 255, 0.05);
    --color-overlay-10: rgba(255, 255, 255, 0.1);
    --color-gold-border: rgba(201, 150, 58, 0.2);
  }
  
  body {
    @apply bg-navy-deep text-white-soft transition-colors duration-300;
  }
}
`;

indexCss = indexCss.replace(/@tailwind base;/, "@tailwind base;\\n" + cssVars);
fs.writeFileSync(indexCssPath, indexCss);
console.log('Updated tailwind and index.css');
