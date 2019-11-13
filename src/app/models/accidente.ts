export interface Accidente {
    id?: number
    empleado?: number
    gravedad?: number
    fecha?: Date | string
    lugar?: string
    tipo?: number
    lesion?: number
    parte?: number
    agente?: number
    mecanismo?: number
    descripcion?: string
    incapacidad?: number
    diasincapacidad?: number
}