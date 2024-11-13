package com.apprh.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.apprh.entity.Contrat;
import com.apprh.entity.TypeContrat;
import com.apprh.service.ContratService;

@RestController
public class ContratController {
	
	@Autowired 
	private ContratService contratService;
	
	//Gestion des contrats
	  @PostConstruct
	    public void initType() {
	        contratService.initType();
	    }
	
    @PostMapping("/createContrat")
    @PreAuthorize("hasRole('Admin')")
    public Contrat createContrat(@RequestBody Contrat contrat) {
        return contratService.createContrat(contrat);
    }
    
    @GetMapping("/getAllContrats")
    public List<Contrat> getAllContrats() {
        return contratService.getAllContrats();
    }
    
    @DeleteMapping("/annulerContrat/{id}")
	    @PreAuthorize("hasRole('Admin')")
	    public void deleteContratById(@PathVariable Long id) {
    	contratService.deleteContratById(id);
	    }
   
    @GetMapping("/getContratById/{id}")
    public Contrat getContratById(@PathVariable("id") long id){
      return contratService.getContratById(id);
    }
    
    //Gestion Type Contrats
    @GetMapping("/getAllTypeContrats")
    public List<TypeContrat> getAllTypeContrats() {
        return contratService.getAllTypeContrats();
    }
    
    @PostMapping("/createTypeContrat")
    public TypeContrat createTypeContrat(@RequestBody TypeContrat typeContrat) {
    return contratService.saveTypeContrat(typeContrat);
        
    }
    @DeleteMapping("/annulerTypeContrat/{id}")
	    @PreAuthorize("hasRole('Admin')")
	    public void deleteTypeContratById(@PathVariable String id) {
    	contratService.deleteTypeContratById(id);
	    }
   
    @GetMapping("/getTypeContratById/{id}")
    public TypeContrat getTypeContratById(@PathVariable("id") String id){
      return contratService.getTypeContratById(id);
    }

}
