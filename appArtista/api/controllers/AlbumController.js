/**
 * AlbumController
 *
 * @description :: Server-side logic for managing Albums
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  crearAlbum:function (req,res) {

  var parametros = req.allParams();
  console.log(parametros);

  console.log('Metodo:', req.method);
  if (req.method == 'POST') {
    if (parametros.nombre && parametros.fechaLanzamiento && parametros.idArtista && parametros.UrlPortada) {
      //creo el usuario
      console.log('Va a crear el album.')
      Album.create({
        nombre: parametros.nombre ,
        fechaLanzamiento: parametros.fechaLanzamiento,
        idArtista: parametros.idArtista,
        UrlPortada:parametros.UrlPortada
      }).exec(function (error, usuarioCreado) {
        if (error) {
          return res.view('error', {
            title: 'Error',
            error: {
              descripcion: 'hubo un error enviando los parametros:',

              url: '/crearAlbum'
            }
          });
        }
        sails.log.info('Se creo el album: ', usuarioCreado);

        Album.find().populate('idArtista').exec(function (error, usuariosEncontrados) {
          if (error) return res.serverError()
          sails.log.info(usuariosEncontrados);
          return res.view('albums/listarAlbums', {
            title: 'Lista de Artistas',
            albums: usuariosEncontrados
          })
        });
      });

    } else {
      // bad Request
      console.log('NO PARAMETROS');
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'No envia todos los parametros',
          url: '/crearAlbum'
        }
      });
    }
  } else {
    console.log('POST');
    return res.view('error', {
      title: 'Error',
      error: {
        descripcion: 'Falla en el metodo HTTP',
        url: '/crearAlbum'
      }
    });
  }
},
  editarAlbum: function (req, res) {

    var parametros = req.allParams();
    if (req.method == 'POST') {
      sails.log.error('parametros',parametros)
      if (parametros.nombre && parametros.fechaLanzamiento && parametros.UrlPortada) {
        //creo el usuario
        console.log('Va a actualizar el usuario. con estos paramentro', parametros)
        Album.update({
          id: parametros.id
        }, {
          nombre: parametros.nombre,
          fechaLanzamiento: parametros.fechaLanzamiento,
          UrlPortada: parametros.UrlPortada
        }).exec(function (error, usuarioCreado) {
          if (error) {
            return res.view('error', {
              title: 'Error',
              error: {
                descripcion: 'hubo un error enviando los parametros:',

                url: '/crearAlbum'
              }
            });
          }
          sails.log.info('Se actualizo el usuario: ', usuarioCreado);

          Album.find().populate('idArtista').exec(function (error, usuariosEncontrados) {
            if (error) return res.serverError()
            sails.log.info(usuariosEncontrados);
            return res.view('albums/listarAlbums', {
              title: 'Lista de Artistas',
              albums: usuariosEncontrados
            })
          });

        });

      } else {
        // bad Request
        console.log('NO PARAMETROS');
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros',
            url: '/crearAlbum'
          }
        });
      }
    } else {
      console.log('POST');
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/crearAlbum'
        }
      });
    }

  }

};

