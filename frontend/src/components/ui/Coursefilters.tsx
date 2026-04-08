import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";

export interface FilterState {
  course: string;
  country: string;
  university: string;
  sortBy: "relevance" | "qs_rating";
}

interface Props {
  filters: FilterState;
  onChange: (f: FilterState) => void;
  total?: number;
}

export function CourseFilters({ filters, onChange, total }: Props) {
  const [open, setOpen] = useState(false);

  const set = (key: keyof FilterState, val: string) =>
    onChange({ ...filters, [key]: val });

  const hasActive =
    filters.course || filters.country || filters.university || filters.sortBy !== "relevance";

  const clearAll = () =>
    onChange({ course: "", country: "", university: "", sortBy: "relevance" });

  return (
    <div className="bg-background border border-border rounded-2xl p-4 shadow-sm">
      {/* Search bar row */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search courses..."
            value={filters.course}
            onChange={(e) => set("course", e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-secondary text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
          />
        </div>
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition ${
            open ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground hover:bg-secondary"
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters {hasActive && <span className="w-2 h-2 rounded-full bg-accent inline-block" />}
        </button>
        {hasActive && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <X className="w-4 h-4" /> Clear
          </button>
        )}
      
      </div>

      {/* Expanded filters */}
      {open && (
        <div className="mt-4 pt-4 border-t border-border grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">
              Country
            </label>
            <input
              type="text"
              placeholder="e.g. UK, Australia..."
              value={filters.country}
              onChange={(e) => set("country", e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">
              University
            </label>
            <input
              type="text"
              placeholder="e.g. Oxford, MIT..."
              value={filters.university}
              onChange={(e) => set("university", e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">
              Sort By
            </label>
            <select
              value={filters.sortBy}
              onChange={(e) => set("sortBy", e.target.value as FilterState["sortBy"])}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
            >
              <option value="relevance">Relevance</option>
              <option value="qs_rating">QS Rating</option>
            </select>
          </div>
        </div>
      )}
      {total !== undefined && (
        <p className="mt-3 text-sm text-muted-foreground sm:hidden">
          <strong className="text-foreground">{total}</strong> courses found
        </p>
      )}
    </div>
  );
}