import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DogBreedsService } from '../../core/services/dog-breeds.service';
import { DogBreed } from '../../shared/models/dog-breed';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dogBreeds$: Observable<DogBreed[]> | undefined;

  constructor(private dogBreedsService: DogBreedsService) { }

  ngOnInit(): void {
    this.dogBreeds$ = this.dogBreedsService.get();
  }
}
