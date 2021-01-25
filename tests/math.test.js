const { TestScheduler } = require("jest");

test('hello world!', () => {

})

test('this should fail', () => {
    throw new Error('failure!')
})