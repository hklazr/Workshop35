import { Component } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent {

  selectOptions: number[] = [10, 15, 20];
  selectedOption: number = 10;
  pageNumber: number = 0;
  disablePrevious = true;

  constructor(private gameService: GamesService) { }

  // ngOnInit() {
  //   this.fetchGames();
  // }

//   onSelect(option: string) {
//     this.selectedOption = Number.parseInt(option);
//     this.pageNumber = 0;
//     this.fetchGames();
//   }

//   nextPage() {
//     this.pageNumber++;
//     this.fetchGames();
//   }

//   previousPage() {
//     if (this.pageNumber > 0) {
//       this.pageNumber--;
//       this.fetchGames();
//     }
//   }

//   fetchGames() {
//     this.disablePrevious = this.pageNumber === 0;
//     // this.gameService.getGames(this.selectedOption, this.selectedOption * this.pageNumber);
//   }
// }

onSelect(option: string) {
  this.selectedOption = Number.parseInt(option);
  // this.gameService.getGames(this.selectedOption, this.selectedOption * this.pageNumber);
}

previousPage(){
  console.log("previous");
  // decrement offset
  this.pageNumber = Math.max(this.pageNumber -1, 0);
  if (this.pageNumber == 0) this.disablePrevious = true;
  // http call
  this.gameService.getGames(this.selectedOption, this.selectedOption * this.pageNumber);
}

nextPage(){
  console.log("next");
  this.disablePrevious = false;
  // increment offset
  this.pageNumber += 1;

  // http call
  this.gameService.getGames(this.selectedOption, this.selectedOption * this.pageNumber);
}

}