import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Service1Service {
  public onRoleChange$: Subject<String> = new Subject<String>();
  public role$: BehaviorSubject<String> = new BehaviorSubject<String>('');

  totalAmout: number | any;
  constructor(private http: HttpClient) {}

  getAllDept() {
    return this.http.get(
      'https://projectapi.gerasim.in/api/Complaint/GetParentDepartment'
    );
  }
  saveNewDept(obj: any) {
    return this.http.post(
      `${Constant.API_URL}${Constant.DEPARTMENT_METHODS.ADD_NEW_DEPT}`,
      obj
    );
  }
  getAuthtoken(): string {
    return '12223233';
  }
}
