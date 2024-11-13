package com.apprh.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.apprh.entity.Formation;
@Repository
public interface FormationDao extends JpaRepository <Formation, Long>{
	@Query("SELECT f FROM Formation f JOIN FETCH f.sessions WHERE f.idFormation = :id")
	  Formation findByIdWithSessions(@Param("id") Long id);
	
	
}
