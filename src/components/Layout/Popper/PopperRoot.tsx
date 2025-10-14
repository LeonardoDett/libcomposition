
import { ReactNode, useCallback, useEffect, useState } from "react";
import { PopperContext } from "./PopperContext";

interface PopperRootProps {
  children: ReactNode;
  fitAnchor?: boolean;
  orientation?: 'top' | 'bottom' | 'left' | 'right';
  onClose?: () => void;
}

export function PopperRoot({
  children,
  fitAnchor = false,
  orientation = "left",
  onClose,
}: PopperRootProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [content, setContent] = useState<HTMLElement | null>(null);

  const handleOpen = () => setIsOpen(true);
  const handleClose = useCallback(() => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  }, [onClose]);
  const handleToggle = () => setIsOpen((ant) => !ant);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        anchor &&
        content &&
        !anchor.contains(target) &&
        !content.contains(target)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, anchor, content, handleClose]);

  const data = {
    states: {
      fitAnchor,
      orientation
    },
    events: {
      isOpen,
      handleOpen,
      handleClose,
      handleToggle,
    },
    refs: {
      setAnchor,
      setContent,
      anchor,
      content
    },
    anchorData: {
      height: anchor?.getBoundingClientRect()?.height,
      width: anchor?.getBoundingClientRect()?.width,
    }
  }

  return (
    <PopperContext.Provider value={{ ...data }}>
      <div className="relative">
        {children}
      </div>
    </PopperContext.Provider>
  );
}