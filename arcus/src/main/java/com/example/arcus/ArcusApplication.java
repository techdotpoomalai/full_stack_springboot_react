package com.example.arcus;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@SpringBootApplication

public class ArcusApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArcusApplication.class, args);
	}

}
