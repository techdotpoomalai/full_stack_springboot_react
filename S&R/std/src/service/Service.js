import React from 'react';
import axios from 'axios';


const baseurl="http://localhost:8080";

class Service {
    getStudent(){
        console.log(axios.get(baseurl+"/getall"));
        return axios.get(baseurl+"/getall")
        // return "hi";
    }
    newStudent(data){
        return axios.post(baseurl+"/new",data)
    }
    deleteStudent(id){
        return axios.delete(baseurl+"/delete/"+id)
    }
    updateStudent(data){
        return axios.put(baseurl+"/update/"+window.update_id, data)
    }
}
export default new Service();