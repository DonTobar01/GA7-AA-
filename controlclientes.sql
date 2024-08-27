create database if not exists `control_clientes`;
USE `control_clientes`;

drop table if exists `cliente`;

create table `cliente` ( 
	`id_cliente` int(11) not null auto_increment,
    `nombre` varchar(45) default null,
    `apellido` varchar(45) default null,
    `email` varchar(45) default null,
    `telefono` varchar(45) default null,
    `saldo` double default null,
	primary key (`id_cliente`) 
);

insert into `cliente` values ( 1,'leonardo','tobar','tobar@gmail.com','3234567890',200000),(2,'brayan','tobar','brayan@hotmail.com','32323232323',100);

select * from `cliente` limit 100;