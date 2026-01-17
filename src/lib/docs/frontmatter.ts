import matter from "gray-matter";

import { AUDIENCE_META, type Audience } from "./constants";

export type DocFrontmatter = {
  title: string;
  audience: Audience;
  summary: string;
  url_prefix: string;
  nav_order: number;
  icon?: string;
};

type ParsedFrontmatter = {
  frontmatter: DocFrontmatter;
  content: string;
};

export function parseFrontmatter(
  filePath: string,
  source: string
): ParsedFrontmatter {
  const { data, content } = matter(source);
  const errors: string[] = [];

  const title = typeof data.title === "string" ? data.title.trim() : "";
  if (!title) {
    errors.push("Missing or invalid 'title'.");
  }

  const audience = data.audience as Audience | undefined;
  if (!audience || !(audience in AUDIENCE_META)) {
    errors.push("Missing or invalid 'audience'.");
  }

  const summary = typeof data.summary === "string" ? data.summary.trim() : "";
  if (!summary) {
    errors.push("Missing or invalid 'summary'.");
  }

  const urlPrefix = typeof data.url_prefix === "string" ? data.url_prefix : "";
  if (!urlPrefix) {
    errors.push("Missing or invalid 'url_prefix'.");
  }

  const navOrder =
    typeof data.nav_order === "number" ? data.nav_order : Number.NaN;
  if (!Number.isFinite(navOrder)) {
    errors.push("Missing or invalid 'nav_order'.");
  }

  if (data.icon !== undefined && typeof data.icon !== "string") {
    errors.push("Invalid 'icon' value (must be a string).");
  }

  if (audience && audience in AUDIENCE_META) {
    const expectedPrefix = AUDIENCE_META[audience].urlPrefix;
    if (urlPrefix && urlPrefix !== expectedPrefix) {
      errors.push(
        `Invalid 'url_prefix'. Expected '${expectedPrefix}' for ${audience}.`
      );
    }
  }

  if (errors.length > 0) {
    throw new Error(`${filePath}: ${errors.join(" ")}`);
  }

  return {
    frontmatter: {
      title,
      audience: audience as Audience,
      summary,
      url_prefix: urlPrefix,
      nav_order: navOrder,
      icon: data.icon as string | undefined
    },
    content
  };
}
