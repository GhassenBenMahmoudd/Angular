package com.apprh.entity;
import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;


@Entity
public class Formation {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long idFormation;
private String libelle;
private String sujet;

@OneToMany(mappedBy="formation", fetch = FetchType.EAGER)
private Set<Session> sessions;

public Long getIdFormation() {
	return idFormation;
}

public void setIdFormation(Long idFormation) {
	this.idFormation = idFormation;
}

public String getLibelle() {
	return libelle;
}

public void setLibelle(String libelle) {
	this.libelle = libelle;
}

public String getSujet() {
	return sujet;
}

public void setSujet(String sujet) {
	this.sujet = sujet;
}

public Set<Session> getSessions() {
	return sessions;
}

public void setSessions(Set<Session> sessions) {
	this.sessions = sessions;
}
}
