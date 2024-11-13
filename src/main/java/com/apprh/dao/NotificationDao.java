package com.apprh.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apprh.entity.Notification;

@Repository
public interface NotificationDao extends JpaRepository<Notification, Long>{
	List<Notification> findByUserIdCapgemini(Long userId);

	int countByVu(boolean b);

}

