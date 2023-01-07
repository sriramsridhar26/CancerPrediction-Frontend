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
  preview:boolean = false;
  formData:FormData;

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
    this.submit = false;
    this.onUploadVid();
   
    // console.log('Preview Video')
    // console.log(sessionStorage.getItem('raw'));
    // this.apicontrol.stream(sessionStorage.getItem('raw'));
    
    this.preview = true;
  }

  onUploadVid() {
    this.formData =  new FormData();
    this.starttime=this.configForm.get("starttime")?.value;
    this.endtime=this.configForm.get("endtime")?.value;
    this.formData.append('data', this.file);
    
    // console.log('onUploadVid');

    this.apicontrol.upload(this.formData, this.starttime,this.endtime).subscribe((res=>{this.response=res
      // console.log(this.response);
      this.loading=false;
      if(this.response.success){
        sessionStorage.setItem('raw',this.response.data);
        if(!this.preview){
          this.router.navigate(['components/config']);
        }
        else{
          this.submit = true;
          // console.log('Event Emit')
          
          this.apicontrol.getVidUrl.emit(sessionStorage.getItem('raw'));
          
        }
        this.preview = false;
      }
    }));

    
}
}