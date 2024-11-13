package com.apprh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.apprh.entity.Message;
import com.apprh.entity.User;
import com.apprh.service.MessageService;

@RestController
public class MessageController {
	
	@Autowired
    private MessageService messageService;
	
	//Gestion des messages
    @GetMapping("/message/{userId}")
    public List<Message> getMessage(@PathVariable Long userId ){
    	return messageService.getMessages(userId);
    }
    
    @PostMapping("/sendMessage")
    public void sendMessage(@RequestBody Message message) {
        User user = message.getUser();
        String msg = message.getMsg();
    	 messageService.sendMessage(user, msg);
    }
    @PutMapping("/markMessageAsRead/{messageId}")
    public Message markMessageAsRead(@PathVariable Long messageId) {
    	return messageService.markMessageAsRead(messageId);
    }
    
    @GetMapping("/getUnreadCount/{userId}")
    public long getUnreadCount(@PathVariable Long userId) {
    	return messageService.getUnreadCount(userId);
    }
    @DeleteMapping("/suppMessage/{id}")
    public void deleteMessage(@PathVariable Long id) {
    	messageService.deleteMessage(id);
    }
}
