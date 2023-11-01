export const authPage = (permission) => {
  return (req, res, next) => {
    const userRole = req.body.tipo_usuario;
    if (permission.includes(userRole)) {
      next();
    } else {
      //No autorizado
      return res.status(401).json("No tiene permisos");
    }
  };
};
