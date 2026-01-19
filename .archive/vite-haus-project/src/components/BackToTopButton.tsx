import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-24 right-6 z-50 lg:bottom-8"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            variant="outline"
            className="h-10 w-10 rounded-full border-border/50 bg-background/80 backdrop-blur-sm hover:bg-muted hover:scale-105 transition-transform"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4 text-muted-foreground" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
