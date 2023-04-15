const API_KEY ='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'
const submitButton = document.querySelector('#submit')
async function getMessage(){
    console.log('clicked')
    const options = {
        method: 'POST',
        headers: {'Authorization':'Bearer ${API_KEY',
                  'Content-Type':'application/json'},
                  body: JSON.stringify({
                    model:"gpt-3.5-turbo",
                    messeges:[{role:"user" , content:"Hello!"}],
                    max_tokens: 100,
                  })
                  }
   
    try {
        const response = await fetch('https://api.openai.com/v1/completions',options)
        const data = await response.json()
        console.log(data)
    }
    catch (error){
        console.error(error)
    }
}

submitButton.addEventListener('click', getMessage)