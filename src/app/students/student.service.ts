//C:\Users\Laptop care\Desktop\angular practice\student-management\src\app\students\student.service.ts
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 
  private storageKey = 'studentData';

  constructor() {}

  // Save student data to local storage
  saveStudentData(student: Student): void {
    const existingData = this.getStudentData();
    existingData.push(student);
    localStorage.setItem(this.storageKey, JSON.stringify(existingData));
  }

  // Retrieve student data from local storage
  getStudentData(): Student[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

   // Save all student data to local storage (used for batch updates like deletion)
   saveAllStudentData(students: Student[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(students)); // Save all students
  }

  // Delete a student by index
  deleteStudent(index: number): void {
    const existingData = this.getStudentData(); // Fetch current data
    if (index >= 0 && index < existingData.length) {
      existingData.splice(index, 1); // Remove the student at the specified index
      this.saveAllStudentData(existingData); // Save updated data
    }
  }
  
}
