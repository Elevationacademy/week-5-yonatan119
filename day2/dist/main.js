// // const wordPromise = $.get('/randomWord')

// // wordPromise.then(function(word){
// //     const sentimentPromise = $.get('/sentiment/' + word)
// //     const synonymsPromise = $.get('/synonyms/' + word)

// //     Promise.all([sentimentPromise, synonymsPromise]).then(function(results){
// //         console.log(results)
// //     })
// //     }).catch(function(error){})


// // wordPromise
// // .then(function(word) {
// //     return $.get('/synonyms/' + word)
// // })
// // .then(function(synonyms){
// //     console.log(synonyms)
// // })

// // wordPromise
// // .then(function(word) {
// //     return $.get('/books/' + word)
// // })
// // .then(function(link){
// //     console.log(link)
// // })


// // $.get('/randomWord', function (word) {
// //     $.get(`/synonyms/${word}`, function (synonyms) {
// //         $.get(`/sentiment/${word}`, function (sentiment) {
// //             console.log(`
// //             The word ${word} has a 
// //             ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
// //             its synonyms are: ${synonyms}`)
// //         })
// //     })
// // })

// // let p = $.get('/randomWord')

// // p.then(function (word) {
// //     console.log(word)
// // })

// // let p = $.get('/sentiment/Ploy')
// // p.then(function(word){
// //     console.log(word)
// // })

// // $.get('/randomWord')
// //     .then(function (word) {
// //         return $.get(`/synonyms/${word}`)
// //     })
// //     .catch(function (error) { console.log(error) })
// //     .then(function (synonyms) {
// //         console.log(synonyms)
// //     })
// //     .catch(function (error) { console.log(error) })

// // $.get('/randomWord')
// //     .then(function(word){
// //         let synonymsPromise = $.get(`/synonyms/${word}`)
// //         let sentimentPromise = $.get(`/synonyms/${word}`)
// //         Promise.all([synonymsPromise, sentimentPromise])
// //             .then(function(results){
// //                 console.log(results)
// //             })
// //     })

//     // const printResults = function (word, synonyms, sentiment) {
//     //     console.log(`
//     //         The word ${word} has a 
//     //         ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//     //         its synonyms are: ${synonyms}`
//     //     )
//     // }
    
//     $.get('/randomWord')
//         .then(function (word) {
//             let booksPromise = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
//             Promise.all([booksPromise])
//                 .then(function (results) {
//                     const title = results[0].items[0].volumeInfo.title
//                     const description = results[0].items[0].volumeInfo.description
//                         $("#body").append(`<div>Title: ${title}</div>`)
//                         $("#body").append(`<div>Description: ${description}</div>`)

//                 })
//         })

// $.get('/randomWord')
//     .then(function (word) {
//         let giphyRandom = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=hAge6BcXp8ANT4wH2apyZprBuvDxF8PH`)
//         Promise.all([giphyRandom])
//             .then(function (results) {
//                 const gif = results[0].data[0].embed_url
//                         $("#body").append(`<iframe src="${gif}" alt="">`)
//                 })
//         })
