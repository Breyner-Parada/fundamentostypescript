import {User, ROLES} from './01-enum';
const currentUser: User = {
  username: 'breyner',
  role: ROLES.ADMIN,
}

export const checkAdminRole = () => {
  if(currentUser.role === ROLES.ADMIN) {
    return true;
} else {
  return false;
}
};

const rta = checkAdminRole();
console.log(rta);

export const checkRole = (...roles: string[]) => {
  if(roles.includes(currentUser.role)) {
    return true;
}
  return false;
};

const rta2 = checkRole(ROLES.ADMIN, ROLES.CUSTOMER, ROLES.SELLER);
console.log('CheckRole', rta2);
