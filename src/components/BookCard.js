const COLORS = [
  "#15263f", "#1b2c47", "#102036", "#0b1a2f", "#1a365d",
  "#1e3a5f", "#1c2d40", "#0f2942", "#162a45", "#1d3557",
  "#183153", "#0d2137", "#142338", "#1b3048", "#19344a",
  "#112640", "#0e1f35", "#16293d", "#1a2f48", "#132841",
  "#172d44", "#0c1e33", "#152a3f", "#1e3550", "#1f3654",
  "#112843", "#14273c", "#192e46", "#0f2239", "#163049",
  "#1b3350", "#102438", "#13263e", "#182c43",
];

export default function BookCard({ book, index }) {
  const bgColor = COLORS[index % COLORS.length];

  return (
    <div className="flex-shrink-0 relative">
      {book.currentlyReading && (
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 text-[10px] font-bold uppercase tracking-wider bg-[var(--color-primary)] text-[var(--color-on-primary)] px-2 py-0.5 rounded-[4px] whitespace-nowrap">
          Reading Now
        </span>
      )}
      <div
        className="w-[100px] lg:w-[140px] aspect-[2/3] rounded-[4px] flex items-center justify-center p-3 text-center"
        style={{ backgroundColor: bgColor }}
      >
        <div>
          <p className="text-[var(--color-on-surface)] text-[11px] lg:text-xs font-bold leading-tight">
            {book.title}
          </p>
          <p className="text-[var(--color-on-surface-variant)] text-[9px] lg:text-[10px] mt-1 leading-tight">
            {book.author}
          </p>
        </div>
      </div>
    </div>
  );
}
