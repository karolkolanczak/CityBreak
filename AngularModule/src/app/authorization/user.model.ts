export class User {

  private _id: number;
  private _login: string;
  private _password:string;
  private _userVerified:boolean;


  constructor(id: number, login: string, password: string, userVerified: boolean) {
    this._id = id;
    this._login = login;
    this._password = password;
    this._userVerified = userVerified;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }


  get userVerified(): boolean {
    return this._userVerified;
  }

  set userVerified(value: boolean) {
    this._userVerified = value;
  }
}


