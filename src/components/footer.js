import React, { Component } from 'react';
import './article.css';

class Footer extends Component {
  render() {
    return (
          <footer>
            <div className="top-footer">
                <ul>
                    <li><i className="fa fa-facebook">F</i></li>
                    <li><i className="fa fa-google-plus">G</i></li>
                    <li><i className="fa fa-twitter">T</i></li>
                    <li><i className="fa fa-youtube">Y</i></li>
                    <li><i className="fa fa-instagram">I</i></li>
                </ul>
            </div>
          </footer>
    );
  }
}

export default Footer;