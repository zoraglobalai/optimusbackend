// src/components/courses/OverviewSection.tsx
import { useState, ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  title: string;
  icon?: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

export function OverviewSection({ title, icon, defaultOpen = false, children }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-border overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-secondary hover:bg-secondary/80 transition text-left group"
      >
        <div className="flex items-center gap-3">
          {icon && (
            <span className="text-lg leading-none flex-shrink-0">{icon}</span>
          )}
          <span className="font-display font-semibold text-foreground text-base">
            {title}
          </span>
        </div>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
          open ? "bg-primary text-primary-foreground" : "bg-border/60 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
        }`}>
          {open
            ? <ChevronUp className="w-4 h-4" />
            : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {/* Body */}
      {open && (
        <div className="px-5 py-5 bg-background border-t border-border animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}