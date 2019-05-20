const axios = require('axios')
const cheerio = require('cheerio')

module.exports = async function createSywac (opts) {
  opts = opts || {}

  if (opts.diag === true) {
    const response = await axios.get(
      'https://sudomod.com/forum/viewforum.php?f=38'
    )
    if (response.status === 200) {
      const html = response.data
      const $ = cheerio.load(html)
      const $topics = $('.topictitle')
      const topicsWithLinks = $topics.map(function (i, el) {
        // this === el
        // TODO: Maybe get the date posted, the last post, the count of posts/replies
        // const $parent = $topics.parent();
        return {
          title: $(this).text(),
          link: `https://sudomod.com/forum${$(this).attr('href').substring(1)}`
        }
      }).get()
      console.log(topicsWithLinks)
      return topicsWithLinks
    }
  }
}
