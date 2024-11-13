package com.apprh.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apprh.entity.Manager;
import com.apprh.entity.User;

@Repository
public interface ManagerDao extends JpaRepository <Manager, Long> {
	
}
