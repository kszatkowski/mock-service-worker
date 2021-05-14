import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { DogBreedsService } from '../../core/services/dog-breeds.service';

describe('HomeComponent', () => {
  let spectator: Spectator<HomeComponent>;
  const createComponent = createComponentFactory({
    component: HomeComponent,
    imports: [HttpClientModule],
    providers: [DogBreedsService],
    shallow: true,
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call get method from dogBreeds service', (done) => {
      spectator.detectChanges();
      spectator.component.dogBreeds$?.subscribe(response => {
        expect(response.length).toBe(5);
        done();
      });
    });
  });
});
