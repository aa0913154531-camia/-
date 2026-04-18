import React from 'react';

const socialLinks =[
  { name: 'LINE', url: 'https://lin.ee/7a9zKtJ', label: '立即諮詢' },
  { name: 'Instagram', url: 'https://www.instagram.com/camia7687687/', label: '追蹤作品' },
  { name: 'Threads', url: 'https://www.threads.net/@camia7687687/', label: '生活動態' }
];

export default function Contact() {
  return (
    <section className="py-20 bg-black text-white text-center" id="contact">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold mb-8 text-[#D4AF37]">與我們連繫</h2>
        <p className="mb-12 text-[#D4AF37]/80 text-xl">歡迎透過以下平台與我聊聊</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-10 border border-[#D4AF37]/30 bg-[#111] hover:bg-[#222] transition-all"
            >
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-2">{link.name}</h3>
              <p className="text-sm opacity-70">{link.label}</p>
            </a>
          ))}
        </div>
        <p className="opacity-30 text-xs tracking-widest text-center">© 2026 CAMIA ALL RIGHTS RESERVED.</p>
      </div>
    </section>
  );
}
