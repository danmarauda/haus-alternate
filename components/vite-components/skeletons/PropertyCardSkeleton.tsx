import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export const PropertyCardSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-2xl overflow-hidden bg-card border border-border/50"
    >
      {/* Image skeleton */}
      <Skeleton className="aspect-[4/3] w-full" />
      
      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Price */}
        <Skeleton className="h-6 w-32" />
        
        {/* Title */}
        <Skeleton className="h-5 w-full" />
        
        {/* Location */}
        <Skeleton className="h-4 w-48" />
        
        {/* Features */}
        <div className="flex gap-4 pt-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </motion.div>
  );
};

export const PropertyCardSkeletonGrid = ({ count = 3 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <PropertyCardSkeleton key={i} />
      ))}
    </div>
  );
};
