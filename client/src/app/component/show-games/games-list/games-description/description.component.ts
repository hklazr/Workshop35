import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GamesService } from '../../games.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit, OnDestroy{

  games : string[] = [];
  
  gamesSubscription! : Subscription;

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gamesSubscription = this.gamesService
                              .newListOfGames
                              .subscribe(data => this.games = data);
    this.gamesService.getGames(10,0);
  }

  ngOnDestroy() : void {
    this.gamesSubscription!.unsubscribe();
  }

}
