const { default: axios } = require("axios")

const GetAllGrades = () => axios.get('/api/grade');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    GetAllGrades
}
