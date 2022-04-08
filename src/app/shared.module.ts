import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

// Also I created this shared module file to have 
// all imports from common libraries in one place.
// The structure or imports here would depend on each project necessities.
// CommonModules or ionic modules could be added here as well, for example.

@NgModule({
  entryComponents: [],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
