async function checkPassword(x){
    let res = await fetch(`http://mahmoudbl.pythonanywhere.com/?password=${x}`)
    let res2 = await res.json()
    return res2
}

//Form Validation
document.querySelector('#r1').querySelector('.next').addEventListener('click',async()=>{
    let x = await checkPassword(document.querySelector('#r1').querySelectorAll('input')[2].value);
    let password = x[1];
    let link = x[0];
    //storing the values entered from the user in the localstorage//
    if(document.querySelector('#r1').querySelectorAll('input')[0].value!=''&&document.querySelector('#r1').querySelectorAll('input')[1].value!=''&&document.querySelector('#r1').querySelectorAll('input')[0].value.includes('@')==true&&password==true){
        //check the selected test to show//
        if(document.querySelector('#r1').querySelector('select').value=='DISC'){
            localStorage.setItem('email',document.querySelector('#r1').querySelectorAll('input')[0].value);
            localStorage.setItem('name',document.querySelector('#r1').querySelectorAll('input')[1].value);
            document.querySelector('#r2').querySelectorAll('input')[0].setAttribute('value',localStorage.getItem('email'))
            document.querySelector('#r2').querySelectorAll('input')[1].setAttribute('value',localStorage.getItem('name'))
            //location.replace('./form.html');
            document.querySelector('#r1').classList.add('hidden')
            document.querySelector('#r2').classList.remove('hidden')
            document.querySelector('#r2').querySelector('form').action = link;
        }
    }
    //handle error if user doen't enter inputs//
    else if(document.querySelector('#r1').querySelectorAll('input')[0].value.includes('@')==false||document.querySelector('#r1').querySelectorAll('input')[0].value==''||document.querySelector('#r1').querySelectorAll('input')[1].value==''||document.querySelector('#r1').querySelectorAll('input')[2].value==''){
        if(document.querySelector('#r1').querySelectorAll('input')[0].value==''||document.querySelector('#r1').querySelectorAll('input')[0].value.includes('@')==false){
            document.querySelector('#r1').querySelectorAll('input')[0].style.border='1px solid red';
            setInterval(()=>{
                document.querySelector('#r1').querySelectorAll('input')[0].style.border='1px solid #ccc';},500)
        }
        if(document.querySelector('#r1').querySelectorAll('input')[1].value==''){
            document.querySelector('#r1').querySelectorAll('input')[1].style.border='1px solid red';
            setInterval(()=>{
                document.querySelector('#r1').querySelectorAll('input')[1].style.border='1px solid #ccc';},500)
        }
        if(document.querySelector('#r1').querySelectorAll('input')[2].value==''){
            document.querySelector('#r1').querySelectorAll('input')[2].style.border='1px solid red';
            setInterval(()=>{
                document.querySelector('#r1').querySelectorAll('input')[2].style.border='1px solid #ccc';},500)
        }
    }
    else if(password!=true){
        alert('كلمة سر خاطئة')
    }
})

/*****************************************************************************/

for(let i=2;i<30;i++){
        document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[0].querySelectorAll('input')[0].addEventListener('click',()=>{
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[1].querySelectorAll('input')[0].checked =false;
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[2].querySelectorAll('input')[0].checked =false;
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[3].querySelectorAll('input')[0].checked =false;
        })
        document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[1].querySelectorAll('input')[0].addEventListener('click',()=>{
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[0].querySelectorAll('input')[0].checked =false;
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[2].querySelectorAll('input')[0].checked =false;
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[3].querySelectorAll('input')[0].checked =false;
        })
        document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[2].querySelectorAll('input')[0].addEventListener('click',()=>{
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[1].querySelectorAll('input')[0].checked =false;
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[0].querySelectorAll('input')[0].checked =false;
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[3].querySelectorAll('input')[0].checked =false;
        })
        document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[3].querySelectorAll('input')[0].addEventListener('click',()=>{
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[1].querySelectorAll('input')[0].checked =false;
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[2].querySelectorAll('input')[0].checked =false;
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[0].querySelectorAll('input')[0].checked =false;
        })
    }

    for(let i=2;i<30;i++){
        document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[0].querySelectorAll('input')[1].addEventListener('click',()=>{
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[1].querySelectorAll('input')[1].checked =false;
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[2].querySelectorAll('input')[1].checked =false;
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[3].querySelectorAll('input')[1].checked =false;
        })
        document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[1].querySelectorAll('input')[1].addEventListener('click',()=>{
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[0].querySelectorAll('input')[1].checked =false;
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[2].querySelectorAll('input')[1].checked =false;
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[3].querySelectorAll('input')[1].checked =false;
        })
        document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[2].querySelectorAll('input')[1].addEventListener('click',()=>{
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[1].querySelectorAll('input')[1].checked =false;
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[0].querySelectorAll('input')[1].checked =false;
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[3].querySelectorAll('input')[1].checked =false;
        })
        document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[3].querySelectorAll('input')[1].addEventListener('click',()=>{
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[1].querySelectorAll('input')[1].checked =false;
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[2].querySelectorAll('input')[1].checked =false;
            document.querySelector('#r2').querySelectorAll('.form-group')[i].querySelectorAll('div')[0].querySelectorAll('input')[1].checked =false;
        })
    }
    getData();
//end of case of preventing the user to choose more than one circle//
////////////////////////////////////////////////////////////////////////
//sending the form to google//

$(document).ready(function(){
    $('#bootstrapForm').submit(async function (event) {
        event.preventDefault()
        let ui = await fetch(`https://mahmoudbl.pythonanywhere.com/?password=${document.querySelector('#r1').querySelectorAll('input')[2].value}`)
        let yi = await ui.json()
        console.log(yi)
        if(yi[1]){
        var extraData = {}
            $('#bootstrapForm').ajaxSubmit({
                header:{
                    'X-Content-Type-Options': 'nosniff'
                },
                data: extraData,
                dataType: 'jsonp',
                error: function () {  
                    console.log('error')
                }
            })
            getData();
            location.replace('./result2.html')
        }
        else{
            alert('أنت غير مسجل')
            document.querySelector('#r2').classList.add('hidden')
        }
    })
});