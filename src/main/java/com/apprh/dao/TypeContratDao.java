package com.apprh.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apprh.entity.TypeContrat;

@Repository
public interface TypeContratDao extends JpaRepository <TypeContrat, String>{

}
