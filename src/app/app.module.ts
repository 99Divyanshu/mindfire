import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './common/home/home.component';
import { FooterComponent } from './common/footer/footer.component';
import { FormComponent } from './home/form/form.component';
import { ImageComponent } from './home/image/image.component';
import { RegisterComponent } from './sign_up/register/register.component';
import { CategoriesComponent } from './header_elements/categories/categories.component';
import { MoreComponent } from './header_elements/more/more.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './header_elements/services/home.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './common/loader/services/loader-interceptor.service';
import { LoaderComponent } from './common/loader/component/loader.component';
import { AuthGuard } from './login/auth/auth.guard';
import { LoginComponent } from './login/component/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    FormComponent,
    ImageComponent,
    RegisterComponent,
    CategoriesComponent,
    MoreComponent,
    HomepageComponent,
    routingComponents,
    LoaderComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [HomeService,{provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptorService,multi:true},AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
