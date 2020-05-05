import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bMobile =
    navigator.userAgent.indexOf( "Mobile" ) !== -1 ||
    navigator.userAgent.indexOf( "iPhone" ) !== -1 ||
    navigator.userAgent.indexOf( "Android" ) !== -1 ||
    navigator.userAgent.indexOf( "Windows Phone" ) !== -1 ;
  selectedDate: any;
  constructor() { }
  ngOnInit(): void {
    console.log(this.bMobile)
  }

  onSelect(event){
    console.log(event);
    this.selectedDate= event;
  }


}
