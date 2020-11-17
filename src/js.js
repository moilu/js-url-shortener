

const API_SHRT  = 'https://api-ssl.bitly.com/v4/shorten';
let longLink    = document.querySelector('input');
const shrtbtn   = document.querySelector('.button');
const links     = document.querySelector('.shorten-links');



const shorten_link = async( API, Link ) => {
    try {

       const resp = await fetch( API, {      
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer {c17b09293fe05f9067f315891f892bed1a3778c3}',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ "long_url": Link, "domain": "bit.ly", "group_guid": "Free: moilu" })
                    })                    
                            if( !resp.ok ) throw 'No se pudo realizar la petición';

                            const { link } = await resp.json();
                    
                            return { link };
                        
        
                        } catch ( err ) {
                            throw err;
                        }
 return                
}

const linkHtml = ( longLink, shrtLink ) => {

    const html = `
        
        <a>${ longLink }</a>
        <hr>
        <a>${ shrtLink }</a>
    `
    const divLink = document.createElement('div');

    divLink.innerHTML = html;

    links.append(divLink);
}

shrtbtn.addEventListener('click', async() => {
    const shrtLink = await shorten_link( API_SHRT, longLink );
    linkHtml( longLink, shrtLink );
});