import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Persona} from '../../clasePersona/01clasePersona'

@Component({
  selector: 'app-form-prueba',
  templateUrl: './form-prueba.component.html',
  styleUrls: ['./form-prueba.component.css']
})
export class FormPruebaComponent {
  addressForm = this.fb.group({
    nombre: [null, Validators.compose([
      Validators.required, Validators.minLength(3)])
    ],
    apellidos: [null, Validators.compose([
      Validators.required, Validators.minLength(3)])
    ],
    edad: [null, Validators.compose([
      Validators.required, Validators.min(0), Validators.max(125)])
    ],
    dni: [null, Validators.compose([
      Validators.required, Validators.minLength(9), Validators.maxLength(9)])
    ],
    cumpleanos: [null, Validators.required],
    colorFavorito: [null, Validators.compose([
      Validators.required, Validators.minLength(3)])
    ],

    sexo: ['No Especificado', Validators.required]
  });

  hasUnitNumber = false;

 public Personas:Persona[];

 public indexModificar:number;

  constructor(private fb: FormBuilder) {
    this.Personas=new Array<Persona>();
    this.indexModificar=-1;
  }


  onSubmit(): void {
    if (this.addressForm.status=="VALID"){
    alert('Formulario Enviado. Gracias!');
    console.log(this.addressForm)
    let Persona1 = new Persona(this.addressForm.value.nombre, this.addressForm.value.apellidos, this.addressForm.value.edad, this.addressForm.value.dni, this.addressForm.value.cumpleanos, this.addressForm.value.colorFavorito, this.addressForm.value.sexo,)
  console.log(Persona1)
  if (this.indexModificar==-1){
  this.Personas.push(Persona1)}
  else{
    this.Personas[this.indexModificar]=Persona1
    this.indexModificar=-1
  }
  this.addressForm.setValue({
    nombre:"",
    apellidos:"",
    edad:"",
    dni:"",
    cumpleanos:"",
    colorFavorito:"",
    sexo:"",
  })
}
}

  eliminarPersona(i:number): void {
    this.Personas=this.Personas.filter((item,index)=>{return index!=i})

  }
modificarPersona(i:number): void {
  let lista=this.Personas.filter((item,index)=>{return index===i})
  this.addressForm.setValue({
    nombre:lista[0].Nombre,
    apellidos:lista[0].Apellidos,
    edad:lista[0].Edad,
    dni:lista[0].DNI,
    cumpleanos:lista[0].Cumpleanos,
    colorFavorito:lista[0].ColorFavorito,
    sexo:lista[0].Sexo,
  })

  this.indexModificar=i


console.log(lista)

}



}
