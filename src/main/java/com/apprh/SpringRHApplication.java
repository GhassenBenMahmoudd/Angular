package com.apprh;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import com.apprh.service.EmailService;

@SpringBootApplication
public class SpringRHApplication {
	

	public static void main(String[] args) {
		SpringApplication.run(SpringRHApplication.class, args);
	}

	
}

