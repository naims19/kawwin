import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.page.html',
  styleUrls: ['./vendor.page.scss'],
})
export class VendorPage implements OnInit {

  constructor() { }

  option = {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 1,
    // autoplay: true
  }

  ngOnInit() {
  }

}
