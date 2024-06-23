import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from "rxjs/operators";
import { WikipediaResponse } from '../interfaces/wikipedia.interface';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  urlBase = "https://en.wikipedia.org/w/api.php";

  constructor(private http: HttpClient) { }

  search(term: string) {
    return this.http.get<WikipediaResponse>(this.urlBase, {
      params: {
        action: "query",
        format: "json",
        list: "search",
        utf8: "1",
        srsearch: term,
        origin: "*"
      }
    }).pipe(
      pluck("query", "search")
    );
  }
}
