CREATE DATABASE  IF NOT EXISTS `control_clientes`; 

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;

CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `saldo` double DEFAULT NULL,
  PRIMARY KEY (`id_cliente`)
); 

INSERT INTO `cliente` VALUES (1,'Juan','Perez','jperez@mail.com3','55332211224',100),(2,'Karla','Gomez','kgomez@mail.com','4455661133',80),(18,'Carlos','Lara','clara@mail.com','5544-1133',70);

