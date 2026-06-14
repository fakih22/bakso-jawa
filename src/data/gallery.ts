export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: string; // e.g. "col-span-2 row-span-2"
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'interior',
    src: 'https://i.pinimg.com/1200x/09/ed/90/09ed90def15df76a61e16fc3b5c4e72b.jpg',
    alt: 'A wide angle premium cinematic photograph of the BaksoJawa restaurant interior',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 'steam',
    src: 'https://i.pinimg.com/1200x/c4/b2/27/c4b227b3250b4ef1a9bff97bae4fd404.jpg',
    alt: 'Extreme close-up of steam rising from a hot bowl of bakso',
  },
  {
    id: 'tray',
    src: 'https://i.pinimg.com/736x/5f/bc/4d/5fbc4dbe2c182ef03b1b0cb0fcec81ec.jpg',
    alt: 'A top-down aesthetic shot of a tray holding various bowls of different bakso types',
  },
  {
    id: 'sharing',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUZpChwcLqa6TYbqxui9o1462yCN1rJULy160G_04sxXpA1GQMeUF4GNQNi8kasQQvw-SHSysgkocgfMXVfSUcNZ8uOG-ecLhQ1sWanBtlcf67gg63_eDeRCUQHxiLq5vrEotKqtFnaFmT3gmcndvc9ZIzThTYceZbAkOhoKLzy7wwFYfIboqLDcQcM30o70Lk0wxEjWbqUeU8Lu7G6XRk5FoGSxR6Wg1GwsaAdsg7VxZ4uoT0zNuW9vYFnSmmcT73BXPcsmEtXA',
    alt: 'A warm, emotional close-up shot of two people sharing a meal of bakso',
    span: 'col-span-2',
  },
];
