import { AUDIENCE_META, type Audience } from "@/lib/docs/constants";

type PageHeaderProps = {
  title: string;
  summary: string;
  audience: Audience;
  icon?: string;
};

export default function PageHeader({
  title,
  summary,
  audience,
  icon
}: PageHeaderProps) {
  const label = AUDIENCE_META[audience]?.label ?? audience;

  return (
    <header className="space-y-3 border-b border-slate-200 pb-4">
      <div className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
        {icon ? (
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold uppercase text-slate-600">
            {icon}
          </span>
        ) : null}
        {label}
      </div>
      <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
      <p className="text-base text-slate-600">{summary}</p>
    </header>
  );
}
