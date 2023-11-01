export const createAbonoQuery =
  "INSERT INTO abono (temporada, fecha_vencimiento, asiento, precio, tipo_localidad) VALUES ($1, $2, $3, $4, $5)";

export const getAbonoQuery = "SELECT * FROM abono ab";

export const getAbonoByIdQuery =
  "SELECT * FROM abono ab WHERE ab.id_abono = $1";

export const updateAbonoByIdQuery =
  "UPDATE abono SET temporada = $2, fecha_vencimiento = $3, asiento = $4, precio = $5, tipo_localidad = $6 WHERE id_abono = $1";

export const deleteAbonoByIdQuery =
  "DELETE FROM abono ab WHERE ab.id_abono = $1";
