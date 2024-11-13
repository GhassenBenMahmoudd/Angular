package com.apprh.dto;
import lombok.Data;
@Data
public class MailRequest {
	private String name;
	private String emailPerso;
	private String from;
	private String subject;
	private String emailCapgemini;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmailPerso() {
		return emailPerso;
	}
	public void setEmailPerso(String emailPerso) {
		this.emailPerso = emailPerso;
	}
	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getEmailCapgemini() {
		return emailCapgemini;
	}
	public void setEmailCapgemini(String emailCapgemini) {
		this.emailCapgemini = emailCapgemini;
	}

}
