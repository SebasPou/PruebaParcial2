import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server = 'http://localhost:8080/api/api.php'

  constructor() { }
}
