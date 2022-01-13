import { Directive, ElementRef, Injector } from '@angular/core';

import { UpgradeComponent } from '@angular/upgrade/static';
import { appModule } from '../app.module';


appModule
  .component('appDetails', {
    template: `
<section>
  <h4>Ng:Details Component</h4>
  <div>vm.name = "{{vm.name}}"</div>
  <ngx-inner-details [inner-name]="'to-inter-name'"></ngx-inner-details>
</section>
  `,
    controllerAs: 'vm',
    controller: class AppDetailsController {
      name = 'Name from controller';
    }
  });


@Directive({
  selector: 'ng-details'
})
export class HeroDetailDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('appDetails', elementRef, injector);
  }
}



