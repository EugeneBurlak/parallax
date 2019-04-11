import {MouseMove, Scroll} from './js/';

window.addEventListener('load', function(){
    new MouseMove();
    new Scroll({
        container: '.scroll-parallax',
        styles: {
            height: '100vh',
            position: 'relative'
        },
        commonStyles: {
            top: 0,
            left: 0,
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            width: '100%'
        },
        items: [{
            deep: 0,
            tag: 'div',
            className: 'first-layout',
            styles: {
                zIndex: 6,
                backgroundImage: 'url(https://raw.githubusercontent.com/EugeneBurlak/assets/master/scroll-parallax/bridge.png)'
            }
        },{
            deep: 5,
            tag: 'div',
            className: 'second-layout',
            styles: {
                zIndex: 5,
                backgroundImage: 'url(https://raw.githubusercontent.com/EugeneBurlak/assets/master/scroll-parallax/forest.png)'
            }
        },{
            deep: 2,
            tag: 'div',
            className: 'third-layout',
            styles: {
                zIndex: 4,
                backgroundImage: 'url(https://raw.githubusercontent.com/EugeneBurlak/assets/master/scroll-parallax/clouds.png)'
            }
        },{
            deep: 2.5,
            tag: 'div',
            className: 'four-layout',
            styles: {
                zIndex: 3,
                backgroundImage: 'url(https://raw.githubusercontent.com/EugeneBurlak/assets/master/scroll-parallax/mountain.png)'
            }
        },{
            deep: 2,
            tag: 'div',
            className: 'five-layout',
            styles: {
                zIndex: 2,
                backgroundImage: 'url(https://raw.githubusercontent.com/EugeneBurlak/assets/master/scroll-parallax/clouds4.png)'
            }
        },{
            deep: 7,
            tag: 'div',
            className: 'seven-layout',
            styles: {
                zIndex: 1,
                backgroundImage: 'url(https://raw.githubusercontent.com/EugeneBurlak/assets/master/scroll-parallax/clouds5.png)'
            }
        }]
    });

});