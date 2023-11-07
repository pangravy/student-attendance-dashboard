import { Component } from '@angular/core';
import { MatFormField} from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { Data,FetchAttendanceService } from 'src/app/services/fetch-attendance.service';
import { FormBuilder } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.scss']
})
export class MarkAttendanceComponent {

  disabled:boolean=true;
  selectedUserId!:any;
  datas:Data[]=[];
  selectedUser:Data|null=null;
  date:(Date[]);
  dateArray : (Date[])[]= [];
  selectedDates = {};
  goon : any

  constructor(private fetchAttendanceService:FetchAttendanceService){}

  ngOnInit(){
    this.fetchAttendanceService.fetchAttendanceData().subscribe((data)=>{
      this.datas=data;
    })
  };

  markAttendance(){
    console.log(this.selectedUserId);
    const user = this.datas.find((user) => user.id===this.selectedUserId);
    this.selectedUser = user||null;
    console.log(this.selectedUser);
    this.disabled=!this.disabled;
  }

  datePicker(){
    if(this.date){
      this.dateArray.push(this.date);
      this.dateArray = this.dateArray.filter((date, index, self) => {
        return index === self.findIndex((d) => d && JSON.stringify(d) === JSON.stringify(date));
      });
      console.log(this.dateArray); 
      
  }
}
handleDateSelection(event: any) {
  console.log(event);
  this.selectedUser.stats.push(event);
  this.fetchAttendanceService.updateUser(this.selectedUser.id, this.selectedUser);
    
  
}

  }

