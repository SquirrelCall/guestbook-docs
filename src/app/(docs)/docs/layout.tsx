import DocsShell from "@/components/docs/DocsShell";
import { getNavTree } from "@/components/docs/NavTree";

export default async function DocsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const nav = await getNavTree();
  return <DocsShell nav={nav}>{children}</DocsShell>;
}
