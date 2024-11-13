package com.apprh.entity;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class TypeContrat {
	@Id
	private String nomTypeContrat;
	
	@OneToMany(mappedBy="typeContrat", fetch = FetchType.EAGER)
    private Set<Contrat> contrats;
	
	
	public String getNomTypeContrat() {
		return nomTypeContrat;
	}
	public void setNomTypeContrat(String nomTypeContrat) {
		this.nomTypeContrat = nomTypeContrat;
	}
	
	
	
}
