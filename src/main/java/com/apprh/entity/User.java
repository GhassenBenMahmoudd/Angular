package com.apprh.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.time.LocalDate;
import java.util.Date;
import java.util.Set;

@Entity
public class User {
   
	@Id
    @Column(name = "id_capgemini")
    private long idCapgemini;
    private LocalDate visaExpired;
    private LocalDate passportExpired;
    private String emailCapgemini;
    private String userFirstName;
    private String userLastName;
    private String userPassword;
    private long idPayroll;
    private String emailPerso;
    private String cin;
    private String genre;
    private Date dateNaissance;
    private String profil;
    private int expAnt;
    private int ancienneteATC;
    private String situationFamiliale;
    private int nbEnfant;
    private String diplome;
    private Date promotion;
    private String ecole;
    private long telPerso;
    private long telPro;
    private String professionalCommunity;
    private String roleFamily;
    private String jobName;
    private String Classement;
    private String skills;
    private String l1;
    private String l2;
    private String ncr;
    private String grade;
    private boolean archive;
    private String titreAdmin;
    private String newPassword;
    private String confirmNewPassword;
    
    @ManyToOne
	@JoinColumn(name="dept_id")
	private Departement departement;  
    
    @ManyToOne
	@JoinColumn(name="manager_id")
	private Manager manager;
    
    @OneToMany(mappedBy="user", fetch = FetchType.EAGER)
    private Set<Pointage> pointages;
    
    @OneToMany(mappedBy="user", fetch = FetchType.EAGER)
    private Set<Contrat> contrats;
   
    @OneToMany(mappedBy="user", fetch = FetchType.EAGER)
    private Set<Notification> notifications;
    
    @JsonIgnore
    @ManyToMany(mappedBy = "users", fetch = FetchType.EAGER)
    private Set<Session> session;
    
   
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "USER_ROLE",
            joinColumns = {
                    @JoinColumn(name = "USER_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "ROLE_ID")
            }
    )
    private Set<Role> role;
    @OneToMany(mappedBy="user", fetch = FetchType.EAGER)
    private Set<Message> messages;
    

	


	public long getIdCapgemini() {
		return idCapgemini;
	}


	public void setIdCapgemini(long idCapgemini) {
		this.idCapgemini = idCapgemini;
	}


	public LocalDate getVisaExpired() {
		return visaExpired;
	}


	public void setVisaExpired(LocalDate visaExpired) {
		this.visaExpired = visaExpired;
	}


	public LocalDate getPassportExpired() {
		return passportExpired;
	}


	public void setPassportExpired(LocalDate passportExpired) {
		this.passportExpired = passportExpired;
	}


	public String getEmailCapgemini() {
		return emailCapgemini;
	}


	public void setEmailCapgemini(String emailCapgemini) {
		this.emailCapgemini = emailCapgemini;
	}


	public String getUserFirstName() {
		return userFirstName;
	}


	public void setUserFirstName(String userFirstName) {
		this.userFirstName = userFirstName;
	}


	public String getUserLastName() {
		return userLastName;
	}


	public void setUserLastName(String userLastName) {
		this.userLastName = userLastName;
	}


	public String getUserPassword() {
		return userPassword;
	}


	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}


	public long getIdPayroll() {
		return idPayroll;
	}


	public void setIdPayroll(long idPayroll) {
		this.idPayroll = idPayroll;
	}


	public String getEmailPerso() {
		return emailPerso;
	}


	public void setEmailPerso(String emailPerso) {
		this.emailPerso = emailPerso;
	}


	public String getCin() {
		return cin;
	}


	public void setCin(String cin) {
		this.cin = cin;
	}


	public String getGenre() {
		return genre;
	}


	public void setGenre(String genre) {
		this.genre = genre;
	}


	public Date getDateNaissance() {
		return dateNaissance;
	}


	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}



	public String getProfil() {
		return profil;
	}


	public void setProfil(String profil) {
		this.profil = profil;
	}


	public int getExpAnt() {
		return expAnt;
	}


	public void setExpAnt(int expAnt) {
		this.expAnt = expAnt;
	}


	public int getAncienneteATC() {
		return ancienneteATC;
	}


	public void setAncienneteATC(int ancienneteATC) {
		this.ancienneteATC = ancienneteATC;
	}


	public String getSituationFamiliale() {
		return situationFamiliale;
	}


	public void setSituationFamiliale(String situationFamiliale) {
		this.situationFamiliale = situationFamiliale;
	}


	public int getNbEnfant() {
		return nbEnfant;
	}


	public void setNbEnfant(int nbEnfant) {
		this.nbEnfant = nbEnfant;
	}


	public String getDiplome() {
		return diplome;
	}


	public void setDiplome(String diplome) {
		this.diplome = diplome;
	}


	public Date getPromotion() {
		return promotion;
	}


	public void setPromotion(Date promotion) {
		this.promotion = promotion;
	}


	public String getEcole() {
		return ecole;
	}


	public void setEcole(String ecole) {
		this.ecole = ecole;
	}


	public long getTelPerso() {
		return telPerso;
	}


	public void setTelPerso(long telPerso) {
		this.telPerso = telPerso;
	}


	public long getTelPro() {
		return telPro;
	}


	public void setTelPro(long telPro) {
		this.telPro = telPro;
	}


	public String getProfessionalCommunity() {
		return professionalCommunity;
	}


	public void setProfessionalCommunity(String professionalCommunity) {
		this.professionalCommunity = professionalCommunity;
	}


	public String getRoleFamily() {
		return roleFamily;
	}


	public void setRoleFamily(String roleFamily) {
		this.roleFamily = roleFamily;
	}


	public String getJobName() {
		return jobName;
	}


	public void setJobName(String jobName) {
		this.jobName = jobName;
	}


	public boolean isArchive() {
		return archive;
	}


	public void setArchive(boolean archive) {
		this.archive = archive;
	}


	public String getTitreAdmin() {
		return titreAdmin;
	}


	public void setTitreAdmin(String titreAdmin) {
		this.titreAdmin = titreAdmin;
	}


	public String getNewPassword() {
		return newPassword;
	}


	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}


	public void setNotifications(Set<Notification> notifications) {
		this.notifications = notifications;
	}


	public Set<Session> getSession() {
		return session;
	}


	public void setSession(Set<Session> session) {
		this.session = session;
	}


	public Set<Role> getRole() {
		return role;
	}


	public void setRole(Set<Role> role) {
		this.role = role;
	}


	public String getConfirmNewPassword() {
		return confirmNewPassword;
	}


	public void setConfirmNewPassword(String confirmNewPassword) {
		this.confirmNewPassword = confirmNewPassword;
	}


	public String getClassement() {
		return Classement;
	}


	public void setClassement(String classement) {
		Classement = classement;
	}


	public String getSkills() {
		return skills;
	}


	public void setSkills(String skills) {
		this.skills = skills;
	}


	public String getL1() {
		return l1;
	}


	public void setL1(String l1) {
		this.l1 = l1;
	}


	public String getL2() {
		return l2;
	}


	public void setL2(String l2) {
		this.l2 = l2;
	}


	public String getNcr() {
		return ncr;
	}


	public void setNcr(String ncr) {
		this.ncr = ncr;
	}


	public String getGrade() {
		return grade;
	}


	public void setGrade(String grade) {
		this.grade = grade;
	}
	public Departement getDepartement() {
		return departement;
	}
	public void setDepartement(Departement departement) {
		this.departement = departement;
	}

	public void setManager(Manager manager) {
		this.manager = manager;
	}


    
}
