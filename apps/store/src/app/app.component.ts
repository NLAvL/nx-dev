import { Component } from '@angular/core';
import { formatRating } from '@bg-hoard/store/util-formatters';
import { getAllGames } from '../fake-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Board Game Hoard';
  formatRating = formatRating;
  games = getAllGames();
}
