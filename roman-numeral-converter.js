function convertToRoman(num) {

let romanos = [
      'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'
    ];

let numeros=  [
      1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
    ];
    
    let suma = '';
    
    for (let i=0;i<numeros.length;i++){
        

        while (numeros[i] <= num){
            suma += romanos[i];
            num -= numeros[i];
            
        } 
    }
    return suma;
}

convertToRoman(5);
