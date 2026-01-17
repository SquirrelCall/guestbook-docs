import DocContent from "@/components/docs/DocContent";

export default async function DevelopersDocsPage({
  params
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const slug = ["developers", ...(resolvedParams.slug ?? [])];
  return <DocContent slug={slug} />;
}
