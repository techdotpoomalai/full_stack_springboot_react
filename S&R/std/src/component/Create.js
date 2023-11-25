import React,{Component} from "react"
import $ from 'jquery'

import '../component/css/CreateStyle.css';
import Service from "../service/Service";

import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

const regExp = RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i);
const regExp_number=RegExp(/\b\d{5}\b/g);

// const formValid = ( rest ) => {
//     alert("gh")
//     let isValid = true;
//     Object.values(rest).forEach(val => {
//         if (val.length < 0) {
//             isValid = false
//         } 
//     });
//     return isValid;
// };
// const formErrorSet = (e) =>{
//     const { name, value } = e.target;
//             let iserror = {...this.state.isError };
//             switch (name) {
//                 case "name":
//                     if(value.length < 5){
//                         iserror.name="Atleast 5 characaters required";
//                     }else if(value.length > 30){
//                         iserror.name="Maximum 5 characaters required";
//                     }else{
//                         iserror.name="" ;
//                     } 
//                     alert(iserror.name);
//                     break;
//                 case "number":
//                     if(regExp.test(value)){
//                         iserror.number=regExp.test(value);
//                     }else if(iserror.number===""){
//                         iserror.number="Number can't be blank";
//                     }else{
//                         iserror.number="Invalid number";
//                     }
//                     break;
//                 case "course":
//                     if(value.length <= 0){
//                         iserror.name="Please enter course";
//                     }
//                     break;
//                 case "fees":
//                     if(regExp_number.test(value)){
//                         iserror.name=regExp_number.test(value);
//                     }else{
//                         iserror.name="Fees maximum 5 characaters  and numeric only"; 
//                     }
//                     break;
//                 case "status":
//                     if(value.length <= 3){
//                         iserror.name="Please enter valid status";
//                     }
//                     break;
//             }
// }

export default class Create extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            number:"",
            course:"",
            fees:"",
            status:""
            // is_Error:{
            //     name:"",
            //     number:"",
            //     course:"",
            //     fees:"",
            //     status:""
            // }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        const name= e.target.name;
        const value= e.target.value
        this.setState({[name]: value});
    }
    async handleSubmit(e){
        e.preventDefault();
        // if(formValid(this.state)){
        //     formErrorSet(this.state);
        // }else{
        //     console.log("Form is invalid!");
            
        // }
        // console.log("test");
        Service.newStudent(this.state);
        alert("Created successfully..!")  
        window.location.replace("http://localhost:3000")      
    }
    render(){
        // const center={
        //     padding-left "20px",
        // };
        return(
            <div className="main d-flex align-item-center justify-contant-center align-middle" >
                    <form className="form px-2 py-4 border rounded "onSubmit={this.handleSubmit} >
                        <h2>Create student</h2>
                        <div className="pt-2">
                            <div className="pb-3 text-start">
                                <label htmlFor="name" className="">Name</label>
                                <input className="input" type="text" name="name" onChange={this.handleChange}/>
                            </div>
                            <div className="text-start">
                                <label htmlFor="number" className="">Number</label>
                                <input className="input" type="text" name="number" onChange={this.handleChange}/>
                            </div>
                            <div className="text-start">
                                <label htmlFor="course" className="">Course</label>
                                <input className="input" type="text" name="course" onChange={this.handleChange}/>
                            </div>
                            <div className="text-start">
                                <label htmlFor="fees" className="">Fees</label>
                                <input className="input" type="number" name="fees" onChange={this.handleChange}/>
                            </div>
                            <div className="text-start">
                                <label htmlFor="status" className="">Status</label>
                                <input className="input" type="text" name="status" onChange={this.handleChange}/>
                            </div>
                            <div className="pt-3 d-flex flex-wrap justify-content-between">
                                <button type="submit" className="btn btn-info float-left" >Submit</button>
                                <Link to='/'><button type="button" className="btn btn-info float-left">Cancel</button></Link>
                            </div>
                        </div>
                        
                    </form>
                </div>
        );
    }
}