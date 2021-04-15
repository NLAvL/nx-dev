import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { formatRating } from '@bg-hoard/store/util-formatters';
import { Game } from '@bg-hoard/util-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Board Game Hoard';
  formatRating = formatRating;
  // games = getAllGames();

  constructor(private http: HttpClient) {
    console.log('app.component.ts:17 | : ', 'nx affected trigger');
  }
  games = this.http.get<Game[]>('/api/games');
}
