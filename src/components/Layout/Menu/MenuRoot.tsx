import { ReactNode, useCallback, useEffect, useState } from "react";
import { MenuContext } from "./MenuContext";
import { PopperContext } from "../Popper/PopperContext";

interface MenuRootProps {
  children: ReactNode;
  fitAnchor?: boolean;
  orientation?: 'top' | 'bottom' | 'left' | 'right';
  onClose?: () => void;
}

export function MenuRoot({
  children,
  fitAnchor = false,
  orientation = "left",
  onClose,
}: MenuRootProps) {
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

  const popperData = {
    states: {
      fitAnchor,
      orientation,
      isOpen
    },
    events: {
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

  const menuData = {
    states: {
      fitAnchor,
      orientation,
      isOpen
    },
    events: {
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
    <PopperContext.Provider value={{ ...popperData }}>
      <MenuContext.Provider value={{ ...menuData }}>
        <div className="relative h-full">
          {children}
        </div>
      </MenuContext.Provider>
    </PopperContext.Provider>
  );
}