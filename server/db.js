const Pool = require('pg').Pool
const pool = new Pool({
    user:"postgres",
    password:"nur",
    host:"localhost",
    port:5432,
    database:"manga"
})
module.exports = pool