import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DogBreed } from '../../shared/models/dog-breed';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DogBreedsService {
  constructor(private httpClient: HttpClient) {
  }

  get(): Observable<DogBreed[]> {
    return this.httpClient.get<DogBreed[]>(`${environment.apiUrl}/dog-breeds`);
  }
}
