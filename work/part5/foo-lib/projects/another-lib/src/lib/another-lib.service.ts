import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnotherLibService {

  constructor() { }

  getData() {
    return `Another`;
  }
}
