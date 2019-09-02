export class KidsServiceMock {
  public kids: any = [
    {
      name: 'myKid', 
      photo: 'myphoto', 
      id: '1',
      planz: [
        {
          id: '1',
          name: 'myplan',
          photo: 'planphoto',
          reward: 'planreward',
          date: Date.now,
          bComplete: false,
          taskz: [
            {
              id: '1',
              name: 'mytask',
              bComplete: false
            }
          ]
        }
      ]
    }
  ];

  public loaded = true;

  async load() {
   
    this.loaded = true;
  }

  async createKid() {
   
    this.loaded = true;
  }

  async getKid() {
    return this.kids[0];
  }

  async getPlan() {
    return this.kids[0].planz[0];
  }

}

export class NavMock {

  async navigateBack() {
   
    
  }

}