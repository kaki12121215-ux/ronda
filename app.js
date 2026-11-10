/* RONDA · app · versión 0.1.0 · se genera con src/build.js a partir de src/app */
(function () {
'use strict';
/* Generado por src/build.js: iconos e ilustraciones dentro del código, para que salgan siempre. */
const ICONOS = {"resumen":["<rect x=\"3.5\" y=\"3.5\" width=\"7.5\" height=\"10\" rx=\"2.5\"/><rect x=\"13\" y=\"3.5\" width=\"7.5\" height=\"5.5\" rx=\"2.5\"/><rect x=\"13\" y=\"11.5\" width=\"7.5\" height=\"9\" rx=\"2.5\"/>",[[7.2,18,"c"]]],"tareas":["<path d=\"M11 6h10M11 12h10M11 18h10\"/>",[[5.5,6,"c"],[5.5,12,"i"],[5.5,18,"i"]]],"calendario":["<rect x=\"3.5\" y=\"5\" width=\"17\" height=\"15.5\" rx=\"3.5\"/><path d=\"M3.5 10h17M8 3v4M16 3v4\"/>",[[8.5,15,"c"]]],"mas":["",[[5,12,"i"],[12,12,"i"],[19,12,"c"]]],"buscar":["<circle cx=\"10.5\" cy=\"10.5\" r=\"6.5\"/><path d=\"M15.2 15.2L18.3 18.3\"/>",[[20.3,20.3,"c"]]],"ajustes":["<path d=\"M3 6h18M3 12h18M3 18h18\"/>",[[15,6,"i"],[9,12,"i"],[16.5,18,"c"]]],"avisos":["<path d=\"M6 17v-6a6 6 0 0 1 12 0v6l1.5 2h-15z\"/>",[[12,21.7,"c"]]],"atras":["<path d=\"M16.5 12H5.5M11 6.5L5.5 12l5.5 5.5\"/>",[[20,12,"c"]]],"cerrar":["<path d=\"M6 6l9.5 9.5M18 6L6 18\"/>",[[18.2,18.2,"c"]]],"anadir":["<path d=\"M5 12h11M12 5v14\"/>",[[19.5,12,"c"]]],"menu":["<path d=\"M4 7h16M4 12h16M4 17h9\"/>",[[18.5,17,"c"]]],"inicio":["<path d=\"M4 11.5L12 4.5l8 7V19a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19z\"/>",[[12,14.5,"c"]]],"editar":["<path d=\"M16 4.5l3.5 3.5L9.5 18 5 19l1-4.500zM12 21h4\"/>",[[19.5,21,"c"]]],"borrar":["<path d=\"M4.5 7h15M9 7V4.5h6V7M6.5 7l1 12.5h9L17.5 7\"/>",[[12,13.5,"c"]]],"compartir":["<path d=\"M8 11l8-4M8 13l8 4\"/>",[[6,12,"i"],[18,6,"c"],[18,18,"i"]]],"filtrar":["<path d=\"M4 5h16l-6 7.500V19l-4-2v-4.500z\"/>",[[19,19.5,"c"]]],"ordenar":["<path d=\"M4 7h12M4 12h8M4 17h4\"/>",[[19.5,17,"c"]]],"duplicar":["<rect x=\"9\" y=\"9\" width=\"11\" height=\"11\" rx=\"3\"/><path d=\"M5.500 15V7.500a3 3 0 0 1 3-3H15\"/>",[[14.5,14.5,"c"]]],"archivar":["<rect x=\"3.5\" y=\"4\" width=\"17\" height=\"4.5\" rx=\"1.5\"/><path d=\"M5 8.500V18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.500\"/>",[[12,14,"c"]]],"mover":["<path d=\"M12 4v16M4 12h16M9 7l3-3 3 3M9 17l3 3 3-3M7 9l-3 3 3 3M17 9l3 3-3 3\"/>",[[12,12,"c"]]],"deshacer":["<path d=\"M9 6L5 10l4 4M5 10h8.500a5 5 0 0 1 0 10H12\"/>",[[8.5,20,"c"]]],"pegar":["<rect x=\"5\" y=\"5\" width=\"14\" height=\"16\" rx=\"3\"/><path d=\"M9 4h6v3H9z\"/>",[[12,14,"c"]]],"descargar":["<path d=\"M12 4v10M7.500 9.500L12 14l4.500-4.500M4.500 20h4M15.500 20h4\"/>",[[12,20,"c"]]],"subir":["<path d=\"M12 15V5M7.500 9.500L12 5l4.500 4.500M4.500 20h4M15.500 20h4\"/>",[[12,20,"c"]]],"hecho":["<path d=\"M4.500 13l4.500 4.500L15.500 9\"/>",[[19.5,6.5,"c"]]],"pendiente":["<circle cx=\"12\" cy=\"12\" r=\"8.5\"/>",[[12,12,"c"]]],"reloj":["<circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M12 7.500V12l3 2\"/>",[[12,12,"c"]]],"alarma":["<circle cx=\"12\" cy=\"13.5\" r=\"6.5\"/><path d=\"M12 10.500v3l2 1M4 6.500l3-2.500M20 6.500l-3-2.500\"/>",[[12,13.5,"c"]]],"repetir":["<path d=\"M17 4l3 3-3 3M20 7H9a5 5 0 0 0-5 5M7 20l-3-3 3-3M4 17h11a5 5 0 0 0 5-5\"/>",[[12,12,"c"]]],"aviso":["<path d=\"M12 4l9 16H3z\"/><path d=\"M12 9.500v4\"/>",[[12,17,"c"]]],"error":["<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7.500v5\"/>",[[12,16.2,"c"]]],"informacion":["<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 11v5.500\"/>",[[12,7.8,"c"]]],"sincronizar":["<path d=\"M20 11a8 8 0 0 0-14-4M4 4v4h4M4 13a8 8 0 0 0 14 4M20 20v-4h-4\"/>",[[12,12,"c"]]],"sin-conexion":["<path d=\"M3.500 9.500a12 12 0 0 1 17 0M6.500 12.500a8 8 0 0 1 11 0M4 4l16 16\"/>",[[12,18.5,"c"]]],"nube-sincronizada":["<path d=\"M7 18h10a4 4 0 0 0 .5-8 5.500 5.500 0 0 0-10.500 1A3.600 3.600 0 0 0 7 18z\"/>",[[12,14,"c"]]],"bloqueado":["<rect x=\"5\" y=\"10.5\" width=\"14\" height=\"10\" rx=\"3\"/><path d=\"M8 10.500V8a4 4 0 0 1 8 0v2.500\"/>",[[12,15.5,"c"]]],"persona":["<path d=\"M5 20.500a7 7 0 0 1 14 0\"/>",[[12,8,"c"]]],"personas":["<path d=\"M3 20a5.500 5.500 0 0 1 11 0M16 14.200a5.500 5.500 0 0 1 5 5.800\"/>",[[8.5,8.5,"i"],[16.5,8.5,"c"]]],"invitar":["<path d=\"M3.500 20.500a6.500 6.500 0 0 1 13 0M18 7v6M15 10h6\"/>",[[10,8,"c"]]],"codigo-de-invitacion":["<path d=\"M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2\"/>",[[12,12,"c"]]],"candado":["<rect x=\"5\" y=\"10.5\" width=\"14\" height=\"10\" rx=\"3\"/><path d=\"M8 10.500V8a4 4 0 0 1 7.500-1.800\"/>",[[12,15.5,"c"]]],"llave":["<path d=\"M9 12h12M18 12v3.500M14 12v2.500\"/>",[[6,12,"c"]]],"escudo":["<path d=\"M12 3.500l7.500 3v5.500c0 4.500-3.200 7.500-7.500 9-4.300-1.500-7.500-4.500-7.500-9V6.500z\"/>",[[12,11.5,"c"]]],"ojo":["<path d=\"M2.500 12S6 5.500 12 5.500 21.500 12 21.500 12 18 18.500 12 18.500 2.500 12 2.500 12z\"/>",[[12,12,"c"]]],"ojo-tachado":["<path d=\"M2.500 12S6 5.500 12 5.500 21.500 12 21.500 12 18 18.500 12 18.500 2.500 12 2.500 12zM5 5l14 14\"/>",[[12,12,"c"]]],"huella":["<path d=\"M6 18c0-6 1.500-10 6-10s6 4 6 9M9 20c0-4 .5-7 3-7M15 20.500c.7-1.500 1-3 1-4.500\"/>",[[12,17,"c"]]],"cerrar-sesion":["<path d=\"M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4M14 8l4 4-4 4M18 12h-6\"/>",[[9,12,"c"]]],"perfil":["<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M7 18a5 5 0 0 1 10 0\"/>",[[12,10,"c"]]],"foto":["<rect x=\"3.5\" y=\"5\" width=\"17\" height=\"14\" rx=\"3\"/><path d=\"M3.500 16l5-4.500 4 3.500 3-2.500 5 4.500\"/>",[[16.5,9.5,"c"]]],"camara":["<path d=\"M4 8h3l1.500-2.500h7L17 8h3a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a1 1 0 0 1 1-1z\"/>",[[12,13.5,"c"]]],"adjunto":["<path d=\"M19 11.500l-7.500 7.500a4.500 4.500 0 0 1-6.400-6.400L13 4.500a3 3 0 0 1 4.300 4.300l-7.600 7.600a1.500 1.500 0 0 1-2.100-2.100L14 8\"/>",[[19.5,19.5,"c"]]],"enlace":["<path d=\"M10 14a4 4 0 0 0 5.700 0l3-3a4 4 0 0 0-5.700-5.700l-1 1M14 10a4 4 0 0 0-5.700 0l-3 3a4 4 0 0 0 5.700 5.700l1-1\"/>",[[12,12,"c"]]],"documento":["<path d=\"M7 3.500h7l5 5V19a1.500 1.500 0 0 1-1.500 1.500h-10.500A1.500 1.500 0 0 1 5.500 19V5A1.500 1.500 0 0 1 7 3.500zM14 3.500V9h5M9 13h6\"/>",[[12,17,"c"]]],"carpeta":["<path d=\"M3.500 7a2 2 0 0 1 2-2h4l2 2.500h7a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z\"/>",[[12,13.5,"c"]]],"nota":["<rect x=\"4.5\" y=\"3.5\" width=\"15\" height=\"17\" rx=\"3\"/><path d=\"M8.500 9h7M8.500 13h4\"/>",[[15.5,16.5,"c"]]],"comentario":["<path d=\"M4 6.500A2.500 2.500 0 0 1 6.500 4h11A2.500 2.500 0 0 1 20 6.500v8a2.500 2.500 0 0 1-2.500 2.500H11l-4.500 3.500V17A2.500 2.500 0 0 1 4 14.500z\"/>",[[12,10.5,"c"]]],"microfono":["<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.500 11a6.500 6.500 0 0 0 13 0M12 17.500V21\"/>",[[12,8.5,"c"]]],"teclado":["<rect x=\"3\" y=\"6.5\" width=\"18\" height=\"11\" rx=\"3\"/><path d=\"M8 15h8\"/>",[[7.5,10.5,"c"],[16.5,10.5,"i"]]],"ubicacion":["<path d=\"M12 21s-6.500-6-6.500-11a6.500 6.500 0 0 1 13 0c0 5-6.500 11-6.500 11z\"/>",[[12,10,"c"]]],"etiqueta":["<path d=\"M3.500 12.500V5.500a2 2 0 0 1 2-2h7l8 8a2 2 0 0 1 0 2.800l-6.200 6.200a2 2 0 0 1-2.800 0z\"/>",[[8,8,"c"]]],"cartera":["<path d=\"M4 7.500A2.500 2.500 0 0 1 6.500 5H18a2 2 0 0 1 2 2v1.500M4 7.500V17a2.500 2.500 0 0 0 2.500 2.500H19a1 1 0 0 0 1-1V9.500a1 1 0 0 0-1-1H6.500A2.500 2.500 0 0 1 4 7.500z\"/>",[[16,14,"c"]]],"tarjeta":["<rect x=\"3\" y=\"5.5\" width=\"18\" height=\"13\" rx=\"3\"/><path d=\"M3 10h18\"/>",[[7.5,14.5,"c"]]],"euro":["<path d=\"M17 6.500a6.500 6.500 0 1 0 0 11M5 10.500h8.500M5 13.500h8.500\"/>",[[19,12,"c"]]],"recibo":["<path d=\"M6 3.500l1.500 1.200L9 3.500l1.500 1.200L12 3.500l1.500 1.200 1.500-1.200 1.500 1.200L18 3.500V20.500l-1.500-1.200-1.500 1.200-1.500-1.200-1.500 1.200-1.500-1.200L9 20.500 7.500 19.300 6 20.500zM9 9h6M9 13h6\"/>",[[12,17,"c"]]],"carrito":["<path d=\"M3.500 4.500h2.500l2 10h9.500l1.800-7H7\"/>",[[9.5,19.5,"i"],[16,19.5,"c"]]],"bolsa":["<path d=\"M5.500 8h13l1 12h-15zM9 8V7a3 3 0 0 1 6 0v1\"/>",[[12,14,"c"]]],"grafico-de-barras":["<path d=\"M5 20v-6M12 20V9M19 20v-10\"/>",[[12,5.5,"c"]]],"grafico-circular":["<path d=\"M12 3.500a8.500 8.500 0 1 0 8.500 8.500H12zM15 3.800A8.500 8.500 0 0 1 20.200 9H15z\"/>",[[8.5,15,"c"]]],"hucha":["<path d=\"M4.500 13a7.500 5.500 0 1 0 15 0a7.500 5.500 0 1 0-15 0M8 18v2.500M16 18v2.500M15 7.800l1-2.800 2.200 2.300M4.800 12c-1.500 0-2.300 1-2.300 2.200M11 8.500h3\"/>",[[16,12.5,"c"]]],"dividir-cuentas":["<path d=\"M12 4v16M6 8l-3 4 3 4M18 8l3 4-3 4\"/>",[[12,12,"c"]]],"meta":["<path d=\"M5 21V4M5 5h12l-2.500 4 2.500 4H5\"/>",[[10,9,"c"]]],"calculadora":["<rect x=\"5\" y=\"3.5\" width=\"14\" height=\"17\" rx=\"3\"/><path d=\"M8.500 8h7\"/>",[[9,13,"i"],[15,13,"c"],[12,17.8,"i"]]],"casa":["<path d=\"M4 11.500L12 4.500l8 7V19a1.500 1.500 0 0 1-1.500 1.500h-13A1.500 1.500 0 0 1 4 19zM16.500 8.200V5.500\"/>",[[12,13.5,"c"]]],"puerta":["<rect x=\"6\" y=\"3.5\" width=\"12\" height=\"17\" rx=\"2\"/><path d=\"M3.500 20.500h17\"/>",[[15,12,"c"]]],"corazon":["<path d=\"M12 20.300s-7.300-4.500-7.300-10.300a4.200 4.200 0 0 1 7.300-2.800 4.200 4.200 0 0 1 7.300 2.800c0 5.800-7.300 10.300-7.300 10.300z\"/>",[[12,12.2,"c"]]],"maletin":["<rect x=\"3.5\" y=\"8\" width=\"17\" height=\"11.5\" rx=\"3\"/><path d=\"M9 8V6.500A1.500 1.500 0 0 1 10.500 5h3A1.500 1.500 0 0 1 15 6.500V8M3.500 13h17\"/>",[[12,13,"c"]]],"coche":["<path d=\"M4.500 15.500V12l1.800-4.500A1.500 1.500 0 0 1 7.700 6.500h8.600a1.500 1.500 0 0 1 1.400 1L19.500 12v3.500a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1zM4.500 12h15\"/>",[[8,18.5,"i"],[16,18.5,"c"]]],"avion":["<path d=\"M20.500 4L3.500 12l7 2.500 2.500 7zM20.500 4L10.500 14.500\"/>",[[5,19.5,"c"]]],"planta":["<path d=\"M7 17c0-7 5-11 13-12 0 8-5 13-12 13M7.500 16.500l4-4\"/>",[[5,19.5,"c"]]],"gota":["<path d=\"M12 3.500s-6 6.500-6 11a6 6 0 0 0 12 0c0-4.500-6-11-6-11z\"/>",[[12,14.5,"c"]]],"sol":["<path d=\"M12 3v2M12 19v2M3 12h2M19 12h2M5.600 5.600L7 7M17 17l1.400 1.400M5.600 18.400L7 17M17 7l1.400-1.400\"/>",[[12,12,"c"]]],"luna":["<path d=\"M20 14.500A8.500 8.500 0 1 1 9.500 4a7 7 0 0 0 10.500 10.500z\"/>",[[15.5,8,"c"]]],"paraguas":["<path d=\"M3.500 12a8.500 8.500 0 0 1 17 0zM12 12v6.500a2 2 0 0 1-4 0\"/>",[[12,8,"c"]]],"regalo":["<rect x=\"4\" y=\"10.5\" width=\"16\" height=\"9.5\" rx=\"2\"/><path d=\"M3.500 8h17v2.500h-17zM12 8v12M12 8c-1.500-3.500-5.500-3.500-5.500-1S10 8 12 8c1.500-3.500 5.500-3.500 5.500-1S14 8 12 8\"/>",[[8,15.5,"c"]]],"solo-yo-espacio":["<path d=\"M5 20.500a7 7 0 0 1 14 0\"/>",[[12,8,"c"]]],"hogar-espacio":["<path d=\"M4 11.500L12 4.500l8 7V19a1.500 1.500 0 0 1-1.500 1.500h-13A1.500 1.500 0 0 1 4 19z\"/><path d=\"M16.500 8.200V5.500\"/>",[[12,13.5,"c"]]],"pareja":["<path d=\"M3 20a5.500 5.500 0 0 1 11 0M16 14.200a5.500 5.500 0 0 1 5 5.800\"/>",[[8.5,8.5,"i"],[16.5,8.5,"c"]]],"familia-extensa":["",[[12,5,"c"],[18.7,9.9,"i"],[16.1,17.8,"i"],[7.9,17.8,"i"],[5.3,9.9,"i"]]],"cuidar-a-alguien":["<path d=\"M12 20.300s-7.300-4.500-7.300-10.300a4.200 4.200 0 0 1 7.300-2.800 4.200 4.200 0 0 1 7.300 2.800c0 5.800-7.300 10.300-7.300 10.300z\"/>",[[12,12.2,"c"]]],"piso-compartido":["<rect x=\"3\" y=\"2.5\" width=\"18\" height=\"19\" rx=\"3\"/><path d=\"M10 21.500v-3h4v3\"/>",[[8,8,"c"],[16,8,"i"],[8,13.5,"i"],[16,13.5,"i"]]],"modulo-tareas":["<rect x=\"4\" y=\"3.5\" width=\"16\" height=\"17\" rx=\"3\"/><path d=\"M9 8.500h7M9 12.500h7\"/>",[[12,17,"c"]]],"modulo-compra":["<path d=\"M3.500 9.500h17l-1.800 9.500a1.500 1.500 0 0 1-1.500 1.200H6.800a1.500 1.500 0 0 1-1.500-1.200zM8 9.500l3-5.500M16 9.500l-3-5.500\"/>",[[12,15,"c"]]],"modulo-calendario":["<rect x=\"3.5\" y=\"5\" width=\"17\" height=\"15.5\" rx=\"3.5\"/><path d=\"M3.500 10h17M8 3v4M16 3v4\"/>",[[8,15,"i"],[16,15,"c"]]],"modulo-gastos":["<path d=\"M5.500 8.500c0-1.700 2.900-3 6.500-3s6.500 1.300 6.500 3-2.900 3-6.500 3-6.500-1.300-6.500-3zM5.500 8.500v4c0 1.700 2.900 3 6.500 3s6.500-1.300 6.500-3v-4\"/>",[[12,19.5,"c"]]],"modulo-documentos":["<rect x=\"4\" y=\"3.5\" width=\"16\" height=\"17\" rx=\"3\"/><path d=\"M4 9.500h16M4 15h16\"/>",[[12,12.3,"c"]]],"modulo-notas":["<path d=\"M6 3.500h12a1.500 1.500 0 0 1 1.500 1.500v14A1.500 1.500 0 0 1 18 20.500H6zM9 3.500v17\"/>",[[14,12,"c"]]],"modulo-recordatorios":["<path d=\"M6 17v-6a6 6 0 0 1 12 0v6l1.500 2h-15zM12 8.500v3l2 1\"/>",[[12,21.5,"c"]]],"modulo-menu-semanal":["<circle cx=\"12\" cy=\"12\" r=\"6.5\"/><path d=\"M3.500 4v4.500a1.500 1.500 0 0 0 3 0V4M5 4v16M20.500 20V4c-2 1.500-2.500 4-2.500 7h2.500\"/>",[[12,12,"c"]]],"modulo-rutinas":["<path d=\"M7 3.500h10M7 20.500h10M7.500 3.500c0 5 4.500 6 4.500 8.500s-4.500 3.500-4.500 8.500M16.500 3.500c0 5-4.500 6-4.500 8.500s4.500 3.500 4.500 8.500\"/>",[[12,17.5,"c"]]],"modulo-plantas":["<path d=\"M7 14h10l-1 6.500H8zM12 14V9M12 10c0-3-2-5-5.500-5 0 3 2 5 5.500 5zM12 10c0-3 2-5 5.500-5 0 3-2 5-5.500 5z\"/>",[[12,17.2,"c"]]],"modulo-medicacion":["<g transform=\"rotate(-35 12 12)\"><rect x=\"3\" y=\"8.5\" width=\"18\" height=\"7\" rx=\"3.5\"/><path d=\"M12 8.500v7\"/></g>",[[8.5,14,"c"]]],"modulo-coche":["<path d=\"M4.500 15.500V12l1.800-4.500A1.500 1.500 0 0 1 7.700 6.500h8.600a1.500 1.500 0 0 1 1.400 1L19.500 12v3.500a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1zM4.500 12h15\"/>",[[8,18.5,"i"],[16,18.5,"c"]]],"cocina":["<path d=\"M5 9.500h14V17a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zM3.500 12H5M19 12h1.500M9 6.500c0-1 1.500-1 1.500-2M13.500 6.500c0-1 1.500-1 1.500-2\"/>",[[12,14.5,"c"]]],"salon":["<path d=\"M5 11V8.500A2.500 2.500 0 0 1 7.500 6h9A2.500 2.500 0 0 1 19 8.500V11M3.500 12.500a2 2 0 0 1 4 0V14h9v-1.500a2 2 0 0 1 4 0V17h-17zM6 17v2M18 17v2\"/>",[[12,9,"c"]]],"dormitorio":["<path d=\"M3.500 18.500V6M3.500 14h17v4.500M20.500 14v-2.500a2.500 2.500 0 0 0-2.500-2.500H11v5\"/>",[[7.5,11.2,"c"]]],"bano":["<path d=\"M3.500 11.500h17v2a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4zM6 11.500V6.500A2 2 0 0 1 8 4.500c1 0 1.800.4 2.300 1M7 17.500v2M17 17.500v2\"/>",[[15,7.5,"c"]]],"terraza":["<path d=\"M5 10.500h14M12 10.500V20M8 20h8\"/>",[[12,6.5,"c"]]],"trastero":["<rect x=\"3.5\" y=\"12\" width=\"9\" height=\"8\" rx=\"2\"/><rect x=\"11.5\" y=\"12\" width=\"9\" height=\"8\" rx=\"2\"/><rect x=\"7.5\" y=\"4\" width=\"9\" height=\"8\" rx=\"2\"/>",[[12,8,"c"]]],"garaje":["<path d=\"M3.500 20V9.500L12 4l8.500 5.500V20M7 20v-7h10v7M7 16.500h10\"/>",[[12,14.8,"c"]]],"despacho":["<rect x=\"5\" y=\"4.5\" width=\"14\" height=\"9.5\" rx=\"2\"/><path d=\"M12 14v3M8.500 17.500h7M3.500 20.500h17\"/>",[[12,9.2,"c"]]],"entrada":["<path d=\"M12 8v2L4 15.500a1 1 0 0 0 .6 1.800h14.800a1 1 0 0 0 .6-1.800L12 10\"/>",[[12,5.5,"c"]]],"lavadero":["<rect x=\"4.5\" y=\"3.5\" width=\"15\" height=\"17\" rx=\"3\"/><circle cx=\"12\" cy=\"13.5\" r=\"4.5\"/><path d=\"M4.500 8h15\"/>",[[12,13.5,"c"]]],"jardin":["<path d=\"M12 20v-6M12 14c-4 0-6.500-2.500-6.500-5.500S8 3.500 12 3.500s6.500 2 6.500 5S16 14 12 14zM4 20h16\"/>",[[12,8.5,"c"]]],"habitacion-infantil":["<path d=\"M4 6.500v14M20 6.500v14M4 12h16M4 17.500h16\"/>",[[12,9,"c"]]],"supermercado":["<path d=\"M3.500 4.500h2.500l2 10h9.500l1.800-7H7\"/>",[[9.5,19.5,"i"],[16,19.5,"c"]]],"alquiler-o-hipoteca":["<path d=\"M9 12h12M18 12v3.500M14 12v2.500\"/>",[[6,12,"c"]]],"luz":["<path d=\"M9 17h6M10 20h4M12 3.500a6 6 0 0 0-3.500 10.900c.6.500 1 1.100 1 1.800V17h5v-.8c0-.7.400-1.300 1-1.800A6 6 0 0 0 12 3.500z\"/>",[[12,9.5,"c"]]],"agua":["<path d=\"M12 3.500s-6 6.500-6 11a6 6 0 0 0 12 0c0-4.500-6-11-6-11z\"/>",[[12,14.5,"c"]]],"gas":["<path d=\"M12 3.500c1 3.500 5.500 5.500 5.500 10a5.500 5.500 0 0 1-11 0c0-2 1-3.500 2-4.500 0 1.500.8 2.500 1.800 2.500C10 9 10.500 6 12 3.500z\"/>",[[12,15.5,"c"]]],"internet":["<path d=\"M3.500 9.500a12 12 0 0 1 17 0M6.500 12.500a8 8 0 0 1 11 0M9.500 15.500a4 4 0 0 1 5 0\"/>",[[12,19,"c"]]],"telefono":["<rect x=\"7\" y=\"3\" width=\"10\" height=\"18\" rx=\"3\"/><path d=\"M10.500 6h3\"/>",[[12,17,"c"]]],"transporte-publico":["<path d=\"M5 5.500A2.500 2.500 0 0 1 7.500 3h9A2.500 2.500 0 0 1 19 5.500V16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM5 10h14M7 18v2.500M17 18v2.500\"/>",[[8,14,"i"],[16,14,"c"]]],"coche-y-gasolina":["<path d=\"M5 20.500V5.500A1.500 1.500 0 0 1 6.500 4h6A1.500 1.500 0 0 1 14 5.500V20.500M3.500 20.500h12M14 9h2.500a1.500 1.500 0 0 1 1.500 1.500V16a1.500 1.500 0 0 0 3 0V9l-2.500-2.500\"/>",[[9.5,10,"c"]]],"salud":["<path d=\"M9.500 4h5v5.500H20v5h-5.500V20h-5v-5.500H4v-5h5.500z\"/>",[[12,12,"c"]]],"ocio":["<path d=\"M3.500 9V7a1.500 1.500 0 0 1 1.500-1.500h14A1.500 1.500 0 0 1 20.500 7v2a2.500 2.500 0 0 0 0 5v2a1.500 1.500 0 0 1-1.500 1.500H5A1.500 1.500 0 0 1 3.500 16v-2a2.500 2.500 0 0 0 0-5zM14 6.500v2M14 11v2M14 15.500v2\"/>",[[8.5,12,"c"]]],"restaurantes":["<path d=\"M3.500 17.500h17M5 17.500a7 7 0 0 1 14 0M3.500 20.500h17\"/>",[[12,7.5,"c"]]],"ropa":["<path d=\"M8.500 4l-5 3 2 3.500 2-1V20h9V9.500l2 1 2-3.500-5-3c-.5 1.500-1.800 2.200-3.500 2.200S9 5.500 8.500 4z\"/>",[[12,14,"c"]]],"educacion":["<path d=\"M12 6.500c-1.500-1.500-4-2.500-8-2.500v13c4 0 6.500 1 8 2.500 1.500-1.500 4-2.500 8-2.500V4c-4 0-6.500 1-8 2.500zM12 6.500V19.500\"/>",[[7.5,10,"c"]]],"mascotas-gasto":["<path d=\"M8 18.500c0-3 1.800-5 4-5s4 2 4 5c0 1.500-1 2-2.500 2h-3c-1.500 0-2.500-.5-2.500-2z\"/>",[[5.5,12,"i"],[9,7.5,"c"],[15,7.5,"i"],[18.5,12,"i"]]],"regalos":["<rect x=\"4\" y=\"10.5\" width=\"16\" height=\"9.5\" rx=\"2\"/><path d=\"M3.500 8h17v2.500h-17zM12 8v12M12 8c-1.500-3.500-5.500-3.500-5.500-1S10 8 12 8c1.500-3.500 5.500-3.500 5.500-1S14 8 12 8\"/>",[[8,15.5,"c"]]],"viajes":["<path d=\"M6.500 8h11A2.500 2.500 0 0 1 20 10.500V18a2.500 2.500 0 0 1-2.500 2.500h-11A2.500 2.500 0 0 1 4 18v-7.500A2.500 2.500 0 0 1 6.500 8zM9.500 8V5.500A1.500 1.500 0 0 1 11 4h2a1.500 1.500 0 0 1 1.500 1.500V8M4 13h16\"/>",[[12,16.5,"c"]]],"seguros":["<path d=\"M3.500 12a8.500 8.500 0 0 1 17 0zM12 12v6.500a2 2 0 0 1-4 0\"/>",[[12,8,"c"]]],"hogar-y-reformas":["<path d=\"M14.500 4.500l5 5-2.500 2.500-5-5zM12 7.500L4.500 15A1.800 1.800 0 0 0 7 17.500L14.500 10\"/>",[[5.5,19,"c"]]],"suscripciones":["<path d=\"M17 4l3 3-3 3M20 7H9a5 5 0 0 0-5 5M7 20l-3-3 3-3M4 17h11a5 5 0 0 0 5-5\"/>",[[12,12,"c"]]],"impuestos":["<path d=\"M17 7L7 17\"/>",[[7.5,7.5,"c"],[16.5,16.5,"i"]]],"cuidado-personal":["<circle cx=\"12\" cy=\"9.5\" r=\"5.5\"/><path d=\"M12 15v6\"/>",[[12,9.5,"c"]]],"deporte":["<circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M5.500 5.500c4 3 4 10 0 13M18.500 5.500c-4 3-4 10 0 13M3.500 12h17\"/>",[[12,12,"c"]]],"otros":["",[[5,12,"i"],[12,12,"i"],[19,12,"c"]]],"dni":["<rect x=\"3\" y=\"6\" width=\"18\" height=\"12\" rx=\"3\"/><path d=\"M13 10.500h5M13 13.500h4\"/>",[[8.5,12,"c"]]],"pasaporte":["<rect x=\"5\" y=\"3.5\" width=\"14\" height=\"17\" rx=\"2.5\"/><path d=\"M9 16h6\"/>",[[12,10,"c"]]],"tarjeta-sanitaria":["<rect x=\"3\" y=\"6\" width=\"18\" height=\"12\" rx=\"3\"/><path d=\"M7.500 12h4M9.500 10v4\"/>",[[16.5,12,"c"]]],"seguro":["<path d=\"M12 3.500l7.500 3v5.500c0 4.500-3.200 7.500-7.500 9-4.300-1.500-7.500-4.500-7.500-9V6.500z\"/>",[[12,11.5,"c"]]],"contrato-de-alquiler":["<path d=\"M7 3.500h7l5 5V19a1.500 1.500 0 0 1-1.500 1.500h-10.500A1.500 1.500 0 0 1 5.500 19V5A1.500 1.500 0 0 1 7 3.500zM14 3.500V9h5M9 13h6\"/>",[[12,17,"c"]]],"escritura":["<path d=\"M7 3.500h7l5 5V19a1.500 1.500 0 0 1-1.500 1.500h-10.500A1.500 1.500 0 0 1 5.500 19V5A1.500 1.500 0 0 1 7 3.500zM14 3.500V9h5M9.500 14.500l2.500-2.500 2.500 2.500\"/>",[[12,18,"c"]]],"vacunas":["<path d=\"M19 5l-2-2M17.500 6.500L14 3l-8 8 7 7zM9 14l-4.500 4.500M14 8l2 2\"/>",[[4.5,19.5,"c"]]],"garantias":["<path d=\"M7 3.500h7l5 5V19a1.500 1.500 0 0 1-1.500 1.500h-10.500A1.500 1.500 0 0 1 5.500 19V5A1.500 1.500 0 0 1 7 3.500zM14 3.500V9h5M9 13.500l2 2 4-4\"/>",[[12,18.5,"c"]]],"facturas":["<path d=\"M6 3.500l1.500 1.200L9 3.500l1.500 1.200L12 3.500l1.500 1.200 1.500-1.200 1.500 1.200L18 3.500V20.500l-1.500-1.200-1.500 1.200-1.500-1.200-1.500 1.200-1.500-1.200L9 20.500 7.500 19.300 6 20.500zM9 9h6M9 13h6\"/>",[[12,17,"c"]]],"coche-itv-y-permiso":["<rect x=\"3\" y=\"6\" width=\"18\" height=\"12\" rx=\"3\"/><path d=\"M6 14.500h12\"/>",[[12,10,"c"]]],"banco":["<path d=\"M3.500 9L12 4l8.500 5M5 9v8M9.500 9v8M14.500 9v8M19 9v8M3.500 20h17\"/>",[[12,7.5,"c"]]],"colegio":["<path d=\"M2.500 9.500L12 5l9.500 4.500L12 14zM6.500 12v4c1.500 1.500 3.500 2.500 5.500 2.500s4-1 5.500-2.500v-4M21.500 9.500V15\"/>",[[12,9.5,"c"]]],"cumpleanos":["<path d=\"M4.500 12.500h15V19a1.500 1.500 0 0 1-1.500 1.500H6A1.500 1.500 0 0 1 4.500 19zM4.500 12.500c1.500 0 1.500 1.500 3.500 1.500s2-1.500 4-1.500 2 1.500 4 1.500 2-1.500 3.500-1.500M12 9.500V7\"/>",[[12,4.5,"c"]]],"medico":["<path d=\"M3 12h4l2.500-5 3.500 10 2.500-5H17\"/>",[[19.5,12,"c"]]],"colegio-evento":["<path d=\"M8 7a4 4 0 0 1 8 0M6 9.500A2.500 2.500 0 0 1 8.500 7h7A2.500 2.500 0 0 1 18 9.500V19a1.500 1.500 0 0 1-1.500 1.500h-9A1.500 1.500 0 0 1 6 19zM9 14.500h6\"/>",[[12,17.5,"c"]]],"viaje":["<path d=\"M6.500 8h11A2.500 2.500 0 0 1 20 10.500V18a2.500 2.500 0 0 1-2.500 2.500h-11A2.500 2.500 0 0 1 4 18v-7.500A2.500 2.500 0 0 1 6.500 8zM9.500 8V5.500A1.500 1.500 0 0 1 11 4h2a1.500 1.500 0 0 1 1.500 1.500V8M4 13h16\"/>",[[12,16.5,"c"]]],"reunion":["<path d=\"M3 20a5.500 5.500 0 0 1 11 0M16 14.200a5.500 5.500 0 0 1 5 5.800\"/>",[[8.5,8.5,"i"],[16.5,8.5,"c"]]],"fiesta":["<path d=\"M3 5.500c3.500 5 14.500 5 18 0M5.500 9l2.500 6 2.500-6.200M13.500 10l2.500 5.500 2.500-5.500\"/>",[[12,19.5,"c"]]],"deporte-evento":["<circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M5.500 5.500c4 3 4 10 0 13M18.500 5.500c-4 3-4 10 0 13M3.500 12h17\"/>",[[12,12,"c"]]],"visita":["<rect x=\"6\" y=\"3.5\" width=\"12\" height=\"17\" rx=\"2\"/><path d=\"M3.500 20.500h17\"/>",[[15,12,"c"]]],"vacaciones":["<path d=\"M3.500 12a8.500 8.500 0 0 1 17 0zM12 12v7.500M7 20.500h10\"/>",[[18.5,19.5,"c"]]],"cena":["<path d=\"M12 20v-6M8.500 20.500h7M12 14c-3.500 0-5-3-5-6.500h10c0 3.500-1.500 6.500-5 6.500z\"/>",[[12,4.2,"c"]]],"tramite":["<path d=\"M3.500 7a2 2 0 0 1 2-2h4l2 2.500h7a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z\"/>",[[12,13.5,"c"]]],"recordatorio":["<path d=\"M6 17v-6a6 6 0 0 1 12 0v6l1.5 2h-15z\"/>",[[12,21.7,"c"]]],"perro":["<path d=\"M5 8.500L4 4.500a1.500 1.500 0 0 1 2.500-.7L9 6.500M19 8.500l1-4a1.500 1.500 0 0 0-2.500-.7L15 6.500M5 8.500C5 6.500 7.500 5.500 12 5.500s7 1 7 3v4.500c0 4-3 7-7 7s-7-3-7-7z\"/>",[[9,10.5,"i"],[15,10.5,"i"],[12,15.5,"c"]]],"gato":["<path d=\"M5 10V4.500L8.500 7h7L19 4.500V10c0 5-3 8.500-7 8.500S5 15 5 10z\"/>",[[9,11,"i"],[15,11,"i"],[12,15.5,"c"]]],"pez-betta":["<path d=\"M3.500 12a6 4.200 0 1 0 12 0a6 4.200 0 1 0-12 0M15 12l5.500-6.500v13zM9.500 7.800l2-3 2 3.200\"/>",[[7,11,"c"]]],"pez-tetra-neon":["<path d=\"M3.500 12a6.500 4 0 1 0 13 0a6.500 4 0 1 0-13 0M16.500 12l4-3.500v7zM9 12.500h5\"/>",[[7,11,"c"]]],"pez-payaso":["<path d=\"M3.500 12a6.500 4.200 0 1 0 13 0a6.500 4.200 0 1 0-13 0M16.500 12l4-3.500v7zM10.500 7.800v8.400M14 8.500v7\"/>",[[7,11,"c"]]],"tortuga":["<path d=\"M3 16a7 7 0 0 1 14 0zM6 16v3M14 16v3M9 9.500l1 3.500M13 9.500l-1 3.500\"/>",[[19.5,13,"c"]]],"pajaro":["<path d=\"M5 14c0-4 3-7 7-7 2 0 3.500 1 4.500 2.500L21 11l-3 1.500c-.5 4-3 6.500-7 6.500-3.500 0-6-2.500-6-5zM9 19.500v1.500M13 19.500V21\"/>",[[14.5,10.5,"c"]]],"conejo":["<path d=\"M9 4c1.500 0 2 2 2 5M15 4c-1.500 0-2 2-2 5M6.500 15c0-3.500 2.500-6 5.500-6s5.500 2.500 5.500 6-2.500 5.500-5.500 5.500S6.500 18.500 6.500 15z\"/>",[[9,14,"i"],[15,14,"i"],[12,18,"c"]]],"hamster":["<path d=\"M12 5.500c4.500 0 8 3 8 7s-3.500 7-8 7-8-3-8-7 3.500-7 8-7zM6 7.500a2.500 2.500 0 0 1 3-2M18 7.500a2.500 2.500 0 0 0-3-2\"/>",[[9,12.5,"i"],[15,12.5,"i"],[12,16.5,"c"]]],"caracol-de-acuario":["<circle cx=\"10\" cy=\"11.5\" r=\"6\"/><path d=\"M3.500 19h15a2 2 0 0 0 2-2c0-1.500-1-2.500-2.500-2.500M19 14.500v-3M21 14.500l1.500-2.500\"/>",[[10,11.5,"c"]]],"gamba":["<path d=\"M18.500 5.500c-5-1-12 2-12 8.500 0 3 1 5 3.500 6M18.500 5.500L20 8M8 15.500l-3.500 1M9.500 18l-2 2.500\"/>",[[16.5,9,"c"]]],"planta-de-acuario":["<path d=\"M12 21c-3-5-3-11 0-16 3 5 3 11 0 16zM7 21c-2-3-2-7-.5-10 2 3 2 7 .5 10zM17 21c2-3 2-7 .5-10-2 3-2 7-.5 10z\"/>",[[12,12,"c"]]],"cuenco-de-pienso":["<path d=\"M4 11.500h16c0 4.500-3.500 8-8 8s-8-3.500-8-8z\"/>",[[12,7.5,"c"]]],"correa-y-paseo":["<path d=\"M9.500 14.500L16 8M16 8l3-3a2 2 0 0 1 3 3l-3 3M9.500 14.500a3.500 3.500 0 1 0-3.500 3.500\"/>",[[5.5,18.5,"c"]]],"veterinario":["<path d=\"M9.500 4h5v5.500H20v5h-5.500V20h-5v-5.500H4v-5h5.500z\"/>",[[12,12,"c"]]],"vacuna":["<path d=\"M19 5l-2-2M17.500 6.500L14 3l-8 8 7 7zM9 14l-4.500 4.500M14 8l2 2\"/>",[[4.5,19.5,"c"]]],"cambio-de-agua":["<path d=\"M6 8h12l-1.500 11a1.500 1.500 0 0 1-1.500 1.300H9A1.500 1.500 0 0 1 7.500 19zM8 8a4 4 0 0 1 8 0\"/>",[[12,14,"c"]]],"limpieza-del-acuario":["<rect x=\"4\" y=\"10\" width=\"16\" height=\"9\" rx=\"3\"/>",[[8.5,14.5,"i"],[14.5,13,"c"]]],"test-de-agua":["<path d=\"M9 3.500h6M10 3.500v13a2 2 0 0 0 4 0v-13M10 10h4\"/>",[[12,17,"c"]]],"termometro":["<path d=\"M10 14V5a2 2 0 0 1 4 0v9a4.500 4.500 0 1 1-4 0z\"/>",[[12,16.5,"c"]]],"filtro":["<rect x=\"5\" y=\"4\" width=\"14\" height=\"16\" rx=\"3\"/><path d=\"M8.500 9h7M8.500 13h4\"/>",[[12,17,"c"]]],"comida-de-peces":["<path d=\"M7 4.500h10v3H7zM6.500 7.500h11V19a1.500 1.500 0 0 1-1.500 1.500H8A1.500 1.500 0 0 1 6.500 19z\"/>",[[12,14,"c"]]],"acuario-completo":["<rect x=\"3\" y=\"5.5\" width=\"18\" height=\"13\" rx=\"3\"/><path d=\"M3 15h18\"/>",[[8,10.5,"c"],[15.5,9.5,"i"]]],"transportin":["<rect x=\"3.5\" y=\"8\" width=\"17\" height=\"11\" rx=\"3\"/><path d=\"M3.500 11.500h17M7 4.500h10\"/>",[[12,15,"c"]]],"bicicleta":["<circle cx=\"6.5\" cy=\"16\" r=\"4\"/><circle cx=\"17.5\" cy=\"16\" r=\"4\"/><path d=\"M6.500 16l3.500-7h5M10 9l3 7h4.500l-3-7M14.500 9l-1-2.500h-2\"/>",[[12,9,"c"]]]};
const ILUS = {"invita-a-los-tuyos":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 200\"><ellipse cx=\"88\" cy=\"180\" rx=\"70\" ry=\"7\" fill=\"#2B3A42\" opacity=\".1\"/><g transform=\"translate(0 6) scale(0.92)\"><rect x=\"28\" y=\"56\" width=\"144\" height=\"104\" rx=\"18\" fill=\"#9B86E0\" /><path d=\"M28 74 L100 124 L172 74 L172 66 a10 10 0 0 0 -10 -10 H38 a10 10 0 0 0 -10 10 Z\" fill=\"#EE8AA8\"/></g><g transform=\"translate(140 100) scale(0.55)\"><circle cx=\"56\" cy=\"100\" r=\"34\" fill=\"#F2B824\"/><circle cx=\"56\" cy=\"100\" r=\"14\" fill=\"none\"/><rect x=\"80\" y=\"92\" width=\"92\" height=\"16\" rx=\"8\" fill=\"#F2B824\" /><rect x=\"146\" y=\"108\" width=\"14\" height=\"26\" rx=\"7\" fill=\"#F2B824\" /><rect x=\"120\" y=\"108\" width=\"14\" height=\"18\" rx=\"7\" fill=\"#F2B824\" /></g></svg>","tus-datos-tuyos":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 200\"><ellipse cx=\"88\" cy=\"180\" rx=\"70\" ry=\"7\" fill=\"#2B3A42\" opacity=\".1\"/><g transform=\"translate(0 6) scale(0.92)\"><rect x=\"32\" y=\"34\" width=\"136\" height=\"132\" rx=\"20\" fill=\"#3C78C8\" /><circle cx=\"100\" cy=\"100\" r=\"34\" fill=\"#EAF4FA\"/><circle cx=\"100\" cy=\"100\" r=\"12\" fill=\"#F2B824\"/><rect x=\"150\" y=\"92\" width=\"12\" height=\"16\" rx=\"4\" fill=\"#A6C93A\" /></g><g transform=\"translate(140 100) scale(0.55)\"><circle cx=\"56\" cy=\"100\" r=\"34\" fill=\"#F2B824\"/><circle cx=\"56\" cy=\"100\" r=\"14\" fill=\"none\"/><rect x=\"80\" y=\"92\" width=\"92\" height=\"16\" rx=\"8\" fill=\"#F2B824\" /><rect x=\"146\" y=\"108\" width=\"14\" height=\"26\" rx=\"7\" fill=\"#F2B824\" /><rect x=\"120\" y=\"108\" width=\"14\" height=\"18\" rx=\"7\" fill=\"#F2B824\" /></g></svg>","avisos-a-tiempo":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 200\"><ellipse cx=\"88\" cy=\"180\" rx=\"70\" ry=\"7\" fill=\"#2B3A42\" opacity=\".1\"/><g transform=\"translate(0 6) scale(0.92)\"><path d=\"M44 144 q8 -10 8 -44 a48 48 0 0 1 96 0 q0 34 8 44 Z\" fill=\"#F2B824\"/><circle cx=\"100\" cy=\"160\" r=\"14\" fill=\"#F0674B\"/><rect x=\"92\" y=\"36\" width=\"16\" height=\"16\" rx=\"8\" fill=\"#F2B824\" /></g><g transform=\"translate(140 86) scale(0.55)\"><rect x=\"32\" y=\"40\" width=\"136\" height=\"128\" rx=\"20\" fill=\"#D3E8F6\" /><rect x=\"32\" y=\"40\" width=\"136\" height=\"38\" rx=\"18\" fill=\"#F0674B\" /><rect x=\"62\" y=\"24\" width=\"12\" height=\"30\" rx=\"6\" fill=\"#2B3A42\" /><rect x=\"126\" y=\"24\" width=\"12\" height=\"30\" rx=\"6\" fill=\"#2B3A42\" /><circle cx=\"70\" cy=\"110\" r=\"9\" fill=\"#F2B824\"/><circle cx=\"100\" cy=\"110\" r=\"9\" fill=\"#2BB5B0\"/><circle cx=\"130\" cy=\"110\" r=\"9\" fill=\"#9B86E0\"/><circle cx=\"70\" cy=\"142\" r=\"9\" fill=\"#A6C93A\"/><circle cx=\"100\" cy=\"142\" r=\"9\" fill=\"#3C78C8\"/></g></svg>","sin-compras":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 200\"><ellipse cx=\"88\" cy=\"180\" rx=\"70\" ry=\"7\" fill=\"#2B3A42\" opacity=\".1\"/><g transform=\"translate(0 6) scale(0.92)\"><path d=\"M62 100 q-4 -44 38 -44 q42 0 38 44\" fill=\"none\" stroke=\"#9B86E0\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M22 100 H178 L162 164 a14 14 0 0 1 -14 12 H52 a14 14 0 0 1 -14 -12 Z\" fill=\"#F2B824\"/></g><g transform=\"translate(150 96) scale(0.5)\"><rect x=\"52\" y=\"70\" width=\"96\" height=\"104\" rx=\"20\" fill=\"#EE8AA8\" /><path d=\"M78 78 v-12 a22 22 0 0 1 44 0 v12\" fill=\"none\" stroke=\"#9B86E0\" stroke-width=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"78\" cy=\"96\" r=\"6\" fill=\"#FFFDF7\"/><circle cx=\"122\" cy=\"96\" r=\"6\" fill=\"#FFFDF7\"/></g></svg>","algo-ha-fallado":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 200\"><ellipse cx=\"88\" cy=\"180\" rx=\"70\" ry=\"7\" fill=\"#2B3A42\" opacity=\".1\"/><g transform=\"translate(0 6) scale(0.92)\"><path d=\"M100 30 L174 160 H26 Z\" fill=\"#F2B824\" stroke=\"#F2B824\" stroke-width=\"18\" stroke-linejoin=\"round\"/><rect x=\"94\" y=\"68\" width=\"12\" height=\"52\" rx=\"6\" fill=\"#2B3A42\" /><circle cx=\"100\" cy=\"140\" r=\"8\" fill=\"#2B3A42\"/></g><g transform=\"translate(150 96) scale(0.5)\"><path d=\"M62 120 H138 L128 172 a10 10 0 0 1 -10 8 H82 a10 10 0 0 1 -10 -8 Z\" fill=\"#F0674B\"/><ellipse cx=\"76\" cy=\"92\" rx=\"16\" ry=\"36\" fill=\"#2E8B57\" transform=\"rotate(-30 76 92)\"/><ellipse cx=\"124\" cy=\"92\" rx=\"16\" ry=\"36\" fill=\"#A6C93A\" transform=\"rotate(30 124 92)\"/><ellipse cx=\"100\" cy=\"76\" rx=\"16\" ry=\"42\" fill=\"#2E8B57\" /></g></svg>","sin-personas-aun":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 200\"><ellipse cx=\"120\" cy=\"160\" rx=\"96\" ry=\"7\" fill=\"#2B3A42\" opacity=\".1\"/><clipPath id=\"sin-personas-aun-cA\"><circle cx=\"48\" cy=\"110\" r=\"34\"/></clipPath><circle cx=\"48\" cy=\"110\" r=\"34\" fill=\"#F0674B\"/><g clip-path=\"url(#sin-personas-aun-cA)\"><circle cx=\"48\" cy=\"103.2\" r=\"10.2\" fill=\"#FFFDF7\"/><ellipse cx=\"48\" cy=\"127.68\" rx=\"21.08\" ry=\"13.600000000000001\" fill=\"#FFFDF7\"/></g><clipPath id=\"sin-personas-aun-cB\"><circle cx=\"120\" cy=\"110\" r=\"34\"/></clipPath><circle cx=\"120\" cy=\"110\" r=\"34\" fill=\"#2BB5B0\"/><g clip-path=\"url(#sin-personas-aun-cB)\"><circle cx=\"120\" cy=\"103.2\" r=\"10.2\" fill=\"#FFFDF7\"/><ellipse cx=\"120\" cy=\"127.68\" rx=\"21.08\" ry=\"13.600000000000001\" fill=\"#FFFDF7\"/></g><circle cx=\"192\" cy=\"110\" r=\"34\" fill=\"#D3E8F6\"/><rect x=\"175\" y=\"107\" width=\"34\" height=\"6\" rx=\"3\" fill=\"#2B3A42\"/><rect x=\"189\" y=\"93\" width=\"6\" height=\"34\" rx=\"3\" fill=\"#2B3A42\"/></svg>","espacio-nuevo":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 200\"><ellipse cx=\"88\" cy=\"180\" rx=\"70\" ry=\"7\" fill=\"#2B3A42\" opacity=\".1\"/><g transform=\"translate(0 6) scale(0.92)\"><rect x=\"34\" y=\"84\" width=\"132\" height=\"90\" rx=\"18\" fill=\"#D3E8F6\" /><path d=\"M20 92 L100 24 L180 92 Z\" fill=\"#F0674B\" stroke=\"#F0674B\" stroke-width=\"10\" stroke-linejoin=\"round\"/><path d=\"M82 174 V134 a18 18 0 0 1 36 0 V174 Z\" fill=\"#3C78C8\"/><rect x=\"46\" y=\"106\" width=\"24\" height=\"24\" rx=\"8\" fill=\"#F2B824\" /><rect x=\"130\" y=\"106\" width=\"24\" height=\"24\" rx=\"8\" fill=\"#2BB5B0\" /></g><g transform=\"translate(150 96) scale(0.5)\"><rect x=\"40\" y=\"76\" width=\"120\" height=\"98\" rx=\"14\" fill=\"#F2B824\" /><rect x=\"40\" y=\"76\" width=\"120\" height=\"22\" rx=\"10\" fill=\"#F0674B\" /><rect x=\"88\" y=\"76\" width=\"24\" height=\"50\" rx=\"0\" fill=\"#E4EE9A\" /></g></svg>","hogar-portada":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 200\"><ellipse cx=\"120\" cy=\"180\" rx=\"80\" ry=\"7\" fill=\"#2B3A42\" opacity=\".1\"/><g transform=\"translate(20 0) scale(1)\"><rect x=\"34\" y=\"84\" width=\"132\" height=\"90\" rx=\"18\" fill=\"#D3E8F6\" /><path d=\"M20 92 L100 24 L180 92 Z\" fill=\"#F0674B\" stroke=\"#F0674B\" stroke-width=\"10\" stroke-linejoin=\"round\"/><path d=\"M82 174 V134 a18 18 0 0 1 36 0 V174 Z\" fill=\"#3C78C8\"/><rect x=\"46\" y=\"106\" width=\"24\" height=\"24\" rx=\"8\" fill=\"#F2B824\" /><rect x=\"130\" y=\"106\" width=\"24\" height=\"24\" rx=\"8\" fill=\"#2BB5B0\" /></g></svg>","pareja-portada":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 200\"><ellipse cx=\"88\" cy=\"180\" rx=\"70\" ry=\"7\" fill=\"#2B3A42\" opacity=\".1\"/><g transform=\"translate(0 6) scale(0.92)\"><rect x=\"40\" y=\"100\" width=\"60\" height=\"64\" rx=\"16\" fill=\"#F0674B\" /><rect x=\"104\" y=\"100\" width=\"60\" height=\"64\" rx=\"16\" fill=\"#2BB5B0\" /><rect x=\"40\" y=\"100\" width=\"60\" height=\"12\" rx=\"6\" fill=\"#F2B824\" /><rect x=\"104\" y=\"100\" width=\"60\" height=\"12\" rx=\"6\" fill=\"#F2B824\" /></g><g transform=\"translate(150 80) scale(0.5)\"><path d=\"M100 172 C36 128 26 76 60 58 C82 46 98 62 100 78 C102 62 118 46 140 58 C174 76 164 128 100 172 Z\" fill=\"#F0674B\"/></g></svg>","familia-extensa-portada":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 200\"><ellipse cx=\"120\" cy=\"180\" rx=\"80\" ry=\"7\" fill=\"#2B3A42\" opacity=\".1\"/><g transform=\"translate(20 0) scale(1)\"><rect x=\"18\" y=\"70\" width=\"164\" height=\"70\" rx=\"22\" fill=\"#F2B824\" /><circle cx=\"48\" cy=\"92\" r=\"11\" fill=\"#F0674B\"/><circle cx=\"82\" cy=\"92\" r=\"11\" fill=\"#3C78C8\"/><circle cx=\"116\" cy=\"92\" r=\"11\" fill=\"#A6C93A\"/><circle cx=\"150\" cy=\"92\" r=\"11\" fill=\"#9B86E0\"/><circle cx=\"48\" cy=\"120\" r=\"11\" fill=\"#EE8AA8\"/><circle cx=\"82\" cy=\"120\" r=\"11\" fill=\"#2BB5B0\"/><circle cx=\"116\" cy=\"120\" r=\"11\" fill=\"#F0674B\"/><circle cx=\"150\" cy=\"120\" r=\"11\" fill=\"#3C78C8\"/><rect x=\"34\" y=\"146\" width=\"14\" height=\"26\" rx=\"6\" fill=\"#9B86E0\" /><rect x=\"152\" y=\"146\" width=\"14\" height=\"26\" rx=\"6\" fill=\"#9B86E0\" /></g></svg>","cuidar-a-alguien-portada":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 200\"><ellipse cx=\"88\" cy=\"180\" rx=\"70\" ry=\"7\" fill=\"#2B3A42\" opacity=\".1\"/><g transform=\"translate(0 6) scale(0.92)\"><rect x=\"40\" y=\"96\" width=\"120\" height=\"76\" rx=\"34\" fill=\"#EE8AA8\" /><rect x=\"48\" y=\"50\" width=\"28\" height=\"70\" rx=\"14\" fill=\"#EE8AA8\" /><rect x=\"80\" y=\"36\" width=\"28\" height=\"82\" rx=\"14\" fill=\"#EE8AA8\" /><rect x=\"112\" y=\"44\" width=\"28\" height=\"76\" rx=\"14\" fill=\"#EE8AA8\" /><rect x=\"142\" y=\"70\" width=\"26\" height=\"60\" rx=\"13\" fill=\"#EE8AA8\" /></g><g transform=\"translate(150 90) scale(0.5)\"><path d=\"M100 172 C36 128 26 76 60 58 C82 46 98 62 100 78 C102 62 118 46 140 58 C174 76 164 128 100 172 Z\" fill=\"#F0674B\"/></g></svg>","piso-compartido-portada":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 200\"><ellipse cx=\"120\" cy=\"180\" rx=\"90\" ry=\"7\" fill=\"#2B3A42\" opacity=\".1\"/><rect x=\"22\" y=\"8\" width=\"60\" height=\"84\" rx=\"30\" fill=\"#F0674B\" /><circle cx=\"68\" cy=\"58\" r=\"4\" fill=\"#FFFDF7\"/><rect x=\"94\" y=\"8\" width=\"60\" height=\"84\" rx=\"30\" fill=\"#F2B824\" /><circle cx=\"140\" cy=\"58\" r=\"4\" fill=\"#FFFDF7\"/><rect x=\"166\" y=\"8\" width=\"60\" height=\"84\" rx=\"30\" fill=\"#2BB5B0\" /><circle cx=\"212\" cy=\"58\" r=\"4\" fill=\"#FFFDF7\"/><rect x=\"22\" y=\"100\" width=\"60\" height=\"84\" rx=\"30\" fill=\"#9B86E0\" /><circle cx=\"68\" cy=\"150\" r=\"4\" fill=\"#FFFDF7\"/><rect x=\"94\" y=\"100\" width=\"60\" height=\"84\" rx=\"30\" fill=\"#A6C93A\" /><circle cx=\"140\" cy=\"150\" r=\"4\" fill=\"#FFFDF7\"/><rect x=\"166\" y=\"100\" width=\"60\" height=\"84\" rx=\"30\" fill=\"#3C78C8\" /><circle cx=\"212\" cy=\"150\" r=\"4\" fill=\"#FFFDF7\"/></svg>","solo-yo-portada":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 200\"><ellipse cx=\"88\" cy=\"180\" rx=\"70\" ry=\"7\" fill=\"#2B3A42\" opacity=\".1\"/><g transform=\"translate(0 6) scale(0.92)\"><rect x=\"50\" y=\"70\" width=\"84\" height=\"92\" rx=\"20\" fill=\"#F0674B\" /><path d=\"M130 94 h12 a20 20 0 0 1 0 40 h-12\" fill=\"none\" stroke=\"#F0674B\" stroke-width=\"12\"/><rect x=\"50\" y=\"70\" width=\"84\" height=\"16\" rx=\"8\" fill=\"#F2B824\" /></g><g transform=\"translate(140 100) scale(0.5)\"><rect x=\"28\" y=\"56\" width=\"70\" height=\"110\" rx=\"14\" fill=\"#3C78C8\" /><rect x=\"102\" y=\"56\" width=\"70\" height=\"110\" rx=\"14\" fill=\"#2BB5B0\" /><rect x=\"94\" y=\"60\" width=\"12\" height=\"102\" rx=\"0\" fill=\"#FFFDF7\" /></g></svg>"};

/* ---- 01_base.js ---- */
/* ============================ BASE ============================ */
const VERSION = '0.1.0';
const MIN_SCRIPT = '0.1.0';
const COL = ['#F0674B', '#F2B824', '#A6C93A', '#2E8B57', '#2BB5B0', '#3C78C8', '#9B86E0', '#EE8AA8'];
const NOMCOL = ['Coral', 'Limón', 'Lima', 'Verde', 'Turquesa', 'Azul', 'Lavanda', 'Rosa'];
const DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const REDUCIR = (() => { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } })();

const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const dosd = n => String(n).padStart(2, '0');
const hora = d => dosd(d.getHours()) + ':' + dosd(d.getMinutes());
const fechaLarga = d => cap(DIAS[d.getDay()]) + ' ' + d.getDate() + ' de ' + MESES[d.getMonth()];
const fechaCorta = d => d.getDate() + ' de ' + MESES[d.getMonth()] + ' de ' + d.getFullYear();
const sinAcentos = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const espera = ms => new Promise(r => setTimeout(r, ms));
const nomColor = c => NOMCOL[COL.indexOf(String(c || '').toUpperCase())] || 'sin color';
const verNum = v => String(v || '0').split('.').map(Number).reduce((a, x) => a * 1000 + (x || 0), 0);

function haceRato(ts) {
  if (!ts) return 'todavía no';
  const s = Math.round((Date.now() - ts) / 1000);
  if (s < 20) return 'hace un momento';
  if (s < 90) return 'hace un minuto';
  if (s < 3600) return 'hace ' + Math.round(s / 60) + ' minutos';
  const d = new Date(ts), h = new Date();
  return (d.toDateString() === h.toDateString() ? 'hoy' : d.getDate() + ' de ' + MESES[d.getMonth()]) + ' a las ' + hora(d);
}

/* ---------- registro de errores (para «Comprobaciones») */
const REG = [];
function anotar(donde, e) {
  const m = (e && (e.message || e)) + '';
  REG.unshift(hora(new Date()) + ' · ' + donde + ' · ' + m.slice(0, 300));
  REG.length = Math.min(REG.length, 40);
  try { localStorage.setItem('ronda-registro', JSON.stringify(REG)); } catch (x) { }
}
try { JSON.parse(localStorage.getItem('ronda-registro') || '[]').forEach(x => REG.push(x)); } catch (e) { }
window.addEventListener('error', e => anotar('js', e.message + ' (' + (e.filename || '').split('/').pop() + ':' + e.lineno + ')'));
window.addEventListener('unhandledrejection', e => anotar('promesa', e.reason));

/* ---------- almacén local: IndexedDB, y si falla, localStorage, y si falla, memoria */
const DB = {
  db: null, modo: 'memoria', mem: {},
  abrir() {
    return new Promise(ok => {
      let hecho = false;
      const fin = m => { if (!hecho) { hecho = true; this.modo = m; ok(); } };
      setTimeout(() => fin(this.lsOk() ? 'local' : 'memoria'), 2500);
      try {
        const r = indexedDB.open('ronda', 1);
        r.onupgradeneeded = () => r.result.createObjectStore('kv');
        r.onsuccess = () => { this.db = r.result; fin('idb'); };
        r.onerror = () => fin(this.lsOk() ? 'local' : 'memoria');
      } catch (e) { fin(this.lsOk() ? 'local' : 'memoria'); }
    });
  },
  lsOk() { try { localStorage.setItem('ronda-x', '1'); localStorage.removeItem('ronda-x'); return true; } catch (e) { return false; } },
  tx(m, f) {
    return new Promise((ok, ko) => {
      try { const t = this.db.transaction('kv', m); const r = f(t.objectStore('kv')); t.oncomplete = () => ok(r && r.result); t.onerror = () => ko(t.error); t.onabort = () => ko(t.error); } catch (e) { ko(e); }
    });
  },
  async get(k) {
    if (k in this.mem) return this.mem[k];
    try {
      if (this.modo === 'idb') return await this.tx('readonly', s => s.get(k));
      if (this.modo === 'local') { const v = localStorage.getItem('ronda:' + k); return v ? JSON.parse(v) : undefined; }
    } catch (e) { anotar('leer ' + k, e); }
    return undefined;
  },
  async set(k, v) {
    this.mem[k] = v;
    try {
      if (this.modo === 'idb') await this.tx('readwrite', s => s.put(v, k));
      else if (this.modo === 'local') localStorage.setItem('ronda:' + k, JSON.stringify(v));
    } catch (e) { anotar('guardar ' + k, e); }
  },
  async del(k) {
    delete this.mem[k];
    try {
      if (this.modo === 'idb') await this.tx('readwrite', s => s.delete(k));
      else if (this.modo === 'local') localStorage.removeItem('ronda:' + k);
    } catch (e) { anotar('borrar ' + k, e); }
  }
};

/* ---------- estado */
const S = {
  cfg: null,          /* { url, token, persona, rol, sid } */
  recs: {},           /* col › id › { f, t, rev, por } */
  seq: 0, sid: '',
  cola: {},           /* 'col|id' › { id, col, f, t, v } cambios sin enviar */
  sv: '', cal: null,
  red: { ok: true, ultimo: 0, error: null, enviando: false },
  imgs: {},           /* fid › dataURL */
  alta: null          /* datos mientras se crea o se une a un espacio */
};

let guardarT = null;
function guardarLocal(ya) {
  clearTimeout(guardarT);
  const f = () => { DB.set('datos', { recs: S.recs, seq: S.seq, sid: S.sid }); DB.set('cola', S.cola); };
  if (ya) f(); else guardarT = setTimeout(f, 250);
}

/* ---------- llamadas al script */
function ErrR(code, msg) { const e = new Error(msg); e.code = code; e.ronda = true; return e; }

async function api(a, extra, opts) {
  opts = opts || {};
  const url = opts.url || (S.cfg && S.cfg.url);
  if (!url) throw ErrR('config', 'Este móvil no está conectado a ningún espacio.');
  const cuerpo = Object.assign({ a: a }, extra || {});
  if (!opts.sinToken && S.cfg && S.cfg.token) cuerpo.t = S.cfg.token;
  const ctl = new AbortController();
  const to = setTimeout(() => ctl.abort(), opts.ms || 25000);
  let txt = '';
  try {
    /* Sin cabeceras: así el navegador no hace la consulta previa (CORS) que Apps Script no admite. */
    const r = await fetch(url, { method: 'POST', body: JSON.stringify(cuerpo), signal: ctl.signal, redirect: 'follow', cache: 'no-store' });
    txt = await r.text();
    if (!r.ok && !txt) throw ErrR('red', 'Google ha respondido con un error ' + r.status + '.');
  } catch (e) {
    if (e.ronda) { anotar(a, e); throw e; }
    let err;
    if (e.name === 'AbortError') err = ErrR('tiempo', 'El script no ha respondido a tiempo. Vuelve a intentarlo en un momento.');
    else if (navigator.onLine === false) err = ErrR('sinred', 'Sin conexión. Se guardará al volver.');
    else err = ErrR('red', 'No consigo llegar al script. Si tienes conexión, revisa que la implementación tenga «Quién tiene acceso: Cualquier usuario» y que la dirección acabe en /exec.');
    anotar(a, err.message + ' [' + (e.message || e.name) + ']');
    throw err;
  } finally { clearTimeout(to); }
  let j;
  try { j = JSON.parse(txt); } catch (e) {
    const login = /accounts\.google|ServiceLogin|Iniciar sesi|Sign in/i.test(txt);
    const err = ErrR('html', login ? 'Google pide iniciar sesión: la implementación no tiene «Quién tiene acceso: Cualquier usuario».' : 'Google ha devuelto una página en vez de datos. Suele ser que faltan permisos: ejecuta «configurar» en el script, marca «Seleccionar todo» y haz «Nueva versión».');
    anotar(a, err.message + ' [' + txt.slice(0, 80).replace(/\s+/g, ' ') + ']');
    throw err;
  }
  if (j.sv) S.sv = j.sv;
  if (!j.ok) { const err = ErrR(j.code || 'script', j.error || 'El script ha dado un error.'); anotar(a, err.message); throw err; }
  return j;
}

/* Dirección del script: acepta la /exec entera o solo el identificador. */
function urlScript(txt) {
  const s = String(txt || '').trim();
  if (/\/dev(\?|$)/.test(s)) return { error: 'Esa es la dirección de pruebas (acaba en /dev). Copia la de la implementación, que acaba en /exec.' };
  const m = s.match(/script\.google\.com\/(?:a\/[^/]+\/)?macros\/s\/([A-Za-z0-9_-]{20,})\/exec/);
  if (m) return { url: s.split('?')[0].split('#')[0], id: m[1] };
  if (/^[A-Za-z0-9_-]{40,}$/.test(s)) return { url: 'https://script.google.com/macros/s/' + s + '/exec', id: s };
  if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\//.test(s)) return { url: s, id: s }; /* solo para las pruebas */
  return { error: 'No parece la dirección del script. Tiene que empezar por https://script.google.com/macros/s/ y acabar en /exec.' };
}

/* Invitación: RONDA1-<base64 de {u, c, n}> */
function crearPaquete(codigo) {
  const d = { u: S.cfg.url, c: codigo.replace('-', ''), n: (dato('espacio', 'espacio') || {}).nombre || '' };
  const m = d.u.match(/macros\/s\/([^/]+)\/exec/);
  if (m) d.u = m[1];
  return 'RONDA1-' + btoa(unescape(encodeURIComponent(JSON.stringify(d)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function leerPaquete(txt) {
  const m = String(txt || '').replace(/\s+/g, '').match(/RONDA1-([A-Za-z0-9_-]+)/);
  if (!m) return { error: 'No encuentro el código. Tiene que empezar por RONDA1-. Cópialo entero y pégalo otra vez.' };
  try {
    let b = m[1].replace(/-/g, '+').replace(/_/g, '/');
    while (b.length % 4) b += '=';
    const d = JSON.parse(decodeURIComponent(escape(atob(b))));
    const u = /^https?:/.test(d.u) ? d.u : 'https://script.google.com/macros/s/' + d.u + '/exec';
    return { url: u, codigo: String(d.c || ''), espacio: d.n || '' };
  } catch (e) { return { error: 'El código está incompleto. Cópialo entero (es largo) y pégalo otra vez.' }; }
}

/* ---------- datos */
function dato(col, id) { const r = S.recs[col] && S.recs[col][id]; return r && !r.f._b ? Object.assign({ id: id }, r.f) : null; }
function lista(col) {
  const m = S.recs[col] || {};
  return Object.keys(m).filter(id => !m[id].f._b).map(id => Object.assign({ id: id, _rev: m[id].rev, _por: m[id].por }, m[id].f));
}
function personas() { return lista('personas').sort((a, b) => (a.alta || 0) - (b.alta || 0)); }
function yo() { return S.cfg ? dato('personas', S.cfg.persona) : null; }
function esAdmin() { return S.cfg && S.cfg.rol === 'admin'; }
function espacio() { return dato('espacio', 'espacio') || { nombre: 'Nuestro espacio', tipo: 'hogar', color: COL[4] }; }

/* Cambio hecho en este móvil: se aplica al momento y entra en la cola de envío. */
function cambiar(col, id, campos) {
  const ahora = Date.now();
  S.recs[col] = S.recs[col] || {};
  const r = S.recs[col][id] || (S.recs[col][id] = { f: {}, t: {}, rev: 0, por: S.cfg && S.cfg.persona });
  const k = col + '|' + id;
  const op = S.cola[k] || (S.cola[k] = { id: id, col: col, f: {}, t: {}, v: 0 });
  Object.keys(campos).forEach(c => { r.f[c] = campos[c]; r.t[c] = ahora; op.f[c] = campos[c]; op.t[c] = ahora; });
  op.v++;
  guardarLocal();
  Sync.pronto();
}

/* ---- 02_sync.js ---- */
/* ============================ SINCRONIZACIÓN ============================
   - Todo cambio se hace al momento en el móvil y entra en la cola.
   - La cola se envía a Google en orden; si falla, se reintenta más tarde.
   - Al traer cambios se juntan campo a campo: nunca se pisa algo que todavía no se ha enviado.
   - Mientras la app está abierta, pregunta cada pocos segundos (más a menudo en pantallas compartidas). */
const Sync = {
  t: null, corriendo: false, otra: false, fallos: 0, ultimoOk: 0, pendT: null,
  pendientes() { return Object.keys(S.cola).length; },
  intervalo() {
    if (document.hidden) return 0;
    const p = Nav.actual();
    const vivo = p && (p.id === 'compra' || p.id === 'personas' || p.id === 'inicio');
    const base = vivo ? 4000 : 12000;
    return this.fallos ? Math.min(60000, base * Math.pow(2, this.fallos)) : base;
  },
  programar() {
    clearTimeout(this.t);
    const ms = this.intervalo();
    if (ms && S.cfg) this.t = setTimeout(() => this.ya(), ms);
  },
  pronto() { clearTimeout(this.pendT); this.pendT = setTimeout(() => this.ya(), 350); },
  async ya() {
    if (!S.cfg) return;
    if (this.corriendo) { this.otra = true; return; }
    this.corriendo = true;
    clearTimeout(this.t);
    const antes = JSON.stringify([S.red.ok, this.pendientes()]);
    try {
      const ops = Object.keys(S.cola).map(k => S.cola[k]);
      let r;
      if (ops.length) {
        S.red.enviando = true;
        const foto = ops.map(o => [o.col + '|' + o.id, o.v]);
        r = await api('guardar', { ops: ops.slice(0, 200).map(o => ({ id: o.id, col: o.col, f: o.f, t: o.t })), desde: S.seq });
        foto.slice(0, 200).forEach(x => { const o = S.cola[x[0]]; if (o && o.v === x[1]) delete S.cola[x[0]]; });
        if (r.avisos && r.avisos.length) avisosGuardar(r.avisos);
        if (ops.length > 200) this.otra = true;
      } else {
        r = await api('cambios', { desde: S.seq });
      }
      recibir(r);
      if (verNum(S.sv) < verNum(MIN_SCRIPT)) S.red.viejo = true; else S.red.viejo = false;
      S.red.ok = true; S.red.error = null; S.red.ultimo = Date.now(); this.fallos = 0;
    } catch (e) {
      S.red.ok = false; S.red.error = e;
      if (e.code === 'token') { accesoAnulado(); return; }
      this.fallos = Math.min(this.fallos + 1, 5);
    } finally {
      this.corriendo = false; S.red.enviando = false;
      guardarLocal();
      if (antes !== JSON.stringify([S.red.ok, this.pendientes()])) Nav.estado();
      if (this.otra) { this.otra = false; setTimeout(() => this.ya(), 30); } else this.programar();
    }
  }
};

function recibir(r) {
  if (r.sid && S.sid && r.sid !== S.sid) {
    /* El espacio del script es otro (se ha vuelto a crear): se descarta la copia local. */
    S.recs = {}; S.seq = 0; S.sid = r.sid; Sync.otra = true;
    anotar('sync', 'El espacio ha cambiado en el script: vuelvo a descargarlo todo.');
    return;
  }
  if (r.sid) S.sid = r.sid;
  let hay = false;
  (r.cambios || []).forEach(c => {
    S.recs[c.col] = S.recs[c.col] || {};
    const n = { f: Object.assign({}, c.f), t: Object.assign({}, c.t), rev: c.rev, por: c.por };
    const op = S.cola[c.col + '|' + c.id];
    if (op) Object.keys(op.f).forEach(k => { if ((op.t[k] || 0) >= (n.t[k] || 0)) { n.f[k] = op.f[k]; n.t[k] = op.t[k]; } });
    const viejo = S.recs[c.col][c.id];
    if (!viejo || JSON.stringify(viejo.f) !== JSON.stringify(n.f)) hay = true;
    S.recs[c.col][c.id] = n;
    if (c.col === 'personas' && c.id === (S.cfg && S.cfg.persona) && n.f._b) { accesoAnulado(); }
  });
  if (r.seq > S.seq) S.seq = r.seq;
  if (hay) Nav.refrescar();
}

function avisosGuardar(av) {
  if (av.some(x => x.indexOf('color:') === 0)) toast('Ese color ya lo tiene otra persona. Elige otro.');
  if (av.some(x => x.indexOf('permiso:') === 0)) toast('Hay un cambio que solo puede hacer quien administra el espacio.');
}

document.addEventListener('visibilitychange', () => { if (!document.hidden) Sync.ya(); else { clearTimeout(Sync.t); guardarLocal(true); } });
window.addEventListener('online', () => { Sync.fallos = 0; Sync.ya(); });
window.addEventListener('offline', () => { S.red.ok = false; S.red.error = ErrR('sinred', 'Sin conexión'); Nav.estado(); });
window.addEventListener('pagehide', () => guardarLocal(true));

/* ---------- archivos (fotos): se reducen en el móvil y se suben por trozos */
function blobA64(blob) {
  return new Promise((ok, ko) => { const r = new FileReader(); r.onload = () => ok(String(r.result).split(',')[1]); r.onerror = () => ko(r.error); r.readAsDataURL(blob); });
}

async function subirArchivo(blob, nombre, opts) {
  opts = opts || {};
  const b64 = await blobA64(blob);
  const T = opts.trozo || 262144;          /* múltiplo de 4: cada trozo son bytes enteros */
  const total = Math.max(1, Math.ceil(b64.length / T));
  const sid = uid().replace(/[^a-z0-9]/g, '');
  let r;
  for (let n = 0; n < total; n++) {
    let intento = 0;
    for (;;) {
      try {
        r = await api('archivo-subir', { sid: sid, n: n, total: total, nombre: nombre, tipo: blob.type || 'application/octet-stream', data: b64.slice(n * T, (n + 1) * T) }, { ms: 60000 });
        break;
      } catch (e) { if (++intento > 2 || e.code === 'token' || e.code === 'archivo') throw e; await espera(1500 * intento); }
    }
    if (opts.progreso) opts.progreso((n + 1) / total);
  }
  return { fid: r.fid, trozos: total, bytes: blob.size };
}

async function bajarArchivo(fid, opts) {
  opts = opts || {};
  const partes = [];
  let desde = 0, total = 1, tipo = '';
  while (desde < total) {
    const r = await api('archivo-leer', { fid: fid, desde: desde, largo: opts.largo || 1572864 }, { ms: 60000 });
    const bin = atob(r.data), u = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
    partes.push(u); desde += u.length; total = r.total; tipo = r.tipo;
    if (!u.length) break;
  }
  return new Blob(partes, { type: tipo });
}

const bajando = {};
function imagen(fid) {
  if (!fid) return null;
  if (S.imgs[fid]) return S.imgs[fid];
  if (!bajando[fid]) {
    bajando[fid] = (async () => {
      try {
        let d = await DB.get('img:' + fid);
        if (!d) {
          const b = await bajarArchivo(fid);
          d = await new Promise(ok => { const r = new FileReader(); r.onload = () => ok(r.result); r.readAsDataURL(b); });
          DB.set('img:' + fid, d);
        }
        S.imgs[fid] = d;
        Nav.refrescar();
      } catch (e) { anotar('foto', e); setTimeout(() => { delete bajando[fid]; }, 30000); }
    })();
  }
  return null;
}

/* Reduce una imagen en el móvil: lado mayor como mucho «max» píxeles. */
function cargarImagen(file) {
  return new Promise((ok, ko) => {
    const url = URL.createObjectURL(file), img = new Image();
    img.onload = () => ok({ img: img, url: url });
    img.onerror = () => { URL.revokeObjectURL(url); ko(new Error('No puedo abrir esa imagen.')); };
    img.src = url;
  });
}
async function reducir(file, max, calidad) {
  const { img, url } = await cargarImagen(file);
  const k = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
  const c = document.createElement('canvas');
  c.width = Math.round(img.naturalWidth * k); c.height = Math.round(img.naturalHeight * k);
  c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
  URL.revokeObjectURL(url);
  return new Promise(ok => c.toBlob(ok, 'image/jpeg', calidad || 0.85));
}

/* ---- 03_ui.js ---- */
/* ============================ PIEZAS DE INTERFAZ ============================ */
function ic(id, s, ci, color) {
  const o = ICONOS[id];
  if (!o) return '';
  const bolas = o[1].map(b => '<circle cx="' + b[0] + '" cy="' + b[1] + '" r="2.5" fill="' + (b[2] === 'c' ? COL[(ci || 0) % 8] : 'currentColor') + '" stroke="none"/>').join('');
  return '<i class="ic" style="width:' + (s || 24) + 'px;height:' + (s || 24) + 'px' + (color ? ';color:' + color : '') + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + o[0] + bolas + '</svg></i>';
}
const ilu = id => '<div class="ill-in">' + (ILUS[id] || '') + '</div>';
const tick = s => '<svg width="' + (s || 16) + '" height="' + (s || 16) + '" viewBox="0 0 16 16" fill="none" stroke="#FFFDF7" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5l3.2 3.2L13 4.8"/></svg>';
const dot = (c, s) => '<span class="dot" style="background:' + c + ';width:' + (s || 12) + 'px;height:' + (s || 12) + 'px"></span>';
const chev = '<span class="chev">' + ic('atras', 18) + '</span>';
const AVSVG = '<svg viewBox="0 0 48 48"><circle cx="24" cy="19" r="8" fill="#FFFDF7"/><path d="M8 48c0-10 7-16 16-16s16 6 16 16z" fill="#FFFDF7"/></svg>';

/* Avatar: foto con aro del color de la persona, o busto blanco sobre su color. */
function av(p, s) {
  s = s || 44;
  const c = (p && p.color) || '#9FB0B8';
  const img = p && p.foto ? imagen(p.foto) : null;
  if (img) return '<span class="av foto" style="--c:' + c + ';--aro:' + Math.max(3, Math.round(s * 0.09)) + 'px;width:' + s + 'px;height:' + s + 'px"><b style="background-image:url(\'' + img + '\')"></b></span>';
  return '<span class="av" style="--c:' + c + ';width:' + s + 'px;height:' + s + 'px">' + AVSVG + '</span>';
}
const tope = (t, der) => '<div class="top"><button class="bk" data-a="atras" aria-label="Atrás">' + ic('atras', 26) + '</button><b>' + esc(t) + '</b><span class="rt">' + (der || '') + '</span></div>';
const head = (t, sub, der) => '<div class="hd"><div><h1>' + esc(t) + '</h1>' + (sub ? '<p>' + sub + '</p>' : '') + '</div>' + (der || '') + '</div>';
const sq = (icono, ci, sm) => '<span class="sq' + (sm === false ? '' : ' sm') + '" style="background:' + COL[ci] + '22">' + ic(icono, sm === false ? 30 : 26, ci) + '</span>';
const btn = (t, a, cls, extra) => '<button class="btn ' + (cls || 'pri') + '" data-a="' + a + '"' + (extra || '') + '>' + t + '</button>';

/* ---------- navegación entre pantallas */
const P = {};      /* definición de cada pantalla */
const ACC = {};    /* acciones de los botones (data-a) */
const RAICES = [['inicio', 'inicio', 'Inicio', 0], ['compra', 'modulo-compra', 'Compra', 2], ['mas', 'menu', 'Más', 6]];

const Nav = {
  pila: [],
  actual() { return this.pila[this.pila.length - 1]; },
  crear(id, params) {
    const d = P[id];
    const el = document.createElement('div');
    el.className = 'pg ' + (d.raiz ? 'raiz' : 'sub') + (d.clase ? ' ' + d.clase : '');
    el.dataset.p = id;
    const e = { id: id, params: params || {}, el: el, vistos: {} };
    el.innerHTML = '<div class="pgc">' + this.contenido(e) + '</div>' + (d.fijo ? d.fijo(e.params, e) : '');
    $('#app').appendChild(el);
    if (d.montar) try { d.montar(el, e.params, e); } catch (x) { anotar('montar ' + id, x); }
    return e;
  },
  contenido(e) {
    try { return P[e.id].html(e.params, e); } catch (x) { anotar('pintar ' + e.id, x); return '<div class="aviso mal">' + ic('error', 22, 0) + '<span>No he podido pintar esta pantalla: ' + esc(x.message) + '</span></div>'; }
  },
  /* Cambiar de sección (barra de abajo): fundido suave. */
  raiz(id, params) {
    const viejas = this.pila.slice();
    const e = this.crear(id, params);
    e.el.classList.add('entra-f');
    this.pila = [e];
    requestAnimationFrame(() => requestAnimationFrame(() => e.el.classList.remove('entra-f')));
    viejas.forEach(v => { v.el.style.opacity = '0'; setTimeout(() => v.el.remove(), 330); });
    this.barra();
    Sync.programar();
  },
  /* Abrir una pantalla encima: entra desde la derecha. */
  ir(id, params) {
    const ant = this.actual();
    const e = this.crear(id, params);
    e.el.classList.add('entra-d');
    this.pila.push(e);
    requestAnimationFrame(() => requestAnimationFrame(() => { e.el.classList.remove('entra-d'); if (ant) ant.el.classList.add('sale-i'); }));
    this.barra();
    Sync.programar();
    return e;
  },
  atras(n) {
    n = n || 1;
    if (this.pila.length <= 1) return;
    for (let i = 0; i < n && this.pila.length > 1; i++) {
      const e = this.pila.pop();
      e.el.classList.add('entra-d');
      setTimeout(() => e.el.remove(), 340);
      if (P[e.id].alSalir) try { P[e.id].alSalir(e); } catch (x) { }
    }
    const a = this.actual();
    a.el.classList.remove('sale-i');
    this.refrescar(true);
    this.barra();
    Sync.programar();
  },
  /* Vuelve a pintar la pantalla de arriba conservando el desplazamiento. No pinta si se está escribiendo. */
  refrescar(forzar) {
    const e = this.actual();
    if (!e || (P[e.id].fija && !forzar)) return;
    const c = $('.pgc', e.el);
    const ae = document.activeElement;
    if (!forzar && ae && e.el.contains(ae) && /INPUT|TEXTAREA/.test(ae.tagName) && c.contains(ae)) { e.sucio = true; return; }
    const y = c.scrollTop;
    c.innerHTML = this.contenido(e);
    c.scrollTop = y;
    if (P[e.id].tras) try { P[e.id].tras(e.el, e.params, e); } catch (x) { anotar('tras ' + e.id, x); }
    this.estado();
    this.barra();
  },
  estado() {
    const e = this.actual();
    if (!e) return;
    const b = $('[data-r="banda"]', e.el);
    if (b) b.innerHTML = banda();
  },
  barra() {
    let n = $('#nav');
    const e = this.actual();
    const ver = S.cfg && e && P[e.id].raiz;
    if (!ver) { if (n) n.classList.add('oculto'); return; }
    if (!n) { n = document.createElement('nav'); n.id = 'nav'; n.className = 'nav'; document.body.appendChild(n); }
    n.classList.remove('oculto');
    const raiz = this.pila[0] && this.pila[0].id;
    n.innerHTML = RAICES.map(x => '<a data-a="raiz" data-id="' + x[0] + '" class="' + (x[0] === raiz ? 'on' : '') + '">' + ic(x[1], 26, x[3]) + '<span>' + x[2] + '</span></a>').join('');
  }
};

/* Aviso de conexión arriba de las pantallas principales. */
function banda() {
  const n = Sync.pendientes();
  if (S.red.viejo) return '<div class="banda">' + ic('aviso', 20, 1) + '<span>El script está en la versión ' + esc(S.sv) + ' y esta app necesita la ' + MIN_SCRIPT + '. Actualízalo.</span></div>';
  if (!S.red.ok && S.red.error && S.red.error.code === 'sinred') return '<div class="banda">' + ic('sin-conexion', 20, 7) + '<span>Sin conexión. ' + (n ? 'Se guardará al volver.' : 'Enseño lo último descargado.') + '</span></div>';
  if (!S.red.ok && S.red.error) return '<div class="banda" data-a="ir" data-id="sincronizacion">' + ic('error', 20, 0) + '<span>No se ha podido sincronizar. ' + (n ? n + ' cambio' + (n > 1 ? 's' : '') + ' esperando.' : '') + '</span></div>';
  return '';
}

/* ---------- toques: acciones, pulsación larga */
document.addEventListener('click', ev => {
  const el = ev.target.closest('[data-a]');
  if (!el || el.disabled) return;
  if (LP.cancelarClick) { LP.cancelarClick = false; ev.preventDefault(); return; }
  const f = ACC[el.dataset.a];
  if (!f) return;
  ev.preventDefault();
  try { const r = f(el, ev); if (r && r.catch) r.catch(e => { anotar(el.dataset.a, e); toast(e.message || 'Algo ha fallado'); }); }
  catch (e) { anotar(el.dataset.a, e); toast(e.message || 'Algo ha fallado'); }
});

const LP = { t: null, x: 0, y: 0, el: null, cancelarClick: false };
document.addEventListener('pointerdown', ev => {
  const el = ev.target.closest('[data-lp]');
  if (!el) return;
  LP.el = el; LP.x = ev.clientX; LP.y = ev.clientY;
  clearTimeout(LP.t);
  LP.t = setTimeout(() => {
    if (!LP.el) return;
    LP.cancelarClick = true;
    setTimeout(() => { LP.cancelarClick = false; }, 700);
    const f = ACC[LP.el.dataset.lp];
    if (f) f(LP.el);
    LP.el = null;
  }, 480);
});
const lpFuera = () => { clearTimeout(LP.t); LP.el = null; };
document.addEventListener('pointermove', ev => { if (LP.el && Math.hypot(ev.clientX - LP.x, ev.clientY - LP.y) > 10) lpFuera(); });
document.addEventListener('pointerup', lpFuera);
document.addEventListener('pointercancel', lpFuera);
document.addEventListener('contextmenu', ev => { if (ev.target.closest('[data-lp]')) ev.preventDefault(); });
/* Sin zoom con dos dedos (Safari ignora user-scalable en algunos casos). */
document.addEventListener('gesturestart', ev => { if (!ev.target.closest('.escena')) ev.preventDefault(); });

ACC.atras = () => Nav.atras();
ACC.ir = el => Nav.ir(el.dataset.id, Object.assign({}, el.dataset));
ACC.raiz = el => { const e = Nav.actual(); if (Nav.pila.length === 1 && e.id === el.dataset.id) { $('.pgc', e.el).scrollTo({ top: 0, behavior: 'smooth' }); return; } Nav.raiz(el.dataset.id); };

/* ---------- hojas que suben desde abajo */
let hojaAbierta = null;
function abrirHoja(html, opts) {
  opts = opts || {};
  cerrarHoja(true);
  const capa = $('#capa');
  const velo = document.createElement('div'); velo.className = 'velo';
  const h = document.createElement('div'); h.className = 'hoja';
  h.innerHTML = '<i class="grab"></i><div class="hc">' + html + '</div>';
  capa.appendChild(velo); capa.appendChild(h);
  hojaAbierta = { h: h, velo: velo, alCerrar: opts.alCerrar };
  velo.addEventListener('click', () => cerrarHoja());
  /* Arrastrar hacia abajo para cerrar, solo si el contenido está arriba del todo. */
  let y0 = null, dy = 0;
  h.addEventListener('touchstart', e => { const hc = $('.hc', h); if (hc.scrollTop > 0 || e.target.closest('input,textarea')) { y0 = null; return; } y0 = e.touches[0].clientY; dy = 0; h.style.transition = 'none'; }, { passive: true });
  h.addEventListener('touchmove', e => { if (y0 === null) return; dy = Math.max(0, e.touches[0].clientY - y0); if (dy > 0) h.style.transform = 'translateY(' + dy + 'px)'; }, { passive: true });
  h.addEventListener('touchend', () => { if (y0 === null) return; h.style.transition = ''; h.style.transform = ''; if (dy > 90) cerrarHoja(); y0 = null; });
  requestAnimationFrame(() => requestAnimationFrame(() => { velo.classList.add('ver'); h.classList.add('ver'); }));
  if (opts.montar) opts.montar(h);
  return h;
}
function cerrarHoja(rapido) {
  const o = hojaAbierta;
  if (!o) return;
  hojaAbierta = null;
  o.h.classList.remove('ver'); o.velo.classList.remove('ver');
  setTimeout(() => { o.h.remove(); o.velo.remove(); }, rapido ? 0 : 340);
  if (o.alCerrar) o.alCerrar();
}
ACC.cerrarHoja = () => cerrarHoja();

/* Pregunta con dos botones (nunca ventanas del navegador). */
function preguntar(titulo, texto, si, peligro) {
  return new Promise(ok => {
    let r = false;
    abrirHoja('<h3>' + esc(titulo) + '</h3>' + (texto ? '<p class="texto" style="margin-bottom:18px">' + texto + '</p>' : '') +
      '<div class="list"><button class="btn ' + (peligro ? 'pri' : 'pri') + '" data-a="hojaSi" style="' + (peligro ? 'background:#C8402B;color:#fff' : '') + '">' + esc(si) + '</button><button class="btn sec" data-a="cerrarHoja">Cancelar</button></div>',
      { alCerrar: () => ok(r) });
    ACC.hojaSi = () => { r = true; cerrarHoja(); };
  });
}

/* ---------- avisos abajo, con «Deshacer» */
let toastT = null;
function toast(msg, accion, fn) {
  const capa = $('#capa');
  $$('.toast', capa).forEach(t => { t.classList.remove('ver'); setTimeout(() => t.remove(), 340); });
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = '<span>' + esc(msg) + '</span>' + (accion ? '<button>' + esc(accion) + '</button>' : '');
  if (!$('#nav') || $('#nav').classList.contains('oculto') || (Nav.actual() && !P[Nav.actual().id].raiz)) t.style.bottom = 'calc(var(--sb) + 18px)';
  capa.appendChild(t);
  if (accion) $('button', t).addEventListener('click', () => { fn(); t.classList.remove('ver'); setTimeout(() => t.remove(), 340); });
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('ver')));
  clearTimeout(toastT);
  toastT = setTimeout(() => { t.classList.remove('ver'); setTimeout(() => t.remove(), 340); }, accion ? 5000 : 3200);
}

/* Botón con ruedita mientras espera. */
async function conEspera(el, f) {
  if (el.classList.contains('cargando')) return;
  el.classList.add('cargando'); el.disabled = true;
  try { return await f(); } finally { el.classList.remove('cargando'); el.disabled = false; }
}
function mostrarError(el, msg) {
  if (!el) return toast(msg);
  el.innerHTML = msg ? '<div class="aviso mal">' + ic('error', 22, 0) + '<span>' + esc(msg) + '</span></div>' : '';
}

/* Copiar y pegar */
async function copiar(txt) {
  try { await navigator.clipboard.writeText(txt); return true; } catch (e) {
    const ta = document.createElement('textarea'); ta.value = txt; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
    let ok = false; try { ok = document.execCommand('copy'); } catch (x) { } ta.remove(); return ok;
  }
}
async function pegarEn(sel) {
  const el = $(sel, Nav.actual().el);
  try { const t = await navigator.clipboard.readText(); if (t) { el.value = t.trim(); el.dispatchEvent(new Event('input')); } }
  catch (e) { el.focus(); toast('Mantén el dedo en el recuadro y toca «Pegar».'); }
}

/* Tema: claro, oscuro o automático. */
function aplicarTema() {
  let t = 'auto';
  try { t = localStorage.getItem('ronda-tema') || 'auto'; } catch (e) { }
  let o = t === 'oscuro';
  try { if (t === 'auto') o = matchMedia('(prefers-color-scheme: dark)').matches; } catch (e) { }
  document.documentElement.dataset.tema = o ? 'oscuro' : 'claro';
  const m = $('#tc'); if (m) m.content = o ? '#1B262C' : '#FFFDF7';
}
try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', aplicarTema); } catch (e) { }

/* ============================ LOGO Y ARRANQUE ============================ */
const cl = (x, a, b) => Math.min(b === undefined ? 1 : b, Math.max(a || 0, x));
const oB = x => { const c1 = 1.9, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); };
const oC = x => 1 - Math.pow(1 - x, 3);
const io = x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
const T0 = 3.0, TM = 0.95;

/* Coloca «r_nda» y calcula dónde va el anillo que hace de «o». */
function medirLogo(cont, topPx, fs) {
  const cv = document.createElement('canvas').getContext('2d');
  cv.font = '800 ' + fs + 'px Nunito';
  const mo = cv.measureText('o');
  const oW = mo.actualBoundingBoxLeft + mo.actualBoundingBoxRight, oH = mo.actualBoundingBoxAscent + mo.actualBoundingBoxDescent;
  const sb = (mo.width - oW) / 2, D = oH * 1.15, padL = sb + 0.06 * fs, padR = sb + 0.01 * fs;
  cont.innerHTML = '<div class="logo" style="top:' + topPx + 'px;font-size:' + fs + 'px"><span class="w" style="position:relative;display:inline-block"><span class="l">r</span><span class="ph" style="display:inline-block;height:1px;width:' + (padL + D + padR) + 'px"></span><i class="bl" style="display:inline-block;width:0;height:0"></i><span class="l">n</span><span class="l">d</span><span class="l">a</span></span></div><svg class="anillo"></svg>';
  const cr = cont.getBoundingClientRect(), p = $('.ph', cont).getBoundingClientRect(), bl = $('.bl', cont).getBoundingClientRect();
  const FAC = (37.5 + 10.4) * 2 / 100;
  return { cx: p.left - cr.left + padL + D / 2, cy: bl.bottom - cr.top - (mo.actualBoundingBoxAscent - mo.actualBoundingBoxDescent) / 2, S: D / FAC };
}
function dibujarAnillo(svg, t, T, START) {
  const m = io(cl((t - T0) / TM));
  const cx = START.cx + (T.cx - START.cx) * m, cy = START.cy + (T.cy - START.cy) * m, Sx = START.S + (T.S - START.S) * m, k = Sx / 100;
  let o = '';
  const rot = -110 * (1 - oC(cl((t - 0.2) / 1.6)));
  for (let i = 0; i < 8; i++) {
    const t0 = 0.35 + i * 0.12, p = cl((t - t0) / 0.55), e = oB(p), R = 37.5 * e, a = (i * 45 + rot) * Math.PI / 180;
    let s = cl(p * 2.2) * (0.55 + 0.45 * Math.min(1.25, e));
    const wv = cl((t - 1.9 - i * 0.07) / 0.5); s *= 1 + 0.16 * Math.sin(wv * Math.PI) * (1 - m);
    const q = cl((t - t0 - 0.28) / 0.6);
    if (q > 0 && q < 1 && m === 0) o += '<circle cx="' + (37.5 * Math.sin(a)).toFixed(2) + '" cy="' + (-37.5 * Math.cos(a)).toFixed(2) + '" r="' + (10.4 + 16 * oC(q)).toFixed(2) + '" fill="' + COL[i] + '" opacity="' + (0.28 * (1 - q)).toFixed(3) + '"/>';
    if (p > 0) o += '<circle cx="' + (R * Math.sin(a)).toFixed(2) + '" cy="' + (-R * Math.cos(a)).toFixed(2) + '" r="' + (10.4 * Math.max(s, 0)).toFixed(3) + '" fill="' + COL[i] + '"/>';
  }
  svg.innerHTML = '<g transform="translate(' + cx.toFixed(2) + ' ' + cy.toFixed(2) + ') scale(' + k.toFixed(4) + ')">' + o + '</g>';
}
/* Logo quieto (bienvenida, Acerca de). */
function logoQuieto(cont, topPx, fs) {
  const T = medirLogo(cont, topPx, fs);
  const svg = $('svg.anillo', cont);
  svg.setAttribute('width', cont.clientWidth); svg.setAttribute('height', cont.clientHeight);
  svg.style.cssText = 'position:absolute;left:0;top:0;overflow:visible';
  dibujarAnillo(svg, 10, T, T);
}

/* Animación al abrir: «rápida» si ya hay espacio, «bienvenida» (a su ritmo) la primera vez. */
function animarArranque(modo) {
  return new Promise(async ok => {
    const ar = $('#arranque');
    try { await Promise.race([document.fonts.load('800 88px Nunito'), espera(1500)]); } catch (e) { }
    const W = innerWidth, H = innerHeight;
    const fs = Math.round(88 * Math.min(1, W / 390));
    const topPx = Math.round(H * (modo === 'b' ? 318 : 392) / 844);
    const T = medirLogo(ar, topPx, fs);
    const svg = $('svg.anillo', ar);
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    const START = { cx: W / 2, cy: H * 422 / 844 + (modo === 'b' ? 0 : 0), S: 200 * Math.min(1, W / 390) };
    const letras = $$('.l', ar);
    const K = modo === 'b' ? 1 : 2;
    const FIN = T0 + 0.3 + 3 * 0.1 + 0.55 + 0.25;
    if (REDUCIR) { dibujarAnillo(svg, 10, T, T); letras.forEach(l => { l.style.opacity = 1; }); await espera(500); return ok(); }
    const t0 = performance.now();
    const paso = now => {
      const t = (now - t0) / 1000 * K;
      dibujarAnillo(svg, t, T, START);
      letras.forEach((l, i) => { const p = oC(cl((t - (T0 + 0.3 + i * 0.1)) / 0.55)); l.style.opacity = p; l.style.transform = 'translateY(' + (18 * (1 - p)) + 'px)'; });
      if (t < FIN) requestAnimationFrame(paso); else ok();
    };
    requestAnimationFrame(paso);
  });
}
function quitarArranque() {
  const ar = $('#arranque');
  ar.classList.add('fuera');
  setTimeout(() => ar.remove(), 400);
}

/* Teclado del iPhone: las pantallas terminan encima del teclado, para que la barra de añadir y los botones se vean. */
(function () {
  const vv = window.visualViewport;
  if (!vv) return;
  const f = () => {
    const kb = Math.max(0, Math.round(innerHeight - vv.height - vv.offsetTop));
    const ae = document.activeElement;
    const escribiendo = ae && /INPUT|TEXTAREA/.test(ae.tagName) && !/range|file/.test(ae.type);
    document.documentElement.style.setProperty('--kb', kb + 'px');
    document.documentElement.classList.toggle('teclado', escribiendo && kb > 80);
  };
  vv.addEventListener('resize', f); vv.addEventListener('scroll', f);
  document.addEventListener('focusin', () => setTimeout(f, 50));
  document.addEventListener('focusout', () => setTimeout(f, 50));
})();
const enIcono = () => { try { return navigator.standalone === true || matchMedia('(display-mode: standalone)').matches; } catch (e) { return false; } };

/* ---- 04_entrada.js ---- */
/* ============================ ENTRADA: crear o unirse ============================ */
const TIPOS = [
  ['hogar', 'hogar-espacio', 'Hogar', 'Casa, familia y todo lo de cada día', 0],
  ['pareja', 'pareja', 'Pareja', 'Dos personas, planes y gastos a medias', 1],
  ['familia', 'familia-extensa', 'Familia extensa', 'Abuelos, tíos, primos y quedadas', 2],
  ['cuidar', 'cuidar-a-alguien', 'Cuidar a alguien', 'Citas, medicación y turnos', 7],
  ['piso', 'piso-compartido', 'Piso compartido', 'Turnos, compra y cuentas claras', 4],
  ['solo', 'solo-yo-espacio', 'Solo yo', 'Tu organización personal', 6]
];

const PORTADA = { hogar: 'hogar-portada', pareja: 'pareja-portada', familia: 'familia-extensa-portada', cuidar: 'cuidar-a-alguien-portada', piso: 'piso-compartido-portada', solo: 'solo-yo-portada' };

/* ---------- 01 Bienvenida */
P.bienvenida = {
  fija: true,
  html: () => '',
  fijo: () => (enIcono() ? '' : '<div class="aviso instalar">' + ic('informacion', 22, 5) + '<span>Antes de empezar, instálala: toca Compartir y «Añadir a pantalla de inicio». Después ábrela desde el icono.</span></div>') +
    '<div class="bv" data-r="logo"></div>' +
    '<p class="bv-sub" data-r="sub">Todo lo de casa, en el mismo sitio y con los tuyos.</p>' +
    '<div class="dots" data-r="dots" style="position:absolute;left:0;right:0"><i class="a"></i><i></i><i></i><i></i></div>' +
    '<div class="btns" data-r="btns" style="bottom:calc(28px + var(--sb))">' + btn('Empezar', 'empezar') + btn('Ya tengo un código', 'tengoCodigo', 'sec') + '</div>',
  montar(el, p) {
    const H = innerHeight, W = innerWidth;
    const fs = Math.round(88 * Math.min(1, W / 390));
    logoQuieto($('[data-r="logo"]', el), Math.round(H * 318 / 844), fs);
    $('[data-r="sub"]', el).style.top = Math.round(H * 446 / 844) + 'px';
    $('[data-r="dots"]', el).style.top = Math.round(H * 520 / 844) + 'px';
    if (p.animar) ['sub', 'dots', 'btns'].forEach((r, i) => { const x = $('[data-r="' + r + '"]', el); x.classList.add('sube'); x.style.animationDelay = (i * 0.2) + 's'; });
  }
};
ACC.empezar = () => { S.alta = { modo: 'crear', tipo: 'hogar', nombreEsp: '', colorEsp: COL[4] }; Nav.ir('tipo'); };
ACC.tengoCodigo = () => { S.alta = { modo: 'unirse' }; Nav.ir('unirse'); };

/* ---------- 02 Tipo de espacio */
P.tipo = {
  clase: 'con-boton',
  html: () => tope('') + head('Crea tu espacio', 'Elige cómo lo vas a usar') + '<div class="list">' + TIPOS.map(t =>
    '<button class="row card' + (S.alta.tipo === t[0] ? ' sel' : '') + '" data-a="elegirTipo" data-id="' + t[0] + '">' + sq(t[1], t[4], false) +
    '<div class="f"><b>' + t[2] + '</b><small>' + t[3] + '</small></div><span class="rad' + (S.alta.tipo === t[0] ? ' on' : '') + '"></span></button>').join('') + '</div>',
  fijo: () => '<div class="btns">' + btn('Continuar', 'irCrear') + '</div>'
};
ACC.elegirTipo = el => { S.alta.tipo = el.dataset.id; Nav.refrescar(); };
ACC.irCrear = () => {
  const t = TIPOS.find(x => x[0] === S.alta.tipo);
  if (!S.alta.nombreEsp) S.alta.nombreEsp = { hogar: 'Nuestra casa', pareja: 'Nosotros', familia: 'Familia', cuidar: 'Cuidados', piso: 'El piso', solo: 'Lo mío' }[t[0]];
  Nav.ir('crear');
};

/* ---------- 03 Nombre y color del espacio */
P.crear = {
  clase: 'con-boton', fija: true,
  html: () => tope('Nuevo espacio') + '<div class="ill mid">' + ilu(PORTADA[S.alta.tipo] || 'hogar-portada') + '</div>' +
    '<label class="fld"><small>Nombre del espacio</small><input id="nEsp" maxlength="40" value="' + esc(S.alta.nombreEsp) + '" autocomplete="off"></label>' +
    '<p class="lab2">Color del espacio</p><div class="cols">' + COL.map((c, i) => '<button class="cdot' + (S.alta.colorEsp === c ? ' on' : '') + '" style="background:' + c + '" data-a="colorEsp" data-c="' + c + '" aria-label="' + NOMCOL[i] + '"></button>').join('') + '</div>' +
    '<p class="lab2">Tipo</p><div class="chips">' + TIPOS.map(t => '<button class="chip' + (S.alta.tipo === t[0] ? ' on' : '') + '" data-a="tipoChip" data-id="' + t[0] + '">' + t[2] + '</button>').join('') + '</div>',
  fijo: () => '<div class="btns">' + btn('Continuar', 'irConectar') + '</div>'
};
ACC.colorEsp = el => { S.alta.colorEsp = el.dataset.c; $$('[data-a="colorEsp"]', Nav.actual().el).forEach(b => b.classList.toggle('on', b === el)); };
ACC.tipoChip = el => { S.alta.tipo = el.dataset.id; const n = $('#nEsp'); if (n) S.alta.nombreEsp = n.value; Nav.refrescar(true); };
ACC.irConectar = () => {
  const n = $('#nEsp').value.trim();
  if (!n) { $('#nEsp').focus(); return toast('Ponle un nombre al espacio.'); }
  S.alta.nombreEsp = n;
  Nav.ir('conectar');
};

/* ---------- Conectar con Google (solo quien crea el espacio) */
P.conectar = {
  clase: 'con-boton', fija: true,
  html: () => tope('Conectar con tu Google') +
    '<p class="texto">Ronda guarda todo en tu Google, en la hoja donde has pegado el script. Pega aquí lo que te ha dado.</p>' +
    '<div class="fld fldr"><div class="f"><small>Dirección del script</small><textarea id="cUrl" rows="3" placeholder="https://script.google.com/macros/s/…/exec" autocomplete="off" autocapitalize="off" spellcheck="false">' + esc(S.alta.url || '') + '</textarea></div><button class="mini" data-a="pegar" data-sel="#cUrl">Pegar</button></div>' +
    '<div class="fld fldr"><div class="f"><small>Código de alta</small><input id="cCod" maxlength="9" placeholder="XXXX-XXXX" autocomplete="off" autocapitalize="characters" spellcheck="false" value="' + esc(S.alta.codigo || '') + '"></div><button class="mini" data-a="pegar" data-sel="#cCod">Pegar</button></div>' +
    '<div class="aviso">' + ic('informacion', 22, 5) + '<span>La dirección acaba en <b>/exec</b>: está en Implementar › Gestionar implementaciones. El código de alta sale en el registro al ejecutar «configurar».</span></div>' +
    '<div data-r="err"></div>',
  fijo: () => '<div class="btns">' + btn('Comprobar y seguir', 'comprobarConexion') + '</div>'
};
ACC.pegar = el => pegarEn(el.dataset.sel);
ACC.comprobarConexion = el => conEspera(el, async () => {
  const err = $('[data-r="err"]', Nav.actual().el);
  mostrarError(err, '');
  const u = urlScript($('#cUrl').value);
  if (u.error) return mostrarError(err, u.error);
  const cod = $('#cCod').value.toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (cod.length !== 8) return mostrarError(err, 'El código de alta tiene 8 letras y números (por ejemplo 4K7P-2Q9M).');
  S.alta.url = u.url; S.alta.codigo = cod;
  try {
    const h = await api('hola', {}, { url: u.url, sinToken: true });
    if (!h.configurado) return mostrarError(err, 'El script responde, pero todavía no está configurado. En el editor, ejecuta «configurar».');
    if (h.hayAdmin) return mostrarError(err, 'Este script ya tiene un espacio con administración. Para entrar, pide una invitación desde la app (Personas › Invitar).');
    S.alta.inv = await api('invitacion-ver', { codigo: cod }, { url: u.url, sinToken: true });
    if (!S.alta.inv.alta) return mostrarError(err, 'Ese código es una invitación, no un código de alta. Usa «Ya tengo un código» en la primera pantalla.');
    Nav.ir('perfil');
  } catch (e) { mostrarError(err, e.message); }
});

/* ---------- 04 Unirse con código */
P.unirse = {
  clase: 'con-boton', fija: true,
  html: () => tope('Tengo un código') + '<div class="ill mid">' + ilu('invita-a-los-tuyos') + '</div>' +
    '<p class="mu" style="margin:6px 4px 8px">Pega el código que te ha pasado la otra persona. Empieza por RONDA1.</p>' +
    '<div class="fld fldr"><div class="f"><small>Código de invitación</small><textarea id="uCod" rows="4" placeholder="RONDA1-…" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea></div><button class="mini" data-a="pegar" data-sel="#uCod">Pegar</button></div>' +
    '<div class="aviso">' + ic('informacion', 22, 5) + '<span>Pégalo aquí, dentro de Ronda. Si tocas el código en un mensaje se abriría Safari, que guarda sus datos aparte de la app del icono.</span></div>' +
    '<div data-r="err"></div>',
  fijo: () => '<div class="btns">' + btn('Unirme', 'comprobarInvitacion') + '</div>'
};
ACC.comprobarInvitacion = el => conEspera(el, async () => {
  const err = $('[data-r="err"]', Nav.actual().el);
  mostrarError(err, '');
  const k = leerPaquete($('#uCod').value);
  if (k.error) return mostrarError(err, k.error);
  S.alta = { modo: 'unirse', url: k.url, codigo: k.codigo };
  try {
    const inv = await api('invitacion-ver', { codigo: k.codigo }, { url: k.url, sinToken: true });
    S.alta.inv = inv;
    if (inv.persona) Nav.ir('reconectar');
    else Nav.ir('perfil');
  } catch (e) { mostrarError(err, e.message); }
});

/* Invitación para alguien que ya estaba (móvil nuevo, o Safari frente al icono). */
P.reconectar = {
  clase: 'con-boton', fija: true,
  html: () => { const p = S.alta.inv.persona; return tope('Volver a conectar') + '<div class="bigav" style="margin-top:30px">' + av(p, 140) + '</div><h2 class="lg">Hola, ' + esc(p.nombre) + '</h2><p class="mu">Vas a conectar este móvil a «' + esc((S.alta.inv.espacio || {}).nombre || 'el espacio') + '» con tu perfil de siempre.</p><div data-r="err"></div>'; },
  fijo: () => '<div class="btns">' + btn('Conectar', 'unirseYa') + '</div>'
};

/* ---------- 05 Tu perfil */
P.perfil = {
  clase: 'con-boton', fija: true,
  html: () => {
    const usados = ((S.alta.inv && S.alta.inv.personas) || []).map(p => String(p.color).toUpperCase());
    if (!S.alta.color || usados.indexOf(S.alta.color) >= 0) S.alta.color = COL.find(c => usados.indexOf(c) < 0) || COL[0];
    const pv = { color: S.alta.color };
    const foto = S.alta.fotoUrl ? '<span class="av foto" style="--c:' + S.alta.color + ';--aro:13px;width:150px;height:150px"><b style="background-image:url(\'' + S.alta.fotoUrl + '\')"></b></span>' : av(pv, 150);
    return head('Cuéntanos quién eres', 'Así te verán los tuyos') +
      '<button class="bigav" data-a="fotoAlta" style="border:0;background:none;width:100%" data-r="foto">' + foto + '</button><p class="cap">Toca para poner tu foto</p>' +
      '<label class="fld"><small>Nombre</small><input id="pNom" maxlength="30" value="' + esc(S.alta.nombre || '') + '" placeholder="Cómo te llaman" autocomplete="given-name"></label>' +
      '<p class="lab2">Tu color</p><div class="cols">' + COL.map((c, i) => '<button class="cdot' + (S.alta.color === c ? ' on' : '') + '" style="background:' + c + '" data-a="colorAlta" data-c="' + c + '"' + (usados.indexOf(c) >= 0 ? ' disabled' : '') + ' aria-label="' + NOMCOL[i] + '"></button>').join('') + '</div>' +
      '<p class="cap" data-r="nc" style="text-align:left;margin-top:12px">Tu color es el ' + nomColor(S.alta.color).toLowerCase() + '. Se usa en tu aro y en tus cosas.</p><div data-r="err"></div>';
  },
  fijo: () => '<div class="btns">' + btn('Continuar', 'unirseYa') + '</div>'
};
ACC.colorAlta = el => {
  S.alta.color = el.dataset.c;
  const e = Nav.actual().el;
  $$('[data-a="colorAlta"]', e).forEach(b => b.classList.toggle('on', b === el));
  $('[data-r="nc"]', e).textContent = 'Tu color es el ' + nomColor(S.alta.color).toLowerCase() + '. Se usa en tu aro y en tus cosas.';
  const a = $('[data-r="foto"] .av', e); if (a) a.style.setProperty('--c', S.alta.color);
};
ACC.fotoAlta = () => elegirFoto(!!S.alta.fotoBlob, S.alta.color).then(r => {
  if (r === 'quitar') { S.alta.fotoBlob = null; S.alta.fotoUrl = null; }
  else if (r) { S.alta.fotoBlob = r; S.alta.fotoUrl = URL.createObjectURL(r); }
  else return;
  const n = $('#pNom'); if (n) S.alta.nombre = n.value;
  Nav.refrescar(true);
});
ACC.unirseYa = el => conEspera(el, async () => {
  const pg = Nav.actual();
  const err = $('[data-r="err"]', pg.el);
  mostrarError(err, '');
  const a = S.alta, extra = { codigo: a.codigo };
  if (pg.id === 'perfil') {
    a.nombre = $('#pNom').value.trim();
    if (!a.nombre) { $('#pNom').focus(); return mostrarError(err, 'Escribe tu nombre.'); }
    extra.nombre = a.nombre; extra.color = a.color;
  }
  if (a.modo === 'crear') extra.espacio = { nombre: a.nombreEsp, tipo: a.tipo, color: a.colorEsp };
  try {
    const r = await api('unirse', extra, { url: a.url, sinToken: true });
    S.cfg = { url: a.url, token: r.token, persona: r.persona, rol: r.rol, alta: Date.now() };
    S.recs = {}; S.seq = 0; S.sid = r.sid || ''; S.cola = {};
    await DB.set('cfg', S.cfg);
    guardarLocal(true);
    try { await Sync.ya(); } catch (e) { }
    if (a.fotoBlob) subirMiFoto(a.fotoBlob).catch(e => toast('No he podido subir la foto: ' + e.message));
    const rol = r.rol;
    S.alta = null;
    Nav.pila.forEach(x => setTimeout(() => x.el.remove(), 400));
    Nav.pila = [];
    Nav.ir('onb', { paso: 0, rol: rol });
  } catch (e) {
    if (e.code === 'color') { a.inv = await api('invitacion-ver', { codigo: a.codigo }, { url: a.url, sinToken: true }).catch(() => a.inv); Nav.refrescar(true); }
    mostrarError($('[data-r="err"]', Nav.actual().el), e.message);
  }
});

/* ---------- 06-08 Presentación */
const ONB = [
  ['invita-a-los-tuyos', 'Invita a los tuyos', 'Cada persona entra con su propio código. Sin contraseñas.'],
  ['tus-datos-tuyos', 'Tus datos, tuyos', 'Todo se guarda en tu Google. Los documentos importantes irán cifrados en tu móvil, con tu código de 4 cifras.'],
  ['avisos-a-tiempo', 'Avisos a tiempo', 'Los recordatorios llegan a vuestro calendario de Google, con su alarma.']
];
P.onb = {
  fija: true, clase: 'con-boton',
  html: p => { const o = ONB[p.paso]; return '<div class="centro" style="padding-top:20px"><div class="ill big">' + ilu(o[0]) + '</div><h2 class="lg">' + o[1] + '</h2><p class="mu">' + o[2] + '</p><div class="dots">' + ONB.map((x, i) => '<i class="' + (i === p.paso ? 'a' : '') + '"></i>').join('') + '</div></div>'; },
  fijo: p => '<div class="btns">' + (p.paso < 2 ? btn('Siguiente', 'onbSig') + btn('Saltar', 'onbFin', 'sec')
    : (p.rol === 'admin' ? btn('Elegir el calendario', 'onbCal') + btn('Ahora no', 'onbFin', 'sec') : btn('Empezar', 'onbFin'))) + '</div>'
};
ACC.onbSig = () => { const p = Nav.actual().params; Nav.ir('onb', { paso: p.paso + 1, rol: p.rol }); };
ACC.onbFin = () => entrar();
ACC.onbCal = () => { entrar(); setTimeout(() => Nav.ir('avisos'), 380); };
function entrar() {
  const viejas = Nav.pila.slice();
  Nav.pila = [];
  Nav.raiz('inicio');
  viejas.forEach(v => setTimeout(() => v.el.remove(), 360));
}

/* ============================ FOTO: elegir y recortar ============================ */
function elegirFoto(tieneFoto, color) {
  return new Promise(ok => {
    let hecho = false;
    const fin = v => { if (!hecho) { hecho = true; ok(v); } };
    const h = abrirHoja('<h3>Tu foto</h3><div class="list">' +
      '<label class="row card">' + ic('camara', 26, 0) + '<b>Hacer una foto</b><input type="file" accept="image/*" capture="user" class="arch" data-r="cam"></label>' +
      '<label class="row card">' + ic('foto', 26, 5) + '<b>Elegir de la galería</b><input type="file" accept="image/*" class="arch" data-r="gal"></label>' +
      (tieneFoto ? '<button class="row card" data-a="quitarFotoH">' + ic('borrar', 26, 0) + '<b>Quitar foto</b></button>' : '') + '</div>', { alCerrar: () => setTimeout(() => fin(null), 50) });
    ACC.quitarFotoH = () => { fin('quitar'); cerrarHoja(); };
    $$('input[type=file]', h).forEach(inp => inp.addEventListener('change', async () => {
      const f = inp.files && inp.files[0];
      if (!f) return;
      hecho = true;
      cerrarHoja();
      try { ok(await recortar(f, color)); } catch (e) { toast(e.message); ok(null); }
    }));
  });
}

function recortar(file, color) {
  return new Promise(async (ok, ko) => {
    let im;
    try { im = await cargarImagen(file); } catch (e) { return ko(e); }
    const img = im.img;
    const d = document.createElement('div');
    d.className = 'recorte';
    d.innerHTML = '<div class="hd"><div><h1>Recorta tu foto</h1><p>Mueve y amplía con los dedos</p></div></div>' +
      '<div class="escena" style="--c:' + color + '"><img alt=""><div class="mask"></div><div class="aro"></div></div>' +
      '<div class="zoom">' + ic('foto', 20, 0, '#F4F8F2') + '<input type="range" min="1" max="4" step="0.01" value="1">' + ic('foto', 30, 0, '#F4F8F2') + '</div>' +
      '<p class="cap" style="color:#9FB0B8">Así se verá con tu aro ' + nomColor(color).toLowerCase() + '</p>' +
      '<div class="rbtns"><button class="btn pri" data-r="usar">Usar foto</button><button class="btn sec" data-r="cancelar">Cancelar</button></div>';
    document.body.appendChild(d);
    const esc_ = $('.escena', d), el = $('img', d), rango = $('input', d);
    el.src = im.url;
    const W = esc_.clientWidth, C = W * 0.76, c0 = W * 0.12;
    $('.mask', d).style.background = 'radial-gradient(circle at 50% 50%, transparent ' + (C / 2 - 1) + 'px, rgba(27,38,44,.78) ' + (C / 2) + 'px)';
    const w = img.naturalWidth, h = img.naturalHeight, smin = C / Math.min(w, h);
    let z = 1, x = c0 - (w * smin - C) / 2, y = c0 - (h * smin - C) / 2;
    const pon = () => {
      const s = smin * z;
      x = Math.min(c0, Math.max(c0 + C - w * s, x)); y = Math.min(c0, Math.max(c0 + C - h * s, y));
      el.style.transform = 'translate(' + x + 'px,' + y + 'px) scale(' + s + ')';
      el.style.width = w + 'px'; el.style.height = h + 'px';
    };
    const zoomEn = (nz, px, py) => { nz = Math.min(4, Math.max(1, nz)); const s0 = smin * z, s1 = smin * nz; x = px - (px - x) * s1 / s0; y = py - (py - y) * s1 / s0; z = nz; rango.value = z; pon(); };
    pon();
    rango.addEventListener('input', () => zoomEn(Number(rango.value), W / 2, W / 2));
    const ptr = {};
    let base = null;
    esc_.addEventListener('pointerdown', e => { esc_.setPointerCapture(e.pointerId); ptr[e.pointerId] = { x: e.clientX, y: e.clientY }; base = null; });
    esc_.addEventListener('pointermove', e => {
      if (!ptr[e.pointerId]) return;
      const ant = ptr[e.pointerId];
      const ids = Object.keys(ptr);
      if (ids.length === 1) { x += e.clientX - ant.x; y += e.clientY - ant.y; ptr[e.pointerId] = { x: e.clientX, y: e.clientY }; pon(); return; }
      ptr[e.pointerId] = { x: e.clientX, y: e.clientY };
      const a = ptr[ids[0]], b = ptr[ids[1]], r = esc_.getBoundingClientRect();
      const dist = Math.hypot(a.x - b.x, a.y - b.y), mx = (a.x + b.x) / 2 - r.left, my = (a.y + b.y) / 2 - r.top;
      if (!base) { base = { d: dist, z: z }; return; }
      zoomEn(base.z * dist / base.d, mx, my);
    });
    const suelta = e => { delete ptr[e.pointerId]; base = null; };
    esc_.addEventListener('pointerup', suelta); esc_.addEventListener('pointercancel', suelta);
    requestAnimationFrame(() => requestAnimationFrame(() => d.classList.add('ver')));
    const cerrar = v => { d.classList.remove('ver'); setTimeout(() => { d.remove(); URL.revokeObjectURL(im.url); }, 360); ok(v); };
    $('[data-r="cancelar"]', d).addEventListener('click', () => cerrar(null));
    $('[data-r="usar"]', d).addEventListener('click', () => {
      const s = smin * z, cv = document.createElement('canvas');
      cv.width = cv.height = 512;
      const g = cv.getContext('2d');
      g.fillStyle = '#FFFFFF'; g.fillRect(0, 0, 512, 512);
      g.drawImage(img, (c0 - x) / s, (c0 - y) / s, C / s, C / s, 0, 0, 512, 512);
      cv.toBlob(b => cerrar(b), 'image/jpeg', 0.86);
    });
  });
}

async function subirMiFoto(blob) {
  const r = await subirArchivo(blob, 'foto-' + S.cfg.persona + '.jpg');
  const d = await new Promise(ok => { const fr = new FileReader(); fr.onload = () => ok(fr.result); fr.readAsDataURL(blob); });
  S.imgs[r.fid] = d; DB.set('img:' + r.fid, d);
  cambiar('personas', S.cfg.persona, { foto: r.fid, fotoV: Date.now() });
  Nav.refrescar();
}

/* ---- 05_pantallas.js ---- */
/* ============================ INICIO ============================ */
const MODULOS = [
  ['compra', 'modulo-compra', 'Compra', 2],
  ['tareas', 'modulo-tareas', 'Tareas', 1],
  ['agenda', 'modulo-calendario', 'Agenda', 5],
  ['gastos', 'modulo-gastos', 'Gastos', 7],
  ['documentos', 'modulo-documentos', 'Documentos', 6],
  ['notas', 'modulo-notas', 'Notas', 0]
];
const PASTEL = ['#F2B824', '#A6C93A', '#EE8AA8', '#2BB5B0', '#9B86E0', '#F0674B'];

function pilaAvatares(max) {
  const ps = personas();
  return '<button class="stk" data-a="ir" data-id="personas" style="border:0;background:none" aria-label="Personas">' + ps.slice(0, max || 4).map(p => av(p, 44)).join('') + '</button>';
}
function resumenCompra() {
  const l = lista('compra');
  const falta = l.filter(x => !x.hecho).length;
  return l.length ? (falta ? falta + ' por comprar' : 'Todo comprado') : 'Lista vacía';
}

P.inicio = {
  raiz: true, clase: 'con-barra',
  html: () => {
    const e = espacio(), ps = personas();
    let h = '<div data-r="banda">' + banda() + '</div>' +
      '<div class="hd"><div><p class="eye">' + fechaLarga(new Date()) + '</p><h1' + (e.nombre.length > 22 ? ' style="font-size:26px"' : '') + '>' + esc(e.nombre) + '</h1></div>' + pilaAvatares() + '</div>';
    if (ps.length < 2 && esAdmin()) h += '<button class="row card" data-a="ir" data-id="invitar" style="margin-bottom:14px">' + sq('invitar', 4) + '<div class="f"><b>Invita a los tuyos</b><small>Crea un código para que se unan a «' + esc(e.nombre) + '»</small></div>' + chev + '</button>';
    h += '<div class="grid">' + MODULOS.map((m, i) => {
      const activo = m[0] === 'compra';
      return '<button class="mod' + (activo ? '' : ' pronto') + '" style="--c:' + PASTEL[i] + '"' + (activo ? ' data-a="raiz" data-id="compra"' : ' data-a="pronto"') + '>' + ic(m[1], 30, m[3]) + '<b>' + m[2] + '</b><small>' + (activo ? resumenCompra() : 'En la próxima entrega') + '</small></button>';
    }).join('') + '</div>';
    h += '<button class="row card" data-a="ir" data-id="personas" style="margin-top:12px">' + sq('personas', 4) + '<div class="f"><b>Personas</b><small>' + ps.length + (ps.length === 1 ? ' persona' : ' personas') + '</small></div>' + chev + '</button>';
    return h;
  },
  fijo: () => '<button class="fab" data-a="anadir" aria-label="Añadir">' + ic('anadir', 28) + '</button>'
};
ACC.pronto = () => toast('Esto llega en la siguiente entrega. Ahora probamos los cimientos.');
ACC.anadir = () => abrirHoja('<h3>¿Qué quieres añadir?</h3><div class="grid">' +
  [['modulo-compra', 'Producto', 2, 1], ['modulo-tareas', 'Tarea', 1], ['modulo-gastos', 'Gasto', 7], ['modulo-calendario', 'Evento', 5], ['modulo-notas', 'Nota', 0], ['modulo-documentos', 'Documento', 6]].map((x, i) =>
    '<button class="mod' + (x[3] ? '' : ' pronto') + '" style="--c:' + PASTEL[i] + ';min-height:84px;padding:12px 14px"' + (x[3] ? ' data-a="anadirProducto"' : ' data-a="pronto"') + '>' + ic(x[0], 26, x[2]) + '<b style="font-size:15px">' + x[1] + '</b></button>').join('') +
  '</div><button class="row card" data-a="pronto" style="margin-top:14px;opacity:.5">' + ic('microfono', 22, 4) + '<b>Dilo o escríbelo</b><small style="color:var(--mu);font-weight:700">Pronto</small></button>');
ACC.anadirProducto = () => { cerrarHoja(); Nav.raiz('compra'); setTimeout(() => { const i = $('#nuevo'); if (i) i.focus(); }, 380); };

/* ============================ COMPRA ============================ */
const SECCIONES = [
  ['fruta', 'Fruta y verdura', 'manzana platano pera naranja mandarina limon lima tomate lechuga cebolla ajo patata zanahoria pimiento calabacin calabaza berenjena fresa uva melon sandia kiwi aguacate pepino espinaca brocoli coliflor puerro champinon seta fruta verdura judia verde alcachofa piña mango cereza melocoton albaricoque ciruela perejil cilantro albahaca rucula canonigos'],
  ['carne', 'Carne y pescado', 'pollo pechuga muslo ternera cerdo carne picada jamon lomo hamburguesa chorizo salchicha pavo bacon panceta cordero conejo pescado merluza salmon bacalao dorada lubina sardina boqueron gamba langostino calamar sepia mejillon almeja pulpo fiambre embutido salchichon fuet'],
  ['lacteos', 'Lácteos y huevos', 'leche yogur yogures queso mantequilla nata huevo huevos kefir cuajada natillas flan requeson margarina batido'],
  ['pan', 'Panadería', 'pan barra baguette chapata tostada pan de molde bolleria croissant magdalena bizcocho tortilla de trigo picos colines'],
  ['despensa', 'Despensa', 'arroz pasta macarrones espaguetis fideos lentejas garbanzos alubias aceite sal azucar harina cafe te infusion cacao cereales galletas tomate frito atun lata conserva especias vinagre miel mermelada chocolate legumbres caldo pimienta oregano levadura frutos secos nueces almendras pipas aceitunas mayonesa ketchup mostaza tortitas avena quinoa cuscus'],
  ['bebidas', 'Bebidas', 'agua cerveza vino zumo refresco cola tonica gaseosa cava sidra bebida isotonica leche de avena bebida vegetal'],
  ['congelados', 'Congelados', 'congelado congelados helado pizza hielo guisantes croquetas empanadillas san jacobo varitas'],
  ['limpieza', 'Limpieza', 'lavavajillas detergente suavizante lejia friegasuelos bayeta estropajo bolsas de basura bolsas basura papel de cocina fregona jabon de platos limpiacristales amoniaco quitagrasas pastillas lavavajillas sal lavavajillas abrillantador ambientador insecticida pilas bombilla'],
  ['higiene', 'Higiene', 'champu gel desodorante pasta de dientes cepillo de dientes papel higienico compresas tampones crema maquinilla colonia panuelos algodon bastoncillos jabon de manos hilo dental enjuague cuchillas protector solar toallitas'],
  ['otros', 'Otros', '']
];
const NOMSEC = id => (SECCIONES.find(s => s[0] === id) || SECCIONES[SECCIONES.length - 1])[1];
function adivinarSeccion(nombre) {
  const n = ' ' + sinAcentos(nombre).replace(/[^a-z0-9ñ ]/g, ' ') + ' ';
  let mejor = 'otros', largo = 0;
  SECCIONES.forEach(s => {
    const palabras = s[2].split(' ');
    for (let i = 0; i < palabras.length; i++) for (let j = i + 1; j <= Math.min(palabras.length, i + 3); j++) {
      const f = palabras.slice(i, j).join(' ');
      if (f.length > largo && (n.indexOf(' ' + f + ' ') >= 0 || n.indexOf(' ' + f + 's ') >= 0 || n.indexOf(' ' + f + 'es ') >= 0)) { mejor = s[0]; largo = f.length; }
    }
  });
  return mejor;
}
function partirCantidad(txt) {
  const m = txt.match(/^(\d+(?:[.,]\d+)?\s*(?:kg|g|l|ml|uds?|unidades|paquetes?|botellas?|latas?|docenas?)?)\s+(?:de\s+)?(.+)$/i);
  return m ? { cantidad: m[1].trim(), nombre: m[2].trim() } : { cantidad: '', nombre: txt.trim() };
}

P.compra = {
  raiz: true, clase: 'con-barra',
  html: (p, e) => {
    const l = lista('compra');
    const falta = l.filter(x => !x.hecho), hechos = l.filter(x => x.hecho);
    let h = '<div data-r="banda">' + banda() + '</div>' + head('Compra', l.length ? falta.length + ' por comprar · ' + hechos.length + ' en el carrito' : 'Lista vacía');
    if (!l.length) return h + '<div class="ill big" style="margin-top:30px">' + ilu('sin-compras') + '</div><h2 class="lg" style="font-size:26px">Sin compras</h2><p class="mu">Escribe abajo lo que falta en casa.</p>';
    const fila = x => {
      const quien = dato('personas', x.creadoPor);
      const nuevo = e && e.pintado && !e.vistos[x.id];
      if (e) e.vistos[x.id] = 1;
      return '<div class="row it' + (x.hecho ? ' dn' : '') + (nuevo ? ' nuevo' : '') + '" data-a="marcar" data-lp="menuProducto" data-id="' + x.id + '">' +
        '<span class="ck' + (x.hecho ? ' on' : '') + '" style="' + (x.hecho ? 'background:' + ((dato('personas', x.hechoPor) || {}).color || '#2E8B57') + ';border-color:transparent' : '') + '">' + tick(16) + '</span>' +
        '<div class="f"><b>' + esc(x.nombre) + '</b>' + ((x.cantidad || quien) ? '<small>' + [x.cantidad ? esc(x.cantidad) : '', quien ? '<span class="quien">' + dot(quien.color, 8) + esc(quien.nombre) + '</span>' : ''].filter(Boolean).join(' · ') + '</small>' : '') + '</div></div>';
    };
    const orden = (a, b) => (a.orden || 0) - (b.orden || 0);
    SECCIONES.forEach(s => {
      const xs = falta.filter(x => (x.seccion || 'otros') === s[0]).sort(orden);
      if (xs.length) h += '<h3>' + s[1] + '</h3><div class="card grp">' + xs.map(fila).join('') + '</div>';
    });
    if (hechos.length) h += '<h3>En el carrito</h3><div class="card grp">' + hechos.sort((a, b) => (b.hechoEn || 0) - (a.hechoEn || 0)).map(fila).join('') + '</div>' +
      '<button class="btn sec" data-a="quitarComprados" style="margin-top:14px">Quitar los comprados (' + hechos.length + ')</button>';
    if (e) e.pintado = true;
    return h + '<p class="cap" style="margin-top:18px;font-size:13px">Mantén el dedo en un producto para cambiarlo o borrarlo.</p>';
  },
  montar(el, p, e) { e.pintado = true; },
  fijo: () => '<form class="addbar" data-r="add" onsubmit="return false">' + ic('anadir', 22) + '<input id="nuevo" placeholder="Añadir producto" autocomplete="off" enterkeyhint="done" maxlength="60"><button class="mini" data-a="anadirCompra" type="submit">Añadir</button></form>'
};
ACC.anadirCompra = () => {
  const i = $('#nuevo');
  const v = i.value.trim();
  if (!v) { i.focus(); return; }
  const c = partirCantidad(v);
  const nombre = cap(c.nombre);
  const igual = lista('compra').find(x => sinAcentos(x.nombre) === sinAcentos(nombre));
  if (igual && !igual.hecho) { toast('«' + nombre + '» ya está en la lista.'); i.value = ''; return; }
  if (igual && igual.hecho) cambiar('compra', igual.id, { hecho: false, hechoPor: '', cantidad: c.cantidad || igual.cantidad || '' });
  else cambiar('compra', 'c' + uid(), { nombre: nombre, seccion: adivinarSeccion(nombre), cantidad: c.cantidad, hecho: false, orden: Date.now(), creadoPor: S.cfg.persona });
  i.value = '';
  Nav.refrescar(true);
  i.focus();
};
ACC.marcar = el => {
  const x = dato('compra', el.dataset.id);
  if (!x) return;
  const h = !x.hecho;
  el.classList.toggle('dn', h);
  const ck = $('.ck', el);
  ck.classList.toggle('on', h);
  ck.style.background = h ? (yo() || {}).color || '#2E8B57' : ''; ck.style.borderColor = h ? 'transparent' : '';
  cambiar('compra', x.id, { hecho: h, hechoPor: h ? S.cfg.persona : '', hechoEn: Date.now() });
  setTimeout(() => Nav.refrescar(), 650);
};
ACC.menuProducto = el => {
  const x = dato('compra', el.dataset.id);
  if (!x) return;
  abrirHoja('<h3>' + esc(x.nombre) + '</h3><div class="list"><button class="row card" data-a="editarProducto" data-id="' + x.id + '">' + ic('editar', 24) + '<b>Cambiar</b></button><button class="row card" data-a="borrarProducto" data-id="' + x.id + '">' + ic('borrar', 24, 0) + '<b>Borrar</b></button></div>');
};
ACC.editarProducto = el => { cerrarHoja(); Nav.ir('producto', { id: el.dataset.id }); };
ACC.borrarProducto = el => {
  cerrarHoja();
  const id = el.dataset.id, x = dato('compra', id);
  const fila = $('.it[data-id="' + id + '"]', Nav.actual().el);
  if (fila) fila.classList.add('sale');
  setTimeout(() => { cambiar('compra', id, { _b: 1 }); Nav.refrescar(); if (Nav.actual().id === 'producto') Nav.atras(); }, fila ? 280 : 0);
  toast('«' + x.nombre + '» borrado', 'Deshacer', () => { cambiar('compra', id, { _b: 0 }); Nav.refrescar(); });
};
ACC.quitarComprados = () => {
  const hs = lista('compra').filter(x => x.hecho);
  hs.forEach(x => { const f = $('.it[data-id="' + x.id + '"]', Nav.actual().el); if (f) f.classList.add('sale'); });
  setTimeout(() => { hs.forEach(x => cambiar('compra', x.id, { _b: 1 })); Nav.refrescar(); }, 280);
  toast(hs.length + (hs.length === 1 ? ' producto quitado' : ' productos quitados'), 'Deshacer', () => { hs.forEach(x => cambiar('compra', x.id, { _b: 0 })); Nav.refrescar(); });
};

/* 51 · Cambiar producto */
P.producto = {
  clase: 'con-boton', fija: true,
  html: p => {
    const x = dato('compra', p.id) || {};
    p.sec = p.sec || x.seccion || 'otros';
    return tope('Cambiar producto') + '<label class="fld"><small>Producto</small><input id="prNom" maxlength="60" value="' + esc(x.nombre) + '"></label>' +
      '<p class="lab2">Sección</p><div class="chips">' + SECCIONES.map(s => '<button class="chip' + (p.sec === s[0] ? ' on' : '') + '" data-a="secProducto" data-id="' + s[0] + '">' + s[1] + '</button>').join('') + '</div>' +
      '<label class="fld" style="margin-top:16px"><small>Cantidad</small><input id="prCan" maxlength="30" value="' + esc(x.cantidad || '') + '" placeholder="Por ejemplo, 2 botellas"></label>' +
      '<button class="btn sec peligro" data-a="borrarProducto" data-id="' + esc(p.id) + '" style="margin-top:18px">Borrar producto</button>';
  },
  fijo: () => '<div class="btns">' + btn('Guardar', 'guardarProducto') + '</div>'
};
ACC.secProducto = el => { Nav.actual().params.sec = el.dataset.id; $$('[data-a="secProducto"]', Nav.actual().el).forEach(b => b.classList.toggle('on', b === el)); };
ACC.guardarProducto = () => {
  const p = Nav.actual().params, n = $('#prNom').value.trim();
  if (!n) return toast('Escribe el nombre del producto.');
  cambiar('compra', p.id, { nombre: n, seccion: p.sec, cantidad: $('#prCan').value.trim() });
  Nav.atras();
};

/* ============================ MÁS ============================ */
P.mas = {
  raiz: true, clase: 'con-barra',
  html: () => '<div data-r="banda">' + banda() + '</div>' + head('Más', 'Todo lo demás de tu espacio') + '<div class="grid">' +
    [['modulo-compra', 'Compra', 2, 'compra'], ['personas', 'Personas', 4, 'personas'], ['modulo-menu-semanal', 'Menú semanal', 1], ['modulo-plantas', 'Plantas', 3], ['modulo-coche', 'Coche', 5], ['modulo-medicacion', 'Medicación', 7], ['modulo-documentos', 'Documentos', 6], ['modulo-notas', 'Notas', 0]].map((x, i) =>
      '<button class="mod' + (x[3] ? '' : ' pronto') + '" style="--c:' + COL[x[2]] + ';min-height:84px;padding:12px 16px"' + (x[3] === 'compra' ? ' data-a="raiz" data-id="compra"' : x[3] ? ' data-a="ir" data-id="' + x[3] + '"' : ' data-a="pronto"') + '>' + ic(x[0], 28, x[2]) + '<b style="font-size:16px">' + x[1] + '</b></button>').join('') +
    '</div><div class="card grp" style="margin-top:14px"><button class="row" data-a="ir" data-id="ajustes">' + ic('ajustes', 24, 5) + '<b>Ajustes</b>' + chev + '</button><button class="row" data-a="ir" data-id="acerca">' + ic('informacion', 24, 2) + '<b>Acerca de Ronda</b>' + chev + '</button></div>'
};

/* ============================ PERSONAS ============================ */
const NOMROL = r => r === 'admin' ? 'Administrador' : 'Integrante';
P.personas = {
  html: () => {
    const ps = personas();
    let h = tope('') + '<div data-r="banda">' + banda() + '</div>' + head('Personas', esc(espacio().nombre)) + '<div class="list">' + ps.map(p =>
      '<button class="row card" data-a="ir" data-id="persona" data-pid="' + p.id + '">' + av(p, 46) + '<div class="f"><b>' + esc(p.nombre) + (p.id === S.cfg.persona ? ' <span style="color:var(--mu);font-weight:600">· tú</span>' : '') + '</b><small>' + NOMROL(p.rol) + '</small></div>' + dot(p.color, 14) + '</button>').join('') + '</div>';
    if (esAdmin()) h += '<button class="btn pri" data-a="ir" data-id="invitar" style="margin-top:16px">' + ic('invitar', 22) + 'Invitar a alguien</button>';
    if (ps.length < 2) h += '<div class="ill big">' + ilu('sin-personas-aun') + '</div><p class="mu">' + (esAdmin() ? 'Invita a quien quieras: cada persona tendrá su propio código.' : 'Aquí saldrá cada persona del espacio.') + '</p>';
    return h;
  }
};

/* 72 · Invitar */
P.invitar = {
  fija: true,
  html: p => {
    p.para = p.para || 'nueva'; p.rol = p.rol || 'integrante';
    const otros = personas().filter(x => x.id !== S.cfg.persona);
    let h = tope('Invitar a alguien');
    if (p.res) {
      return h + '<div class="ill mid">' + ilu('invita-a-los-tuyos') + '</div><div class="card inv"><p class="eye">' + (p.res.para ? 'Código para ' + esc(p.res.para) : 'Su código') + '</p><div class="code">' + esc(p.res.codigo) + '</div>' +
        '<small>Caduca a las ' + hora(new Date(p.res.caduca)) + (new Date(p.res.caduca).getDate() !== new Date().getDate() ? ' de mañana' : '') + ' · sirve una sola vez</small>' +
        '<p class="codelargo">' + esc(p.res.paquete) + '</p>' +
        '<div class="btns2"><button class="btn pri sm" data-a="compartirInv">' + ic('compartir', 20) + 'Compartir</button><button class="btn sec sm" data-a="copiarInv">Copiar</button></div></div>' +
        '<div class="aviso">' + ic('informacion', 22, 5) + '<span>Tiene que pegarlo <b>dentro de Ronda</b>, abierta desde el icono de la pantalla de inicio, en «Ya tengo un código». Al compartir se envía todo explicado.</span></div>' +
        '<button class="btn sec" data-a="otraInv" style="margin-top:6px">Crear otro código</button>';
    }
    h += '<div class="ill mid">' + ilu('invita-a-los-tuyos') + '</div><p class="lab2">Para quién</p><div class="seg"><button class="' + (p.para === 'nueva' ? 'on' : '') + '" data-a="invPara" data-v="nueva">Persona nueva</button><button class="' + (p.para !== 'nueva' ? 'on' : '') + '" data-a="invPara" data-v="vieja"' + (otros.length || true ? '' : ' disabled') + '>Volver a conectar</button></div>';
    if (p.para === 'nueva') h += '<p class="lab2">Rol</p><div class="seg"><button class="' + (p.rol === 'integrante' ? 'on' : '') + '" data-a="invRol" data-v="integrante">Integrante</button><button class="' + (p.rol === 'admin' ? 'on' : '') + '" data-a="invRol" data-v="admin">Administrador</button></div><p class="texto" style="font-size:14px;margin-top:6px">' + (p.rol === 'admin' ? 'Podrá invitar, quitar personas y elegir el calendario.' : 'Podrá usar todo el espacio, pero no invitar ni quitar personas.') + '</p>';
    else h += '<p class="texto" style="font-size:14px;margin:4px 0 10px">Para un móvil nuevo o si alguien ha perdido el acceso. Entra con su perfil de siempre.</p><div class="list">' + personas().map(x => '<button class="row card' + (p.pid === x.id ? ' sel' : '') + '" data-a="invPid" data-v="' + x.id + '">' + av(x, 40) + '<b>' + esc(x.nombre) + (x.id === S.cfg.persona ? ' · tú' : '') + '</b><span class="rad' + (p.pid === x.id ? ' on' : '') + '"></span></button>').join('') + '</div>';
    return h + '<div data-r="err"></div><button class="btn pri" data-a="crearInv" style="margin-top:18px">Crear código</button>';
  }
};
ACC.invPara = el => { const p = Nav.actual().params; p.para = el.dataset.v; Nav.refrescar(true); };
ACC.invRol = el => { const p = Nav.actual().params; p.rol = el.dataset.v; Nav.refrescar(true); };
ACC.invPid = el => { const p = Nav.actual().params; p.pid = el.dataset.v; Nav.refrescar(true); };
ACC.otraInv = () => { const p = Nav.actual().params; p.res = null; Nav.refrescar(true); };
ACC.crearInv = el => conEspera(el, async () => {
  const p = Nav.actual().params;
  if (p.para !== 'nueva' && !p.pid) return toast('Elige a quién vas a volver a conectar.');
  try {
    const r = await api('invitar', p.para === 'nueva' ? { rol: p.rol } : { persona: p.pid });
    p.res = { codigo: r.codigo, caduca: r.caduca, paquete: crearPaquete(r.codigo), para: p.para === 'nueva' ? '' : (dato('personas', p.pid) || {}).nombre };
    Nav.refrescar(true);
  } catch (e) { mostrarError($('[data-r="err"]', Nav.actual().el), e.message); }
});
function textoInvitacion(res) {
  const app = location.origin + location.pathname.replace(/index\.html$/, '');
  return 'Te invito a «' + espacio().nombre + '» en Ronda.\n\n1. Abre ' + app + ' en Safari, toca Compartir y «Añadir a pantalla de inicio».\n2. Abre Ronda desde el icono y toca «Ya tengo un código».\n3. Pega este código (entero):\n\n' + res.paquete + '\n\nCaduca a las ' + hora(new Date(res.caduca)) + ' y sirve una sola vez.';
}
ACC.compartirInv = async () => {
  const res = Nav.actual().params.res, t = textoInvitacion(res);
  if (navigator.share) { try { await navigator.share({ text: t }); return; } catch (e) { if (e.name === 'AbortError') return; } }
  if (await copiar(t)) toast('Copiado con las instrucciones. Pégalo en un mensaje.');
};
ACC.copiarInv = async () => { if (await copiar(Nav.actual().params.res.paquete)) toast('Código copiado'); else toast('No he podido copiar. Mantén el dedo sobre el código.'); };

/* 73 · Ficha de persona */
P.persona = {
  html: p => {
    const x = dato('personas', p.pid);
    if (!x) return tope('') + '<p class="mu">Esta persona ya no está en el espacio.</p>';
    const soy = x.id === S.cfg.persona;
    let h = tope(x.nombre) + '<div class="bigav">' + av(x, 140) + '</div><h1 style="text-align:center;font-size:28px;margin:12px 0 2px">' + esc(x.nombre) + '</h1><p class="cap" style="margin:0 0 16px">' + NOMROL(x.rol) + (soy ? ' · tú' : '') + '</p>' +
      '<div class="card" style="padding:4px 16px"><div class="kv"><small>Color</small><b class="quien">' + dot(x.color, 12) + nomColor(x.color) + '</b></div><div class="kv"><small>Rol</small><b>' + NOMROL(x.rol) + '</b></div><div class="kv"><small>En el espacio desde</small><b>' + (x.alta ? fechaCorta(new Date(x.alta)) : '—') + '</b></div></div>';
    if (soy) h += '<button class="btn pri" data-a="ir" data-id="miperfil" style="margin-top:18px">Cambiar mi perfil</button>';
    if (esAdmin() && !soy) h += '<div class="list" style="margin-top:18px"><button class="btn sec" data-a="reconectarPersona" data-pid="' + x.id + '">Crear código para volver a conectar</button><button class="btn sec peligro" data-a="quitarPersona" data-pid="' + x.id + '">Quitar del espacio</button></div>';
    return h;
  }
};
ACC.reconectarPersona = el => { const e = Nav.ir('invitar', { para: 'vieja', pid: el.dataset.pid }); };
ACC.quitarPersona = async el => {
  const x = dato('personas', el.dataset.pid);
  if (!await preguntar('¿Quitar a ' + x.nombre + '?', 'Su móvil dejará de tener acceso al espacio. Lo que haya añadido se queda.', 'Quitar del espacio', true)) return;
  try { await api('persona-quitar', { id: x.id }); await Sync.ya(); Nav.atras(); toast(x.nombre + ' ya no está en el espacio'); }
  catch (e) { toast(e.message); }
};

/* 74 · Mi perfil */
P.miperfil = {
  html: () => {
    const x = yo() || {};
    const usados = personas().filter(p => p.id !== S.cfg.persona).map(p => String(p.color).toUpperCase());
    return tope('Mi perfil') + '<button class="bigav" data-a="miFoto" style="border:0;background:none;width:100%">' + av(x, 168) + '</button><p class="cap">Tu color es el ' + nomColor(x.color).toLowerCase() + '</p>' +
      '<label class="fld" style="margin-top:18px"><small>Nombre</small><input id="mpNom" maxlength="30" value="' + esc(x.nombre) + '" enterkeyhint="done"></label>' +
      '<p class="lab2">Tu color</p><div class="cols">' + COL.map((c, i) => '<button class="cdot' + (String(x.color).toUpperCase() === c ? ' on' : '') + '" style="background:' + c + '" data-a="miColor" data-c="' + c + '"' + (usados.indexOf(c) >= 0 ? ' disabled' : '') + ' aria-label="' + NOMCOL[i] + '"></button>').join('') + '</div>' +
      '<p class="texto" style="font-size:14px;margin-top:10px">Se usa en tu aro y en tus cosas. Los colores apagados ya los tiene otra persona.</p>' +
      '<div class="list" style="margin-top:18px"><button class="row card" data-a="miFoto">' + ic('foto', 26, 5) + '<b>' + (x.foto ? 'Cambiar foto' : 'Poner foto') + '</b>' + chev + '</button>' + (x.foto ? '<button class="row card" data-a="quitarMiFoto">' + ic('borrar', 26, 0) + '<b>Quitar foto</b></button>' : '') + '</div>';
  },
  montar(el) {
    const i = $('#mpNom', el);
    const g = () => { const v = i.value.trim(); const x = yo(); if (v && x && v !== x.nombre) { cambiar('personas', S.cfg.persona, { nombre: v }); toast('Nombre guardado'); } };
    i.addEventListener('change', g);
    i.addEventListener('keydown', e => { if (e.key === 'Enter') i.blur(); });
  },
  tras(el) { P.miperfil.montar(el); }
};
ACC.miColor = el => { cambiar('personas', S.cfg.persona, { color: el.dataset.c }); Nav.refrescar(true); };
ACC.miFoto = async () => {
  const x = yo();
  const r = await elegirFoto(!!x.foto, x.color);
  if (r === 'quitar') return ACC.quitarMiFoto();
  if (!r) return;
  toast('Subiendo la foto…');
  try { await subirMiFoto(r); toast('Foto guardada'); } catch (e) { toast('No he podido subir la foto: ' + e.message); }
};
ACC.quitarMiFoto = () => { const fid = (yo() || {}).foto; cambiar('personas', S.cfg.persona, { foto: '' }); Nav.refrescar(true); if (fid) api('archivo-borrar', { fid: fid }).catch(() => { }); };

/* ============================ AJUSTES ============================ */
P.ajustes = {
  html: () => {
    const x = yo() || {};
    const rows = [['perfil', 'Mi perfil', 0, 'miperfil'], ['personas', 'Personas', 4, 'personas'], ['avisos', 'Avisos en tu calendario', 1, 'avisos'], ['nube-sincronizada', 'Sincronización', 5, 'sincronizacion'], ['luna', 'Apariencia', 6, 'apariencia'], ['escudo', 'Comprobaciones', 3, 'comprobaciones'], ['informacion', 'Acerca de Ronda', 2, 'acerca']];
    return tope('') + '<div data-r="banda">' + banda() + '</div>' + head('Ajustes', '') + '<button class="card row" data-a="ir" data-id="miperfil" style="margin-bottom:16px;padding:16px">' + av(x, 56) + '<div class="f"><b>' + esc(x.nombre || '') + '</b><small>' + NOMROL(S.cfg.rol) + ' · ' + esc(espacio().nombre) + '</small></div>' + chev + '</button>' +
      '<div class="card grp">' + rows.map(r => '<button class="row" data-a="ir" data-id="' + r[3] + '">' + ic(r[0], 24, r[2]) + '<b>' + r[1] + '</b>' + chev + '</button>').join('') + '</div>' +
      '<p class="ver">Ronda · versión ' + VERSION + ' · script ' + esc(S.sv || '…') + '</p>';
  }
};

/* 34 · Avisos en el calendario */
P.avisos = {
  html: p => {
    const c = S.cal;
    let h = tope('Avisos en tu calendario') + '<div class="card row" style="background:color-mix(in srgb,#3C78C8 18%,var(--sf))">' + ic('modulo-calendario', 28, 5) + '<div class="f"><b>' + (c ? esc(c.nombre) : 'Calendario principal') + '</b><small>' + (c ? 'Aquí se crean los avisos' : 'Todavía no se ha elegido el calendario compartido') + '</small></div></div>';
    h += esAdmin() ? '<button class="btn sec" data-a="elegirCal" style="margin-top:12px">' + (c ? 'Cambiar de calendario' : 'Elegir el calendario compartido') + '</button>' : '<p class="texto" style="font-size:14px;margin-top:10px">El calendario lo elige quien administra el espacio.</p>';
    h += '<h3>Probar un aviso</h3><p class="texto">Crea un evento dentro de 2 minutos, con alarma a esa hora. Si suena en los dos móviles, los avisos funcionan.</p>' +
      '<button class="btn pri" data-a="probarAviso" style="margin-top:14px">Probar un aviso</button><div data-r="res">' + (p.res || '') + '</div>' +
      '<h3>Si no suena</h3><div class="card" style="padding:4px 16px">' +
      '<div class="kv" style="display:block"><b style="text-align:left;display:block">En el móvil de quien creó el script</b><small style="display:block;margin-top:4px;font-weight:600;line-height:1.4">El aviso ya lleva su alarma. Mira que las notificaciones del calendario estén activadas en Ajustes del iPhone.</small></div>' +
      '<div class="kv" style="display:block"><b style="text-align:left;display:block">En los demás móviles</b><small style="display:block;margin-top:4px;font-weight:600;line-height:1.4">Suena con las notificaciones que cada persona tenga puestas para ese calendario: en Google Calendar, ajustes del calendario › Notificaciones de eventos › «0 minutos antes».</small></div></div>' +
      '<p class="texto" style="font-size:14px;margin-top:14px">En la próxima entrega podrás elegir con un interruptor qué cosas van al calendario (tareas, riego, medicación…).</p>';
    return h;
  },
  montar() { api('estado').then(r => { S.cal = r.cal; DB.set('cal', S.cal); Nav.refrescar(); }).catch(() => { }); }
};
ACC.elegirCal = () => {
  const h = abrirHoja('<h3>Elige el calendario</h3><p class="texto" style="font-size:14px;margin-bottom:12px">Son los calendarios de la cuenta de Google donde está el script. Elige el que compartís.</p><div data-r="lista"><p class="cap">Cargando…</p></div>' +
    '<p class="lab2">O pega el ID de un calendario</p><div class="fld fldr"><div class="f"><small>ID del calendario</small><input id="calId" placeholder="…@group.calendar.google.com" autocapitalize="off" spellcheck="false"></div><button class="mini" data-a="calPegado">Usar</button></div><div data-r="err"></div>');
  api('calendarios').then(r => {
    $('[data-r="lista"]', h).innerHTML = '<div class="list">' + r.lista.map(c => '<button class="row card' + (S.cal && S.cal.id === c.id ? ' sel' : '') + '" data-a="calElegido" data-id="' + esc(c.id) + '">' + dot(c.color || '#3C78C8', 14) + '<div class="f"><b>' + esc(c.nombre) + '</b><small>' + (c.propio ? 'Tuyo' : 'Compartido contigo') + '</small></div><span class="rad' + (S.cal && S.cal.id === c.id ? ' on' : '') + '"></span></button>').join('') + '</div>';
  }).catch(e => mostrarError($('[data-r="lista"]', h), e.message));
};
async function fijarCal(id) {
  const r = await api('calendario-elegir', { id: id });
  S.cal = r.cal; DB.set('cal', S.cal);
  cerrarHoja(); Nav.refrescar(true);
  toast('Los avisos irán a «' + r.cal.nombre + '»');
}
ACC.calElegido = el => fijarCal(el.dataset.id).catch(e => toast(e.message));
ACC.calPegado = el => conEspera(el, () => fijarCal($('#calId').value.trim()).catch(e => mostrarError($('.hoja [data-r="err"]'), e.message)));
ACC.probarAviso = el => conEspera(el, async () => {
  const p = Nav.actual().params;
  try {
    const r = await api('aviso-prueba', { min: 2 });
    p.res = '<div class="aviso">' + ic('hecho', 22, 3) + '<span>Listo: evento «Ronda · aviso de prueba» a las <b>' + r.hora + '</b> en «' + esc(r.calendario) + '». Bloquea el móvil y espera.</span></div>';
  } catch (e) { p.res = '<div class="aviso mal">' + ic('error', 22, 0) + '<span>' + esc(e.message) + '</span></div>'; }
  $('[data-r="res"]', Nav.actual().el).innerHTML = p.res;
});

/* 84 · Sincronización */
P.sincronizacion = {
  html: () => {
    const n = Sync.pendientes();
    const est = !S.red.ok && S.red.error ? (S.red.error.code === 'sinred' ? 'Sin conexión' : 'No se ha podido sincronizar') : n ? n + (n === 1 ? ' cambio por enviar' : ' cambios por enviar') : 'Todo sincronizado';
    return tope('Sincronización') + '<div class="card row" style="background:color-mix(in srgb,#A6C93A 22%,var(--sf))">' + ic(S.red.ok ? 'nube-sincronizada' : 'sin-conexion', 28, S.red.ok ? 2 : 7) + '<div class="f"><b>' + est + '</b><small>Última vez: ' + haceRato(S.red.ultimo) + '</small></div></div>' +
      (S.red.error && !S.red.ok ? '<div class="aviso mal">' + ic('error', 22, 0) + '<span>' + esc(S.red.error.message) + '</span></div>' : '') +
      '<button class="btn pri" data-a="sincAhora" style="margin-top:14px">Sincronizar ahora</button>' +
      '<p class="texto" style="font-size:14px;margin-top:12px">Ronda se sincroniza sola: al abrirla, al volver a ella y cada pocos segundos mientras está abierta. Si no hay conexión, guarda los cambios en el móvil y los envía al volver.</p>' +
      '<div class="card" style="padding:4px 16px;margin-top:14px"><div class="kv"><small>Cambios por enviar</small><b>' + n + '</b></div><div class="kv"><small>Último cambio recibido</small><b>n.º ' + S.seq + '</b></div><div class="kv"><small>Guardado en el móvil</small><b>' + ({ idb: 'IndexedDB', local: 'Almacén local', memoria: 'Solo memoria' }[DB.modo]) + '</b></div><div class="kv"><small>Script</small><b>' + esc(S.sv || '…') + '</b></div></div>' +
      '<div class="list" style="margin-top:16px"><button class="btn sec" data-a="redescargar">Volver a descargar todo</button><button class="btn sec peligro" data-a="desconectar">Desconectar este móvil</button></div>';
  }
};
ACC.sincAhora = el => conEspera(el, async () => { Sync.fallos = 0; await Sync.ya(); Nav.refrescar(true); toast(S.red.ok ? 'Sincronizado' : 'No se ha podido: ' + (S.red.error ? S.red.error.message : '')); });
ACC.redescargar = async el => {
  if (!await preguntar('¿Volver a descargar todo?', 'Se borra la copia de este móvil y se baja otra vez del script. Los cambios sin enviar se mantienen.', 'Volver a descargar')) return;
  S.recs = {}; S.seq = 0; guardarLocal(true); await Sync.ya(); Nav.refrescar(true); toast('Descargado de nuevo');
};
ACC.desconectar = async () => {
  const n = Sync.pendientes();
  if (!await preguntar('¿Desconectar este móvil?', (n ? 'Hay ' + n + ' cambios sin enviar y se perderán. ' : '') + 'Para volver a entrar necesitarás un código nuevo de quien administra el espacio.', 'Desconectar', true)) return;
  await borrarTodoLocal();
  location.reload();
};
async function borrarTodoLocal() {
  S.cfg = null; S.recs = {}; S.cola = {}; S.seq = 0; S.sid = '';
  await DB.del('cfg'); await DB.del('datos'); await DB.del('cola'); await DB.del('cal');
}

/* 85 · Apariencia */
P.apariencia = {
  html: () => {
    let t = 'auto'; try { t = localStorage.getItem('ronda-tema') || 'auto'; } catch (e) { }
    return tope('Apariencia') + '<div class="seg">' + [['claro', 'Claro'], ['oscuro', 'Oscuro'], ['auto', 'Automático']].map(x => '<button class="' + (t === x[0] ? 'on' : '') + '" data-a="tema" data-v="' + x[0] + '">' + x[1] + '</button>').join('') + '</div>' +
      '<p class="texto" style="font-size:14px;margin-top:10px">En automático sigue el modo claro u oscuro del iPhone. Se guarda en este móvil.</p>';
  }
};
ACC.tema = el => { try { localStorage.setItem('ronda-tema', el.dataset.v); } catch (e) { } aplicarTema(); Nav.refrescar(true); };

/* Comprobaciones: para encontrar fallos con Google y el iPhone */
P.comprobaciones = {
  html: p => tope('Comprobaciones') +
    '<div class="card" style="padding:4px 16px"><div class="kv"><small>App</small><b>' + VERSION + '</b></div><div class="kv"><small>Script</small><b>' + esc(S.sv || '…') + '</b></div><div class="kv"><small>Abierta desde</small><b>' + (enIcono() ? 'El icono' : 'El navegador') + '</b></div><div class="kv"><small>Almacén</small><b>' + DB.modo + '</b></div></div>' +
    '<div class="list" style="margin-top:14px"><button class="btn sec" data-a="probarConexion">Probar la conexión</button>' +
    '<label class="btn sec" style="position:relative">Probar con una foto grande<input type="file" accept="image/*" class="arch" data-r="fg"></label></div>' +
    '<div data-r="res">' + (p.res || '') + '</div>' +
    '<h3>Últimos errores</h3><pre class="log">' + (REG.length ? esc(REG.join('\n')) : 'Ninguno') + '</pre>' +
    '<div class="btns2"><button class="btn sec sm" data-a="copiarInforme">Copiar informe</button><button class="btn sec sm" data-a="borrarRegistro">Vaciar</button></div>',
  montar(el) { P.comprobaciones.tras(el); },
  tras(el) { const i = $('[data-r="fg"]', el); if (i) i.addEventListener('change', () => { if (i.files[0]) fotoGrande(i.files[0]); }); }
};
function resultado(html) { const e = Nav.actual(); e.params.res = html; const r = $('[data-r="res"]', e.el); if (r) r.innerHTML = html; }
ACC.probarConexion = el => conEspera(el, async () => {
  const t0 = performance.now();
  try { await api('cambios', { desde: S.seq }); const ms = Math.round(performance.now() - t0); resultado('<div class="aviso">' + ic('hecho', 22, 3) + '<span>El script responde en ' + ms + ' ms.</span></div>'); }
  catch (e) { resultado('<div class="aviso mal">' + ic('error', 22, 0) + '<span>' + esc(e.message) + '</span></div>'); }
});
async function fotoGrande(file) {
  resultado('<div class="aviso">' + ic('reloj', 22, 1) + '<span data-r="prog">Reduciendo la foto…</span></div>');
  const prog = t => { const x = $('[data-r="prog"]'); if (x) x.textContent = t; };
  try {
    const t0 = performance.now();
    const b = await reducir(file, 1600, 0.85);
    const t1 = performance.now();
    const r = await subirArchivo(b, 'prueba-foto.jpg', { trozo: 262144, progreso: f => prog('Subiendo… ' + Math.round(f * 100) + ' %') });
    const t2 = performance.now();
    prog('Bajándola otra vez…');
    const vuelta = await bajarArchivo(r.fid, { largo: 393216 });
    const t3 = performance.now();
    const a1 = new Uint8Array(await b.arrayBuffer()), a2 = new Uint8Array(await vuelta.arrayBuffer());
    let igual = a1.length === a2.length;
    for (let i = 0; igual && i < a1.length; i += 997) if (a1[i] !== a2[i]) igual = false;
    api('archivo-borrar', { fid: r.fid }).catch(() => { });
    const kb = Math.round(b.size / 1024);
    resultado('<div class="aviso' + (igual ? '' : ' mal') + '">' + ic(igual ? 'hecho' : 'error', 22, igual ? 3 : 0) + '<span>' + (igual ? 'Correcto.' : 'La foto ha vuelto distinta.') + ' Foto de ' + Math.round(file.size / 1024) + ' KB reducida a ' + kb + ' KB en ' + ((t1 - t0) / 1000).toFixed(1) + ' s; subida en ' + r.trozos + ' trozos en ' + ((t2 - t1) / 1000).toFixed(1) + ' s; bajada en ' + ((t3 - t2) / 1000).toFixed(1) + ' s.</span></div>');
  } catch (e) { resultado('<div class="aviso mal">' + ic('error', 22, 0) + '<span>' + esc(e.message) + '</span></div>'); }
}
ACC.copiarInforme = async () => {
  const t = 'Ronda ' + VERSION + ' · script ' + (S.sv || '?') + ' · ' + navigator.userAgent + '\nAlmacén: ' + DB.modo + ' · cambios pendientes: ' + Sync.pendientes() + ' · n.º ' + S.seq + '\n\n' + REG.join('\n');
  toast(await copiar(t) ? 'Informe copiado' : 'No he podido copiar');
};
ACC.borrarRegistro = () => { REG.length = 0; try { localStorage.removeItem('ronda-registro'); } catch (e) { } Nav.refrescar(true); };

/* 87 · Acerca de */
P.acerca = {
  html: () => tope('Acerca de') + '<div data-r="logo" style="position:relative;height:150px;margin-top:10px"></div><p class="ver" style="margin-top:0">Versión ' + VERSION + ' · script ' + esc(S.sv || '…') + '</p><p class="mu">Hecha en Pamplona para organizar la casa, la familia y la pareja.</p><p class="cap" style="margin-top:22px;font-size:17px">Ru&amp;Iña</p>',
  montar(el) { setTimeout(() => logoQuieto($('[data-r="logo"]', el), 30, 64), 30); },
  tras(el) { logoQuieto($('[data-r="logo"]', el), 30, 64); }
};

/* Acceso anulado */
let anulado = false;
function accesoAnulado() {
  if (anulado) return;
  anulado = true;
  borrarTodoLocal().then(() => {
    const viejas = Nav.pila.slice(); Nav.pila = [];
    Nav.ir('anulado');
    viejas.forEach(v => setTimeout(() => v.el.remove(), 400));
    Nav.barra();
  });
}
P.anulado = {
  fija: true, clase: 'con-boton',
  html: () => '<div class="centro" style="padding-top:40px"><div class="ill big">' + ilu('algo-ha-fallado') + '</div><h2 class="lg">Este móvil ya no está conectado</h2><p class="mu">Quien administra el espacio te ha quitado o ha anulado este acceso. Si es un error, pídele un código nuevo.</p></div>',
  fijo: () => '<div class="btns">' + btn('Tengo un código', 'deNuevo') + '</div>'
};
ACC.deNuevo = () => { location.reload(); };

/* ============================ ARRANQUE ============================ */
async function iniciar() {
  aplicarTema();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(e => anotar('sw', e));
  await DB.abrir();
  S.cfg = (await DB.get('cfg')) || null;
  if (S.cfg) {
    const d = (await DB.get('datos')) || {};
    S.recs = d.recs || {}; S.seq = d.seq || 0; S.sid = d.sid || '';
    S.cola = (await DB.get('cola')) || {};
    S.cal = (await DB.get('cal')) || null;
  }
  const modo = S.cfg ? 'l' : 'b';
  const anim = animarArranque(modo);
  if (S.cfg) Sync.ya();
  await anim;
  if (S.cfg) Nav.raiz('inicio'); else Nav.ir('bienvenida', { animar: true });
  quitarArranque();
}
window.RONDA = { S, Sync, Nav, api, DB, VERSION, cambiar, lista };
iniciar().catch(e => {
  anotar('arranque', e);
  const a = $('#arranque'); if (a) a.remove();
  $('#app').innerHTML = '<div class="pg"><div class="pgc"><h2 class="lg">No he podido abrir Ronda</h2><p class="mu">' + esc(e.message) + '</p><button class="btn pri" style="margin-top:24px" onclick="location.reload()">Volver a intentarlo</button></div></div>';
});

})();
