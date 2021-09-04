export type Product = {
  name: string;
  address: string;
  phoneNumbers: string[];
  message: string;
  facebookLink: string;
  uniqueId?: string;
  active: 1 | 0;
};

export type Marker = {
  title: string;
  address: string;
  phoneNumbers: string[];
  latitude: number;
  longitude: number;
  active: 1 | 0;
  markerId?: string;
};
