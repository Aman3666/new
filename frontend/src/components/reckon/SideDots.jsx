export default function SideDots({ active, onNav, sections }) {
  return (
    <div
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3"
      data-testid="side-dots"
    >
      {sections.map((s, idx) => {
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => onNav(s.id)}
            data-testid={`dot-${s.id}`}
            className="group flex items-center gap-3"
            aria-label={`Go to ${s.label}`}
          >
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.22em] transition-opacity ${
                isActive
                  ? "opacity-100 text-[#0055FF]"
                  : "opacity-0 group-hover:opacity-100 text-[#475569]"
              }`}
            >
              {String(idx + 1).padStart(2, "0")} / {s.label}
            </span>
            <span
              className={`block transition-all duration-300 ${
                isActive
                  ? "w-6 h-[2px] bg-[#0055FF]"
                  : "w-2 h-2 rounded-full bg-[#CBD5E1] group-hover:bg-[#0055FF]"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
