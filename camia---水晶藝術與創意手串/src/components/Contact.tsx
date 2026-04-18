import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle, Instagram, AtSign } from 'lucide-react';

const socialLinks = [
  {
    name: 'LINE 官方帳號',
    icon: <MessageCircle className="w-12 h-12" />,
    url: 'https://lin.ee/7a9zKtJ',
    color: '#06C755',
    label: '立即諮詢'
  },
  {
    name: 'Instagram',
    icon: <Instagram className="w-12 h-12" />,
    url: 'https://www.instagram.com/camia7687687/',
    color: '#E1306C',
    label: '追蹤作品'
  },
  {
    name: 'Threads',
    icon: <AtSign className="w-12 h-12" />,
    url: 'https://www.threads.net/@camia7687687/',
    color: '#ffffff',
    label: '生活動態'
  }
];

export default function Contact() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden" id="contact">
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl font-bold mb-8 text-[#D4AF37]"
          >
            與我們連繫
          </motion.h2>
          <p className="text-[#D4AF37]/80 text-xl mb-16 font-light">
            無論是尋找命定水晶，或是想客製專屬能量，歡迎透過社群平台與我聊聊。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center p-8 border border-[#D4AF37]/20 bg-[#1a1a1a]/50 backdrop-blur-sm hover:border-[#D4AF37]/60 transition-all group"
              >
                <div style={{ color: link.color }} className="mb-6 transition-transform group-hover:rotate-12">
                  {link.icon}
                </div>
                <h3 className="text-[#D4AF37] text-2xl font-bold mb-2">{link.name}</h3>
                <span className="text-[#D4AF37]/60 font-light">{link.label}</span>
              </motion.a>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-24 pt-12 border-t border-[#D4AF37]/10"
          >
            <p className="text-[#D4AF37]/40 text-sm tracking-widest uppercase">
              © 2026 CAMIA 精品手作 - 水晶藝術與創意手串
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
