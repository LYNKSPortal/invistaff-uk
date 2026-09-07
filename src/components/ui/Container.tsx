import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full px-6 sm:px-8 lg:px-10 ${wide ? "max-w-wide" : "max-w-content"} ${className}`}
    >
      {children}
    </div>
  );
}
