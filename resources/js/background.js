navigator.serviceWorker.register('../../sw.js');

// Push Notifications
 var theDay = (new Date()).toISOString().replace(/-/g, '/').split('T')[0],
 day1 = '2018/12/17',
 day1_1 = '2018/12/31',
 day2 = '2018/12/20',
 day2_1 = '2019/01/03',
 day3 = '2018/12/21',
 day3_1 = '2019/01/04',
 day4 = '2018/12/22',
 day4_1 = '2019/01/05',
 day5 = '2018/12/23',
 day5_1 = '2019/01/06',
 day6 = '2019/01/13',
 day6_1 = '2019/01/27',
 day7 = '2019/01/09',
 day7_1 = '2019/01/23',
 day8 = '2019/01/20',
 day8_1 = '2019/02/03',
 day9 = '2019/01/25',
 day9_1 = '2019/02/08',
 day10 = '2019/01/29',
 day10_1 = '2019/02/12',
 day11 = '2019/01/30',
 day11_1 = '2019/02/13',
 day12 = '2019/02/15',
 day12_1 = '2019/03/01',
 day13 = '2019/02/16',
 day13_1 = '2019/03/02',
 day14 = '2019/02/21',
 day14_1 = '2019/03/07',
 day15 = '2019/03/02',
 day15_1 = '2019/03/16',
 day16 = '2019/03/04',
 day16_1 = '2019/03/18',
 day17 = '2019/03/05',
 day17_1 = '2019/03/19',
 day18 = '2019/03/06',
 day18_1 = '2019/03/20',
 day19 = '2019/03/15',
 day19_1 = '2019/03/29',
 day20 = '2019/03/22',
 day20_1 = '2019/04/05',
 day21 = '2019/03/23',
 day21_1 = '2019/04/06',
 day22 = '2019/03/29',
 day22_1 = '2019/04/12',
 day23 = '2019/03/31',
 day23_1 = '2019/04/14',
 day24 = '2019/03/31',
 day24_1 = '2019/04/14',
 day25 = '2019/04/06',
 day25_1 = '2019/04/20',
 day26 = '2019/04/08',
 day26_1 = '2019/04/22',
 day27 = '2019/04/12',
 day27_1 = '2019/04/26',
 day28 = '2019/04/12',
 day28_1 = '2019/04/26',
 day29 = '2019/04/14',
 day29_1 = '2019/04/28',
 day30 = '2019/04/15',
 day30_1 = '2019/04/29',
 day31 = '2019/04/16',
 day31_1 = '2019/04/30',
 day32 = '2019/04/19',
 day32_1 = '2019/05/03',
 day33 = '2019/04/20',
 day33_1 = '2019/05/04',
 day34 = '2019/04/25',
 day34_1 = '2019/05/09',
 day35 = '2019/04/27',
 day35_1 = '2019/05/11',
 day36 = '2019/04/30',
 day36_1 = '2019/05/14',
 day37 = '2019/04/30',
 day37_1 = '2019/05/14',
 day38 = '2019/04/30',
 day38_1 = '2019/05/14',
 day39 = '2019/04/30',
 day39_1 = '2019/05/14',
 day40 = '2019/05/02',
 day40_1 = '2019/05/16',
 day42 = '2019/05/15',
 day42_1 = '2019/05/29',
 day43 = '2019/05/17',
 day43_1 = '2019/05/31',
 day44 = '2019/05/21',
 day44_1 = '2019/06/04',
 day45 = '2019/05/22',
 day45_1 = '2019/06/05',
 day46 = '2019/05/23',
 day46_1 = '2019/06/06',
 day47 = '2019/06/01',
 day47_1 = '2019/06/15',
 day48 = '2019/06/03',
 day48_1 = '2019/06/17',
 day49 = '2019/06/06',
 day49_1 = '2019/06/20',
 day50 = '2019/06/12',
 day50_1 = '2019/06/26',
 day51 = '2019/06/15',
 day51_1 = '2019/06/29',
 day52 = '2019/06/16',
 day52_1 = '2019/06/30',
 day53 = '2019/06/26',
 day53_1 = '2019/06/10',
 day54 = '2019/06/29',
 day54_1 = '2019/06/13',
 day55 = '2019/07/02',
 day55_1 = '2019/07/16',
 day56 = '2019/07/02',
 day56_1 = '2019/07/16',
 day57 = '2019/07/05',
 day57_1 = '2019/07/19',
 day58 = '2019/07/08',
 day58_1 = '2019/07/22',
 day59 = '2019/07/11',
 day59_1 = '2019/07/25',
 day60 = '2019/07/15',
 day60_1 = '2019/07/29',
 day61 = '2019/07/20',
 day61_1 = '2019/07/03',
 day62 = '2019/07/27',
 day62_1 = '2019/07/10',
 day63 = '2019/08/03',
 day63_1 = '2019/08/17',
 day64 = '2019/08/04',
 day64_1 = '2019/08/18',
 day65 = '2019/08/20',
 day65_1 = '2019/09/03',
 day66 = '2019/08/26',
 day66_1 = '2019/09/09',
 day67 = '2019/08/27',
 day67_1 = '2019/09/10',
 day68 = '2019/09/06',
 day68_1 = '2019/09/20',
 day69 = '2019/09/06',
 day69_1 = '2019/09/20',
 day70 = '2019/09/12',
 day70_1 = '2019/09/26',
 day71 = '2019/09/16',
 day71_1 = '2019/09/30',
 day72 = '2019/09/16',
 day72_1 = '2019/09/30',
 day73 = '2019/09/19',
 day73_1 = '2019/10/03',
 day74 = '2019/09/20',
 day74_1 = '2019/10/04',
 day75 = '2019/09/27',
 day75_1 = '2019/10/11',
 day76 = '2019/10/01',
 day76_1 = '2019/10/15',
 day77 = '2019/10/05',
 day77_1 = '2019/10/19',
 day78 = '2019/10/16',
 day78_1 = '2019/10/30',
 day79 = '2019/10/16',
 day79_1 = '2019/10/30',
 day80 = '2019/10/26',
 day80_1 = '2019/11/09',
 day81 = '2019/10/31',
 day81_1 = '2019/11/14',
 day82 = '2019/11/02',
 day82_1 = '2019/11/16',
 day83 = '2019/11/05',
 day83_1 = '2019/11/19',
 day84 = '2019/11/12',
 day84_1 = '2019/11/26',
 day85 = '2019/11/14',
 day85_1 = '2019/11/28',
 day86 = '2019/12/06',
 day86_1 = '2019/12/20',
 day87 = '2019/12/09',
 day87_1 = '2019/12/23',
 day88 = '2019/12/10',
 day88_1 = '2019/12/24',
 day89 = '2019/12/13',
 day89_1 = '2019/12/27',
 day90 = '2019/12/16',
 day90_1 = '2019/12/30',
 day91 = '2019/03/17',
 day91_1 = '2019/04/01',
 day92 = '2019/04/14',
 day92_1 = '2019/04/28',
 day93 = '2019/05/12',
 day93_1 = '2019/05/26',
 day94 = '2019/07/01',
 day94_1 = '2019/07/14',
 day95 = '2019/10/17',
 day95_1 = '2019/11/01',
 day96 = '2019/10/19',
 day96_1 = '2019/11/03',
 day97 = '2019/10/19',
 day97_1 = '2019/11/03',
 day98 = '2019/11/09',
 day98_1 = '2019/11/24',
 day99 = '2019/11/16',
 day99_1 = '2019/12/01',
 day100 = '2019/11/27',
 day100_1 = '2019/12/11';

 if (theDay == day1){
   spawnNotification('¡Saluda a tus Suscriptores y seguidores deseándoles un magnífico año!','resources/img/emojis-push/01-anio-nuevo.png','01 - Año Nuevo');
 }else if (theDay == day1_1){
   spawnNotification('¡Saluda a tus Suscriptores y seguidores deseándoles un magnífico año!','resources/img/emojis-push/01-anio-nuevo.png','01 - Año Nuevo');
 }else if (theDay == day2){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','04 - Día del Periodista en MX');
 }else if (theDay == day2_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','04 - Día del Periodista en MX');
 }else if (theDay == day3){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','05 - Día del Periodista en EC');
 }else if (theDay == day3_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','05 - Día del Periodista en EC');
 }else if (theDay == day4){
   spawnNotification('Envía promociones u organiza un sorteo especial, ¡y hazle un favor a los Reyes!','resources/img/emojis-push/03-reyes.png','06 - Día de los Reyes Magos');
 }else if (theDay == day4_1){
   spawnNotification('Envía promociones u organiza un sorteo especial, ¡y hazle un favor a los Reyes!','resources/img/emojis-push/03-reyes.png','06 - Día de los Reyes Magos');
 }else if (theDay == day5){
   spawnNotification('Comparte las más tentadoras','resources/img/emojis-push/04-compras-cyber-blackfriday.png','07 - Comienzan las rebajas de temporada');
 }else if (theDay == day5_1){
   spawnNotification('Comparte las más tentadoras','resources/img/emojis-push/04-compras-cyber-blackfriday.png','07 - Comienzan las rebajas de temporada');
 }else if (theDay == day6){
   spawnNotification('Celebra este día con una acción e invita a tu base a participar.','resources/img/emojis-push/05-comunity-manager.png','28 - Día del Community Manager');
 }else if (theDay == day6_1){
   spawnNotification('Celebra este día con una acción e invita a tu base a participar.','resources/img/emojis-push/05-comunity-manager.png','28 - Día del Community Manager');
 }else if (theDay == day7){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','24 - Día del Periodista en ES');
 }else if (theDay == day7_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','24 - Día del Periodista en ES');
 }else if (theDay == day8){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','04 - Día Internacional contra el Cáncer');
 }else if (theDay == day8_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','04 - Día Internacional contra el Cáncer');
 }else if (theDay == day9){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','09 - Día del Periodista en CO');
 }else if (theDay == day9_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','09 - Día del Periodista en CO');
 }else if (theDay == day10){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','13 - Día Mundial del Soltero');
 }else if (theDay == day10_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','13 - Día Mundial del Soltero');
 }else if (theDay == day11){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/06-sanvalentin.png','14 - Día de San Valentín');
 }else if (theDay == day11_1){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/06-sanvalentin.png','14 - Día de San Valentín');
 }else if (theDay == day12){
   spawnNotification('¡La alegría no tiene fin! Celébralo enviando descuentos y promociones.','resources/img/emojis-push/07-carnaval.png','04 - 05 - Carnaval');
 }else if (theDay == day12_1){
   spawnNotification('¡La alegría no tiene fin! Celébralo enviando descuentos y promociones.','resources/img/emojis-push/07-carnaval.png','04 - 05 - Carnaval');
 }else if (theDay == day13){
   spawnNotification('Cuéntales a tus seguidores lo que haces en tu negocio para cuidarla.','resources/img/emojis-push/36-naturaleza.png','03 - Día de la Naturaleza');
 }else if (theDay == day13_1){
   spawnNotification('Cuéntales a tus seguidores lo que haces en tu negocio para cuidarla.','resources/img/emojis-push/36-naturaleza.png','03 - Día de la Naturaleza');
 }else if (theDay == day14){
   spawnNotification('Promociona tus mejores productos para ellas y salúdalas en su día.','resources/img/emojis-push/08-mujer.png','08 - Día Internacional de la Mujer');
 }else if (theDay == day14_1){
   spawnNotification('Promociona tus mejores productos para ellas y salúdalas en su día.','resources/img/emojis-push/08-mujer.png','08 - Día Internacional de la Mujer');
 }else if (theDay == day15){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','17 - San Patricio');
 }else if (theDay == day15_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','17 - San Patricio');
 }else if (theDay == day16){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/09-padre.png','19 - Día del Padre en ES');
 }else if (theDay == day16_1){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/09-padre.png','19 - Día del Padre en ES');
 }else if (theDay == day17){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','20 - Día Internacional de la Felicidad');
 }else if (theDay == day17_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','20 - Día Internacional de la Felicidad');
 }else if (theDay == day18){
   spawnNotification('Utiliza colores, frases y objetos relacionados con la nueva estación.','resources/img/emojis-push/10-otonio-primavera.png','21 - Comienzo del otoño en el Hemisferio Sur y de la primavera en el Hemisferio Norte');
 }else if (theDay == day18_1){
   spawnNotification('Utiliza colores, frases y objetos relacionados con la nueva estación.','resources/img/emojis-push/10-otonio-primavera.png','21 - Comienzo del otoño en el Hemisferio Sur y de la primavera en el Hemisferio Norte');
 }else if (theDay == day19){
   spawnNotification('Comparte en tus Redes Sociales qué harás para sumarte a esta iniciativa e invita a participar.','resources/img/emojis-push/11-hora-planeta.png','30 - La Hora del Planeta');
 }else if (theDay == day19_1){
   spawnNotification('Comparte en tus Redes Sociales qué harás para sumarte a esta iniciativa e invita a participar.','resources/img/emojis-push/11-hora-planeta.png','30 - La Hora del Planeta'); //fin de marzo
 }else if (theDay == day20){
   spawnNotification('¿Tu marca se relaciona con el mundo fitness? Brinda tips relacionados.','resources/img/emojis-push/12-deporte.png','06 - Día Internacional del Deporte');
 }else if (theDay == day20_1){
   spawnNotification('¿Tu marca se relaciona con el mundo fitness? Brinda tips relacionados.','resources/img/emojis-push/12-deporte.png','06 - Día Internacional del Deporte');
 }else if (theDay == day21){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','07 - Día Mundial de la Salud');
 }else if (theDay == day21_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','07 - Día Mundial de la Salud');
 }else if (theDay == day22){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','13 - Día del Maestro en EC');
 }else if (theDay == day22_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','13 - Día del Maestro en EC');
 }else if (theDay == day23){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','15 - Día Mundial del Arte');
 }else if (theDay == day23_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','15 - Día Mundial del Arte');
 }else if (theDay == day24){
   spawnNotification('Envía tus Campañas al menos dos semanas antes. ¡No olvides incluir tus mejores ofertas!','resources/img/emojis-push/13-ninio.png','15 - Día del Niño en ES');
 }else if (theDay == day24_1){
   spawnNotification('Envía tus Campañas al menos dos semanas antes. ¡No olvides incluir tus mejores ofertas!','resources/img/emojis-push/13-ninio.png','15 - Día del Niño en ES');
 }else if (theDay == day25){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/13-pascua.png','21 - Pascua');
 }else if (theDay == day25_1){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/13-pascua.png','21 - Pascua');
 }else if (theDay == day26){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','23 - Día Internacional del Libro');
 }else if (theDay == day26_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','23 - Día Internacional del Libro');
 }else if (theDay == day27){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','27 - Día Mundial del Diseño');
 }else if (theDay == day27_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','27 - Día Mundial del Diseño');
 }else if (theDay == day28){
   spawnNotification('Envía una Campaña de Email','resources/img/emojis-push/13-ninio.png','27 - Día del Niño en Colombia');
 }else if (theDay == day28_1){
   spawnNotification('Envía una Campaña de Email','resources/img/emojis-push/13-ninio.png','27 - Día del Niño en Colombia');
 }else if (theDay == day29){
   spawnNotification('Sube fotos de tu equipo y sus mascotas para interactuar con tu comunidad.','resources/img/emojis-push/14-animal.png','29 - Día del Animal en AR');
 }else if (theDay == day29_1){
   spawnNotification('Sube fotos de tu equipo y sus mascotas para interactuar con tu comunidad.','resources/img/emojis-push/14-animal.png','29 - Día del Animal en AR');
 }else if (theDay == day30){
   spawnNotification('Envía una Campaña de Email','resources/img/emojis-push/13-ninio.png','30 - Día del Niño en MX');
 }else if (theDay == day30_1){
   spawnNotification('Envía una Campaña de Email','resources/img/emojis-push/13-ninio.png','30 - Día del Niño en MX');
 }else if (theDay == day31){
   spawnNotification('Organiza una celebración o entrega un presente a los miembros de tu equipo y compártelo en tus Redes Sociales.','resources/img/emojis-push/15-trabajador.png','01 - Día del Trabajador');
 }else if (theDay == day31_1){
   spawnNotification('Organiza una celebración o entrega un presente a los miembros de tu equipo y compártelo en tus Redes Sociales.','resources/img/emojis-push/15-trabajador.png','01 - Día del Trabajador');
 }else if (theDay == day32){
   spawnNotification('¡Que el Engagement esté contigo!','resources/img/emojis-push/16-star-wars.png','04 - Día de Star Wars');
 }else if (theDay == day32_1){
   spawnNotification('¡Que el Engagement esté contigo!','resources/img/emojis-push/16-star-wars.png','04 - Día de Star Wars');
 }else if (theDay == day33){
   spawnNotification('Anticipa tus productos, ofrece un beneficio por compra online y salúdalas usando estas imágenes.','resources/img/emojis-push/17-madre.png','05 - Día de la Madre en ES');
 }else if (theDay == day33_1){
   spawnNotification('Anticipa tus productos, ofrece un beneficio por compra online y salúdalas usando estas imágenes.','resources/img/emojis-push/17-madre.png','05 - Día de la Madre en ES');
 }else if (theDay == day34){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/17-madre.png','10 - Día de la Madre en MX');
 }else if (theDay == day34_1){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/17-madre.png','10 - Día de la Madre en MX');
 }else if (theDay == day35){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/17-madre.png','12 - Día de la Madre en PE - EC - CL - CO - URY - CL');
 }else if (theDay == day35_1){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/17-madre.png','12 - Día de la Madre en PE - EC - CL - CO - URY - CL');
 }else if (theDay == day36){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','15 - Día del Maestro en MX - CO');
 }else if (theDay == day36_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','15 - Día del Maestro en MX - CO');
 }else if (theDay == day37){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/17-madre.png','15 - Día de la Madre en PA');
 }else if (theDay == day37_1){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/17-madre.png','15 - Día de la Madre en PA');
 }else if (theDay == day38){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','15 - Día Internacional de la Familia');
 }else if (theDay == day38_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','15 - Día Internacional de la Familia');
 }else if (theDay == day39){
   spawnNotification('Avísales a todos tus clientes de tus ofertas imperdibles y por tiempo limitado.','resources/img/emojis-push/04-compras-cyber-blackfriday.png','13 - 15 - Hot Sale en AR');
 }else if (theDay == day39_1){
   spawnNotification('Avísales a todos tus clientes de tus ofertas imperdibles y por tiempo limitado.','resources/img/emojis-push/04-compras-cyber-blackfriday.png','13 - 15 - Hot Sale en AR');
 }else if (theDay == day40){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','17 - Día Internacional de Internet');
 }else if (theDay == day40_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','17 - Día Internacional de Internet');
 }else if (theDay == day42){
   spawnNotification('Mira cómo lo celebramos en 2018 y prepárate para el festejo de 2019.','resources/img/emojis-push/18-cumple-doppler.png','30 - Aniversario #30 de Doppler :)');
 }else if (theDay == day42_1){
   spawnNotification('Mira cómo lo celebramos en 2018 y prepárate para el festejo de 2019.','resources/img/emojis-push/18-cumple-doppler.png','30 - Aniversario #30 de Doppler :)');
 }else if (theDay == day43){
   spawnNotification('Envía Campañas para promocionar tus productos y saludar al niño que habita en cada uno.','resources/img/emojis-push/13-ninio.png','01 - Día del Niño en EC');
 }else if (theDay == day43_1){
   spawnNotification('Envía Campañas para promocionar tus productos y saludar al niño que habita en cada uno.','resources/img/emojis-push/13-ninio.png','01 - Día del Niño en EC');
 }else if (theDay == day44){
   spawnNotification('Haz un posteo para generar conciencia y mostrar tu compromiso.','resources/img/emojis-push/19-medio-ambiente.png','05 - Día Mundial del Medio Ambiente');
 }else if (theDay == day44_1){
   spawnNotification('Haz un posteo para generar conciencia y mostrar tu compromiso.','resources/img/emojis-push/19-medio-ambiente.png','05 - Día Mundial del Medio Ambiente');
 }else if (theDay == day45){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','06 - Día del Maestro en BO');
 }else if (theDay == day45_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','06 - Día del Maestro en BO');
 }else if (theDay == day46){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','07 - Día del Periodista en AR');
 }else if (theDay == day46_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','07 - Día del Periodista en AR');
 }else if (theDay == day47){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/09-padre.png','16 - Día del Padre en AR - MX - PE - CL - PAR - EC - CO');
 }else if (theDay == day47_1){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/09-padre.png','16 - Día del Padre en AR - MX - PE - CL - PAR - EC - CO');
 }else if (theDay == day48){
   spawnNotification('¿Te dedicas a esta actividad? Comparte una historia de tu negocio u organiza un concurso para celebrarlo.','resources/img/emojis-push/20-gastronomia.png','18 - Día de la Gastronomía en PE');
 }else if (theDay == day48_1){
   spawnNotification('¿Te dedicas a esta actividad? Comparte una historia de tu negocio u organiza un concurso para celebrarlo.','resources/img/emojis-push/20-gastronomia.png','18 - Día de la Gastronomía en PE');
 }else if (theDay == day49){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/21-invierno-verano.png','21 - Comienzo del invierno en el Hemisferio Sur y del verano en el Hemisferio Norte');
 }else if (theDay == day49_1){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/21-invierno-verano.png','21 - Comienzo del invierno en el Hemisferio Sur y del verano en el Hemisferio Norte');
 }else if (theDay == day50){
   spawnNotification('¿Es el día de tu negocio o de alguna empresa amiga? Este Tutorial podría interesarte.','resources/img/emojis-push/22-pyme.png','27 - Día de las PyMEs');
 }else if (theDay == day50_1){
   spawnNotification('¿Es el día de tu negocio o de alguna empresa amiga? Este Tutorial podría interesarte.','resources/img/emojis-push/22-pyme.png','27 - Día de las PyMEs');
 }else if (theDay == day51){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','30 - Día Mundial de las Redes Sociales');
 }else if (theDay == day51_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','30 - Día Mundial de las Redes Sociales');
 }else if (theDay == day52){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','01 - Semana de la Dulzura en AR');
 }else if (theDay == day52_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','01 - Semana de la Dulzura en AR');
 }else if (theDay == day53){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','11 - Día del Periodista en CL');
 }else if (theDay == day53_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','11 - Día del Periodista en CL');
 }else if (theDay == day54){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/09-padre.png','14 - Día del Padre en URY');
 }else if (theDay == day54_1){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/09-padre.png','14 - Día del Padre en URY');
 }else if (theDay == day55){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','17 - Día Mundial del Emoji');
 }else if (theDay == day55_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','17 - Día Mundial del Emoji');
 }else if (theDay == day56){
   spawnNotification('¡Algunos de tus productos podrían ser un buen regalo!','resources/img/emojis-push/23-asistente.png','17 - Día de la Asistente en MX');
 }else if (theDay == day56_1){
   spawnNotification('¡Algunos de tus productos podrían ser un buen regalo!','resources/img/emojis-push/23-asistente.png','17 - Día de la Asistente en MX');
 }else if (theDay == day57){
   spawnNotification('¡Todos celebran este día! Es la ocasión ideal para comunicar tus ofertas.','resources/img/emojis-push/24-amigo.png','20 - Día del Amigo en AR - CL - ES - URY');
 }else if (theDay == day57_1){
   spawnNotification('¡Todos celebran este día! Es la ocasión ideal para comunicar tus ofertas.','resources/img/emojis-push/24-amigo.png','20 - Día del Amigo en AR - CL - ES - URY');
 }else if (theDay == day58){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/24-amigo.png','23 - Día de la Amistad en BO');
 }else if (theDay == day58_1){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/24-amigo.png','23 - Día de la Amistad en BO');
 }else if (theDay == day59){
   spawnNotification('¿Alguno de tus productos podría ser un buen obsequio? Sugiérelo.','resources/img/emojis-push/25-abuelo.png','26 - Día de los Abuelos y Abuelas en AR - ES');
 }else if (theDay == day59_1){
   spawnNotification('¿Alguno de tus productos podría ser un buen obsequio? Sugiérelo.','resources/img/emojis-push/25-abuelo.png','26 - Día de los Abuelos y Abuelas en AR - ES');
 }else if (theDay == day60){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/24-amigo.png','30 - Día del Amigo en PAR');
 }else if (theDay == day60_1){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/24-amigo.png','30 - Día del Amigo en PAR');
 }else if (theDay == day61){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','04 - Día del Periodista en CO');
 }else if (theDay == day61_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','04 - Día del Periodista en CO');
 }else if (theDay == day62){
   spawnNotification('Envía una Campaña de Email','resources/img/emojis-push/13-ninio.png','11 - Día del Niño en CL');
 }else if (theDay == day62_1){
   spawnNotification('Envía una Campaña de Email','resources/img/emojis-push/13-ninio.png','11 - Día del Niño en CL');
 }else if (theDay == day63){
   spawnNotification('Envía una Campaña de Email','resources/img/emojis-push/13-ninio.png','18 - Día del Niño en AR - PE');
 }else if (theDay == day63_1){
   spawnNotification('Envía una Campaña de Email','resources/img/emojis-push/13-ninio.png','18 - Día del Niño en AR - PE');
 }else if (theDay == day64){
   spawnNotification('Haz una selfie, boomerang o foto divertida con tu equipo para celebrarlo.','resources/img/emojis-push/26-fotografia.png','19 - Día Mundial de la Fotografía');
 }else if (theDay == day64_1){
   spawnNotification('Haz una selfie, boomerang o foto divertida con tu equipo para celebrarlo.','resources/img/emojis-push/26-fotografia.png','19 - Día Mundial de la Fotografía');
 }else if (theDay == day65){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/27-mail.png','04 - Día de la Secretaria en AR');
 }else if (theDay == day65_1){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/27-mail.png','04 - Día de la Secretaria en AR');
 }else if (theDay == day66){
   spawnNotification('Suscríbete para saber cuándo y cómo será el evento online de Marketing más convocante.','resources/img/emojis-push/28-emms.png','10 - ¡Cuenta regresiva para el EMMS!');
 }else if (theDay == day66_1){
   spawnNotification('Suscríbete para saber cuándo y cómo será el evento online de Marketing más convocante.','resources/img/emojis-push/28-emms.png','10 - ¡Cuenta regresiva para el EMMS!');
 }else if (theDay == day67){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','11 - Día del Maestro en AR');
 }else if (theDay == day67_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','11 - Día del Maestro en AR');
 }else if (theDay == day68){
   spawnNotification('Muestra un adelanto de tus nuevos productos de temporada.','resources/img/emojis-push/10-otonio-primavera.png','21 - Comienzo de la primavera en el Hemisferio Sur y del otoño en el Hemisferio Norte');
 }else if (theDay == day68_1){
   spawnNotification('Muestra un adelanto de tus nuevos productos de temporada.','resources/img/emojis-push/10-otonio-primavera.png','21 - Comienzo de la primavera en el Hemisferio Sur y del otoño en el Hemisferio Norte');
 }else if (theDay == day69){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','21 - Día del Estudiante en AR - CL');
 }else if (theDay == day69_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','21 - Día del Estudiante en AR - CL');
 }else if (theDay == day70){
   spawnNotification('Llévate los mejores consejos de Email Marketing para el sector.','resources/img/emojis-push/29-turismo.png','27 - Día Mundial del Turismo');
 }else if (theDay == day70_1){
   spawnNotification('Llévate los mejores consejos de Email Marketing para el sector.','resources/img/emojis-push/29-turismo.png','27 - Día Mundial del Turismo');
 }else if (theDay == day71){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','01 - Día Internacional de la Música');
 }else if (theDay == day71_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','01 - Día Internacional de la Música');
 }else if (theDay == day72){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','01 - Día del Periodista en PE');
 }else if (theDay == day72_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','01 - Día del Periodista en PE');
 }else if (theDay == day73){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/14-animal.png','04 - Día Internacional del Animal');
 }else if (theDay == day73_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/14-animal.png','04 - Día Internacional del Animal');
 }else if (theDay == day74){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','05 - Día Mundial de los Docentes');
 }else if (theDay == day74_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','05 - Día Mundial de los Docentes');
 }else if (theDay == day75){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','12 - Día del Respeto a la Diversidad Cultural');
 }else if (theDay == day75_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','12 - Día del Respeto a la Diversidad Cultural');
 }else if (theDay == day76){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','16 - Día Mundial de la Alimentación');
 }else if (theDay == day76_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','16 - Día Mundial de la Alimentación');
 }else if (theDay == day77){
   spawnNotification('Recomienda los mejores productos de tu catálogo para agasajarlas en su día.','resources/img/emojis-push/17-madre.png','20 - Día de la Madre en AR');
 }else if (theDay == day77_1){
   spawnNotification('Recomienda los mejores productos de tu catálogo para agasajarlas en su día.','resources/img/emojis-push/17-madre.png','20 - Día de la Madre en AR');
 }else if (theDay == day78){
   spawnNotification('Propón a tus clientes adherirse a la facturación electrónica. Descubre cómo enviar archivos adjuntos por Email','resources/img/emojis-push/30-ahorro.png','31 - Día Mundial del Ahorro');
 }else if (theDay == day78_1){
   spawnNotification('Propón a tus clientes adherirse a la facturación electrónica. Descubre cómo enviar archivos adjuntos por Email','resources/img/emojis-push/30-ahorro.png','31 - Día Mundial del Ahorro');
 }else if (theDay == day79){
   spawnNotification('Pon un toque de terror a tus acciones de Noche de Brujas usando las Plantillas temáticas.','resources/img/emojis-push/15-trabajador.png','31 - Halloween');
 }else if (theDay == day79_1){
   spawnNotification('Pon un toque de terror a tus acciones de Noche de Brujas usando las Plantillas temáticas.','resources/img/emojis-push/15-trabajador.png','31 - Halloween');
 }else if (theDay == day80){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','10 - Día Mundial de la Ciencia');
 }else if (theDay == day80_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','10 - Día Mundial de la Ciencia');
 }else if (theDay == day81){
   spawnNotification('Préndete a la movida comercial de estos días, ¡pero envía tus Campañas ya desde principio de mes!','resources/img/emojis-push/04-compras-cyber-blackfriday.png','15 - 18 - Buen Fin en MX');
 }else if (theDay == day81_1){
   spawnNotification('Préndete a la movida comercial de estos días, ¡pero envía tus Campañas ya desde principio de mes!','resources/img/emojis-push/04-compras-cyber-blackfriday.png','15 - 18 - Buen Fin en MX');
 }else if (theDay == day82){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','17 - Día Internacional del Estudiante');
 }else if (theDay == day82_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','17 - Día Internacional del Estudiante');
 }else if (theDay == day83){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/13-ninio.png','20 - Día Internacional del Niño');
 }else if (theDay == day83_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/13-ninio.png','20 - Día Internacional del Niño');
 }else if (theDay == day84){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','27 - Día del Maestro en ES');
 }else if (theDay == day84_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/02-socialmedia.png','27 - Día del Maestro en ES');
 }else if (theDay == day85){
   spawnNotification('Envía una Campaña de Email Marketing. Procura que tus Emails sean Responsive, ¡al menos la mitad de tus Suscriptores los abrirán desde dispositivos móviles!','resources/img/emojis-push/04-ofertas-cyber-blackfriday.png','29 - Black Friday');
 }else if (theDay == day85_1){
   spawnNotification('Envía una Campaña de Email Marketing. Procura que tus Emails sean Responsive, ¡al menos la mitad de tus Suscriptores los abrirán desde dispositivos móviles!','resources/img/emojis-push/04-ofertas-cyber-blackfriday.png','29 - Black Friday');
 }else if (theDay == day86){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/21-invierno-verano.png','21 - Comienzo del verano en el Hemisferio Sur y del invierno en el Hemisferio Norte');
 }else if (theDay == day86_1){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/21-invierno-verano.png','21 - Comienzo del verano en el Hemisferio Sur y del invierno en el Hemisferio Norte');
 }else if (theDay == day87){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/31-nochebuena.png','24 - Nochebuena');
 }else if (theDay == day87_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/31-nochebuena.png','24 - Nochebuena');
 }else if (theDay == day88){
   spawnNotification('Envía una Campaña de Email Marketing. Envía buenos deseos o un regalo especial para tus clientes. Antes les habrás hecho llegar tu catálogo de productos.','resources/img/emojis-push/32-navidad.png','25 - Navidad');
 }else if (theDay == day88_1){
   spawnNotification('Envía una Campaña de Email Marketing. Envía buenos deseos o un regalo especial para tus clientes. Antes les habrás hecho llegar tu catálogo de productos.','resources/img/emojis-push/32-navidad.png','25 - Navidad');
 }else if (theDay == day89){
   spawnNotification('Haz una acción en Redes. Piensa una broma ingeniosa o un engaño divertido que no deje indiferentes a tus seguidores.','resources/img/emojis-push/34-inocentes.png','28 - Día de los Inocentes');
 }else if (theDay == day89_1){
   spawnNotification('Haz una acción en Redes. Piensa una broma ingeniosa o un engaño divertido que no deje indiferentes a tus seguidores.','resources/img/emojis-push/34-inocentes.png','28 - Día de los Inocentes');
 }else if (theDay == day90){
   spawnNotification('A las puertas de un nuevo año, envía un saludo especial.','resources/img/emojis-push/33-anio-nuevo.png','31 - Fin de Año');
 }else if (theDay == day90_1){
   spawnNotification('A las puertas de un nuevo año, envía un saludo especial.','resources/img/emojis-push/33-anio-nuevo.png','31 - Fin de Año');
 }else if (theDay == day91){
   spawnNotification('Avísales a todos tus clientes de tus ofertas imperdibles y por tiempo limitado.','resources/img/emojis-push/04-compras-cyber-blackfriday.png','01 - 02 - Hot Sale en CO');
 }else if (theDay == day91_1){
   spawnNotification('Avísales a todos tus clientes de tus ofertas imperdibles y por tiempo limitado.','resources/img/emojis-push/04-compras-cyber-blackfriday.png','01 - 02 - Hot Sale en CO');
 }else if (theDay == day92){
   spawnNotification('Avísales a todos tus clientes de tus ofertas imperdibles y por tiempo limitado.','resources/img/emojis-push/04-compras-cyber-blackfriday.png','29 - 01 - CyberDays en PE');
 }else if (theDay == day92_1){
   spawnNotification('Avísales a todos tus clientes de tus ofertas imperdibles y por tiempo limitado.','resources/img/emojis-push/04-compras-cyber-blackfriday.png','29 - 01 - CyberDays en PE');
 }else if (theDay == day93){
   spawnNotification('Avísales a todos tus clientes de tus ofertas imperdibles y por tiempo limitado.','resources/img/emojis-push/04-compras-cyber-blackfriday.png','27 - 29 - CyberDays en PE');
 }else if (theDay == day93_1){
   spawnNotification('Avísales a todos tus clientes de tus ofertas imperdibles y por tiempo limitado.','resources/img/emojis-push/04-compras-cyber-blackfriday.png','27 - 29 - CyberDay en CL');
 }else if (theDay == day94){
   spawnNotification('Avísales a todos tus clientes de tus ofertas imperdibles y por tiempo limitado.','resources/img/emojis-push/04-compras-cyber-blackfriday.png','15 - 17 - CyberDays en PE');
 }else if (theDay == day94_1){
   spawnNotification('Avísales a todos tus clientes de tus ofertas imperdibles y por tiempo limitado.','resources/img/emojis-push/04-compras-cyber-blackfriday.png','15 - 17 - CyberDays en PE');
 }else if (theDay == day95){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/37-diamuerto.png','02 - Día de Muertos en MX');
 }else if (theDay == day95_1){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/37-diamuerto.png','02 - Día de Muertos en MX');
 }else if (theDay == day96){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/04-compras-cyber-blackfriday.png','04 - Día Internacional del Marketing');
 }else if (theDay == day96_1){
   spawnNotification('Haz una acción en Redes','resources/img/emojis-push/04-compras-cyber-blackfriday.png','04 - Día Internacional del Marketing');
 }else if (theDay == day97){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/04-compras-cyber-blackfriday.png','04 - 06 - CyberMonday en AR');
 }else if (theDay == day97_1){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/04-compras-cyber-blackfriday.png','04 - 06 - CyberMonday en AR');
 }else if (theDay == day98){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/04-compras-cyber-blackfriday.png','25 - 26 - Cyberlunes en CO');
 }else if (theDay == day98_1){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/04-compras-cyber-blackfriday.png','25 - 26 - Cyberlunes en CO');
 }else if (theDay == day99){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/04-compras-cyber-blackfriday.png','25 - 27 - CyberDays en PE');
 }else if (theDay == day99_1){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/04-compras-cyber-blackfriday.png','25 - 27 - CyberDays en PE');
 }else if (theDay == day100){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/38-maraton-reyes.png','02 - CyberMonday en ES - EC - MX');
 }else if (theDay == day100_1){
   spawnNotification('Envía una Campaña de Email y haz una acción en Redes','resources/img/emojis-push/38-maraton-reyes.png','02 - CyberMonday en ES - EC - MX');
 }

 function spawnNotification(theBody, theIcon, theTitle) {
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
