class Parallax{

    constructor(options = {}){
        this.nameSpaces = {
            wrapper: options.wrapper || '.parallax',
            layers: options.layers || '.parallax-layer',
            deep: options.deep || 'data-parallax-deep'
        };
        this.init();
    };

    init(){
        const self = this,
            parallaxWrappers = document.querySelectorAll(self.nameSpaces.wrapper);
      	for(let i = 0; i < parallaxWrappers.length; i++){
            parallaxWrappers[i].addEventListener('mousemove', (e) => {
                let x = e.clientX,
                    y = e.clientY,
                    layers = parallaxWrappers[i].querySelectorAll(self.nameSpaces.layers);
                for(let j = 0; j < layers.length; j++){
                    let deep = layers[j].getAttribute(self.nameSpaces.deep),
                        disallow = layers[j].getAttribute('data-parallax-disallow'),
                        itemX = (disallow && disallow === 'x') ? 0 : x / deep,
                        itemY = (disallow && disallow === 'y') ? 0 : y / deep;
                    if(disallow && disallow === 'both') return;
                    layers[j].style.transform = 'translateX(' + itemX + '%) translateY(' + itemY + '%)';
                }
            });
      	}
    };
}

export default Parallax;