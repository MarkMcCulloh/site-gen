const axios = require("axios");

async function addDomainAlias(domainAlias) {
    // Get Netlify Site to read existing domain aliases
    const getSite = await axios(`https://api.netlify.com/api/v1/sites/${process.env.NETLIFY_SITE_ID}`, {
        headers: {
            Authorization: `Bearer ${process.env.NETLIFY_ACCESS_TOKEN}`,
        },
    });
    const site = getSite;
    // If Netlify Site does not have the domain alias we want to add
    if (!site.data.domain_aliases.includes(domainAlias)) {
        // Update the Netlify Site to include the domain alias we want to add
        test = await axios(`https://api.netlify.com/api/v1/sites/${process.env.NETLIFY_SITE_ID}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${process.env.NETLIFY_ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                domain_aliases: [
                    ...site.data.domain_aliases,
                    domainAlias,
                ],
            }),
        });

        console.log(test)
    }
}


addDomainAlias(process.argv[2]);
