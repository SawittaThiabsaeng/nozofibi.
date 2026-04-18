import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { MOODS } from "../constants/moods";

export default function Experience() {
  const { t } = useLanguage();
  const [selectedMoodId, setSelectedMoodId] = useState<string | null>("focused");
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const previewMoodIds = [
    "happy", "excited", "proud",
    "focused", "relaxed", "challenged",
    "bored", "tired", "distracted",
    "stress", "anxious", "sad"
  ];
  const previewMoods = MOODS.filter(m => previewMoodIds.includes(m.id));

  const currentMood = MOODS.find(m => m.id === selectedMoodId);

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white via-brand/5 to-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="eyebrow-premium mb-6">{t('exp.eyebrow')}</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 font-display">
                {t('exp.title')}
              </h2>
              <p className="text-xl text-ink-soft max-w-md">
                {t('exp.desc')}
              </p>
            </motion.div>

            <div className="space-y-4">
               <p className="font-black text-sm uppercase tracking-widest opacity-40">{t('exp.prompt')}</p>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {previewMoods.map((mood) => (
                    <button
                      key={mood.id}
                      onClick={() => setSelectedMoodId(mood.id)}
                      className={`flex flex-col items-center text-center gap-3 p-4 rounded-[24px] border-2 transition-all duration-300 ${
                        selectedMoodId === mood.id 
                        ? 'border-brand bg-white shadow-xl shadow-brand/10 -translate-y-1' 
                        : 'border-transparent bg-white/50 hover:bg-white hover:border-brand/20'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-110 ${mood.textColor} ${mood.color}`}>
                        {mood.imageUrl && !imgErrors[mood.id] ? (
                          <img 
                            src={mood.imageUrl} 
                            alt={t(mood.nameKey)} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                            onError={() => setImgErrors(prev => ({ ...prev, [mood.id]: true }))}
                          />
                        ) : (
                          <mood.icon className="w-5 h-5" />
                        )}
                      </div>
                      <span className="font-extrabold text-xs whitespace-nowrap">{t(mood.nameKey)}</span>
                    </button>
                  ))}
               </div>
            </div>
          </div>

          <div className="relative flex justify-center">
             <motion.div 
               layout
               className="phone ring-8 ring-black/5 bg-white !p-0 overflow-hidden relative shadow-2xl transition-colors duration-500"
               style={{
                  background: currentMood ? `linear-gradient(135deg, ${currentMood.rawColor}15, #ffffff, #ffffff)` : '#ffffff'
               }}
             >
                <div className="h-full w-full flex flex-col relative z-20">
                   <AnimatePresence mode="wait">
                      {currentMood ? (
                         <motion.div
                           key={currentMood.id}
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           className="flex flex-col h-full"
                         >
                            {/* Header */}
                            <div className="p-8 pb-4">
                               <span className="text-sm font-black text-ink/40">{t('exp.res.title')}</span>
                               <h3 className={`text-4xl font-black ${currentMood.textColor} tracking-tighter mt-1`}>
                                 {t(currentMood.nameKey)}
                               </h3>
                            </div>

                            {/* Main Result Card */}
                            <div className="flex-1 px-6 flex flex-col items-center justify-center">
                               <motion.div 
                                 initial={{ scale: 0.8, opacity: 0 }}
                                 animate={{ scale: 1, opacity: 1 }}
                                 transition={{ type: "spring", damping: 12, stiffness: 100 }}
                                 className="w-full max-w-[260px] bg-white border border-white p-8 rounded-[40px] shadow-2xl flex flex-col items-center gap-6"
                               >
                                  {/* Premium Visual Sphere */}
                                  <div className={`w-32 h-32 rounded-full flex items-center justify-center relative overflow-hidden ${currentMood.textColor}`}>
                                     <div 
                                       className="absolute inset-0 rounded-full blur-3xl opacity-30 bg-white"
                                     />
                                     <div 
                                       className="absolute inset-0 rounded-full blur-2xl opacity-40 transition-colors duration-1000"
                                       style={{ backgroundColor: currentMood.rawColor }} 
                                     />
                                     <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${currentMood.glow} opacity-40`} />
                                     
                                     {currentMood.imageUrl && !imgErrors[currentMood.id + '_detail'] ? (
                                       <motion.img 
                                         key={currentMood.imageUrl}
                                         initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                                         animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                         transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                         src={currentMood.imageUrl} 
                                         alt={t(currentMood.nameKey)}
                                         className="w-full h-full object-cover relative z-10"
                                         referrerPolicy="no-referrer"
                                         onError={() => setImgErrors(prev => ({ ...prev, [currentMood.id + '_detail']: true }))}
                                       />
                                     ) : (
                                       <currentMood.icon className="w-20 h-20 relative z-10" />
                                     )}
                                  </div>

                                  {/* Checked Pill */}
                                  <div 
                                    className={`px-5 py-2 rounded-full text-[11px] font-black ${currentMood.textColor} shadow-sm border border-white/50`}
                                    style={{ backgroundColor: `${currentMood.rawColor}15` }}
                                  >
                                     {t('exp.res.checked')}
                                  </div>

                                  {/* Message */}
                                  <p className="text-center text-sm font-bold text-ink/70 leading-relaxed px-2">
                                     {t(currentMood.messageKey)}
                                  </p>
                               </motion.div>
                            </div>

                            {/* Footer Buttons */}
                            <div className="p-6 grid grid-cols-2 gap-3 mt-auto">
                               <div 
                                 className="h-12 rounded-2xl flex items-center justify-center text-white font-black text-xs shadow-lg transition-transform active:scale-95 cursor-pointer"
                                 style={{ backgroundColor: currentMood.rawColor }}
                               >
                                  {t('exp.res.random')}
                               </div>
                               <div className="h-12 rounded-2xl flex items-center justify-center text-ink border border-border font-black text-xs bg-white transition-transform active:scale-95 cursor-pointer">
                                  {t('exp.res.back')}
                               </div>
                            </div>
                         </motion.div>
                      ) : (
                         <div className="flex h-full items-center justify-center p-12 text-center opacity-20">
                            <p className="font-black uppercase tracking-tighter">{t('exp.analytics.noMood')}</p>
                         </div>
                      )}
                   </AnimatePresence>
                </div>
                
                {/* Background lighting */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                   <div 
                     className="absolute top-0 right-0 w-80 h-80 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 transition-colors duration-1000 opacity-10"
                     style={{ backgroundColor: currentMood ? currentMood.rawColor : '#8B5CF6' }}
                    />
                </div>
             </motion.div>
             
             {/* Decorative label */}
             <div className="absolute -right-8 top-1/4 panel-premium p-4 hidden md:block z-30">
                <p className="text-[11px] font-black text-brand tracking-widest uppercase">{t('exp.res.title')}</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
