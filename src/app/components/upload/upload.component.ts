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
  files: any[] = [];

  file: any; 
  response:serviceresponse
  submit: boolean = false;
  preview:boolean = false;
  formData:FormData;
  upload:boolean=true;
  timeparams:boolean=false;

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
     this.files.push(event.target.files[0]);
    //  this.prepareFilesList(this.file);
     this.upload=false;
     this.timeparams = true;
   }

  previewVideo(): void{
    this.submit = false;
    this.onUploadVid();    
    this.preview = true;
  }
  
  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
    this.upload=false;
    this.timeparams = true;
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler($event) {
    this.prepareFilesList($event);
    this.upload=false;
    this.timeparams = true;
   }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
    this.upload=true;
    this.timeparams = false;
  }

  /**
   * Simulate the upload process
   */
  // uploadFilesSimulator(index: number) {
  //   setTimeout(() => {
  //     if (index === this.files.length) {
  //       return;
  //     } else {
  //       const progressInterval = setInterval(() => {
  //         if (this.files[index].progress === 100) {
  //           clearInterval(progressInterval);
  //           this.uploadFilesSimulator(index + 1);
  //         } else {
  //           this.files[index].progress += 5;
  //         }
  //       }, 200);
  //     }
  //   }, 1000);
  // }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    // this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes) {
    // if (bytes === 0) {
    //   return '0 Bytes';
    // }
    // const k = 1024;
    // const dm = decimals <= 0 ? 0 : decimals || 2;
    // const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    // const i = Math.floor(Math.log(bytes) / Math.log(k));
    // return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }


  onUploadVid() {
    this.formData =  new FormData();
    this.starttime=this.configForm.get("starttime")?.value;
    this.endtime=this.configForm.get("endtime")?.value;
    this.formData.append('data', this.files[0]);
    
    this.apicontrol.upload(this.formData, this.starttime,this.endtime).subscribe((res=>{this.response=res
      this.loading=false;
      if(this.response.success){
        sessionStorage.setItem('raw',this.response.data);
        if(!this.preview){
          this.router.navigate(['components/config']);
        }
        else{
          this.submit = true;
          this.apicontrol.getVidUrl.emit(sessionStorage.getItem('raw'));
        }
        this.preview = false;
      }
    }));

    
}
}