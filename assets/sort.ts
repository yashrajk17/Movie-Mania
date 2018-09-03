import { Injectable,Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name : "sortBy",
    pure : false
})


@Injectable()
export class SortFilter implements PipeTransform {
    transform(items: Array<string>, field: string,reverse: boolean): any
    {
        if(items.length == 0 || field == "")
            return items;
        if(field == "title_year")
        {
            return items.sort((a: any,b: any) => {
                
                if(a[field] == b[field])
                    return 0;
                else if(a[field] == "" )
                    return 1;
                else if(b[field] == "" )
                    return -1;
                else if(!reverse)
                    return parseInt(a[field]) < parseInt(b[field]) ? -1 : 1
                else if(reverse)
                    return parseInt(a[field]) < parseInt(b[field]) ? 1 : -1
            })       
            
            
        }
        if(field == "content_rating")
        {
            return items.sort((a: any,b: any) => {
                
                if(a[field] == b[field])
                    return 0;
                else if(!reverse)
                    return a[field] < b[field] ? -1 : 1
                else if(reverse)
                    return a[field] < b[field] ? 1 : -1
            }) 
          
        }
    }
    
}