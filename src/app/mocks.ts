export class KidsServiceMock {
  public kids: any = [
    {name: 'myKid', photo: 'myphoto', id: '1'}
  ];

  public loaded = true;

  async load() {
   
    this.loaded = true;
  }

  async createKid() {
   
    this.loaded = true;
  }

  async getKid() {
    console.log(this.kids[0]) ;
    return this.kids[0];
  }

}

export class NavMock {

  async navigateBack() {
   
    
  }

}