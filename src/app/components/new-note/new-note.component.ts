import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  isEditMode: boolean = false;
  note: Note = new Note();;
  formGroup: FormGroup;
  constructor(private noteService: NoteService, private router: Router, private activatedRoute: ActivatedRoute) { }

   
  
  ngOnInit() {
    let noteId = this.activatedRoute.snapshot.paramMap.get('id');
     if(noteId){
       this.isEditMode = true;
       let noteIdNumber = +noteId;
       this.note =  this.noteService.getNoteById(noteIdNumber);
      if(!this.note){
        this.router.navigateByUrl('404');
      }
      this.initFormGroup(this.note.name, this.note.description);
     }
     else{
      this.initFormGroup();
     }
  
  }
  
  initFormGroup(name: string = '', description: string  = ''){
    this.formGroup = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      description: new FormControl(description)
    })
  }
  onCancelClick(){
    this.router.navigate(['/']);

  }
  onSubmit(){
    this.note.name = this.formGroup.controls["name"].value;
    this.note.description = this.formGroup.controls["description"].value;
    this.noteService.saveNote(this.note);
  
    this.router.navigate(['/']);
  }
}
