import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serviceresponse } from '../model/serviceresponse';


@Injectable({
  providedIn: 'root'
})
export class ApicontrolService {
  apiUrl="https://localhost:7299"

  constructor(private http: HttpClient) { }

  public upload(file): Observable<serviceresponse>{

    // Create form data
    const formData = new FormData(); 
        
    // Store form name as "file" with file data
    formData.append("file", file, file.name);

    // return this.http.post<serviceresponse>(this.apiUrl+"/UploadVid",file);
    return this.http.post<serviceresponse>(this.apiUrl+"/UploadVid",formData);
  }
  public strip(data):Observable<serviceresponse>{
    return this.http.post<serviceresponse>(this.apiUrl+"/Strip",data);
  }

  public downloadVid(): string{
    // return this.http.get<serviceresponse>(this.apiUrl+"/download");
    return this.apiUrl+"/download";
  }


}
