import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BinaryStringStatus } from '@models/binary-string-analyze-status';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BinaryStringService {
  baseUrl = environment.baseUrl;
  path = `${this.baseUrl}BinaryString`;

  constructor(private http: HttpClient) { }

  analyzeBinaryString(binaryString: string) {
    return this.http.post<BinaryStringStatus>(`${this.path}/AnalyzeBinaryString`, {binaryString});
  }
}
