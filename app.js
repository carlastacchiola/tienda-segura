
const express = require('express');

const app = express();
function total(precio, cantidad, descuento) {
    return precio * cantidad * (1 - descuento);
}

app.get('/', (req, res) => {
    res.send('TP4 - Integración Continua: Tienda Segura');
});

app.get('/salud', (req, res) => {
    res.status(200).json({
        estado: 'OK',
        mensaje: 'La aplicación funciona correctamente'
    });
});

if (require.main === module) {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Servidor funcionando en http://localhost:${PORT}`);
    });
}

module.exports = { app, total };
