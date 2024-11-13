package com.apprh.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apprh.entity.Contrat;

@Repository
public interface ContratDao extends JpaRepository <Contrat, Long>{

}
