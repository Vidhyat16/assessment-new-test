import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditLocationComponent } from './create-edit-location.component';
import { FormsModule } from '@angular/forms';
import { CreateEditService } from './create-edit.service';

@NgModule({
  declarations: [CreateEditLocationComponent],
  imports: [CommonModule, FormsModule],
  providers: [CreateEditService],
  exports: [CreateEditLocationComponent]
})
export class CreateEditModule {}
