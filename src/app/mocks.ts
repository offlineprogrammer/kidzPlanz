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

export class ViewControllerMock {
  public _setHeader(): any { return {} };
  public _setNavbar(): any { return {} };
  public _setIONContent(): any { return {} };
  public _setIONContentRef(): any { return {} };
}
export class ModalControllerMock {
  component: ModalComponentMock = new ModalComponentMock();

  public present(): any { return  };
  public create(param): ModalComponentMock {
     if (!this.component.free) {
      console.error("can't have two loading components out at once");
      return null;
    }

     this.component.free = false; 
     return this.component;
  };
}


export class ModalComponentMock {
  free: boolean = true;
  open: boolean;

  present() {
    return Promise.resolve({ usage: 10, quota: 15 });
  }
  
  dismiss(): void {
    if (!this.open) {
      console.error("double-dismiss on loading component");
    }
    
    if (this.free) {
      console.error("attempt to dismiss unallocated loading component");
    }
    
    this.open = false;
    this.free = true;
  }

  onDidDismiss(): void {

  }
}