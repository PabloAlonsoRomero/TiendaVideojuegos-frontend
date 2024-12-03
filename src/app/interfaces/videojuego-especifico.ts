export interface IVideojuegoEspecifico {
    _id: string;
    titulo: string;
    descripcion: string;
    genero: {nombre: string}[];
    precio: { $numberDecimal: string }
    desarrollador: { nombre: string };
    distribuidor: { nombre: string };
    plataformas: { nombre: string }[];
    fecha_lanzamiento: string;
    imagenes: string[]
    video_url: string;
    calificacion_promedio: { $numberDecimal: string };
    estado: boolean;
}
