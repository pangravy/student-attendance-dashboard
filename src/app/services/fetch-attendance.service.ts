import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Data {
  name: string,
  phone: string,
  email: string,
  stats: [
    date: Date
  ],
  id: number
}



@Injectable({
  providedIn: 'root'
})

export class FetchAttendanceService {

  attendanceData$!: Observable<Data[]>;

  constructor(private http: HttpClient) { }

  

  enroll(userData: Data) {
    this.http.post('https://65487810dd8ebcd4ab22eef3.mockapi.io/database', userData).subscribe((data) => {
      console.log('User Registered', data);
    })
  }

  updateUser(id: Data["id"], student: Data) {
    this.http.put(`https://65487810dd8ebcd4ab22eef3.mockapi.io/database/${id}`, student).subscribe((data) => {
      console.log(data);

    });
  }

  fetchAttendanceData() {
    this.attendanceData$ = this.http.get<Data[]>('https://65487810dd8ebcd4ab22eef3.mockapi.io/database');
    return this.attendanceData$;
  }

  deleteUser(id: Data["id"]) {
    this.http.delete(`https://65487810dd8ebcd4ab22eef3.mockapi.io/database/${id}`).subscribe((data) => {
      console.log(data);
    })
  }
}
