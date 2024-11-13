package com.apprh.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Pointage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idPointage;
	private LocalDateTime heureEntree;
	private LocalDateTime heureSortie;
	private double duree;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;

	public long getIdPointage() {
		return idPointage;
	}

	public void setIdPointage(long idPointage) {
		this.idPointage = idPointage;
	}


	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public LocalDateTime getHeureEntree() {
		return heureEntree;
	}

	public void setHeureEntree(LocalDateTime heureEntree) {
		this.heureEntree = heureEntree;
	}

	public LocalDateTime getHeureSortie() {
		return heureSortie;
	}

	public void setHeureSortie(LocalDateTime heureSortie) {
		this.heureSortie = heureSortie;
	}

	public double getDuree() {
		return duree;
	}

	public void setDuree(double duree) {
		this.duree = duree;
	}
	

	

}
