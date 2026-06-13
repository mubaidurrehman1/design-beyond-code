type AnimatedUnderlineLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export function AnimatedUnderlineLink({
  href,
  children,
  className = "",
  target,
  rel,
  onClick,
}: AnimatedUnderlineLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`link-underline ${className}`}
    >
      {children}
    </a>
  );
}
