import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {
  /*
  numero: string = '';
  numeroReverso: string = '';
  words: Array<string> = this.numero.split(" ");
  reversedWords: Array<string> = [];
  resultado : string = '';

  Calcular() {
    
    this.reversedWords = this.words.map((word) => {
      let charArray: Array<string> = word.split("");
      charArray.reverse();
      let reversed: string = charArray.join("");
      return reversed;
    });
    this.numeroReverso = this.reversedWords.join(" ");
    this.resultado = this.numeroReverso;
  }
  */

  numero: number = 0;
  resultado : string = '';
  msg : string = '';

  Verificar() {
    const textoInicial = this.numero.toString();
    const textoInverso = textoInicial.split('').reverse().join('');

    if (this.numero < 10) {
      this.msg = 'Por favor, digite um valor com duas ou mais casas decimais';
    }

    else {
      if (textoInicial !== '') {
        if (textoInicial === textoInverso) {
          this.msg = 'O número ' + this.numero + ' é palíndromo';
        }
  
        else {
          this.msg = 'O número ' + this.numero + ' não é palíndromo';
        }
      }

    }
    this.resultado = this.msg;

  }

  
}
