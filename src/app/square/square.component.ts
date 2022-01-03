import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-square',
  template: `
  <div style="background: #bdd0ff; height: 150px; border-bottom: 2px solid; font-family: sans-serif;"
      class="game-square rounded-lg border bg-teal-lightest 
      shadow-md " 
      (click)="changePlayer()" 
      [ngClass]="{noClick: commonService.winner} "
    >
      <p class="text-grey-darker" style="font-size: 130px; top: 20px;
    position: relative;"> {{ square.state}} </p>
    </div>
  `,
  styles: [`
  .game-square { 
    height: 96%; 
    text-align: center;
    line-height: 0.85;
    cursor: pointer;
  }

  p { 
    display: inline;
    margin: 0px;
    font-size: 14rem;
    overflow: hidden;
  }

  .noClick {
    pointer-events: none;
  }`]
})
export class SquareComponent implements OnInit {
  @Input() square: any; 
  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
  }

  changePlayer(){ 

    this.commonService.isGameRunning = true;

    if ( this.commonService.isGameRunning && this.square.state === null ){
      this.square.state =  this.commonService.activePlayer;
      this.commonService.changePlayerTurn( this.square);
    }
    
  }

}
