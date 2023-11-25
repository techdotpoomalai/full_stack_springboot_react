package com.example.arcus.serviceimplement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.arcus.model.Student;
import com.example.arcus.repository.Student_Repository;
import com.example.arcus.service.student_services;

@Service
public class serviceimplement implements student_services {
	
	@Autowired
	private Student_Repository stu_repo;
	
	public serviceimplement(Student_Repository stu_repo) {
		super();
		this.stu_repo = stu_repo;
	}

	@Override
	public List<Student> getstudentdata() {
		// TODO Auto-generated method stub
		return stu_repo.findAll();
		
	}

	@Override
	public Student addStudent(Student stu) {
		// TODO Auto-generated method stub
		
		return stu_repo.save(stu);
	}

	@Override
	public Student changestudentdata(Student stu, long id) {
		// TODO Auto-generated method stub
		Student student=stu_repo.findById(id).orElseThrow();
		student.setName(stu.getName());
		student.setNumber(stu.getNumber());
		student.setCourse(stu.getCourse());
		student.setFees(stu.getFees());
		student.setStatus(stu.getStatus());
		stu_repo.save(student);
		return student;
	}

	@Override
	public void deletstudent(long id) {
		// TODO Auto-generated method stub
		stu_repo.deleteById(id);
	}

	

}
