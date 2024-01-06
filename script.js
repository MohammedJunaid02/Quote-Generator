var category = 'happiness';
const quote=document.getElementById('quote');
const author=document.getElementById('author');

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'rtECeH4FV4U8OjCu9SXrSg==eM66htArYK0DFE6A'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        var firstItem = result[0];

        let quotes = firstItem.quote;
        let authors = firstItem.author;

        // Update HTML content dynamically
        quote.innerHTML = quotes || 'No quote available';
        author.innerHTML = authors ? '- ' + authors : 'Unknown author';
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

function tweet()
{
    let tweetText = encodeURIComponent(quote.innerHTML + '\n \t\t\t\t\t\t\t' +'\t' + author.innerHTML);
    window.open("https://twitter.com/intent/tweet?text=" + tweetText,"Tweet Window","width=700,height=400");
}


