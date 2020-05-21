
const CUENTAS = [
    ["ONE HUNDRED", 10000],
    ["TWENTY", 2000],
    ["TEN", 1000],
    ["FIVE", 500],
    ["ONE", 100],
    ["QUARTER", 25],
    ["DIME", 10],
    ["NICKEL", 5],
    ["PENNY", 1]
  ];
  
  function checkCashRegister(price, cash, cid) {
    var change = cash * 100 - price * 100; // (centavos)
    var yourCash = {};
    var myCash = {};
    var i = 0;
  
   
    if (change === 0) {
      return {
        status: "CLOSED",
        change: cid
      };
    }
  
    // forEach aplicado a cid
    cid.forEach(money => {
      myCash[money[0]] = parseInt(money[1] * 100);
    });
  
    // array cuentas
    while(i < CUENTAS.length && change > 0) {
      var nombreCuenta = CUENTAS[i][0];
      var valorCuenta = CUENTAS[i][1];
  
      // dar devuelta
      if (change - valorCuenta > 0 && myCash[nombreCuenta] > 0) {
        yourCash[nombreCuenta] = 0;
        // dar la mayor cantidad posible de la factura
        while(change - valorCuenta >= 0 && myCash[nombreCuenta] > 0) {
          yourCash[nombreCuenta] += valorCuenta / 100;
          myCash[nombreCuenta] = parseInt(myCash[nombreCuenta] - valorCuenta);
          change -= valorCuenta;
        }
      }
      i++;
    }
  
    if (change === 0) {
      let hasMoney = false;
  
      Object.keys(myCash).forEach(key => {
        if (myCash[key] > 0) {
          hasMoney = true;
        }
      });
  
      if (hasMoney) {
        return {
          status: "OPEN",
          change: Object.keys(yourCash).map(key => {
          let obj = [key, yourCash[key]];
          console.log(JSON.stringify(obj));
          return obj;
        })};
      } else {
        console.log("NO Money Left...");
        return {
          status: "CLOSED",
          change: cid
        };
      }
    }
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  }
  