export const createAuthQuery =
  "INSERT INTO usuario (id_abono, tipo_usuario, nombre, apellido, cedula, fecha_nacimiento , direccion , correo_electronico , telefono, contrasena, descuento, institucion_educativa) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)";
