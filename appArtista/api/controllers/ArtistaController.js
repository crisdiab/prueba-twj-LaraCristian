/**
 * ArtistaController
 *
 * @description :: Server-side logic for managing Artistas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	crearArtista:function (req,res) {
    var parametros = req.allParams();
    console.log(parametros);

    console.log('Metodo:', req.method);
    if (req.method == 'POST') {
      if (parametros.nombre && parametros.estilo && parametros.paisResidencia) {
        //creo el usuario
        console.log('Va a crear el artista.')
        Artista.create({
          nombre: parametros.nombre ,
          estilo: parametros.estilo,
          paisResidencia: parametros.paisResidencia
        }).exec(function (error, usuarioCreado) {
          if (error) {
            return res.view('error', {
              title: 'Error',
              error: {
                descripcion: 'hubo un error enviando los parametros:',

                url: '/crearUsuario'
              }
            });
          }
          sails.log.info('Se creo el usuario: ', usuarioCreado);

          Artista.find().exec(function (error, usuariosEncontrados) {
            if (error) return res.serverError()
            sails.log.info(usuariosEncontrados);
            return res.view('Artistas/ListarArtistas', {
              title: 'Lista de Artistas',
              artistas: usuariosEncontrados
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
            url: '/crearArtista'
          }
        });
      }
    } else {
      console.log('POST');
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/crearArtista'
        }
      });
    }
  },
  editarArtista: function (req, res) {

    var parametros = req.allParams();
    if (req.method == 'POST') {
      if (parametros.nombre && parametros.estilo && parametros.id&& parametros.paisResidencia) {
        //creo el usuario
        console.log('Va a actualizar el usuario.')
        Artista.update({
          id: parametros.id
        }, {
          nombre: parametros.nombre,
          estilo: parametros.estilo,
          paisResidencia: parametros.paisResidencia
        }).exec(function (error, usuarioCreado) {
          if (error) {
            return res.view('error', {
              title: 'Error',
              error: {
                descripcion: 'hubo un error enviando los parametros:',

                url: '/crearArtista'
              }
            });
          }
          sails.log.info('Se actualizo el usuario: ', usuarioCreado);

          Artista.find().exec(function (error, usuariosEncontrados) {
            if (error) return res.serverError()
            sails.log.info(usuariosEncontrados);
            return res.view('Artistas/ListarArtistas', {
              title: 'Lista de Artistas',
              artistas: usuariosEncontrados
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
            url: '/crearArtista'
          }
        });
      }
    } else {
      console.log('POST');
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/crerArtista'
        }
      });
    }

  }
};

