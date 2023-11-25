package com.example.arcus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.arcus.model.Student;

@Repository
public interface Student_Repository extends JpaRepository<Student, Long>{

}
