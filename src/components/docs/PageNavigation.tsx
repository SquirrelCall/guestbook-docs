import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { getNavTree, type NavItem } from "./NavTree";
import type { Audience } from "@/lib/docs/constants";

type PageNavigationProps = {
  currentHref: string;
  audience: Audience;
};

export default async function PageNavigation({
  currentHref,
  audience
}: PageNavigationProps) {
  const nav = await getNavTree();
  const section = nav.find((s) => s.audience === audience);

  if (!section) {
    return null;
  }

  const currentIndex = section.items.findIndex(
    (item) => item.href === currentHref
  );

  if (currentIndex === -1) {
    return null;
  }

  const prevItem: NavItem | undefined =
    currentIndex > 0 ? section.items[currentIndex - 1] : undefined;
  const nextItem: NavItem | undefined =
    currentIndex < section.items.length - 1
      ? section.items[currentIndex + 1]
      : undefined;

  if (!prevItem && !nextItem) {
    return null;
  }

  return (
    <nav className="mt-12 flex items-center justify-between border-t border-slate-200 pt-8 dark:border-slate-700">
      {prevItem ? (
        <Link
          href={prevItem.href}
          className="group flex items-center gap-2 rounded-md border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
        >
          <FaChevronLeft className="h-4 w-4" aria-hidden />
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Previous
            </span>
            <span>{prevItem.title}</span>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {nextItem ? (
        <Link
          href={nextItem.href}
          className="group ml-auto flex items-center gap-2 rounded-md border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
        >
          <div className="flex flex-col text-right">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Next
            </span>
            <span>{nextItem.title}</span>
          </div>
          <FaChevronRight className="h-4 w-4" aria-hidden />
        </Link>
      ) : null}
    </nav>
  );
}
