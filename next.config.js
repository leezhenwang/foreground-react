const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')//require('./img')
module.exports = () => withImages(withSass(withCSS()))