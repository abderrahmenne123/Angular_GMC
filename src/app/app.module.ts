import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PropertBindingComponent } from './propert-binding/propert-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { BindingExampleComponent } from './binding-example/binding-example.component';
import { MyCheckpointsComponent } from './my-checkpoints/my-checkpoints.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { PereComponent } from './pere/pere.component';
import { FilsComponent } from './fils/fils.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PropertBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,

    BindingExampleComponent,

    MyCheckpointsComponent,

    CarteVisiteComponent,

    PereComponent,

    FilsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
