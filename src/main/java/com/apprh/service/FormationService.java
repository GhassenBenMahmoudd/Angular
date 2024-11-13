package com.apprh.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import javax.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.apprh.dao.FormationDao;
import com.apprh.dao.SessionDao;
import com.apprh.entity.Formation;
import com.apprh.entity.Session;

@Service
public class FormationService {
	
	@Autowired
	private FormationDao formationDao;
	
	@Autowired
	private SessionDao sessionDao;
	
	public Formation saveFormation(Formation formation) { 
        return formationDao.save(formation);
    }
	
    public List<Formation> getAllFormations() {
        return formationDao.findAll();
    }

    public Optional<Formation> getFormationById(Long id) {
        return formationDao.findById(id);
    }
    
    public void deleteFormationById(Long id) {
        Formation formation = formationDao.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Formation with id " + id + " not found"));
        sessionDao.deleteAll(formation.getSessions());
        formationDao.delete(formation);
    }
    
    //Gestion des sessions
    public Optional<Session> getSessionById(Long id) {
        return sessionDao.findById(id);
    }
   
    public Formation addSessionToFormation(Long formationId, Session session) {

      Formation formation = formationDao.findById(formationId).orElse(null);

      session.setFormation(formation);
      sessionDao.save(session);

      formation.getSessions().add(session);
      formationDao.save(formation);

      return formation;
    }
    
    public Formation removeSessionFromFormation(Long formationId, Long sessionId) {
      Formation formation = formationDao.findById(formationId).orElse(null);
      Session session = sessionDao.findById(sessionId).orElse(null);
      
      formation.getSessions().remove(session);
      
      sessionDao.delete(session);
      formationDao.save(formation);
      
      return formation;
    }
    
    public Set<Session> getSessionsByFormation(Long formationId) {
      Formation formation = formationDao.findById(formationId).orElse(null);
      return formation.getSessions();
    }
    
    public Session updateSession(Long sessionId, Session updatedSession) {

      Session session = sessionDao.findById(sessionId).orElse(null);

      session.setDateDebut(updatedSession.getDateDebut());
      session.setDateFin(updatedSession.getDateFin());
      session.setNomFormateur(updatedSession.getNomFormateur());
      session.setNomSession(updatedSession.getNomSession());
      session.setUsers(updatedSession.getUsers());

      return sessionDao.save(session);
    }
    
}
