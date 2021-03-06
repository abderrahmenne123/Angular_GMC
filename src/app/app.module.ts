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
import { MyFavoritColorComponent } from './my-favorit-color/my-favorit-color.component';
import { NgStyleExempleComponent } from './directive/ng-style-exemple/ng-style-exemple.component';
import { NgClassExpComponent } from './directives/ng-class-exp/ng-class-exp.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { HighlighttDirective } from './directives/highlightt.directive';
import { ThemesChangeComponent } from './directives/themes-change/themes-change.component';
import { RainbowDirective } from './directive/rainbow.directive';
import { NgforExampleComponent } from './directives/ngfor-example/ngfor-example.component';
import { ShowParagraphComponent } from './show-paragraph/show-paragraph.component';
import { PipeExempleComponent } from './pieps/pipe-exemple/pipe-exemple.component';
import { DefaultImagePipe } from './default-image.pipe';
import { CvComponent } from './CV/cv/cv.component';
import { DetailComponent } from './CV/detail/detail.component';
import { ListComponent } from './CV/list/list.component';
import { AppCvComponent } from './CVngFor/app-cv/app-cv.component';
import { AppListComponent } from './CVngFor/app-list/app-list.component';
import { AppDetailComponent } from './CVngFor/app-detail/app-detail.component';
import { TodoComponent } from './todo/todo.component';
import { EmbaucheComponent } from './CV/embauche/embauche.component';



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

    MyFavoritColorComponent,

    NgStyleExempleComponent,

    NgClassExpComponent,

    MiniWordComponent,

    HighlighttDirective,

    ThemesChangeComponent,

    RainbowDirective,

    NgforExampleComponent,

    ShowParagraphComponent,

    PipeExempleComponent,

    DefaultImagePipe,

    CvComponent,

    DetailComponent,

    ListComponent,

    AppCvComponent,

    AppListComponent,

    AppDetailComponent,

    TodoComponent,

    EmbaucheComponent






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
