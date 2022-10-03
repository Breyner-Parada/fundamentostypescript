import {Product} from '../products/products.model';
import {User} from '../users/user.model';

export interface Order {
  id: string | number,
  createdAt: Date,
  products: Product[],
  user: User,
}
