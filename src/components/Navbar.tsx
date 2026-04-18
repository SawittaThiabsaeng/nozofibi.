import { motion } from "motion/react";
import Logo from "./Logo";
import { useLanguage } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex justify-between items-center p-8 px-12"
    >
      <div className="flex items-center gap-3">
        <Logo size={42} />
        <span className="font-display text-2xl font-bold tracking-tighter text-ink">Nozofibi</span>
      </div>
      
      <div className="hidden lg:flex items-center gap-12 text-[14px] font-bold text-ink-soft tracking-tight">
        <a href="#features" className="hover:text-ink transition-all duration-300">{t('nav.about')}</a>
        <a href="#how" className="hover:text-ink transition-all duration-300">{t('nav.features')}</a>
        <a href="#cta" className="hover:text-ink transition-all duration-300">{t('nav.support')}</a>
      </div>
      
      <div className="flex items-center gap-6">
        <button 
          onClick={() => setLanguage(language === 'en' ? 'th' : 'en')}
          className="flex items-center gap-2 text-[14px] font-bold text-ink-soft hover:text-brand transition-colors"
        >
          <Globe className="w-4 h-4" />
          {language === 'en' ? 'TH' : 'EN'}
        </button>
        <a 
          href="https://nozofibi.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-brand/10 text-brand border border-brand/20 rounded-full text-[14px] font-bold tracking-tight hover:bg-brand hover:text-white transition-all duration-500"
        >
          {t('nav.try')}
        </a>
      </div>
    </motion.nav>
  );
}
