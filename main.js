const fetch = require('node-fetch')
require('dotenv').config()

// fetch(`https://api.notion.com/v1/pages/${process.env.PAGE_ID}`, {
//   headers: {
//     'Notion-Version': '2021-05-13',
//     'Authorization': `Bearer ${process.env.INTEGRATION_KEY}`
//   }
// })
//   .then(response  => response.json())
//   .then(data => console.log(data.properties.title.title))


fetch(`https://api.notion.com/v1/blocks/${process.env.PAGE_ID}/children`, {
  headers: {
    'Notion-Version': '2021-05-13',
    'Authorization': `Bearer ${process.env.INTEGRATION_KEY}`
  }
})
  .then(response  => response.json())
  .then(data => console.log(data))
