export interface Country {
  id: string;
  name: string;
  code: string;
  coordinates: [number, number];
  offices: Office[];
}

export interface Office {
  id: string;
  name: string;
  managingDirector: string;
  address: string;
  coordinates: [number, number];
  poBox?: string;
  state?: string;
  phone: string;
  email?: string;
  website?: string;
  logo?: string;
}