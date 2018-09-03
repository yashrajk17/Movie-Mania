import { Injectable,Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name : "movieFilter",
    pure : false
})


@Injectable()
export class MovieFilter implements PipeTransform {
    transform(items: any[], field: string,value: string): any
    {
        if(!items || value == "")
            return items;
        if(field == "movie_title")
        {
            return items.filter(it => {
                if(String(it.movie_title).toLowerCase().includes(value))
                {
                    return it
                }
            })
        }
    }
    
}