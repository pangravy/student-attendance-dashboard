import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FetchAttendanceService } from 'src/app/services/fetch-attendance.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  inputForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private fetchatt:FetchAttendanceService){
    this.inputForm = this.formBuilder.group({
      name:'',
      email:'',
      phone:'',
    });
  }

  enroll(){
    const userData = this.inputForm.value;
    this.fetchatt.enroll(userData);
    this.inputForm.reset()
  }

}
