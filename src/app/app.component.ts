import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minimalist-todo';
  isLight = false;
  public icon = 'light_mode'

  changeTheme(){
    if(this.isLight){
      this.isLight = false;
      this.icon = 'light_mode'
    } else {
      this.isLight = true;
      this.icon = 'dark_mode'
    }
    document.body.classList.toggle('my-light-theme')
  }
}
