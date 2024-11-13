package com.apprh.dto;

import com.apprh.entity.User;

public class MessageRequest {
	private User user;
    private String message;

    // Getters and setters

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
