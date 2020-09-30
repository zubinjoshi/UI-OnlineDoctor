import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { VideochatComponent } from '@app/patient/videochat/videochat.component';



@NgModule({
  declarations: [CardComponent,VideochatComponent],
  imports: [
    CommonModule,
      ]
  ,
  exports:[
    CardComponent,VideochatComponent
  ]
})
export class SharedComponentModuleModule { }
