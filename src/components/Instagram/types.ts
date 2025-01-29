// app/components/ActivitySidebar/types.ts
export interface Activity {
    id: number;
    type: 'instagram' | 'photo' | 'blog' | 'event';
    title: string;
    content: string;
    image?: string;
    timestamp: string;
    link: string;
  }
  
  export interface ActivityType {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
  }
  
  export interface ActivitySidebarProps {
    isOpen: boolean;
    onClose: () => void;
  }