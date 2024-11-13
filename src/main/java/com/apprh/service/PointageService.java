package com.apprh.service;

import java.time.Duration;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apprh.dao.PointageDao;
import com.apprh.dao.UserDao;
import com.apprh.entity.Pointage;
import com.apprh.entity.User;

@Service
public class PointageService {
	
	@Autowired
    private UserDao userDao;
	
	 @Autowired
	 private PointageDao pointageDao;

	 @Autowired 
	 private NotificationService notificationService;
	 
//pointage Automatique 
    
    public Pointage getLastPointage(User user) {
        return pointageDao.findTopByUserOrderByIdPointageDesc(user);
    }
    
    public Pointage poinatgeEntree(Long idUtilisateur) {
    	User utilisateur = getUserById(idUtilisateur);
    	
        if (utilisateur == null) {
        	throw new RuntimeException("user not found");
        }
        Pointage pointage = new Pointage();
        pointage.setHeureEntree(LocalDateTime.now());
        pointage.setUser(utilisateur);
        
        if (pointage.getHeureEntree().toLocalTime().isAfter(LocalTime.of(21, 00)) || pointage.getHeureEntree().toLocalTime().isBefore(LocalTime.of(07, 00))) {
			
        	String message = "est entré en dehors les heures de travail.";
            notificationService.sendNotification(utilisateur, message);
	            return pointageDao.save(pointage);
   	    }
        return pointageDao.save(pointage);
    }
    
    public Pointage pointageSortie(Long idUtilisateur) {
    	User user = userDao.findById(idUtilisateur).orElse(null);
	    Pointage dernierPointage = getLastPointage(user);
	
        if (dernierPointage == null || dernierPointage.getHeureSortie() != null) {
    	    throw new RuntimeException("Impossible de pointer la sortie : le dernier pointage est inexistant ou a déjà été pointé.");
    	}

        dernierPointage.setHeureSortie(LocalDateTime.now());
        Duration duree = Duration.between(dernierPointage.getHeureEntree(), dernierPointage.getHeureSortie());
        double tempsTravail = duree.toMinutes() / 60.0;
        dernierPointage.setDuree(tempsTravail);
        
        if (dernierPointage.getHeureSortie().toLocalTime().isAfter(LocalTime.of(21, 00)) || dernierPointage.getHeureSortie().toLocalTime().isBefore(LocalTime.of(07, 00))) {
		
        	String message = "est sorti en dehors les heures de travail.";
            notificationService.sendNotification(user, message);
	            return pointageDao.save(dernierPointage);
   	      }
    
        return pointageDao.save(dernierPointage);
    }
    //pointage manuel
    public Pointage createPointage(Pointage pointage) { 
    	User user=pointage.getUser();
        pointage.setHeureEntree(pointage.getHeureEntree());
        pointage.setHeureSortie(pointage.getHeureSortie());
        pointage.setUser(user);
        Duration duree = Duration.between(pointage.getHeureEntree(), pointage.getHeureSortie());
        double tempsTravail = duree.toMinutes() / 60.0;
        pointage.setDuree(tempsTravail);
        return pointageDao.save(pointage);
    }
    
    public List<Pointage> getAllPointages() {
        return pointageDao.findAll();
    }

    public void deletePointageById(Long id) {
    	pointageDao.deleteById(id);
    }
    
    public Pointage getPointageById(long pointageId) {
        return pointageDao.findById(pointageId).get();
    }
    public User getUserById(long userId) {
        return userDao.findById(userId).get();
      }
}
