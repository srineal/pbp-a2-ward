import { Injectable } from 'angular2/core';

@Injectable()
export class CustomerService {

  constructor() { }

  getCustomers() {
    return [
      { id: 1, name: 'Ward' },
      { id: 2, name: 'Kevin' },
      { id: 3, name: 'Eric' },
      { id: 4, name: 'Sally' },
      { id: 5, name: 'Emmet' }
    ];

  }

}
