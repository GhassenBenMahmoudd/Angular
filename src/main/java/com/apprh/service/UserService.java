package com.apprh.service;
import com.apprh.dao.ContratDao;
import com.apprh.dao.DepartementDao;
import com.apprh.dao.ManagerDao;
import com.apprh.dao.RoleDao;
import com.apprh.dao.TypeContratDao;
import com.apprh.dao.UserDao;
import com.apprh.dto.PasswordRequest;
import com.apprh.entity.Contrat;
import com.apprh.entity.Departement;
import com.apprh.entity.Manager;
import com.apprh.entity.Role;
import com.apprh.entity.TypeContrat;
import com.apprh.entity.User;

import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Path;
import java.security.SecureRandom;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import javax.persistence.EntityNotFoundException;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;
  
    @Autowired
    private ManagerDao managerDao;

    @Autowired
    private RoleDao roleDao;
    
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired 
    private ManagerService managerService;
    
    @Autowired 
    private EmailService emailService;
    
    @Autowired
    private DepartementDao departementDao;
    
   
    
    @Autowired
    private ModelMapper modelMapper = new ModelMapper();
    
    public static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&*" ;
    public static final int PASSWORD_LENGTH = 8;
    
    //Authentification 
    
    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }
    
    public User registerNewUser(User user) {
    	String generatedPassword = generatePassword();
    	boolean isManagerRole = false;
        for (Role role : user.getRole()) {
            if (role.getRoleName().equalsIgnoreCase("Manager")) {
                isManagerRole = true;
                break;
            }
        }
        if (isManagerRole) {
            Manager manager = convertToManager(user);
            manager.setUserPassword(getEncodedPassword(generatedPassword));
            Map<String, Object> model = new HashMap<>();
    		model.put("Email", manager.getEmailCapgemini());
    		model.put("password", generatedPassword);
    		emailService.sendEmail(manager.getEmailPerso(), model);
            return managerService.registerNewManager(manager);
        } else {
        	user.setUserPassword(getEncodedPassword(generatedPassword));
            Map<String, Object> model = new HashMap<>();
    		model.put("Email", user.getEmailCapgemini());
    		model.put("password", generatedPassword);
    		emailService.sendEmail(user.getEmailPerso(), model);
            return userDao.save(user);
        }
    
    }
    private Manager convertToManager(User user) {
        Manager manager = modelMapper.map(user, Manager.class);
        return manager;
    }
    public static String generatePassword() {
        SecureRandom secureRandom = new SecureRandom();
        StringBuilder password = new StringBuilder();

        for (int i = 0; i < PASSWORD_LENGTH; i++) {
            int randomIndex = secureRandom.nextInt(CHARACTERS.length());
            password.append(CHARACTERS.charAt(randomIndex));
        }

        return password.toString();
    }
    
    public User forgetPassword(User user) {
    	User user1=userDao.findByEmailPerso(user.getEmailPerso()).get();
        String generatedPassword = generatePassword();
        
    	if (user1 != null) {
    	user1.setUserPassword(getEncodedPassword(generatedPassword));
    	Map<String, Object> model = new HashMap<>();
		model.put("password", generatedPassword);
		emailService.resetPasswordByEmail(generatedPassword, model);
    	return userDao.save(user1);
    	}
    	return null;
    }

    //Gestions Roles

    public void initRoleAndUser() {
    	
        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        roleDao.save(adminRole);

        Role userRole = new Role();
        userRole.setRoleName("Employé");
        roleDao.save(userRole);
        
        Role operatorRole = new Role();
        operatorRole.setRoleName("Opérateur RH");
        roleDao.save(operatorRole);
        
        Role managerRole = new Role();
        managerRole.setRoleName("Manager");
        roleDao.save(managerRole);

        User adminUser = new User();
        adminUser.setIdCapgemini(1);
        adminUser.setEmailCapgemini("admin");
        adminUser.setUserPassword(getEncodedPassword("123"));
        adminUser.setUserFirstName("admin");
        adminUser.setUserLastName("admin");
        adminUser.setGenre("homme");
        adminUser.setEmailPerso("admin@gmail.com");
        adminUser.setIdPayroll(1);
        adminUser.setTelPro(21546654);
        
        Manager managerUser = new Manager();
        managerUser.setIdCapgemini(2);
        managerUser.setEmailCapgemini("manager");
        managerUser.setUserPassword(getEncodedPassword("123"));
        managerUser.setUserFirstName("manager");
        managerUser.setUserLastName("manager");
        managerUser.setGenre("homme");
        managerUser.setEmailPerso("manager@gmail.com");
        managerUser.setIdPayroll(2);
        managerUser.setTelPro(50546654);

        User operatorUser = new User();
        operatorUser.setIdCapgemini(3);
        operatorUser.setEmailCapgemini("operator");
        operatorUser.setUserPassword(getEncodedPassword("123"));
        operatorUser.setUserFirstName("operator");
        operatorUser.setUserLastName("operator");
        operatorUser.setGenre("femme");
        operatorUser.setEmailPerso("operator@gmail.com");
        operatorUser.setIdPayroll(3);
        operatorUser.setTelPro(53546654);
        
        User user1 = new User();
        user1.setIdCapgemini(4);
        user1.setEmailCapgemini("User");
        user1.setUserPassword(getEncodedPassword("123"));
        user1.setUserFirstName("User1");
        user1.setUserLastName("User1");
        user1.setGenre("femme");
        user1.setEmailPerso("user1@gmail.com");
        user1.setIdPayroll(4);
        user1.setTelPro(90546654);
        
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(userRole);
        user1.setRole(userRoles);
        userDao.save(user1);

        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        userDao.save(adminUser);
        
        Set<Role> operatorRoles = new HashSet<>();
        operatorRoles.add(operatorRole);
        operatorUser.setRole(operatorRoles);
        userDao.save(operatorUser);
        
        Set<Role> managerRoles = new HashSet<>();
        managerRoles.add(managerRole);
        managerUser.setRole(managerRoles);
        managerDao.save(managerUser);
    }
    public List<User> getAllUser() {
        return userDao.findAll();
    }
    
    public User getUserById(long id) {
        return userDao.findById(id).get();
     }

    
    //Gestion des employés
    //Archiver User
          public ResponseEntity<Object> archivePersonne(@PathVariable Long id) {
        Optional<User> optionalPersonne = userDao.findById(id);
        if (optionalPersonne.isPresent()) {
      	  User user = optionalPersonne.get();
          user.setArchive(true);
          userDao.save(user);
          return ResponseEntity.ok().build();
        } else {
          return ResponseEntity.notFound().build();
        }}
    
    
    //update Employee
    public void updateUser(User user,Long id) {  
        User userDB = userDao.findById(id).orElse(null);
        userDao.save(user);
      }
   
    
    //changer mot de passe
    public ResponseEntity<String> changePassword(Long id, PasswordRequest passwordRequest) {
        Optional<User> optionalUser = userDao.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (passwordEncoder.matches(passwordRequest.getUserPassword(), user.getUserPassword())) {
                String newPassword = passwordRequest.getNewPassword();
                if (newPassword != null && newPassword.length() >= 8 && newPassword.matches(".*\\d.*")) {
                    if (newPassword.equals(passwordRequest.getConfirmNewPassword())) {
                        user.setUserPassword(passwordEncoder.encode(newPassword));
                        user.setNewPassword(newPassword);
                        userDao.save(user);
                        return ResponseEntity.ok().build();
                    } else {
                        return new ResponseEntity<String>("Le nouveau mot de passe et la confirmation ne correspondent pas", HttpStatus.BAD_REQUEST);
                    }
                } else {
                    return new ResponseEntity<String>("Le nouveau mot de passe doit contenir au moins 8 caractères et au moins un chiffre", HttpStatus.BAD_REQUEST);
                }
            } else {
                return new ResponseEntity<String>("Incorrect current password", HttpStatus.UNAUTHORIZED);
            }
        } else {
            return new ResponseEntity<String>("Utilisateur non trouvé", HttpStatus.NOT_FOUND);
        }
        }
    
  //generate rapport
    public Path exportReport() throws FileNotFoundException, JRException {
    	List<User> employees=userDao.findAll();
    	File file=ResourceUtils.getFile("classpath:employees.jrxml");
    	JasperReport jasperReport=JasperCompileManager.compileReport(file.getAbsolutePath());
    	JRBeanCollectionDataSource dataSource=new JRBeanCollectionDataSource(employees);
    	Map<String,Object> parameters=new HashMap<>();
    	parameters.put("createdBy","capgemini");
    	JasperPrint jasperPrint=JasperFillManager.fillReport(jasperReport,parameters,dataSource);
    	JasperExportManager.exportReportToPdfFile(jasperPrint,"C:\\Users\\ghassen\\Desktop\\PFE\\CapgeminiApp"+"\\employees.pdf");

    		String filePath = "C:\\Users\\ghassen\\Desktop\\PFE\\CapgeminiApp\\employees.pdf";
    	    File reportFile = new File(filePath);
    	    return reportFile.toPath();
    }
    //gestion dept
    public Departement saveDepartement(Departement dept) { 
        return departementDao.save(dept);
    }
    public List<Departement> getAllDepartements() {
        return departementDao.findAll();
    }
    public void deleteDepartementById(String id) {
    	departementDao.deleteById(id);
    }
    public Departement getDepartementById(String nomDept) {
        return departementDao.findById(nomDept).get();
     }
    public void initDepartement() {
    Departement dept = new Departement();
    dept.setNomDept("développement");
    Departement dept1 = new Departement();
    dept1.setNomDept("réseau");
    departementDao.save(dept);
    departementDao.save(dept1);
    
    }
}
