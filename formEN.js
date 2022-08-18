function getData(){
    let mina=0,minb=0,minc=0,mind=0,maxa=0,maxb=0,maxc=0,maxd=0,mode,mode2;
    let row = []
    document.querySelector('#r2').querySelectorAll('.form-group').forEach((e)=>{
        e.querySelectorAll('div').forEach((elm,ind)=>{
                if(elm.querySelectorAll('input')[0].checked==true){
                    row.push(elm.querySelectorAll('input')[0].value)
                }
                else if(elm.querySelectorAll('input')[1].checked==true){
                    row.push(elm.querySelectorAll('input')[1].value)
                }
                else{
                    row.push('none')
                }
        })
    })
    /*console.log(row)
    document.querySelector('#r2').querySelectorAll('.form-group').forEach((e)=>{
        e.querySelectorAll('div').forEach((elm,ind)=>{
            rowmody.push(elm.querySelector('span').innerHTML[0])
        })
    })*/
    let rowmody = ["ب","أ","د","ج","د","أ","ب","ج","ب","د", "أ", "ج", "ب", "د", "ج", "أ", "أ", "د", "ب", "ج", "ج", "ب", "د", "أ", "ب", "د", "أ", "ج", "ب", "د", "ج", "أ", "د", "ج", "ب", "أ", "أ", "ب", "ج", "د", "د", "ج", "أ", "ب", "ب", "ج", "د", "أ", "أ", "ج", "ب", "د", "د", "ج", "أ", "ب", "ب", "د", "ج", "أ", "د", "أ", "ج", "ب", "ب", "د", "أ", "ج", "ج", "أ", "د", "ب", "أ", "ب", "ج", "د", "ب", "ج", "د", "أ", "د", "ج", "ب", "أ", "ب", "د", "أ", "ج", "ب", "ج", "أ", "د", "ب", "د", "أ", "ج", "أ", "د", "ج", "ب","ب","د","أ","ج","أ","ج","ب","د","د","أ","ب","ج"]
      for(let u=0;u<rowmody.length;u++){
      if(row[u]=='الأقل'){
        if(rowmody[u]=='أ'){mina=mina+1}
        if(rowmody[u]=='ب'){minb=minb+1}
        if(rowmody[u]=='ج'){minc=minc+1}
        if(rowmody[u]=='د'){mind=mind+1}
      }
      if(row[u]=='الأكثر'){
        if(rowmody[u]=='أ'){maxa=maxa+1}
        if(rowmody[u]=='ب'){maxb=maxb+1}
        if(rowmody[u]=='ج'){maxc=maxc+1}
        if(rowmody[u]=='د'){maxd=maxd+1}
      }
      if(row[u]=='none'){
        continue;
      }
    }
    let D=maxa-mina;
    let I=maxb-minb;
    let S=maxc-minc;
    let C=maxd-mind;
    let arr=[D,I,S,C];
    let Dp=(D/(Math.abs(D)+Math.abs(I)+Math.abs(S)+Math.abs(C)))*100;
    let Ip=(I/(Math.abs(D)+Math.abs(I)+Math.abs(S)+Math.abs(C)))*100;
    let Sp=(S/(Math.abs(D)+Math.abs(I)+Math.abs(S)+Math.abs(C)))*100;
    let Cp=(C/(Math.abs(D)+Math.abs(I)+Math.abs(S)+Math.abs(C)))*100;
    //SORTING THE ARRAY
    arr.sort((a,b)=>a-b);
    ///////////////////////////////////////////////////////////////
  
    ///////////////////////////////////////////////////////////////
    //classifying
    ///////////////////////////////////////////////////////////////
    if((arr[3]-arr[0])<=5){
      mode='N-Facilitator';
      if(Dp>Ip&&Dp>Sp&&Dp>Cp){
        mode2='Dominant Facilitator '
      }
      else if(Ip>Dp&&Ip>Sp&&Ip>Cp){
        mode2='Influential Facilitator'
      }
      else if(Sp>Dp&&Sp>Cp&&Sp>Ip){
        mode2='Steady Facilitator'
      }
      else if(Cp>Sp&&Cp>Ip&&Cp>Dp){
        mode2='Conscientious Facilitator'
      }
      else{
        mode2='There is no detailed style'
      }
    }
    else{
      if(arr[3]==D){
        mode='D-Dominant';
        if(Dp>Ip&&(Dp>Sp||Dp==Sp)&&Dp>Cp&&Sp>Ip&&Sp>Cp&&S>0){
          mode2='Vacillating';
        }
        else if(Dp>Ip&&Dp>Sp&&Dp>Cp&&Ip>Sp&&Ip>Cp&&I>0){
          mode2='Balanced';
        }
        else if(Dp>Ip&&Dp>Sp&&Dp>Cp&&Cp>Ip&&Cp>Sp&&C>0){
          mode2='Practical';
        }
        else{
          mode2='Dominant';
        }
      }
      if(arr[3]==I){
        mode='I-Influential'
        if(Ip>Dp&&Ip>Sp&&(Ip>Cp||Ip==Cp)&&Cp>Dp&&Cp>Sp&&C>0){
          mode2='Vacillating'
        }
        else if(Ip>Cp&&Ip>Sp&&Ip>Dp&&Sp>Dp&&Sp>Cp&&S>0){
          mode2='advisor';
        }
        else if(Ip>Cp&&Ip>Sp&&Ip>Dp&&Dp>Sp&&Dp>Cp&&D>0){
          mode2='Persuasive';
        }
        else{
          mode2='Catalytic';
        }
      }
      if(arr[3]==S){
        mode='S-Steady'
        if((Sp>Dp||Sp==Dp)&&Sp>Ip&&Sp>Cp&&Dp>Ip&&Dp>Cp&&D>0){
          mode2='Vacillating '
        }
        else if(Sp>Dp&&Sp>Ip&&Sp>Cp&&Ip>Dp&&Ip>Cp&&I>0){
          mode2='Sociable';
        }
        else if(Sp>Dp&&Sp>Ip&&Sp>Cp&&Cp>Dp&&Cp>Ip&&C>0){
          mode2='Graded';
        }
        else{
          mode2='Helpful';
        }
      }
      if(arr[3]==C){
        mode='C-Conscientious'
        if(Cp>Dp&&(Cp>Ip||Cp==Ip)&&Cp>Sp&&Ip>Dp&&Ip>Sp&&I>0){
          mode2='Vacillating ';
        }
        else if(Cp>Dp&&Cp>Ip&&Cp>Sp&&Dp>Ip&&Dp>Sp&&D>0){
          mode2='supervisor';
        }
        else if(Cp>Dp&&Cp>Ip&&Cp>Sp&&Sp>Dp&&Sp>Ip&&S>0){
          mode2='Graded'
        }
        else{
          mode2='Accurate';
        }
      }
      if(arr[2]==arr[3]){
      let max=arr[3];
      let doubleArr=[];
      arr.forEach((x)=>{if(x==max){doubleArr.push(x)}})
      if(doubleArr[0]==D&&doubleArr[1]==I){
        mode='D&I';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==D&&doubleArr[1]==S){
        mode='D&S';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==D&&doubleArr[1]==C){
        mode='D&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==I&&doubleArr[1]==D){
        mode='D&I';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==I&&doubleArr[1]==S){
        mode='I&S';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==I&&doubleArr[1]==C){
        mode='I&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==S&&doubleArr[1]==D){
        mode='D&S';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==S&&doubleArr[1]==I){
        mode='I&S';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==S&&doubleArr[1]==C){
        mode='S&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==C&&doubleArr[1]==D){
        mode='D&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==C&&doubleArr[1]==I){
        mode='I&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==C&&doubleArr[1]==S){
        mode='S&C';
        mode2='There is no detailed style';
      }
    }
      if(arr[2]==arr[3]&&arr[1]==arr[3]){
      let max=arr[3];
      let doubleArr=[];
      arr.forEach((x)=>{if(x==max){doubleArr.push(x)}})
      if(doubleArr[0]==D&&doubleArr[1]==I&&doubleArr[2]==S){
        mode='D&I&S';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==D&&doubleArr[1]==S&&doubleArr[2]==I){
        mode='D&I&S';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==S&&doubleArr[1]==D&&doubleArr[2]==I){
        mode='D&I&S';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==I&&doubleArr[1]==D&&doubleArr[2]==S){
        mode='D&I&S';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==S&&doubleArr[1]==I&&doubleArr[2]==D){
        mode='D&I&S';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==I&&doubleArr[1]==S&&doubleArr[2]==D){
        mode='D&I&S';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==D&&doubleArr[1]==I&&doubleArr[2]==C){
        mode='D&I&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==D&&doubleArr[1]==C&&doubleArr[2]==I){
        mode='D&I&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==C&&doubleArr[1]==D&&doubleArr[2]==I){
        mode='D&I&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==I&&doubleArr[1]==D&&doubleArr[2]==C){
        mode='D&I&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==C&&doubleArr[1]==I&&doubleArr[2]==D){
        mode='D&I&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==I&&doubleArr[1]==C&&doubleArr[2]==D){
        mode='D&I&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==D&&doubleArr[1]==C&&doubleArr[2]==S){
        mode='D&S&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==D&&doubleArr[1]==S&&doubleArr[2]==C){
        mode='D&S&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==S&&doubleArr[1]==D&&doubleArr[2]==C){
        mode='D&S&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==C&&doubleArr[1]==D&&doubleArr[2]==S){
        mode='D&S&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==C&&doubleArr[1]==S&&doubleArr[2]==D){
        mode='D&S&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==S&&doubleArr[1]==C&&doubleArr[2]==D){
        mode='D&S&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==S&&doubleArr[1]==C&&doubleArr[2]==I){
        mode='I&S&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==S&&doubleArr[1]==I&&doubleArr[2]==C){
        mode='I&S&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==I&&doubleArr[1]==S&&doubleArr[2]==C){
        mode='I&S&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==C&&doubleArr[1]==S&&doubleArr[2]==I){
        mode='I&S&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==C&&doubleArr[1]==I&&doubleArr[2]==S){
        mode='I&S&C';
        mode2='There is no detailed style';
      }
      if(doubleArr[0]==I&&doubleArr[1]==C&&doubleArr[2]==S){
        mode='I&S&C';
        mode2='There is no detailed style';
      }
    }
    }
    let data = {
      'D':D,
      'I':I,
      'S':S,
      'C':C,
      'maxa':maxa,
      'mina':mina,
      'maxb':maxb,
      'minb':minb,
      'maxc':maxc,
      'minc':minc,
      'maxd':maxd,
      'mind':mind,
      'mode':mode,
      'mode2':mode2,
      'name':localStorage.getItem('name')
    }
    localStorage.setItem('DISCData',JSON.stringify(data))
}
/*
if(localStorage.getItem('email')==null){
    let clone = document.querySelector('#r2').querySelector('#fixed').querySelector('h1').cloneNode(true)
    clone.style='cursor:pointer;width:90%;margin-left: 50%;transform: translateX(-50%);background-color:red;color:white;text-shadow:0 0 2px black'
    clone.innerHTML = 'أنت غير مسجل قم بالتسجيل من هنا'
    let elm = document.querySelector('#r2').querySelector('#fixed').querySelector('h1')
    elm.parentNode.insertBefore(clone,elm)
}*/
/*
document.querySelector('#r2').querySelector('#fixed').querySelector('h1').addEventListener('click',()=>{
    location.replace('./registiration.html')
})*/

