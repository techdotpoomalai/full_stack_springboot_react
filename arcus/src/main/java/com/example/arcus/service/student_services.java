package com.example.arcus.service;

import java.util.List;

import com.example.arcus.model.Student;

public interface student_services {

	List<Student> getstudentdata();
	
	Student addStudent(Student stu);
	
	Student changestudentdata(Student stu, long id);
	
	void deletstudent(long id);
}
