import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { formatRating } from '@bg-hoard/store/util-formatters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Board Game Hoard';
  formatRating = formatRating;
  // games = getAllGames();

  constructor(private http: HttpClient) {}
  games = this.http.get<any[]>('/api/games');
}
