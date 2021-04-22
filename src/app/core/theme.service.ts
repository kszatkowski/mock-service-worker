import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkTheme$ = new BehaviorSubject(false);
  private bodyElement = document.getElementsByTagName('body')[0];
  private darkThemeClassName = 'dark-theme';

  get isDarkTheme(): boolean {
    return this.isDarkTheme$.getValue();
  }

  toggleTheme(): void {
    this.isDarkTheme$.next(!this.isDarkTheme);
    this.setCssClass();
  }

  private setCssClass(): void {
    this.isDarkTheme ?
      this.bodyElement.classList.add(this.darkThemeClassName) :
      this.bodyElement.classList.remove(this.darkThemeClassName);
  }
}
