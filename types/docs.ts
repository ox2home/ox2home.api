import {Document} from 'mongoose';

export type ProductDoc = {
  name: string;
  address: string;
  phoneNumbers: string[];
  message: string;
  facebookLink: string;
  uniqueId: string;
  active: number;
} & Document;
