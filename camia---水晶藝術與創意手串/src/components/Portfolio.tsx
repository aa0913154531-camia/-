import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'motion/react';

const portfolioItems = [
  { id: 1, title: "璀璨蝴蝶手串", desc: "精選清透水晶與閃耀蝴蝶配飾，展現靈動之美", img: "https://i.postimg.cc/Bn5NBs3h/LINE-ALBUM-2024817-260415-1-0.jpg" },
  { id: 2, title: "靈動蝶影", desc: "雙圈設計，層次豐富，磁場純淨", img: "https://i.postimg.cc/GpcKMNh0/LINE-ALBUM-2024817-260415-2-0.jpg" },
  { id: 3, title: "粉紅小熊夢幻", desc: "溫潤粉晶搭配可愛小熊，守護您的少女心", img: "https://i.postimg.cc/SKydZ5Nh/LINE-ALBUM-2024817-260415-3-0.jpg" },
  { id: 4, title: "紫晶蝶戀", desc: "深邃紫水晶與精緻蝶翼，高貴典雅", img: "https://i.postimg.cc/hGSsCwPR/LINE-ALBUM-2024817-260415-4-0.jpg" },
  { id: 5, title: "海藍之象", desc: "海藍寶與守護大象，帶來平靜與力量", img: "https://i.postimg.cc/cJshDj4N/LINE-ALBUM-2024817-260415-5-0.jpg" },
  { id: 6, title: "清透幻境", desc: "極致透明感，淨化心靈，提升專注力", img: "https://i.postimg.cc/TPR0kSY1/LINE-ALBUM-2024817-260415-6-0.jpg" },
  { id: 7, title: "大地能量", desc: "醇厚大地色系，穩重內斂，招財聚氣", img: "https://i.postimg.cc/XvVL2h7X/LINE-ALBUM-2024817-260415-7-0.jpg" },
  { id: 8, title: "紫水晶洞 (葫蘆型)", desc: "天然紫晶洞，福祿雙全，居家鎮宅必備", img: "https://i.postimg.cc/3wK1L6Jv/LINE-ALBUM-shui-jing-bai-jian-260415-1-0.jpg" },
  { id: 9, title: "紫晶聚寶盆", desc: "晶簇密集，能量強大，招財進寶", img: "https://i.postimg.cc/8C14y3PW/LINE-ALBUM-shui-jing-bai-jian-260415-2-0.jpg" },
  { id: 10, title: "白水晶簇擺件", desc: "能量發射塔，淨化周邊磁場，提升正能量", img: "https://i.postimg.cc/q7jLWLzn/LINE-ALBUM-shui-jing-bai-jian-260415-3-0.jpg" },
  { id: 11, title: "玉石雕刻 · 花鳥", desc: "精湛手工雕刻，線條流暢，極具收藏價值", img: "https://i.postimg.cc/FKDZwZ7x/LINE-ALBUM-shui-jing-bai-jian-260415-4-0.jpg" },
  { id: 12, title: "墨晶之巔", desc: "巨大黑曜石簇，避邪擋煞，強大守護力", img: "https://i.postimg.cc/FKDZwZ7p/LINE-ALBUM-shui-jing-bai-jian-260415-5-0.jpg" },
  { id: 13, title: "金蟾招財", desc: "黃水晶精雕金蟾，財源廣進，生意興隆", img: "https://i.postimg.cc/QM0bvbHk/LINE-ALBUM-shui-jing-bai-jian-260415-6-0.jpg" },
];

export default function Portfolio() {
  return (
    <div className="py-32 bg-bg-deep relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h1 className="font-serif text-6xl font-bold mb-6 gold-text tracking-tight">精選作品</h1>
            <p className="text-text-dim text-lg leading-relaxed italic font-serif">
              "每一件作品都是大自然與藝術的對話，凝聚著時光的靈性。"
            </p>
          </div>
          <div className="w-48 h-[1px] bg-gold-dark" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="group cursor-pointer immersive-card p-4"
            >
              <div className="relative aspect-square overflow-hidden mb-6 border border-gold-dark/20">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-[10px] text-gold-primary uppercase tracking-[2px] mb-2">Collection</span>
                  <h3 className="text-white font-serif text-xl font-bold">{item.title}</h3>
                </div>
              </div>
              <div className="px-2 pb-2">
                <h3 className="font-serif text-lg font-bold mb-2 text-gold-light group-hover:text-gold-primary transition-colors">{item.title}</h3>
                <p className="text-text-dim text-xs leading-relaxed uppercase tracking-widest">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
