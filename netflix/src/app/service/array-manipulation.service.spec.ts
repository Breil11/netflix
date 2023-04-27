import { TestBed } from '@angular/core/testing';

import { ArrayManipulationService } from './array-manipulation.service';

describe('ArrayManipulationService', () => {
  let service: ArrayManipulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayManipulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // TODO Add more test

  //cas de l'index dans le tableau
  it('pour supprimer l’élément dont l’index est donné', () => {
    //j'ai crée un tableau de 10valeurs pour les tests
    const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const indexToRemove = 2;
    const expectedOutput = [1, 2, 4, 5, 6, 7, 8, 9, 10];

    const result = service.removeAtIndex(tab, indexToRemove);

    expect(result).toEqual(expectedOutput);
  });

  //cas de lindex hors du tableau 
  it('si l’index est ne pas pas dans le tableau cela ne modifie pas le tableau', () => {
    const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const indexToRemove = 13;

    const result = service.removeAtIndex(tab, indexToRemove);

    expect(result).toEqual(tab);
  });

  //cas de l'index négatif
  it('si l’index est nnégatif cela ne modifie pas le tableau', () => {
    const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const indexToRemove = -1;

    const result = service.removeAtIndex(tab, indexToRemove);

    expect(result).toEqual(tab);
  });

  //cas de'un index vide ou null
  it('cela renvoit une copie du tableau si l’entrée est vide', () => {
    const tab = [];
    const indexToRemove = 0;

    const result = service.removeAtIndex(tab, indexToRemove);

    expect(result).toEqual(tab);
    expect(result).not.toBe(tab);
  });

});
