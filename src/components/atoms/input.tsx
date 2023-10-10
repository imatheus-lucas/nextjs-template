import { InputHTMLAttributes } from "react";
type InputProps = InputHTMLAttributes<HTMLInputElement> & {};
export function Input({ ...rest }: InputProps) {
  return (
    <input
      className="flex items-center justify-center rounded-md transition-colors px-4 py-2 bg-zinc-200 w-full border text-zinc-500 focus-visible:outline-none"
      {...rest}
    />
  );
}
