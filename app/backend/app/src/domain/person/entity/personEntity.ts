export default class Person {
  private id: string;
  private name: string;
  private surname: string;
  private email: string;
  private password: string;
  private created_time: Date;
  private birth_date: Date;
  private state: string;
  private city: string;

  constructor(
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    created_time: Date,
    bith_date: Date,
    state: string,
    city: string
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.created_time = created_time;
    this.birth_date = bith_date;
    this.state = state;
    this.city = city;
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getSurname() {
    return this.surname;
  }

  public getEmail() {
    return this.email;
  }

  public getPassword() {
    return this.password;
  }

  public getCreatedTime() {
    return this.created_time;
  }

  public getBirthDate() {
    return this.birth_date;
  }

  public getState() {
    return this.state;
  }

  public getCity() {
    return this.city;
  }
}
