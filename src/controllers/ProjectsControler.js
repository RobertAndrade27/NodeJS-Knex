const db = require("../database");

async function list_projects(req, res, next) {
  try {
    const { user_id, page = 1 } = req.query;

    const query = db("projects")
      .limit(10)
      .offset((page - 1) * 10);

    const countObj = db("projects").count({ count: ["title"] });

    if (user_id) {
      query
        .where({ user_id })
        .join("users", "users.id", "=", "projects.user_id")
        .select("projects.*", "users.username");
        

      countObj.where({ user_id });
    }

    const [count] = await countObj;
    console.log(count);

    res.header("X-Total-Count", count["count"]);

    const response = await query;

    return res.send(response);
  } catch (error) {
    next(error);
  }
}

async function inserir_projetos(req, res, next) {
  try {
    const { title, user_id } = req.body;
    await db("projects").insert({ title, user_id });

    return res.status(201).send();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  list_projects,
  inserir_projetos,
};
