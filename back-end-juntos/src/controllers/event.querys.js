export const createEventQuery =
  "INSERT INTO evento (nombre, fecha, hora, descripcion) VALUES ($1, $2, $3, $4)";

export const getEventQuery = "SELECT * FROM evento e";

export const getEventByIdQuery =
  "SELECT * FROM evento e WHERE e.id_evento = $1";

export const updateEventByIdQuery =
  "UPDATE evento SET nombre = $2, fecha = $3, hora = $4, descripcion = $5 WHERE id_evento = $1";

export const deleteEventByIdQuery =
  "DELETE FROM evento e WHERE e.id_evento = $1";
