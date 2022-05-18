// const studentC = require('../controllers/studentController')

// test('should show all students',() => {
//     expect(studentC.showStudents)
// })

const supertest = require('supertest')
const app = require('../../server')
const request = supertest(app)
const studentC = require('../controllers/studentController')

it('Get /show-students', async () => {
    const res = await request.get('/show-students')
    expect(res.status).toBe(200)
})