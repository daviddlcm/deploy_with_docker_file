const db = require("../configs/bd.config")
class User{
    constructor({id, userName, password}){
        this.id = id;
        this.userName = userName;
        this.password = password;
    }

    static async findUsername(userName){
        const connection = await db.createConnection();
        const [[rows]] = await connection.query("SELECT id,user_name,password FROM users WHERE user_name = ?", [userName]);

        connection.end();

        return rows;
    }
}
module.exports = User