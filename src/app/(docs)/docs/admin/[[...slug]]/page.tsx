import DocContent from "@/components/docs/DocContent";

export default async function AdminDocsPage({
  params
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const slug = ["admin", ...(resolvedParams.slug ?? [])];
  return <DocContent slug={slug} />;
}
