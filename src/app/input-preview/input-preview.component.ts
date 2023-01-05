import { Component, OnInit } from '@angular/core';
import { serviceresponse } from '../model/serviceresponse';
import { ApicontrolService } from '../services/apicontrol.service';

@Component({
  selector: 'app-input-preview',
  templateUrl: './input-preview.component.html',
  styleUrls: ['./input-preview.component.css']
})
export class InputPreviewComponent implements OnInit {

  constructor(private apicontrol: ApicontrolService) { }
vidUrl: any;
response:any;
  ngOnInit(): void {
    this.vidUrl = this.apicontrol.downloadVid();
  }

onLoad(){
 
  return this.vidUrl;
}  

}
