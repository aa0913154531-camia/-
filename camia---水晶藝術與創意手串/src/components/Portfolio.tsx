import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'motion/react';
import { Instagram, MessageCircle } from 'lucide-react';

const portfolioItems = [
  { id: 1, title: "璀璨蝴蝶手串", desc: "精選清透水晶與閃耀蝴蝶配飾，展現靈動之美", img: "https://i.postimg.cc/Bn5NBs3h/LINE-ALBUM-2024817-260415-1-0.jpg", link: "https://lin.ee/7a9zKtJ" },
  { id: 2, title: "靈動蝶影", desc: "雙圈設計，層次豐富，磁場純淨", img: "https://i.postimg.cc/GpcKMNh0/LINE-ALBUM-2024817-260415-2-0.jpg", link: "https://lin.ee/7a9zKtJ" },
  { id: 3, title: "粉紅小熊夢幻", desc: "溫潤粉晶搭配可愛小熊，守護您的少女心", img: "https://i.postimg.cc/SkydZ5Nh/LINE-ALBUM-2024817-260415-3-0.jpg", link: "https://lin.ee/7a9zKtJ" },
  { id: 4, title: "紫晶蝶戀", desc: "深邃紫水晶與精緻蝶翼，高貴典雅", img: "https://i.postimg.cc/HG5sCwPR/LINE-ALBUM-2024817-260415-4-0.jpg", link: "https://lin.ee/7a9zKtJ" },
  { id: 5, title: "海藍之象", desc: "海藍寶與守護大象，帶來平靜與力量", img: "https://i.postimg.cc/cjShDj4N/LINE-ALBUM-2024817-260415-5-0.jpg", link: "https://lin.ee/7a9zKtJ" },
  { id: 6, title: "清透幻境", desc: "極致透明感，淨化心靈，提升專注力", img: "https://i.postimg.cc/TPRDkSY1/LINE-ALBUM-2024817-260415-6-0.jpg", link: "https://lin.ee/7a9zKtJ" },
  { id: 7, title: "大地能量", desc: "醇厚大地色系，穩重內斂，招財聚氣", img: "https://i.postimg.cc/XvVL2h7X/LINE-ALBUM-2024817-260415-7-0.jpg", link: "https://lin.ee/7a9zKtJ" },
  { id: 8, title: "紫水晶洞 (葫蘆型)", desc: "天然紫晶洞，福祿雙全，居家鎮宅必備", img: "https://i.postimg.cc/3wK1L6Jv/LINE-ALBUM-shui-jing-bai-jian-260415-1-0.jpg", link: "https://lin.ee/7a9zKtJ" },
  { id: 9, title: "紫晶聚寶盆", desc: "晶簇密集，能量強大，招財進寶", img: "https://i.postimg.cc/8C14y3PW/LINE-ALBUM-shui-jing-bai-jian-260415-2-0.jpg", link: "https://lin.ee/7a9zKtJ" },
  { id: 10, title: "白水晶簇擺件", desc: "能量發射塔，淨化周邊磁場，提升正能量", img: "https://i.postimg.cc/q7jLWLzn/LINE-ALBUM-shui-jing-bai-jian-260415-3-0.jpg", link: "https://lin.ee/7a9zKtJ" },
  { id: 11, title: "玉石雕刻 - 花鳥", desc: "精湛手工雕刻，線條流暢，極具收藏價值", img: "https://i.postimg.cc/FKDzwZ7x/LINE-ALBUM-shui-jing-bai-jian-260415-4-0.jpg", link: "https://lin.ee/7a9zKtJ" },
  { id: 12, title: "墨晶之巔", desc: "巨大黑曜石簇，辟邪擋煞，強大守護力", img: "https://i.postimg.cc/FKDzwZ7p/LINE-ALBUM-shui-jing-bai-jian-260415-5-0.jpg", link: "https://lin.ee/7a9zKtJ" },
  { id: 13, title: "金蟾招財", desc: "黃水晶精雕金蟾，財源廣進，生意興隆", img: "https://i.postimg.cc/QM0bu8hK/LINE-ALBUM-shui-jing-bai-jian-260415-6-0.jpg", link: "https://lin.ee/7a9zKtJ" },
];

export default function Portfolio() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-6xl font-bold mb-6 text-[#D4AF37] tracking-tight">精選作品</h2>
            <p className="text-xl text-[#D4AF37]/80 font-light leading-relaxed">
              每一件作品都是靈感與能量的結晶，為您尋找專屬的頻率。
            </p>
          </div>
          {/* 社群圖示 */}
          <div className="flex gap-6 mb-2">
            <a href="https://www.instagram.com/camia7687687/" target="_blank" className="text-[#D4AF37] hover:text-white transition-colors">
              <Instagram size={32} />
            </a>
            <a href="https://www.threads.net/@camia7687687" target="_blank" className="text-[#D4AF37] hover:text-white transition-colors flex items-center font-bold">
               Threads
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1a1a1a] border-[#D4AF37]/20 overflow-hidden hover:border-[#D4AF37]/50 transition-all group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-4 text-[#D4AF37]">{item.title}</h3>
                  <p className="text-[#D4AF37]/70 leading-relaxed mb-8 h-12 overflow-hidden">{item.desc}</p>
                  
                  <button 
                    onClick={() => window.open(item.link, '_blank')}
                    className="w-full bg-[#D4AF37] hover:bg-[#B8962E] text-black py-3 rounded-none transition-all duration-300 font-bold tracking-widest uppercase text-sm"
                  >
                    立即下單購買
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
