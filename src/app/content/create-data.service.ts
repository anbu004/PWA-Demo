import { Injectable } from '@angular/core';
@Injectable()
export class CreateDataService {

  constructor() {
     
  }
getData() {

  return  JSON.parse(localStorage.getItem("key"));
}
addData(model){
console.log(model);
 localStorage.setItem("key", JSON.stringify(model));
}
}
