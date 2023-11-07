import { Component , OnInit} from '@angular/core';
import { Data, FetchAttendanceService } from 'src/app/services/fetch-attendance.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit{
  
  datas!:Data[];
  displayedColumns: string[] = ['id','name','stats'];
  dataSource:Data[]=[];

  constructor(private fetch : FetchAttendanceService){}
  ngOnInit() {
    window.scrollTo (0,0);
    this.updateStudents();
  }

  updateStudents() {
    this.fetch.fetchAttendanceData().subscribe((data)=>{
      
      this.datas=data;
      this.dataSource=this.datas;
      console.log(this.dataSource);
    })
  }
  getclass(item){
    return item.map(a => a.slice(0,10));
  }
}
