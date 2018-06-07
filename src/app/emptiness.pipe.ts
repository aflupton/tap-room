import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "emptiness",
  pure: false
})

// export class EmptinessPipe implements PipeTransform {
//   transform(input: Keg[], desiredEmptiness) {
//     var output: Keg[] = [];
//     if (desiredEmptiness === "partialKegs") {
//       for (var i = 0; i < input.length; i++) {
//         if (input[i].done === false) {
//           output.push(input[i]);
//         }
//       }
//     }
//     return output;
//   } else if (desiredEmptiness === "emptiedKegs") {
//     for (var i = 0; i < input.length; i++) {
//       if (input[i].done === true) {
//         output.push(input[i]);
//       }
//     }
//     return output;
//   } else {
//     return input;
//   }
// }
export class EmptinessPipe implements PipeTransform {
  transform(input: Keg[], desiredEmptiness) {
    var output: Keg[] = [];
    if(desiredEmptiness === "partialKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredEmptiness === "emptiedKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
