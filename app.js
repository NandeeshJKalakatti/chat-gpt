const API_KEY ="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"
const submitButton = document.querySelector('#submit')
const outPutElement = document.querySelector('#outpuut')
const inputElement = document.querySelector('input')
const historyElement = document.querySelector('.history')
const buttonElement = document.querySelector('button')

function changeInput(value){
    const inputElement = document.querySelector('input')
}
async function getMessage(){
    console.log('clicked')
    const op = {
        method: 'POST',
        headers: {'Authorization':'Bearer $OPENAI_API_KEYY',
                  'Content-Type':'application/json'},
     body: JSON.stringify({
                    
         model:"gpt-3.5-turbo",
        messeages:[{role:"user",content:inputElement.value}],
          max_tokens:100,
                  })
                  }
   
    try {
        const response = await fetch("https://api.openai.com/v1/completions", op)
        const data = await response.json()
        console.log(data)
        outPutElement.textContent= data.choices[0].messeage.content
        if(data.choices.messeage.content && inputElement.value){
            const pElement = document.createElement('p')
            pElement.textContent=inputElement.value
            pElement.addEventListener('click',()=> changeInput(pElement.textContent))
            historyElement.append(pElement)
        }
    }
    catch (error){
        console.error(error)
    }
}

submitButton.addEventListener('click', getMessage)
function clearInput(){
    inputElement.value=""
}
buttonElement.addEventListener('cllick', clearInput)