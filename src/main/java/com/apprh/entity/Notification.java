package com.apprh.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Notification {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idNotification;
	private String titre;
	private String message;
	private LocalDateTime date;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;
	
	private boolean vu;

	public long getIdNotification() {
		return idNotification;
	}

	public void setIdNotification(long idNotification) {
		this.idNotification = idNotification;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Boolean getVu() {
		return vu;
	}

	public void setVu(Boolean vu) {
		this.vu = vu;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}
	

}