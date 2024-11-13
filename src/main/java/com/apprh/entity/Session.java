package com.apprh.entity;

import java.sql.Date;
import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;


@Entity
public class Session {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idSession;
	private String nomSession;
	private Date dateDebut;
	private Date dateFin;
	private String nomFormateur;
	
	@ManyToMany
	@JoinTable(name = "employe_session",
	    joinColumns = @JoinColumn(name = "Session_ID"),
	    inverseJoinColumns = @JoinColumn(name = "User_ID"))

	private Set<User> users;
	
	@ManyToOne
	@JoinColumn(name="formation_id")
	private Formation formation;
	
	public long getIdSession() {
		return idSession;
	}
	public void setIdSession(long idSession) {
		this.idSession = idSession;
	}
	public Date getDateDebut() {
		return dateDebut;
	}
	public void setDateDebut(Date dateDebut) {
		this.dateDebut = dateDebut;
	}
	public Date getDateFin() {
		return dateFin;
	}
	public void setDateFin(Date dateFin) {
		this.dateFin = dateFin;
	}
	/*public Set<Jour> getJours() {
		return jours;
	}
	public void setJours(Set<Jour> jours) {
		this.jours = jours;
	}
	*/
	public void setFormation(Formation formation) {
		this.formation = formation;
	}
	public String getNomSession() {
		return nomSession;
	}
	public void setNomSession(String nomSession) {
		this.nomSession = nomSession;
	}
	public Set<User> getUsers() {
		return users;
	}
	public void setUsers(Set<User> users) {
		this.users = users;
	}
	public String getNomFormateur() {
		return nomFormateur;
	}
	public void setNomFormateur(String nomFormateur) {
		this.nomFormateur = nomFormateur;
	}
	
	
	

	
}
