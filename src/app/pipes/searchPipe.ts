import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(items: any[], pattern: string) {
        pattern = pattern ? pattern.toLocaleLowerCase() : null;

        return pattern ? items.filter(x => x.title.toLowerCase().indexOf(pattern) !== -1) : items;
    }
}
