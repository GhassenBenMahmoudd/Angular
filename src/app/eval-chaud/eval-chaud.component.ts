import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { NgForm } from '@angular/forms';
import { jsPDF } from 'jspdf';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eval-chaud',
  templateUrl: './eval-chaud.component.html',
  styleUrls: ['./eval-chaud.component.css']
})
export class EvalChaudComponent {
  PATH_OF_API = 'http://localhost:8082';

  form:NgForm;
constructor(public userService: UserService, private httpClient: HttpClient) { }
  onSubmit(form: NgForm) {
    const pdf = new jsPDF();
    const formData = form.value;

    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(30, 144, 255); // Blue color (RGB: 0, 0, 255)
    const formText1 = 'Fiche d évaluation à chaud';
    const textWidth = pdf.getStringUnitWidth(formText1) * pdf.getFontSize() / pdf.internal.scaleFactor;
    // Calculate the position to center the text horizontally
    const pageWidth = pdf.internal.pageSize.getWidth();
    const textX = (pageWidth - textWidth) / 2;
    // Add the formatted text to the PDF
    pdf.text(formText1, textX, 20);

    const imageUrl = '/assets/Capgemini.png'; // Replace with the actual image URL or file path
    const imageWidth = 50; // Adjust the image width as needed
    const imageHeight = 15; // Adjust the image height as needed
    const imageX = textX - imageWidth - 5; // Position the image to the left of the title
    const imageY = 10; // Adjust the image position vertically
    pdf.addImage(imageUrl, 'PNG', imageX, imageY, imageWidth, imageHeight);

    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0); // Blue color (RGB: 0, 0, 255)
    let formText2 = 'Formation';
    let textWidth1 = pdf.getStringUnitWidth(formText2) * pdf.getFontSize() / pdf.internal.scaleFactor;
    // Calculate the position to center the text horizontally
    let pageWidth1 = pdf.internal.pageSize.getWidth();
    let textX1 = (pageWidth1 - textWidth1) / 2;
    // Add the formatted text to the PDF
    pdf.text(formText2, textX1, 40);

    let lineY = 43;
    let lineWidth = textWidth1 + 10; // Adjust the line width as needed
    let lineX = textX1 - 5; // Adjust the line position as needed
    pdf.setLineWidth(0.5); // Adjust the line thickness as needed
    pdf.line(lineX, lineY, lineX + lineWidth, lineY);



    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0); // Black color
    let formText = `Theme: ${formData.theme}\n\n`;
    formText += `Organisme: ${formData.organisme}`;
    formText += `                                 Formateur: ${formData.formateur}\n\n`;
    formText += `Date: ${formData.date}`;
    formText += `                                 Lieu: ${formData.lieu}\n`;
    pdf.text(formText, 20, 50);

    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0); // Blue color (RGB: 0, 0, 255)
    let formText3 = 'Participant';
    let textWidth2 = pdf.getStringUnitWidth(formText3) * pdf.getFontSize() / pdf.internal.scaleFactor;
    // Calculate the position to center the text horizontally
    let pageWidth2 = pdf.internal.pageSize.getWidth();
    let textX2 = (pageWidth2 - textWidth2) / 2;
    // Add the formatted text to the PDF
    pdf.text(formText3, textX2, 80);


     lineY = 83;
     lineWidth = textWidth1 + 10; // Adjust the line width as needed
     lineX = textX1 - 5; // Adjust the line position as needed
    pdf.setLineWidth(0.5); // Adjust the line thickness as needed
    pdf.line(lineX, lineY, lineX + lineWidth, lineY);


    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0); // Black color
    let formText4 = `Nom : ${formData.nom}`;
    formText4 += `                                  Prénom : ${formData.prenom}`;
    formText4 += `Matricule : ${formData.matricule}`;
    formText4 += `                                  Fonction : ${formData.fonction}\n\n`;
    formText4 += 'Direction/Activité/Service: ' + formData.direction + '\n\n';
    pdf.text(formText4, 20, 90);

    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0); // Blue color (RGB: 0, 0, 255)
     formText3 = 'Evaluation';
     textWidth2 = pdf.getStringUnitWidth(formText3) * pdf.getFontSize() / pdf.internal.scaleFactor;
    // Calculate the position to center the text horizontally
     pageWidth2 = pdf.internal.pageSize.getWidth();
     textX2 = (pageWidth2 - textWidth2) / 2;
    // Add the formatted text to the PDF
    pdf.text(formText3, textX2, 120);


    lineY = 123;
     lineWidth = textWidth1 + 10; // Adjust the line width as needed
     lineX = textX1 - 5; // Adjust the line position as needed
    pdf.setLineWidth(0.5); // Adjust the line thickness as needed
    pdf.line(lineX, lineY, lineX + lineWidth, lineY);


    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0); // Black color
    let formText5 = 'Le rythme de la formation: ' + formData.rythme + '\n\n';
    formText5 += 'Les horaires par rapport au contenu de la formation: ' + formData.horaires + '\n\n';
    formText5 += 'L organisation matérielle(Convocation, lieu, pauses...): ' + formData.org + '\n\n';
    formText5 += 'Le respect du programme de formation: ' + formData.respect + '\n\n';
    formText5 += 'La prestation du formateur: ' + formData.prestation + '\n\n';
    formText5 += 'La qualité des supports utilisés: ' + formData.support + '\n\n';
    formText5 += 'Les méthodes pédagogiques, d animation: ' + formData.methode + '\n\n';
    formText5 += 'Quel est le niveau d atteinte des objectifs de la formation par rapport à vos attentes en (%) ? ' + formData.niveau + '\n\n';
    formText5 += 'Préciser si < 70% : ' + formData.preciser + '\n\n';
    formText5 += 'Commentaires/Observations/Suggestions: ' + formData.comm + '\n\n';

    pdf.text(formText5, 20, 130);

    // Enregistrer le PDF
    pdf.save('formulaire.pdf');
    
    console.log(formData);
   
  }

   
}
