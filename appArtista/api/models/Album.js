/**
 * Album.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idArtista:{
      model:'Artista',
      required:true
    },
    nombre:{
      type:'string',
      required:true
    },
    fechaLanzamiento:{
      type:'date',
      required:true
    },
    UrlPortada:{
      type:'string',
      defaultsTo:'https://www.google.com.ec/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwijiuj16qzSAhWF4CYKHb5kC_0QjRwIBw&url=http%3A%2F%2Fwww.europapress.es%2Fciencia%2Fastronomia%2Fnoticia-pruebas-region-desconocida-disco-alumbro-sistema-solar-20150318131401.html&psig=AFQjCNEtimfExCqXMZ3AzHA4eWya-ajdIA&ust=1488166628456806'
    }
  }
};

