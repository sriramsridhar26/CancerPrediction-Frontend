import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { predictval } from 'src/app/model/predictval';
import { serviceresponse } from 'src/app/model/serviceresponse';
import { ApicontrolService } from 'src/app/services/apicontrol.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  showPreview:boolean = false;
  preview: boolean = false;
  disabled:boolean = false;
  temp: predictval;
  response:serviceresponse;
  vidUrl: any;

  configForm: FormGroup = this.formBuilder.group({
    rsme: new FormControl(null, [Validators.required]),
    iniw: new FormControl(null, [Validators.required]),
    finalw: new FormControl(null, [Validators.required]),
    gain: new FormControl(null, [Validators.required])
  });

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private apiControl: ApicontrolService) { }

  ngOnInit(): void {
    this.vidUrl = this.apiControl.stream(sessionStorage.getItem('raw'));

    this.apiControl.getVidUrl.subscribe((url:string) => {
      this.vidUrl = url;
    });
  }
  
  proceed(): void{
    this.temp = new predictval();
    //console.log(sessionStorage.getItem('raw'));
    this.temp.fileName = sessionStorage.getItem('raw').toString();
    this.temp.rsme = this.configForm.get("rsme")?.value;
    this.temp.iniw = this.configForm.get("iniw")?.value;
    this.temp.finalw = this.configForm.get("finalw")?.value;
    this.temp.gain = this.configForm.get("gain")?.value;
    
    console.log('Entered Proceed');
    this.apiControl.predict(this.temp).subscribe((res=>{
      this.response = res;
      console.log(this.response);
      if(this.response.success){
        sessionStorage.setItem("processed",this.response.data);
        console.log('Success')
        if(this.preview){
          console.log('Enter Preview')
          this.showPreview = true;
          this.apiControl.getVidUrl.emit(sessionStorage.getItem('processed'));
        }
        else{
          
          this.router.navigate(['components/final']);
        }
        // this.preview = false;
        
       
      }
    }
    ));
    
  }

  previewVideo(): void{
    this.showPreview = false;
    this.proceed();
    this.preview = true;
  }

  onChange(event):void{
    this.disabled = event.srcElement.value < 1 ? true : false;
    console.log(event.srcElement.value );
  }
}
