export default function Marquee() {
  const items = ["Identidade Visual","Branding","Design Editorial","Tipografia","Embalagem","Estratégia de Marca","Naming","Direção de Arte"];
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-t border-b border-[--black] py-4 bg-[--black]" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="font-serif italic text-[--white] px-8 tracking-wide text-sm after:content-['·'] after:ml-8">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}