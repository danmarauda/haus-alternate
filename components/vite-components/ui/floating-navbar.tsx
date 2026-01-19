'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronRight,
  Home,
  Building2,
  Search,
  Heart,
  User,
  Menu,
  X,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

interface SearchResult {
  icon: React.ReactNode;
  label: string;
  description: string;
  href: string;
}

const SVGFilter = () => {
  return (
    <svg className="hidden" aria-hidden="true">
      <defs>
        <filter id="navbar-blob">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
}

const NavButton = ({ icon, label, href, isActive }: NavButtonProps) => {
  return (
    <a
      href={href}
      className={cn(
        'relative flex items-center justify-center size-12 rounded-full transition-all duration-200',
        'hover:bg-secondary group',
        isActive && 'bg-secondary'
      )}
      title={label}
    >
      <div className="flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
        {icon}
      </div>
    </a>
  );
};

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onFocus: () => void;
  isExpanded: boolean;
}

const SearchInput = ({
  placeholder,
  value,
  onChange,
  onFocus,
  isExpanded,
}: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isExpanded) {
      inputRef.current?.focus();
    }
  }, [isExpanded]);

  return (
    <div className="flex items-center gap-3 px-4 h-full">
      <Search className="size-5 text-muted-foreground shrink-0" />
      <div className="relative flex-1 min-w-0">
        {!value && (
          <span className="absolute inset-0 flex items-center text-muted-foreground pointer-events-none text-sm">
            {placeholder}
          </span>
        )}
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          className="w-full bg-transparent outline-none text-foreground text-sm"
        />
      </div>
    </div>
  );
};

interface SearchResultCardProps extends SearchResult {
  isLast: boolean;
}

const SearchResultCard = ({ icon, label, description, href, isLast }: SearchResultCardProps) => {
  return (
    <a
      href={href}
      className={cn(
        'block px-3 py-2 rounded-lg hover:bg-secondary transition-colors',
        !isLast && 'mb-1'
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center size-10 rounded-lg bg-secondary text-foreground shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">{label}</p>
          <p className="text-xs text-muted-foreground truncate">{description}</p>
        </div>
        <div className="text-muted-foreground shrink-0">
          <ChevronRight className="size-4" />
        </div>
      </div>
    </a>
  );
};

interface SearchResultsContainerProps {
  searchResults: SearchResult[];
  searchValue: string;
}

const SearchResultsContainer = ({ searchResults, searchValue }: SearchResultsContainerProps) => {
  const filteredResults = searchResults.filter(
    (result) =>
      result.label.toLowerCase().includes(searchValue.toLowerCase()) ||
      result.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (filteredResults.length === 0) {
    return (
      <div className="px-4 py-8 text-center text-muted-foreground text-sm">
        No results found for "{searchValue}"
      </div>
    );
  }

  return (
    <div className="px-2 py-2 max-h-80 overflow-y-auto">
      {filteredResults.map((result, index) => (
        <motion.div
          key={result.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            delay: index * 0.05,
            duration: 0.2,
            ease: 'easeOut',
          }}
        >
          <SearchResultCard
            {...result}
            isLast={index === filteredResults.length - 1}
          />
        </motion.div>
      ))}
    </div>
  );
};

interface FloatingNavbarProps {
  navItems?: NavItem[];
  searchResults?: SearchResult[];
  position?: 'top' | 'bottom';
  className?: string;
}

const FloatingNavbar = ({
  navItems = [
    { label: 'Home', icon: <Home className="size-5" />, href: '/' },
    { label: 'Properties', icon: <Building2 className="size-5" />, href: '/properties' },
    { label: 'Favorites', icon: <Heart className="size-5" />, href: '/favorites' },
    { label: 'Account', icon: <User className="size-5" />, href: '/account' },
  ],
  searchResults = [
    { icon: <Building2 className="size-5" />, label: 'Modern Loft Downtown', description: '$1,250,000 • 2 bed, 2 bath', href: '/property/1' },
    { icon: <Building2 className="size-5" />, label: 'Luxury Penthouse', description: '$3,500,000 • 4 bed, 3 bath', href: '/property/2' },
    { icon: <Building2 className="size-5" />, label: 'Cozy Studio Apartment', description: '$450,000 • Studio', href: '/property/3' },
    { icon: <Building2 className="size-5" />, label: 'Family Home Suburbs', description: '$875,000 • 5 bed, 3 bath', href: '/property/4' },
    { icon: <Building2 className="size-5" />, label: 'Beachfront Villa', description: '$4,200,000 • 6 bed, 5 bath', href: '/property/5' },
  ],
  position = 'bottom',
  className,
}: FloatingNavbarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsExpanded(false);
        setSearchValue('');
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsExpanded(false);
        setSearchValue('');
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const positionClasses = position === 'top' 
    ? 'top-6' 
    : 'bottom-6';

  return (
    <>
      <SVGFilter />
      
      {/* Backdrop when expanded */}
      <AnimatePresence>
        {(isExpanded || isMobileMenuOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40"
            onClick={() => {
              setIsExpanded(false);
              setSearchValue('');
              setIsMobileMenuOpen(false);
            }}
          />
        )}
      </AnimatePresence>

      {/* Floating Navbar */}
      <div
        ref={navRef}
        className={cn(
          'fixed left-1/2 -translate-x-1/2 z-50',
          positionClasses,
          className
        )}
      >
        <motion.div
          layout
          style={{ filter: 'url(#navbar-blob)' }}
          className={cn(
            'flex items-center gap-1',
            '[&>div]:bg-card [&>div]:border [&>div]:border-border [&>div]:backdrop-blur-xl',
            '[&>div]:shadow-lg [&>div]:shadow-black/5'
          )}
        >
          <AnimatePresence mode="popLayout">
            {/* Main Search/Nav Container */}
            <motion.div
              layout
              className={cn(
                'rounded-full overflow-hidden transition-all duration-300',
                isExpanded ? 'rounded-2xl' : 'rounded-full'
              )}
            >
              {/* Search Bar */}
              <motion.div
                layout
                className={cn(
                  'h-14 transition-all duration-300',
                  isExpanded ? 'w-[400px] md:w-[500px]' : 'w-[280px] md:w-[320px]'
                )}
              >
                <SearchInput
                  placeholder="Search properties..."
                  value={searchValue}
                  onChange={setSearchValue}
                  onFocus={() => setIsExpanded(true)}
                  isExpanded={isExpanded}
                />
              </motion.div>

              {/* Search Results Dropdown */}
              <AnimatePresence>
                {isExpanded && searchValue && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-border bg-card"
                  >
                    <SearchResultsContainer
                      searchResults={searchResults}
                      searchValue={searchValue}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Desktop Nav Items */}
            {!isExpanded && (
              <>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    layout
                    initial={{ scale: 0.8, opacity: 0, x: -20 }}
                    animate={{ scale: 1, opacity: 1, x: 0 }}
                    exit={{ scale: 0.8, opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.4,
                      type: 'spring',
                      bounce: 0.2,
                      delay: index * 0.05,
                    }}
                    className="rounded-full hidden md:block"
                  >
                    <NavButton {...item} />
                  </motion.div>
                ))}

                {/* Mobile Menu Toggle */}
                <motion.div
                  layout
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3, type: 'spring', bounce: 0.2 }}
                  className="rounded-full md:hidden"
                >
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="flex items-center justify-center size-12 rounded-full hover:bg-secondary transition-colors"
                  >
                    {isMobileMenuOpen ? (
                      <X className="size-5 text-foreground" />
                    ) : (
                      <Menu className="size-5 text-foreground" />
                    )}
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && !isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={cn(
                'absolute left-1/2 -translate-x-1/2 mt-3 w-48',
                'bg-card border border-border rounded-2xl shadow-lg shadow-black/10 overflow-hidden',
                'md:hidden'
              )}
            >
              <div className="py-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-secondary transition-colors"
                  >
                    <span className="text-muted-foreground">{item.icon}</span>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export { FloatingNavbar };
