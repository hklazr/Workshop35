import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './component/show-games/games-list/games-description/description.component';
import { GamesListComponent } from './component/show-games/games-list/games-list.component';
import { GamesService } from './component/show-games/games.service';


@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
