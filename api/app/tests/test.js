const studentC = require('../controllers/studentController')

test('should show all students',() => {
    expect(studentC.showStudents)
})