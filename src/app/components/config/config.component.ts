import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  preview: boolean = false;
  disabled:boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  proceed(): void{
    this.router.navigate(['components/waitforresult']);
  }

  previewVideo(): void{
    this.preview = true;
  }

  onChange(event):void{
    this.disabled = event.srcElement.value < 1 ? true : false;
    console.log(event.srcElement.value );
    
  }
}
