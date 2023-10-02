const {nameCampus} = require('./information');
const cowsay  =  require ( "cowsay" ) ;

console. log ( cowsay . say ( { 
    text : `Je suis un wilder ${nameCampus.name} et je viens de ${nameCampus.campus}`, 
    e : "oO" , 
    T : "U " 
} ) ) ;
