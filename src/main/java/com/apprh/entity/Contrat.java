package com.apprh.entity;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Contrat {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idContrat;
	private LocalDate startDate;
	private LocalDate endDate;
	private long salaire;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;
	
	@ManyToOne
	@JoinColumn(name="type_contrat")
	private TypeContrat typeContrat;
	


	public long getIdContrat() {
		return idContrat;
	}

	public void setIdContrat(long idContrat) {
		this.idContrat = idContrat;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public long getSalaire() {
		return salaire;
	}

	public void setSalaire(long salaire) {
		this.salaire = salaire;
	}

	public TypeContrat getTypeContrat() {
		return typeContrat;
	}

	public void setTypeContrat(TypeContrat typeContrat) {
		this.typeContrat = typeContrat;
	}

	@Override
	public String toString() {
		return "Contrat [idContrat=" + idContrat + ", startDate=" + startDate + ", endDate=" + endDate + ", salaire="
				+ salaire + ", user=" + user + ", typeContrat=" + typeContrat + "]";
	}

	

	

	
}
