package com.apprh.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Message {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idMessage;
	private String msg;
	private LocalDateTime date;
	private boolean vu;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;

	
	public long getIdMessage() {
		return idMessage;
	}
	public void setIdMessage(long idMessage) {
		this.idMessage = idMessage;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public User getUser() {
		return user;
	}
	public void setReceiver(User receiver) {
		this.user = receiver;
	}
	public LocalDateTime getDate() {
		return date;
	}
	public void setDate(LocalDateTime date) {
		this.date = date;
	}
	public boolean isVu() {
		return vu;
	}
	public void setVu(boolean vu) {
		this.vu = vu;
	}
	
	
	

}
