export interface Empleado {
    id?: number;
    cedula?: number;
    nombre?: string;
    correo?: string;
    nacimiento?: string | Date;
    sexo?: number;
    area?: string;
    cargo?: string;
    ingreso?: string | Date;
}