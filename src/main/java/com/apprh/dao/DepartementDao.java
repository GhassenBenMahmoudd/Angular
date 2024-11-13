package com.apprh.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apprh.entity.Departement;

@Repository
public interface DepartementDao extends JpaRepository <Departement, String> {

}
