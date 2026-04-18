import { motion } from "motion/react";
import { Timer, Heart, BarChart3, Palette } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Timer className="w-8 h-8" />,
      title: t('features.timer.title'),
      description: t('features.timer.desc'),
      color: "brand"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('features.mood.title'),
      description: t('features.mood.desc'),
      color: "pink"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: t('features.result.title'),
      description: t('features.result.desc'),
      color: "info"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: t('features.visuals.title'),
      description: t('features.visuals.desc'),
      color: "brand"
    }
  ];

  return (
    <section id="features" className="py-32 px-6 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[56px] font-black tracking-[-0.03em] mb-6 leading-tight text-balance text-ink"
          >
            {t('features.title1')} <br /> <span className="text-vibrant-gradient">{t('features.title2')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-ink-soft leading-relaxed font-medium"
          >
            {t('features.desc')}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="feature-card flex flex-col items-center text-center group"
            >
              <div className={`w-20 h-20 rounded-3xl mb-8 flex items-center justify-center transition-all duration-500 bg-${feature.color}/10 text-${feature.color} group-hover:bg-${feature.color} group-hover:text-white group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] shadow-inner`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight text-ink">{feature.title}</h3>
              <p className="text-ink font-medium leading-relaxed opacity-50">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
