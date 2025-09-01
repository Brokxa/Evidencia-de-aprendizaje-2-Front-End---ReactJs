const { sequelize, Genero, Tipo, Director, Productora, Media } = require('../models');

async function seed() {
  try {
    await sequelize.sync({ force: true }); 

    
    const generos = await Genero.bulkCreate([
      { nombre: 'Acción', descripcion: 'Películas con escenas intensas, peleas y persecuciones', estado: 'Activo' },
      { nombre: 'Comedia', descripcion: 'Películas diseñadas para hacer reír al público', estado: 'Activo' },
      { nombre: 'Ciencia Ficción', descripcion: 'Películas con elementos futuristas, tecnología y espacio', estado: 'Activo' },
      { nombre: 'Drama', descripcion: 'Historias con alto contenido emocional y conflictos personales', estado: 'Activo' },
      { nombre: 'Terror', descripcion: 'Películas diseñadas para causar miedo y suspenso', estado: 'Activo' }
    ], { returning: true });

    
    const tipos = await Tipo.bulkCreate([
      { nombre: 'Película', descripcion: 'Producción cinematográfica de duración completa', estado: 'Activo' },
      { nombre: 'Serie', descripcion: 'Producción dividida en capítulos o temporadas', estado: 'Activo' }
    ], { returning: true });

    
    const directores = await Director.bulkCreate([
      { nombre: 'Christopher Nolan', estado: 'Activo' },
      { nombre: 'Quentin Tarantino', estado: 'Activo' },
      { nombre: 'Steven Spielberg', estado: 'Activo' }
    ], { returning: true });

    
    const productoras = await Productora.bulkCreate([
      { nombre: 'Warner Bros', estado: 'Activo' },
      { nombre: 'Paramount Pictures', estado: 'Activo' },
      { nombre: 'Netflix', estado: 'Activo' }
    ], { returning: true });

     await Media.bulkCreate([
      {
      serial: 'MOV-001',
      titulo: 'Inception',
      sinopsis: 'Un ladrón roba secretos del subconsciente durante los sueños.',
      url: 'https://www.imdb.com/title/tt1375666/',
      imagen: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg',
      año_estreno: 2010,
      generoId: generos.find(g => g.nombre === 'Ciencia Ficción').id,
      directorId: directores.find(d => d.nombre === 'Christopher Nolan').id,
      productoraId: productoras.find(p => p.nombre === 'Warner Bros').id,
      tipoId: tipos.find(t => t.nombre === 'Película').id
     },
     {
      serial: 'MOV-002',
      titulo: 'Pulp Fiction',
      sinopsis: 'Historias entrelazadas de criminales en Los Ángeles.',
      url: 'https://www.imdb.com/title/tt0110912/',
      imagen: 'https://m.media-amazon.com/images/I/71c05lTE03L._AC_SL1181_.jpg',
      año_estreno: 1994,
      generoId: generos.find(g => g.nombre === 'Acción').id,
      directorId: directores.find(d => d.nombre === 'Quentin Tarantino').id,
      productoraId: productoras.find(p => p.nombre === 'Paramount Pictures').id,
      tipoId: tipos.find(t => t.nombre === 'Película').id
     },
     {
      serial: 'SER-001',
      titulo: 'Stranger Things',
      sinopsis: 'Un grupo de niños descubre un mundo paralelo mientras buscan a su amigo desaparecido.',
      url: 'https://www.imdb.com/title/tt4574334/',
      imagen: 'https://m.media-amazon.com/images/I/81r+LN6gRdL._AC_SL1500_.jpg',
      año_estreno: 2016,
      generoId: generos.find(g => g.nombre === 'Ciencia Ficción').id,
      directorId: directores.find(d => d.nombre === 'Steven Spielberg').id, // ejemplo ficticio
      productoraId: productoras.find(p => p.nombre === 'Netflix').id,
      tipoId: tipos.find(t => t.nombre === 'Serie').id
     }
    ]);

    console.log(' Base de datos sembrada con ejemplos');
    process.exit();
  } catch (error) {
    console.error(' Error al ejecutar seed:', error);
    process.exit(1);
  }
}

seed();