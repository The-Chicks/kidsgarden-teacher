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

export interface InformationInterface {
  info_id: number;
  info_content: string;
  info_date: string;
  user_id: string;
}

export interface ConverstaionInterface {
  conv_id: number;
  conv_title: string;
  conv_content: string;
  conv_date: string;
}
