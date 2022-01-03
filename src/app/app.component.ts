import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public commonService: CommonService) {

  }
  title = 'tiktac';

  reset() {
    this.commonService.newGame();
  }
}
