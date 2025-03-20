import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-template',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent{
  isUserloggedIn: boolean = false;
  UserName: string = "Chetan";
  @ViewChild('dynamictm') dynaTemplate: TemplateRef<any> | undefined;
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) dynaContainer: ViewContainerRef | undefined;
  LoadTemplate()
  {
    if (this.dynaTemplate) {
      this.dynaContainer?.clear(); 
      this.dynaContainer?.createEmbeddedView(this.dynaTemplate);
    }
  }
}
