import DocContent from "@/components/docs/DocContent";

export default async function AdminDocsPage({
  params
}: {
  params: { slug?: string[] };
}) {
  const slug = ["admin", ...(params.slug ?? [])];
  return <DocContent slug={slug} />;
}
