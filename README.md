# Introduction
Ce projet consiste à développer une application web de gestion des ressources humaines (GRH), en utilisant Angular pour le front-end et Spring Boot pour le back-end. L'application permet une gestion efficace des employés, des formations, des départements, des événements, des notifications, des contrats, et bien plus.

### Fonctionnalités principales :
- **Gestion des employés** : Ajout, modification, consultation, et archivage des employés.
- - **Gestion de pointage ** : Ajout, modification, consultation, et archivage des poointages.
- **Gestion des formations** : Création, modification, et affectation des sessions de formation.
- **Gestion des événements** : Ajout et consultation d'événements dans un calendrier interactif.
- **Notifications** : Alertes pour les échéances de contrat, de passeport, ou de visa.
- **Tableaux de bord** : Visualisation des données RH clés (répartition par sexe, type de contrat, etc.).

### Technologies utilisées :
- **Front-end** : Angular
- **Back-end** : Spring Boot
- **Base de données** : MySQL
- **Authentification** : JSON Web Tokens (JWT)

L'application suit une architecture client-serveur avec une communication via des API RESTful. Elle inclut :
- Un front-end Angular pour une interface utilisateur intuitive.
- Un back-end Spring Boot pour la logique métier.
- Une base de données MySQL pour le stockage des données.

### Installation :
1. Clonez le dépôt : `git clone <lien-du-dépôt>`
2. Backend :
   - Naviguez dans le dossier `backend`.
   - Configurez la base de données dans le fichier `application.properties`.
   - Lancez l'application avec : `mvn spring-boot:run`.
3. Frontend :
   - Naviguez dans le dossier `frontend`.
   - Installez les dépendances : `npm install`.
   - Démarrez le serveur Angular : `ng serve`.

### Contributeurs :
- **Nom et rôle** : Développeur principal: Ben Mahmoud Ghassen
- **Encadrants** : Soissi Amir et Louati Abdallah

### Diagramme de classe global :
![image](https://github.com/user-attachments/assets/ccba9b40-e1bc-444b-97de-014d1c2fdf3d)


### Version JDKs : 19 



