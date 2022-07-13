// Esta función...
function imprimirCuota(boleta) {
  let cuota = 0;

  console.log("****************");
  console.log("**** Cuotas ****");
  console.log("****************");

  // calcular cuota
  for (const o of boleta.ordenes) {
    cuota += o.cantidad;
  }

  // guardar fecha vencimiento
  const hoy = Date.now();
  boleta.fechaVencimiento = new Date(
    hoy.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  // imprimir detaller
  console.log(`nombre: ${boleta.cliente}`);
  console.log(`monto: ${cuota}`);
  console.log(`vencimiento: ${boleta.fechaVencimiento.toLocaleString()}`);
}
