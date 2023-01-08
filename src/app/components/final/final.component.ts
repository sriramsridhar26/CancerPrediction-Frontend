import { Component, OnInit } from '@angular/core';
import { ApicontrolService } from 'src/app/services/apicontrol.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  processlink:string=sessionStorage.getItem("processed");
  vidUrl: string;
  constructor(private apicontrol: ApicontrolService) { }

  ngOnInit(): void {
    // this.apicontrol.stream(this.processlink).subscribe((url => {
    //   this.vidUrl = url;
    //   console.log('Hell')
    //   console.log(this.vidUrl);
    // }));
  }

}
