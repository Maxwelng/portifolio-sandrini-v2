import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[--black]/10 px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="font-serif text-sm font-bold tracking-wide">Sandrini Espindula Maciel®</div>

      <nav className="flex gap-8 flex-wrap justify-center" aria-label="Redes sociais">
        {["Instagram", "Behance", "LinkedIn"].map(s => (
          <Link key={s} href="#" className="text-[--gray] text-[0.65rem] tracking-widest uppercase hover:text-[--black] transition-colors">
            {s}
          </Link>
        ))}
      </nav>

      <p className="text-[--gray] text-[0.65rem] tracking-wider">
        © {new Date().getFullYear()} Sandrini Espindula Maciel. Todos os direitos reservados.
      </p>
    </footer>
  );
}