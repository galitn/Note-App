import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteService } from './services/note.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterSeatchNotesPipe } from './pipes/filter-search.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteDetailsComponent,
    NotesListComponent,
    NewNoteComponent,
    FilterSeatchNotesPipe,
    NotFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
