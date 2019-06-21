export class Holiday{
  city: string;
  country: string;
  description: string;
  priceForAdult ;
  priceForChild ;

  constructor(city: string, country: string, description: string, priceForAdult, priceForChild) {
    this.city = city;
    this.country = country;
    this.description = description;
    this.priceForAdult = priceForAdult;
    this.priceForChild = priceForChild;
  }
}
