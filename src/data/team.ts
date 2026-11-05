// People shown in the "Equipo" section of the Nosotros page.
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
    bio: 'Pablo viene de una familia de guardianes de árboles. Nació y creció en Santiago, pero sus raíces están en La Araucanía, en el campo familiar a las afueras de Lautaro, donde su padre plantó más de mil árboles. Allí, siguiendo sus pasos, aprendió todo lo que un árbol regala: una tierra más sana, una sombra fresca para refugiarse del sol de verano y una belleza que despierta asombro. Hoy siembra para que otros también puedan vivirlo.',
    photo: 'pablo-perez.jpg',
  },
  {
    name: 'Jaclyn Karnowski',
    role: 'Cofundadora y socia directora',
    // TODO: replace with Jaclyn's bio.
    bio: 'Biografía pendiente.',
  },
];
