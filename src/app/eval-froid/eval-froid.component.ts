import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-eval-froid',
  templateUrl: './eval-froid.component.html',
  styleUrls: ['./eval-froid.component.scss']
})
export class EvalFroidComponent {
  form:NgForm;

  onSubmit(form: NgForm) {
    const pdf = new jsPDF();
    const formData = form.value;

    

    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(30, 144, 255); // Blue color (RGB: 0, 0, 255)
    const formText1 = 'Fiche d évaluation à Froid';
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


    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0); // Black color
    let formText = `Nom : ${formData.nom}`;
    formText += `                           Prénom : ${formData.prenom}\n\n`;
    formText += `Matricule : ${formData.matricule}`;
    formText += `                           Activité : ${formData.activite}\n\n`;
    formText += `Organisme : ${formData.organisme}`;
    formText += `                           Lieu : ${formData.lieu}\n\n`;
    formText += `Formation : ${formData.formation}`;
    formText += `                           Durée de la formation : ${formData.duree}\n\n`;
    formText += `Date de début : ${formData.dateDebut}`;
    formText += `                           Date de fin : ${formData.dateFin}\n\n`;
    pdf.text(formText, 20, 40);


    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0); // Blue color (RGB: 0, 0, 255)
    let formText2 = 'AVIS SUR LA FORMATION REALISEE';
    let textWidth1 = pdf.getStringUnitWidth(formText2) * pdf.getFontSize() / pdf.internal.scaleFactor;
    // Calculate the position to center the text horizontally
    let pageWidth1 = pdf.internal.pageSize.getWidth();
    let textX1 = (pageWidth1 - textWidth1) / 2;
    // Add the formatted text to the PDF
    pdf.text(formText2, textX1, 90);

    let lineY = 93;
    let lineWidth = textWidth1 + 10; // Adjust the line width as needed
    let lineX = textX1 - 5; // Adjust the line position as needed
    pdf.setLineWidth(0.5); // Adjust the line thickness as needed
    pdf.line(lineX, lineY, lineX + lineWidth, lineY);



    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0); // Black color
    let formText4 = `Avez-vous mis en application les connaissances acquises lors de votre formation ? ${formData.r1}\n\n`;
    formText4 += `Lesquelles ? ${formData.txt1}\n\n`;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    formText4 += `Si «oui partiellement» ou «non», pourquoi? ${formData.c1} ${formData.c11} ${formData.c12} ${formData.c13}\n\n`;
    formText4 += `Autres (précisez) : ${formData.txt2}\n\n`;
    formText4 += 'Depuis la fin de la formation, as-tu pu mettre en pratique les connaissances acquises ?' + formData.r2 + '\n\n';
    formText4 += `Si «Oui» ou «oui partiellement», à quelle fréquence ? ${formData.r3}\n\n`;
    formText4 += `Si "Oui, partiellement" ou "Non", pourquoi ? ${formData.txt3}\n\n`;
    formText4 += `Selon vous, qu'est ce qui pourrait favoriser la mise en pratique de la formation ? ${formData.c2}\n\n`;
    formText4 += `Quels compléments seraient nécessaires à la formation suivie ? ${formData.txt4}\n\n`;
    formText4 += `Remarques/Observations ${formData.txt5}\n\n`;
    pdf.text(formText4, 20, 100);

    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0); // Blue color (RGB: 0, 0, 255)
    let formText3 = 'AVIS MANAGER';
    let textWidth2 = pdf.getStringUnitWidth(formText3) * pdf.getFontSize() / pdf.internal.scaleFactor;
    // Calculate the position to center the text horizontally
    let pageWidth2 = pdf.internal.pageSize.getWidth();
    let textX2 = (pageWidth2 - textWidth2) / 2;
    // Add the formatted text to the PDF
    pdf.text(formText3, textX2, 190);

     lineY = 193;
     lineWidth = textWidth1 + 10; // Adjust the line width as needed
     lineX = textX1 - 5; // Adjust the line position as needed
    pdf.setLineWidth(0.5); // Adjust the line thickness as needed
    pdf.line(lineX, lineY, lineX + lineWidth, lineY);


    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0); // Black color
    let formText5 = 'La formation choisir semblait-elle répondre à votre activité ? ' + formData.r4 + '\n\n';
    formText5 += 'Pourquoi ? ' + formData.txt6 + '\n\n';
    formText5 += 'Au regard de l objectif visé, le résultat est-il atteint ? ' + formData.r5 + '\n\n';

    pdf.text(formText5, 20, 200);


    

    // Enregistrer le PDF
    pdf.save('evalfroid.pdf');
    
    console.log(formData);
    

      
 
  }
}
