import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private GAME_URL : string = "http://localhost:8080/api/game";

  newListOfGames = new Subject<any>;

  constructor(private http : HttpClient) {}

  getGames(limit : number, offset : number) {

    console.log("limit: ", limit, "offset: ", offset);

    let params = new HttpParams()
        .append('limit', limit)
        .append('offset', offset)

        this.http.get(this.GAME_URL, {params})
          .subscribe(data => this.newListOfGames.next(data));
  }
}
