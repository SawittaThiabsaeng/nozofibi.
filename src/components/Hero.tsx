import { motion } from "motion/react";
import Logo from "./Logo";
import { Sparkles, ArrowRight, Play, CheckCircle2, Heart, Flame, Zap, Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const avatars = [
  "https://picsum.photos/seed/user1/40/40",
  "https://picsum.photos/seed/user2/40/40",
  "https://picsum.photos/seed/user3/40/40",
];

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative pt-12 md:pt-20 pb-20 px-6 md:px-12 overflow-hidden flex items-center justify-center min-h-[85vh]">
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-2 mb-8"
            >
              <div className="flex -space-x-2">
                {avatars.map((url, i) => (
                  <img key={i} src={url} alt="User" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
                ))}
              </div>
              <p className="text-[13px] font-bold text-ink-soft/60">{t('hero.badge')}</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[92px] font-black tracking-[-0.05em] leading-[0.85] text-ink mb-10"
            >
              {t('hero.title1')} <span className="text-vibrant-gradient">{t('hero.title2')}</span> <br />
              {t('hero.title3')} <span className="text-vibrant-gradient">{t('hero.title4')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-ink font-medium mb-10 max-w-xl leading-relaxed opacity-60"
            >
              {t('hero.desc')}
            </motion.p>
            
            <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.5 }}
               className="text-[14px] font-black text-brand/60 mb-12 flex items-center gap-2"
            >
               <Sparkles className="w-4 h-4" />
               {t('hero.trust')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-5 mb-16"
            >
              <a 
                href="https://nozofibi.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium-primary group flex items-center justify-center gap-2"
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="flex flex-col gap-4"
            >
              <p className="text-[12px] font-bold text-ink/40 uppercase tracking-widest">{t('hero.avail')}</p>
              <div className="flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                 <div className="flex items-center gap-2 font-black text-xs"><Heart className="w-4 h-4" /> Android</div>
                 <div className="flex items-center gap-2 font-black text-xs"><Sparkles className="w-4 h-4" /> Desktop</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Widget */}
          <div className="relative flex justify-center lg:justify-end py-12">
             <motion.div
               initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
               animate={{ opacity: 1, scale: 1, rotateY: 0 }}
               transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
               className="relative z-10 w-full max-w-[440px]"
             >
                {/* Main Glass Widget - Unified Mood Card Style */}
                <div className="glass-widget overflow-hidden group">
                   {/* Top Part: Focus Banner */}
                   <div className="bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] p-8 text-left relative overflow-hidden">
                      <div className="absolute top-4 right-6 opacity-10">
                         <Zap size={100} fill="white" />
                      </div>
                      <span className="inline-block bg-white/20 backdrop-blur-md rounded-full px-4 py-1 text-[11px] font-black text-white mb-6 tracking-[0.15em] uppercase border border-white/20">{t('hero.widget.protocol')}</span>
                      <h4 className="text-white font-black text-3xl leading-tight mb-2">{t('hero.widget.title')}</h4>
                      <p className="text-white/80 text-sm font-medium mb-6">{t('hero.widget.desc')}</p>
                      <div className="flex items-center gap-2 text-white font-black text-[13px] group/link cursor-pointer">
                         {t('hero.widget.start')} <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      </div>
                   </div>
                   
                   {/* Bottom Part: Current Mood Info */}
                   <div className="p-8 text-left bg-white/40">
                      <div className="flex items-center justify-between mb-6">
                         <h4 className="font-black text-2xl text-ink">{t('hero.widget.today')}</h4>
                         <div className="w-16 h-16 rounded-[24px] bg-white/60 flex items-center justify-center shadow-inner">
                            <Clock size={32} className="text-brand/50" />
                         </div>
                      </div>
                      <p className="text-sm font-bold text-ink-soft mb-8 leading-relaxed max-w-[280px]">
                         "{t('hero.widget.nomood')}"
                      </p>
                      <div className="flex gap-4">
                         <button className="flex-1 h-14 bg-brand rounded-2xl text-white font-black text-sm shadow-xl shadow-brand/20 hover:scale-[1.02] transition-transform">
                            {t('hero.widget.checknow')}
                         </button>
                         <button className="flex-1 h-14 rounded-2xl border border-ink/10 font-bold text-sm text-ink-soft hover:bg-white/50 transition-all">
                            {t('hero.widget.history')}
                         </button>
                      </div>
                   </div>
                </div>

                {/* Secondary Floating elements - Metrics */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-12 -right-12 w-36 p-6 bg-white/60 backdrop-blur-3xl border border-white/60 rounded-[32px] shadow-2xl z-20"
                >
                   <div className="flex flex-col gap-1">
                      <Flame size={20} className="text-orange-400 mb-2" />
                      <p className="text-[10px] font-black text-ink/20 uppercase tracking-widest leading-none">{t('hero.widget.streak')}</p>
                      <p className="text-2xl font-black text-ink">14d</p>
                   </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-8 -left-8 w-28 h-28 bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[40px] shadow-2xl flex items-center justify-center z-20 p-6"
                >
                   <Logo size={54} />
                </motion.div>
             </motion.div>

             {/* Background glow behind widget */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand/10 blur-[120px] rounded-full -z-10 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </section>
  );
}
