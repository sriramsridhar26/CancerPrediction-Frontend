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

  constructor(private apicontrol: ApicontrolService
    ) { }

  ngOnInit(): void {
    this.vidUrl = this.apicontrol.stream(sessionStorage.getItem('raw'));
    // console.log(this.vidUrl);

    this.apicontrol.getVidUrl.subscribe((url:string) => {
      this.vidUrl = url;
      console.log('Hell')
      // console.log(this.vidUrl);
    });
  }



  onLoad(){
  
    return this.vidUrl;
  }  

}
