import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { dummyStudents } from './dummy-data';
@Component({
  selector: 'app-student-list',
  standalone: false,
  
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})

export class StudentListComponent implements OnInit {
  studentData: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentData = this.studentService.getStudentData();
    if (this.studentData.length === 0) {
      this.studentData = dummyStudents; // Load dummy data if no data in localStorage
    }
  }
  deleteStudent(index: number): void {
    this.studentService.deleteStudent(index); // Delete student using the service
    this.studentData = this.studentService.getStudentData(); // Refresh the local list
  }
}
