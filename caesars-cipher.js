const abcd = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  function rot13(frase) {
    let string = '';
  
    for(let i=0; i< frase.length; i++){
      const letra = frase[i];
      const letrasFrase = abcd.includes(letra);
      
      if (letrasFrase === false){
        string += letra;
      }else {
        const indice = abcd.findIndex((x) => x === letra);
        string += abcd[indice+13] || abcd[indice-13]
      }
    }
    
  
    return string;
  }
  
  rot13("SERR PBQR PNZC");
  