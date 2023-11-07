import { Component } from '@angular/core';
import { FetchAttendanceService } from 'src/app/services/fetch-attendance.service';
import { MatTable } from '@angular/material/table';
import { OnInit } from '@angular/core';
import { Data } from 'src/app/services/fetch-attendance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  datas!:Data[];
  displayedColumns: string[] = ['id','name','phone','email','actions', 'delete'];
  dataSource:Data[]=[];
  favoriteUserId : any;

  constructor(private fetchData:FetchAttendanceService, private router: Router){}

  ngOnInit(){
    window.scrollTo (0,0);
    this.updateStudents();
  }

  updateStudents() {
    this.fetchData.fetchAttendanceData().subscribe((data)=>{
      this.datas=data;
      this.dataSource=this.datas;
      console.log(this.dataSource);
      
    })
  }
  onEdit(row : any){
    this.router.navigateByUrl('/update', {
      state: {student: row}
    })
  }

  onDelete(row : any){
    this.fetchData.deleteUser(row);
    this.updateStudents();
    this.router.navigateByUrl('/new').then(() => {
      this.router.navigateByUrl('')
    })
  }
}
