import { ReactNode } from "react";
import { usePopperContext } from "./PopperContext";
import { tv } from "tailwind-variants";
import { AnimatePresence, motion } from "motion/react";

interface PopperBodyProps {
  children: ReactNode;
  width?: string;
  maxHeight?: string;
  className?: string;
}

const PopperContentVariants = tv({
  base: 'z-10 rounded-sm shadow-md bg-white absolute block overflow-scroll',
  variants: {
    orientation: {
      top: "left-1/2 -translate-x-1/2 -translate-y-full",
      bottom: "left-1/2 -translate-x-1/2 translate-y-full",
      left: "top-0 -translate-x-full",
      right: "top-0 translate-x-full",
    }
  },
  defaultVariants: {
    orientation: "bottom"
  }
});


export function PopperContent({
  children,
  width,
  maxHeight,
  className
}: PopperBodyProps) {

  const {
    refs,
    anchorData,
    states,
  } = usePopperContext();

  const styles: React.CSSProperties = { width: width ?? "max-content" };

  const offset = 10;

  if (anchorData.height && anchorData.width) {
    if (states.fitAnchor) {
      styles.width = `${anchorData.width}px`;
      styles.maxWidth = `${anchorData.width}px`;
      styles.minWidth = `${anchorData.width}px`;
    }

    switch (states.orientation) {
      case "top":
        styles.bottom = `calc(100% + ${offset}px)`;
        break;
      case "bottom":
        styles.bottom = `-${offset}px`;
        break;
      case "left":
        styles.left = `-${offset}px`;
        break;
      case "right":
        styles.right = `-${offset}px`;
        break;
    }
  }

  if (maxHeight) {
    styles.maxHeight = `${maxHeight}`;
  }


  return (
    <>
      {
        states.isOpen && (
          <AnimatePresence>
            {
              states.isOpen && (
                <motion.div
                  style={{ ...styles }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    scale: { type: "spring", visualDuration: 0.3, bounce: 0.3 },
                  }}
                  key="box"
                  ref={refs.setContent}
                  className={PopperContentVariants({ orientation: states.orientation, class: className })}

                >
                  {children}
                </motion.div>
              )
            }

          </AnimatePresence>
        )
      }
    </>
  );
}