import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { setAngularJSGlobal, UpgradeModule } from '@angular/upgrade/static';
import * as angular from 'angular';

import { HeroDetailDirective } from './angularjs/details/details.component';
import { InnerDetailsComponent } from './inner-details/inner-details.component';

setAngularJSGlobal(angular);


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailDirective,
    HeroDetailDirective,
    InnerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule,
  ],
  providers: [
    {
      provide: '$scope',
      useFactory: (i: any) => i.get('$rootScope'),
      deps: ['$injector']
    }, // <<<< added this section to fix the No provider for $scope error via https://github.com/angular/angular/issues/14993
  ],
})
export class AppModule implements DoBootstrap {
  constructor(
    private upgrade: UpgradeModule,
  ) {
  }

  ngDoBootstrap(appRef: ApplicationRef) {
    this.upgrade.bootstrap(document.body, ['app']);
    appRef.bootstrap(AppComponent);
  }
}
