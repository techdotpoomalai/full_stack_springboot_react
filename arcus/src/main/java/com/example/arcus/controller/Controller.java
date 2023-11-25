package com.example.arcus.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.arcus.model.Student;
//import com.example.arcus.repository.Student_Repository;
import com.example.arcus.service.student_services;

@CrossOrigin(origins = "*")
@RestController

//@RequestMapping("/api")
public class Controller {
	
	@Autowired
	private student_services stu_serv;
	
	public Controller(student_services stu_serv) {
		super();
		this.stu_serv = stu_serv;
	}

	@GetMapping("/test")
	public String service_test() {
		return "Test pass";
		
	}
	
	@GetMapping("/getall")
	public List<Student> getStudent() {
		
		return stu_serv.getstudentdata();		
	}
	
	@PostMapping("/new")
	public Student newStudent(@RequestBody Student stu) {
		return stu_serv.addStudent(stu);		
	}
	
	@PutMapping("/update/{id}")
	public Student updateStudent(@RequestBody Student stu, @PathVariable ("id") long id) {
		return stu_serv.changestudentdata(stu, id);		
	}
	
	@DeleteMapping("delete/{id}")
	public Boolean deleteStudent(@PathVariable("id") long id) {
		 stu_serv.deletstudent(id);
		return true;
		
	}
}
