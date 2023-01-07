import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serviceresponse } from '../model/serviceresponse';


@Injectable({
  providedIn: 'root'
})
export class ApicontrolService {
  apiUrl="https://localhost:44314"

  constructor(private http: HttpClient) { }

  public upload(formData, starttime, endtime): Observable<serviceresponse>{
    return this.http.post<serviceresponse>(this.apiUrl+"/UploadVid?starttime="+starttime+"&endtime="+endtime,formData);
  }

  public strip(data):Observable<serviceresponse>{
    return this.http.post<serviceresponse>(this.apiUrl+"/Strip",data);
  }

  public stream(filename): string{
    // return this.http.get<serviceresponse>(this.apiUrl+"/download");
    return this.apiUrl+"/stream?filename="+filename;
  }
  public predict(data): Observable<serviceresponse>{
    return this.http.post<serviceresponse>(this.apiUrl+"/predict",data);
  }

}
