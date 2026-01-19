import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export const StatsSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center gap-2"
    >
      <Skeleton className="h-10 w-24" />
      <Skeleton className="h-4 w-32" />
    </motion.div>
  );
};

export const StatsRowSkeleton = ({ count = 4 }: { count?: number }) => {
  return (
    <div className="flex justify-center gap-12">
      {Array.from({ length: count }).map((_, i) => (
        <StatsSkeleton key={i} />
      ))}
    </div>
  );
};
