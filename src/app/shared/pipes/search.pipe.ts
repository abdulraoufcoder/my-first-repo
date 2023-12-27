import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    items.forEach(function(item){
      
    })

    items.forEach((item)=>{
      if(item.title.includes('on')){
        // return item
        // console.log(item);
      }
    })

    const newArr = items.filter((item)=> {
      return item.title.includes('on')
    })

    const someArr = items.some((element)=>{
      return true
    })

    console.log(newArr);
    console.log(someArr);
    
    


    return items.filter(item => {
      console.log(Object.keys(item));

      console.log(item['title']);
      
      
      // Add your custom logic for searching in specific properties of your items
      return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(searchText)
      );
    });
  }
}
