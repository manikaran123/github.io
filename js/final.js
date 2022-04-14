function validateform()
{
    var Fname = document.getElementById('FN');
    var Lname = document.getElementById('LN');
    var age = document.getElementById('age');
    var adrs = document.getElementById('adrs');
    var city = document.getElementById('city');
    var state = document.getElementById('state');
    var country = document.getElementById('country');
    var pc = document.getElementById('pc');
    var email = document.getElementById('email');
    var phn = document.getElementById('phn');
    var value = true;
    var regEx = /^[a-zA-Z]+$/;
    var reg = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    var reg1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(Fname.value == '' || regEx.test(Fname.value) == false){
        window.alert('ERROR!!!!! Enter a valid First Name !!!');
        value = false;
        return value;
    }
    if(Lname.value == '' || regEx.test(Lname.value) == false){
        alert('ERROR!!!!! Enter a valid Last Name !!!');
        value = false;
        return value;
    }
    if(age.value == '' || isNaN(age.value)){
        alert('ERROR!!!!! Enter a valid Age (only numbers) !!!');
        value = false;
        return value;
    }
    if(adrs.value == '')
    {
        alert('ERROR!!!!! Enter a Address it cannot be empty!!!');
        value = false;
        return value;
    }
    if(city.value == '' || regEx.test(city.value) == false)
    {
        alert('ERROR!!!!! Enter a valid city !!!');
        value = false;
        return value;
    }
    if(state.value == '' || regEx.test(state.value) == false)
    {
        alert('ERROR!!!!! Enter a valid state!!!');
        value = false;
        return value;
    }
    if(country.value == '' || regEx.test(country.value) == false)
    {
        alert('ERROR!!!!! Enter a valid country name !!!');
        value = false;
        return value;
    }
    if(pc.value == '' )
    {
        alert('ERROR!!!!! Enter a postalcode it cannot be empty!!!');
        value = false;
        return value;
    }
    else if(reg.test(pc.value) == false)
    {
        alert('ERROR!!!!! Enter a valid postalcode !!!');
        value = false;
        return value;
    }
    else{
        value = true;
    }
    if(email.value =='' )
    {
        alert('ERROR!!!!! Enter a Email address !!!');
        value = false;
        return value;
    }
    else if(reg1.test(email.value) == false)
    {
        alert('ERROR!!!!! Enter a valid email address !!!');
        value = false;
        return value;
    }
    if(phn.value =='' || isNaN(phn.value))
    {
        alert('ERROR!!!!! Enter a valid phone number !!!');
        value = false;
        return value;
    }
    else 
    {
        alert('Everything is good!! Submit the form')
        value = true;
        return value ;
    }
}

function yesnoCheck(){

    if(document.getElementById('Hiring').checked) {
        document. getElementById('sName').style. visibility = 'visible';
    }
    else {
        document. getElementById('sName'). style. visibility = 'hidden';

    }
      
}
function check()
{
    if(validateform)
    {
        return true;
    }
    else 
    {
        return false;
    }
}
