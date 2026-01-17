import DocContent from "@/components/docs/DocContent";

export default async function UsersDocsPage({
  params
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const slug = ["users", ...(resolvedParams.slug ?? [])];
  return <DocContent slug={slug} />;
}
