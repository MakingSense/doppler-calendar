// Push Notifications
 var t = new Date(),
 t = t.toLocaleDateString(),
 day1 = "12/17/2018",
 day2 = "12/20/2018",
 day3 = "12/21/2018",
 day4 = "12/22/2018",
 day5 = "12/23/2018",
 day6 = "01/07/2019",
 day7 = "01/09/2019",
 day8 = "01/20/2019",
 day9 = "01/25/2019",
 day10 = "01/29/2019",
 day11 = "01/30/2019",
 day12 = "02/15/2019",
 day13 = "02/16/2019",
 day14 = "02/21/2019",
 day15 = "03/02/2019",
 day16 = "03/04/2019",
 day17 = "03/05/2019",
 day18 = "03/06/2019",
 day19 = "03/15/2019",
 day20 = "03/22/2019",
 day21 = "03/23/2019",
 day22 = "03/29/2019",
 day23 = "03/31/2019",
 day24 = "03/31/2019",
 day25 = "04/06/2019",
 day26 = "04/08/2019",
 day27 = "04/08/2019",
 day28 = "04/08/2019",
 day29 = "04/14/2019",
 day30 = "04/15/2019",
 day31 = "04/16/2019",
 day32 = "04/19/2019",
 day33 = "04/20/2019",
 day34 = "04/25/2019",
 day35 = "04/27/2019",
 day36 = "04/30/2019",
 day37 = "04/30/2019",
 day38 = "04/30/2019",
 day39 = "04/30/2019",
 day40 = "05/02/2019",
 day41 = "05/12/2019",
 day42 = "05/15/2019",
 day43 = "05/17/2019",
 day44 = "05/21/2019",
 day45 = "05/22/2019",
 day46 = "05/23/2019",
 day47 = "06/01/2019",
 day48 = "06/03/2019",
 day49 = "06/06/2019",
 day50 = "06/12/2019",
 day51 = "06/15/2019",
 day52 = "06/16/2019",
 day53 = "06/26/2019",
 day54 = "06/29/2019",
 day55 = "07/02/2019",
 day56 = "07/02/2019",
 day57 = "07/05/2019",
 day58 = "07/08/2019",
 day59 = "07/11/2019",
 day60 = "07/15/2019",
 day61 = "07/20/2019",
 day62 = "07/27/2019",
 day63 = "08/03/2019",
 day64 = "08/04/2019",
 day65 = "08/20/2019",
 day66 = "08/26/2019",
 day67 = "08/27/2019",
 day68 = "09/05/2019",
 day69 = "09/06/2019",
 day70 = "09/12/2019",
 day71 = "09/16/2019",
 day72 = "09/16/2019",
 day73 = "09/19/2019",
 day74 = "09/20/2019",
 day75 = "09/27/2019",
 day76 = "10/01/2019",
 day77 = "10/05/2019",
 day78 = "10/16/2019",
 day79 = "10/16/2019",
 day80 = "10/26/2019",
 day81 = "10/31/2019",
 day82 = "11/02/2019",
 day83 = "11/05/2019",
 day84 = "11/14/2019",
 day85 = "12/06/2019",
 day86 = "12/09/2019",
 day87 = "12/10/2019",
 day88 = "12/13/2019",
 day89 = "12/16/2019",
 day90 = "11/12/2019";

 if (t == day1){
   spawnNotification(
     "01 - Año Nuevo",
     "¡Saluda a tus Suscriptores y seguidores deseándoles un magnífico año!",
     "resources/img/emojis-push/01-anio-nuevo.png");
 }else if (t == day2){
   spawnNotification(
     "04 - Día del Periodista en MX",
     "Haz una acción en Redes",
     "resources/img/emojis-push/02-socialmedia.png");
 }else if (t == day3){
   spawnNotification(
     "05 - Día del Periodista en EC",
     "Haz una acción en Redes",
     "resources/img/emojis-push/02-socialmedia.png");
 }else if (t == day4){
   spawnNotification(
     "06 - Día de los Reyes Magos",
     "Envía promociones u organiza un sorteo especial, ¡y hazle un favor a los Reyes!",
     "resources/img/emojis-push/03-reyes.png");
   }else if (t == day5){
     spawnNotification(
       "07 - Comienzan las rebajas de temporada",
       "Comparte las más tentadoras",
       "resources/img/emojis-push/04-compras-cyber-blackfriday.png");
   }else if (t == day6){
     spawnNotification(
       "22 - Día del Community Manager",
       "Celebra este día con una acción e invita a tu base a participar.",
       "resources/img/emojis-push/05-comunity-manager.png");
   }else if (t == day7){
     spawnNotification(
       "24 - Día del Periodista en ES",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day8){
     spawnNotification(
       "04 - Día Internacional contra el Cáncer",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day9){
     spawnNotification(
       "09 - Día del Periodista en CO",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day10){
     spawnNotification(
       "13 - Día Mundial del Soltero",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day11){
     spawnNotification(
       "14 - Día de San Valentín",
       "Envía una Campaña de Email y haz una acción en Redes",
       "resources/img/emojis-push/06-sanvalentin.png");
   }else if (t == day12){
     spawnNotification(
       "02 - 05 - Carnaval",
       "¡La alegría no tiene fin! Celébralo enviando descuentos y promociones.",
       "resources/img/emojis-push/07-carnaval.png");
   }else if (t == day13){
     spawnNotification(
       "03 - Día de la Naturaleza",
       "Cuéntales a tus seguidores lo que haces en tu negocio para cuidarla.",
       "resources/img/emojis-push/36-naturaleza.png");
   }else if (t == day14){
     spawnNotification(
       "08 - Día Internacional de la Mujer",
       "Promociona tus mejores productos para ellas y salúdalas en su día.",
       "resources/img/emojis-push/08-mujer.png");
   }else if (t == day15){
     spawnNotification(
       "17 - San Patricio",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day16){
     spawnNotification(
       "19 - Día del Padre en ES",
       "Envía una Campaña de Email y haz una acción en Redes",
       "resources/img/emojis-push/09-padre.png");
   }else if (t == day17){
     spawnNotification(
       "20 - Día Internacional de la Felicidad",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day18){
     spawnNotification(
       "21 - Comienzo del otoño en el Hemisferio Sur y de la primavera en el Hemisferio Norte",
       "Utiliza colores, frases y objetos relacionados con la nueva estación.",
       "resources/img/emojis-push/10-otonio-primavera.png");
   }else if (t == day19){
     spawnNotification(
       "30 - La Hora del Planeta",
       "Comparte en tus Redes Sociales qué harás para sumarte a esta iniciativa e invita a participar.",
       "resources/img/emojis-push/11-hora-planeta.png");
   }else if (t == day20){
     spawnNotification(
       "06 - Día Internacional del Deporte",
       "¿Tu marca se relaciona con el mundo fitness? Brinda tips relacionados.",
       "resources/img/emojis-push/12-deporte.png");
   }else if (t == day21){
     spawnNotification(
       "07 - Día Mundial de la Salud",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day22){
     spawnNotification(
       "13 - Día del Maestro en EC",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day23){
     spawnNotification(
       "15 - Día Mundial del Arte",
       "Haz una acción en Redes",
       "resources/img/icon128.png");
   }else if (t == day24){
     spawnNotification(
       "15 - Día del Niño en ES",
       "Envía tus Campañas al menos dos semanas antes. ¡No olvides incluir tus mejores ofertas!",
       "resources/img/emojis-push/13-ninio.png");
   }else if (t == day25){
     spawnNotification(
       "21 - Pascua",
       "Envía una Campaña de Email y haz una acción en Redes",
       "resources/img/emojis-push/13-pascua.png");
   }else if (t == day26){
     spawnNotification(
       "23 - Día Internacional del Libro",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day27){
     spawnNotification(
       "23 - Día Mundial del Diseño",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day28){
     spawnNotification(
       "23 - Día del Niño en Colombia",
       "Envía una Campaña de Email",
       "resources/img/emojis-push/13-ninio.png");
   }else if (t == day29){
     spawnNotification(
       "29 - Día del Animal en AR",
       "Sube fotos de tu equipo y sus mascotas para interactuar con tu comunidad.",
       "resources/img/emojis-push/14-animal.png");
   }else if (t == day30){
     spawnNotification(
       "30 - Día del Niño en MX",
       "Envía una Campaña de Email",
       "resources/img/emojis-push/13-ninio.png");
   }else if (t == day31){
     spawnNotification(
       "01 - Día del Trabajador",
       "Organiza una celebración o entrega un presente a los miembros de tu equipo y compártelo en tus Redes Sociales.",
       "resources/img/emojis-push/15-trabajador.png");
   }else if (t == day32){
     spawnNotification(
       "04 - Día de Star Wars",
       "¡Que el Engagement esté contigo!",
       "resources/img/emojis-push/16-star-wars.png");
   }else if (t == day33){
     spawnNotification(
       "05 - Día de la Madre en ES",
       "Anticipa tus productos, ofrece un beneficio por compra online y salúdalas usando estas imágenes.",
       "resources/img/emojis-push/17-madre.png");
   }else if (t == day34){
     spawnNotification(
       "10 - Día de la Madre en MX",
       "Envía una Campaña de Email y haz una acción en Redes",
       "resources/img/emojis-push/17-madre.png");
   }else if (t == day35){
     spawnNotification(
       "12 - Día de la Madre en PE - EC - CL - CO - URY",
       "Envía una Campaña de Email y haz una acción en Redes",
       "resources/img/emojis-push/17-madre.png");
   }else if (t == day36){
     spawnNotification(
       "15 - Día del Maestro en MX - CO",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day37){
     spawnNotification(
       "15 - Día de la Madre en PAR",
       "Envía una Campaña de Email y haz una acción en Redes",
       "resources/img/emojis-push/17-madre.png");
   }else if (t == day38){
     spawnNotification(
       "15 - Día Internacional de la Familia",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day39){
     spawnNotification(
       "15 - 17 - Hot Sale",
       "Avísales a todos tus clientes de tus ofertas imperdibles y por tiempo limitado.",
       "resources/img/emojis-push/04-compras-cyber-blackfriday.png");
   }else if (t == day40){
     spawnNotification(
       "17 - Día Internacional de Internet",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day41){
     spawnNotification(
       "27 - Día del Marketing",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day42){
     spawnNotification(
       "30 - Aniversario #30 de Doppler :)",
       "Mira cómo lo celebramos en 2018 y prepárate para el festejo de 2019.",
       "resources/img/emojis-push/18-cumple-doppler.png");
   }else if (t == day43){
     spawnNotification(
       "01 - Día del Niño en EC",
       "Envía Campañas para promocionar tus productos y saludar al niño que habita en cada uno.",
       "resources/img/emojis-push/13-ninio.png");
   }else if (t == day44){
     spawnNotification(
       "05 - Día Mundial del Medio Ambiente",
       "Haz un posteo para generar conciencia y mostrar tu compromiso.",
       "resources/img/emojis-push/19-medio-ambiente.png");
   }else if (t == day45){
     spawnNotification(
       "06 - Día del Maestro en BO",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day46){
     spawnNotification(
       "07 - Día del Periodista en AR",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day47){
     spawnNotification(
       "16 - Día del Padre en AR - MX - PE - CL - PAR - EC - CO",
       "Envía una Campaña de Email y haz una acción en Redes",
       "resources/img/emojis-push/09-padre.png");
   }else if (t == day48){
     spawnNotification(
       "18 - Día de la Gastronomía",
       "¿Te dedicas a esta actividad? Comparte una historia de tu negocio u organiza un concurso para celebrarlo.",
       "resources/img/emojis-push/20-gastronomia.png");
   }else if (t == day49){
     spawnNotification(
       "21 - Comienzo del invierno en el Hemisferio Sur y del verano en el Hemisferio Norte",
       "Envía una Campaña de Email y haz una acción en Redes",
       "resources/img/emojis-push/21-invierno-verano.png");
   }else if (t == day50){
     spawnNotification(
       "27 - Día de las PyMEs",
       "¿Es el día de tu negocio o de alguna empresa amiga? Este Tutorial podría interesarte.",
       "resources/img/emojis-push/22-pyme.png");
   }else if (t == day51){
     spawnNotification(
       "30 - Día Mundial de las Redes Sociales",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day52){
     spawnNotification(
       "01 - Semana de la Dulzura en AR",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day53){
     spawnNotification(
       "11 - Día del Periodista en CL",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day54){
     spawnNotification(
       "14 - Día del Padre en URY",
       "Envía una Campaña de Email y haz una acción en Redes",
       "resources/img/emojis-push/09-padre.png");
   }else if (t == day55){
     spawnNotification(
       "17 - Día Mundial del Emoji",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day56){
     spawnNotification(
       "17 - Día de la Asistente en MX",
       "¡Algunos de tus productos podrían ser un buen regalo!",
       "resources/img/emojis-push/23-asistente.png");
   }else if (t == day57){
     spawnNotification(
       "20 - Día del Amigo en AR - CL - ES - URY",
       "¡Todos celebran este día! Es la ocasión ideal para comunicar tus ofertas.",
       "resources/img/emojis-push/24-amigo.png");
   }else if (t == day58){
     spawnNotification(
       "23 - Día de la Amistad en BO",
       "Envía una Campaña de Email y haz una acción en Redes",
       "resources/img/emojis-push/24-amigo.png");
   }else if (t == day59){
     spawnNotification(
       "26 - Día de los Abuelos y Abuelas en AR - ES",
       "¿Alguno de tus productos podría ser un buen obsequio? Sugiérelo.",
       "resources/img/emojis-push/25-abuelo.png");
   }else if (t == day60){
     spawnNotification(
       "30 - Día del Amigo en PAR",
       "Envía una Campaña de Email y haz una acción en Redes",
       "resources/img/emojis-push/24-amigo.png");
   }else if (t == day61){
     spawnNotification(
       "04 - Día del Periodista en CO",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day62){
     spawnNotification(
       "11 - Día del Niño en CL",
       "Envía una Campaña de Email",
       "resources/img/emojis-push/13-ninio.png");
   }else if (t == day63){
     spawnNotification(
       "18 - Día del Niño en AR - PE",
       "Envía una Campaña de Email",
       "resources/img/emojis-push/13-ninio.png");
   }else if (t == day64){
     spawnNotification(
       "19 - Día Mundial de la Fotografía",
       "Haz una selfie, boomerang o foto divertida con tu equipo para celebrarlo.",
       "resources/img/emojis-push/26-fotografia.png");
   }else if (t == day65){
     spawnNotification(
       "04 - Día de la Secretaria en AR",
       "Envía una Campaña de Email y haz una acción en Redes",
       "resources/img/emojis-push/27-mail.png");
   }else if (t == day66){
     spawnNotification(
       "10 - ¡Cuenta regresiva para el EMMS!",
       "Suscríbete para saber cuándo y cómo será el evento online de Marketing más convocante.",
       "resources/img/emojis-push/28-emms.png");
   }else if (t == day67){
     spawnNotification(
       "11 - Día del Maestro en AR",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day68){
     spawnNotification(
       "21 - Comienzo de la primavera en el Hemisferio Sur y del otoño en el Hemisferio Norte",
       "Muestra un adelanto de tus nuevos productos de temporada.",
       "resources/img/emojis-push/10-otonio-primavera.png");
   }else if (t == day69){
     spawnNotification(
       "21 - Día del Estudiante en AR - CL",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day70){
     spawnNotification(
       "27 - Día Mundial del Turismo",
       "Llévate los mejores consejos de Email Marketing para el sector.",
       "resources/img/emojis-push/29-turismo.png");
   }else if (t == day71){
     spawnNotification(
       "01 - Día Internacional de la Música",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day72){
     spawnNotification(
       "01 - Día del Periodista en PE",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day73){
     spawnNotification(
       "04 - Día Internacional del Animal",
       "Haz una acción en Redes",
       "resources/img/emojis-push/14-animal.png");
   }else if (t == day74){
     spawnNotification(
       "05 - Día Mundial de los Docentes",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day75){
     spawnNotification(
       "12 - Día del Respeto a la Diversidad Cultural",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day76){
     spawnNotification(
       "16 - Día Mundial de la Alimentación",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day77){
     spawnNotification(
       "20 - Día de la Madre en AR",
       "Recomienda los mejores productos de tu catálogo para agasajarlas en su día.",
       "resources/img/emojis-push/17-madre.png");
   }else if (t == day78){
     spawnNotification(
       "31 - Día Mundial del Ahorro",
       "Propón a tus clientes adherirse a la facturación electrónica. Descubre cómo enviar archivos adjuntos por Email",
       "resources/img/emojis-push/30-ahorro.png");
   }else if (t == day79){
     spawnNotification(
       "31 - Halloween",
       "Pon un toque de terror a tus acciones de Noche de Brujas usando las Plantillas temáticas.",
       "resources/img/emojis-push/15-trabajador.png");
   }else if (t == day80){
     spawnNotification(
       "10 - Día Mundial de la Ciencia",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day81){
     spawnNotification(
       "15 - 18 - Buen Fin en MX",
       "Préndete a la movida comercial de estos días, ¡pero envía tus Campañas ya desde principio de mes!",
       "resources/img/emojis-push/04-compras-cyber-blackfriday.png");
   }else if (t == day82){
     spawnNotification(
       "17 - Día Internacional del Estudiante",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day83){
     spawnNotification(
       "20 - Día Internacional del Niño",
       "Haz una acción en Redes",
       "resources/img/emojis-push/13-ninio.png");
   }else if (t == day90){
     spawnNotification(
       "27 - Día del Maestro en ES",
       "Haz una acción en Redes",
       "resources/img/emojis-push/02-socialmedia.png");
   }else if (t == day84){
     spawnNotification(
       "29 - Black Friday",
       "Procura que tus Emails sean Responsive, ¡al menos la mitad de tus Suscriptores los abrirán desde dispositivos móviles!",
       "resources/img/emojis-push/04-compras-cyber-blackfriday.png");
   }else if (t == day85){
     spawnNotification(
       "21 - Comienzo del verano en el Hemisferio Sur y del invierno en el Hemisferio Norte",
       "Envía una Campaña de Email y haz una acción en Redes",
       "resources/img/emojis-push/21-invierno-verano.png");
   }else if (t == day86){
     spawnNotification(
       "24 - Nochebuena",
       "Haz una acción en Redes",
       "resources/img/emojis-push/31-nochebuena.png");
   }else if (t == day87){
     spawnNotification(
       "25 - Navidad",
       "Envía buenos deseos o un regalo especial para tus clientes. Antes les habrás hecho llegar tu catálogo de productos.",
       "resources/img/emojis-push/32-navidad.png");
   }else if (t == day88){
     spawnNotification(
       "28 - Día de los Inocentes",
       "Piensa una broma ingeniosa o un engaño divertido que no deje indiferentes a tus seguidores.",
       "resources/img/emojis-push/34-inocentes.png");
   }else if (t == day89){
     spawnNotification(
       "31 - Fin de Año",
       "A las puertas de un nuevo año, envía un saludo especial.",
       "resources/img/emojis-push/33-anio-nuevo.png");
   }

 function spawnNotification(theTitle, theBody, theIcon){
   var options = {
     body: theBody,
     icon: theIcon
   }
   var n = new Notification(theTitle, options);
   setTimeout(n.close.bind(n), 8000);
 }

function notificationsCheck(){
  Notification.requestPermission().then(function(result){
    console.log(result);
  });
}
