package com.apprh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.apprh.entity.Pointage;
import com.apprh.service.PointageService;

@RestController
public class PointageController {
	
	@Autowired
	private PointageService pointageService;

//Gestion Pointages
    
    @PostMapping("/createPointage")
    @PreAuthorize("hasRole('Admin')")
    public Pointage createPointage(@RequestBody Pointage pointage) {
        return pointageService.createPointage(pointage);
    }
    
    @GetMapping("/listPointage")
    @PreAuthorize("hasRole('Admin')")
    public List<Pointage> getAllPointages() {
        return pointageService.getAllPointages();
    }
   
    @PostMapping("/pointageEntree/{id}")
    public Pointage pointerEntree(@PathVariable("id") Long idUtilisateur) {
    	
    return pointageService.poinatgeEntree(idUtilisateur);
    }
    @PostMapping("/pointageSortie/{id}")
    public Pointage pointerSortie(@PathVariable("id") Long idUtilisateur) {
    	
    	return pointageService.pointageSortie(idUtilisateur);
    }
    @GetMapping("/getPointageById/{id}")
    @PreAuthorize("hasRole('Admin')")
    public Pointage getPointageById(@PathVariable("id") long pointageId){
      return pointageService.getPointageById(pointageId);
    }
    
    @DeleteMapping("/deletePointage/{id}")
    @PreAuthorize("hasRole('Admin')")
    public void deletePointageById(@PathVariable Long id) {
    	pointageService.deletePointageById(id);
    }
    
}
