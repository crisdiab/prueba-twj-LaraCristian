/**
 * RutasController
 *
 * @description :: Server-side logic for managing rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  home: function (req, res) {

    // res.view(String: Nombre vista, Datos JSON)
    return res.view('Artistas/Home', {
      titulo: 'Inicio',
      title: 'Inicio',

    })
  },

  crearArtista: function (req, res) {
    return res.view('Artistas/crearArtista', {
      title: 'Crear Usuarios'
    })
  },
  editarArtista: function (req, res) {

    var parametros = req.allParams();
    console.log(parametros);
    if (parametros.id) {

      Artista.findOne({
        id: parametros.id
      }).exec(function (error, usuarioEncontrado) {
        if (error) return res.serverError()
        return res.view('Artistas/editarArtista', {
          title: 'Editar usuario - ' + usuarioEncontrado.nombre,
          artista: usuarioEncontrado
        })
      });

    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'No existe el ID'
        }
      });
    }
  },
  listarArtista: function (req, res) {

    Artista.find().exec(function (error, usuariosEncontrados) {
      if (error) return res.serverError()
      sails.log.info(usuariosEncontrados);
      return res.view('Artistas/ListarArtistas', {
        title: 'Lista de Artistas',
        artistas: usuariosEncontrados
      })
    });
  },

  crearAlbum: function (req, res) {

    var parametros = req.allParams();
    console.log('parametros que llegan a crear album',parametros);
    if (parametros.id) {

      Artista.findOne({
        id: parametros.id
      }).exec(function (error, usuarioEncontrado) {
        console.log('encontro este puto usuario',usuarioEncontrado)
        if (error) return res.serverError()
        return res.view('albums/crearAlbum', {
          title: 'crear album de  usuario - ' + usuarioEncontrado.nombre,
          artista: usuarioEncontrado
        })
      });

    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'No existe el ID'
        }
      });
    }

    // comentario

  },
  editarAlbum: function (req, res) {

    var parametros = req.allParams();
    console.log(parametros);
    if (parametros.id) {

      Album.findOne({
        id: parametros.id
      }).exec(function (error, usuarioEncontrado) {
        if (error) return res.serverError()
        return res.view('albums/editarAlbum', {
          title: 'Editar usuario - ' + usuarioEncontrado.nombre,
          album: usuarioEncontrado
        })
      });

    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'No existe el ID'
        }
      });
    }
  },
  listarAlbum: function (req, res) {

    Album.find().exec(function (error, usuariosEncontrados) {
      if (error) return res.serverError()
      sails.log.info(usuariosEncontrados);
      return res.view('albums/ListarAlbums', {
        title: 'Lista de Albums',
        albums: usuariosEncontrados
      })
    });
  },
};

