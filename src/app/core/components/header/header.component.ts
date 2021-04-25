import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isDarkTheme$: Observable<boolean>;

  constructor(private readonly themeService: ThemeService) {
    this.isDarkTheme$ = this.themeService.isDarkTheme$;
  }

  toggle(): void {
    this.themeService.toggleTheme();
  }
}
