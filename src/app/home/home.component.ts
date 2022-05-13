import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() value:string='';
  constructor() { 
    console.log("constructor!")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges.');
  }
  ngOnChange(){
    console.log("ngOnChange!")
  }
  ngOnInit(): void {
    console.log("ngOnInit!")
  }
  ngDoCheck():void{
    console.log("ngDoCheck!")
  }
  ngAfterContentInit():void{
    console.log("ngAfterContentInit!")
  }
  ngAfterContentChecked():void{
    console.log("ngAfterContentChecked!")
  }
  ngAfterViewInit():void{
    console.log("ngAfterViewInit!")
  }
  ngAfterViewChecked():void{
    console.log("ngAfterViewChecked!")
  }
  ngOnDestroy():void{
    console.log("ngOnDestroy!")
  }

}
