import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça Sandrini Espindula Maciel, designer gráfica com mais de 9 anos de experiência em branding, identidade visual e design editorial.",
  alternates: { canonical: "https://sandrinimaciel.design/sobre" },
};

const stats = [
  { num: "9+",  label: "Anos de experiência" },
  { num: "80+", label: "Projetos entregues"   },
  { num: "3×",  label: "Premiada"             },
  { num: "40+", label: "Clientes satisfeitos" },
];

const testimonials = [
  { text: "Sandrini entendeu nossa essência de forma surpreendente. O resultado superou todas as expectativas — uma identidade que nos representa com precisão e beleza.", name: "Camila Lopes", role: "Fundadora, Coletivo Norte", init: "CL" },
  { text: "Profissionalismo impecável e sensibilidade estética rara. O design editorial ganhou um novo nível com a direção da Sandrini.", name: "Rafael Melo", role: "Editor-chefe, Revista Camada", init: "RM" },
  { text: "Trabalhar com a Sandrini foi transformador. Ela trouxe estratégia, beleza e cuidado em cada detalhe do nosso rebranding.", name: "Thais Santos", role: "CEO, Botânica Co.", init: "TS" },
];

export default function Sobre() {
  return (
    <main>
      {/* Hero Sobre */}
      <section className="bg-[--black] text-[--white] px-12 pt-40 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="sec-label invert">Sobre</div>
            <h1 className="font-serif font-black leading-[1.05] mb-8" style={{ fontSize: "clamp(40px,5vw,68px)", letterSpacing: "-0.02em" }}>
              Design com<br /><em className="font-normal italic">intenção</em><br />e alma.
            </h1>
            <p className="text-[rgba(245,243,239,.7)] text-base leading-[1.75] max-w-md mb-4">
              Sou Sandrini Espindula Maciel, designer gráfica com mais de 9 anos de experiência criando marcas que comunicam com clareza e beleza.
            </p>
            <p className="text-[rgba(245,243,239,.7)] text-base leading-[1.75] max-w-md">
              Acredito que o bom design parte de uma escuta profunda — dos valores, do contexto e das pessoas que a marca precisa tocar. Meu trabalho une rigor conceitual e sensibilidade estética para construir identidades visuais que resistem ao tempo.
            </p>
          </div>

          <div className="relative hidden md:block">
            <div className="relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#333]" style={{ aspectRatio: "3/4" }}>
              <span className="font-serif font-black" style={{ fontSize: 120, color: "rgba(245,243,239,0.06)", letterSpacing: "-0.05em" }}>SEM</span>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[--white] text-[--black] p-5">
              <p className="font-serif italic text-sm leading-relaxed">"Design é a ponte<br />entre intenção e impacto."</p>
              <p className="text-[0.6rem] tracking-[0.15em] uppercase text-[--gray] mt-1">— Sandrini E. Maciel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[--black] border-t border-[rgba(245,243,239,.08)] px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 80}>
              <div>
                <div className="font-serif font-black text-[--white] leading-none mb-2" style={{ fontSize: "3.5rem", letterSpacing: "-0.03em" }}>{s.num}</div>
                <div className="text-[0.7rem] tracking-[0.15em] uppercase text-[rgba(245,243,239,.5)]">{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Processo */}
      <section className="px-12 py-24 bg-[--light]">
        <div className="sec-label">Processo</div>
        <h2 className="font-serif font-black mb-16" style={{ fontSize: "clamp(32px,4vw,52px)", letterSpacing: "-0.02em" }}>Como trabalho</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-[--black]/15">
          {[
            { num: "01", title: "Escuta",     desc: "Imersão profunda no negócio, valores e contexto do cliente para entender o que a marca precisa comunicar." },
            { num: "02", title: "Estratégia", desc: "Definição de posicionamento, propósito e diretrizes que fundamentam todas as decisões criativas." },
            { num: "03", title: "Criação",    desc: "Desenvolvimento visual com rigor e sensibilidade, explorando possibilidades que expressem a essência da marca." },
            { num: "04", title: "Entrega",    desc: "Finalização e documentação completa para garantir consistência em todas as aplicações da identidade." },
          ].map((p, i) => (
            <ScrollReveal key={p.num} delay={i * 80}>
              <div className="p-10 border-r border-b border-[--black]/15">
                <div className="font-serif italic text-xs text-[--gray] mb-5">{p.num}</div>
                <h3 className="font-serif font-bold text-xl mb-4">{p.title}</h3>
                <p className="text-sm leading-relaxed text-[#555]">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="px-12 py-24">
        <div className="sec-label">Depoimentos</div>
        <h2 className="font-serif font-black mb-16" style={{ fontSize: "clamp(32px,4vw,52px)", letterSpacing: "-0.02em" }}>
          O que dizem<br /><em className="font-normal italic">os clientes</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 80}>
              <article className="p-10 border border-[--black]/12 relative">
                <div className="font-serif font-black text-5xl leading-none absolute top-6 right-7" style={{ color: "rgba(10,10,10,0.06)" }} aria-hidden="true">"</div>
                <blockquote className="text-sm leading-[1.75] text-[#333] mb-7">{`"${t.text}"`}</blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[--black] flex items-center justify-center font-serif text-sm font-bold text-[--white] shrink-0" aria-hidden="true">{t.init}</div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-[--gray] mt-0.5">{t.role}</div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-12 py-28 bg-[--black] text-[--white]">
        <h2 className="font-serif font-black mb-10 leading-[0.9]" style={{ fontSize: "clamp(40px,6vw,80px)", letterSpacing: "-0.03em" }}>
          Vamos criar<br /><em className="font-normal italic">juntas?</em>
        </h2>
        <Link href="/contato" className="cta-btn invert">Entrar em contato</Link>
      </section>
    </main>
  );
}