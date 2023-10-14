"use client";

import { usePathname } from "next/navigation";

// import { useRouter } from "next/router";
import Link from "next/link";
import "../../Styles/Navbar.css";

interface NavLinkProps {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
  className?: string;
  action?: () => void; 
  };

export const NavLink = ({ href, exact, action, children, ...props }:NavLinkProps) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  if (isActive) {
    props.className += "active__menu";
  }
  return (
    <Link href={href} {...props} onClick={action}>
      {children}
      {/* <a {...props}>{children}</a> */}
    </Link>
  );
};
