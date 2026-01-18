import Link from "next/link";

import SidebarAccordion from "./SidebarAccordion";
import ThemeToggle from "./ThemeToggle";
import type { NavSection } from "./NavTree";

type DocsShellProps = {
  nav: NavSection[];
  children: React.ReactNode;
};

export default function DocsShell({ nav, children }: DocsShellProps) {
  return (
    <div className="min-h-screen bg-transparent">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/95">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <Link
            href="/docs/users"
            className="text-lg font-semibold text-slate-900 dark:text-slate-50"
          >
            Guestbook Docs
          </Link>
          <div className="flex w-full max-w-md items-center justify-end gap-3">
            <input
              type="search"
              placeholder="Search documentation"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-slate-500 dark:focus:ring-slate-600"
            />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className="mx-auto flex w-full max-w-6xl">
        <aside className="w-72 shrink-0 border-r border-slate-200 bg-white/90 px-4 py-6 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/90">
          <SidebarAccordion sections={nav} />
        </aside>
        <main className="min-w-0 flex-1 px-4 py-6">{children}</main>
      </div>
    </div>
  );
}
