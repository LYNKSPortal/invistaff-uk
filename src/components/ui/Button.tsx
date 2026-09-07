import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "inverse" | "ghost-inverse";
type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-forest-deep text-white hover:bg-forest-900 hover:shadow-lifted active:translate-y-px shadow-subtle",
  secondary:
    "bg-transparent text-forest-900 border border-forest-deep-30 hover:border-forest-deep hover:bg-forest-deep-6",
  outline:
    "bg-transparent text-forest-900 border border-forest-900 hover:bg-forest-deep-6",
  ghost: "bg-transparent text-forest-900 hover:bg-forest-deep-6",
  inverse: "bg-white text-forest-900 hover:bg-stone shadow-subtle",
  "ghost-inverse": "bg-transparent text-white border border-white/30 hover:bg-white/10",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href">;

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className"> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "md",
    withArrow = false,
    children,
    className = "",
    ...rest
  } = props;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as Omit<ButtonAsLink, keyof CommonProps>;
    return (
      <Link href={href} className={`${classes} group`} {...linkRest}>
        {children}
        {withArrow && (
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        )}
      </Link>
    );
  }

  const buttonRest = rest as Omit<ButtonAsButton, keyof CommonProps>;
  return (
    <button className={`${classes} group`} {...buttonRest}>
      {children}
      {withArrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
