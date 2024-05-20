// Types
import { User, UserStatus } from '../../../../pages/page-content/header/components/user/User.types';

// User photo
import userPhoto from '../../../images/profile-photos/Profile.png';

export const loggedInUser: User = {
  id: 0,
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@gmail.com',
  photo: userPhoto,
  status: UserStatus.ONLINE,
};
