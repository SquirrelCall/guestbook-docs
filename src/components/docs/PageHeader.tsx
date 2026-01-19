import type { IconType } from "react-icons";
import {
  FaBarcode,
  FaBook,
  FaBug,
  FaChartLine,
  FaCircleCheck,
  FaCircleQuestion,
  FaCode,
  FaClipboard,
  FaDiagramProject,
  FaGear,
  FaHouse,
  FaIdCard,
  FaLifeRing,
  FaPlug,
  FaPuzzlePiece,
  FaServer,
  FaShield,
  FaTabletScreenButton,
  FaUser,
  FaUsers
} from "react-icons/fa6";

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
  const iconKey = icon?.toLowerCase().trim();

  const ICONS: Record<string, IconType> = {
    // Existing / users
    user: FaUser,
    play: FaHouse,
    barcode: FaBarcode,
    "scan-line": FaBarcode,
    check: FaCircleCheck,
    shield: FaShield,
    "life-buoy": FaLifeRing,

    // Landing pages
    settings: FaGear,
    code: FaCode,

    // Admin pages
    device: FaTabletScreenButton,
    "chart-line": FaChartLine,
    bug: FaBug,
    users: FaUsers,
    server: FaServer,

    // Developer pages
    book: FaBook,
    plug: FaPlug,
    "diagram-project": FaDiagramProject,
    "id-card": FaIdCard,
    "puzzle-piece": FaPuzzlePiece,
    clipboard: FaClipboard
  };

  const IconComponent: IconType | null =
    iconKey && ICONS[iconKey] ? ICONS[iconKey] : null;

  return (
    <header className="space-y-3 border-b border-slate-200 pb-4 dark:border-slate-700">
      <div className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">
        {IconComponent ? (
          <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            <IconComponent className="h-3.5 w-3.5" aria-hidden />
          </span>
        ) : iconKey ? (
          <span
            className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
            title={`Unknown icon: ${icon}`}
          >
            <FaCircleQuestion className="h-3.5 w-3.5" aria-hidden />
          </span>
        ) : null}
        {label}
      </div>
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">
        {title}
      </h1>
      <p className="text-base text-slate-700 dark:text-slate-300">{summary}</p>
    </header>
  );
}
