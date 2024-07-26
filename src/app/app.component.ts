import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reproduce-capacitor-http-bug';
  public result = '';
  public isLoading = false;

  constructor(private http: HttpClient) {}

  sendRequest() {
    this.result = '';
    this.isLoading = true;

    this.http.get('https://jsonplaceholder.typicode.com/todos/1', {
      params: {
        categoryName: 'Asset Type',
        toDate: (new Date()).toISOString()
      }
    }).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.result = 'OK';
      },
      error: (error) => {
        this.isLoading = false;
        this.result = 'Error';
        console.error(error);
      }
    });
  }
}
