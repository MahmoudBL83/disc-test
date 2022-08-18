function getData(){
    let mina=0,minb=0,minc=0,mind=0,maxa=0,maxb=0,maxc=0,maxd=0,mode,mode2;
    let row = [],rowmody = []
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
    console.log(row)
    document.querySelector('#r2').querySelectorAll('.form-group').forEach((e)=>{
        e.querySelectorAll('div').forEach((elm,ind)=>{
            rowmody.push(elm.querySelector('span').innerHTML[0])
        })
    })
    console.log(rowmody)
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
      mode='ه الموفق';
      if(Dp>Ip&&Dp>Sp&&Dp>Cp){
        mode2='أ الموفق المسيطر'
      }
      else if(Ip>Dp&&Ip>Sp&&Ip>Cp){
        mode2='ب الموفق المؤثر'
      }
      else if(Sp>Dp&&Sp>Cp&&Sp>Ip){
        mode2='ج الموفق المحافظ'
      }
      else if(Cp>Sp&&Cp>Ip&&Cp>Dp){
        mode2='د الموفق الواعي'
      }
      else{
        mode2='لا يوجد لك نمط تفصيلي'
      }
    }
    else{
      if(arr[3]==D){
        mode='أ المسيطر';
        if(Dp>Ip&&(Dp>Sp||Dp==Sp)&&Dp>Cp&&Sp>Ip&&Sp>Cp&&S>0){
          mode2='ج المتأرجح';
        }
        else if(Dp>Ip&&Dp>Sp&&Dp>Cp&&Ip>Sp&&Ip>Cp&&I>0){
          mode2='ب المتوازن';
        }
        else if(Dp>Ip&&Dp>Sp&&Dp>Cp&&Cp>Ip&&Cp>Sp&&C>0){
          mode2='د العملي';
        }
        else{
          mode2='أ المهيمن';
        }
      }
      if(arr[3]==I){
        mode='ب المؤثر'
        if(Ip>Dp&&Ip>Sp&&(Ip>Cp||Ip==Cp)&&Cp>Dp&&Cp>Sp&&C>0){
          mode2='د المتأرجح'
        }
        else if(Ip>Cp&&Ip>Sp&&Ip>Dp&&Sp>Dp&&Sp>Cp&&S>0){
          mode2='ج الناصح';
        }
        else if(Ip>Cp&&Ip>Sp&&Ip>Dp&&Dp>Sp&&Dp>Cp&&D>0){
          mode2='ب المقنع';
        }
        else{
          mode2='أ المحفز';
        }
      }
      if(arr[3]==S){
        mode='ج المحافظ'
        if((Sp>Dp||Sp==Dp)&&Sp>Ip&&Sp>Cp&&Dp>Ip&&Dp>Cp&&D>0){
          mode2='ج المتأرجح'
        }
        else if(Sp>Dp&&Sp>Ip&&Sp>Cp&&Ip>Dp&&Ip>Cp&&I>0){
          mode2='ب الاجتماعي';
        }
        else if(Sp>Dp&&Sp>Ip&&Sp>Cp&&Cp>Dp&&Cp>Ip&&C>0){
          mode2='د المتدرج';
        }
        else{
          mode2='أ الخدوم';
        }
      }
      if(arr[3]==C){
        mode='د الواعي'
        if(Cp>Dp&&(Cp>Ip||Cp==Ip)&&Cp>Sp&&Ip>Dp&&Ip>Sp&&I>0){
          mode2='ج المتأرجح';
        }
        else if(Cp>Dp&&Cp>Ip&&Cp>Sp&&Dp>Ip&&Dp>Sp&&D>0){
          mode2='د المشرف';
        }
        else if(Cp>Dp&&Cp>Ip&&Cp>Sp&&Sp>Dp&&Sp>Ip&&S>0){
          mode2='ب المتدرج'
        }
        else{
          mode2='أ الدقيق';
        }
      }
      if(arr[2]==arr[3]){
      let max=arr[3];
      let doubleArr=[];
      arr.forEach((x)=>{if(x==max){doubleArr.push(x)}})
      if(doubleArr[0]==D&&doubleArr[1]==I){
        mode='أ,ب';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==D&&doubleArr[1]==S){
        mode='أ,ج';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==D&&doubleArr[1]==C){
        mode='أ,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==I&&doubleArr[1]==D){
        mode='أ,ب';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==I&&doubleArr[1]==S){
        mode='ب,ج';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==I&&doubleArr[1]==C){
        mode='ب,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==S&&doubleArr[1]==D){
        mode='أ,ج';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==S&&doubleArr[1]==I){
        mode='ب,ج';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==S&&doubleArr[1]==C){
        mode='ج,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==C&&doubleArr[1]==D){
        mode='أ,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==C&&doubleArr[1]==I){
        mode='ب,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==C&&doubleArr[1]==S){
        mode='ج,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
    }
      if(arr[2]==arr[3]&&arr[1]==arr[3]){
      let max=arr[3];
      let doubleArr=[];
      arr.forEach((x)=>{if(x==max){doubleArr.push(x)}})
      if(doubleArr[0]==D&&doubleArr[1]==I&&doubleArr[2]==S){
        mode='أ,ب,ج';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==D&&doubleArr[1]==S&&doubleArr[2]==I){
        mode='أ,ب,ج';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==S&&doubleArr[1]==D&&doubleArr[2]==I){
        mode='أ,ب,ج';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==I&&doubleArr[1]==D&&doubleArr[2]==S){
        mode='أ,ب,ج';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==S&&doubleArr[1]==I&&doubleArr[2]==D){
        mode='أ,ب,ج';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==I&&doubleArr[1]==S&&doubleArr[2]==D){
        mode='أ,ب,ج';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==D&&doubleArr[1]==I&&doubleArr[2]==C){
        mode='أ,ب,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==D&&doubleArr[1]==C&&doubleArr[2]==I){
        mode='أ,ب,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==C&&doubleArr[1]==D&&doubleArr[2]==I){
        mode='أ,ب,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==I&&doubleArr[1]==D&&doubleArr[2]==C){
        mode='أ,ب,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==C&&doubleArr[1]==I&&doubleArr[2]==D){
        mode='أ,ب,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==I&&doubleArr[1]==C&&doubleArr[2]==D){
        mode='أ,ب,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==D&&doubleArr[1]==C&&doubleArr[2]==S){
        mode='أ,ج,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==D&&doubleArr[1]==S&&doubleArr[2]==C){
        mode='أ,ج,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==S&&doubleArr[1]==D&&doubleArr[2]==C){
        mode='أ,ج,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==C&&doubleArr[1]==D&&doubleArr[2]==S){
        mode='أ,ج,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==C&&doubleArr[1]==S&&doubleArr[2]==D){
        mode='أ,ج,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==S&&doubleArr[1]==C&&doubleArr[2]==D){
        mode='أ,ج,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==S&&doubleArr[1]==C&&doubleArr[2]==I){
        mode='ب,ج,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==S&&doubleArr[1]==I&&doubleArr[2]==C){
        mode='ب,ج,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==I&&doubleArr[1]==S&&doubleArr[2]==C){
        mode='ب,ج,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==C&&doubleArr[1]==S&&doubleArr[2]==I){
        mode='ب,ج,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==C&&doubleArr[1]==I&&doubleArr[2]==S){
        mode='ب,ج,د';
        mode2='لا يوجد لك نمط تفصيلي';
      }
      if(doubleArr[0]==I&&doubleArr[1]==C&&doubleArr[2]==S){
        mode='ب,ج,د';
        mode2='لا يوجد لك نمط تفصيلي';
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

