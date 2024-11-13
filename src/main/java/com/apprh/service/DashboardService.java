package com.apprh.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apprh.dao.UserDao;

@Service
public class DashboardService {
	
	@Autowired
	private UserDao userDao;

	//dashboard
    public List<Object[]> getUserWithGenre() {

        return userDao.getUserWithGenre();
    }
    public List<Object[]> getUserWithContrat() {

        return userDao.countByTypeContrat();
    }
    
    public List<Object[]> getUserWithDepartement(){
    	return userDao.getUserByDepartement();
    }
    public List<Object[]> getUserWithAge(){
    	return userDao.getUserWithAge();
    }
}
