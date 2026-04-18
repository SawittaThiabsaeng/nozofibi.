import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Target, TrendingUp, Play, Pause, RotateCcw, Activity, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function FocusHighlight() {
  const { t } = useLanguage();
  const [seconds, setSeconds] = useState(1500); // 25:00
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer: any;
    if (isActive) {
      timer = setInterval(() => {
        setSeconds(prev => (prev > 0 ? prev - 1 : 1500));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = seconds / 1500;

  return (
    <section id="focus-highlight" className="py-24 md:py-40 px-6 relative overflow-hidden bg-white">
      {/* Immersive Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-brand/30 blur-[150px] rounded-full animate-pulse transition-all duration-[5000ms]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-info/30 blur-[140px] rounded-full animate-pulse delay-1000 transition-all duration-[7000ms]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-brand/[0.05] rounded-full pointer-events-none" />
      </div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          
          {/* Left: Text Content - Editorial/Premium Style (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-8 text-[11px] font-black text-brand uppercase tracking-[0.4em]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_10px_#8B5CF6]" />
              Live Experience
            </div>
            
            <h2 className="text-6xl md:text-[92px] font-extrabold tracking-[-0.05em] text-ink mb-10 leading-[0.95] font-sans">
              The most<br />
              mindful way to<br />
              deep focus<span className="text-brand">.</span>
            </h2>
            
            <p className="text-xl text-ink-soft/40 mb-0 leading-relaxed max-w-lg font-medium">
              Nozofibi isn't just a timer. It's a workspace that respects your mental energy.
            </p>
          </motion.div>

          {/* Right: Floating Focus Panel (7 cols) */}
          <div className="lg:col-span-7 relative flex justify-center">
            
            {/* ✨ THE FLOATING PANEL (The Hero) */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Outer Glow Overlay (Matches 'mood.glow' concept) */}
                <div className="absolute -inset-16 bg-gradient-to-tr from-brand/40 to-info/40 blur-[120px] rounded-full opacity-60 pointer-events-none transition-all duration-1000" />

                {/* 🟠 THE ORB (Home Style Circle) */}
                <div 
                  onClick={() => setIsActive(!isActive)}
                  className="relative group cursor-pointer w-[420px] h-[420px] md:w-[600px] md:h-[600px] bg-white backdrop-blur-3xl border-2 border-white/70 rounded-full flex flex-col items-center justify-center p-12 md:p-16 shadow-[0_60px_120px_rgba(0,0,0,0.15),inset_0_12px_24px_rgba(255,255,255,1)] hover:border-brand/40 transition-all duration-700 overflow-hidden"
                >
                  
                  {/* Color tint layer (Matches 'mood.color' Concept) */}
                  <div className={`absolute inset-0 bg-brand/10 group-hover:bg-brand/15 transition-colors duration-700`} />

                  {/* Gradient Accent Overflow (Top Right) */}
                  <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-brand/15 to-transparent blur-3xl rounded-full" />
                  
                  <div className="flex flex-col items-center relative z-10 w-full h-full justify-center">
                    
                    {/* 🟣 CIRCULAR PROGRESS + TIMER */}
                    <div className="relative group/timer w-full h-full flex items-center justify-center">
                      <svg className="absolute inset-0 w-full h-full -rotate-90 scale-[0.85] md:scale-[0.88]">
                        {/* Background Ring - Subtle Track */}
                        <circle cx="50%" cy="50%" r="46%" className="fill-none stroke-ink/[0.02] stroke-[1.5]" />
                        <circle cx="50%" cy="50%" r="44%" className="fill-none stroke-brand/[0.05] stroke-[8]" />
                        
                        {/* ✨ Premium Progress Ring (Solid like Home Orbs) */}
                        <motion.circle 
                          cx="50%" cy="50%" r="44%" 
                          stroke="url(#timerGradient)"
                          strokeWidth="10"
                          pathLength="100"
                          strokeDasharray="100 100"
                          strokeDashoffset={100 - (progress * 100)}
                          strokeLinecap="round"
                          className="fill-none drop-shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-1000"
                        />
                        <defs>
                          <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#3B82F6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      
                      <div className="flex flex-col items-center">
                        <motion.div 
                          key={seconds} 
                          initial={{ opacity: 0.9 }} 
                          animate={{ opacity: 1 }} 
                          className="text-[100px] md:text-[140px] font-extralight text-ink tracking-[-0.04em] tabular-nums leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]"
                        >
                          {formatTime(seconds)}
                        </motion.div>
                        
                        <AnimatePresence mode="wait">
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-[10px] md:text-[12px] font-black text-ink-soft/20 uppercase tracking-[0.5em] mt-2 ml-1"
                          >
                            {isActive ? 'Focusing...' : 'Tap to Start'}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
