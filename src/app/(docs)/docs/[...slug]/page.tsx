import DocContent from "@/components/docs/DocContent";

export default async function DocPage({
  params
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug ?? [];
  return <DocContent slug={slug} />;
}
