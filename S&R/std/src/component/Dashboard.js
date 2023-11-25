import React  from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAdd, faExchange, faTrash, faDeleteLeft, faPen } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

import '../component/css/DashboardStyle.css';
import Create from './Create';

import Service from '../service/Service';


class Dashboard extends React.Component{
    constructor(){
        super()
        this.state = {
            student:[]
        }
        this.createComponent = this.createComponent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
    }
  
    async componentDidMount(){
        await Service.getStudent()
           .then((res) =>{
                console.log(res.data);
                this.setState({
                    student:res.data
                });
                console.log(this.state.student)
            })
            .catch(err =>{
                // console.log(err);
                
            })
    
    }  
    async createComponent() {
        await Service.createComponent();
    }
    async deleteStudent(id){
        await Service.deleteStudent(String(id));
        alert("deleted succefully...")
        window.location.replace("http://localhost:3000");
    }
    async updateStudent(id){
        window.update_id=id;
    }
    render(){
        return(
            <div>
                <div className='head_ py-4' >
                    <h2>Local Tech Service</h2>
                </div>
                <div className='body_ px-1'>
                    <Card style={{}}>
                        <Card.Body>
                            <Card.Title className='py-3'>student details</Card.Title>
                            <div className='pos create_button'>
                                <Link to="/add"><p className='btn btn-dark '>Add<span><FontAwesomeIcon icon={faAdd}/></span></p></Link>
                            </div>
                            
                            <table class="table table-bordered">
                                <thead> 
                                                                       
                                    <tr>
                                        <th>Name</th>
                                        <th>Number</th>
                                        <th>Course</th>
                                        <th>Fees</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.student.map(stu => {
                                            <tr>
                                                <td>{stu.name}</td>
                                                <td>{stu.number}</td>
                                                <td>{stu.course}</td>
                                                <td>{stu.fees}</td>
                                                <td>{stu.status}</td>
                                                <td className='icon'>
                                                    <Link to='/update'><span className='px-4' onClick={this.updateStudent.bind(this, stu.id)}><FontAwesomeIcon icon={faPen}/></span></Link>
                                                    <span className='px-4' onClick={this.deleteStudent.bind(this,stu.id)}><FontAwesomeIcon icon={faTrash}/></span>
                                                </td>
                                            </tr>
                                    }    
                                    )}
                                </tbody>
                            </table>     
                       
                        </Card.Body>
                </Card>
                </div>
                {/* <div id="create">
                    <Create/>
                </div> */}
                
            </div>
        );
    }
}
export default Dashboard;