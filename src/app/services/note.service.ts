import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { BehaviorSubject, Subject } from 'rxjs';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
    private idCounter: number = 1;
    private notes: Note[] = [];
    private notes$: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>([]);
    notesObs$ = this.notes$.asObservable();
  constructor(private _snackBar: MatSnackBar) { }

  saveNote(note: Note){
    if(note.id){
        let oldNote = this.getNoteById(note.id);
        oldNote.name = note.name;
        oldNote.description = note.description;
    }
    else{
      note =  this.updateNoteId(note); 
      this.notes.push(note);
    }
   
    
    this.notes$.next(this.notes);
    this._snackBar.open("saved successfuly", "ok");
  }

    removeNote(note: Note){
       let index =  this.notes.indexOf(note);
       this.notes.splice(index, 1);
       this.notes$.next(this.notes);
       this._snackBar.open("removed successfuly", "ok");
    }

    private updateNoteId(note: Note): Note{
      note.id = this.idCounter;
      this.idCounter++;
      return note;
    }
    
    getNoteById(id: number){
      if(id){
        let note = this.notes.find(note => note.id == id);
        return note;
      }
      return null;
    }
  
}