import { Component, OnInit, DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-lifecylce',
  standalone: true,
  imports: [],
  templateUrl: './lifecylce.component.html',
  styleUrl: './lifecylce.component.css'
})
export class LifecylceComponent implements OnInit,OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {
  firstname: string;
  constructor() {
    console.log("constructor");
    this.firstname = "";
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnchanges")
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngAfterContentChecked(): void {
    console.log(" ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
   console.log("ngAfterContentInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewIni");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
}
