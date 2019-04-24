function e(tag, callback){
    if(callback == undefined){
        return document.querySelector(tag);
    }
    else{
        return document.querySelector(tag).onclick = callback;
    }
}
let error0 = e('.error0'),
    error1 = e('.error1'),
    error2 = e('.error2'),
    error3 = e('.error3');
let validName = false,
    validPhone = false,
    validEmail = false,
    validQuestions = false;
let nameUser = e('#name'),
    phoneUser = e('#phone'),
    emailUser = e('#email'),
    questionsUser = e('#questions'),
    btnSend = e('.form button');




e('.shadow', function(){
    e('.shadow').classList.add('hide');
    e('.mobile-menu').classList.add('hide');
})

e('.menu-none', function(){
    e('.shadow').classList.remove('hide');
    e('.mobile-menu').classList.remove('hide');
})
e('.mobile-menu .menu-none', function(){
    e('.mobile-menu').classList.add('hide');
})

btnSend.onclick = function(event){
    
    if(isNaN(nameUser.value) && nameUser.value.length >= 3 && nameUser.value.length <= 16){
        error0.classList.add('hide');
        validName = true;
    }else{
        validName = false;
        error0.classList.remove('hide');
    }
    if(!(isNaN(phoneUser.value))){
       validPhone = true;
       error1.classList.add('hide');
    }
    else{
        validPhone = false;
        error1.classList.remove('hide');
    }
    function validEmail(){
        let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let result = re.test(emailUser.value) && emailUser.value !== '';
        return result;
    }
    if(validEmail()){
        error2.classList.add('hide');
    }
    else{
        error2.classList.remove('hide');
    }
    if(validName && validPhone && validEmail()){
        console.log('send');
    }
}

function requestData(object){
    let out = '';
    for(let key in object){
        out +=`${key}=${object}&`;
    }
    return out;
}
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
});
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('select');
var instances = M.FormSelect.init(elems);
});
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.modal');
var instances = M.Modal.init(elems);
});

// var instance = M.Materialbox.getInstance(elem);
