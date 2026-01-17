"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import type { NavSection } from "./NavTree";

type SidebarAccordionProps = {
  sections: NavSection[];
};

export default function SidebarAccordion({ sections }: SidebarAccordionProps) {
  const pathname = usePathname();
  const initialOpen = useMemo(() => {
    const active = sections.find((section) =>
      pathname.startsWith(section.urlPrefix)
    );
    return active?.audience ?? sections[0]?.audience ?? "users";
  }, [pathname, sections]);

  const [openAudience, setOpenAudience] = useState(initialOpen);

  useEffect(() => {
    if (initialOpen && initialOpen !== openAudience) {
      setOpenAudience(initialOpen);
    }
  }, [initialOpen, openAudience]);

  return (
    <nav className="space-y-4">
      {sections.map((section) => {
        const isOpen = openAudience === section.audience;
        return (
          <div key={section.audience} className="space-y-2">
            <button
              type="button"
              onClick={() => setOpenAudience(section.audience)}
              className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              <span>{section.label}</span>
              <span className="text-xs text-slate-400">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <ul className="space-y-1 pl-2">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block rounded-md px-2 py-1 text-sm ${
                          isActive
                            ? "bg-slate-100 font-medium text-slate-900"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
