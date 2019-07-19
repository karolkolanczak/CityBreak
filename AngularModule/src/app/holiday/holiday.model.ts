export class Holiday{
  private _id: number;
  private _city: string;
  private _country: string;
  private _description: string;
  private _priceForAdult ;
  private _priceForChild ;
  private _image;
private _imageToShow;

  constructor(id: number,city: string, country: string, description: string, priceForAdult, priceForChild,image,imageToShow) {
    this._id=id;
    this._city = city;
    this._country = country;
    this._description = description;
    this._priceForAdult = priceForAdult;
    this._priceForChild = priceForChild;
    this._image=image;
    this._imageToShow=imageToShow;
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

  set city(value: string) {
    this._city = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
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

  get imageToShow() {
    return this._imageToShow;
  }

  set imageToShow(value) {
    this._imageToShow = value;
  }
}
