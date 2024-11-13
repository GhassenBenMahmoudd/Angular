package com.apprh.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apprh.entity.Pointage;
import com.apprh.entity.User;

@Repository
public interface PointageDao extends JpaRepository<Pointage, Long> {
	Boolean existsByUser(User user);
    Optional<Pointage> findByUser(User user);
    Pointage findTopByUserOrderByIdPointageDesc(User user);

}
