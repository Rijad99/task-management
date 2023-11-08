// Types
import { User, UserStatus } from "../../../../page-content/header/components/user/User.types"

// Profile photos
import profilePhotoOne from '../../../../../common/images/profile-photos/Profile1.png'
import profilePhotoTwo from '../../../../../common/images/profile-photos/Profile2.png'
import profilePhotoThree from '../../../../../common/images/profile-photos/Profile3.png'
import profilePhotoFour from '../../../../../common/images/profile-photos/Profile4.png'



export const myTeam: User[] = [
    {
        id: 1,
        firstName: 'Mandy', 
        lastName: 'Kane',
        email: 'mandykane@gmail.com',
        status: UserStatus.ONLINE,
        photo: profilePhotoOne
    },
    {
        id: 1,
        firstName: 'Mandy', 
        lastName: 'Kane',
        email: 'mandykane@gmail.com',
        status: UserStatus.OFFLINE,
        photo: profilePhotoTwo
    },
    {
        id: 1,
        firstName: 'Mandy', 
        lastName: 'Kane',
        email: 'mandykane@gmail.com',
        status: UserStatus.OFFLINE,
        photo: profilePhotoThree
    },
    {
        id: 1,
        firstName: 'Mandy', 
        lastName: 'Kane',
        email: 'mandykane@gmail.com',
        status: UserStatus.IN_A_MEETING,
        photo: profilePhotoFour
    }
]
