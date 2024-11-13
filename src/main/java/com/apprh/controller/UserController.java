package com.apprh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.apprh.dao.MessageDao;
import com.apprh.dao.RoleDao;
import com.apprh.dao.UserDao;

import com.apprh.dto.MailRequest;
import com.apprh.dto.MailResponse;
import com.apprh.dto.MessageRequest;
import com.apprh.dto.PasswordRequest;
import com.apprh.entity.Contrat;
import com.apprh.entity.Departement;
import com.apprh.entity.Event;
import com.apprh.entity.Manager;
import com.apprh.entity.Message;
import com.apprh.entity.Notification;
import com.apprh.entity.Pointage;
import com.apprh.entity.Role;
import com.apprh.entity.Session;
import com.apprh.entity.TypeContrat;
import com.apprh.entity.User;
import com.apprh.service.ContratService;
import com.apprh.service.EmailService;
import com.apprh.service.ManagerService;
import com.apprh.service.MessageService;
import com.apprh.service.NotificationService;
import com.apprh.service.UserService;

import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Properties;
import java.util.Random;
import java.util.Set;
import java.util.UUID;

import org.springframework.web.bind.annotation.RequestParam;
import javax.annotation.PostConstruct;
import javax.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserDao userDao;
    
    @Autowired
    private RoleDao roleDao;

    //forgetPassword
    @PutMapping("/forget-password")
    public User resetPassword(@RequestBody User user){
    	return userService.forgetPassword(user);
    }
    
    //gestion des employés
    //Ajouter Employé
    @PostMapping({"/registerNewUser"})
    @PreAuthorize("hasRole('Admin') or hasRole('Opérateur RH')")
    public User registerNewUser(@RequestBody User user) {
    return userService.registerNewUser(user);
        
    }
    
    //Update Employee
    @PutMapping("/employees/{id}")
    @PreAuthorize("hasRole('Admin')")
	public void updateEmployee(@PathVariable Long id, @RequestBody User user){
		
		userService.updateUser(user,id);
	}
    
    //ArchiveUser
    @PutMapping("/employees/{id}/archive")
    @PreAuthorize("hasRole('Admin')")
    public ResponseEntity<Object> archivePersonne(@PathVariable Long id) {
     return userService.archivePersonne(id);
    }
    
    //Liste des employés
    @GetMapping("/employees")
    @PreAuthorize("hasRole('Admin') or hasRole('Opérateur RH') ")
    public List<User> getAllUser() {
        return userDao.findAll();
    }
    
    //GetUserById
    @GetMapping("/{userId}")
    public User getUserById(@PathVariable Long userId) {
    return userDao.findById(userId).get();
    }
    
    //Changer mot de passe
   
    @PostMapping("/changePassword/{id}")
    public ResponseEntity<String> changePassword(@PathVariable Long id, @RequestBody PasswordRequest passwordRequest) {
        return userService.changePassword(id, passwordRequest);
    } 
    
    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }
    
    @GetMapping("/listRoles")
    public List<Role> getAllRole() {
        return roleDao.findAll();
    }

    //Generation Employee-report 
    @GetMapping("/report")
    public Path generateReport() throws FileNotFoundException, JRException {
    	return userService.exportReport();
    }
    
   
    
    //Gestion Departement
    @PostConstruct
    public void initDepartement() {
        userService.initDepartement();;
    }
    
    @GetMapping("/getAllDepartements")
    public List<Departement> getAllDepartements() {
        return userService.getAllDepartements();
    }
    
    @PostMapping("/createDepartements")
    public Departement createDepartement(@RequestBody Departement departement) {
    return userService.saveDepartement(departement);
        
    }
    @DeleteMapping("/annulerDepartements/{id}")
	    @PreAuthorize("hasRole('Admin')")
	    public void deleteDepartementsById(@PathVariable String id) {
    	userService.deleteDepartementById(id);
	    }
   
    @GetMapping("/getDepartementsById/{id}")
    public Departement getDepartementById(@PathVariable("id") String id){
      return userService.getDepartementById(id);
    }
    
    
    
   
    
}
