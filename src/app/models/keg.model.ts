export class Keg {
  public done: boolean = false;
  constructor(public pintsLeft: number, public breweryName: string, public breweryLocation: string, public beerName: string, public beerStyle: string, public beerAbv: number, public beerPrice: number) {}
}
