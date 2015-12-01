function MapLoader() {
    this.map;
    this.str;
}

/**
 *  This function load every element of the map into the variable 'map'.
 *  By the time this function will become more complexe to load every aspect of each element.
 *  For the moment all the element are eqqual except the sprite.
 */


//remplacement de la BDD :/
function apply_effect(map, effect_name){
    if (effect_name=="gravity")
    {
        //liste des effets à appliquer
        game.physics.arcade.enable(map);
        map.body.collideWorldBounds = true;
        map.body.immovable = false;
        map.body.gravity.y = 300;
        map.body.drag.x = 100;
        //DEBUG
        console.log("gravity loaded");
    }
    else if (effect_name=="sticky")
    {
        //liste des effets à appliquer
        map.body.immovable = true;
        //DEBUG
        console.log("sticky loaded");
    }
    return map;
}

MapLoader.prototype.load = function(platforms) {
    var data = localStorage.getItem('level')
    this.str = JSON.parse(data);
    var i = 0;

    while (i < this.str.length){
        //DEBUG
        //type
        console.log(this.str[i]);
        //x
        console.log(this.str[i+1]);
        //y
        console.log(this.str[i+2]);
        //effet
        console.log(this.str[i+3]);
        //ajout des sprites
        this.map = platforms.create(this.str[i + 1], this.str[i + 2], this.str[i]);
        //attribution des effets this.str[i+3]
        this.map = apply_effect(this.map, this.str[i+3]);
        //mise a l'echelle
        this.map.scale.setTo(0.5, 0.5);
        //incrementation par 4 (4 propriétés en mémoire)
        i += 4;
    }
    return this.map;
};