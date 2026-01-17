"use client";

import DocsErrorShell from "@/components/docs/DocsErrorShell";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <DocsErrorShell
      title="Something went wrong"
      message={error.message || "An unexpected error occurred."}
      actionLabel="Try again"
      onAction={reset}
    />
  );
}
