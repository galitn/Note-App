import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../models/note.model';

@Pipe({name: 'filterSearch'})
export class FilterSeatchNotesPipe implements PipeTransform {
  transform(items: Note[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText) || it.description.toLocaleLowerCase().includes(searchText);
    });
  }
   
}