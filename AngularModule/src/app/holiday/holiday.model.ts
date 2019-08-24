export class Holiday{
  private _id: number;
  private _city: string;
  private _country: string;
  private _capital: string;
  private _holidayDetailsId;
  private _description: string;
  private _priceForAdult ;
  private _priceForChild ;
  private _image;

  constructor(id: number,city: string, country: string, capital: string, holidayDetailsId, description: string, priceForAdult, priceForChild,image) {
    this._id=id;
    this._city = city;
    this._country = country;
    this._holidayDetailsId=holidayDetailsId;
    this._description = description;
    this._capital= capital;
    this._priceForAdult = priceForAdult;
    this._priceForChild = priceForChild;
    this._image=image;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get city(): string {
    return this._city;
  }

  get holidayDetailsId() {
    return this._holidayDetailsId;
  }

  set holidayDetailsId(value) {
    this._holidayDetailsId = value;
  }

  set city(value: string) {
    this._city = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get capital(): string {
    return this._capital;
  }

  set capital(value: string) {
    this._capital = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get priceForAdult() {
    return this._priceForAdult;
  }

  set priceForAdult(value) {
    this._priceForAdult = value;
  }

  get priceForChild() {
    return this._priceForChild;
  }

  set priceForChild(value) {
    this._priceForChild = value;
  }

  get image() {
    return this._image;
  }

  set image(value) {
    this._image = value;
  }

}
