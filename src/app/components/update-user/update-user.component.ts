import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Data, FetchAttendanceService } from 'src/app/services/fetch-attendance.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
  // @Input() student: Data;
  student: Data;
  state$: Observable<object>;
  inputForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private fetchatt: FetchAttendanceService, private route: ActivatedRoute, private router: Router) {
    // this.route.paramMap.pipe(map(() => ))
    
    const student = this.router.getCurrentNavigation().extras.state['student'];
    console.log(student);
    this.student = student;
    
    this.inputForm = this.formBuilder.group({
      name: student['name'],
      email: student['email'],
      phone: student['phone'],
    });
  }

  update() {
    const userData = this.inputForm.value;
    userData['id'] = this.student.id;
    console.log(userData);
    
    this.fetchatt.updateUser(this.student.id, userData);
    // this.router.navigateByUrl('/new').then(() => {
    //   this.router.navigateByUrl('/')
    // })
    
    // this.fetchatt.enroll(userData);
    // this.inputForm.reset()
  }

  
}
