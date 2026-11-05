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
    // TODO: replace with Pablo's bio.
    bio: 'Biografía pendiente.',
    photo: 'pablo-perez.jpg',
  },
  {
    name: 'Jaclyn Karnowski',
    role: 'Cofundadora y socia directora',
    // TODO: replace with Jaclyn's bio.
    bio: 'Biografía pendiente.',
  },
];
