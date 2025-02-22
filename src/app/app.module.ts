import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortOnComponent } from './components/port-on/port-on.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { GetCustomersBySubscriptionService } from './services/get-customers-by-subscription.service';
import { GetNetworkOperatorService } from './services/get-network-operator-code.service';
import { PostSendAuthenticationService } from './services/post-send-authentication.service';
import { PortinRequestComponent } from './components/portin-request/portin-request.component';
import { TheftComponent } from './components/theft/theft.component';


import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,
    FooterComponent,
    PortOnComponent,
    PortinRequestComponent,
    TheftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSelectModule,   
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    GetCustomersBySubscriptionService,
    GetNetworkOperatorService,
    PostSendAuthenticationService,
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
