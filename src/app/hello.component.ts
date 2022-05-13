import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: `<h1>Hello {{name}}!</h1>`,
  styleUrls: [`h1{font-family:Lato;}`]
})
export class HelloComponent {//implements OnInit {

  @Input() name: string="";

  // constructor() { }

  // ngOnInit(): void {
  //   console.log("Initialized");
  // }

}
