package com.apprh.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apprh.entity.Event;

@Repository
public interface EventDao extends JpaRepository <Event, Long>{

}
