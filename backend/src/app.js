const express = require ('express');
const cors = require ('cors');
const app = express();

require('./database');
// const Expenses = require('./models/Expenses'); // **todavía no tengo models ...

// settings: para configurar el servidor - Por ahora solo quiero enviar datos del back al front
app.set('port', process.env.PORT || 4000);


// midllewares: configurar secciones antes de que lleguen a las rutas o a las URLs
app.use(cors());
app.use(express.json());


// Endpoints o Routes: URLs que React va a visitar
app.use('/api/expenses', require('./routes/expenses')) 
app.use('/api/categories', require('./routes/expensecategories')) 

//CRUD expenses

// // CREATE
// app.post('/api/v1/expenses', (req, res) => {
//     const { body } = req;
//     // Crear un registro de "gasto" a partir del body
//     return Expenses.create(body)

// // Responder al cliente con la respuesta de la base de datos;
// .then(newExpense => res.status(201).json(newExpense))
// .catch(err => {
//   console.log(,err);
//   res.status(400).json(err)
// })
// });

// // READ All
// app.get('/api/v1/expenses', (req, res) => {
//     // Obtener gastos de la base de datos
//     Expenses.find()
//       .then(expenses => res.json(expenses))
//       .catch(err => res.status(400).json(err));
//   });

  
// // READ One
// app.get('/api/v1/expenses/:id', (req, res) => {
//     // Obtener ID desde params
//     const { id } = req.params;
//     // Obtener gastos por ID de la base de datos
//     Expenses.findById(id)
//       .then(expenses => {
//         if (!expenses) res.status(404).json('Expense not found');
//         res.json(expenses)
//       })
//       .catch(err => res.status(404).json(err));
//   });

//   // UPDATE
// app.patch('/api/v1/expenses/:id', (req, res) => {
//     const { body } = req;
//     // Obtener ID desde params
//     const { id } = req.params;
//     // Encontrar y actualizar gasto por ID a partir del Body que me manda el cliente
//     Expenses.findByIdAndUpdate(id, body, { new: true })
//       .then(updateExpense => res.json(updateExpense))
//       .catch(err => res.status(404).json(err));
//   });
  
//   // DELETE
// app.delete('/api/v1/expenses/:id', (req, res) => {
//     // Obtener ID desde params
//     const { id } = req.params;
//     // Encontrar y borrar pelicula por ID
//     // Encontrar y actualizar pelicula por ID a partir del Body que me manda el cliente
//     Expenses.findByIdAndDelete(id)
//       .then(() => res.status(204).json())
//       .catch(err => res.status(404).json(err));
//   });  


module.exports = app;

// app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));

