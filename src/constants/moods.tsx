import React from "react";
import { motion } from "motion/react";

// --- Premium Mood Icons ---

export const HappyIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 55C40 55 45 65 50 65C55 65 60 55 60 55" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="42" cy="45" r="3" fill="currentColor"/>
    <circle cx="58" cy="45" r="3" fill="currentColor"/>
  </svg>
);

export const ExcitedIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 25L57.5 42.5H75L60 55L65 75L50 62.5L35 75L40 55L25 42.5H42.5L50 25Z" fill="currentColor"/>
  </svg>
);

export const LoveIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 30C50 30 55 25 65 25C75 25 80 35 80 45C80 65 50 80 50 80C50 80 20 65 20 45C20 35 25 25 35 25C45 25 50 30 50 30Z" fill="currentColor"/>
  </svg>
);

export const FocusedIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="4" opacity="0.3"/>
    <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="4" opacity="0.6"/>
    <circle cx="50" cy="50" r="5" fill="currentColor"/>
  </svg>
);

export const CalmIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M25 45C30 45 35 40 40 40C45 40 50 45 55 45C60 45 65 40 70 40C75 40 80 45 85 45" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M25 60C30 60 35 55 40 55C45 55 50 60 55 60C60 60 65 55 70 55C75 55 80 60 85 60" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
  </svg>
);

export const MotivatedIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 20L30 65H45L40 85L70 40H55L65 15L50 20Z" fill="currentColor"/>
  </svg>
);

export const BoredIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="6"/>
    <path d="M40 60H60" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
    <circle cx="42" cy="45" r="2" fill="currentColor"/>
    <circle cx="58" cy="45" r="2" fill="currentColor"/>
  </svg>
);

export const TiredIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M70 50C70 61.0457 61.0457 70 50 70C38.9543 70 30 61.0457 30 50C30 38.9543 38.9543 30 50 30C52.1469 30 54.2017 30.3377 56.126 30.9622C52.5186 33.626 50.1818 37.9392 50.1818 42.8182C50.1818 51.1009 56.8991 57.8182 65.1818 57.8182C67.0673 57.8182 68.8601 57.4705 70.5108 56.8329C70.176 54.606 70 52.3235 70 50Z" fill="currentColor"/>
  </svg>
);

export const NeutralIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M40 70C30 70 25 60 25 50C25 40 30 30 40 30C45 20 55 20 60 30C70 30 75 40 75 50C75 60 70 70 60 70H40Z" fill="currentColor" opacity="0.6"/>
  </svg>
);

export const StressIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M55 20L30 55H45L40 80L65 45H50L55 20Z" fill="currentColor"/>
  </svg>
);

export const AnxiousIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="8" strokeDasharray="100 50"/>
    <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="4" opacity="0.5"/>
  </svg>
);

export const SadIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M60 65C60 65 55 55 50 55C45 55 40 65 40 65" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="42" cy="45" r="3" fill="currentColor"/>
    <circle cx="58" cy="45" r="3" fill="currentColor"/>
  </svg>
);

export interface MoodData {
  id: string;
  nameKey: string;
  icon: (props: { className?: string }) => React.JSX.Element;
  imageUrl?: string; 
  color: string; // Tailwind class for background
  glow: string; // Tailwind class for glow gradient
  messageKey: string;
  textColor: string; // Color for the icon itself
  rawColor: string;
}

export const MOODS: MoodData[] = [
  // --- JOYFUL ---
  {
    id: "happy",
    nameKey: "mood.happy",
    icon: HappyIcon,
    imageUrl: "/Happy.svg", 
    color: "bg-[#FFD60A]/20",
    glow: "from-[#FFD60A] to-transparent",
    messageKey: "exp.msg.happy",
    textColor: "text-[#FFD60A]",
    rawColor: "#FFD60A"
  },
  {
    id: "excited",
    nameKey: "mood.excited",
    icon: ExcitedIcon,
    imageUrl: "/Excited.svg", 
    color: "bg-[#C084CC]/20",
    glow: "from-[#C084CC] to-transparent",
    messageKey: "exp.msg.excited",
    textColor: "text-[#C084CC]",
    rawColor: "#C084CC"
  },
  {
    id: "love",
    nameKey: "mood.love",
    icon: LoveIcon,
    imageUrl: "/Love.svg", 
    color: "bg-[#EC4899]/20",
    glow: "from-[#EC4899] to-transparent",
    messageKey: "exp.msg.proud",
    textColor: "text-[#EC4899]",
    rawColor: "#EC4899"
  },
  // --- PRODUCTIVE ---
  {
    id: "focused",
    nameKey: "mood.focused",
    icon: FocusedIcon,
    imageUrl: "/Focused.svg", 
    color: "bg-[#1E40AF]/20",
    glow: "from-[#1E40AF] to-transparent",
    messageKey: "exp.msg.focused",
    textColor: "text-[#1E40AF]",
    rawColor: "#1E40AF"
  },
  {
    id: "calm",
    nameKey: "mood.calm",
    icon: CalmIcon,
    imageUrl: "/Calm.svg", 
    color: "bg-[#06B6D4]/20",
    glow: "from-[#06B6D4] to-transparent",
    messageKey: "exp.msg.relaxed",
    textColor: "text-[#06B6D4]",
    rawColor: "#06B6D4"
  },
  {
    id: "motivated",
    nameKey: "mood.motivated",
    icon: MotivatedIcon,
    imageUrl: "/Motivated.svg", 
    color: "bg-[#A78BFA]/20",
    glow: "from-[#A78BFA] to-transparent",
    messageKey: "exp.msg.challenged",
    textColor: "text-[#A78BFA]",
    rawColor: "#A78BFA"
  },
  // --- LOW ---
  {
    id: "bored",
    nameKey: "mood.bored",
    icon: BoredIcon,
    imageUrl: "/Bored.svg", 
    color: "bg-[#93B9DD]/20",
    glow: "from-[#93B9DD] to-transparent",
    messageKey: "exp.msg.bored",
    textColor: "text-[#93B9DD]",
    rawColor: "#93B9DD"
  },
  {
    id: "sleepy",
    nameKey: "mood.sleepy",
    icon: TiredIcon,
    imageUrl: "/Sleepy.svg", 
    color: "bg-[#8B5CF6]/20",
    glow: "from-[#8B5CF6] to-transparent",
    messageKey: "exp.msg.tired",
    textColor: "text-[#8B5CF6]",
    rawColor: "#8B5CF6"
  },
  {
    id: "neutral",
    nameKey: "mood.neutral",
    icon: NeutralIcon,
    imageUrl: "/Neutral.svg", 
    color: "bg-[#CBD5E1]/20",
    glow: "from-[#CBD5E1] to-transparent",
    messageKey: "exp.msg.distracted",
    textColor: "text-[#CBD5E1]",
    rawColor: "#CBD5E1"
  },
  // --- UNCOMFORTABLE ---
  {
    id: "stressed",
    nameKey: "mood.stressed",
    icon: StressIcon,
    imageUrl: "/Stressed.svg", 
    color: "bg-[#EF4444]/20",
    glow: "from-[#EF4444] to-transparent",
    messageKey: "exp.msg.stress",
    textColor: "text-[#EF4444]",
    rawColor: "#EF4444"
  },
  {
    id: "trying",
    nameKey: "mood.trying",
    icon: AnxiousIcon,
    imageUrl: "/Trying.svg", 
    color: "bg-[#FB923C]/20",
    glow: "from-[#FB923C] to-transparent",
    messageKey: "exp.msg.anxious",
    textColor: "text-[#FB923C]",
    rawColor: "#FB923C"
  },
  {
    id: "sad",
    nameKey: "mood.sad",
    icon: SadIcon,
    imageUrl: "/Sad.svg", 
    color: "bg-[#3B82F6]/20",
    glow: "from-[#3B82F6] to-transparent",
    messageKey: "exp.msg.sad",
    textColor: "text-[#3B82F6]",
    rawColor: "#3B82F6"
  }

];
