import { Pipe, PipeTransform } from '@angular/core';

/**
 * Usage: | truncateText: 'your text here': 50
 */

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {
  transform(text: string, lengthLimit: number): string {
    return text.length > lengthLimit ? text.substring(0, lengthLimit) + '...' : text;
  }
}
