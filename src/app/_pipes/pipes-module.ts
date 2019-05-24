import { NgModule } from '@angular/core';
import { TruncateTextPipe } from './truncate-text.pipe';

@NgModule({
  declarations: [
    TruncateTextPipe
  ],
  // Pipes that use `.transform()` in the component itself need to be imported here
  providers: [],
  exports: [
    TruncateTextPipe
  ]
})
export class PipesModule {
}
