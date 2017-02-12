// TODO. import TODO Model ;-)
// const Todo = require('../models/todo')
//
// function create (params) {
//   // create a new TODO and console log the response
//   Todo.create(params, function (err, savedTodo) {
//     if (err) {
//       console.log(err)
//       return
//     }
//     console.log(savedTodo)
//   })
// }
// function list () {
//   // console log the list of all TODOs
//   Todo.find({}, function (err, todoResult) {
//     if (err) {
//       console.log(err)
//       return
//     }
//     if (todoResult) {
//       todoResult.forEach(function (todoEach) {
//         console.log(todoEach)
//       })
//     } else {
//       console.log('No todo found')
//     }
//   })
// }
// function show (id) {
//   // find the TODO with this id and console log it
//   Todo.findById(id, function (err, todoResult) {
//     if (err) {
//       console.log(err)
//       return
//     }
//     if (todoResult) {
//       console.log(todoResult)
//     } else {
//       console.log('No todo id found')
//     }
//   })
// }
// function update (id, params) {
//   // find the TODO with this id and update it's params. console log the result.
//   Todo.findByIdAndUpdate(id, params, {new: true}, function (err, updateResult) {
//     if (err) {
//       console.log(err)
//       return
//     }
//
//     if (updateResult) {
//       console.log(updateResult)
//     } else {
//       console.log('Update is not successful')
//     }
//   })
// }
// function destroy (id) {
//   // find the TODO with this id and destroy it. console log success/failure.
//   Todo.findByIdAndRemove(id, function (err, destroyResult) {
//     if (err) {
//       console.log(err)
//       return
//     }
//
//     if (destroyResult) {
//       console.log(destroyResult)
//     } else {
//       console.log('Destroy is not successful')
//     }
//   })
// }
//
// function destroyAll () {
//   Todo.remove({}, function (err, destroyAllResult) {
//     if (err) {
//       console.log(err)
//       return
//     }
//     console.log('All todos destroy')
//   })
// }
//
// module.exports = {
//   create,
//   list,
//   show,
//   update,
//   destroy,
//   destroyAll
// }
