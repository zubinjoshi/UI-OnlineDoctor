import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';;
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { ContainerComponent } from './_components/container/container.component';;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
;
import { AngularMaterialModule } from './angular-material-module';
import { SharedComponentModuleModule } from './_components/shared-component-module/shared-component-module.module';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule ,
        FlexLayoutModule ,
        AngularMaterialModule  ,
        SharedComponentModuleModule
          
      ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent
,
        HeaderComponent ,
        FooterComponent ,
        ContainerComponent 
        
               
         ],
       
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };