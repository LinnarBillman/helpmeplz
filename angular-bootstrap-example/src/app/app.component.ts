import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as $ from 'jquery';

//System.import('./assets/vendor/jquery/jquery.min.js');
//require('./assets/vendor/jquery/jquery.min.js');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  public modalRef: BsModalRef; // {1}
  constructor(private modalService: BsModalService) {} // {2}

  ngOnInit() {
  
  }

  public openModal(template: any) {
    this.modalRef = this.modalService.show(template); // {3}
  }
}
