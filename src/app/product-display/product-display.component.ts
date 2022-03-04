import { Component, EventEmitter, OnInit,Input,Output} from '@angular/core';


import { DataService } from '../core/data.service';

import { IPhone } from '../shared/interfaces';


@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  mobiles : IPhone[] = [];
  
  sortBy : String = '';

 @Input() searchProducts ! : string;
 @Output() phoneEvent = new EventEmitter<string>();

  constructor(private dataService : DataService,
    ) { }

  ngOnInit(): void {

    this.getMobiles();
  }


  getMobiles() : void {


    this.dataService.getProducts().subscribe((mobiles) => {
     this.mobiles =  mobiles;
     this.mobiles.sort((a,b) => (a.age < b.age) ? 1 : (a.age === b.age) ? ((a.age < b.age) ? 1 : -1) : -1 )});
    }
  
    

    sortProducts(event : any){
      this.sortBy = event.target.value;
      
    }


  
    sentEvent(){
      this.phoneEvent.emit(this.searchProducts);
    }

    
  
}
