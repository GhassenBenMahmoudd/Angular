package com.apprh;

import static org.junit.Assert.*;

import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.apprh.entity.User;
import com.apprh.dao.NotificationDao;
import com.apprh.entity.Event;
import com.apprh.entity.Formation;
import com.apprh.entity.Notification;
import com.apprh.service.EventService;
import com.apprh.service.FormationService;
import com.apprh.service.NotificationService;
import com.apprh.service.UserService;

@SpringBootTest
class SpringRHApplicationTests {

	@Autowired
	private UserService userService;
	@Autowired
	private EventService eventService;
	@Autowired
	private FormationService formationService;
	@Autowired
	private NotificationService notificationService;
	@Autowired
	private NotificationDao notificationDao;
  
 /*@Test
    public void testGetUsers() {
        List<User> users =  userService.getAllUser();
        Assertions.assertThat(users).isNotEmpty();
    }
    @Test
    public void testAddUser() {
        int nbrOfUserBeforInsert = userService.getAllUser().size();
        User user = new User();
        user.setIdCapgemini(25);
        user.setUserFirstName("testAdmin");
        user.setUserLastName("testAdmin");
        user.setEmailCapgemini("testAdmin@gmail.com");
        user.setEmailPerso("testAdmin@gmail.com");
        user.setEndDate(LocalDate.of(2023, 5, 5));
        user.setVisaExpired(LocalDate.of(2023, 5, 5));
        user.setPassportExpired(LocalDate.of(2023, 5, 5));
        User userAfterInsert = userService.registerNewUser(user);
        System.out.println("employé ajouté avec succés");
        int nbrOfUserAfterInsert = userService.getAllUser().size();
        System.out.println(" le nombre des employés avant l'insertion d'un nouveau employé est :" + nbrOfUserBeforInsert);
        assertEquals(nbrOfUserBeforInsert +1 ,nbrOfUserAfterInsert );
        System.out.println(" le nombre des employés aprés l'insertion d'un nouveau employé est :" +nbrOfUserAfterInsert);
    }


    	@Test
	    public void testUpdateUser(){
	        User userAfterInsert = userService.getUserById(6);
	        System.out.println("l'ancienne valeur de l'attribut école est :"+userAfterInsert.getEcole());
	        userAfterInsert.setEcole("ISET");
	        userService.updateUser(userAfterInsert);
	        System.out.println("l'ancienne valeur de l'attribut école est modifié par cette valeur :"+userAfterInsert.getEcole());
	        assertTrue(userAfterInsert.getUserLastName().equals("testAdminUpdate"));
	    }
    
    @Test
    public void testArchiveUser(){
        User user = new User();
        user.setIdCapgemini(30);
        user.setUserFirstName("testAdmin");
        user.setUserLastName("testAdmin");
        user.setEmailCapgemini("testAdmin@gmail.com");
        user.setEmailPerso("testAdmin@gmail.com");
        user.setEndDate(LocalDate.of(2023, 5, 5));
        user.setVisaExpired(LocalDate.of(2023, 5, 5));
        user.setPassportExpired(LocalDate.of(2023, 5, 5));
        User userSave = userService.registerNewUser(user);
        int nbrOfUserBeforeDelete = userService.getAllUser().size();
        userService.archivePersonne(userSave.getIdCapgemini());
        int nbrOfUserAfterDelete = userService.getAllUser().size();
        assertEquals(nbrOfUserBeforeDelete  ,nbrOfUserAfterDelete );


    }

	/*
	@Test
    public void testAthenticate() throws Exception {
        // Create a JwtRequest object with valid credentials
        JwtRequest jwtRequest = new JwtRequest("testEmailCapgemini", "testUserPassword");

        // Convert the JwtRequest object to JSON
        ObjectMapper objectMapper = new ObjectMapper();
        String json = objectMapper.writeValueAsString(jwtRequest);

        // Perform a POST request to the /authenticate endpoint with the JSON payload
        mockMvc.perform(post("/authenticate")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token").isNotEmpty())
                .andExpect(jsonPath("$.username").value(jwtRequest.getEmailCapgemini()));
    }
    

    	@Test
	    public void testGetAllFormations() {
	        List<Formation> formations =  formationService.getAllFormations();
	        Assertions.assertThat(formations).isNotEmpty();
	    }
	
	    @Test
	    public void testAddFormation() {
	        int nbrOfFormationBeforInsert = formationService.getAllFormations().size();
	        Formation formation = new Formation();
	        formation.setLibelle("testFormation");;
	        formation.setSujet("testSujetFormation");
	        Formation formationAfterInsert = formationService.saveFormation(formation);
	        System.out.println("formation ajouté avec succés");
	        int nbrOfFormationsAfterInsert = formationService.getAllFormations().size();
	        System.out.println(" le nombre des formations avant l'insertion d'une nouvelle formation est :" + nbrOfFormationBeforInsert);
	        assertEquals(nbrOfFormationBeforInsert +1 ,nbrOfFormationsAfterInsert );
	        System.out.println(" le nombre des formations aprés l'insertion d'un nouvelle formation est :" +nbrOfFormationsAfterInsert);
	    }
	    


@Test
    public void testGetAllNotification() {
        List<Notification> notfications =  notificationService.getAllNotifications();
        Assertions.assertThat(notfications).isNotEmpty();
    }}
	 
	@Test
	    public void testDeleteNotification(){
		 	User user=userService.getUserById(1);	 
	        Notification notification = new Notification();
	        notification.setMessage("test message notification");
	        notification.setTitre("testDeleteNotification");
	        notification.setUser(user);
	        Notification notificationSave = notificationDao.save(notification);
	        int nbrOfNotificationBeforeDelete = notificationService.getAllNotifications().size();
	        notificationService.deleteNotification(notificationSave.getIdNotification());
	        int nbrOfNotificationAfterDelete = notificationService.getAllNotifications().size();
	        System.out.println(" le nombre des notifications avant la suppression d'une notification est :" 
	        + nbrOfNotificationBeforeDelete);
	        assertEquals(nbrOfNotificationBeforeDelete -1 ,nbrOfNotificationAfterDelete );
	        System.out.println(" le nombre des notifications aprés la suppression de la notification est :" + nbrOfNotificationAfterDelete);
	 	}/*

	 @Test
	    public void testGetAllEvent() {
	        List<Event> events =  eventService.getAllEvents();
	        Assertions.assertThat(events).isNotEmpty();
	    
	    @Test
	    public void testAddEvent() {
	        int nbrOfEventBeforInsert = eventService.getAllEvents().size();
	        Event event = new Event();
	        event.setTitle("sortie en groupe");
	        event.setStart(new Date(2023 - 1900, 5, 5));
	        event.setEnd(new Date(2023 - 1900, 6, 5));
	        Event eventAfterInsert = eventService.saveEvent(event);
	        System.out.println("Evènement ajouté avec succés");
	        int nbrOfEventAfterInsert = eventService.getAllEvents().size();
	        System.out.println(" le nombre des évenements avant l'insertion d'un nouveau évenement est :" + nbrOfEventBeforInsert);
	        assertEquals(nbrOfEventBeforInsert +1 ,nbrOfEventAfterInsert );
	        System.out.println(" le nombre des évenements aprés l'insertion d'un nouveau évenement est :" +nbrOfEventAfterInsert);
	    }
*/
		@Test
	    public void testExportReport() throws Exception {
	        Path reportPath = userService.exportReport();
	        assertNotNull(reportPath);
	        System.out.println("le chemin n'est pas null");
	        assertTrue(Files.exists(reportPath));
	        System.out.println("le fichier du rapport existe dans : "+reportPath);
	    }
	
}