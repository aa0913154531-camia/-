import React from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Layout({ children, currentPage, onPageChange }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-bg-deep relative overflow-hidden">
      <div className="glow-effect top-[-10%] left-[-10%]" />
      <div className="glow-effect bottom-[-10%] right-[-10%]" />

      <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent">
        <div className="container mx-auto px-8 h-24 flex items-center justify-between">
          <div 
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => onPageChange('home')}
          >
            <span className="font-serif text-2xl font-bold tracking-[4px] text-gold-primary uppercase">
              CAMIA
            </span>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="gap-8">
              {[
                { id: 'home', label: '首頁' },
                { id: 'portfolio', label: '作品集' },
                { id: 'contact', label: '聯絡資訊' }
              ].map((item) => (
                <NavigationMenuItem key={item.id}>
                  <button
                    onClick={() => onPageChange(item.id)}
                    className={cn(
                      "bg-transparent text-xs tracking-[2px] uppercase transition-all hover:text-gold-light",
                      currentPage === item.id 
                        ? "text-gold-primary border-b border-gold-primary pb-1 opacity-100" 
                        : "text-gold-light opacity-60"
                    )}
                  >
                    {item.label}
                  </button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      <main className="flex-grow relative z-10">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="bg-black/80 border-t border-gold-dark py-12 relative z-10">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="space-y-2">
                <span className="text-[10px] text-gold-primary uppercase tracking-widest block">Email</span>
                <p className="text-sm text-text-main">camia-studio.vercel.app</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] text-gold-primary uppercase tracking-widest block">Address</span>
                <p className="text-sm text-text-main">高雄市楠梓區後昌路95號</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] text-gold-primary uppercase tracking-widest block">Studio</span>
                <p className="text-sm text-text-main">0913154531</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              {['IG', 'FB', 'TW'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gold-dark flex items-center justify-center text-gold-primary text-xs hover:bg-gold-primary hover:text-black transition-all"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gold-dark/20 text-center text-[10px] text-text-dim uppercase tracking-widest">
            © {new Date().getFullYear()} CAMIA. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
