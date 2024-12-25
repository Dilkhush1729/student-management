import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './students/student-list/student-list.component';
import { TeacherListComponent } from './students/teacher-list/teacher-list.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'teachers', component: TeacherListComponent },
  {path: 'add-student', component: AddStudentComponent},
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
