"use client";

import Link from "next/link";

type DocsErrorShellProps = {
  title: string;
  message: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
};

export default function DocsErrorShell({
  title,
  message,
  actionLabel,
  actionHref,
  onAction
}: DocsErrorShellProps) {
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
          <div className="w-full max-w-md">
            <input
              type="search"
              placeholder="Search documentation"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-slate-500 dark:focus:ring-slate-600"
            />
          </div>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6 py-16">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">
          {title}
        </h1>
        <p className="text-base text-slate-700 dark:text-slate-300">{message}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          {actionHref && actionLabel ? (
            <Link
              href={actionHref}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {actionLabel}
            </Link>
          ) : null}
          {onAction && !actionHref ? (
            <button
              type="button"
              onClick={onAction}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {actionLabel ?? "Try again"}
            </button>
          ) : null}
          <Link
            href="/docs/users"
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600"
          >
            Go to Users docs
          </Link>
        </div>
      </main>
    </div>
  );
}
