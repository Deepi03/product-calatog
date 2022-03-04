import { Pipe, PipeTransform } from "@angular/core";

import { IPhone } from "../shared/interfaces";

@Pipe({
    name:'phoneFilter'
})

export class PhonesPipe implements PipeTransform{
    transform(phones:IPhone[],searchProducts:string): IPhone[] {

        if(!phones || !searchProducts) {
            return phones;
        }
        return phones.filter(phones => phones.name.toLowerCase().indexOf(searchProducts.toLowerCase())!== -1)
        
    }
}