//C:\Users\Laptop care\Desktop\angular practice\student-management\src\app\students\add-student\add-student.component.ts
import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
@Component({
  selector: 'app-add-student',
  standalone: false,
  
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  email: string = '';
  description: string = '';
  image: String | null = null;
  name: String = '';

  constructor(private studentService: StudentService) {}

  onSubmit(): void {
    const studentData: Student = {
      email: this.email,
      description: this.description,
      image: this.image ? this.image : null, // Store the image name or null if no image is uploaded
      name: this.name
    };

    this.studentService.saveStudentData(studentData);
    alert('Student data saved to local storage!');

    // Reset the form
    this.email = '';
    this.description = '';
    this.image = null;
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result as string; // Base64 string
      };
      reader.readAsDataURL(file);
    }
  }

}
