"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre",    label: "Sobre" },
  { href: "/contato",  label: "Contato" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-7 transition-all duration-300"
        style={{ background: scrolled ? "rgba(245,243,239,0.95)" : "transparent", backdropFilter: scrolled ? "blur(10px)" : "none" }}
      >
        <Link href="/" className="font-serif text-lg font-black tracking-wide text-[--black] hover:opacity-70 transition-opacity">
          Sandrini<span className="font-light italic">®</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-10 list-none">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={`nav-link ${pathname === l.href ? "active" : ""}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-none bg-transparent border-none p-0"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className="block w-6 h-px bg-[--black] transition-all duration-300" style={{ transform: open ? "rotate(45deg) translate(4px,4px)" : "" }} />
          <span className="block w-6 h-px bg-[--black] transition-all duration-300" style={{ opacity: open ? 0 : 1 }} />
          <span className="block w-6 h-px bg-[--black] transition-all duration-300" style={{ transform: open ? "rotate(-45deg) translate(4px,-4px)" : "" }} />
        </button>
      </nav>

      {/* Mobile Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[--black] flex flex-col justify-center items-center gap-8 md:hidden">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-serif text-4xl font-black text-[--white] no-underline"
              style={{ animation: `fadeUp 0.4s ${0.1 * (i + 1)}s ease forwards`, opacity: 0 }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}