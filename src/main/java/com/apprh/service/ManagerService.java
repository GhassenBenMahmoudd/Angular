package com.apprh.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.apprh.dao.ManagerDao;
import com.apprh.dao.UserDao;
import com.apprh.entity.Manager;
import com.apprh.entity.User;

@Service
public class ManagerService {
	
	@Autowired
	private ManagerDao managerDao;

	
	@Autowired
    private PasswordEncoder passwordEncoder;
	
	
	 public Manager registerNewManager(Manager manager) {
	        return managerDao.save(manager);
	    }
	 
	 public String getEncodedPassword(String password) {
	        return passwordEncoder.encode(password);
	    }

	public List<User> getUsersByManager(Long manager_id) {
		List<User> users = new ArrayList();
		 Manager manager = managerDao.findById(manager_id).orElse(null);
		  for (User user : manager.getUsers()) {
		        users.add(user);
		    }
		 return users;
	}

	
}
