import { ReactNode } from "react";
import { tv } from "tailwind-variants";
import { useMenuContext } from "./MenuContext";

interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const menuItemVariants = tv({
  base: "px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left cursor-pointer",
});

export function MenuItem({
  children,
  onClick,
  className,
  ...rest
}: MenuItemProps) {
  const { events } = useMenuContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    events.handleClose();
  }

  return (
    <button
      onClick={handleClick}
      className={menuItemVariants({ class: className })}
      {...rest}
    >
      {children}
    </button>
  )
}