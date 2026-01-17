import DocsErrorShell from "@/components/docs/DocsErrorShell";

export default function NotFoundPage() {
  return (
    <DocsErrorShell
      title="Page not found"
      message="We could not find that documentation page. Check the URL or start from an audience landing page."
      actionLabel="Back to docs"
      actionHref="/docs/users"
    />
  );
}
