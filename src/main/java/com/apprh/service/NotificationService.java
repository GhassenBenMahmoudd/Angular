package com.apprh.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apprh.dao.ContratDao;
import com.apprh.dao.NotificationDao;
import com.apprh.dao.UserDao;
import com.apprh.entity.Contrat;
import com.apprh.entity.Notification;
import com.apprh.entity.User;

@Service
public class NotificationService {
	
	@Autowired
    private UserDao userDao;
	@Autowired
    private NotificationDao notificationDao;
	
	@Autowired
	private ContratDao contratDao;

	//Gestion des notification
	 public void sendNotification(User user, String message) {
	        Notification notification = new Notification();
	        notification.setUser(user);
	        notification.setMessage(message);
	        notification.setVu(false);
	        notification.setDate(LocalDateTime.now());
	        notificationDao.save(notification);
	    }
	
    public void saveNotification() {
    	List<User> users=userDao.findAll();
    	LocalDate now = LocalDate.now();
        LocalDate oneWeekFromNow = now.plusDays(7);
    	for (User user : users) {
    		
        	if (user.getVisaExpired()!=null && user.getVisaExpired().isBefore(oneWeekFromNow)) {
        		 
        	     String message = "visa va expiré aprés une semaine";
                 sendNotification(user, message);
        		}
        	if (user.getPassportExpired()!=null && user.getPassportExpired().isBefore(oneWeekFromNow)) {
       			
    	         String message = "Passport va expiré aprés une semaine";
                 sendNotification(user, message);
    		    }
    	}
    	List<Contrat> contrats = contratDao.findAll();
    	for (Contrat contrat : contrats) {
        	if (contrat.getEndDate()!=null && contrat.getEndDate().isBefore(oneWeekFromNow)) {
        		String message = "contrat va expiré aprés une semaine";
                sendNotification(contrat.getUser(), message);
        	}
    	}
        }
	
    public void deleteNotification(Long id) {
    	notificationDao.deleteById(id);
    }
    @Transactional
    public Notification markNotificationAsRead(Long notificationId) {
        Notification notification = notificationDao.findById(notificationId).orElseThrow(() -> new RuntimeException("Notification not found"));
        notification.setVu(true);
        return notificationDao.save(notification);
    }
    @Transactional
    public int getUnreadCount() {
       return notificationDao.countByVu(false);
    }
    public List<Notification> getAllNotifications() {
        return notificationDao.findAll();
    }
    

}
