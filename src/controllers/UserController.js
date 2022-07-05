const db = require("../database");

async function list(req, res) {
  const results = await db("users").where('status', '=', 'A');

  return res.json(results);
}

async function inserir_usuario(req, res, next) {
  try {
    const { username } = req.body;
    await db("users").insert({ username });

    return res.status(201).send();
  } catch (error) {
    next(error);
  }
}

async function atualizar_usuario(req, res, next) {
  try {
    const { username } = req.body;
    const { id } = req.params;

    await db("users").update({ username }).where("id", id);

    return res.status(201).send();
  } catch (error) {
    next(error);
  }
}

async function deletar_usuario(req, res, next) {
  try {
    const { id } = req.params;
    const status = "D"
    await db("users").where("id", id).update('status', status)

    return res.status(201).send();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  list,
  inserir_usuario,
  atualizar_usuario,
  deletar_usuario
};
