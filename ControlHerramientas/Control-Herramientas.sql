CREATE DATABASE  IF NOT EXISTS `control_herramientas`; 
USE `control_herramientas`;

DROP TABLE IF EXISTS `herramienta`;

CREATE TABLE `herramienta` (
  `id_herramienta` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `marca` varchar(45) DEFAULT NULL,
  `modelo` varchar(45) DEFAULT NULL,
  `cantidad` varchar(45) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  PRIMARY KEY (`id_herramienta`)
) ; 

INSERT INTO `cliente` VALUES (1,'martillo','truper','2024','10',20.000),(2,'alicates','karzon','2024','10',34.900),(3,'hombresolo','stanley','2014','10',64.000);

SELECT * FROM control_herramientas.herramienta LIMIT 100;