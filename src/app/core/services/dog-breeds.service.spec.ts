import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator';

import { DogBreedsService } from './dog-breeds.service';
import { environment } from '../../../environments/environment';

describe('DogBreedsService', () => {
  let spectator: SpectatorHttp<DogBreedsService>;
  const createHttp = createHttpFactory(DogBreedsService);

  beforeEach(() => spectator = createHttp());

  it('should create', () => {
    expect(spectator.service).toBeTruthy();
  });

  describe('get', () => {
    it('should call get http method successfully', () => {
      spectator.service.get().subscribe();
      spectator.expectOne(`${environment.apiUrl}/dog-breeds`, HttpMethod.GET);
    });
  });
});
