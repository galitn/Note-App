import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';
import { takeWhile } from 'rxjs/operators';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('FadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class NotesListComponent implements OnInit, OnDestroy {
  isEditMode: boolean = false;
  notes$: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>([]);
  componentActive: boolean = true;
  searchTerm: string = '';
  constructor(private noteService: NoteService, private router: Router) { }
  
  
  
  
  ngOnInit() {
    
    this.noteService.notesObs$.pipe(takeWhile(()=> this.componentActive)).subscribe(notes => {
      this.notes$.next(notes);
    });
  }
  navigateToNewNote(){
    this.router.navigate(['/new']);
    }

    onRemoveNote(note: Note){
      this.noteService.removeNote(note);
      
    }
    onNoteClicked(note: Note){
      if(note.id){
        this.router.navigateByUrl('note/' + note.id);

      }
    }
    ngOnDestroy(): void {
      this.componentActive = false;
    }
}
