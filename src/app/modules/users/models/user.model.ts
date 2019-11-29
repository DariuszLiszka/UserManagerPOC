export class User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: IAddress | string;
}

export interface IAddress {
  suite: string;
  street: string;
  city: string;
  zipcode: string;
}
