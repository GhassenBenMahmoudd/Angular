package com.apprh.service;

import java.time.Duration;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apprh.dao.ContratDao;
import com.apprh.dao.TypeContratDao;
import com.apprh.entity.Contrat;
import com.apprh.entity.Departement;
import com.apprh.entity.TypeContrat;
import com.apprh.entity.User;

@Service
public class ContratService {
	
	 @Autowired 
	  private 
      TypeContratDao typeContratDao;
	
	@Autowired
	private ContratDao contratDao;
	
	public Contrat createContrat(Contrat contrat) { 
         return contratDao.save(contrat);
    }
	 public List<Contrat> getAllContrats() {
	     return contratDao.findAll();
	    }
	public void deleteContratById(long idContrat) {
		contratDao.deleteById(idContrat);
	    }
    public Contrat getContratById(long idContrat) {
	   return contratDao.findById(idContrat).get();
	     }
//Gestion Typde Contrat
    
    public TypeContrat saveTypeContrat(TypeContrat typeContrat) { 
        return typeContratDao.save(typeContrat);
    }
    public List<TypeContrat> getAllTypeContrats() {
        return typeContratDao.findAll();
    }
    public void deleteTypeContratById(String nomType) {
    	typeContratDao.deleteById(nomType);
    }
    public TypeContrat getTypeContratById(String nomType) {
        return typeContratDao.findById(nomType).get();
     }

    public void initType() {
        TypeContrat type = new TypeContrat();
        type.setNomTypeContrat("CDD");
        TypeContrat type1 = new TypeContrat();
        type1.setNomTypeContrat("CDI");
        TypeContrat type2 = new TypeContrat();
        type2.setNomTypeContrat("Stagiaire");
        typeContratDao.save(type);
        typeContratDao.save(type1);
        typeContratDao.save(type2);
        }
}
