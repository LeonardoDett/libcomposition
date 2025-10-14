// Grid.tsx

import type { ReactNode } from "react";
import { tv } from "tailwind-variants";
import { cn } from "../../../utils/cn";


interface GridContainerProps {
  children: ReactNode;
  gap?: keyof typeof gridContainerVariants.variants.gap;
  className?: string;
}

const gridContainerVariants = tv({
  base: "grid grid-cols-12",
  variants: {
    gap: {
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      5: "gap-5",
      6: "gap-6",
      7: "gap-7",
      8: "gap-8",
      9: "gap-9",
      10: "gap-10",
      11: "gap-11",
      12: "gap-12",
    }
  },
});

export const GridContainer: React.FC<GridContainerProps> = ({ children, gap, className }) => {
  return <div className={cn(gridContainerVariants({ gap }), className)}>{children}</div>;
};
