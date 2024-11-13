package com.apprh.service;

import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apprh.dao.MessageDao;
import com.apprh.dao.UserDao;
import com.apprh.entity.Message;
import com.apprh.entity.Notification;
import com.apprh.entity.User;

@Service
public class MessageService {
	
	@Autowired
	private UserDao userDao;
	@Autowired
	private MessageDao messageDao;

	public void sendMessage(User user, String message) {
        Message msg = new Message();
        msg.setReceiver(user);
        msg.setMsg(message);
        msg.setVu(false);
        msg.setDate(LocalDateTime.now());
        messageDao.save(msg);
    }
	@Transactional
    public Message markMessageAsRead(Long msgId) {
        Message msg = messageDao.findById(msgId).orElseThrow(() -> new RuntimeException("message not found"));
        msg.setVu(true);
        return messageDao.save(msg);
    }
	
    @Transactional
    public long getUnreadCount(Long userId) {
        User user = userDao.findById(userId).orElse(null);
        if (user == null) {
            throw new IllegalArgumentException("Invalid user id");
        }
        return messageDao.countByUserAndVu(user, false);
    }
    
    public List<Message> getMessages( Long userId) {
        return messageDao.findByUserIdCapgemini(userId);
    }
    public void deleteMessage(Long id) {
    	messageDao.deleteById(id);
    }
	
}
