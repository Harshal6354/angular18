import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Iuser } from '../interface/iUser';
import { HttpClient } from '@angular/common/http';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent implements OnInit {
  http = inject(HttpClient);
  firstName = signal('raj'); //signal created
  lastName = signal('singh');
  fullName = computed(() => this.firstName() + ' ' + this.lastName());
  cityList = signal(['mumbai', 'Delhi']);
  studObj2 = signal({
    class1: 'a',
    rollno: 123,
  });
  Mysignal = signal<number>(1223);
  Mysignal2 = signal<string>('mystring');
  newCourse: string = 'java';

  constructor() {
    setTimeout(() => {
      this.newCourse = 'dotnet';
      this.Mysignal.set(10);
    }, 5000);
  }
  changeName() {
    this.Mysignal2.set('rejected');
  }
  changeFirstName() {
    this.firstName.set('Elvish');
  }
  changeLastName() {
    this.lastName.set('Yadav');
  }
  addcity() {
    this.cityList.set([...this.cityList(), 'Nagpur']);
  }
  changestud() {
    this.studObj2.set({ ...this.studObj2(), rollno: 2332 });
  }
  myNewNAme = signal<string>('Rakesh');
  MyNewNo = signal<number>(20);
  MynewsRoll = signal<string>('Student');

  changestudent() {
    this.MynewsRoll.set('new classes');
  }
  Myuser: Iuser[] = [];

  // interceptor

  respone: IPost[] = [];

  ngOnInit(): void {
    this.http
      .get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: (res: IPost[]) => {
          this.respone = res;
          console.log('api res', res);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
