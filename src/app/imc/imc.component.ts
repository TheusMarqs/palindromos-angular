import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {
  numero: string = '';

  words: Array<string> = this.numero.split(" ");
  reversedWords: Array<string> = this.words.map((word) => {
    let charArray: Array<string> = word.split("");
    charArray.reverse();
    let reversed: string = charArray.join("");
    return reversed;
  });
  numeroReverso: string = this.reversedWords.join(" ");

  resultado : string = this.numeroReverso;
}
