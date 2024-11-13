package com.apprh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apprh.service.DashboardService;

@RestController
public class DashboardController {
	
	@Autowired
	private DashboardService dashboardService;
	
	
    @GetMapping("/getUserWithGenre")
    public List<Object[]> getUserWithGenre() {
        return  dashboardService.getUserWithGenre();
    }
    
    @GetMapping("/getUserWithDepartement")
    public List<Object[]> getUserWithDepartement() {
        return  dashboardService.getUserWithDepartement();
    }

    @GetMapping("/getUserWithContrat")
    public List<Object[]> getUserWithContrat() {
        return  dashboardService.getUserWithContrat();
    }
    @GetMapping("/getUserWithAge")
    public List<Object[]> getUserWithAge() {
        return  dashboardService.getUserWithAge();
    }

}
