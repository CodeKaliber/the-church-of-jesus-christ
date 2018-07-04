import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Temple from '../img/templeIcon.png';
import './article.css';

class Header extends Component {
  render() {
    return (
            <header>
                <div className="headPlace">
                    <div className="headChurchIcon">
                        <img src={Temple} alt='Temple PNG Pic' />
                        The Church of Jesus Christ of Latter-day Saints
                    </div>
                    {/* Header Links Start */}
                    <div className="navPlace">
                        <div id="menu-icon"></div>
                        <ul> {/*Start of unordered list */}
                            <Link to={"/"}><li>ARTICLE</li></Link>
                            <Link to={"/Title"}><li>TILE</li></Link>
                        </ul> {/*End of unordered list*/}
                    </div>
                    {/* Header Links End */}
                </div>
            </header>
    );
  }
}

export default Header;