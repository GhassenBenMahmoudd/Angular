package com.apprh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.apprh.dao.ManagerDao;
import com.apprh.entity.Manager;
import com.apprh.entity.User;
import com.apprh.service.ManagerService;
@RestController
public class ManagerController {
	
	@Autowired
	private ManagerService managerService;
	@Autowired 
	private ManagerDao managerDao;
	 
	 @GetMapping({"/getUsersByManager/{manager_id}"})
	    public List<User> getUsersByManager(@PathVariable Long manager_id) {
		 
	        return managerService.getUsersByManager(manager_id);
	 }
	 @GetMapping("/getAllManager")
	    @PreAuthorize("hasRole('Admin') or hasRole('Opérateur RH') ")
	    public List<Manager> getAllManager() {
	        return managerDao.findAll();
	    }
	 @GetMapping("/managers/{id}")
	 public Manager getDepartementById(@PathVariable("id") long idDept) {
	        return managerDao.findById(idDept).get();
	     }
}
