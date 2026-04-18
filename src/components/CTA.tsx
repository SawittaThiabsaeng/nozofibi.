import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="cta" className="py-32 px-6 relative overflow-hidden">
      <div className="container max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="panel-premium p-16 md:p-24 text-center relative overflow-hidden flex flex-col items-center"
        >
          {/* Decorative Background Lighting */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-info/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="eyebrow-premium mb-10 relative z-10">
            <Sparkles className="w-4 h-4" />
            {t('cta.eyebrow')}
          </div>
          
          <h2 className="text-[40px] md:text-[64px] font-black leading-tight tracking-[-0.03em] mb-10 text-balance relative z-10">
            {t('cta.title')}
          </h2>
          
          <p className="text-xl md:text-2xl text-ink-soft mb-12 max-w-xl font-medium relative z-10 text-balance">
            {t('cta.desc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 relative z-10 w-full sm:w-auto">
             <a 
                href="https://nozofibi.web.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-premium-primary group flex items-center justify-center gap-2"
             >
                {t('cta.primary')} 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </a>
             <button className="btn-premium-secondary">
                {t('cta.secondary')}
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
