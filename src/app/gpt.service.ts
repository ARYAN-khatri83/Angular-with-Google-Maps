// chatgpt.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatGptService {
  private apiKey = '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';
  private apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

  constructor(private http: HttpClient) {}

  generateResponse(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const data = {
      prompt: prompt,
      max_tokens: 50, // Adjust the number of tokens as needed
    };

    return this.http.post(this.apiUrl, data, { headers });
  }
}
