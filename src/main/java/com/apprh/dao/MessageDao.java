package com.apprh.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apprh.entity.Message;
import com.apprh.entity.User;


@Repository
public interface MessageDao extends JpaRepository <Message, Long> {

	List<Message> findByUserIdCapgemini(Long userId);
	 List<Message> findByUserAndVu(User user, boolean vu);
	    long countByUserAndVu(User user, boolean vu);

}
