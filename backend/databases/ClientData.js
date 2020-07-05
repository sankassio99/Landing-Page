const db = require("./db");

const ClientData = db.sequelize.define( "ClientData", {  
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    whatsapp: {
        type: db.Sequelize.STRING
    }
})

// ClientData.sync({ force: true });

module.exports = ClientData ;