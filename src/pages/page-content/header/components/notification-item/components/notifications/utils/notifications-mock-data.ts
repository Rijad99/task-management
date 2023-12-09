// Types
import {
  Notification,
  NotificationState,
  NotificationTypes,
} from "../components/notifications-list/components/notification/Notification.types"
import { UserStatus } from "../../../../user/User.types"

// User Photos
import userOnePhoto from "../../../../../../../../common/images/profile-photos/Profile5.jpg"
import userThreePhoto from "../../../../../../../../common/images/profile-photos/Profile6.jpg"
import userFourPhoto from "../../../../../../../../common/images/profile-photos/Profile7.jpg"
import {FileExtensionTypes} from "../../../../../../../../common/components/file-upload/FileUpload.types.ts";

export const notificationsData: Notification[] = [
  {
    id: 0,
    user: {
      id: 0,
      firstName: "Ralph",
      lastName: "Edwards",
      email: "ralphedwards@gmail.com",
      photo: userOnePhoto,
      status: UserStatus.ONLINE,
    },
    task: "Tetris Design System",
    type: NotificationTypes.REQUEST_TO_EDIT,
    sentDate: "5 min ago",
    state: NotificationState.UNREAD,
  },
  {
    id: 1,
    user: {
      id: 1,
      firstName: "Mandy",
      lastName: "Kane",
      email: "mandykane@gmail.com",
      photo: "",
      status: UserStatus.ONLINE,
    },
    task: "Dark mode",
    file: {
      name: "Tet_Dark_Mode_V1.02",
      extension: FileExtensionTypes.FIG,
      size: 1.2
    },
    type: NotificationTypes.ADDED,
    sentDate: "1 hour ago",
    state: NotificationState.UNREAD,
  },
  {
    id: 2,
    user: {
      id: 2,
      firstName: "Jenny",
      lastName: "Wilson",
      email: "jennywilson@gmail.com",
      photo: userThreePhoto,
      status: UserStatus.OFFLINE,
    },
    task: "Rewrite button component",
    type: NotificationTypes.MENTION,
    sentDate: "5 min ago",
    state: NotificationState.READ,
  },
  {
    id: 3,
    user: {
      id: 3,
      firstName: "Anete",
      lastName: "Black",
      email: "aneteblack@gmail.com",
      photo: userFourPhoto,
      status: UserStatus.BUSY,
    },
    task: "Improve workflow in React",
    type: NotificationTypes.COMPLETION,
    sentDate: "1:52pm",
    state: NotificationState.READ,
  },
]
