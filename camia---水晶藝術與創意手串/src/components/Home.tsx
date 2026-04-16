import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

interface HomeProps {
  onExplore: () => void;
}

export default function Home({ onExplore }: HomeProps) {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551970634-747846a548cb?auto=format&fit=crop&q=80&w=2000"
            alt="Crystal background"
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-deep via-bg-deep/80 to-transparent" />
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-7xl md:text-8xl font-bold leading-[1.1] mb-8 gold-text">
                靈性美學<br />手工藝
              </h1>
              <p className="text-lg md:text-xl text-text-dim mb-10 leading-relaxed max-w-lg">
                將自然界最純粹的能量，凝聚於腕間。專為您訂製的水晶擺件與創意手串，詮釋專業設計與極致工藝的完美結合。
              </p>
              <div className="flex gap-6">
                <Button 
                  size="lg" 
                  className="bg-transparent border border-gold-primary text-gold-primary px-10 py-7 text-sm tracking-[2px] uppercase rounded-none hover:bg-gold-primary hover:text-black transition-all duration-300"
                  onClick={onExplore}
                >
                  預約設計顧問
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 bg-bg-deep relative overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl font-bold mb-6 text-gold-light tracking-tight">匠心獨運</h2>
              <p className="text-text-dim leading-relaxed">
                我們精選世界各地優質原石，結合創意設計與精湛工藝，打造出兼具美感與能量的居家擺件與隨身飾品。
              </p>
            </div>
            <div className="w-32 h-[1px] bg-gold-dark" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "璀璨蝴蝶 · 創意手串",
                desc: "精選清透水晶與閃耀蝴蝶配飾，將自然能量凝聚於腕間。",
                img: "https://i.postimg.cc/Bn5NBs3h/LINE-ALBUM-2024817-260415-1-0.jpg"
              },
              {
                title: "白水晶簇 · 能量擺件",
                desc: "純淨能量發射塔，淨化居家磁場，提升空間正能量。",
                img: "https://i.postimg.cc/q7jLWLzn/LINE-ALBUM-shui-jing-bai-jian-260415-3-0.jpg"
              },
              {
                title: "紫水晶洞 · 鎮宅精品",
                desc: "天然紫晶洞，福祿雙全，是大自然鬼斧神工的永恆珍藏。",
                img: "https://i.postimg.cc/3wK1L6Jv/LINE-ALBUM-shui-jing-bai-jian-260415-1-0.jpg"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer immersive-card p-6"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-8 border border-gold-dark/30">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-gold-light group-hover:text-gold-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-text-dim leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
