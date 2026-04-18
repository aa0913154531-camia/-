import React from 'react';

const portfolioItems = [
  { id: 1, title: "璀璨蝴蝶手串", img: "https://i.postimg.cc/Bn5NBs3h/1.jpg" },
  { id: 2, title: "靈動蝶影", img: "https://i.postimg.cc/GpcKMNh0/2.jpg" },
  { id: 3, title: "粉紅小熊夢幻", img: "https://i.postimg.cc/SkydZ5Nh/3.jpg" },
  { id: 4, title: "紫晶蝶戀", img: "https://i.postimg.cc/HG5sCwPR/4.jpg" },
  { id: 5, title: "海藍之象", img: "https://i.postimg.cc/cjShDj4N/5.jpg" },
  { id: 6, title: "清透幻境", img: "https://i.postimg.cc/TPRDkSY1/6.jpg" }
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-black text-white" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#D4AF37] mb-12 text-center">精選作品</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-[#111] border border-[#D4AF37]/20 rounded-lg overflow-hidden shadow-xl">
              <div className="h-80 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-[#D4AF37] text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
