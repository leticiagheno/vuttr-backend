import App from "./app";

let port = process.env.PORT || "3000";

App.app.listen(port, function() {
  console.log(`Servidor executando na porta ${port}`);
});
