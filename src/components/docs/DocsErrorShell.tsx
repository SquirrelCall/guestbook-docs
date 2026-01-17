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
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <Link href="/docs/users" className="text-lg font-semibold">
            Guestbook Docs
          </Link>
          <div className="w-full max-w-md">
            <input
              type="search"
              placeholder="Search documentation"
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </div>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6 py-16">
        <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
        <p className="text-base text-slate-600">{message}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          {actionHref && actionLabel ? (
            <Link
              href={actionHref}
              className="rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {actionLabel}
            </Link>
          ) : null}
          {onAction && !actionHref ? (
            <button
              type="button"
              onClick={onAction}
              className="rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {actionLabel ?? "Try again"}
            </button>
          ) : null}
          <Link
            href="/docs/users"
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Go to Users docs
          </Link>
        </div>
      </main>
    </div>
  );
}
