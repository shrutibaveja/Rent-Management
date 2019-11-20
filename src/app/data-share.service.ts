import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataShareService {
  configUrl: string;
  storageSub = new Subject<any>();

  constructor(private http: HttpClient) {
    this.configUrl = '../../assets/catalog.json';
  }
  getCategories(): Observable<any> {
    return this.http.get(this.configUrl);
  }

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  setItem(key: string, data: any) {
    localStorage.setItem(key, data);
    this.storageSub.next(data);
  }

  removeItem(key) {
    localStorage.removeItem(key);
    this.storageSub.next('changed');
  }


}



