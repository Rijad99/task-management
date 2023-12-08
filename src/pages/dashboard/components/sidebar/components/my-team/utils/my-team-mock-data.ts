// Types
import {
  User,
  UserStatus,
} from "../../../../../../page-content/header/components/user/User.types"

// Profile photos
import profilePhotoOne from "../../../../../../../common/images/profile-photos/Profile5.jpg"
import profilePhotoTwo from "../../../../../../../common/images/profile-photos/Profile2.png"
import profilePhotoThree from "../../../../../../../common/images/profile-photos/Profile7.jpg"
import profilePhotoFour from "../../../../../../../common/images/profile-photos/Profile4.png"

export const myTeam: User[] = [
  {
    id: 1,
    firstName: "Mandy",
    lastName: "Kane",
    email: "mandykane@gmail.com",
    status: UserStatus.ONLINE,
    photo: profilePhotoOne,
  },
  {
    id: 2,
    firstName: "Mandy",
    lastName: "Kane",
    email: "mandykane@gmail.com",
    status: UserStatus.OFFLINE,
    photo: profilePhotoTwo,
  },
  {
    id: 3,
    firstName: "Mandy",
    lastName: "Kane",
    email: "mandykane@gmail.com",
    status: UserStatus.OFFLINE,
    photo: profilePhotoThree,
  },
  {
    id: 4,
    firstName: "Mandy",
    lastName: "Kane",
    email: "mandykane@gmail.com",
    status: UserStatus.IN_A_MEETING,
    photo: profilePhotoFour,
  },
]
