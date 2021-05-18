import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {
  @Input() note: Note;
  @Output() noteRemoved: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() noteClicked: EventEmitter<Note> = new EventEmitter<Note>();
  constructor() { }

  ngOnInit() {
  }
  removeNote(note){
    this.noteRemoved.emit(note);
  }
  onClickNote(note){
    this.noteClicked.emit(note);
  }
}
