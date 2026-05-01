"use client";

import { useState } from "react";

const PHONE_NUMBER = "+917057311166";

export default function RevealButton() {
  const [revealed, setRevealed] = useState(false);

  if (revealed) {
    return (
      <a
        href={`https://wa.me/${PHONE_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between bg-[var(--color-surface-container-highest)] px-8 py-6 rounded-lg active:scale-95 transition-transform min-h-[72px]"
      >
        <span className="font-bold text-lg font-[family-name:var(--font-manrope)] text-[var(--color-on-surface)]">
          WhatsApp: {PHONE_NUMBER}
        </span>
        <svg className="w-5 h-5 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </a>
    );
  }

  return (
    <button
      onClick={() => setRevealed(true)}
      className="w-full flex items-center justify-between bg-[var(--color-surface-container-highest)] px-8 py-6 rounded-lg active:scale-95 transition-transform min-h-[72px] text-left"
    >
      <div className="flex items-center gap-4">
        <span className="font-bold text-lg font-[family-name:var(--font-manrope)] text-[var(--color-on-surface)]">WhatsApp</span>
        <span className="text-[var(--color-primary)] font-bold text-sm">Reveal Number</span>
      </div>
      <svg className="w-5 h-5 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    </button>
  );
}
