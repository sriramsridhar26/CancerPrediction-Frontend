import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  proceed(): void{
    this.router.navigate(['components/waitforresult']);
  }

}
