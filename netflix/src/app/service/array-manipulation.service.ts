import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayManipulationService {

  constructor() { }

  removeAtIndex(inputArray: number[], indexToRemove: number): number[] {
    if (!inputArray) {
      return inputArray;
    }
    return inputArray.filter((current, index) => index !== indexToRemove);
  }
}
