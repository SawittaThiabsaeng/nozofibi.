import { motion } from "motion/react";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 48, className = "" }: LogoProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logo-n-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#70A1FF" />
            <stop offset="50%" stopColor="#A29BFE" />
            <stop offset="100%" stopColor="#FF9FF3" />
          </linearGradient>
          <filter id="logo-drop-shadow" x="-20%" y="-20%" width="140%" height="150%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feOffset dx="0" dy="4" result="offsetBlur" />
            <feFlood floodColor="#000" floodOpacity="0.1" result="offsetFlood" />
            <feComposite in="offsetFlood" in2="offsetBlur" operator="in" result="shadow" />
            <feComposite in="SourceGraphic" in2="shadow" operator="over" />
          </filter>
        </defs>

        {/* Stylized N Shape */}
        <path
          d="M30 75V45C30 30 45 30 50 45V55C50 70 65 70 70 55V25"
          stroke="url(#logo-n-gradient)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#logo-drop-shadow)"
        />

        {/* Star / Sparkle */}
        <motion.path
          d="M78 10L81 18L89 21L81 24L78 32L75 24L67 21L75 18Z"
          fill="#FDCB6E"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{ originX: "78px", originY: "21px" }}
        />
      </svg>
    </motion.div>
  );
}
