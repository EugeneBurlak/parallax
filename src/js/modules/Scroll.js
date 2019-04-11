class Scroll{
    constructor(options){
        this.options = options.styles || false;
        this.commonStyles = options && options.commonStyles ? options.commonStyles : false;
        this.container = options && options.container ? document.querySelector(options.container) : null;
        this.items = options && options.items ? options.items : [];
        this.itemsDom = [];

        this.init();
    }
    bindStyles(item, styles){
        if(!item || !styles) return false;
        for(let style in styles){
            item.style[style] = styles[style];
        }
    };

    createItem(item){
        let tag = item.tag || 'div',
            element = document.createElement(tag);
        if(item.className) element.setAttribute('class', item.className);
        this.bindStyles(element, this.commonStyles);
        this.bindStyles(element, item.styles);
        this.itemsDom.push(element);
        return element;
    };

    build(){
        let items = this.items,
            container = this.container,
            self = this;
        self.bindStyles(container, self.options);
        if(!items.length) return false;
        items.forEach(function(item, index){
            item.index = index;
            container.appendChild(self.createItem(item));
        });
    };

     addScrollEvent(){
        let container = this.container,
            itemsDom = this.itemsDom,
            items = this.items;
        window.addEventListener('scroll', function(event){
            let windowTop = this.pageYOffset,
                containerTop = container.offsetTop;
            if(windowTop >= containerTop){
                itemsDom.forEach(function(element, index){
                    let deep = items[index].deep,
                        inverst = items[index].inverst;
                    if(deep){
                        let transition = (windowTop - containerTop) / deep;
                        if(inverst) transition = transition * -1;
                        element.style.transform = 'translateY('+ transition +'px)';
                        element.style.webkitTransform = 'translateY('+ transition +'px)';
                    }
                });
            }
        });
    };

    init(){
        if(!this.container) return false;
        this.build();
        this.addScrollEvent();
    };
};

export default Scroll;