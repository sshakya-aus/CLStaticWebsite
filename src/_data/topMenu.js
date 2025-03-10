// import the contentful client
const client = require('./contentful').client;

module.exports = async () => {
    try{
      const entries = await client.getEntries({
        content_type: 'topMenuContainer'
    });

      return entries.items.map((entry) => {


        return {
            fields: entry.fields
        };
      });
    } catch (error) {
        console.error("failed to fetch entries from contentful", error);
        return;
    }
}
