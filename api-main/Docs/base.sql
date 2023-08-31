

CREATE TABLE `Pacientes` (
  `idPacientes` int(11) NOT NULL,
  `Nombres` varchar(45) NOT NULL,
  `Apellidos` varchar(45) NOT NULL,
  `Cedula` varchar(10) DEFAULT NULL,
  `Estado_Civil_idEstado_Civil` int(11) DEFAULT NULL,
  `TipoSangre_idTipoSangre` int(11) DEFAULT NULL,
  `Usuarios_idUsuarios` int(11) NOT NULL,
  `FechaNacimiento` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO `Pacientes` (`idPacientes`, `Nombres`, `Apellidos`, `Cedula`, `Estado_Civil_idEstado_Civil`, `TipoSangre_idTipoSangre`, `Usuarios_idUsuarios`, `FechaNacimiento`) VALUES
(1, 'Paciente 1', 'Paciente 1', '1803971330', 3, 1, 1, '1988-09-11'),
(2, 'Mayra ', 'Sanchez', '1804233151', 2, 5, 1, '1989-11-22'),
(3, 'Luis Antonio', 'Llerena Ocaña', '1803971371', 2, 1, 1, '1989-03-01'),
(4, 'Teresa', 'Barreno', '1802491181', 2, 5, 1, '1966-06-15'),
(5, 'Domenica Luciana', 'Cuichan Toledo', '1716970742', 1, 1, 1, '2017-02-16'),
(6, 'Paceinte 3', 'paciente 3', '1234567890', 1, 1, 1, '2023-04-12'),
(13, 'xxxx', 'xxxx', '1801704279', 1, 4, 1, '2023-05-31'),
(14, 'Fabricio ', 'Lozada', '321', 2, 3, 1, '2018-06-19'),
(16, 'Juan Pablo', 'Aponete', NULL, NULL, NULL, 1, NULL),
(18, 'Steve', 'Lara', NULL, NULL, NULL, 1, NULL),
(19, 'Juan Luis ', 'Guerra', '234234', 1, 1, 1, '2022-12-15'),
(25, 'Pablo', 'Escalante', NULL, NULL, NULL, 1, NULL),
(26, 'Luis', 'xxxx', '123456657', 1, 1, 1, '2023-06-08'),
(27, 'iiiiii', 'iiiiiii', 'sdfdshge', 3, 3, 1, '2014-04-04');




CREATE TABLE `Estado_Civil` (
  `idEstado_Civil` int(11) NOT NULL,
  `Detalle` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO `Estado_Civil` (`idEstado_Civil`, `Detalle`) VALUES
(1, 'Soltero'),
(2, 'Casado'),
(3, 'Divorciado'),
(4, 'Viudo');


CREATE TABLE `TipoSangre` (
  `idTipoSangre` int(11) NOT NULL,
  `Detalle` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO `TipoSangre` (`idTipoSangre`, `Detalle`) VALUES
(1, 'A+'),
(2, 'A-'),
(3, 'B+'),
(4, 'B-'),
(5, 'O+'),
(6, 'O-');


ALTER TABLE `TipoSangre`
  ADD PRIMARY KEY (`idTipoSangre`);


ALTER TABLE `TipoSangre`
  MODIFY `idTipoSangre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

ALTER TABLE `Estado_Civil`
  ADD PRIMARY KEY (`idEstado_Civil`);

--
ALTER TABLE `Estado_Civil`
  MODIFY `idEstado_Civil` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;



ALTER TABLE `Pacientes`
  ADD PRIMARY KEY (`idPacientes`),
  ADD KEY `fk_Paciente_Estado_Civil1_idx` (`Estado_Civil_idEstado_Civil`),
  ADD KEY `fk_Paciente_TipoSangre1_idx` (`TipoSangre_idTipoSangre`);
  

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Pacientes`
--
ALTER TABLE `Pacientes`
  MODIFY `idPacientes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Pacientes`
--
ALTER TABLE `Pacientes`
  ADD CONSTRAINT `fk_Paciente_Estado_Civil1` FOREIGN KEY (`Estado_Civil_idEstado_Civil`) REFERENCES `Estado_Civil` (`idEstado_Civil`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Paciente_TipoSangre1` FOREIGN KEY (`TipoSangre_idTipoSangre`) REFERENCES `TipoSangre` (`idTipoSangre`) ON DELETE NO ACTION ON UPDATE NO ACTION;
  

