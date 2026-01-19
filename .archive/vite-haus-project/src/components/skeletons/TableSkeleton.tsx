import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}

export const TableSkeleton = ({ rows = 5, columns = 4 }: TableSkeletonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-xl border border-border/50 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-muted/50 p-4 border-b border-border/50">
        <div className="flex gap-4">
          {Array.from({ length: columns }).map((_, i) => (
            <Skeleton key={i} className="h-4 flex-1" />
          ))}
        </div>
      </div>
      
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div 
          key={rowIndex} 
          className="p-4 border-b border-border/30 last:border-0"
        >
          <div className="flex gap-4">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <Skeleton 
                key={colIndex} 
                className="h-4 flex-1" 
                style={{ opacity: 1 - (rowIndex * 0.1) }}
              />
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};
