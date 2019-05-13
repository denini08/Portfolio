import React, { Component} from 'react';

import './home.css';

import Navigation from '../navigation/navigation';

import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';

export default class Home extends Component {
  render() {
    return (
        <div className='box'>
          <div className='box-background'>
            <Navigation />

            <div className='box-content'>
              <h1 className='content-title'>
                Hey, I'm <br/> <strong>Walter</strong>
              </h1>

              <h2 className='content-description'>
                Padawan at the art of software development and an enthusiast in data science
              </h2>
            </div>

            <div className='box-footer'>
              <div className='box-social'>
                <a href='https://www.linkedin.com/in/walter-hr' target='_blank' rel='noopener noreferrer'>
                  <FaLinkedinIn/> <span>Linkedin</span>
                </a>

                <a href='https://github.com/Sphinxs' target='_blank' rel='noopener noreferrer'>
                  <FaGithubAlt/> <span>Github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
