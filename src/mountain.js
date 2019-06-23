import Heading from './components/heading/heading.js';
import MountainImage from './components/mountain-image/mountain-image.js';
import React from 'react';

const heading = new Heading();
heading.render('mountain');

const mountainImage = new MountainImage();
mountainImage.render();