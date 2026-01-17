import fs from "fs";
import path from "path";

import { AUDIENCE_META, type Audience } from "../src/lib/docs/constants";
import { parseFrontmatter } from "../src/lib/docs/frontmatter";

type DocRecord = {
  filePath: string;
  relativePath: string;
  audience: Audience;
  href: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content", "docs");

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

function buildHref(relativePath: string): string {
  const parts = relativePath.split(path.sep).filter(Boolean);
  const filename = parts.pop() ?? "";
  const baseName = filename.replace(/\.mdx$/, "");
  const slug = [...parts];
  if (baseName && baseName !== "page") {
    slug.push(baseName);
  }
  return `/docs/${slug.join("/")}`;
}

const warnings: string[] = [];
const errors: string[] = [];
const docs: DocRecord[] = [];

const files = collectMdxFiles(CONTENT_ROOT);

for (const filePath of files) {
  const relativePath = path.relative(CONTENT_ROOT, filePath);
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const { frontmatter } = parseFrontmatter(filePath, raw);
    const href = buildHref(relativePath);
    docs.push({
      filePath,
      relativePath,
      audience: frontmatter.audience,
      href
    });

    const segments = relativePath.replace(/\.mdx$/, "").split(path.sep);
    const depth = Math.max(segments.length - 1, 0);
    if (depth > 2) {
      warnings.push(
        `${relativePath}: nesting depth ${depth} exceeds recommended limit.`
      );
    }
  } catch (error) {
    errors.push(String(error));
  }
}

(Object.keys(AUDIENCE_META) as Audience[]).forEach((audience) => {
  const landingHref = AUDIENCE_META[audience].urlPrefix;
  const hasLanding = docs.some((doc) => doc.href === landingHref);
  if (!hasLanding) {
    errors.push(`Missing landing page for ${audience} (${landingHref}).`);
  }
});

if (warnings.length > 0) {
  console.warn("Doc lint warnings:");
  warnings.forEach((warning) => console.warn(`- ${warning}`));
}

if (errors.length > 0) {
  console.error("Doc lint errors:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log("Doc lint passed.");
}
