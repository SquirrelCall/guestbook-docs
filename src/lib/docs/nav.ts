import fs from "fs";
import path from "path";

import { parseFrontmatter, type DocFrontmatter } from "./frontmatter";

const CONTENT_ROOT = path.join(process.cwd(), "content", "docs");

export type DocEntry = {
  filePath: string;
  relativePath: string;
  slug: string[];
  href: string;
  frontmatter: DocFrontmatter;
  content: string;
};

function collectMdxFiles(dir: string, files: string[] = []): string[] {
  if (!fs.existsSync(dir)) {
    return files;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectMdxFiles(fullPath, files);
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }

  return files;
}

function toDocEntry(filePath: string): DocEntry {
  const raw = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = parseFrontmatter(filePath, raw);
  const relativePath = path.relative(CONTENT_ROOT, filePath);
  const parts = relativePath.split(path.sep).filter(Boolean);
  const filename = parts.pop() ?? "";
  const baseName = filename.replace(/\.mdx$/, "");
  const slug = [...parts];

  if (baseName && baseName !== "page") {
    slug.push(baseName);
  }

  const href = `/docs/${slug.join("/")}`;

  return {
    filePath,
    relativePath,
    slug,
    href,
    frontmatter,
    content
  };
}

export async function getAllDocs(): Promise<DocEntry[]> {
  const files = collectMdxFiles(CONTENT_ROOT);
  return files.map((filePath) => toDocEntry(filePath));
}

export async function getDocBySlug(
  slug: string[]
): Promise<DocEntry | null> {
  if (!slug.length) {
    return null;
  }

  const directFile = path.join(CONTENT_ROOT, ...slug) + ".mdx";
  const pageFile = path.join(CONTENT_ROOT, ...slug, "page.mdx");

  let filePath = "";
  if (fs.existsSync(directFile)) {
    filePath = directFile;
  } else if (fs.existsSync(pageFile)) {
    filePath = pageFile;
  } else {
    return null;
  }

  return toDocEntry(filePath);
}
