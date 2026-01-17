import DocContent from "@/components/docs/DocContent";

export default async function UsersDocsPage({
  params
}: {
  params: { slug?: string[] };
}) {
  const slug = ["users", ...(params.slug ?? [])];
  return <DocContent slug={slug} />;
}
