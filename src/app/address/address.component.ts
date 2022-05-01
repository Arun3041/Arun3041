import { Component, Input, OnInit } from '@angular/core';

import { ArunService } from '../arun.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  userdetails: any = {};

  constructor(private arunservice:ArunService) {}

  addAddress() {
    let userCheckoutDetails: any = {
      name: this.userdetails.name,
      address: this.userdetails.address,
      city: this.userdetails.city,
      pincode: this.userdetails.pincode,
      phone: this.userdetails.phone,
    };
    this.arunservice.getUserDataFromAddressComponent(userCheckoutDetails);
  }

  ngOnInit(): void {}
}