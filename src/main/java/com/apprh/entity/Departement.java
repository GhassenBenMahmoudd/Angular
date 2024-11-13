package com.apprh.entity;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Departement {
	
	@Id
	private String nomDept;
	
	@OneToMany(mappedBy="departement", fetch = FetchType.EAGER)
    private Set<User> users;

	public String getNomDept() {
		return nomDept;
	}

	public void setNomDept(String nomDept) {
		this.nomDept = nomDept;
	}

	

	public void setUsers(Set<User> users) {
		this.users = users;
	}
	
	

}
