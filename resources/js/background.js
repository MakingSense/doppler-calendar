navigator.serviceWorker.register('../../sw.js');

// Push Notifications
 var theDay = (new Date()).toISOString().replace(/-/g, '/').split('T')[0],
//  testDay = new Date('2019/12/15');
 day1 = new Date('2021/01/06');
 day2 = new Date('2021/01/07');
 day3 = new Date('2021/01/14');
 day4 = new Date('2021/02/13');
 day5 = new Date('2021/02/14');
 day6 = new Date('2021/03/04');
 day7 = new Date('2021/03/19');
 day8 = new Date('2021/03/31');
 day9 = new Date('2021/04/04');
 day10 = new Date('2021/04/24');
 day11 = new Date('2021/04/30');
 day12 = new Date('2021/05/02');
 day13 = new Date('2021/05/09');
 day14 = new Date('2021/05/10');
 day15 = new Date('2021/05/20');
 day16 = new Date('2021/06/08');
 day17 = new Date('2021/06/20');
 day18 = new Date('2021/06/23');
 day19 = new Date('2021/07/01');
 day20 = new Date('2021/07/11');
 day21 = new Date('2021/07/23');
 day22 = new Date('2021/08/08');
 day23 = new Date('2021/08/15');
 day24 = new Date('2021/09/10');
 day25 = new Date('2021/09/30');
 day26 = new Date('2021/10/17');
 day27 = new Date('2021/10/19');
 day28 = new Date('2021/10/26');
 day29 = new Date('2021/10/31');
 day30 = new Date('2021/11/02');
 day31 = new Date('2021/11/12');
 day32 = new Date('2021/11/25');
 day33 = new Date('2021/11/26');
 day34 = new Date('2021/11/29');
 day35 = new Date('2021/12/25');

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
  spawnNotification('','','6 - Día de Reyes');
} else if (CheckPushDays(day2)){
  spawnNotification('¡Prepara tus Emails mostrando tus productos destacados y ofertas de último minuto! Y recuerda configurar tus Campañas de Carrito Abandonado, Producto Visitado y Cross Selling.','','7 - Comienzan las rebajas de invierno en ES y MX');
} else if (CheckPushDays(day3)){
  spawnNotification('','','14 - ¡Un mes para San Valentín!');
} else if (CheckPushDays(day4)){
  spawnNotification('','','13 al 16 - Carnavales');
} else if (CheckPushDays(day5)){
  spawnNotification('¡Celebra el amor y atrae clientes! Si quieres enviar Campañas que llamen la atención sin ser empalagosas, ten en cuenta estos consejos para tus Emails estacionales.','','14 - Día de los Enamorados');
} else if (CheckPushDays(day6)){
  spawnNotification('','','4 - ¡Un mes para Pascuas!');
} else if (CheckPushDays(day7)){
  spawnNotification('','','19 - Día del Padre en ES');
} else if (CheckPushDays(day8)){
  spawnNotification('Prepara un Plan de Comunicación efectivo para Jornadas especiales de venta como esta. Antes de poner manos a la obra con tus Campañas estacionales, revisa estos ejemplos y llévate buenas ideas.','','31 al 2 - Hot Sale en CO');
} else if (CheckPushDays(day9)){
  spawnNotification('Si hay una celebración con símbolos y elementos visuales para incluir en tus Campañas, ¡es esta! Crea los Emails más llamativos con saludos, regalos, juegos y descuentos.','','4 - Domingo de Pascua');
} else if (CheckPushDays(day10)){
  spawnNotification('','','24 - Día del Niño en CO');
} else if (CheckPushDays(day11)){
  spawnNotification('','','30 - Día del Niño en MX');
} else if (CheckPushDays(day12)){
  spawnNotification('','','2 - Día de la Madre en ES');
} else if (CheckPushDays(day13)){
  spawnNotification('','','9 - Día de la Madre en CO, EC, CL, PE, UY  ');
} else if (CheckPushDays(day14)){
  spawnNotification('Aprovecha toda la información que tienes sobre cada Contacto para crear contenidos hiperpersonalizados. ¡Incluso podrías enviar una Campaña de SMS y notificarlos sobre tus mejores productos para regalar en esta fecha!','','10 - Día de la Madre en MX');
} else if (CheckPushDays(day15)){
  spawnNotification('Es una fecha ideal para apelar a los sentimientos y las emociones. ¿Te animas a aplicar estos consejos de Copywriting en tus Emails? ¡Prepárate para aumentar las conversiones!','','20 - ¡Un mes para el Día del Padre!');
} else if (CheckPushDays(day16)){
  spawnNotification('','','8 al 10 - Cyberdays en CO');
} else if (CheckPushDays(day17)){
  spawnNotification('','','20 - Día del Padre en AR, CL, MX, CO, EC, PE, PY');
} else if (CheckPushDays(day18)){
  spawnNotification('','','23 - ¡Un mes para los Juegos Olímpicos!');
} else if (CheckPushDays(day19)){
  spawnNotification('','','1 - Comienzan las rebajas de verano en ES y MX');
} else if (CheckPushDays(day20)){
  spawnNotification('','','11 - Día del Padre en UY');
} else if (CheckPushDays(day21)){
  spawnNotification('Todo el mundo estará hablando de esto, y tú no puedes quedarte atrás. Prepara una estrategia de Redes Sociales acorde y aumenta el Engagement con tu audiencia. ¿Te animas a usar TikTok para lograr mayor viralización y posicionamiento de tu marca?','','23 - Comienzan los Juegos Olímpicos ');
} else if (CheckPushDays(day22)){
  spawnNotification('1 de cada 2 compras comienzan o se concretan por canales online. Descubre las herramientas que te ayudarán a digitalizar tu negocio y poner a punto tu estrategia.','','8 - Día del Niño en CL, UY');
} else if (CheckPushDays(day23)){
  spawnNotification('','','15 - Día del Niño en AR, PE ');
} else if (CheckPushDays(day24)){
  spawnNotification('¿Tu negocio se relaciona con el sector educativo? ¡Esta es una fecha que no puedes dejar pasar! Conoce algunas estrategias de Marketing efectivas y diseña tus Campañas aprovechando las Plantillas temáticas de regreso a clases.','','10 - Comienzan las clases en ES y MX');
} else if (CheckPushDays(day25)){
  spawnNotification('','','30 - ¡Un mes para Halloween!');
} else if (CheckPushDays(day26)){
  spawnNotification('','','17 - Día de la Madre en AR');
} else if (CheckPushDays(day27)){
  spawnNotification('','','19 al 21 - Cyberdays en CO');
} else if (CheckPushDays(day28)){
  spawnNotification('','','26 - ¡Un mes para Black Friday!');
} else if (CheckPushDays(day29)){
  spawnNotification('Mezcla en partes iguales segmentación, personalización y automatización para crear las Campañas más inquietantes. Truco extra: combínalas con el Envío Inteligente y llega a cada persona en el momento justo.','','31 - Halloween');
} else if (CheckPushDays(day30)){
  spawnNotification('','','2 - Día de Muertos en MX');
} else if (CheckPushDays(day31)){
  spawnNotification('','','12 al 15 - Buen Fin en MX');
} else if (CheckPushDays(day32)){
  spawnNotification('','','25 - ¡Un mes para Navidad!');
} else if (CheckPushDays(day33)){
  spawnNotification('Súmate a esta movida mundial y prepara tu E-commerce para las semanas con más ventas de todo el año. Repasa esta checklist y conoce cuáles son los Emails que no pueden faltar en tu Tienda Online.','','26 - Black Friday');
} else if (CheckPushDays(day34)){
  spawnNotification('','','29 - Cyber Monday');
} else if (CheckPushDays(day35)){
  spawnNotification('¿Quieres terminar el año de la mejor manera? Encuentra las claves para tu estrategia de Email & Automation Marketing en este Workshop especial de Navidad. Luego, planifica y calendariza tus envíos fácilmente con este recurso descargable.','','25 - Navidad');
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
