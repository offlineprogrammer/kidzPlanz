export class KidsMock {
  public kids: any = [
    {name: 'myKid', photo: 'myphoto', id: '1'}
  ];

  public loaded = false;

  async load() {
   
    this.loaded = true;
  }

}