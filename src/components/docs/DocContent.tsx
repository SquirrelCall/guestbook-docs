import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import PageHeader from "@/components/docs/PageHeader";
import { getDocBySlug } from "@/lib/docs/nav";

type DocContentProps = {
  slug: string[];
};

function wrapSectionContainers(source: string): string {
  const lines = source.split(/\r?\n/);
  const output: string[] = [];
  let inFence = false;
  let hasSection = false;

  for (const line of lines) {
    const trimmed = line.trimStart();
    if (trimmed.startsWith("```")) {
      inFence = !inFence;
    }

    if (!inFence && /^##\s+/.test(line)) {
      if (hasSection) {
        output.push("</section>");
      }
      output.push('<section className="docs-section">');
      hasSection = true;
    }

    output.push(line);
  }

  if (hasSection) {
    output.push("</section>");
  }

  return output.join("\n");
}

export default async function DocContent({ slug }: DocContentProps) {
  const doc = await getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const { content } = await compileMDX({
    source: wrapSectionContainers(doc.content),
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
        icon={doc.frontmatter.icon}
      />
      <div className="docs-prose prose prose-slate mt-6 max-w-none text-base leading-7 prose-headings:scroll-mt-24 prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-a:text-slate-900 prose-a:underline prose-a:decoration-slate-300 hover:prose-a:decoration-slate-500 prose-a:underline-offset-4 visited:prose-a:text-slate-700">
        {content}
      </div>
    </div>
  );
}
