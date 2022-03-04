import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { IPhoneDetail, IPhone } from '../shared/interfaces'; 
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  phoneDetail: IPhoneDetail | undefined;
  

  phone : IPhone | undefined;



  constructor(private dataService : DataService,
               private route : ActivatedRoute,
               private location : Location) { }

  ngOnInit(): void {

    let id = String(this.route.snapshot.paramMap.get('id')); // gets the id from the url

    this.dataService.getProduct(id).subscribe(phoneDetail => {
      console.log(phoneDetail);
      this.phoneDetail = phoneDetail;
    })
   

    
  }


  goBack(): void{
    this.location.back();
  }

    

}
