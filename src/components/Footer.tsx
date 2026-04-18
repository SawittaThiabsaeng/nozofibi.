import Logo from "./Logo";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-24 px-6 border-t border-border/30 bg-white/50 backdrop-blur-md">
       <div className="container max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-3 mb-10">
             <Logo size={48} />
             <span className="font-display text-3xl font-bold tracking-tighter text-ink">Nozofibi</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-ink-soft text-sm font-bold uppercase tracking-widest mb-16 opacity-60">
             <a href="#" className="hover:text-brand transition-colors">{t('nav.support')}</a>
             <a href="https://nozofibi.web.app/privacy" className="hover:text-brand transition-colors">{t('footer.privacy')}</a>
             <a href="https://nozofibi.web.app/terms" className="hover:text-brand transition-colors">{t('footer.terms')}</a>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
             <p className="text-ink-soft text-sm font-medium">Nozofibi &middot; {t('footer.tagline')}</p>
             <p className="text-ink-soft text-xs opacity-50">Email: nozofibi@gmail.com</p>
          </div>
          
          <div className="mt-16 text-center text-[10px] uppercase underline underline-offset-8 decoration-brand/30 tracking-[0.2em] text-ink-soft opacity-30">
            &copy; {new Date().getFullYear()} Nozofibi. {t('footer.rights')}
          </div>
       </div>
    </footer>
  );
}
