import Link from "next/link";
import Image from "next/image";

const LOGO_SRC = "/logo/main-logo.png";
const LOGO_ASPECT_RATIO = 3000 / 640;

export function Logo({
  className = "",
  height = 32,
}: {
  className?: string;
  height?: number;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Invistaff home"
    >
      <Image
        src={LOGO_SRC}
        alt="Invistaff"
        width={Math.round(height * LOGO_ASPECT_RATIO)}
        height={height}
        priority
        className="w-auto"
        style={{ height }}
      />
    </Link>
  );
}
