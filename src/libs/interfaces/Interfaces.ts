export interface ClassInterface {
  id: number;
  name: string;
  teacher: string;
  num: number;
}

export interface AnnouncementListItemInterface {
  id: number;
  title: string;
}

export interface AnnouncementInterface {
  id: number;
  title: string;
  content: string;
  images: string[];
}

export interface NotificationListItemInterface {
  id: number;
  title: string;
}

export interface NotificationInterface {
  id: number;
  title: string;
  content: string;
  images: string[];
}
