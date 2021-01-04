navigator.serviceWorker.register('../../sw.js');

// Push Notifications
 var theDay = (new Date()).toISOString().replace(/-/g, '/').split('T')[0],
//  testDay = new Date('2019/12/15');
 day1 = new Date('2020/01/01');
 day2 = new Date('2020/01/04');
 day3 = new Date('2020/01/05');
 day4 = new Date('2020/01/06');
 day5 = new Date('2020/01/07');
//  day6 = new Date('2020/01/14');
 day7 = new Date('2020/01/20');
 day8 = new Date('2020/01/24');
 day9 = new Date('2020/01/28');
 day10 = new Date('2020/02/04');
 day11 = new Date('2020/02/09');
 day12 = new Date('2020/02/13');
 day13 = new Date('2020/02/14');
 day14 = new Date('2020/02/20');
//  day15 = new Date('2020/02/21');
 day16 = new Date('2020/03/03');
 day17 = new Date('2020/03/08');
//  day18 = new Date('2020/03/12');
//  day19 = new Date('2020/03/15');
//  day20 = new Date('2020/03/16');
 day21 = new Date('2020/03/17');
 day22 = new Date('2020/03/19');
 day23 = new Date('2020/03/20');
 day24 = new Date('2020/03/21');
 day25 = new Date('2020/03/28');
 day26 = new Date('2020/04/01');
 day27 = new Date('2020/04/06');
 day28 = new Date('2020/04/07');
 day29 = new Date('2020/04/12');
 day30 = new Date('2020/04/13');
 day31 = new Date('2020/04/15');
 day32 = new Date('2020/04/23');
 day33 = new Date('2020/04/27');
 day34 = new Date('2020/04/29');
 day35 = new Date('2020/04/30');
 day36 = new Date('2020/05/01');
 day37 = new Date('2020/05/03');
 day38 = new Date('2020/05/04');
 day39 = new Date('2020/05/10');
 day40 = new Date('2020/05/11');
 day41 = new Date('2020/05/15');
 day42 = new Date('2020/05/17');
 day43 = new Date('2020/05/25');
 day44 = new Date('2020/05/27');
 day45 = new Date('2020/05/30');
 day46 = new Date('2020/06/01');
 day47 = new Date('2020/06/05');
 day48 = new Date('2020/06/06');
 day49 = new Date('2020/06/07');
 day50 = new Date('2020/06/18');
 day51 = new Date('2020/06/19');
 day52 = new Date('2020/06/21');
 day53 = new Date('2020/06/23');
 day54 = new Date('2020/06/27');
 day55 = new Date('2020/06/30');
 day56 = new Date('2020/07/01');
 day57 = new Date('2020/07/11');
 day58 = new Date('2020/07/12');
 day59 = new Date('2020/07/17');
 day60 = new Date('2020/07/20');
 day61 = new Date('2020/07/23');
 day62 = new Date('2020/07/26');
 day63 = new Date('2020/07/30');
 day64 = new Date('2020/08/01');
 day65 = new Date('2020/08/04');
 day66 = new Date('2020/08/09');
 day67 = new Date('2020/08/12');
 day68 = new Date('2020/08/16');
 day69 = new Date('2020/08/19');
 day70 = new Date('2020/09/04');
 day71 = new Date('2020/09/10');
 day72 = new Date('2020/09/11');
 day73 = new Date('2020/09/18');
 day74 = new Date('2020/09/21');
 day75 = new Date('2020/09/27');
 day76 = new Date('2020/10/01');
 day77 = new Date('2020/10/04');
 day78 = new Date('2020/10/05');
 day79 = new Date('2020/10/12');
 day80 = new Date('2020/10/16');
 day81 = new Date('2020/10/18');
 day82 = new Date('2020/10/21');
 day83 = new Date('2020/10/31');
 day84 = new Date('2020/11/01');
 day85 = new Date('2020/11/02');
 day86 = new Date('2020/11/04');
 day87 = new Date('2020/11/13');
 day88 = new Date('2020/11/17');
 day89 = new Date('2020/11/20');
 day90 = new Date('2020/11/27');
 day91 = new Date('2020/11/30');
 day92 = new Date('2020/12/03');
 day93 = new Date('2020/12/12');
 day94 = new Date('2020/12/21');
 day95 = new Date('2020/12/24');
 day96 = new Date('2020/12/25');
 day97 = new Date('2020/12/28');
 day98 = new Date('2020/12/31');

  function CheckPushDays(dayEvent){
    var todayEvent = new Date().getTime();
    var diffDays = Math.ceil((dayEvent.getTime() - todayEvent) / (1000*3600*24));
    if (diffDays == 15 || diffDays == 1) {
      return true;
    }
  }

//  if (CheckPushDays(testDay)){
//   spawnNotification('¡Las ofertas en viajes son mejor recibidas con imágenes tentadoras!','resources/img/emojis-extension/luggage.png','27. Día Mundial del Turismo');  
//  } else 
if (CheckPushDays(day1)){
  spawnNotification('Deséale a tu comunidad lo mismo que quieres para ti: ¡UN GRAN AÑO!','resources/img/emojis-extension/star-struck.png','01. Año Nuevo');
} else if (CheckPushDays(day2)){
  spawnNotification('','resources/img/emojis-extension/writing-hand.png','04. Día del Periodista en MX');
} else if (CheckPushDays(day3)){
  spawnNotification('','resources/img/emojis-extension/writing-hand.png','05. Día del Periodista en EC');
} else if (CheckPushDays(day4)){
  spawnNotification('Tus promociones y sorteos serán muy bien recibidos.','resources/img/emojis-extension/glowing-star.png','06. Día de los Reyes Magos');
} else if (CheckPushDays(day5)){
  spawnNotification('','resources/img/emojis-extension/shopping-bags.png','07. ¡Comienzo de Rebajas!');
// } else if (CheckPushDays(day6)){
//   spawnNotification('Comienza a diseñar tus Emails.','resources/img/emojis-extension/heavy-exclamation-mark.png','14. ¡Falta un mes para San Valentín!');
} else if (CheckPushDays(day7)){
  spawnNotification('¡Alegra a tus clientes en este día!','resources/img/emojis-extension/slightly-frowning-face.png','20. Blue Monday');
} else if (CheckPushDays(day8)){
  spawnNotification('','resources/img/emojis-extension/writing-hand.png','24. Día del Periodista ES');
} else if (CheckPushDays(day9)){
  spawnNotification('Nada mejor que celebrarlo interactuando con tus seguidores. ¡Haz una acción en Redes Sociales!','resources/img/emojis-extension/female-technologist-type-1-2.png','28. Dìa del Community Manager');
} else if (CheckPushDays(day10)){
  spawnNotification('Genera conciencia con mensajes e información que aporten valor a tu comunidad.','resources/img/emojis-extension/male-health-worker-type-3.png','04. Día Mundial Contra el Cáncer');
} else if (CheckPushDays(day11)){
  spawnNotification('','resources/img/emojis-extension/writing-hand.png','09. Día del Periodista en CO');
} else if (CheckPushDays(day12)){
  spawnNotification('¡Una fecha ideal para aumentar tu Engagement en Redes! Haz que amen tu marca.','resources/img/emojis-extension/upside-down-face.png','13. Día Mundial del Soltero');
} else if (CheckPushDays(day13)){
  spawnNotification('¡Viva el amor!','resources/img/emojis-extension/heart-with-arrow.png','14. San Valentín');
} else if (CheckPushDays(day14)){
  spawnNotification('Súmate a la alegría general con sorteos y promociones.','resources/img/emojis-extension/party-popper.png','20 - 25. Época de Carnavales');
// } else if (CheckPushDays(day15)){
//   spawnNotification('Potencia tu negocio con acciones innovadoras.','resources/img/emojis-extension/heavy-exclamation-mark.png','21. ¡En un mes cambia la estación!');
} else if (CheckPushDays(day16)){
  spawnNotification('','resources/img/emojis-extension/seedling.png','03. Día de la Naturaleza');
} else if (CheckPushDays(day17)){
  spawnNotification('¡Feliz día!','resources/img/emojis-extension/female-sign.png','08. Día Internacional de la Mujer');
// } else if (CheckPushDays(day18)){
//   spawnNotification('','resources/img/emojis-extension/heavy-exclamation-mark.png','12. ¿Ya tienes listas tus Campañas de Email para Pascuas?');
// } else if (CheckPushDays(day19)){
//   spawnNotification('¡Prepárate!','resources/img/emojis-extension/heavy-exclamation-mark.png','15. Se acerca el Día del Niño en ES, MX y CO.');
// } else if (CheckPushDays(day20)){
//   spawnNotification('¡Pronto llega el Hot Sale!!','resources/img/emojis-extension/heavy-exclamation-mark.png','16. Ey, Colombia.');
} else if (CheckPushDays(day21)){
  spawnNotification('','resources/img/emojis-extension/four-leaf-clover.png','17. San Patricio');
} else if (CheckPushDays(day22)){
  spawnNotification('¡Prepara las ofertas para los regalos de papá con estas imágenes!','resources/img/emojis-extension/family-man-boy.png','19. Día del Padre en ES');
} else if (CheckPushDays(day23)){
  spawnNotification('','resources/img/emojis-extension/smiling-face.png','20. Día Internacional de la Felicidad');
} else if (CheckPushDays(day24)){
  spawnNotification('¡Inspírate con los tips sobre Storytelling de Vero Ruiz del Vizo!','resources/img/emojis-extension/maple-leaf.png','21. Comienzo del otoño en el Hemisferio Sur y de la primavera en el Hemisferio Norte');
} else if (CheckPushDays(day25)){
  spawnNotification('Apaga la luz y enciende tus ideas para sumarte a esta iniciativa global.','resources/img/emojis-extension/earth-globe-americas.png','28. La hora del planeta');
} else if (CheckPushDays(day26)){
  spawnNotification('¡Muestra tus productos y ofertas con Email Marketing!','resources/img/emojis-extension/shopping-bags.png','01 - 02. Hot Sale en CO');
} else if (CheckPushDays(day27)){
  spawnNotification('','resources/img/emojis-extension/bicyclist.png','06. Día Internacional del Deporte');
} else if (CheckPushDays(day28)){
  spawnNotification('','resources/img/emojis-extension/male-health-worker-type-3.png','07. Día Mundial de la Salud');
} else if (CheckPushDays(day29)){
  spawnNotification('','resources/img/emojis-extension/rabbit-face.png','12. Pascuas');
} else if (CheckPushDays(day30)){
  spawnNotification('','resources/img/emojis-extension/female-teacher.png','13. Día del Maestro en EC');
} else if (CheckPushDays(day31)){
  spawnNotification('','resources/img/emojis-extension/artist-palette.png','15. Día Mundial del Arte');
  spawnNotification('','resources/img/emojis-extension/child.png','15. Día del Niño en ES');
} else if (CheckPushDays(day32)){
  spawnNotification('','resources/img/emojis-extension/books.png','23. Día Internacional del Libro');
} else if (CheckPushDays(day33)){
  spawnNotification('','resources/img/emojis-extension/artist-palette.png','27. Día Mundial del Diseño');
  spawnNotification('','resources/img/emojis-extension/child.png','27. Día del Niño en CO');
} else if (CheckPushDays(day34)){
  spawnNotification('Comparte fotos de las mascotas de tu equipo y genera Engagement en Redes con tu comunidad.','resources/img/emojis-extension/dog.png','29. Día del Animal en AR');
} else if (CheckPushDays(day35)){
  spawnNotification('','resources/img/emojis-extension/child.png','30. Día del Niño en MX');
} else if (CheckPushDays(day36)){
  spawnNotification('¡Feliz día a ti y a tu equipo!','resources/img/emojis-extension/winking-face.png','01. Día del Trabajador');
} else if (CheckPushDays(day37)){
  spawnNotification('¿Por qué no hacer un sorteo en tus Redes, sólo para ellas?','resources/img/emojis-extension/mother.png','03. Día de la Madre en ES');
} else if (CheckPushDays(day38)){
  spawnNotification('Nada más lindo que ser parte de una comunidad.','resources/img/emojis-extension/starwars.png','04. Día de Star Wars');
} else if (CheckPushDays(day39)){
  spawnNotification('','resources/img/emojis-extension/mother.png','10. Día de la Madre en MX - CL - PE - EC - UY - CO');
} else if (CheckPushDays(day40)){
  spawnNotification('','resources/img/emojis-extension/school.png','11. Día del Alumno en CL');
} else if (CheckPushDays(day41)){
  spawnNotification('','resources/img/emojis-extension/female-teacher.png','15. Día del Maestro en MX - CO');
  spawnNotification('','resources/img/emojis-extension/mother.png','15. Día de la Madre en PY');
} else if (CheckPushDays(day42)){
  spawnNotification('¡Crea mensajes publicitarios que contribuyan a un mundo mejor!','resources/img/emojis-extension/satellite-antenna.png','17. Día Internacional de Internet');
} else if (CheckPushDays(day43)){
  spawnNotification('','resources/img/emojis-extension/shopping-bags.png','25. Cyber Day en CL');
} else if (CheckPushDays(day44)){
  spawnNotification('','resources/img/emojis-extension/shopping-bags.png','27-31. Hot Sale en MX');
} else if (CheckPushDays(day45)){
  spawnNotification('¡Sigue en nuestras Redes nuestro cumpleaños #14!','resources/img/emojis-extension/birthday-cake.png','30. Aniversario #14 de Doppler');
} else if (CheckPushDays(day46)){
  spawnNotification('','resources/img/emojis-extension/child.png','01. Día del Niño en EC');
} else if (CheckPushDays(day47)){
  spawnNotification('Cuenta en Redes cómo cuidas tú al planeta.','resources/img/emojis-extension/recycling-symbol.png','05. Día Mundial del Medio Ambiente');
} else if (CheckPushDays(day48)){
  spawnNotification('','resources/img/emojis-extension/female-teacher.png','06. Día del Maestro en BO');
} else if (CheckPushDays(day49)){
  spawnNotification('','resources/img/emojis-extension/writing-hand.png','07. Día del Periodista en AR');
} else if (CheckPushDays(day50)){
  spawnNotification('','resources/img/emojis-extension/female-cook.png','18. Día de la Gastronomía Sostenible');
} else if (CheckPushDays(day51)){
  spawnNotification('¡Que sea el día más feliz del año!','resources/img/emojis-extension/grinning-face-with-smiling-eyes.png','19. Yellow Day');
} else if (CheckPushDays(day52)){
  spawnNotification('','resources/img/emojis-extension/family-man-boy.png','21. Día del Padre en AR - MX - PE - CL - EC - CO');
  spawnNotification('¡Toda renovación es positiva! Haz que tu negocio tome impulso con la Omnicanalidad.','resources/img/emojis-extension/snowflake.png','21. Comienzo del invierno en el Hemisferio Sur y del verano en el Hemisferio Norte.');
} else if (CheckPushDays(day53)){
  spawnNotification('','resources/img/emojis-extension/fireworks.png','23 y 24. Fiestas de San Juan en ES');
} else if (CheckPushDays(day54)){
  spawnNotification('','resources/img/emojis-extension/gear.png','27. Día de las PyMES');
} else if (CheckPushDays(day55)){
  spawnNotification('','resources/img/emojis-extension/loudspeaker.png','30. Día Mundial de las Redes Sociales');
} else if (CheckPushDays(day56)){
  spawnNotification('','resources/img/emojis-extension/shopping-bags.png','01. Semana de la dulzura en AR');
  spawnNotification('','resources/img/emojis-extension/shopping-bags.png','01. ¡Comienzo de Rebajas!');
} else if (CheckPushDays(day57)){
  spawnNotification('','resources/img/emojis-extension/writing-hand.png','11. Día del Periodista en CL');  
} else if (CheckPushDays(day58)){
  spawnNotification('','resources/img/emojis-extension/family-man-boy.png','12. Día del Padre en UY');  
} else if (CheckPushDays(day59)){
  spawnNotification('','resources/img/emojis-extension/grinning-face.png','17. Día Mundial del Emoji');  
  spawnNotification('','resources/img/emojis-extension/female-office-worker.png','17. Día del Asistente en MX');  
} else if (CheckPushDays(day60)){
  spawnNotification('','resources/img/emojis-extension/two-men-holding-hands.png','20. Día del Amigo en AR - CL - ES - UY - MX');  
} else if (CheckPushDays(day61)){
  spawnNotification('','resources/img/emojis-extension/keycap-number-sign.png','23. Día Internacional del Hashtag');  
  spawnNotification('','resources/img/emojis-extension/two-men-holding-hands.png','23. Día de la Amistad en BO ');  
} else if (CheckPushDays(day62)){
  spawnNotification('','resources/img/emojis-extension/older-woman.png','26. Día de los Abuelos y Abuelas en ES - AR - MX');  
} else if (CheckPushDays(day63)){
  spawnNotification('','resources/img/emojis-extension/two-men-holding-hands.png','30. Día del Amigo en PY');  
} else if (CheckPushDays(day64)){
  spawnNotification('','resources/img/emojis-extension/smiling-face-with-smiling-eyes.png','01. Día Mundial de la Alegría');  
} else if (CheckPushDays(day65)){
  spawnNotification('','resources/img/emojis-extension/writing-hand.png','04. Día del Periodista en CO');  
} else if (CheckPushDays(day66)){
  spawnNotification('¡No te olvides de saludar a los más pequeños en su día!','resources/img/emojis-extension/child.png','09. Día del Niño en CL');  
} else if (CheckPushDays(day67)){
  spawnNotification('','resources/img/emojis-extension/woman-gesturing.png','12. Día Internacional de la Juventud');  
} else if (CheckPushDays(day68)){
  spawnNotification('','resources/img/emojis-extension/child.png','16. Día del Niño en AR - PE');  
} else if (CheckPushDays(day69)){
  spawnNotification('Organiza un concurso en Redes Sociales. ¡La mejor foto (en su día) gana!','resources/img/emojis-extension/camera-with-flash.png','19. Día Mundial de la Fotografía');  
} else if (CheckPushDays(day70)){
  spawnNotification('','resources/img/emojis-extension/woman-raising-hand.png','04. Día de la Secretaria en AR');  
} else if (CheckPushDays(day71)){
  spawnNotification('Revive las ediciones anteriores y mira qué estamos armando para ti en goemms.com','resources/img/emojis-extension/headphone.png','10. ¡Cuenta regresiva para el EMMS!');  
} else if (CheckPushDays(day72)){
  spawnNotification('','resources/img/emojis-extension/female-teacher.png','11. Día del Maestro en AR');  
} else if (CheckPushDays(day73)){
  spawnNotification('','resources/img/emojis-extension/flag-for-chile.png','18 y 19. Fiestas Patrias en CL');  
} else if (CheckPushDays(day74)){
  spawnNotification('','resources/img/emojis-extension/rose.png','21. Comienzo de la primavera en el Hemisferio Sur y del otoño en el Hemisferio Norte');  
  spawnNotification('','resources/img/emojis-extension/school.png','21. Día del Estudiante en AR - CL');  
  spawnNotification('','resources/img/emojis-extension/peace-symbol.png','21. Día Internacional de la Paz');  
} else if (CheckPushDays(day75)){
  spawnNotification('¡Las ofertas en viajes son mejor recibidas con imágenes tentadoras!','resources/img/emojis-extension/luggage.png','27. Día Mundial del Turismo');  
} else if (CheckPushDays(day76)){
  spawnNotification('','resources/img/emojis-extension/musical-score.png','01. Día Internacional de la Música');  
  spawnNotification('','resources/img/emojis-extension/writing-hand.png','01. Día del Periodista en PE');  
} else if (CheckPushDays(day77)){
  spawnNotification('','resources/img/emojis-extension/dog.png','04. Día Mundial de los Animales');  
} else if (CheckPushDays(day78)){
  spawnNotification('','resources/img/emojis-extension/female-teacher.png','05. Día Mundial de los Docentes');  
} else if (CheckPushDays(day79)){
  spawnNotification('','resources/img/emojis-extension/grinning-face.png','12. Día del Respeto a la Diversidad Cultural');  
} else if (CheckPushDays(day80)){
  spawnNotification('','resources/img/emojis-extension/watermelon.png','16. Día Mundial de la Alimentación');  
  spawnNotification('','resources/img/emojis-extension/female-teacher.png','16. Día del Maestro (Profesor) en CL');  
} else if (CheckPushDays(day81)){
  spawnNotification('','resources/img/emojis-extension/mother.png','18. Día de la Madre en AR');  
} else if (CheckPushDays(day82)){
  spawnNotification('','resources/img/emojis-extension/electric-light-bulb.png','21. Día Mundial del Ahorro de Energía');  
} else if (CheckPushDays(day83)){
  spawnNotification('','resources/img/emojis-extension/jack-o-lantern.png','31. Halloween');  
} else if (CheckPushDays(day84)){
  spawnNotification('','resources/img/emojis-extension/folded-hands.png','01. Dìa de Todos los Santos');  
} else if (CheckPushDays(day85)){
  spawnNotification('','resources/img/emojis-extension/skull.png','02. Día de Muertos en MX');  
} else if (CheckPushDays(day86)){
  spawnNotification('','resources/img/emojis-extension/loudspeaker.png','04. Día Internacional del Marketing');  
} else if (CheckPushDays(day87)){
  spawnNotification('','resources/img/emojis-extension/shopping-bags.png','13-16. Buen Fin en MX');  
} else if (CheckPushDays(day88)){
  spawnNotification('','resources/img/emojis-extension/school.png','17. Día Internacional del Estudiante');  
} else if (CheckPushDays(day89)){
  spawnNotification('','resources/img/emojis-extension/child.png','20. Día Internacional del Niño');  
} else if (CheckPushDays(day90)){
  spawnNotification('','resources/img/emojis-extension/female-teacher.png','27. Día del Maestro en ES');  
  spawnNotification('En Fechas comerciales integra SMS, Push e Email Marketing para vender más.','resources/img/emojis-extension/shopping-bags.png','27. Black Friday');  
} else if (CheckPushDays(day91)){
  spawnNotification('','resources/img/emojis-extension/shopping-bags.png','30. Cyber Monday en MX - AR');  
  spawnNotification('','resources/img/emojis-extension/shopping-bags.png','30. Cyber Day en CL');  
} else if (CheckPushDays(day92)){
  spawnNotification('','resources/img/emojis-extension/woman-gesturing.png','03. Día de la Secretaria en CL');  
} else if (CheckPushDays(day93)){
  spawnNotification('','resources/img/emojis-extension/glowing-star.png','12. Día de la Virgen de Guadalupe en MX');  
} else if (CheckPushDays(day94)){
  spawnNotification('','resources/img/emojis-extension/umbrella-on-ground.png','21. Comienzo del verano en el Hemisferio Sur y del invierno en el Hemisferio Norte.');  
} else if (CheckPushDays(day95)){
  spawnNotification('','resources/img/emojis-extension/santa-claus.png','24. Nochebuena');  
} else if (CheckPushDays(day96)){
  spawnNotification('','resources/img/emojis-extension/christmas-tree.png','25. Navidad');  
} else if (CheckPushDays(day97)){
  spawnNotification('','resources/img/emojis-extension/rolling-on-the-floor-laughing.png','28. Día de los Inocentes.');  
} else if (CheckPushDays(day98)){
  spawnNotification('','resources/img/emojis-extension/sparkles.png','31. Fin de año.');  
} 

 function spawnNotification(theBody, theIcon, theTitle, theUrl) {
   var options = {
     body: theBody,
     icon: theIcon,
   }

   var n = new Notification(theTitle, options);
 }

 function showNotification() {
   Notification.requestPermission(function(result) {
     if (result === 'granted') {
       navigator.serviceWorker.ready.then(function(registration) {
         registration.spawnNotification();
       });
     }
   });
 }
