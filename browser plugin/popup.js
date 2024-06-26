// little eye init
const passwordEye = document.getElementById('passwordEye');
const passwordBox = document.getElementById("userPassword");
passwordEye.addEventListener('click',function() {
    if(passwordEye.classList.contains('invisible')){
        passwordEye.classList.remove('invisible')
        passwordEye.classList.add('visible')
        passwordBox.type = 'text'
    }
    else{
        passwordEye.classList.remove('visible')
        passwordEye.classList.add('invisible')
        passwordBox.type = 'password'
    }
})

// save button init
const save = document.getElementById('save')
const idBox = document.getElementById('userId')
const msgbox = document.getElementById('msg_box')
save.addEventListener('click',function(){
    chrome.storage.local.set({
        userId:idBox.value,
        userPassword: passwordBox.value
    }).then(()=>{
        chrome.storage.local.get(['userId','userPassword']).then((result)=>{
            msgbox.innerText = '保存成功\n若要清除记录请保存空密码'
            setTimeout(()=>{
                msgbox.innerText = '输入信息并点击保存，即可自动填充账号密码并跳转。\n请将密码修改至强密码后使用'
            },3000)
        })
    })
})
