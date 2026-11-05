// People shown in the family section of the Nosotros page.
// To add a photo, put the image in public/team/ and set `photo` to its file name.

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  /** File name in public/team/, e.g. 'pablo-perez.jpg'. Initials are shown when missing. */
  photo?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Pablo Pérez',
    role: 'Cofundador y susurrador de árboles en jefe',
    bio: 'Pablo viene de una familia de guardianes de árboles. Nació y creció en Santiago, pero sus raíces están en La Araucanía, en el campo familiar a las afueras de Lautaro, donde su padre plantó más de mil árboles. Allí, siguiendo sus pasos, aprendió todo lo que un árbol regala: una tierra más sana, una sombra fresca para refugiarse del sol de verano y una belleza que despierta asombro. Hoy, junto a Jaclyn y sus tres hijos, siembra para que otros también puedan vivirlo.',
    photo: 'pablo-perez.jpg',
  },
  {
    name: 'Jaclyn Karnowski',
    role: 'Cofundadora y socia directora',
    bio: 'Nacida en Michigan y amante de la naturaleza, Jaclyn recorrió como mochilera Torres del Paine, Cochamó y Pucón, y se enamoró de los paisajes del sur de Chile y de su biodiversidad única. Fue profesora de matemáticas y trabajó en startups tecnológicas. Hoy, junto a Pablo y sus tres hijos, pone todo lo aprendido al servicio del ciclo de vida de los árboles: recolectar sus semillas, verlas germinar y acompañarlas hasta que echan raíces en su nuevo hogar.',
    photo: 'jaclyn-karnowski.jpg',
  },
];
