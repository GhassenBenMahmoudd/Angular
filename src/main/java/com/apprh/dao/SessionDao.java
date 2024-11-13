package com.apprh.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.apprh.entity.Session;

@Repository
public interface SessionDao extends JpaRepository <Session, Long>{

}
