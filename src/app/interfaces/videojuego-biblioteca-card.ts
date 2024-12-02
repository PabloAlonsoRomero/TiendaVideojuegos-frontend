export interface IVideojuegoBibliotecaCard {
    _id: string;
    titulo: string;
    descripcion: string;
    genero: {nombre: string}[];
    desarrollador: { nombre: string };
    distribuidor: { nombre: string };
    imagen: string;
}
