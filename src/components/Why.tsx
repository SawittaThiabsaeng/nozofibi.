import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { Heart, Target, Sparkles } from "lucide-react";

export default function Why() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="eyebrow-premium mb-6">{t('why.eyebrow')}</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 font-display text-ink">
            {t('why.title1') || "Why"} <span className="text-vibrant-gradient">{t('why.title')}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Target className="w-8 h-8 text-brand" />, 
              text: t('why.content1'),
              delay: 0.1,
              bg: 'brand'
            },
            { 
              icon: <Heart className="w-8 h-8 text-pink" />, 
              text: t('why.content2'),
              delay: 0.2,
              bg: 'pink'
            },
            { 
              icon: <Sparkles className="w-8 h-8 text-info" />, 
              text: t('why.content3'),
              delay: 0.3,
              bg: 'info'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="vibrant-glass p-10 flex flex-col items-center text-center gap-6 group hover:translate-y-[-8px] transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-${item.bg} group-hover:text-white transition-all duration-500`}>
                {item.icon}
              </div>
              <p className="text-xl md:text-2xl font-bold leading-relaxed text-ink opacity-70">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
