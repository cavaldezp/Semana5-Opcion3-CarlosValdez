
NC=0    //  numero de la consulta
CC=0    //  costo de la consulta actual
TOT=0   // total tratamiento




while (prompt(console.log("¿Tratamiento en Curso? Ingrese S mayuscula para continuar"))=="S"){

    NC = NC + 1;
    console.log(`El número de cita es ${NC}`);

    if(NC<=3){
        console.log(`El costo de la cita es S/. 200.00`);
        TOT=TOT+200;
        console.log(`El costo total de tratamientos a la fecha es S/. ${TOT}`);
    }else if((NC>3)&&(NC<6)){
        console.log(`El costo de la cita es S/. 150.00`);
        TOT=TOT+150;
        console.log(`El costo total de tratamientos a la fecha es S/. ${TOT}`);
    }else if((NC>=6)&&(NC<=8)){
        console.log(`El costo de la cita es S/. 100.00`);
        TOT=TOT+100;
        console.log(`El costo total de tratamientos a la fecha es S/. ${TOT}`);
    }else{
        console.log(`El costo de la cita es S/. 50.00`);
        TOT=TOT+50;
        console.log(`El costo total de tratamientos a la fecha es S/. ${TOT}`);
    }


}
console.log(`Fin del tratamiento`);
console.log(`El número total de citas es ${NC}`);
console.log(`El costo total final del tratamientos es S/. ${TOT}`);

        