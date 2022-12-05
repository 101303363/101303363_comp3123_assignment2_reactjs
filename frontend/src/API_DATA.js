import axios from "axios";
export default class API_DATA {
        constructor() {
        this.axios = axios.create({
        baseURL: "http://localhost:3333/api/emp",
        timeout: 1000,
        headers: {"Access-Control-Allow-Origin": "*"}
        });
    }
    getEmployees() {
        return this.axios.get("/employees");
    }
}