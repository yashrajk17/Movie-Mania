import { Injectable,Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name : "filter",
    pure : false
})


@Injectable()
export class Filter implements PipeTransform {
    transform(items: any[], field: string,value: any[]): any
    {
        if(items.length == 0 || value.length == 0)
            return items;
        if(field == "language")
        {
            
               
                return items.filter(it => {
                    for(let val in value)
                    {
                        if(it.language == value[val])
                        {
                            return it
                        }
                    }
                })
            
            
        }
        if(field == "country")
        {
        
                return items.filter(it => {
                    for(let val in value)
                    {
                        if(it.country == value[val])
                        {
                            return it
                        }
                    }
                })
          
        }
    }
    
}