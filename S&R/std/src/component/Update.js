import React,{Component} from "react"
import $ from 'jquery'

import '../component/css/CreateStyle.css';
import Service from "../service/Service";

import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";


export default class Update extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            number:"",
            course:"",
            fees:"",
            status:""
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitUpdate = this.handleSubmitUpdate.bind(this);
    }
    
    handleChange(e){
        const name= e.target.name;
        const value= e.target.value
        this.setState({[name]: value});
    }
    async handleSubmitUpdate(e){
        e.preventDefault();

        await Service.updateStudent(this.state);
        alert("Updated successfully..!")  
        window.location.replace("http://localhost:3000")      
    }
    render(){
       
        return(
            <div className="main d-flex align-item-center justify-contant-center align-middle" >
                    <form className="form px-2 py-4 border rounded "onSubmit={this.handleSubmitUpdate} >
                        <h2>Update student</h2>
                        <div className="pt-2">
                            <div className="pb-3 text-start">
                                <label htmlFor="name" className="">Name</label>
                                <input className="input" type="text" name="name" onChange={this.handleChange} />
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
                                <button type="submit" className="btn btn-info float-left" >Update</button>
                                <Link to='/'><button type="button" className="btn btn-info float-left">Cancel</button></Link>
                            </div>
                        </div>
                        
                    </form>
                </div>
        );
    }
}