import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com Sandrini Espindula Maciel para iniciar um projeto de branding, identidade visual ou design editorial.",
  alternates: { canonical: "https://sandrinimaciel.design/contato" },
};

export default function Contato() {
  return (
    <main className="min-h-screen pt-36 pb-24 px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start max-w-6xl">
        {/* Left */}
        <div>
          <div className="sec-label">Contato</div>
          <h1 className="font-serif font-black leading-[0.9] mb-8" style={{ fontSize: "clamp(48px,7vw,96px)", letterSpacing: "-0.03em" }}>
            Vamos<br /><em className="font-normal italic">conversar.</em>
          </h1>
          <p className="text-base leading-[1.75] text-[#444] max-w-sm mb-12">
            Conte-me sobre o seu projeto. Respondo em até 48 horas úteis.
          </p>

          <div className="space-y-6">
            {[
              { label: "E-mail",    value: "oi@sandrinimaciel.design" },
              { label: "Instagram", value: "@sandrinimaciel"           },
              { label: "Behance",   value: "behance.net/sandrinimaciel"},
            ].map(c => (
              <div key={c.label}>
                <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[--gray] mb-1">{c.label}</div>
                <div className="font-serif font-bold text-lg">{c.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div>
          <form className="space-y-6" noValidate>
            {[
              { id: "nome",    label: "Nome",    type: "text",  placeholder: "Seu nome" },
              { id: "email",   label: "E-mail",  type: "email", placeholder: "seu@email.com" },
              { id: "empresa", label: "Empresa", type: "text",  placeholder: "Nome da empresa (opcional)" },
            ].map(f => (
              <div key={f.id}>
                <label htmlFor={f.id} className="block text-[0.65rem] tracking-[0.2em] uppercase text-[--gray] mb-2">{f.label}</label>
                <input
                  id={f.id}
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full border-b border-[--black]/30 bg-transparent py-3 text-base text-[--black] placeholder-[--gray]/50 outline-none focus:border-[--black] transition-colors"
                />
              </div>
            ))}

            <div>
              <label htmlFor="mensagem" className="block text-[0.65rem] tracking-[0.2em] uppercase text-[--gray] mb-2">Mensagem</label>
              <textarea
                id="mensagem"
                rows={5}
                placeholder="Conte-me sobre seu projeto..."
                className="w-full border-b border-[--black]/30 bg-transparent py-3 text-base text-[--black] placeholder-[--gray]/50 outline-none focus:border-[--black] transition-colors resize-none"
              />
            </div>

            <button type="submit" className="cta-btn mt-4">Enviar mensagem</button>
          </form>
        </div>
      </div>
    </main>
  );
}