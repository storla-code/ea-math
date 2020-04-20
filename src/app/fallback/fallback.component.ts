import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Video} from '../videos/videos.component';
import * as exampleData from './pages.json';


@Component({
  selector: 'fall-app',
  styleUrls: ['../videos/videos.component.scss'],
  templateUrl: '../videos/videos.component.html'
})
export class FallbackComponent {
  title = 'FallbackComponent';
  myListObject: Video[]  = JSON.parse(JSON.stringify(exampleData));

  constructor(public sanitizer: DomSanitizer) {
  }



}
