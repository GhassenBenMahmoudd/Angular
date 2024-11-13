package com.apprh.entity;

import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Manager extends User{
	
	
	@OneToMany(mappedBy="manager", fetch = FetchType.EAGER)
	    private List<User> users;

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	public  Manager(List<User> users) {
		
		this.users = users;
	}
	public Manager() {}

}
