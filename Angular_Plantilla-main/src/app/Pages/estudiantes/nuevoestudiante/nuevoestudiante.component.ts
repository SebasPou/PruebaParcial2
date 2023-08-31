import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {EstudiantesService} from "../../../Services/estudiantes.service";

import {MateriasService} from "../../../Services/materias.service";

import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";

@Component({selector: "app-nuevoestudiante", templateUrl: "./nuevoestudiante.component.html", styleUrls: ["./nuevoestudiante.component.scss"]})
export class NuevoestudianteComponent implements OnInit {
    estudiante_form : FormGroup;
    listaMaterias : any[];
    listaTipos : any[];
    estadoestudiante : boolean;
    idEstudiante : number;

    constructor(private fb : FormBuilder, private estudianteServicio : EstudiantesService, private materias : MateriasService, private toastr : ToastrService, private rutas : Router, private parametrosurl : ActivatedRoute) {}

    ngOnInit(): void {
        this.estudiante_form = this.fb.group({
            
            Nombre: new FormControl("", Validators.required),
            Apellido: new FormControl("", Validators.required),
            FechaIngreso: new FormControl("", Validators.required),
            carrera: new FormControl("", Validators.required),
            MateriaFavorita: new FormControl("", Validators.required)
        });
        // Dentro del método ngOnInit()
this.materias.todos().subscribe((lista) => {
    this.listaMaterias = lista;
    console.log(lista);
});


        this.parametrosurl.params.subscribe((parametros) => {
            if (parametros["id"] !== undefined) {
                this.estadoestudiante = true;
                this.idEstudiante = parametros["id"];
                this.estudianteServicio.uno(this.idEstudiante).subscribe((unestudiante) => {
                    this.estudiante_form.patchValue({
                        
                        Nombre: unestudiante.Nombre,
                        Apellido: unestudiante.Apellido,
                        FechaIngreso: unestudiante.FechaIngreso,
                        carrera: unestudiante.Carrera,
                        materias: unestudiante.MateriaFavorita,
                        
                    });
                });
            }
        });
    }

    guardar() {
        if (!this.estadoestudiante) {
            this.estudianteServicio.insertar(this.estudiante_form.value).subscribe((datos) => {
                if (datos == "ok") {
                    this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', "", {
                        timeOut: 8000,
                        closeButton: true,
                        enableHtml: true,
                        toastClass: "alert alert-success alert-with-icon",
                        positionClass: "toast-top-right"
                    });
                    this.rutas.navigate(["/estudiantes"]);
                } else {
                    console.log(datos);
                }
            });
        }else{
          this.estudianteServicio.actualizar(this.estudiante_form.value, this.idEstudiante).subscribe((datos) => {
            
            if (datos == "ok") {
                this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Se guardo con exito</b> ', "", {
                    timeOut: 8000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-success alert-with-icon",
                    positionClass: "toast-top-right"
                });
                this.rutas.navigate(["/estudiantes"]);
            } else {
                console.log(datos);
            }
        });
        }

    }
}
