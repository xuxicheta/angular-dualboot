import { Component, Input } from '@angular/core';
import * as angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
  selector: 'app-inner-details',
  templateUrl: './inner-details.component.html',
  styleUrls: ['./inner-details.component.scss']
})
export class InnerDetailsComponent {
  @Input() innerName = '';
}


angular
  .module('app')
  .directive('ngxInnerDetails', downgradeComponent({
    component: InnerDetailsComponent,
  }));
