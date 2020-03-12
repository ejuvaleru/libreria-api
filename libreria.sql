-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 12, 2020 at 03:43 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `libreria`
--

-- --------------------------------------------------------

--
-- Table structure for table `AREA`
--

CREATE TABLE `AREA` (
  `ID_area` int(11) NOT NULL,
  `nombre_area` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `AREA`
--

INSERT INTO `AREA` (`ID_area`, `nombre_area`) VALUES
(1, 'sin area');

-- --------------------------------------------------------

--
-- Table structure for table `AUTOR`
--

CREATE TABLE `AUTOR` (
  `ID_autor` int(11) NOT NULL,
  `nombre_autor` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `AUTOR`
--

INSERT INTO `AUTOR` (`ID_autor`, `nombre_autor`) VALUES
(1, 'Neal Koblitz');

-- --------------------------------------------------------

--
-- Table structure for table `EDITORIAL`
--

CREATE TABLE `EDITORIAL` (
  `ID_editorial` int(11) NOT NULL,
  `nombre_editorial` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `EDITORIAL`
--

INSERT INTO `EDITORIAL` (`ID_editorial`, `nombre_editorial`) VALUES
(1, 'Springer');

-- --------------------------------------------------------

--
-- Table structure for table `EJEMPLAR`
--

CREATE TABLE `EJEMPLAR` (
  `ID_ejemplares` int(11) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  `costo_venta` int(11) NOT NULL,
  `LIBRO_ID_libro` int(11) NOT NULL,
  `costo_compra` int(11) NOT NULL,
  `costo_descuento` int(11) NOT NULL,
  `url_fotografia` varchar(100) NOT NULL,
  `fecha_adquisicion` date NOT NULL,
  `is_vendido` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `LIBRO`
--

CREATE TABLE `LIBRO` (
  `ID_libro` int(11) NOT NULL,
  `num_pagina` int(11) NOT NULL,
  `num_edicion` int(11) NOT NULL,
  `EDITORIAL_ID_editorial` int(11) NOT NULL,
  `isbn` varchar(45) DEFAULT NULL,
  `codigo_identificador` varchar(45) DEFAULT NULL,
  `NOMENCLATURA_ID_NOMENCLATURA` int(11) NOT NULL,
  `titulo` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `LIBRO`
--

INSERT INTO `LIBRO` (`ID_libro`, `num_pagina`, `num_edicion`, `EDITORIAL_ID_editorial`, `isbn`, `codigo_identificador`, `NOMENCLATURA_ID_NOMENCLATURA`, `titulo`) VALUES
(1, 300, 1, 1, 'isbn-test', '', 1, 'A course in number theory and cryptography');

-- --------------------------------------------------------

--
-- Table structure for table `LIBRO_AUTOR`
--

CREATE TABLE `LIBRO_AUTOR` (
  `LIBRO_ID_libro` int(11) NOT NULL,
  `AUTOR_ID_autor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `LIBRO_AUTOR`
--

INSERT INTO `LIBRO_AUTOR` (`LIBRO_ID_libro`, `AUTOR_ID_autor`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `MENU`
--

CREATE TABLE `MENU` (
  `ID_menu` int(11) NOT NULL,
  `nombre_item` varchar(200) NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `precio` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `MENU`
--

INSERT INTO `MENU` (`ID_menu`, `nombre_item`, `descripcion`, `precio`) VALUES
(1, 'cafe chico', 'cafe de 200ml', 1.5),
(2, 'cafe grande', 'cafe de 500ml', 3.5);

-- --------------------------------------------------------

--
-- Table structure for table `NOMENCLATURA`
--

CREATE TABLE `NOMENCLATURA` (
  `ID_NOMENCLATURA` int(11) NOT NULL,
  `abreviacion` varchar(45) NOT NULL,
  `SUBAREA_ID_subarea` int(11) NOT NULL,
  `Subsubtema_ID_subsubtema` int(11) NOT NULL,
  `TEMA_ID_tema` int(11) NOT NULL,
  `AREA_ID_area` int(11) NOT NULL,
  `SUBTEMA_ID_subtema` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `NOMENCLATURA`
--

INSERT INTO `NOMENCLATURA` (`ID_NOMENCLATURA`, `abreviacion`, `SUBAREA_ID_subarea`, `Subsubtema_ID_subsubtema`, `TEMA_ID_tema`, `AREA_ID_area`, `SUBTEMA_ID_subtema`) VALUES
(1, 'ABC', 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `ROL`
--

CREATE TABLE `ROL` (
  `ID_rol` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ROL`
--

INSERT INTO `ROL` (`ID_rol`, `nombre`) VALUES
(1, 'administrador');

-- --------------------------------------------------------

--
-- Table structure for table `SUBAREA`
--

CREATE TABLE `SUBAREA` (
  `ID_subarea` int(11) NOT NULL,
  `nombre_subarea` varchar(45) NOT NULL,
  `AREA_ID_area` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `SUBAREA`
--

INSERT INTO `SUBAREA` (`ID_subarea`, `nombre_subarea`, `AREA_ID_area`) VALUES
(1, 'sin subarea', 1);

-- --------------------------------------------------------

--
-- Table structure for table `SUBSUBTEMA`
--

CREATE TABLE `SUBSUBTEMA` (
  `ID_subsubtema` int(11) NOT NULL,
  `nombre_subsubtema` varchar(100) NOT NULL,
  `SUBTEMA_ID_subtema` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `SUBSUBTEMA`
--

INSERT INTO `SUBSUBTEMA` (`ID_subsubtema`, `nombre_subsubtema`, `SUBTEMA_ID_subtema`) VALUES
(1, 'sin subsubtema', 1);

-- --------------------------------------------------------

--
-- Table structure for table `SUBTEMA`
--

CREATE TABLE `SUBTEMA` (
  `ID_subtema` int(11) NOT NULL,
  `nombre_subtema` varchar(45) NOT NULL,
  `TEMA_ID_tema` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `SUBTEMA`
--

INSERT INTO `SUBTEMA` (`ID_subtema`, `nombre_subtema`, `TEMA_ID_tema`) VALUES
(1, 'sin subtema', 1);

-- --------------------------------------------------------

--
-- Table structure for table `TEMA`
--

CREATE TABLE `TEMA` (
  `ID_tema` int(11) NOT NULL,
  `nombre_tema` varchar(45) NOT NULL,
  `SUBAREA_ID_subarea` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `TEMA`
--

INSERT INTO `TEMA` (`ID_tema`, `nombre_tema`, `SUBAREA_ID_subarea`) VALUES
(1, 'sin tema', 1);

-- --------------------------------------------------------

--
-- Table structure for table `USUARIO`
--

CREATE TABLE `USUARIO` (
  `ID_usuario` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `nombre_usuario` varchar(200) NOT NULL,
  `contraseña_claro` varchar(200) NOT NULL,
  `ROL_ID_rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `USUARIO`
--

INSERT INTO `USUARIO` (`ID_usuario`, `nombre`, `nombre_usuario`, `contraseña_claro`, `ROL_ID_rol`) VALUES
(2, 'juan', 'juan', '$2b$10$O6nO1lK5dwgv6f7.qFVBd.asIGEMlMm4iBRKp4q6FRA3sszE4Leea', 1);

-- --------------------------------------------------------

--
-- Table structure for table `VENTA`
--

CREATE TABLE `VENTA` (
  `ID_venta` int(11) NOT NULL,
  `fecha_hora` datetime NOT NULL,
  `USUARIO_ID_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `VENTA_EJEMPLAR`
--

CREATE TABLE `VENTA_EJEMPLAR` (
  `VENTA_ID_venta` int(11) NOT NULL,
  `EJEMPLAR_ID_ejemplares` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `VENTA_MENU`
--

CREATE TABLE `VENTA_MENU` (
  `VENTA_ID_venta` int(11) NOT NULL,
  `MENU_ID_menu` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `AREA`
--
ALTER TABLE `AREA`
  ADD PRIMARY KEY (`ID_area`),
  ADD UNIQUE KEY `ID_area_UNIQUE` (`ID_area`),
  ADD UNIQUE KEY `nombre_area_UNIQUE` (`nombre_area`);

--
-- Indexes for table `AUTOR`
--
ALTER TABLE `AUTOR`
  ADD PRIMARY KEY (`ID_autor`),
  ADD UNIQUE KEY `ID_autor_UNIQUE` (`ID_autor`);

--
-- Indexes for table `EDITORIAL`
--
ALTER TABLE `EDITORIAL`
  ADD PRIMARY KEY (`ID_editorial`),
  ADD UNIQUE KEY `ID_editorial_UNIQUE` (`ID_editorial`);

--
-- Indexes for table `EJEMPLAR`
--
ALTER TABLE `EJEMPLAR`
  ADD PRIMARY KEY (`ID_ejemplares`),
  ADD UNIQUE KEY `ID_ejemplarres_UNIQUE` (`ID_ejemplares`),
  ADD UNIQUE KEY `url_fotografia_UNIQUE` (`url_fotografia`),
  ADD KEY `fk_EJEMPLARES_LIBRO1_idx` (`LIBRO_ID_libro`);

--
-- Indexes for table `LIBRO`
--
ALTER TABLE `LIBRO`
  ADD PRIMARY KEY (`ID_libro`),
  ADD UNIQUE KEY `LIBRO_UNIQUE` (`ID_libro`),
  ADD UNIQUE KEY `isbn_UNIQUE` (`isbn`),
  ADD KEY `fk_LIBRO_EDITORIAL1_idx` (`EDITORIAL_ID_editorial`),
  ADD KEY `fk_LIBRO_NOMENCLATURA1_idx` (`NOMENCLATURA_ID_NOMENCLATURA`);

--
-- Indexes for table `LIBRO_AUTOR`
--
ALTER TABLE `LIBRO_AUTOR`
  ADD PRIMARY KEY (`LIBRO_ID_libro`,`AUTOR_ID_autor`),
  ADD KEY `fk_LIBRO_has_AUTOR_AUTOR1_idx` (`AUTOR_ID_autor`),
  ADD KEY `fk_LIBRO_has_AUTOR_LIBRO1_idx` (`LIBRO_ID_libro`);

--
-- Indexes for table `MENU`
--
ALTER TABLE `MENU`
  ADD PRIMARY KEY (`ID_menu`),
  ADD UNIQUE KEY `ID_menu_UNIQUE` (`ID_menu`);

--
-- Indexes for table `NOMENCLATURA`
--
ALTER TABLE `NOMENCLATURA`
  ADD PRIMARY KEY (`ID_NOMENCLATURA`),
  ADD UNIQUE KEY `ID_NOMENCLATURA_UNIQUE` (`ID_NOMENCLATURA`),
  ADD UNIQUE KEY `abreviacion_UNIQUE` (`abreviacion`),
  ADD KEY `fk_NOMENCLATURA_SUBAREA1_idx` (`SUBAREA_ID_subarea`),
  ADD KEY `fk_NOMENCLATURA_Subsubtema1_idx` (`Subsubtema_ID_subsubtema`),
  ADD KEY `fk_NOMENCLATURA_TEMA1_idx` (`TEMA_ID_tema`),
  ADD KEY `fk_NOMENCLATURA_AREA1_idx` (`AREA_ID_area`),
  ADD KEY `fk_NOMENCLATURA_SUBTEMA1_idx` (`SUBTEMA_ID_subtema`);

--
-- Indexes for table `ROL`
--
ALTER TABLE `ROL`
  ADD PRIMARY KEY (`ID_rol`),
  ADD UNIQUE KEY `ID_rol_UNIQUE` (`ID_rol`);

--
-- Indexes for table `SUBAREA`
--
ALTER TABLE `SUBAREA`
  ADD PRIMARY KEY (`ID_subarea`),
  ADD UNIQUE KEY `ID_subarea_UNIQUE` (`ID_subarea`),
  ADD UNIQUE KEY `nombre_subarea_UNIQUE` (`nombre_subarea`),
  ADD KEY `fk_SUBAREA_AREA1_idx` (`AREA_ID_area`);

--
-- Indexes for table `SUBSUBTEMA`
--
ALTER TABLE `SUBSUBTEMA`
  ADD PRIMARY KEY (`ID_subsubtema`),
  ADD UNIQUE KEY `ID_subsubtema_UNIQUE` (`ID_subsubtema`),
  ADD UNIQUE KEY `nombre_subsubtema_UNIQUE` (`nombre_subsubtema`),
  ADD KEY `fk_SUBSUBTEMA_SUBTEMA1_idx` (`SUBTEMA_ID_subtema`);

--
-- Indexes for table `SUBTEMA`
--
ALTER TABLE `SUBTEMA`
  ADD PRIMARY KEY (`ID_subtema`),
  ADD UNIQUE KEY `ID_subtema_UNIQUE` (`ID_subtema`),
  ADD UNIQUE KEY `nombre_subtema_UNIQUE` (`nombre_subtema`),
  ADD KEY `fk_SUBTEMA_TEMA1_idx` (`TEMA_ID_tema`);

--
-- Indexes for table `TEMA`
--
ALTER TABLE `TEMA`
  ADD PRIMARY KEY (`ID_tema`),
  ADD UNIQUE KEY `ID_tema_UNIQUE` (`ID_tema`),
  ADD UNIQUE KEY `nombre_tema_UNIQUE` (`nombre_tema`),
  ADD KEY `fk_TEMA_SUBAREA1_idx` (`SUBAREA_ID_subarea`);

--
-- Indexes for table `USUARIO`
--
ALTER TABLE `USUARIO`
  ADD PRIMARY KEY (`ID_usuario`),
  ADD UNIQUE KEY `ID_usuario_UNIQUE` (`ID_usuario`),
  ADD UNIQUE KEY `nombre_usuario_UNIQUE` (`nombre_usuario`),
  ADD KEY `fk_USUARIO_ROL1_idx` (`ROL_ID_rol`);

--
-- Indexes for table `VENTA`
--
ALTER TABLE `VENTA`
  ADD PRIMARY KEY (`ID_venta`),
  ADD UNIQUE KEY `ID_venta_UNIQUE` (`ID_venta`),
  ADD KEY `fk_VENTA_USUARIO1_idx` (`USUARIO_ID_usuario`);

--
-- Indexes for table `VENTA_EJEMPLAR`
--
ALTER TABLE `VENTA_EJEMPLAR`
  ADD PRIMARY KEY (`VENTA_ID_venta`,`EJEMPLAR_ID_ejemplares`),
  ADD KEY `fk_VENTA_has_EJEMPLAR_EJEMPLAR1_idx` (`EJEMPLAR_ID_ejemplares`),
  ADD KEY `fk_VENTA_has_EJEMPLAR_VENTA1_idx` (`VENTA_ID_venta`);

--
-- Indexes for table `VENTA_MENU`
--
ALTER TABLE `VENTA_MENU`
  ADD PRIMARY KEY (`VENTA_ID_venta`,`MENU_ID_menu`),
  ADD KEY `fk_VENTA_has_MENU_MENU1_idx` (`MENU_ID_menu`),
  ADD KEY `fk_VENTA_has_MENU_VENTA1_idx` (`VENTA_ID_venta`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `AREA`
--
ALTER TABLE `AREA`
  MODIFY `ID_area` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `AUTOR`
--
ALTER TABLE `AUTOR`
  MODIFY `ID_autor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `EDITORIAL`
--
ALTER TABLE `EDITORIAL`
  MODIFY `ID_editorial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `EJEMPLAR`
--
ALTER TABLE `EJEMPLAR`
  MODIFY `ID_ejemplares` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `LIBRO`
--
ALTER TABLE `LIBRO`
  MODIFY `ID_libro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `MENU`
--
ALTER TABLE `MENU`
  MODIFY `ID_menu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `NOMENCLATURA`
--
ALTER TABLE `NOMENCLATURA`
  MODIFY `ID_NOMENCLATURA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ROL`
--
ALTER TABLE `ROL`
  MODIFY `ID_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `SUBAREA`
--
ALTER TABLE `SUBAREA`
  MODIFY `ID_subarea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `SUBSUBTEMA`
--
ALTER TABLE `SUBSUBTEMA`
  MODIFY `ID_subsubtema` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `SUBTEMA`
--
ALTER TABLE `SUBTEMA`
  MODIFY `ID_subtema` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `TEMA`
--
ALTER TABLE `TEMA`
  MODIFY `ID_tema` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `USUARIO`
--
ALTER TABLE `USUARIO`
  MODIFY `ID_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `VENTA`
--
ALTER TABLE `VENTA`
  MODIFY `ID_venta` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `EJEMPLAR`
--
ALTER TABLE `EJEMPLAR`
  ADD CONSTRAINT `fk_EJEMPLARES_LIBRO1` FOREIGN KEY (`LIBRO_ID_libro`) REFERENCES `LIBRO` (`ID_libro`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `LIBRO`
--
ALTER TABLE `LIBRO`
  ADD CONSTRAINT `fk_LIBRO_EDITORIAL1` FOREIGN KEY (`EDITORIAL_ID_editorial`) REFERENCES `EDITORIAL` (`ID_editorial`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_LIBRO_NOMENCLATURA1` FOREIGN KEY (`NOMENCLATURA_ID_NOMENCLATURA`) REFERENCES `NOMENCLATURA` (`ID_NOMENCLATURA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `LIBRO_AUTOR`
--
ALTER TABLE `LIBRO_AUTOR`
  ADD CONSTRAINT `fk_LIBRO_has_AUTOR_AUTOR1` FOREIGN KEY (`AUTOR_ID_autor`) REFERENCES `AUTOR` (`ID_autor`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_LIBRO_has_AUTOR_LIBRO1` FOREIGN KEY (`LIBRO_ID_libro`) REFERENCES `LIBRO` (`ID_libro`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `NOMENCLATURA`
--
ALTER TABLE `NOMENCLATURA`
  ADD CONSTRAINT `fk_NOMENCLATURA_AREA1` FOREIGN KEY (`AREA_ID_area`) REFERENCES `AREA` (`ID_area`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_NOMENCLATURA_SUBAREA1` FOREIGN KEY (`SUBAREA_ID_subarea`) REFERENCES `SUBAREA` (`ID_subarea`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_NOMENCLATURA_SUBTEMA1` FOREIGN KEY (`SUBTEMA_ID_subtema`) REFERENCES `SUBTEMA` (`ID_subtema`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_NOMENCLATURA_Subsubtema1` FOREIGN KEY (`Subsubtema_ID_subsubtema`) REFERENCES `SUBSUBTEMA` (`ID_subsubtema`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_NOMENCLATURA_TEMA1` FOREIGN KEY (`TEMA_ID_tema`) REFERENCES `TEMA` (`ID_tema`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `SUBAREA`
--
ALTER TABLE `SUBAREA`
  ADD CONSTRAINT `fk_SUBAREA_AREA1` FOREIGN KEY (`AREA_ID_area`) REFERENCES `AREA` (`ID_area`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `SUBSUBTEMA`
--
ALTER TABLE `SUBSUBTEMA`
  ADD CONSTRAINT `fk_SUBSUBTEMA_SUBTEMA1` FOREIGN KEY (`SUBTEMA_ID_subtema`) REFERENCES `SUBTEMA` (`ID_subtema`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `SUBTEMA`
--
ALTER TABLE `SUBTEMA`
  ADD CONSTRAINT `fk_SUBTEMA_TEMA1` FOREIGN KEY (`TEMA_ID_tema`) REFERENCES `TEMA` (`ID_tema`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `TEMA`
--
ALTER TABLE `TEMA`
  ADD CONSTRAINT `fk_TEMA_SUBAREA1` FOREIGN KEY (`SUBAREA_ID_subarea`) REFERENCES `SUBAREA` (`ID_subarea`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `USUARIO`
--
ALTER TABLE `USUARIO`
  ADD CONSTRAINT `fk_USUARIO_ROL1` FOREIGN KEY (`ROL_ID_rol`) REFERENCES `ROL` (`ID_rol`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `VENTA`
--
ALTER TABLE `VENTA`
  ADD CONSTRAINT `fk_VENTA_USUARIO1` FOREIGN KEY (`USUARIO_ID_usuario`) REFERENCES `USUARIO` (`ID_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `VENTA_EJEMPLAR`
--
ALTER TABLE `VENTA_EJEMPLAR`
  ADD CONSTRAINT `fk_VENTA_has_EJEMPLAR_EJEMPLAR1` FOREIGN KEY (`EJEMPLAR_ID_ejemplares`) REFERENCES `EJEMPLAR` (`ID_ejemplares`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_VENTA_has_EJEMPLAR_VENTA1` FOREIGN KEY (`VENTA_ID_venta`) REFERENCES `VENTA` (`ID_venta`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `VENTA_MENU`
--
ALTER TABLE `VENTA_MENU`
  ADD CONSTRAINT `fk_VENTA_has_MENU_MENU1` FOREIGN KEY (`MENU_ID_menu`) REFERENCES `MENU` (`ID_menu`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_VENTA_has_MENU_VENTA1` FOREIGN KEY (`VENTA_ID_venta`) REFERENCES `VENTA` (`ID_venta`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
