const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/tasks')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET req are disabled')        
//   } else { 
//     next()
//   }
// })






app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=> {
    console.log('Server is up on port ' + port)
})



// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async () => {
//     // const task = await Task.findById('5ffae96ac6bc5319e0b8473d')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     //5ffae8ba86ad5916c452289b
//     const user= await User.findById('5ffae8ba86ad5916c452289b')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks) 
// }

// main()

// const bcrypt = require('bcrypt')
// const myfunction = async () => {
//     const password ='farjan1234'
//     const hashedPass = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPass)

//     const isMatch = await bcrypt.compare('farjan1234', hashedPass)
//     console.log(isMatch)
// }

// myfunction()

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: '123ax' }, 'thisismynewtoken', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewtoken')
//     console.log(data)
// }

// myFunction()

// const pet = {
//     name: "ning"
// }

// pet.toJSON = function () {
//     return {}
// }

// console.log(JSON.stringify(pet))