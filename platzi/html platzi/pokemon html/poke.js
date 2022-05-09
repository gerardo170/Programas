var imagenes = [];
imagenes["pikachu"] = "pikachu.png"
imagenes["Ivysaur"] = "ivysaur.png"
imagenes["Blastoise"] = "Blastoise.png"

class Pokemon
{
  constructor(n, v, a)
  {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre];
  }
  talk()
  {
      alert(this.nombre);
  }
  mostrar()
  {
      document.write("<p>");
      document.body.appendChild(this.imagen);
      document.write("<strong>" + this.nombre + "</strong><br />");
      document.write("Vida: " + this.vida + "<br />");
      document.write("Ataque: " + this.ataque + "<hr />");
      document.write("</p>");
  }
}

var pikachu = new Pokemon("pikachu", 100, 30);
var Ivysaur = new Pokemon("Ivysaur", 120, 35);
var Blastoise = new Pokemon("Blastoise", 200, 40);

pikachu.mostrar();
Ivysaur.mostrar();
Blastoise.mostrar();

