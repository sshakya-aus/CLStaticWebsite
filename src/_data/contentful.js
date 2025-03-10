require('dotenv').config();

const contentful = require('contentful');
const contentfulClient = contentful.createClient({
    space: process.env.CTFL_SPACE_ID,
    accessToken: process.env.CTFL_DELIVERY_ACCESS_TOKEN
});

exports.client = contentfulClient;