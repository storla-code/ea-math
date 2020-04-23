import {Component, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export interface Video {
  title: string;
  video: string;
}

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  myListObject = [] as Array<Video>;
  title: string;
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer){}
}

