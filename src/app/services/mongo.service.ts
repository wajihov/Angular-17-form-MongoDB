import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MongoService {
  private readonly URL = 'mongodb://localhost:27017/School';

  constructor(private http: HttpClient) { }

  insererDocument(collection: string, document: any) {
    return this.http.post(`${this.URL}/${collection}`, document);
  }
}
