import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { 
  Smartphone, Battery, Wifi, Signal, Play, RotateCcw, Save, 
  CheckCircle2, ChevronRight, BarChart2, Calendar, Home, Timer, Clock, LayoutGrid, History,
  User as UserIcon, Heart, Flame, Sparkles, ArrowRight, Pencil, Settings, Moon, LogOut, Zap,
  Plus, BookOpen, Dumbbell, Search, Check, Trash2
} from "lucide-react";

export interface MockupProps {
  darkMode?: boolean;
}

const AppLogoIcon = ({ size = 24, color }: { size?: number, color?: string }) => (
  <div style={{ width: size, height: size }} className="relative">
    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logo-n-grad-mock" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#70A1FF" />
          <stop offset="50%" stopColor="#A29BFE" />
          <stop offset="100%" stopColor="#FF9FF3" />
        </linearGradient>
      </defs>
      <path
        d="M30 75V45C30 30 45 30 50 45V55C50 70 65 70 70 55V25"
        stroke={color === "white" ? "white" : "url(#logo-n-grad-mock)"}
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M78 10L81 18L89 21L81 24L78 32L75 24L67 21L75 18Z"
        fill="#FDCB6E"
      />
    </svg>
  </div>
);

const StatusBar = () => (
  <div className="w-full h-full flex justify-between items-center opacity-40 text-[9px] font-black tracking-tight">
    <span>9:41</span>
    <div className="flex gap-1 items-center">
      <Signal size={10} />
      <Wifi size={10} />
      <Battery size={10} />
    </div>
  </div>
);

const Navbar = ({ active = "Home", darkMode = true }: { active?: string, darkMode?: boolean }) => {
  const { t } = useLanguage();
  return (
    <div className={`absolute bottom-3 left-4 right-4 h-[72px] flex items-center justify-around px-2 z-30 transition-all duration-500 ${darkMode ? 'bg-[#2D2A4A]/95 border border-white/10 rounded-[36px] shadow-2xl' : 'bg-white border border-slate-100 rounded-[36px] shadow-[0_20px_50px_rgba(0,0,0,0.08)]'}`}>
      {[
        { id: "Home", icon: Home, label: t('mock.home') },
        { id: "Timer", icon: Timer, label: t('mock.timer') },
        { id: "Schedule", icon: Calendar, label: t('mock.schedule') },
        { id: "Insights", icon: BarChart2, label: t('mock.insights') },
        { id: "Profile", icon: UserIcon, label: t('mock.profile') },
      ].map((item) => {
        const isActive = active === item.id;
        return (
          <div key={item.id} className="flex flex-col items-center gap-1 group cursor-pointer">
            <div className={`w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 ${isActive ? 'bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/30' : 'text-slate-400'}`}>
              <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span className={`text-[10px] font-bold transition-colors ${isActive ? 'text-[#8B5CF6]' : 'text-slate-400'}`}>
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export const DashboardMockup: React.FC<MockupProps> = ({ darkMode = true }) => {
  const { t } = useLanguage();
  return (
    <div className={`phone !p-0 ${darkMode ? 'dark !bg-[#1E1B4B]' : '!bg-white'} relative font-sans overflow-hidden ring-1 ring-inset ring-black/5 flex flex-col`}>
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/25 blur-[90px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/25 blur-[90px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Fixed Status Bar Container */}
      <div className="absolute top-0 left-0 right-0 h-10 z-[60] bg-transparent pointer-events-none flex items-center px-6">
        <StatusBar />
      </div>
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth p-5 pt-10 pb-24">
        {/* Profile Row */}
        <div className="flex items-start justify-between mb-5 px-0.5">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-full flex items-center justify-center border ${darkMode ? 'bg-[#2D2A4A] border-[#3D3A5D]' : 'bg-white border-slate-100 shadow-sm'}`}>
              <div className="w-9 h-9 rounded-full bg-slate-100 overflow-hidden flex items-center justify-center text-slate-400">
                 <UserIcon size={18} />
              </div>
            </div>
            <div className="text-left">
              <h3 className={`font-black text-[17px] leading-none mb-1 ${darkMode ? 'text-white' : 'text-[#243145]'}`}>User</h3>
              <p className={`text-[10px] font-bold opacity-30 ${darkMode ? 'text-white' : 'text-[#8A9AB2]'}`}>Saturday 18 April</p>
            </div>
          </div>
          <div className="w-6 h-6 mt-1 underline-offset-4 decoration-brand decoration-2">
             <AppLogoIcon size={24} />
          </div>
        </div>

      {/* Unified Mood Card */}
      <div className={`rounded-[32px] overflow-hidden border mb-6 ${darkMode ? 'bg-[#1E1B4B] border-[#3D3A5D]' : 'bg-white border-[#E6EAF2] shadow-[0_15px_35px_rgba(0,0,0,0.03)]'}`}>
         {/* Top Part: Insights / Emotion Analytics */}
         <div className="bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] p-5 pb-6 text-left relative overflow-hidden">
            <div className="absolute top-4 right-1 opacity-10 pointer-events-none">
               <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                 <Heart size={48} fill="white" className="stroke-none opacity-40" />
               </div>
            </div>
            <span className="inline-block bg-white/20 backdrop-blur-md rounded-lg px-2.5 py-1 text-[9px] font-black text-white mb-3 tracking-widest uppercase">{t('mock.insightsPill')}</span>
            <h4 className="text-white font-black text-[22px] leading-tight mb-1">{t('mock.emotionAnalytics')}</h4>
            <p className="text-white/80 text-[11px] font-medium mb-4 leading-relaxed max-w-[180px]">{t('mock.trackMood')}</p>
            <div className="flex items-center gap-1.5 text-white font-black text-[11px] group cursor-pointer transition-all hover:gap-2">
               {t('mock.viewAnalysis')} <ArrowRight size={12} strokeWidth={3} />
            </div>
         </div>
         
         {/* Bottom Part: Today's Mood */}
         <div className={`p-5 text-left ${darkMode ? 'bg-[#2D2A4A]' : 'bg-white'}`}>
            <div className="flex items-center justify-between mb-4">
               <h4 className={`font-black text-[17px] ${darkMode ? 'text-white' : 'text-[#243145]'}`}>{t('mock.todaysMood')}</h4>
               <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${darkMode ? 'bg-white/5' : 'bg-[#F3F6FA]'}`}>
                  <Sparkles size={18} className={darkMode ? 'text-brand' : 'text-[#B5C1D2]'} />
               </div>
            </div>
            <p className={`text-[12px] font-medium leading-relaxed mb-6 ${darkMode ? 'text-white/30' : 'text-[#8A9AB2]/70'}`}>
               {t('mock.noCheckIn')}
            </p>
            <div className="flex gap-4">
               <button className="flex-[1.2] h-14 bg-[#8B5CF6]/90 rounded-[28px] text-white font-black text-[12px] shadow-lg shadow-brand/20 active:scale-95 transition-all flex items-center px-5 gap-3" >
                  <LayoutGrid size={22} strokeWidth={2.5} className="shrink-0" />
                  <div className="flex flex-col items-start leading-tight text-left">
                    <span>Check Mood</span>
                    <span>Now</span>
                  </div>
               </button>
               <button className={`flex-1 h-14 rounded-[28px] border-2 font-black text-[13px] active:scale-95 transition-all flex items-center justify-center gap-2.5 ${darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-slate-100 text-[#243145]/70 shadow-sm'}`}>
                  <History size={18} className="opacity-60 shrink-0" strokeWidth={2.5} />
                  <span>History</span>
               </button>
            </div>
         </div>
      </div>

      {/* Wellness Metrics */}
      <h4 className={`text-left font-black text-[13px] mb-4 px-1 opacity-70 ${darkMode ? 'text-white' : 'text-[#243145]'}`}>{t('mock.wellnessMetrics')}</h4>
      <div className="grid grid-cols-2 gap-4 mb-6">
         {[
           { icon: Calendar, label: t('mock.today'), val: "0.0h", color: "text-blue-500", iconBg: "bg-blue-50" },
           { icon: Flame, label: t('mock.streak'), val: "1d", color: "text-orange-500", iconBg: "bg-orange-50" },
         ].map((m, i) => (
           <div key={i} className={`p-5 rounded-[28px] border-2 flex flex-col justify-between items-start transition-all hover:scale-105 ${darkMode ? 'bg-white/5 border-white/5' : 'bg-white border-[#F8FAFC]'}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${darkMode ? 'bg-white/5' : m.iconBg}`}>
                <m.icon size={20} className={m.color} />
              </div>
              <div className="text-left w-full mt-6">
                 <p className={`text-[10px] font-black tracking-widest uppercase mb-1 opacity-40 ${darkMode ? 'text-white' : 'text-slate-500'}`}>{m.label}</p>
                 <p className={`text-[19px] font-black ${darkMode ? 'text-white' : 'text-[#243145]'}`}>{m.val}</p>
              </div>
           </div>
         ))}
      </div>

      </div>

      <Navbar active="Home" darkMode={darkMode} />
    </div>
  );
};

export const TimerMockup: React.FC<MockupProps> = ({ darkMode = true }) => {
  const { t } = useLanguage();
  return (
    <div className={`phone !p-0 ${darkMode ? 'dark !bg-[#1E1B4B]' : '!bg-white'} text-center overflow-hidden ring-1 ring-inset ring-black/5 flex flex-col relative`}>
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/25 blur-[90px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/25 blur-[90px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-10 z-[60] flex items-center px-6">
        <StatusBar />
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pt-16 pb-24 px-6 relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className={`text-[26px] font-black tracking-tight font-display ${darkMode ? 'text-white' : 'text-slate-900'} leading-none mb-1`}>{t('mock.timer')}</h3>
          <p className={`text-[11px] font-bold opacity-40 uppercase tracking-widest ${darkMode ? 'text-slate-200' : 'text-slate-500'}`}>{t('mock.pomodoroProtocol')}</p>
        </div>
      
        {/* 🔥 Time Presets - Consistent Pill Shapes & Gradients */}
        <div className="flex gap-2 justify-center mb-8 w-full max-w-[280px]">
           <button className="flex-1 h-11 rounded-full bg-gradient-to-br from-[#A29BFE] to-[#8B5CF6] text-white font-black text-[15px] shadow-md shadow-purple-400/10 transition-all active:scale-95 opacity-90">25</button>
           <button className="flex-1 h-11 rounded-full bg-gradient-to-br from-[#A29BFE] to-[#8B5CF6] text-white font-black text-[15px] shadow-md shadow-purple-400/10 transition-all active:scale-95 opacity-90">50</button>
           <button className="flex-[1.5] h-11 rounded-full bg-gradient-to-br from-[#A29BFE] to-[#8B5CF6] text-white font-black text-[14px] shadow-md shadow-purple-400/10 transition-all active:scale-95 opacity-90">{t('mock.custom')}</button>
        </div>

        {/* ⏳ Main Timer Ring - Conic Gradient Sweep */}
        <div className="w-full flex flex-col items-center mb-10">
          <div className="relative w-[190px] h-[190px] flex items-center justify-center">
             {/* Linear Gradient Progress Ring (Left to Right) - Balanced Thickness */}
             <div 
               className="absolute inset-0 rounded-full" 
               style={{ 
                 background: 'linear-gradient(to right, #8B5CF6 0%, #EDE9FE 100%)',
                 mask: 'radial-gradient(transparent 59%, black 60%)',
                 WebkitMask: 'radial-gradient(transparent 59%, black 60%)'
               }} 
             />
             
             {/* Indicator dot at 12 o'clock */}
             <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-2 border-[#8B5CF6] rounded-full z-20 shadow-md" />
             
             {/* Time Display */}
             <div className="flex flex-col items-center relative z-10">
                <span className={`text-[36px] font-black tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'} leading-none`}>00:25:00</span>
             </div>
          </div>
          
          {/* Progress Pill Badge */}
          <div className="mt-10 px-5 py-1.5 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] rounded-full text-white text-[11px] font-black flex items-center gap-1.5 shadow-xl shadow-purple-500/20">
             <Zap size={14} fill="white" className="stroke-none" /> 0%
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-6 w-full max-w-[280px]">
           <button className="w-12 h-12 rounded-full flex items-center justify-center bg-[#81BCFB] text-white shadow-lg shadow-blue-400/15 transition-all active:scale-90">
              <RotateCcw size={22} strokeWidth={3} />
           </button>
           
           <button className="w-20 h-20 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] text-white flex items-center justify-center shadow-2xl shadow-purple-500/30 transition-all active:scale-95 group">
              <Play size={40} fill="white" className="translate-x-0.5 group-active:scale-90 transition-transform" />
           </button>
           
           <button className="w-12 h-12 rounded-full flex items-center justify-center bg-[#5ED7A2] text-white shadow-lg shadow-green-400/15 transition-all active:scale-90">
              <Save size={22} strokeWidth={3} />
           </button>
        </div>
      </div>

      <Navbar active="Timer" darkMode={darkMode} />
    </div>
  );
};

export const ScheduleMockup: React.FC<MockupProps> = ({ darkMode = true }) => {
  const { t } = useLanguage();
  return (
    <div className={`phone !p-0 ${darkMode ? 'dark !bg-[#1E1B4B]' : '!bg-white'} relative font-sans overflow-hidden ring-1 ring-inset ring-black/5 flex flex-col`}>
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/25 blur-[90px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/25 blur-[90px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      {/* Fixed Status Bar Container */}
      <div className="absolute top-0 left-0 right-0 h-10 z-[60] bg-transparent pointer-events-none flex items-center px-6">
        <StatusBar />
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pt-20 pb-24 px-6 relative z-10">
        {/* Header Row */}
        <div className="flex items-center justify-between mb-2">
          <h3 className={`text-[32px] font-black tracking-tight font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>{t('mock.schedule')}</h3>
          <div className="flex gap-2">
            <button className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${darkMode ? 'bg-white/10 text-white' : 'bg-white text-[#8B5CF6] shadow-sm ring-1 ring-inset ring-black/5'}`}>
              <Calendar size={20} strokeWidth={2.5} />
            </button>
            <button className="w-12 h-12 rounded-full flex items-center justify-center bg-[#8B5CF6] text-white shadow-lg shadow-purple-500/20 active:scale-95 transition-transform">
              <Plus size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
        
        {/* Date Month Display */}
        <p className={`text-[12px] font-bold mb-6 px-1 ${darkMode ? 'text-white/60' : 'text-slate-400'}`}>April 2026</p>

        {/* Horizontal Date Selector */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 mb-8 -mx-1 px-1">
          {[
            { day: 'Fri', date: '17', active: true },
            { day: 'Sat', date: '18', active: false },
            { day: 'Sun', date: '19', active: false },
            { day: 'Mon', date: '20', active: false },
            { day: 'Tue', date: '21', active: false },
          ].map((item, i) => (
            <div 
              key={i} 
              className={`flex-shrink-0 w-16 h-24 rounded-[28px] flex flex-col items-center justify-center transition-all duration-300 ${
                item.active 
                ? 'bg-[#8B5CF6] text-white shadow-xl shadow-purple-500/30' 
                : darkMode ? 'bg-white/5 text-white' : 'bg-white ring-1 ring-inset ring-black/[0.03] text-slate-900 shadow-sm'
              }`}
            >
              <span className={`text-[10px] font-black uppercase mb-1 ${item.active ? 'text-white/80' : 'opacity-40'}`}>{item.day}</span>
              <span className="text-[22px] font-black leading-none">{item.date}</span>
            </div>
          ))}
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {[
            { time: "8:00 AM", title: t('mock.reading'), type: t('mock.reading'), icon: <BookOpen size={18} />, completed: false },
            { time: "1:00 PM", title: t('mock.gym'), type: "Exercise", icon: <Dumbbell size={18} />, completed: false },
            { time: "4:00 PM", title: t('mock.math'), type: "Study", icon: <Search size={18} />, completed: false },
          ].map((task, i) => (
            <div 
              key={i} 
              className={`flex items-center gap-4 p-4 rounded-[32px] transition-all shadow-sm ${
                darkMode ? 'bg-white/5 border border-white/5' : 'bg-white ring-1 ring-inset ring-black/[0.02]'
              }`}
            >
              {/* Task Icon Box */}
              <div className="w-12 h-12 rounded-2xl flex-shrink-0 bg-purple-500/10 flex items-center justify-center text-[#8B5CF6]">
                {task.icon}
              </div>
              
              {/* Task Details */}
              <div className="flex-1 min-w-0">
                <span className={`text-[10px] font-bold block mb-0.5 ${darkMode ? 'text-white/40' : 'text-slate-400'}`}>{task.time}</span>
                <h4 className={`text-[15px] font-black truncate ${darkMode ? 'text-white' : 'text-slate-900'}`}>{task.title}</h4>
                <span className={`text-[11px] font-bold block opacity-40 uppercase tracking-tight ${darkMode ? 'text-white' : 'text-slate-500'}`}>{task.type}</span>
              </div>

              {/* Status Circle */}
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${task.completed ? 'bg-[#8B5CF6] border-[#8B5CF6]' : 'border-purple-300 opacity-60'}`}>
                  {task.completed && <Check size={14} className="text-white" />}
                </div>
                
                {/* Delete Button */}
                <button className="text-red-400 opacity-60 hover:opacity-100 transition-opacity p-1">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Navbar active="Schedule" darkMode={darkMode} />
    </div>
  );
};

export const QuizMockup: React.FC<MockupProps> = ({ darkMode = true }) => {
  return (
    <div className={`phone !p-0 ${darkMode ? 'dark' : ''} overflow-hidden ring-1 ring-inset ring-black/5`}>
      {/* Fixed Status Bar Container */}
      <div className="absolute top-0 left-0 right-0 h-10 z-[60] bg-transparent pointer-events-none flex items-center px-6">
        <StatusBar />
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth p-5 pt-10 pb-24">
        <div className="flex items-center gap-4 mb-8">
         <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-white opacity-60">
            <ChevronRight size={18} className="rotate-180" />
         </div>
         <h3 className="title !text-xl !m-0">Mood Quiz</h3>
      </div>

      <div className="bg-[#2D2A4A] border border-[#3D3A5D] rounded-[40px] p-8 text-center shadow-2xl mb-6 mt-10">
         <div className="w-20 h-20 rounded-[30px] bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-pink-500/20">
            <Heart size={32} fill="white" />
         </div>
         <h3 className="title !text-2xl mb-4">How are you, really?</h3>
         <p className="sub opacity-70 mb-10 leading-relaxed px-4">Take a quick 5-question quiz to discover your current emotional state.</p>
         <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-black py-5 rounded-3xl transition-all shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-2 group">
           Start Quiz <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
         </button>
      </div>
      
      <div className="px-4">
        <div className="q-progress !bg-slate-800 mb-6">
           <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: "40%" }}
             className="h-full bg-brand rounded-full shadow-[0_0_10px_rgba(205,180,219,0.5)]" 
           />
        </div>
        
        <div className="space-y-3">
          {[
            { k: "A", t: "I feel quite energetic and ready" },
            { k: "B", t: "Feeling a bit low on focus today" },
            { k: "C", t: "Calm and peaceful environment" },
          ].map((opt) => (
            <div key={opt.k} className="bg-[#2D2A4A]/40 border border-[#3D3A5D] rounded-2xl p-4 flex gap-4 items-center">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-black text-xs">{opt.k}</div>
              <span className="text-white/80 text-sm font-medium">{opt.t}</span>
            </div>
          ))}
        </div>
      </div>

      </div>
    </div>
  );
};

export const ResultMockup: React.FC<MockupProps> = ({ darkMode = true }) => {
  const { t } = useLanguage();
  return (
    <div className={`phone !p-0 ${darkMode ? 'dark !bg-[#1E1B4B]' : '!bg-[#F6F4FA]'} relative font-sans overflow-hidden text-left ring-1 ring-inset ring-black/5 flex flex-col`}>
      {/* Fixed Status Bar Container */}
      <div className="absolute top-0 left-0 right-0 h-10 z-[60] bg-transparent pointer-events-none flex items-center px-6">
        <StatusBar />
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth p-5 pt-10 pb-24">
        {/* Background Blobs for specific screen mood */}
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-purple-500/25 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-blue-500/25 blur-[90px] rounded-full pointer-events-none" />

        <div className="flex items-center justify-between mb-8 px-1">
           <h3 className={`font-black text-2xl tracking-tight ${darkMode ? 'text-white' : 'text-[#2c2a4a]'}`}>{t('mock.insights')}</h3>
        </div>

        {/* Weekly Summary Card */}
        <div className={`rounded-[32px] p-6 mb-6 border transition-all ${darkMode ? 'bg-white/5 border-white/10 backdrop-blur-xl' : 'bg-white border-white/60 shadow-sm'}`}>
           <p className={`text-[9px] uppercase tracking-widest font-black mb-4 opacity-40 ${darkMode ? 'text-white' : 'text-[#5e5b8a]'}`}>Weekly Summary</p>
           <h4 className={`text-sm font-bold opacity-60 mb-2 ${darkMode ? 'text-white' : 'text-[#5e5b8a]'}`}>Total Focus This Week:</h4>
           <p className={`text-3xl font-black mb-5 tracking-tight ${darkMode ? 'text-white' : 'text-[#2c2a4a]'}`}>00:01:43</p>
           <div className={`space-y-1.5 opacity-60 text-[11px] font-bold ${darkMode ? 'text-white' : 'text-[#5e5b8a]'}`}>
              <p>Average Per Day: 00:00:14</p>
              <p>Best Day: <span className="text-indigo-400">Thu</span></p>
           </div>
        </div>

        {/* Weekly Focus Bar Chart */}
        <div className={`rounded-[32px] p-6 mb-6 border transition-all ${darkMode ? 'bg-white/5 border-white/10 backdrop-blur-xl' : 'bg-white border-white/60 shadow-sm'}`}>
           <p className={`text-[9px] uppercase tracking-widest font-black mb-6 opacity-40 ${darkMode ? 'text-white' : 'text-[#5e5b8a]'}`}>Weekly Focus</p>
           <div className="flex justify-between items-end h-28 gap-1.5 px-0.5">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                const h = day === 'Thu' ? '100%' : i === 0 ? '15%' : i === 2 ? '30%' : '8%';
                const active = day === 'Thu';
                return (
                  <div key={day} className="flex flex-col items-center gap-3 flex-1">
                    <div className={`w-full rounded-full relative overflow-hidden ${darkMode ? 'bg-white/5' : 'bg-slate-100'}`} style={{ height: '70px' }}>
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: h }}
                        className={`absolute bottom-0 left-0 right-0 rounded-full ${active ? 'bg-indigo-500 shadow-lg shadow-indigo-500/40' : darkMode ? 'bg-white/10' : 'bg-[#CDB4DB]/40'}`}
                      />
                    </div>
                    <span className={`text-[8px] font-black uppercase ${active ? 'text-indigo-400' : 'opacity-40'}`}>{day}</span>
                  </div>
                );
              })}
           </div>
        </div>

        {/* Recent Sessions List */}
        <div className={`rounded-[32px] p-6 border transition-all ${darkMode ? 'bg-white/5 border-white/10 backdrop-blur-xl' : 'bg-white border-white/60 shadow-sm'}`}>
           <p className={`text-[9px] uppercase tracking-widest font-black mb-4 opacity-40 ${darkMode ? 'text-white' : 'text-[#5e5b8a]'}`}>Recent Sessions</p>
           <div className="space-y-4">
              {[
                { title: "Focus Session", time: "00:01:43", date: "16 Apr, 22:37" },
                { title: "Meditation", time: "00:10:00", date: "15 Apr, 08:15" },
              ].map((s, i) => (
                <div key={i} className={`flex items-center justify-between pb-3 ${i === 0 ? 'border-b border-indigo-500/10' : ''}`}>
                  <div className="text-left">
                    <h5 className={`font-bold text-[12px] mb-0.5 ${darkMode ? 'text-white' : 'text-[#2c2a4a]'}`}>{s.title}</h5>
                    <p className="text-[9px] font-black opacity-30 uppercase tracking-wider">{s.date}</p>
                  </div>
                  <span className={`font-black text-[12px] ${darkMode ? 'text-white' : 'text-[#2c2a4a]'}`}>{s.time}</span>
                </div>
              ))}
           </div>
           
           {/* Pagination Mockup */}
           <div className="flex justify-between items-center mt-6 pt-4 border-t border-black/5">
              <div className="text-[10px] font-black opacity-20 uppercase tracking-widest">Page 1</div>
              <div className="flex gap-2">
                 <div className="w-6 h-6 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 opacity-20"><ChevronRight size={14} className="rotate-180" /></div>
                 <div className="w-6 h-6 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400"><ChevronRight size={14} /></div>
              </div>
           </div>
        </div>
      </div>

      <Navbar active="Insights" darkMode={darkMode} />
    </div>
  );
};

export const ProfileMockup: React.FC<MockupProps> = ({ darkMode = false }) => {
  const { t } = useLanguage();
  return (
    <div className={`phone !p-0 ${darkMode ? 'dark !bg-[#1E1B4B]' : '!bg-white'} relative font-sans overflow-hidden ring-1 ring-inset ring-black/5 flex flex-col`}>
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/25 blur-[90px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/25 blur-[90px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Fixed Status Bar Container */}
      <div className="absolute top-0 left-0 right-0 h-10 z-[60] bg-transparent pointer-events-none flex items-center px-6">
        <StatusBar />
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth p-5 pt-10 pb-24">
        {/* App Logo Top Right */}
        <div className="flex justify-end mb-2 pr-1">
          <div className="w-10 h-10 opacity-70">
            <AppLogoIcon size={32} />
          </div>
        </div>

        {/* PROFILE HEADER */}
      <div className="flex flex-col items-center mb-10 relative z-10">
        <div className="relative mb-6">
          <div className={`w-34 h-34 rounded-full flex items-center justify-center transition-all ${darkMode ? 'bg-[#111827] border border-white/10' : 'bg-white border border-slate-100 shadow-lg'}`}>
            <div className={`w-32 h-32 rounded-full overflow-hidden flex items-center justify-center ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
              <img 
                src="https://picsum.photos/seed/user-nozofibi/400/400" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
        
        <h3 className={`font-black text-3xl mb-1 ${darkMode ? 'text-white' : 'text-[#1E1B4B]'}`}>User</h3>
        <p className={`text-[13px] font-medium ${darkMode ? 'text-white/40' : 'text-[#2D2A4A]/50'}`}>
          {t('mock.currentStreak')}
        </p>
      </div>

      {/* SETTINGS SECTION */}
      <div className="px-1 text-left relative z-10">
        <h4 className={`text-[16px] font-bold mb-4 ${darkMode ? 'text-white' : 'text-[#1E1B4B]'}`}>
          {t('mock.systemSettings')}
        </h4>
        
        <div className={`rounded-[32px] overflow-hidden border transition-all ${darkMode ? 'bg-white/5 border-white/10' : 'bg-white border-[#F1F5F9] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]'}`}>
          {[
            { 
              icon: <Pencil size={18} />, 
              label: t('mock.editProfile'), 
              bgColor: "bg-[#F3E8FF]", 
              iconColor: "text-[#8B5CF6]" 
            },
            { 
              icon: <Settings size={18} />, 
              label: t('mock.accountSettings'), 
              bgColor: "bg-[#F3E8FF]", 
              iconColor: "text-[#8B5CF6]" 
            },
            { 
              icon: <Moon size={18} />, 
              label: t('mock.darkMode'), 
              bgColor: "bg-[#F3E8FF]", 
              iconColor: "text-[#8B5CF6]",
              toggle: true 
            },
            { 
              icon: <Heart size={18} />, 
              label: t('mock.favorites'), 
              bgColor: "bg-[#F3E8FF]", 
              iconColor: "text-[#8B5CF6]" 
            },
            { 
              icon: <Sparkles size={18} />, 
              label: t('mock.premium'), 
              bgColor: "bg-[#F3E8FF]", 
              iconColor: "text-[#8B5CF6]" 
            },
            { 
              icon: <Calendar size={18} />, 
              label: t('mock.exportData'), 
              bgColor: "bg-[#F3E8FF]", 
              iconColor: "text-[#8B5CF6]" 
            },
            { 
              icon: <LogOut size={18} />, 
              label: t('mock.signOut'), 
              labelColor: "text-red-500",
              bgColor: "bg-[#F3E8FF]", 
              iconColor: "text-[#8B5CF6]",
              isLast: true 
            },
          ].map((item, i) => (
            <div key={i} className={`flex items-center justify-between p-4 px-5 ${!item.isLast ? 'border-b' : ''} ${darkMode ? 'border-white/5' : 'border-slate-50'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.bgColor}`}>
                   {React.cloneElement(item.icon as React.ReactElement, { className: item.iconColor })}
                </div>
                <span className={`font-bold text-base ${item.labelColor || (darkMode ? 'text-white' : 'text-[#1E1B4B]')}`}>{item.label}</span>
              </div>
              
              {item.toggle ? (
                <div className={`w-12 h-7 rounded-full relative p-1 transition-colors ${darkMode ? 'bg-purple-600' : 'bg-[#B2BEC3]'}`}>
                   <div className={`absolute w-5 h-5 bg-white rounded-full shadow-sm transition-all duration-300 ${darkMode ? 'right-1' : 'left-1'}`} />
                </div>
              ) : (
                <ChevronRight size={18} className="opacity-30" />
              )}
            </div>
          ))}
        </div>
      </div>

      </div>

      <Navbar active="Profile" darkMode={darkMode} />
    </div>
  );
};
