import { openDatabase } from "./database.js";

export const CadastrarTarefa = async (request, response, next) => {

    const { titulo, prioridade, data, descricao } = request.body;

    const DB = await openDatabase();

    const addTask = await DB.run(`INSERT INTO Tarefa(titulo, prioridade, data, descricao, idCliente) VALUES (?,?,?,?,?);`, [titulo, prioridade, data, descricao, 1]);

    DB.close();

};
