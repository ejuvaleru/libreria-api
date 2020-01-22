-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema libreria
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `libreria` ;

-- -----------------------------------------------------
-- Schema libreria
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `libreria` ;
USE `libreria` ;

-- -----------------------------------------------------
-- Table `libreria`.`AUTOR`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `libreria`.`AUTOR` ;

CREATE TABLE IF NOT EXISTS `libreria`.`AUTOR` (
  `ID_autor` INT NOT NULL AUTO_INCREMENT,
  `nombre_autor` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`ID_autor`),
  UNIQUE INDEX `ID_autor_UNIQUE` (`ID_autor` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `libreria`.`EDITORIAL`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `libreria`.`EDITORIAL` ;

CREATE TABLE IF NOT EXISTS `libreria`.`EDITORIAL` (
  `ID_editorial` INT NOT NULL AUTO_INCREMENT,
  `nombre_editorial` VARCHAR(100) NULL,
  PRIMARY KEY (`ID_editorial`),
  UNIQUE INDEX `ID_editorial_UNIQUE` (`ID_editorial` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `libreria`.`AREA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `libreria`.`AREA` ;

CREATE TABLE IF NOT EXISTS `libreria`.`AREA` (
  `ID_area` INT NOT NULL AUTO_INCREMENT,
  `nombre_area` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID_area`),
  UNIQUE INDEX `ID_area_UNIQUE` (`ID_area` ASC) ,
  UNIQUE INDEX `nombre_area_UNIQUE` (`nombre_area` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `libreria`.`SUBAREA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `libreria`.`SUBAREA` ;

CREATE TABLE IF NOT EXISTS `libreria`.`SUBAREA` (
  `ID_subarea` INT NOT NULL AUTO_INCREMENT,
  `nombre_subarea` VARCHAR(45) NOT NULL,
  `AREA_ID_area` INT NOT NULL,
  PRIMARY KEY (`ID_subarea`),
  UNIQUE INDEX `ID_subarea_UNIQUE` (`ID_subarea` ASC) ,
  UNIQUE INDEX `nombre_subarea_UNIQUE` (`nombre_subarea` ASC) ,
  INDEX `fk_SUBAREA_AREA1_idx` (`AREA_ID_area` ASC) ,
  CONSTRAINT `fk_SUBAREA_AREA1`
    FOREIGN KEY (`AREA_ID_area`)
    REFERENCES `libreria`.`AREA` (`ID_area`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `libreria`.`TEMA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `libreria`.`TEMA` ;

CREATE TABLE IF NOT EXISTS `libreria`.`TEMA` (
  `ID_tema` INT NOT NULL AUTO_INCREMENT,
  `nombre_tema` VARCHAR(45) NOT NULL,
  `SUBAREA_ID_subarea` INT NOT NULL,
  PRIMARY KEY (`ID_tema`),
  UNIQUE INDEX `ID_tema_UNIQUE` (`ID_tema` ASC) ,
  UNIQUE INDEX `nombre_tema_UNIQUE` (`nombre_tema` ASC) ,
  INDEX `fk_TEMA_SUBAREA1_idx` (`SUBAREA_ID_subarea` ASC) ,
  CONSTRAINT `fk_TEMA_SUBAREA1`
    FOREIGN KEY (`SUBAREA_ID_subarea`)
    REFERENCES `libreria`.`SUBAREA` (`ID_subarea`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `libreria`.`SUBTEMA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `libreria`.`SUBTEMA` ;

CREATE TABLE IF NOT EXISTS `libreria`.`SUBTEMA` (
  `ID_subtema` INT NOT NULL AUTO_INCREMENT,
  `nombre_subtema` VARCHAR(45) NOT NULL,
  `TEMA_ID_tema` INT NOT NULL,
  PRIMARY KEY (`ID_subtema`),
  UNIQUE INDEX `ID_subtema_UNIQUE` (`ID_subtema` ASC) ,
  UNIQUE INDEX `nombre_subtema_UNIQUE` (`nombre_subtema` ASC) ,
  INDEX `fk_SUBTEMA_TEMA1_idx` (`TEMA_ID_tema` ASC) ,
  CONSTRAINT `fk_SUBTEMA_TEMA1`
    FOREIGN KEY (`TEMA_ID_tema`)
    REFERENCES `libreria`.`TEMA` (`ID_tema`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `libreria`.`SUBSUBTEMA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `libreria`.`SUBSUBTEMA` ;

CREATE TABLE IF NOT EXISTS `libreria`.`SUBSUBTEMA` (
  `ID_subsubtema` INT NOT NULL AUTO_INCREMENT,
  `nombre_subsubtema` VARCHAR(100) NOT NULL,
  `SUBTEMA_ID_subtema` INT NOT NULL,
  PRIMARY KEY (`ID_subsubtema`),
  UNIQUE INDEX `ID_subsubtema_UNIQUE` (`ID_subsubtema` ASC) ,
  UNIQUE INDEX `nombre_subsubtema_UNIQUE` (`nombre_subsubtema` ASC) ,
  INDEX `fk_SUBSUBTEMA_SUBTEMA1_idx` (`SUBTEMA_ID_subtema` ASC) ,
  CONSTRAINT `fk_SUBSUBTEMA_SUBTEMA1`
    FOREIGN KEY (`SUBTEMA_ID_subtema`)
    REFERENCES `libreria`.`SUBTEMA` (`ID_subtema`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `libreria`.`NOMENCLATURA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `libreria`.`NOMENCLATURA` ;

CREATE TABLE IF NOT EXISTS `libreria`.`NOMENCLATURA` (
  `ID_NOMENCLATURA` INT NOT NULL AUTO_INCREMENT,
  `abreviacion` VARCHAR(45) NOT NULL,
  `SUBAREA_ID_subarea` INT NOT NULL,
  `Subsubtema_ID_subsubtema` INT NOT NULL,
  `TEMA_ID_tema` INT NOT NULL,
  `AREA_ID_area` INT NOT NULL,
  `SUBTEMA_ID_subtema` INT NOT NULL,
  PRIMARY KEY (`ID_NOMENCLATURA`),
  UNIQUE INDEX `ID_NOMENCLATURA_UNIQUE` (`ID_NOMENCLATURA` ASC) ,
  UNIQUE INDEX `abreviacion_UNIQUE` (`abreviacion` ASC) ,
  INDEX `fk_NOMENCLATURA_SUBAREA1_idx` (`SUBAREA_ID_subarea` ASC) ,
  INDEX `fk_NOMENCLATURA_Subsubtema1_idx` (`Subsubtema_ID_subsubtema` ASC) ,
  INDEX `fk_NOMENCLATURA_TEMA1_idx` (`TEMA_ID_tema` ASC) ,
  INDEX `fk_NOMENCLATURA_AREA1_idx` (`AREA_ID_area` ASC) ,
  INDEX `fk_NOMENCLATURA_SUBTEMA1_idx` (`SUBTEMA_ID_subtema` ASC) ,
  CONSTRAINT `fk_NOMENCLATURA_SUBAREA1`
    FOREIGN KEY (`SUBAREA_ID_subarea`)
    REFERENCES `libreria`.`SUBAREA` (`ID_subarea`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_NOMENCLATURA_Subsubtema1`
    FOREIGN KEY (`Subsubtema_ID_subsubtema`)
    REFERENCES `libreria`.`SUBSUBTEMA` (`ID_subsubtema`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_NOMENCLATURA_TEMA1`
    FOREIGN KEY (`TEMA_ID_tema`)
    REFERENCES `libreria`.`TEMA` (`ID_tema`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_NOMENCLATURA_AREA1`
    FOREIGN KEY (`AREA_ID_area`)
    REFERENCES `libreria`.`AREA` (`ID_area`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_NOMENCLATURA_SUBTEMA1`
    FOREIGN KEY (`SUBTEMA_ID_subtema`)
    REFERENCES `libreria`.`SUBTEMA` (`ID_subtema`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `libreria`.`LIBRO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `libreria`.`LIBRO` ;

CREATE TABLE IF NOT EXISTS `libreria`.`LIBRO` (
  `ID_libro` INT NOT NULL AUTO_INCREMENT,
  `num_pagina` INT NOT NULL,
  `num_edicion` INT NOT NULL,
  `EDITORIAL_ID_editorial` INT NOT NULL,
  `isbn` VARCHAR(45) NULL,
  `codigo_identificador` VARCHAR(45) NULL,
  `NOMENCLATURA_ID_NOMENCLATURA` INT NOT NULL,
  `titulo` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`ID_libro`),
  UNIQUE INDEX `LIBRO_UNIQUE` (`ID_libro` ASC) ,
  INDEX `fk_LIBRO_EDITORIAL1_idx` (`EDITORIAL_ID_editorial` ASC) ,
  UNIQUE INDEX `isbn_UNIQUE` (`isbn` ASC) ,
  INDEX `fk_LIBRO_NOMENCLATURA1_idx` (`NOMENCLATURA_ID_NOMENCLATURA` ASC) ,
  CONSTRAINT `fk_LIBRO_EDITORIAL1`
    FOREIGN KEY (`EDITORIAL_ID_editorial`)
    REFERENCES `libreria`.`EDITORIAL` (`ID_editorial`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_LIBRO_NOMENCLATURA1`
    FOREIGN KEY (`NOMENCLATURA_ID_NOMENCLATURA`)
    REFERENCES `libreria`.`NOMENCLATURA` (`ID_NOMENCLATURA`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `libreria`.`EJEMPLAR`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `libreria`.`EJEMPLAR` ;

CREATE TABLE IF NOT EXISTS `libreria`.`EJEMPLAR` (
  `ID_ejemplares` INT NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(300) NULL,
  `costo_venta` INT NOT NULL,
  `LIBRO_ID_libro` INT NOT NULL,
  `costo_compra` INT NOT NULL,
  `costo_descuento` INT NOT NULL,
  `url_fotografia` VARCHAR(100) NOT NULL,
  `fecha_adquisicion` DATE NOT NULL,
  PRIMARY KEY (`ID_ejemplares`),
  UNIQUE INDEX `ID_ejemplarres_UNIQUE` (`ID_ejemplares` ASC) ,
  INDEX `fk_EJEMPLARES_LIBRO1_idx` (`LIBRO_ID_libro` ASC) ,
  UNIQUE INDEX `url_fotografia_UNIQUE` (`url_fotografia` ASC) ,
  CONSTRAINT `fk_EJEMPLARES_LIBRO1`
    FOREIGN KEY (`LIBRO_ID_libro`)
    REFERENCES `libreria`.`LIBRO` (`ID_libro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `libreria`.`LIBRO_AUTOR`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `libreria`.`LIBRO_AUTOR` ;

CREATE TABLE IF NOT EXISTS `libreria`.`LIBRO_AUTOR` (
  `LIBRO_ID_libro` INT NOT NULL,
  `AUTOR_ID_autor` INT NOT NULL,
  PRIMARY KEY (`LIBRO_ID_libro`, `AUTOR_ID_autor`),
  INDEX `fk_LIBRO_has_AUTOR_AUTOR1_idx` (`AUTOR_ID_autor` ASC) ,
  INDEX `fk_LIBRO_has_AUTOR_LIBRO1_idx` (`LIBRO_ID_libro` ASC) ,
  CONSTRAINT `fk_LIBRO_has_AUTOR_LIBRO1`
    FOREIGN KEY (`LIBRO_ID_libro`)
    REFERENCES `libreria`.`LIBRO` (`ID_libro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_LIBRO_has_AUTOR_AUTOR1`
    FOREIGN KEY (`AUTOR_ID_autor`)
    REFERENCES `libreria`.`AUTOR` (`ID_autor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
