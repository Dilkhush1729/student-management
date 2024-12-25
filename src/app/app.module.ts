// C:\Users\Laptop care\Desktop\angular practice\student-management\src\app\app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { StudentNamePipe } from './pipes/student-name.pipe';
import { FormsModule } from '@angular/forms';
import { StudentsModule } from './students/students.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    StudentNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StudentsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
