import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import PageHeader from "@/components/docs/PageHeader";
import { getDocBySlug } from "@/lib/docs/nav";

type DocContentProps = {
  slug: string[];
};

export default async function DocContent({ slug }: DocContentProps) {
  const doc = await getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const { content } = await compileMDX({
    source: doc.content,
    options: {
      parseFrontmatter: false
    }
  });

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-10">
      <PageHeader
        title={doc.frontmatter.title}
        summary={doc.frontmatter.summary}
        audience={doc.frontmatter.audience}
      />
      <div className="prose mt-6 max-w-none">{content}</div>
    </div>
  );
}
