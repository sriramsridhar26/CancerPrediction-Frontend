import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waitforresult',
  templateUrl: './waitforresult.component.html',
  styleUrls: ['./waitforresult.component.css']
})
export class WaitforresultComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['components/final']);
      // And any other code that should run only after 5s
    }, 5000);
  }


}
