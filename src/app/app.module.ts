import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './shared/interceptor/loading.interceptor';
import { DefaultImageDirective } from './shared/directive/default-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    SpinnerComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DefaultImageDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
