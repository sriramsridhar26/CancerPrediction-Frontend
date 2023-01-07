import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  processlink:string=sessionStorage.getItem("processed");
  constructor() { }

  ngOnInit(): void {

  }

}
