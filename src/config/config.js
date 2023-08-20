import dotenv from "dotenv";

export const entorno = { mode: process.argv[2] };
if ((process.argv[2] != "dev" && process.argv[2] != "prod") || process) {
  console.log("no esta bien el argumento, (dev or prod)");
  console.log(process.argv);
  process.exit;
}
dotenv.config({
  path: process.argv[2].mode === "dev" ?? "./.env.development", // : "./.env.production",
});

console.log("entorno");
console.log(process.env.MONGO_URL);
//entorno.PORT = process.env.PORT;
entorno.MONGO_URL = process.env.MONGO_URL;
//entorno.ADMIN_NAME = process.env.ADMIN_NAME;
//entorno.ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
