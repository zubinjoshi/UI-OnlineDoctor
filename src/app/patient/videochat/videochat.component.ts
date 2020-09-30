import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-videochat',
  templateUrl: './videochat.component.html',
  styleUrls: ['./videochat.component.less']
})
export class VideochatComponent implements OnInit {
  setSource:boolean=true;
  src_url:string="https://meetdctr.daily.co/testvideo";
  urlSafe: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.src_url);
  }
  onLoadFunc(myIframe) {
   
  }
close()
{
  this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl('localhost');
  console.log('clic');
}
}
