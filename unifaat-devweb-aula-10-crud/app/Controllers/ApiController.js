import "../../bootstrap/app.js"
import db from "../../config/db.js";

export default (function () {

    return {

        // Buscar
        'list': async (req, res) => {

            try{
                const result = await db.query("select * from todos order by id");
                res.json({
                    rows: result.rows
                });
            }catch(err){
                res.status(500).send({error:"falha ao buscar os dados"});
            }


        },

        // Buscar um por id
        'get': async (req, res) => {


        },

        //Inserir
        'insert': async (req, res) => {
            
        const {title} = req.body;
            if (title == undefined) {
                res.status(401).send({error: "sem o campo title"});
                return;
            }

            try {
                const result = await db.query(
                    "INSERT INTO todos (title) VALUES ($1) RETURNING *",
                    {title}
                );
                res.status(201).send(result.rows[0]);
            } catch (err) {
                    res.status(500).send({ error: "falha ao buscar os dados"});
                }
                


        },

        //Update
        'update': async (req, res) => {

            const {is_checked } = req.body;
            const {id} = req.params.id;

            if (is_checked === underfined){
                res.status(401).send({error: "sem o campo is_checked"});
                return;
        }
        try {
            const result = await db.query("UPDATE todos SET is_cheked = $1 WHERE id = $2 RETURNING *",
            [is_checked, id]
            );
            if(result.rows.length === 0){
            res.status(404).send({senderror: "nao encontrado"});
            }
            res.status(200).send(result.rows[0]);
            }catch (err) {
                res.status(500).send({error: "falha ao atualizar os dados"});
            }

        },

        //Excluir
        'delete': async (req, res) => {



        },

    }

})();
