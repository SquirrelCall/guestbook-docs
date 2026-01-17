import { AUDIENCE_META, type Audience } from "@/lib/docs/constants";
import { getAllDocs } from "@/lib/docs/nav";

export type NavItem = {
  title: string;
  href: string;
  summary: string;
  audience: Audience;
  navOrder: number;
  isLanding: boolean;
};

export type NavSection = {
  audience: Audience;
  label: string;
  urlPrefix: string;
  items: NavItem[];
};

export async function getNavTree(): Promise<NavSection[]> {
  const docs = await getAllDocs();

  return (Object.keys(AUDIENCE_META) as Audience[]).map((audience) => {
    const meta = AUDIENCE_META[audience];
    const items = docs
      .filter((doc) => doc.frontmatter.audience === audience)
      .map<NavItem>((doc) => ({
        title: doc.frontmatter.title,
        href: doc.href,
        summary: doc.frontmatter.summary,
        audience,
        navOrder: doc.frontmatter.nav_order,
        isLanding: doc.href === meta.urlPrefix
      }))
      .sort((a, b) => {
        if (a.isLanding && !b.isLanding) return -1;
        if (!a.isLanding && b.isLanding) return 1;
        return a.navOrder - b.navOrder;
      });

    return {
      audience,
      label: meta.label,
      urlPrefix: meta.urlPrefix,
      items
    };
  });
}
