package com.apprh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.apprh.entity.Event;
import com.apprh.service.EventService;

@RestController
public class EventController {
	
	@Autowired
	private EventService eventService;

	//Gestion des Evenements
    
    @GetMapping("/getAllEvents")
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }
    
    @PostMapping("/createEvent")
    public Event createEvent(@RequestBody Event event) {
    return eventService.saveEvent(event);
        
    }
    @DeleteMapping("/annulerEvenement/{id}")
	    @PreAuthorize("hasRole('Admin')")
	    public void deleteEvenetmentById(@PathVariable Long id) {
    	eventService.deleteEventById(id);
	    }
    
    @PutMapping("/event/{eventId}")
    public Event updateEvent(@PathVariable Long eventId,@RequestBody Event updatedEvent) {
      return eventService.updateEvent(eventId, updatedEvent);
    } 
    @GetMapping("/events/{id}")
    public Event getEventById(@PathVariable("id") long eventId){
      return eventService.getEventById(eventId);
    }
}
