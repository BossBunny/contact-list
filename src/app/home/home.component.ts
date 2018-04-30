import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { HomeService } from '@app/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading: boolean;
  starWarsData: any;

  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getData();
  }

  getData(){
      this.homeService.getFirstPagePeople().subscribe((data: any)=>{
        this.starWarsData = data.results;
      
      });
  }
  

}
