import { Component, EventEmitter, OnInit } from '@angular/core';
import { Controls, NgxAutomaticRootFormComponent } from 'ngx-sub-form';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent
  extends NgxAutomaticRootFormComponent<any, any>
  implements OnInit {
  dataInput: Required<any>;
  dataOutput: EventEmitter<any>;
  protected getFormControls(): Controls<any> {
    throw new Error('Method not implemented.');
  }

  constructor() {
    super();
  }

  ngOnInit() {}
}
