import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h1{
    color: red;
  }
  `]
})
export class AppComponent {
  name = 'my-first-appkkk';
}
