// 'use client'

const { default: axios } = require("axios")
const GetAllGrades = () => axios.get('/api/grade');
const CreateStudent = (data) => axios.post('/api/students', data)
const GetaAllStudents = () => axios.get('/api/students')
const DeleteStudentRecord = (id) => axios.delete('/api/students?id='+id)
const GetAttandanceList = (grade,month) => axios.get('/api/attendance?grade='+grade+"&month="+month)


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    GetAllGrades,
    CreateStudent,
    GetaAllStudents,
    DeleteStudentRecord,
    GetAttandanceList,
}
 