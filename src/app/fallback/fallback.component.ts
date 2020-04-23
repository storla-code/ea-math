import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Video} from '../videos/videos.component';

let exampleData = [
  {
    'title': 'test',
    'video': 'https://www.youtube.com/embed/hp5L0VwuFck'
  },
  {
    'title': 'test',
    'video': 'https://mediaspace.minnstate.edu/5d2ac2cb-ff19-4e1a-bfae-9619de46a731'
  }
];

@Component({
  selector: 'fall-app',
  styleUrls: ['../videos/videos.component.scss'],
  templateUrl: '../videos/videos.component.html'
})
export class FallbackComponent {
  title = 'FallbackComponent';
  myListObject: Video[] = JSON.parse(JSON.stringify(exampleData));

  constructor(public sanitizer: DomSanitizer) {}
}
