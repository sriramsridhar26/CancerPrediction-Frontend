import { Component, OnInit } from '@angular/core';
import { ApicontrolService } from 'src/app/services/apicontrol.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  processlink:string=sessionStorage.getItem("processed");
  vidUrlS: string;
  constructor(private apicontrol: ApicontrolService) { }

  ngOnInit(): void {
    this.vidUrlS = this.apicontrol.apiUrl+"/stream?filename="+this.processlink;

  }

}
