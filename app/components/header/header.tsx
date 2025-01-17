import type { HTMLAttributes } from "react";
import { Link } from "react-router";

type HeaderProps = HTMLAttributes<HTMLHeadingElement>;

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/films",
    text: "Films",
  },
  {
    href: "/characters?page=1",
    text: "Characters",
  },
];

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="flex flex-col min-h-screen bg-background lg:px-4">
      <nav className="bg-transparent text-foreground p-4 fixed w-full flex gap-8 border-b border-b-white/20 z-50 backdrop-blur-sm">
        <img src="/images/logo.png" className="invert w-16" />
        <ul className="flex space-x-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="hover:text-gray-300 uppercase text-sm font-bold tracking-wide"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-grow container mx-auto">{children}</main>
    </header>
  );
};
