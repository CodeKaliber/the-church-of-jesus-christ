import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import HISTORIC from '../img/historicNaming.png';
import './article.css';

class Title extends Component {
    constructor() {
        super();
        this.state = {
            historyVideo: <iframe src="https://www.youtube.com/embed/jz9DVB42AA4" title='Video' frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        }
    }

    startVideo(e) {
        this.setState({
        historyVideo: <iframe src="https://www.youtube.com/embed/jz9DVB42AA4?autoplay=1'" title='Video' frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        });
    }

  render() {
    return (
        <div>
        
            <Header/>
          
            <section className="full-width">
                <div className='titleContainer'>
                    <div className='titleHistoricText'>
                        <button onClick={this.startVideo.bind(this)}>
                        <img src={HISTORIC} alt="images"/>
                        </button>
                        
                        <div className='titleHistoricBlue'>News Release</div>
                        <div className='titleHistoricBig'>
                            University of Utah Names Historic
                            Building After President Monson
                        </div>
                        <div className='titleHistoricSmall'>
                            A historic mansion in downtown Salt Lake City has been
                            renamed the Thomas S. Monson Center after the current
                            president of The Church of Jesus Christ of Latter-day Saints
                        </div>
                    </div>
                
                    <div className='titleLowerText'>
                         { this.state.historyVideo }
                         <div className='titleHistoricBlue'>News Release</div>
                         <div className='titleHistoricBig'>
                            University of Utah Names Historic
                            Building After President Monson
                        </div>
                        <div className='titleHistoricSmall'>
                            A historic mansion in downtown Salt Lake City has been
                            renamed the Thomas S. Monson Center after the current
                            president of The Church of Jesus Christ of Latter-day Saints
                        </div>
                    </div>
                </div>
          </section>
          
          <Footer/>

        </div>
    );
  }
}

export default Title;