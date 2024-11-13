package com.apprh.dao;

import com.apprh.entity.User;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<User, Long> {
	
	Optional<User> findByEmailCapgemini(String emailCapgemini);
	
	Optional<User> findByEmailPerso(String emailPerso);
	

	//Dashboard
	@Query("SELECT user.genre , COUNT(user) FROM User user GROUP BY user.genre")
	List<Object[]> getUserWithGenre();
	
	@Query("SELECT t.nomTypeContrat, COUNT(c) FROM TypeContrat t JOIN t.contrats c GROUP BY t.nomTypeContrat")
	List<Object[]> countByTypeContrat();

	
	@Query("SELECT YEAR(CURRENT_DATE()) - YEAR(user.dateNaissance), COUNT(user) FROM User user GROUP BY YEAR(CURRENT_DATE()) - YEAR(user.dateNaissance)")
	List<Object[]> getUserWithAge();
	
	@Query("SELECT d.nomDept , COUNT(user) FROM Departement d JOIN d.users user GROUP BY d.nomDept")
	List<Object[]> getUserByDepartement();
}
