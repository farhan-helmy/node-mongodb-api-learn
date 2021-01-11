require('../src/db/mongoose')
const User = require('../src/models/user')

//ObjectId("5ff6eb203f259a4cd4da397a")

// User.findByIdAndUpdate('5ff6eb203f259a4cd4da397a', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeCount('5ff6eb203f259a4cd4da397a', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})