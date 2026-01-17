import DocContent from "@/components/docs/DocContent";

export default async function DevelopersDocsPage({
  params
}: {
  params: { slug?: string[] };
}) {
  const slug = ["developers", ...(params.slug ?? [])];
  return <DocContent slug={slug} />;
}
