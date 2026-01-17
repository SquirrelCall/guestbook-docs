import { AUDIENCE_META, type Audience } from "@/lib/docs/constants";

type PageHeaderProps = {
  title: string;
  summary: string;
  audience: Audience;
};

export default function PageHeader({
  title,
  summary,
  audience
}: PageHeaderProps) {
  const label = AUDIENCE_META[audience]?.label ?? audience;

  return (
    <header className="space-y-3 border-b border-slate-200 pb-4">
      <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
      <p className="text-base text-slate-600">{summary}</p>
    </header>
  );
}
