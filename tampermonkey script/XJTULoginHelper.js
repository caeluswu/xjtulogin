// ==UserScript==
// @name         XJTU login helper
// @version      0.0.1
// @description  自动登录 XJTU openplatform 登录页
// @author       Caelus Wu
// @match        https://org.xjtu.edu.cn/openplatform/login.html
// @grant        none
// ==/UserScript==



(function() {
    'use strict';

    // Your code here...

    const userId = '';
    const userPassword = '';
    window.onload = function(){
        const usernameBox = document.querySelector('#form1 > input.username')
        const passwordBox = document.querySelector('#form1 > input.pwd')
        const loginButton = document.querySelector('#account_login')
        async function sleep(time) {
            await new Promise(resolve => { setTimeout(() => resolve(true), time) })
        }

        if (!(usernameBox && passwordBox && loginButton)) {
            console.error('cannot get element!');
        }

        if(!(userId && userPassword)){
            console.log('userid or password unset')
            return
        }
        usernameBox.value = userId;
        setTimeout(()=>{
            passwordBox.value = userPassword
            setTimeout(()=>{
                let clickEvent = new Event('click',{
                    bubbles: true,
                    cancelable: true
                })
                loginButton.dispatchEvent(clickEvent)
            },200)
        },200)
    }
})();