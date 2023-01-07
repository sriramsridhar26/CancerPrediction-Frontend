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

  loading: boolean = false; 
  starttime:Number;
  endtime:Number;

  file: File = null; 
  response:serviceresponse
  submit: boolean = false;
  new:uploadvid;

  configForm: FormGroup = this.formBuilder.group({
    starttime: new FormControl(null, [Validators.required]),
    endtime: new FormControl(null, [Validators.required])
  });

  constructor(private apicontrol: ApicontrolService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }
  
  onChange(event) {
    this.file= event.target.files[0];
  }

  previewVideo(): void{
  this.submit = true;
  }

  onUploadVid() {

    const formData =  new FormData();
    formData.append('data', this.file);
    this.starttime=this.configForm.get("starttime")?.value;
    this.endtime=this.configForm.get("endtime")?.value;
    console.log(formData);

    this.apicontrol.upload(formData, this.starttime,this.endtime).subscribe((res=>{this.response=res
      console.log(this.response);
      this.loading=false;
      if(this.response.success){
        sessionStorage.setItem('raw',this.response.data);
        console.log(sessionStorage.getItem('raw'));
        this.router.navigate(['components/config']);
      }
    }));

    
}
}