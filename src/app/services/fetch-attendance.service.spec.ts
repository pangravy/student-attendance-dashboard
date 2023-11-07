import { TestBed } from '@angular/core/testing';

import { FetchAttendanceService } from './fetch-attendance.service';

describe('FetchAttendanceService', () => {
  let service: FetchAttendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchAttendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
