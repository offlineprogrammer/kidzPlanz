export class KidsMock {
  public kids: any = [
    {name: "myKid", description: "Isnt it obvious?", price: "39.99"}
  ];

  public loaded = false;

  async load() {
   
    this.loaded = true;
  }

}