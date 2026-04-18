import React, { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { MOODS } from "../constants/moods";

export default function EmotionVisuals() {
  const { t } = useLanguage();
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-white">
      {/* Dynamic Vibrant Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 blur-[150px] rounded-full opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-info/10 blur-[150px] rounded-full opacity-30 pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Text Content (5 cols) */}
          <div className="lg:col-span-5 text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black tracking-[-0.05em] text-ink mb-8 leading-[1.05] font-sans"
            >
              <span className="text-vibrant-gradient">{t('viz.title')}</span><span className="text-brand">.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-ink-soft/50 leading-relaxed font-medium max-w-md"
            >
              {t('viz.desc')}
            </motion.p>
          </div>

          {/* Right: "Ball Merge" Style Cluster (7 cols) */}
          <div className="lg:col-span-12 xl:col-span-7 relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-visible mt-16 lg:mt-0">
            {/* Atmospheric Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 blur-[150px] rounded-full pointer-events-none opacity-60" />
            
            {/* THE "BALL MERGE" CLump - Wide Flex clump ensures NO overlap while staying compact vertically */}
            <div className="relative flex flex-wrap justify-center items-center gap-0 md:gap-1 max-w-[750px] mx-auto px-4">
              {MOODS.map((mood, idx) => {
                // "Normal" legible sizes - Varied but not jumbo or tiny
                const sizes = {
                  focused: 'w-48 h-48 md:w-60 md:h-60 z-[25]', 
                  happy: 'w-40 h-40 md:w-52 md:h-52 z-[20]',   
                  calm: 'w-36 h-36 md:w-46 md:h-46 z-[18]',    
                  love: 'w-32 h-32 md:w-42 md:h-42 z-[16]',    
                  motivated: 'w-30 h-30 md:w-40 md:h-40 z-[15]',
                  stressed: 'w-30 h-30 md:w-40 md:h-40 z-[14]', 
                  excited: 'w-28 h-28 md:w-38 md:h-38 z-[13]',  
                  trying: 'w-28 h-28 md:w-38 md:h-38 z-[12]',   
                  sleepy: 'w-28 h-28 md:w-36 md:h-36 z-[11]',  
                  bored: 'w-26 h-26 md:w-34 md:h-34 z-[10]',   
                  neutral: 'w-26 h-26 md:w-34 md:h-34 z-[9]',  
                  sad: 'w-24 h-24 md:w-32 md:h-32 z-[8]',      
                };
                
                const size = sizes[mood.id as keyof typeof sizes] || 'w-32 h-32';

                // Subtle organic rotations and minor offsets to create the "pile" feel within the flex layout
                const rotation = (idx % 3 === 0) ? 6 : (idx % 2 === 0) ? -6 : 2;
                // Add minor y-offset to make them "sit" better in the cluster
                const yOffset = (idx % 4 === 0) ? '-translate-y-2' : (idx % 5 === 0) ? 'translate-y-2' : '';

                return (
                  <motion.div
                    key={mood.id}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: idx * 0.04, 
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      zIndex: 100,
                      transition: { duration: 0.3 } 
                    }}
                    className={`group ${size} cursor-pointer relative shrink-0 transition-all duration-500 ${yOffset}`}
                    style={{ rotate: `${rotation}deg` }}
                  >
                    {/* Shadow & Glow layers */}
                    <div className={`absolute -inset-4 bg-gradient-to-br ${mood.glow} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700 rounded-full`} />
                    
                    <div className="relative w-full h-full bg-white backdrop-blur-3xl border-2 border-white/60 rounded-full flex flex-col items-center justify-center p-3 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1),inset_0_4px_12px_rgba(255,255,255,0.9)] hover:border-brand/40 transition-all duration-700 overflow-hidden">
                       {/* Color tint */}
                       <div className={`absolute inset-0 ${mood.color} opacity-10 group-hover:opacity-15 transition-opacity duration-500`} />
                       
                       <div className="relative z-10 w-full h-full flex items-center justify-center transition-all duration-1000 group-hover:scale-110">
                          {mood.imageUrl && !imgErrors[mood.id] ? (
                            <img 
                              src={mood.imageUrl} 
                              alt={t(mood.nameKey)} 
                              className="w-full h-full object-contain filter drop-shadow-md p-1"
                              referrerPolicy="no-referrer"
                              onError={() => setImgErrors(prev => ({ ...prev, [mood.id]: true }))}
                            />
                          ) : (
                            <mood.icon className={`w-1/2 h-1/2 ${mood.textColor}`} />
                          )}
                       </div>

                       {/* Hover Overlay */}
                       <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-white/95 via-white/40 to-transparent text-center">
                          <span className="font-black text-ink text-[10px] uppercase tracking-[0.2em] px-2 leading-none mb-1">
                            {t(mood.nameKey)}
                          </span>
                       </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
