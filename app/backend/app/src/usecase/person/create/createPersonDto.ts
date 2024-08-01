export interface InputCreatePersonDto {
  name: string;
  surname: string;
  email: string;
  password: string;
  created_time: Date;
  birth_date: Date;
  state: string;
  city: string;
}

export interface OutputCreatePersonDto {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  created_time: Date;
  birth_date: Date;
  state: string;
  city: string;
}
