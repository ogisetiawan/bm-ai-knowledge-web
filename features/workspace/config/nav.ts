export type AppNavStatus = "core" | "optional" | "future" | "admin";

export type AppNavItem = {
  id: string;
  label: string;
  href: string;
  status: AppNavStatus;
  /** Exact path match. Required when another item lives under this href. */
  exact?: boolean;
  /** Nested sub-menus. Present only when this item expands into children. */
  children?: AppNavItem[];
};

export type AppNavGroup = {
  id: string;
  label: string;
  status: AppNavStatus;
  items: AppNavItem[];
};

/**
 * Menu tree from specs/menus.md.
 * Optional groups stay hidden until their id is added to enabledOptionalModules.
 * Admin groups stay hidden until an administrator session is passed in.
 * Future items are kept here so they can be activated later without reshaping the tree.
 */
export const appNav: AppNavGroup[] = [
  {
    id: "home",
    label: "Home",
    status: "core",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        href: "/dashboard",
        status: "core",
      },
    ],
  },
  {
    id: "chat",
    label: "Chat",
    status: "core",
    items: [
      {
        id: "ai-knowledge-chat",
        label: "Chat",
        href: "/chat",
        status: "core",
        exact: true,
      },
      {
        id: "history",
        label: "History",
        href: "/chat/history",
        status: "core",
      },
      {
        id: "saved-answers",
        label: "Saved Answers",
        href: "/chat/saved",
        status: "core",
      },
      {
        id: "prompt-library",
        label: "Prompt Library",
        href: "/chat/prompts",
        status: "future",
      },
    ],
  },
  {
    id: "knowledge-center",
    label: "Knowledge Center",
    status: "core",
    items: [
      {
        id: "product-knowledge",
        label: "Product Knowledge",
        href: "/knowledge/products",
        status: "core",
      },
      {
        id: "sop-policies",
        label: "SOP & Policies",
        href: "/knowledge/policies",
        status: "core",
      },
      {
        id: "regulations",
        label: "Regulations",
        href: "/knowledge/regulations",
        status: "core",
      },
      {
        id: "document-repository",
        label: "Document Repository",
        href: "/knowledge/documents",
        status: "core",
      },
    ],
  },
  {
    id: "document-intelligence",
    label: "Document Intelligence",
    status: "optional",
    items: [
      {
        id: "summarize",
        label: "Summarize",
        href: "/documents/summarize",
        status: "optional",
      },
      {
        id: "translate",
        label: "Translate",
        href: "/documents/translate",
        status: "optional",
      },
      {
        id: "compare-documents",
        label: "Compare Documents",
        href: "/documents/compare",
        status: "optional",
      },
      {
        id: "extract-data",
        label: "Extract Data",
        href: "/documents/extract",
        status: "optional",
      },
    ],
  },
  {
    id: "saved-workspace",
    label: "Saved Workspace",
    status: "optional",
    items: [
      {
        id: "bookmarks",
        label: "Bookmarks",
        href: "/workspace/library",
        status: "optional",
      },
      {
        id: "saved-searches",
        label: "Saved Searches",
        href: "/workspace/searches",
        status: "optional",
      },
      {
        id: "collections",
        label: "Collections",
        href: "/workspace/collections",
        status: "optional",
      },
    ],
  },
  {
    id: "administration",
    label: "Administration",
    status: "admin",
    items: [
      {
        id: "user-management",
        label: "User Management",
        href: "/admin/users",
        status: "admin",
      },
      {
        id: "role-permission",
        label: "Role & Permission",
        href: "/admin/roles",
        status: "admin",
      },
      {
        id: "access-control",
        label: "Access Control",
        href: "/admin/access",
        status: "admin",
      },
    ],
  },
  {
    id: "knowledge-management",
    label: "Knowledge Management",
    status: "future",
    items: [
      {
        id: "knowledge-sources",
        label: "Knowledge Sources",
        href: "/manage/sources",
        status: "future",
      },
      {
        id: "document-management",
        label: "Document Management",
        href: "/manage/documents",
        status: "future",
      },
      {
        id: "knowledge-categories",
        label: "Knowledge Categories",
        href: "/manage/categories",
        status: "future",
      },
    ],
  },
];

/** Optional module ids from specs/menus.md. Empty until a module is enabled. */
export const enabledOptionalModules = new Set<string>();

export function visibleAppNav(isAdmin = false): AppNavGroup[] {
  return appNav
    .filter((group) => isGroupVisible(group, isAdmin))
    .map((group) => ({
      ...group,
      items: visibleItems(group.items, isAdmin),
    }))
    .filter((group) => group.items.length > 0);
}

function visibleItems(items: AppNavItem[], isAdmin: boolean): AppNavItem[] {
  return items
    .filter((item) => isItemVisible(item, isAdmin))
    .map((item) => {
      const children = item.children ? visibleItems(item.children, isAdmin) : undefined;
      return {
        ...item,
        children: children && children.length > 0 ? children : undefined,
      };
    });
}

function isGroupVisible(group: AppNavGroup, isAdmin: boolean): boolean {
  if (group.status === "core") return true;
  if (group.status === "admin") return isAdmin;
  if (group.status === "optional") return enabledOptionalModules.has(group.id);
  return false;
}

function isItemVisible(item: AppNavItem, isAdmin: boolean): boolean {
  if (item.status === "core") return true;
  if (item.status === "admin") return isAdmin;
  if (item.status === "optional") return enabledOptionalModules.has(item.id);
  return false;
}

export function isNavItemActive(pathname: string, item: AppNavItem): boolean {
  if (item.exact) return pathname === item.href;
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export function navContainsPath(pathname: string, items: AppNavItem[]): boolean {
  return items.some(
    (item) =>
      isNavItemActive(pathname, item) ||
      (item.children ? navContainsPath(pathname, item.children) : false),
  );
}
