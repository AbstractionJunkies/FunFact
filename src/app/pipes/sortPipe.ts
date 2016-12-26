import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    transform(items: any[], props: string[]) {
        console.log(items);
        console.log(props);

        let sort: string = props[0] || 'title';
        let order: string = props[1] || 'Ascending';
        if (items) {
            if (order === 'Ascending') {
                return items.sort(function (a, b) {
                    if (a[sort] < b[sort]) {
                        return -1;
                    }
                    if (a[sort] > b[sort]) {
                        return 1;
                    }
                    return 0;
                });
            }
            if (order === 'Descending') {
                return items.sort(function (a, b) {
                    if (a[sort] < b[sort]) {
                        return 1;
                    }
                    if (a[sort] > b[sort]) {
                        return -1;
                    }
                    return 0;
                });
            }
        }
    }
}
