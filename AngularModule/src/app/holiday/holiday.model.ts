export class Holiday{
  city: string;
  country: string;
  description: string;
  priceForAdult: number;
  priceForChild: number;

  constructor(city: string, country: string, description: string, priceForAdult: number, priceForChild: number) {
    this.city = city;
    this.country = country;
    this.description = description;
    this.priceForAdult = priceForAdult;
    this.priceForChild = priceForChild;
  }
}
