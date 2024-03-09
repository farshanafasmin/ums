import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardsService {

  constructor() { }

  // method to control route
  isLoggedIn(){  //it only takes true or false value
    return !!localStorage.getItem("Username")

    // it is true when we get an item otherwise it is false
  }
}
