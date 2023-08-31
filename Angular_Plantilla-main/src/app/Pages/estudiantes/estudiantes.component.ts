import {Component, OnInit} from '@angular/core';
import {IEstudiantes} from '../../Interfaces/estudiantes';
import {EstudiantesService} from '../../Services/estudiantes.service';
import swal from 'sweetalert2';
@Component({selector: 'app-estudiantes', templateUrl: './estudiantes.component.html', styleUrls: ['./estudiantes.component.scss']})
export class EstudiantesComponent implements OnInit {

    listaestudiantes : IEstudiantes[];
    constructor(private estudianteServicio : EstudiantesService) {}

    ngOnInit(): void {
       this.cargatabla();
    }
cargatabla(){
  this.estudianteServicio.todos().subscribe((lista) => {
    this.listaestudiantes = lista;
});
}
    eliminar(idEstudiante : number) {
        swal.fire({
            title: 'Estudiantes',
            text: "Esta seguro que desea elminar el estudiante",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.estudianteServicio.eliminar(idEstudiante).subscribe((dato) => {
                    if (dato) {
                        swal.fire('Estudiantes', 'Se elimnó correctamente', 'success');
                        this.cargatabla();

                    }

                });


            }
        })

    }

}
