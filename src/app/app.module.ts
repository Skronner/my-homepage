import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { FormationComponent } from './formation/formation.component';
import { WhatelseComponent } from './whatelse/whatelse.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    NavigationComponent,
    FooterComponent,
    AboutmeComponent,
    SkillsComponent,
    FormationComponent,
    WhatelseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
