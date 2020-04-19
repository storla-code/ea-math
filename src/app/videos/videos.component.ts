import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

 interface Video {
  title: string,
  video: SafeResourceUrl
}

interface Card {
   title: string,
   videos: Video[]
}

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  myListObject = [] as Array<Video>;
  temp = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/hp5L0VwuFck");
  video :Video = {title:"test", video:this.temp}

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.myListObject.push(this.video)
  }

}
