const form = document.getElementById('tipcalculator');

//const billtotal = form.elements['billtotal'];
//const newbilltotal=document.getElementById('billtotal');
//const modifiedbilltotal=document.querySelector('input');

const eventlisteners=document.querySelectorAll('input');

const billtotal=document.getElementById('billtotal');
const tippercent=document.getElementById('tippercent');
const tiprange=document.getElementById('tiprange');
const tipamount=document.getElementById('tipamount');
const finalbillwithtip=document.getElementById('finalbillwithtip');
const errorlog=document.getElementById('errorlog');



for (i of eventlisteners){
i.addEventListener('change', updateValue);
}




function updateValue(e) {

  if(isNaN(billtotal.value) ) 
  {
    //alert('Must input numbers only in Bill Total field');
    errorlog.innerText='Please enter a valid number only in Bill Total field !!';
    tippercent.value='';
    tipamount.value='';
    finalbillwithtip.value='';
    billtotal.value='';
    
  }
  else
  {
  errorlog.innerText=null;
  let billtotalparsed=parseFloat(parseFloat(billtotal.value).toFixed(2));
  billtotal.value=billtotalparsed;
  tippercent.value= tiprange.value;
  let tippercentparsed=parseFloat(tippercent.value);
  let tipamountparsed=parseFloat((billtotalparsed * tippercentparsed/100).toFixed(2));
  tipamount.value= tipamountparsed;
  let finalbillwithtipparsed=billtotalparsed+tipamountparsed;
  if(Number.isInteger(finalbillwithtipparsed))
  finalbillwithtip.value=finalbillwithtipparsed;
  else
  finalbillwithtip.value=finalbillwithtipparsed.toFixed(2);
}
}
