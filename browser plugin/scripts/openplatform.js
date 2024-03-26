async function sleep(time) {
    await new Promise(resolve => { setTimeout(() => resolve(true), time) })
}

window.onload = function() {
    const usernameBox = document.querySelector('#form1 > input.username')
    const passwordBox = document.querySelector('#form1 > input.pwd')
    const loginButton = document.querySelector('#account_login')
    if (!(usernameBox && passwordBox && loginButton)) {
        console.error('cannot get element!');
    }
    
    chrome.storage.local.get(['userId','userPassword']).then(async(result)=>{
        if(!(result.userId && result.userPassword)){
            return
        }
        usernameBox.value = result.userId
        await sleep(300)
        passwordBox.value = result.userPassword
        await sleep(300)
        let clickEvent = new Event('click',{
            bubbles: true,
            cancelable: true
        })
        loginButton.dispatchEvent(clickEvent)
    })
}
