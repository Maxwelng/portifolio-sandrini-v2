import type { Metadata } from "next";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Sandrini Espindula Maciel — Designer Gráfica | Branding & Identidade Visual",
  description: "Sandrini Espindula Maciel é designer gráfica especializada em branding, identidade visual e design editorial. Criando marcas com propósito e estética.",
  alternates: { canonical: "https://sandrinimaciel.design" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sandrini Espindula Maciel",
  jobTitle: "Designer Gráfica",
  description: "Designer gráfica especializada em branding, identidade visual e design editorial.",
  url: "https://sandrinimaciel.design",
  knowsAbout: ["Branding", "Identidade Visual", "Design Editorial", "Tipografia", "Embalagem"],
};

const featuredProjects = [
  { id: 1, tag: "Branding · 2024", title: "Coletivo Norte", category: "Branding · Identidade Visual", col: "7", bg: "linear-gradient(135deg,#1a1a1a,#444)" },
  { id: 2, tag: "Editorial · 2024", title: "Revista Camada", category: "Design Editorial", col: "5", bg: "linear-gradient(135deg,#2a2a2a,#555)" },
  { id: 3, tag: "Embalagem · 2023", title: "Botânica Co.", category: "Embalagem · Produto", col: "4", bg: "linear-gradient(135deg,#111,#3a3a3a)" },
  { id: 4, tag: "Identidade · 2023", title: "Arco Arquitetura", category: "Identidade Visual · Marca", col: "8", bg: "linear-gradient(135deg,#333,#666)" },
];

const services = [
  { num: "01", name: "Branding &\nIdentidade Visual", desc: "Sistemas de identidade completos: logo, tipografia, cores, padrões e diretrizes. Marcas com personalidade e coerência." },
  { num: "02", name: "Design\nEditorial", desc: "Revistas, livros, catálogos e materiais impressos com diagramação rigorosa. Design que conduz a leitura com elegância." },
  { num: "03", name: "Design de\nEmbalagem", desc: "Embalagens que comunicam os valores da marca no ponto de venda e criam experiências memoráveis." },
  { num: "04", name: "Estratégia\nde Marca", desc: "Posicionamento, naming e arquitetura de marca. A base estratégica que sustenta o design." },
  { num: "05", name: "Direção\nde Arte", desc: "Curadoria visual e direção criativa para campanhas e editoriais com coesão estética." },
  { num: "06", name: "Brand\nGuidelines", desc: "Manuais de identidade detalhados para aplicação consistente da marca em todos os canais." },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col justify-end px-12 pb-16 relative overflow-hidden" aria-label="Apresentação">
        <div
          className="absolute top-1/2 left-1/2 font-serif font-black text-transparent select-none pointer-events-none"
          style={{
            fontSize: "clamp(120px,20vw,280px)",
            WebkitTextStroke: "1px rgba(10,10,10,0.07)",
            transform: "translate(-50%,-50%)",
            whiteSpace: "nowrap",
            letterSpacing: "-0.03em",
            animation: "bgFloat 8s ease-in-out infinite",
          }}
          aria-hidden="true"
        >
          DESIGN
        </div>

        <p className="anim-1 text-[--gray] text-[0.7rem] tracking-[0.25em] uppercase mb-5">
          Designer Gráfica — Brasil
        </p>

        <h1
          className="anim-2 font-serif font-black leading-[0.92] max-w-5xl"
          style={{ fontSize: "clamp(52px,9vw,130px)", letterSpacing: "-0.03em" }}
        >
          Design que<br />
          <em className="font-normal italic">transforma</em><br />
          marcas.
        </h1>

        <div className="anim-3 flex flex-col md:flex-row justify-between items-start md:items-end mt-12 gap-6">
          <p className="text-base leading-relaxed max-w-sm text-[#444]">
            Identidades visuais e experiências de marca criadas com propósito, estética e estratégia.
          </p>
          <div className="flex items-center gap-3 text-[--gray] text-[0.7rem] tracking-[0.2em] uppercase" aria-hidden="true">
            <div className="hero-line" />
            Rolar
          </div>
        </div>
      </section>

      <Marquee />

      {/* ── PROJETOS DESTAQUE ── */}
      <section className="px-12 py-20" aria-label="Projetos em destaque">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <div className="sec-label">Trabalhos</div>
            <h2 className="font-serif font-black leading-none" style={{ fontSize: "clamp(36px,5vw,64px)", letterSpacing: "-0.02em" }}>
              Projetos<br />Selecionados
            </h2>
          </div>
          <Link href="/projetos" className="link-btn">Ver todos</Link>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {featuredProjects.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 80} className={`col-span-12 md:col-span-${p.col === "7" ? "7" : p.col === "5" ? "5" : p.col === "4" ? "4" : "8"}`}>
              <article className="proj-card relative overflow-hidden cursor-none group">
                <div
                  className="proj-thumb w-full flex items-center justify-center"
                  style={{ aspectRatio: "4/3", background: p.bg }}
                >
                  <span className="font-serif font-black text-[4rem]" style={{ color: "rgba(255,255,255,0.07)" }}>
                    {String(p.id).padStart(2, "0")}
                  </span>
                </div>
                <div className="proj-overlay absolute inset-0 flex flex-col justify-end p-7" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 60%)" }}>
                  <span className="text-[0.6rem] tracking-[0.2em] uppercase text-white/60 mb-1">{p.tag}</span>
                  <h3 className="font-serif font-bold text-xl text-white leading-tight">{p.title}</h3>
                  <Link href="/projetos" className="mt-3 text-[0.65rem] tracking-[0.15em] uppercase text-white inline-flex items-center gap-2 after:content-['→']">
                    Ver projeto
                  </Link>
                </div>
                <div className="mt-3">
                  <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[--gray]">{p.category}</span>
                  <h3 className="font-serif font-bold text-lg mt-1">{p.title}</h3>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="bg-[--light] px-12 py-20" aria-label="Serviços">
        <div className="sec-label">O que faço</div>
        <h2 className="font-serif font-black mb-0" style={{ fontSize: "clamp(32px,4vw,52px)", letterSpacing: "-0.02em" }}>Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 border-t border-[--black]/15">
          {services.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 60}>
              <article className="svc-item p-10 border-b border-[--black]/15 border-r border-[--black]/15 cursor-none">
                <div className="svc-num font-serif italic text-xs text-[--gray] mb-5">{s.num}</div>
                <h3 className="font-serif font-bold text-xl leading-tight mb-4" style={{ whiteSpace: "pre-line" }}>{s.name}</h3>
                <p className="svc-desc text-sm leading-relaxed text-[#555]">{s.desc}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="text-center px-12 py-36" aria-label="Contato">
        <div className="sec-label justify-center mb-8">Vamos trabalhar juntas</div>
        <h2
          className="font-serif font-black mb-12 leading-[0.9]"
          style={{ fontSize: "clamp(48px,8vw,110px)", letterSpacing: "-0.03em" }}
        >
          Tem um projeto<br /><em className="font-normal italic">em mente?</em>
        </h2>
        <Link href="/contato" className="cta-btn">Iniciar conversa</Link>
      </section>
<div className="bg-red-500 text-white p-10">
  TESTE TAILWIND
</div>
    </>
  );
}