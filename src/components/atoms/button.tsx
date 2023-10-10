import { ButtonHTMLAttributes, ReactNode } from "react";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};
export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 bg-blue-500 px-4 py-2 hover:bg-blue-500/90"
      {...rest}
    >
      {children}
    </button>
  );
}
