// src/components/NavBar/types.ts
export interface NavLinkType {
    href?: string;
    label: string;
    isDropdown?: boolean;
    subLinks?: Array<{
      href: string;
      label: string;
    }>;
  }