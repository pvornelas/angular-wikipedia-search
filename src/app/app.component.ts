import { Component } from '@angular/core';
import { WikipediaService } from './services/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages: {}[] = []

  constructor(private wikiPediaService: WikipediaService) { }

  onTerm(term: string) {
    this.wikiPediaService.search(term).subscribe(pages => this.pages = pages);
  }
}
