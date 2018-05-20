import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { PipesModule } from '../../pipes/pipes.module';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    PipesModule,
    SelectSearchableModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
