export class Keg {
  public done: boolean = false;
  constructor(public breweryName: string, public beerName: string, public beerStyle: string, public beerAbv: number, public beerPrice: number) {}
}