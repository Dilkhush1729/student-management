// C:\Users\Laptop care\Desktop\angular practice\student-management\src\app\students\students.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    StudentListComponent,
    AddStudentComponent,
    EditStudentComponent,
    TeacherListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class StudentsModule { }
