export const AUDIENCE_META = {
  users: {
    label: "Users",
    urlPrefix: "/docs/users"
  },
  administrators: {
    label: "Administrators",
    urlPrefix: "/docs/admin"
  },
  developers: {
    label: "Developers & Integrators",
    urlPrefix: "/docs/developers"
  }
} as const;

export type Audience = keyof typeof AUDIENCE_META;
