import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { HelloJHipsterSharedModule } from 'app/shared/shared.module';
import { HelloJHipsterCoreModule } from 'app/core/core.module';
import { HelloJHipsterAppRoutingModule } from './app-routing.module';
import { HelloJHipsterHomeModule } from './home/home.module';
import { HelloJHipsterEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    HelloJHipsterSharedModule,
    HelloJHipsterCoreModule,
    HelloJHipsterHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    HelloJHipsterEntityModule,
    HelloJHipsterAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class HelloJHipsterAppModule {}
