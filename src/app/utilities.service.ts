import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {

  idify(word: string) {
    return word.
      replace(/\s/g, '-').
      replace(/\#/g, 'sharp').
      replace(/\,/g, '');
  }

  constructor() { }

}
