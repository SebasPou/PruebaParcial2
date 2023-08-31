import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { IEstudiantes } from '../Interfaces/estudiantes';

const url = environment.url + 'Estudiantes.controllers.php?op=';
@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  constructor(private http: HttpClient) { }

  todos():Observable<IEstudiantes[]>{
    return this.http.get<IEstudiantes[]>(url + 'todos');
  }

  uno(idEstudiante:number):Observable<IEstudiantes>{
    var pac = new FormData();
    pac.append('idEstudiante',idEstudiante.toString())
    return this.http.post<IEstudiantes>(url + 'uno',pac);
  }

  insertar(estudiante:IEstudiantes):Observable<string>{
    var pac = new FormData();
    
    pac.append('Nombre',estudiante.Nombre)
    pac.append('Apellido',estudiante.Apellido)
    pac.append('fecha',estudiante.FechaIngreso.toString())
    pac.append('carrera',estudiante.Carrera.toString())
    pac.append('MateriaFav',estudiante.MateriaFavorita.toString())
    return this.http.post<string>(url + 'insertar',pac);
  }
  actualizar(estudiante:IEstudiantes, idPaciente:number):Observable<string>{
    var pac = new FormData();
    pac.append('idPacientes',idPaciente.toString())
    
    pac.append('Nombres',estudiante.Nombre)
    pac.append('Apellidos',estudiante.Apellido)
    pac.append('fecha',estudiante.FechaIngreso.toString())
    pac.append('carrera',estudiante.Carrera.toString())
    pac.append('MateriaFav',estudiante.MateriaFavorita.toString())
    return this.http.post<string>(url + 'actualizar',pac);
  }
  eliminar(idEstudiante:number):Observable<string>{
    var pac = new FormData();
    pac.append('idPacientes',idEstudiante.toString())
    return this.http.post<string>(url + 'eliminar',pac);
  }
}
