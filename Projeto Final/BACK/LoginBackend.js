import { openDatabase } from "./database.js";

export const Login = async (request, response, next) => {

    const { usuario, senha } = request.body;

    const DB = await openDatabase();

    const cliente = await DB.get(`SELECT * FROM Login WHERE usuario = ? AND senha = ?;`, [usuario, senha]);

    if (cliente) {
        DB.close();
        response.status(200).send("Login autorizado");
        return;
    }

    DB.close();
    response.status(400).send('Login Negado');

};