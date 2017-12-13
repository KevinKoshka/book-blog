import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ObService {

  clickedPage(id: string): Observable<string> {
    return of(id);
  }

  constructor() { }

}
