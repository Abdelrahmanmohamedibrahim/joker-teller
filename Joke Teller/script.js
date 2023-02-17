const but = document.querySelector(".but")
const joke = document.querySelector(".joke")
but.addEventListener("click", () =>{
    console.log("hello")
    joke.style.display = "inline-block"
    get_joke()
})
function get_joke()
{
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=sexist").then(res => res.json()).then(result =>{
        if (result.setup === undefined)
        {
            joke.innerText = result.joke
        }
        else
        {
            joke.innerText = (`${result.setup}    ${result.delivery}`)
        }
    let utterance = new SpeechSynthesisUtterance(`${joke.innerText}`)
    speechSynthesis.speak(utterance)
    })
}