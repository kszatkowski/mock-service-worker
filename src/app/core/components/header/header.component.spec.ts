import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { HeaderComponent } from './header.component';
import { ThemeService } from '../../services/theme.service';

describe('HeaderComponent', () => {
  let spectator: Spectator<HeaderComponent>;
  const createComponent = createComponentFactory({
    component: HeaderComponent,
    shallow: true
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('toggle', () => {
    it('should call toggleTheme method from themeService', () => {
      const themeService = spectator.inject(ThemeService);
      const themeServiceSpy = spyOn(themeService, 'toggleTheme');
      spectator.component.toggle();
      expect(themeServiceSpy).toHaveBeenCalled();
    });

    it('should change icon to dark_mode', (done) => {
      spectator.component.toggle();
      spectator.detectChanges();
      spectator.component.isDarkTheme$.subscribe((value) => {
        expect(value).toBeTruthy();
        expect(spectator.query('mat-icon')?.textContent).toBe('dark_mode');
        done();
      });
    });
  });
});
