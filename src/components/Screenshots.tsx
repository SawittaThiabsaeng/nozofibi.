import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DashboardMockup, TimerMockup, ScheduleMockup, ResultMockup, ProfileMockup } from "./MockupScreens";
import { useLanguage } from "../contexts/LanguageContext";

export default function Screenshots() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const screenScaps = [
    { 
      title: t('screens.home.title'), 
      desc: t('screens.home.desc'), 
      component: <DashboardMockup darkMode={false} />
    },
    { 
      title: t('screens.timer.title'), 
      desc: t('screens.timer.desc'), 
      component: <TimerMockup darkMode={false} />
    },
    { 
      title: t('screens.schedule.title'), 
      desc: t('screens.schedule.desc'), 
      component: <ScheduleMockup darkMode={false} />
    },
    { 
      title: t('screens.insights.title'), 
      desc: t('screens.insights.desc'), 
      component: <ResultMockup darkMode={false} /> 
    },
    { 
      title: t('screens.profile.title'), 
      desc: t('screens.profile.desc'), 
      component: <ProfileMockup darkMode={false} /> 
    }
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="screenshots" className="py-32 md:py-48 px-6 relative overflow-hidden bg-white">
      {/* Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-brand/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="container max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-24 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <span className="eyebrow-premium">{t('screens.eyebrow')}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[56px] font-black tracking-[-0.03em] mb-6 leading-tight font-display text-ink"
          >
            {t('screens.title1')} <br /> <span className="text-vibrant-gradient">{t('screens.title2')}</span> {t('screens.title3')}
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-xl md:text-2xl text-ink font-medium opacity-50"
          >
            {t('screens.desc')}
          </motion.p>
        </div>

        <div className="w-full relative group">
          {/* Custom Horizontal Scroll Area */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-8 md:gap-12 pb-20 px-4 md:px-24 items-start scroll-smooth"
          >
            {screenScaps.map((screen, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="group/item flex flex-col items-center flex-shrink-0 snap-center first:pl-0 last:pr-0"
              >
                {/* Mockup Container */}
                <div className="relative transition-all duration-700 group-hover/item:scale-[1.02] group-hover/item:-translate-y-4">
                   {screen.component}
                   
                   {/* Decorative Glow */}
                   <div className="absolute -inset-10 bg-brand/10 blur-[80px] -z-10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-700" />
                </div>

                 {/* Caption */}
                 <div className="mt-14 text-center">
                   <h3 className="text-[28px] md:text-[32px] font-black text-ink mb-1 uppercase tracking-tight leading-none">{screen.title}</h3>
                   <p className="text-ink/40 font-black text-[10px] md:text-[12px] uppercase tracking-[0.2em] leading-relaxed px-4">
                     {screen.desc}
                   </p>
                 </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-[40%] -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none hidden md:flex">
            <button 
              onClick={() => scroll("left")}
              className="w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-ink hover:bg-brand hover:text-white transition-all duration-300 pointer-events-auto active:scale-95"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-ink hover:bg-brand hover:text-white transition-all duration-300 pointer-events-auto active:scale-95"
            >
              <ChevronRight size={32} />
            </button>
          </div>
          
          {/* Scroll Hint Indicators / Dots */}
          <div className="flex justify-center gap-3 mt-4">
            {screenScaps.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand/20" />
            ))}
          </div>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-24 font-display text-[24px] md:text-[36px] text-brand/40 font-bold"
        >
          {t('screens.hint')}
        </motion.p>
      </div>
    </section>
  );
}
