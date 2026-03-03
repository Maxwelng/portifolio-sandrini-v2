import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Portfólio de projetos de branding, identidade visual, design editorial e embalagem de Sandrini Espindula Maciel.",
  alternates: { canonical: "https://sandrinimaciel.design/projetos" },
};

const projects = [
  { id: 1,  tag: "Branding · 2024",    title: "Coletivo Norte",    cat: "Branding · Identidade Visual", bg: "linear-gradient(135deg,#1a1a1a,#444)" },
  { id: 2,  tag: "Editorial · 2024",   title: "Revista Camada",    cat: "Design Editorial",              bg: "linear-gradient(135deg,#2a2a2a,#555)" },
  { id: 3,  tag: "Embalagem · 2023",   title: "Botânica Co.",      cat: "Embalagem · Produto",           bg: "linear-gradient(135deg,#111,#3a3a3a)" },
  { id: 4,  tag: "Identidade · 2023",  title: "Arco Arquitetura",  cat: "Identidade Visual · Marca",     bg: "linear-gradient(135deg,#333,#666)"    },
  { id: 5,  tag: "Branding · 2022",    title: "Noma Café",         cat: "Branding · Embalagem",          bg: "linear-gradient(135deg,#1e1e1e,#4a4a4a)" },
  { id: 6,  tag: "Editorial · 2022",   title: "Catálogo Luz",      cat: "Design Editorial · Tipografia", bg: "linear-gradient(135deg,#252525,#505050)" },
  { id: 7,  tag: "Identidade · 2022",  title: "Raiz Studio",       cat: "Identidade Visual",             bg: "linear-gradient(135deg,#1c1c1c,#3c3c3c)" },
  { id: 8,  tag: "Branding · 2021",    title: "Moça Flor",         cat: "Branding · Marca",              bg: "linear-gradient(135deg,#2e2e2e,#5a5a5a)" },
  { id: 9,  tag: "Embalagem · 2021",   title: "Atelier Duna",      cat: "Embalagem · Produto",           bg: "linear-gradient(135deg,#161616,#3e3e3e)" },
];

export default function Projetos() {
  return (
    <main className="pt-32 pb-24 px-12">
      <div className="mb-16">
        <div className="sec-label">Portfólio</div>
        <h1 className="font-serif font-black leading-none" style={{ fontSize: "clamp(48px,7vw,96px)", letterSpacing: "-0.03em" }}>
          Todos os<br /><em className="font-normal italic">Projetos</em>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ScrollReveal key={p.id} delay={i * 60}>
            <article className="proj-card relative overflow-hidden cursor-none group">
              <div className="proj-thumb w-full flex items-center justify-center" style={{ aspectRatio: "4/3", background: p.bg }}>
                <span className="font-serif font-black text-5xl" style={{ color: "rgba(255,255,255,0.07)" }}>
                  {String(p.id).padStart(2, "0")}
                </span>
              </div>
              <div className="proj-overlay absolute inset-0 flex flex-col justify-end p-6" style={{ background: "linear-gradient(to top,rgba(10,10,10,0.85) 0%,transparent 60%)" }}>
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-white/60 mb-1">{p.tag}</span>
                <h2 className="font-serif font-bold text-lg text-white leading-tight">{p.title}</h2>
                <span className="mt-2 text-[0.65rem] tracking-[0.15em] uppercase text-white inline-flex items-center gap-2 after:content-['→']">
                  Ver projeto
                </span>
              </div>
              <div className="mt-3">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[--gray]">{p.cat}</span>
                <h2 className="font-serif font-bold text-base mt-1">{p.title}</h2>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}