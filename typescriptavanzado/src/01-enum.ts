export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string,
  role: ROLES;
}

const breUser: User = {
  username: 'bre',
  role: ROLES.ADMIN,
}
