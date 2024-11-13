package com.apprh.service;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apprh.dao.EventDao;
import com.apprh.entity.Event;

@Service
public class EventService {

//gestion des evenements
	
	@Autowired
    private EventDao eventDao;
    
    public List<Event> getAllEvents() {
        return eventDao.findAll();
    }
    public Event saveEvent(Event event) { 
        return eventDao.save(event);
    }
    
    public Event updateEvent(Long eventId,Event updatedEvent) {
        Event event = eventDao.findById(eventId).orElse(null);
        event.setTitle(updatedEvent.getTitle());
        event.setStart(updatedEvent.getStart());
        event.setEnd(updatedEvent.getEnd());
        return eventDao.save(event);
      } 
    
    public Event getEventById(long eventId) {
        return eventDao.findById(eventId).get();
     }
    public void deleteEventById(Long id) {
        Event event = eventDao.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Event with id " + id + " not found"));
        eventDao.delete(event);
    }
    
    
   
}
