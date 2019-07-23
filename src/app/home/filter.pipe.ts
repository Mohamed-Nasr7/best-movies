import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(movies: any, name?: any): any {

    if(name === undefined){
      return movies
    }

    else{
      return movies.filter(item=>{
        return item.Title.toLowerCase().includes(name)
      })

    }

  
  }

}
