"use client";

import { useRef } from "react";
import { books } from "@/data/books";
import BookCard from "./BookCard";

export default function Reading() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="reading" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
            BOOKSHELF
          </p>
          {/* Desktop scroll arrows */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-[4px] bg-[var(--color-surface-container-highest)] flex items-center justify-center text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
              aria-label="Scroll left"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-[4px] bg-[var(--color-surface-container-highest)] flex items-center justify-center text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
              aria-label="Scroll right"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory pt-4 pb-2"
        >
          {books.map((book, index) => (
            <div key={book.title} className="snap-start">
              <BookCard book={book} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
