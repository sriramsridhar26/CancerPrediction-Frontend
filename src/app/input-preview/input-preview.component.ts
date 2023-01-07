import { Component, OnInit } from '@angular/core';
import { serviceresponse } from '../model/serviceresponse';
import { ApicontrolService } from '../services/apicontrol.service';

@Component({
  selector: 'app-input-preview',
  templateUrl: './input-preview.component.html',
  styleUrls: ['./input-preview.component.css']
})
export class InputPreviewComponent implements OnInit {
  vidUrl: any;
  response:any;

  constructor(private apicontrol: ApicontrolService) { }

  ngOnInit(): void {
    this.vidUrl = this.apicontrol.stream(sessionStorage.getItem('raw'));
  }

onLoad(){
 
  return this.vidUrl;
}  

}
