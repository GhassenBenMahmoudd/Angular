package com.apprh.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.apprh.dao.NotificationDao;
import com.apprh.dto.MessageRequest;
import com.apprh.entity.Notification;
import com.apprh.entity.User;
import com.apprh.service.NotificationService;

@RestController
public class NotificationController {
	
	@Autowired
	private NotificationService notificationService;
	
	@Autowired
	private NotificationDao notificationDao;
	
	
    @PostConstruct
    public void sendNotification() {
    	notificationService.saveNotification();
    }
	
    @PostMapping("/sendNotification")
	   public void sendNotification(@RequestBody MessageRequest request) {
	        User user = request.getUser();
	        String message = request.getMessage();
		 notificationService.sendNotification(user, message);
	 }
    
	 @GetMapping("/notification/{userId}")
	    public List<Notification> getNotifications(@PathVariable Long userId) {
	        return notificationDao.findByUserIdCapgemini(userId);
	    }
	 
	 @GetMapping("/unreadNotificationCount")
		 public int getUnreadCount() {
			 return notificationService.getUnreadCount();
		 }
	 
	 @PutMapping("/notifications/{notificationId}")
	 public Notification markNotificationAsRead(@PathVariable Long notificationId) {
		return notificationService.markNotificationAsRead(notificationId);
	 }
	 
	 @GetMapping("/listNotification")
	 @PreAuthorize("hasRole('Admin')")
	  public List<Notification> getAllNotification() {
	        return notificationService.getAllNotifications();
	    }
	 @DeleteMapping("/suppNotification/{id}")
	    public void deleteNotification(@PathVariable Long id) {
	    	notificationService.deleteNotification(id);
	    }
	 


}
