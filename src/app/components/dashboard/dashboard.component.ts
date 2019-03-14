import { DataServiceService } from './../../service/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  uuid="";
  constructor(private dataShare:DataServiceService) { 

  }

  ngOnInit() {
    this.uuid = this.dataShare.getUid();

  }

}
