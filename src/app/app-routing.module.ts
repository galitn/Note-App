import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';


const routes: Routes = [
  { path: 'new', component: NewNoteComponent },  
  { path: 'note/:id', component: NewNoteComponent },
  { path: '404', component: NotFoundComponent },
   { path: '', component: NotesListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
