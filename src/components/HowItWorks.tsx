import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t('how.step1.title'),
      desc: t('how.step1.desc'),
      color: "brand"
    },
    {
      title: t('how.step2.title'),
      desc: t('how.step2.desc'),
      color: "pink"
    },
    {
      title: t('how.step3.title'),
      desc: t('how.step3.desc'),
      color: "info"
    }
  ];

  return (
    <section id="how" className="py-32 px-6 bg-white/30 backdrop-blur-sm border-y border-white flex flex-col items-center">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[56px] font-black tracking-[-0.03em]"
          >
            {t('how.title')}
          </motion.h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 panel-premium p-10 flex flex-col items-start gap-6 border-none shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-ink text-white flex items-center justify-center text-2xl font-black">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-2xl font-black mb-3 tracking-tight">{step.title}</h3>
                <p className="text-ink-soft leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
