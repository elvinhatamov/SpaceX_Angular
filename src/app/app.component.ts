import { getLocaleDateFormat } from '@angular/common';
import { Component} from '@angular/core';
import { MissionService } from './mission.service'
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {




  data:any
  title = 'elvin-test2-comp3133';
  constructor(private mission:MissionService){
    this.mission.getData().subscribe(data =>{
      console.log(data);
      this.data = data;

    })


  }

}


