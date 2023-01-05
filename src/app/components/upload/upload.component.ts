import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { serviceresponse } from 'src/app/model/serviceresponse';
import { uploadvid } from 'src/app/model/uploadvid';
import { ApicontrolService } from 'src/app/services/apicontrol.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

   // Variable to store shortLink from api response
  //shortLink: string = "";
  loading: boolean = false; // Flag variable
  //upload: boolean =true;
  //time: boolean= false;
  file: File = null; // Variable to store file
  response:serviceresponse
  // starttime:any;
  // endtime:any;
  submit: boolean = false;
  new:uploadvid;
  st:any;
  et:any;
  configForm: FormGroup = this.formBuilder.group({
    starttime: new FormControl(null, [Validators.required]),
    endtime: new FormControl(null, [Validators.required])
  });
  constructor(private apicontrol: ApicontrolService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }
  
  // On file Select
  onChange(event) {
    this.file= event.target.files[0];
}

previewVideo(): void{
  this.submit = true;
}

// OnClick of button Upload
onUploadVid() {
  // console.log("touched onuploadvid");
    this.loading = !this.loading;
    //console.log(this.file);
    this.st = this.configForm.get("starttime")?.value;
    // console.log(this.st);
    this.et = this.configForm.get("endtime")?.value;
    let data={starttime:this.st, endtime:this.et};
  // console.log(this.file);
     this.apicontrol.upload( this.file ).subscribe((res=>{this.response=res
       console.log(this.response);
       this.loading=false;
       //this.upload=false;
       //this.time= true;
     }));
     this.apicontrol.strip(data).subscribe((res=>{
      this.response=res
      console.log(this.response);
      this.router.navigate(['components/config']);
     }))

    
}
}