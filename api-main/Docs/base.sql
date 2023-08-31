-- Creación de la tabla 'Materias'
CREATE TABLE Materias (
    materia_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_materia VARCHAR(255) NOT NULL,
    credito INT,
    sala VARCHAR(50),
    horario TIME
);

-- Creación de la tabla 'Estudiantes'
CREATE TABLE Estudiantes (
    estudiante_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255),
    fecha_ingreso DATE,
    carrera VARCHAR(100),
    materia_favorita_id INT,
    FOREIGN KEY (materia_favorita_id) REFERENCES Materias(materia_id) ON DELETE SET NULL
);

