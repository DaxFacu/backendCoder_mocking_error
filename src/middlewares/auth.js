export function checkUser(req, res, next) {
  if (req.session.email) {
    if (req.session.email == "adminCoder@coder.com") {
      req.session.rol = "admin";
      return next();
    } else {
      req.session.rol = "user";
      return next();
    }
  }
  return res.status(401).render("error-page", {
    msg: "Please log in",
    link: "/login",
    textLink: "Volver al login",
  });
}

export function checkLogin(req, res, next) {
  if (!req.session.email) {
    return next();
  } else {
    return res.status(400).render("error-page", {
      msg: "User logeado",
      link: "/products",
      textLink: "Volver a productos",
    });
  }
}

export function checkAdmin(req, res, next) {
  if (req.session.email == "adminCoder@coder.com") {
    req.session.rol = "admin";
    return next();
  }
  return res.status(3).render("error-page", {
    msg: "Please log in AS ADMIN!",
    link: "/products",
    textLink: "Volver a productos",
  });
}

// //agregar

// validatePostUser(firstName, lastName, email) {
//   if (!firstName || !lastName || !email) {
//     console.log(
//       "validation error: please complete firstName, lastname and email."
//     );
//     throw "VALDIATION ERROR";
//   }
// }

// validatePutUser(id, firstName, lastName, email) {
//   if ((!id, !firstName || !lastName || !email)) {
//     console.log(
//       "validation error: please complete firstName, lastname and email."
//     );
//     throw "VALDIATION ERROR";
//   }
// }

// validateId(id) {
//   if (!id) {
//     console.log(
//       "validation error: please complete firstName, lastname and email."
//     );
//     throw "VALDIATION ERROR";
//   }
// }
