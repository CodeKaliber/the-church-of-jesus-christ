import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import PIC1 from '../img/photo01.jpg';
import PIC2 from '../img/photo02.jpg';
import PIC3 from '../img/photo03.jpg';
import PIC4 from '../img/photo04.jpg';
import PIC5 from '../img/photo05.jpg';
import PIC6 from '../img/photo06.jpg';
import PIC7 from '../img/photo07.jpg';
import PIC8 from '../img/photo08.jpg';
import PIC9 from '../img/photo09.jpg';
import PIC10 from '../img/photo10.jpg';
import './article.css';

class Article extends Component {
    constructor() {
        super();
        this.state = {
            titleImage: 'Mountain View',
            mainImage: PIC1,
            titeCap: 'Clear Running Water'
        }
    }

    changePIC1(e) {
        this.setState({
            titleImage: 'Mountain View',
            mainImage: PIC1,
            titeCap: 'Clear Running Water'
        })
    }
    changePIC2(e) {
        this.setState({
            titleImage: 'City Gardens',
            mainImage: PIC2,
            titeCap: 'Beautiful City Rivers'
        })
    }
    changePIC3(e) {
        this.setState({
            titleImage: 'Snowy Highways',
            mainImage: PIC3,
            titeCap: 'Cold Windy Roads'
        })
    }
    changePIC4(e) {
        this.setState({
            titleImage: 'Roads Over Waterways',
            mainImage: PIC4,
            titeCap: 'Great Rivers are A Challenge to Cross'
        })
    }
    changePIC5(e) {
        this.setState({
            titleImage: 'High Mountain Rockies',
            mainImage: PIC5,
            titeCap: 'Red Boats are Used to Support Rescues'
        })
    }
    changePIC6(e) {
        this.setState({
            titleImage: 'Potography From Space',
            mainImage: PIC6,
            titeCap: 'Rivers So Large They Can Be Seen From Space'
        })
    }
    changePIC7(e) {
        this.setState({
            titleImage: 'Aerial Photography',
            mainImage: PIC7,
            titeCap: 'Great Bridges of the East'
        })
    }
    changePIC8(e) {
        this.setState({
            titleImage: 'Massive Fog Banks',
            mainImage: PIC8,
            titeCap: 'The Fog Rolls In Thick In The Rockies'
        })
    }
    changePIC9(e) {
        this.setState({
            titleImage: 'The Great Open West',
            mainImage: PIC9,
            titeCap: 'Rivers Running Through The Great Mid West'
        })
    }
    changePIC10(e) {
        this.setState({
            titleImage: 'The Great Italy',
            mainImage: PIC10,
            titeCap: 'Large Rivers Adorn The City of Italy'
        })
    }

  render() {
    return (
        <div>
        
            <Header/>
          
            <section className="full-width">
                <div className='container'>
                    <div className='topText'>{this.state.titleImage}</div>
                    <img src={this.state.mainImage} alt="images"/>
                    <div className='bottomText'>{this.state.titeCap}</div>
                    <div className='thumbnail'>
                        <button onClick={this.changePIC1.bind(this)}>
                        <img src={PIC1} alt="images"/>
                        </button>
                        <button onClick={this.changePIC2.bind(this)}>
                        <img src={PIC2} alt="images"/>
                        </button>
                        <button onClick={this.changePIC3.bind(this)}>
                        <img src={PIC3} alt="images"/>
                        </button>
                        <button onClick={this.changePIC4.bind(this)}>
                        <img src={PIC4} alt="images"/>
                        </button>
                        <button onClick={this.changePIC5.bind(this)}>
                        <img src={PIC5} alt="images"/>
                        </button>
                        <button onClick={this.changePIC6.bind(this)}>
                        <img src={PIC6} alt="images"/>
                        </button>
                        <button onClick={this.changePIC7.bind(this)}>
                        <img src={PIC7} alt="images"/>
                        </button>
                        <button onClick={this.changePIC8.bind(this)}>
                        <img src={PIC8} alt="images"/>
                        </button>
                        <button onClick={this.changePIC9.bind(this)}>
                        <img src={PIC9} alt="images"/>
                        </button>
                        <button onClick={this.changePIC10.bind(this)}>
                        <img src={PIC10} alt="images"/>
                        </button>
                    </div>
                
                    <div className='lowerText'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat pharetra
                        cursus. Nam fermentum tortor nisl, dignissim tempor libero commodo ac. Proin pulvinar
                        purus mi, quis iaculis sapien condimentum sit amet. Phasellus facilisis erat eget 
                        acinia sollicitudin. Etiam rhoncus molestie viverra.
                        <div className='lowerVidBox' >
                            <iframe src='//players.brightcove.net/710874264001/default_default/index.html?videoId=1838710809001' title='Video' allowFullScreen frameBorder='0'></iframe>
                            <div className='lowerVidText'>
                                Christ's Forgiveness<br/>
                                Go and Sin no more...
                            </div>
                        </div>
                        Aliquam pharetra augue massa, sed sagittis mauris fringilla id. Cras sed quam
                        nec dolor venenatis vulputate eu id sapien. Nulla facilisi. Donec eget fermentum
                        est.
                        <br/><br/>
                        Vivamus tempor elit felis, ac auctor erat rutrum in Fusce pulvinar dapibus luctus.
                        Fusce at risus congue enim lacinia pharetra eu sit amet metus. Aliquam erat volutpat.
                        Phasellus vel dolor eget lacus mollis porttitor. Nam aliquam neque id turpis porta, ac
                        efficitur massa venenatis. Pellentesque habitant morbi tristique senectus et netus et
                        malesuada fames ac turpis egestas. Mauris malesuada lectus sed nibh aliquet facilisis.
                        Maecenas efficitur risus arcu, sit amet eleifend nulla molestie nec. Nam dapibus id
                        lectus sed scelerisque. Pellentesque blandit elit lectus, id ultrices urna molestie
                        in. Curabitur elementum est et urna tempus, quis malesuada ipsum hendrerit.
                        Sed non ipsum odio. Donec turpis ipsum, efficitur ut ligula a, ultrices pretium eros.
                        Mauris egestas lobortis neque. Nullam auctor mauris id consequat dignissim. Praesent
                        maximus lectus vitae pulvinar viverra. In lectus sapien, faucibus eget efficitur sed,
                        lobortis eu purus. Mauris congue magna nec mi venenatis, vitae aliquet quam posuere.
                        Proin tincidunt ac velit nec finibus. Morbi dignissim eu lacus id commodo. Vivamus
                        vel dictum metus. Donec tempus mauris augue. Proin malesuada nulla ac massa posuere,
                        ac malesuada dui maximus. Vestibulum eu vulputate nisl. Aliquam id ex massa.
                        Nunc at rutrum nunc. Sed condimentum dapibus diam in mattis. Suspendisse aliquam
                        interdum lacus in aliquet. Nam ac mattis metus. Phasellus faucibus eu enim sed
                        consectetur. Aliquam nec lorem varius, posuere enim ac, mattis arcu. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Sed rutrum consectetur lacus vel 
                        ulvinar. Donec nec sapien quis quam volutpat interdum. Mauris bibendum euismod
                        lacus, ut rutrum lacus euismod ac. Sed ultrices aliquam gravida. Sed et lectus eget
                        lacus semper volutpat sit amet convallis nulla. Fusce porttitor et orci in sagittis.
                        Aliquam ornare, turpis eu rutrum faucibus, turpis mi molestie lacus, nec finibus
                        ante nulla nec velit.
                        <br/><br/>
                        Donec tempus maximus augue, vel tincidunt nibh ornare eu. Cras scelerisque quis
                        leo eget fermentum. Aenean tempus venenatis sapien, vel tincidunt eros imperdiet 
                        on. Maecenas vulputate placerat aliquet. Donec dapibus est vitae nunc fringilla,
                        sit amet aliquam nulla tincidunt. Quisque urna dui, efficitur non sollicitudin vitae,
                        posuere eget quam. Sed tincidunt in mi id mollis. Fusce sed facilisis odio. Nunc
                        rutrum elementum risus, et congue est vestibulum eget. Vestibulum ultricies aliquet
                        erat, sodales mollis dolor pharetra nec. Quisque accumsan consequat purus, id
                        sollicitudin ipsum accumsan ut. Mauris mattis pharetra maximus. Donec placerat
                        facilisis justo dapibus vulputate. Nunc condimentum eget tortor ac lobortis. Ut
                        semper auctor luctus. Maecenas libero augue, commodo in congue ut, molestie et neque.
                        Praesent vitae ligula fringilla, ullamcorper sapien at, condimentum nisi. Nunc id
                        laoreet odio. Donec sollicitudin ipsum a ullamcorper varius. Vivamus in accumsan nisl.
                        Nulla consectetur, eros eget interdum convallis, ligula sem hendrerit nulla, nec semper
                        felis ante auctor massa. Aenean elementum, nunc a volutpat tristique, sem nibh dictum
                        magna, sed ultricies odio sem at risus. Nulla pharetra sem vitae elit rhoncus, a
                        pharetra metus venenatis. Proin vitae neque luctus, semper metus at, molestie leo.
                        Vivamus purus augue, interdum nec felis et, suscipit ornare nunc. Nulla in odio
                        vulputate, faucibus quam ut, accumsan velit. Praesent ultricies velit blandit vehicula
                        rutrum. Integer placerat auctor neque in lacinia. Curabitur dignissim interdum varius.
                        Sed auctor lacinia eros, condimentum euismod felis rutrum ac.
                        In hac habitasse platea dictumst. Proin ut dictum mauris. Mauris sed purus at turpis
                        condimentum blandit vitae quis turpis. Vestibulum vehicula, ipsum vel elementum 
                        ibendum, nibh enim sollicitudin arcu, id sodales elit ligula quis metus. Cras rutrum 
                        elis lorem, eu dapibus ante lobortis non. Vestibulum finibus imperdiet est ut tristique.
                        Vivamus sed aliquam est. Sed sagittis id ipsum ut rutrum. Vestibulum pharetra semper
                        enim. Morbi odio libero, gravida quis felis sed, molestie viverra turpis. Sed tellus
                        urna, sollicitudin hendrerit velit a, convallis consequat urna. Vestibulum id leo 
                        ed sapien aliquam placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc accumsan non velit vitae dignissim.
                        <br/><br/><br/>
                        <div className='pLineStyle'>
                        Sub-heading
                        </div>
                        <br/>
                        Pellentesque gravida est vel lorem congue tincidunt. Fusce consequat purus nibh,
                        non eleifend mi semper suscipit. Duis accumsan tristique ipsum, id posuere leo
                        dapibus eu. Proin fermentum ipsum vel tristique accumsan. Phasellus sed faucibus
                        neque. In fermentum magna mauris. Suspendisse in magna quis justo tincidunt aliquet
                        eu eu turpis. Aliquam lobortis neque nec augue efficitur fermentum. Nulla facilisi.
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis pellentesque 
                        utrum velit eu aliquet. Curabitur volutpat elit erat, vitae dignissim ante mattis vel.
                        Suspendisse ut consequat neque, non fringilla ipsum. Etiam id lorem sed velit
                        volutpat tristique. Maecenas eu enim lectus. Nulla ac metus vitae augue efficitur
                        viverra nec et purus. Maecenas ornare ultrices quam sit amet auctor. In urna libero,
                        suscipit sed cursus ut, congue in ligula. Ut non feugiat mi. In hac habitasse platea 
                        ictumst. Morbi vel purus massa. Integer molestie neque libero. Sed quam est, 
                        mperdiet id mauris in, dictum dignissim sapien. Praesent luctus augue faucibus
                        scelerisque bibendum. Cras sagittis vestibulum ante, ut molestie arcu lobortis
                        eget. Etiam suscipit ex ut arcu tincidunt convallis. Aliquam ac nisi sit amet 
                        assa consectetur porta sit amet placerat mi.
                        <br/><br/>
                        In hac habitasse platea dictumst. Donec at rhoncus ipsum, eget cursus nisi. 
                        ras fermentum lectus ut bibendum tempus. Etiam luctus tincidunt interdum.
                        Curabitur lorem tortor, tincidunt varius massa et, dapibus aliquam tellus.
                        Ut pharetra congue ornare. Sed volutpat mi sed diam venenatis, non eleifend
                        ex sagittis. Nullam id odio et nisi pharetra volutpat.
                    </div>
                </div>
          </section>
          
          <Footer/>

        </div>
    );
  }
}

export default Article;