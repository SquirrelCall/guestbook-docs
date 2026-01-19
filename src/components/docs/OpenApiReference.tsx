"use client";

import dynamic from "next/dynamic";

const SwaggerUI = dynamic(
  async () => (await import("swagger-ui-react")).default,
  { ssr: false }
);

type OpenApiReferenceProps = {
  specUrl: string;
};

export default function OpenApiReference({ specUrl }: OpenApiReferenceProps) {
  return (
    <div className="not-prose mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-white">
      <SwaggerUI
        url={specUrl}
        docExpansion="list"
        deepLinking={true}
        defaultModelsExpandDepth={-1}
        defaultModelExpandDepth={2}
        displayRequestDuration={true}
        filter={true}
        tryItOutEnabled={false}
        persistAuthorization={false}
        supportedSubmitMethods={[]}
      />
    </div>
  );
}

