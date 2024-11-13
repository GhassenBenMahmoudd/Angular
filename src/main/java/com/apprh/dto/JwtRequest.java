package com.apprh.dto;

public class JwtRequest {

    private String emailCapgemini;
    private String userPassword;

    public String getEmailCapgemini() {
        return emailCapgemini;
    }

    public void setEmailCapgemini(String emailCapgemini) {
        this.emailCapgemini = emailCapgemini;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }
}
