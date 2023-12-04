// Types
import { User } from "../../../../../../../user/User.types";

export enum NotificationTypes {
  COMPLETION = "completion",
  MENTION = "mention",
  ADDED = "added",
  REQUEST_TO_EDIT = "requestToEdit",
}

export enum NotificationState {
  READ = "read",
  UNREAD = "UNREAD",
}

export interface NotificationProps {
  notification: Notification;
}

export interface Notification {
  id: string | number;
  user: User;
  task: string;
  type: NotificationTypes;
  sentDate: string;
  state: NotificationState;
}
