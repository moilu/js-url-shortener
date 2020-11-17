
const submitButton = document.querySelector('#submit');

let long_link ;


const short  = ( long_link ) => {
    
    fetch( 'https://api.shrtco.de/v2/shorten?url=' + long_link )
        .then( response  => {return response.json()})
        .then( response => {
             const shortLink = response.result.short_link
             return shortLink;
        })
        .then( shortLink => {
            console.log(shortLink);
        })
}

document.querySelector('form').onsubmit = async () => {

    long_link = document.querySelector('#long_link').value;

    short( long_link );

    return false;
}









