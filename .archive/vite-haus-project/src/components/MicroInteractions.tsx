import { motion } from "framer-motion";
import { ReactNode } from "react";

// Hover lift effect for cards
interface HoverLiftProps {
  children: ReactNode;
  className?: string;
}

export const HoverLift = ({ children, className = "" }: HoverLiftProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        y: -4, 
        transition: { duration: 0.2, ease: "easeOut" } 
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

// Scale on hover for buttons and interactive elements
interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export const HoverScale = ({ children, className = "", scale = 1.02 }: HoverScaleProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale, 
        transition: { duration: 0.2, ease: "easeOut" } 
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

// Fade in on scroll
interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const FadeInView = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}: FadeInViewProps) => {
  const directionOffset = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// Stagger children animations
interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerChildren = ({ 
  children, 
  className = "",
  staggerDelay = 0.1 
}: StaggerChildrenProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" }
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Magnetic button effect
interface MagneticProps {
  children: ReactNode;
  className?: string;
}

export const Magnetic = ({ children, className = "" }: MagneticProps) => {
  return (
    <motion.div
      className={className}
      whileHover="hover"
      whileTap="tap"
      variants={{
        hover: { scale: 1.05 },
        tap: { scale: 0.95 },
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
};

// Reveal text animation
interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const RevealText = ({ text, className = "", delay = 0 }: RevealTextProps) => {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: "easeOut"
      }}
    >
      {text}
    </motion.span>
  );
};

// Counting animation for numbers
interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const CountUp = ({ 
  end, 
  duration = 2, 
  prefix = "", 
  suffix = "",
  className = "" 
}: CountUpProps) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {prefix}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {end.toLocaleString()}
        </motion.span>
        {suffix}
      </motion.span>
    </motion.span>
  );
};

// Shimmer effect for loading states
export const Shimmer = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      className={`relative overflow-hidden bg-muted ${className}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

// Success checkmark animation
export const SuccessCheck = ({ className = "" }: { className?: string }) => {
  return (
    <motion.svg
      className={`w-6 h-6 text-green-500 ${className}`}
      viewBox="0 0 24 24"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 15,
        delay: 0.1 
      }}
    >
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.path
        d="M8 12l2.5 2.5L16 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      />
    </motion.svg>
  );
};
