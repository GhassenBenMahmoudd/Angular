package com.apprh.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.apprh.dao.FormationDao;
import com.apprh.dto.MailResponse;
import com.apprh.entity.Formation;
import com.apprh.entity.Session;
import com.apprh.service.EmailService;
import com.apprh.service.FormationService;

@RestController
public class FormationController {
	
	 @Autowired
	    private FormationDao formationDao;
	 
	  @Autowired
	    private FormationService formationService;
	  
	  @Autowired
		private EmailService emailService;
	 
	//Gestion des formations
	    @PostMapping("/createFormation")
	    @PreAuthorize("hasRole('Admin') or hasRole('Opérateur RH')")
	    public Formation createFormation(@RequestBody Formation formation) {
	    	formationService.saveFormation(formation);
	    	return formation;  
	    }
	    @GetMapping("/listFormation")
	    public List<Formation> getAllFormations() {
	        return formationService.getAllFormations();
	    }

	    @GetMapping("/getFormationById/{id}")
	    public ResponseEntity<Formation> getFormationById(@PathVariable Long id) {
	        Optional<Formation> formation = formationService.getFormationById(id);
	        return formation.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	    }
	    @DeleteMapping("/annulerFormation/{id}")
	    @PreAuthorize("hasRole('Admin')")
	    public void deleteFormationById(@PathVariable Long id) {
	        formationService.deleteFormationById(id);
	    }
	    
	    @PutMapping("/formations/{formationId}")
	    public Formation updateFormation(@PathVariable Long formationId,@RequestBody Formation updatedFormation) {

	      Formation formation = formationDao.findById(formationId).orElse(null);

	      formation.setLibelle(updatedFormation.getLibelle());
	      formation.setSujet(updatedFormation.getSujet());

	      return formationDao.save(formation);
	    }
	 

	    @PostMapping("/sendingEvalchaud")
		public MailResponse sendEvalchaud(@RequestBody String emailCapgemini) {
			Map<String, Object> model = new HashMap<>();
			return emailService.sendEvalchaud(emailCapgemini, model);

		}
	    
	    @PostMapping("/sendingEvalfroid")
	    public void sendEvalfroid(@RequestBody String emailCapgemini) {
	        ScheduledExecutorService executor = Executors.newScheduledThreadPool(1);
	        executor.schedule(() -> {
	            Map<String, Object> model = new HashMap<>();
	            emailService.sendEvalfroid(emailCapgemini, model);
	        }, 40, TimeUnit.DAYS);
	    }

	    
	  //Gestion des Sessions
	    @PostMapping("/formations/{formationId}/sessions")
	    public Formation addSessionToFormation(@PathVariable Long formationId,@RequestBody Session session) {
	      return formationService.addSessionToFormation(formationId, session);
	    }
	    @DeleteMapping("/formations/{formationId}/sessions/{sessionId}")
	    public Formation removeSessionFromFormation(@PathVariable Long formationId,@PathVariable Long sessionId) {
	      return formationService.removeSessionFromFormation(formationId, sessionId);
	    }
	    @GetMapping("/formations/{formationId}/sessions")
	    public Set<Session> getSessionsByFormation(@PathVariable Long formationId) {
	      return formationService.getSessionsByFormation(formationId);
	    }
	    @PutMapping("/sessions/{sessionId}")
	    public Session updateSession(@PathVariable Long sessionId,@RequestBody Session updatedSession) {

	      return formationService.updateSession(sessionId, updatedSession);
	    }
	    @GetMapping("/getSessionById/{id}")
	    public ResponseEntity<Session> getSessionById(@PathVariable Long id) {
	        Optional<Session> session = formationService.getSessionById(id);
	        return session.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	    }

}
