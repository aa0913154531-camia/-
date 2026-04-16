import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("感謝您的留言！我們將儘快與您聯繫。");
  };

  return (
    <div className="py-32 bg-bg-deep relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h1 className="font-serif text-6xl font-bold mb-6 gold-text tracking-tight">聯絡我們</h1>
            <p className="text-text-dim text-lg leading-relaxed">
              如果您對我們的作品有任何疑問，或需要客製化設計服務，歡迎隨時聯繫。
            </p>
          </div>
          <div className="w-48 h-[1px] bg-gold-dark" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <div className="space-y-12">
              <div className="flex items-start gap-8">
                <div className="w-14 h-14 rounded-full border border-gold-dark flex items-center justify-center text-gold-primary shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-gold-primary uppercase tracking-[3px] block mb-2">Phone</span>
                  <p className="text-text-main text-lg font-serif">0800092000</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-14 h-14 rounded-full border border-gold-dark flex items-center justify-center text-gold-primary shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-gold-primary uppercase tracking-[3px] block mb-2">Email</span>
                  <p className="text-text-main text-lg font-serif">camia-studio.vercel.app</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-14 h-14 rounded-full border border-gold-dark flex items-center justify-center text-gold-primary shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-gold-primary uppercase tracking-[3px] block mb-2">Studio</span>
                  <p className="text-text-main text-lg font-serif">高雄市</p>
                </div>
              </div>
            </div>

            <div className="p-10 border border-gold-dark/30 bg-bg-surface/50 backdrop-blur-sm">
              <h4 className="font-serif text-xl font-bold mb-6 text-gold-light">營業時間</h4>
              <div className="space-y-3 text-sm text-text-dim uppercase tracking-widest">
                <p className="flex justify-between"><span>週一至週五</span> <span>10:00 - 19:00</span></p>
                <p className="flex justify-between"><span>週六</span> <span>11:00 - 17:00</span></p>
                <p className="flex justify-between"><span>週日</span> <span>公休</span></p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="immersive-card p-12">
              <div className="mb-10">
                <h2 className="font-serif text-3xl font-bold mb-2 text-gold-light tracking-tight">發送訊息</h2>
                <p className="text-text-dim text-sm uppercase tracking-widest">我們會儘快回覆您的需求。</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] text-gold-primary uppercase tracking-[2px]">姓名</label>
                    <Input placeholder="您的姓名" required className="bg-transparent border-b border-gold-dark/50 border-t-0 border-l-0 border-r-0 rounded-none px-0 focus:border-gold-primary transition-all placeholder:text-text-dim/30" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] text-gold-primary uppercase tracking-[2px]">電子郵件</label>
                    <Input type="email" placeholder="your@email.com" required className="bg-transparent border-b border-gold-dark/50 border-t-0 border-l-0 border-r-0 rounded-none px-0 focus:border-gold-primary transition-all placeholder:text-text-dim/30" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] text-gold-primary uppercase tracking-[2px]">主旨</label>
                  <Input placeholder="您感興趣的作品或服務" className="bg-transparent border-b border-gold-dark/50 border-t-0 border-l-0 border-r-0 rounded-none px-0 focus:border-gold-primary transition-all placeholder:text-text-dim/30" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] text-gold-primary uppercase tracking-[2px]">訊息內容</label>
                  <Textarea placeholder="請輸入您的訊息..." className="bg-transparent border border-gold-dark/50 rounded-none p-4 min-h-[150px] focus:border-gold-primary transition-all placeholder:text-text-dim/30" required />
                </div>
                <Button type="submit" className="w-full bg-transparent border border-gold-primary text-gold-primary py-8 rounded-none text-sm tracking-[3px] uppercase hover:bg-gold-primary hover:text-black transition-all duration-300">
                  送出訊息
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
