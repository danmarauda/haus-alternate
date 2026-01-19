'use client';

import * as React from 'react';
import {
  motion,
  type HTMLMotionProps,
  type Variants,
  AnimatePresence,
} from 'motion/react';
import { Plus, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Props for the MicroExpander component.
 */
interface MicroExpanderProps
  extends Omit<HTMLMotionProps<'button'>, 'children'> {
  /** The label text to display when the button is hovered/expanded. */
  text: string;
  /** An optional custom icon. Defaults to a Plus icon if not provided. */
  icon?: React.ReactNode;
  /** The visual style variant of the button. */
  variant?: 'default' | 'outline' | 'ghost' | 'destructive';
  /** If true, displays a spinner, disables interaction, and collapses the button. */
  isLoading?: boolean;
}

/**
 * A micro-interaction button that expands from a circular icon to a pill shape
 * containing text upon hover. It handles loading states by reverting to the
 * circular shape and displaying a spinner.
 */
const MicroExpander = React.forwardRef<HTMLButtonElement, MicroExpanderProps>(
  (
    {
      text,
      icon,
      variant = 'default',
      isLoading = false,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const containerVariants: Variants = {
      initial: { width: '48px' },
      hover: { width: 'auto' },
      loading: { width: '48px' },
    };

    const textVariants: Variants = {
      initial: { opacity: 0, x: -10 },
      hover: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.15, duration: 0.3, ease: 'easeOut' },
      },
      exit: {
        opacity: 0,
        x: -5,
        transition: { duration: 0.1, ease: 'linear' },
      },
    };

    const variantStyles = {
      default: 'bg-primary text-primary-foreground border border-primary',
      outline:
        'bg-transparent border border-input text-foreground hover:border-primary',
      ghost:
        'bg-accent/50 border border-transparent text-accent-foreground hover:bg-accent',
      destructive:
        'bg-destructive text-destructive-foreground border border-destructive hover:bg-destructive/90',
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isLoading) return;
      onClick?.(e);
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          'relative flex h-12 cursor-pointer items-center justify-start gap-3 overflow-hidden rounded-full px-3 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          variantStyles[variant],
          className
        )}
        variants={containerVariants}
        initial="initial"
        animate={isLoading ? 'loading' : isHovered ? 'hover' : 'initial'}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        onClick={handleClick}
        disabled={isLoading}
        {...props}
        aria-label={text}
      >
        <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.15 }}
              >
                <Loader2 className="h-5 w-5 animate-spin" />
              </motion.div>
            ) : (
              <motion.div
                key="icon"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.15 }}
              >
                {icon || <Plus className="h-5 w-5" />}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.span
          className="whitespace-nowrap pr-3 text-sm font-medium"
          variants={textVariants}
        >
          {text}
        </motion.span>
      </motion.button>
    );
  }
);

MicroExpander.displayName = 'MicroExpander';

export { MicroExpander };
