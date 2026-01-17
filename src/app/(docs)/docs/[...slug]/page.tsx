import DocContent from "@/components/docs/DocContent";

export default async function DocPage({
  params
}: {
  params: { slug?: string[] };
}) {
  const slug = params.slug ?? [];
  return <DocContent slug={slug} />;
}
