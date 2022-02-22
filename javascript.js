let apiquote = [];

const quote = document.getElementById('quotehere');
const quoteby =document.getElementById('quoteby');
const tweet =document.getElementById('tweet');
const nextquote = document.getElementById('next-Quote');

function newQuote(){
    const randomquote = apiquote[Math.floor(Math.random() * apiquote.length) ]
    // console.log(randomquote)
    quote.innerText=randomquote.text
    quoteby.innerText= `~ ${randomquote.author}`

    nextquote.addEventListener('click', newQuote)

    // if(randomquote.author=''){
        //     quoteby.innerText= 'Unknown'
        // }else{
            //     quoteby.innerText= randomquote.author
            // }
            
        }
        
        // get quote from api
        async function getQuote() {
    const apiURL = 'https://type.fit/api/quotes';
    
    try {
        const response = await fetch(apiURL); 
        apiquote = await response.json();
        newQuote()
        
    } catch (error) {
        newQuote()
        console.log('error getting quote', error)
    }
}

// nextquote.addEventListener('click', getQuote)

getQuote()


    // const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    // const apiURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';