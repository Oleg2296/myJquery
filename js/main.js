function getE(id) {
    return document.getElementById(id);
}
getE('edit').onclick = function () {
    getE('txtAria').value = getE('htmlOn').innerHTML;
    getE('menu2').style.display = "block";
    getE('menu1').style.display = "none";
    getE('htmlOn').style.display = "none";
    getE('htmlIn').style.display = "block";
}
getE('saveHtml').onclick = function () {
    getE('htmlOn').innerHTML = getE('txtAria').value;
    getE('menu2').style.display = "none";
    getE('menu1').style.display = "block";
    getE('htmlOn').style.display = "block";
    getE('htmlIn').style.display = "none";
    getE('table').style.display="none";
    getE('tablesp2').style.display="none";
    
}
//переключателі болд курсив підкреслений
var bld = true;
getE('bold').onclick = function () {
    if (bld) {
        getE('htmlOn').style.fontWeight = "bold";
        bld = false;
    }
    else {
        getE('htmlOn').style.fontWeight = "normal";
        bld = true;
    }
}
var bld1 = true;
getE('kurs').onclick = function () {
    if (bld1) {
        getE('htmlOn').style.fontStyle = "italic";
        bld1 = false;
    }
    else {
        getE('htmlOn').style.fontStyle = "normal";
        bld1 = true;
    }
}
var bld2 = true;
getE('underl').onclick = function () {
    if (bld2) {
        getE('htmlOn').style.textDecoration = "underline";
        bld2 = false;
    }
    else {
        getE('htmlOn').style.textDecoration = "none";
        bld2 = true;
    }
}
getE('ptOftxt').onchange = function () {
    for (var pt = 0; pt < this.children.length; pt++) {
        if (this.children[pt].selected) {
            getE('htmlOn').style.fontSize = this.children[pt].value + "pt";
        }
    }
}
getE('fmOftxt').onchange = function () {
    for (var fm = 0; fm < this.children.length; fm++) {
        if (this.children[fm].selected) {
            getE('htmlOn').style.fontFamily = this.children[fm].value;
        }
    }
}
//фон, колір тексту, картинка фону
var colTxt;
getE('colorT').onclick = function () {
    getE('boxon1').style.display = "block";
    getE('imageButt').style.display="none";
    getE('boxon1').style.outline="none";
    getE('imageB').style.display="none";
    getE('boxon1').style.height="200px";
    colTxt = false;
}

getE('backg').onclick=function(){
    getE('imageButt').style.display="block";
    getE('boxon1').style.display = "block";
    getE('imageB').style.display="none";
    getE('boxon1').style.height="220px";
    colTxt = true;
}
getE('imageButt').onclick=function(){
    getE('boxon1').style.display="none";
    getE('imageB').style.display="block";
}
getE('htmlOn').onclick=function(){
     getE('boxon1').style.display = "none";
    getE('imageB').style.display="none";
}

var bix = document.querySelectorAll('.bixa');
for (var b = 0; b < bix.length; b++) {
    bix[b].onclick = function () {
        if(colTxt){
             getE('htmlOn').style.backgroundColor = this.style.backgroundColor;
        getE('htmlOn').style.backgroundImage = "none";
        }else{
            getE('htmlOn').style.color = this.style.backgroundColor;
        }
    }
}
var imaga=document.querySelectorAll('.imagasa');
for(var img=0; img<imaga.length; img++){
        imaga[img].onclick=function(){ getE('htmlOn').style.backgroundImage=this.style.backgroundImage;
        
        }
    }

getE('loadImg').onchange=function(){
    var load=getE('loadImg').value;
 getE('htmlOn').style.backgroundImage="url("+load+")"
}
//переключатель алігн
getE('alignL').onclick=function(){
    getE('htmlOn').style.textAlign="left";
}
getE('alignC').onclick=function(){
    getE('htmlOn').style.textAlign="center";
}
getE('alignR').onclick=function(){
    getE('htmlOn').style.textAlign="right";
}
getE('createTabel').onclick=function(){
    getE('table').style.display="block";
    getE('tablesp2').style.display="none";
}
getE('createSpys').onclick=function(){
    getE('tablesp2').style.display="block";
    getE('table').style.display="none";
}
//валідація
 var val = document.querySelectorAll('.valids')
for(var sl=0; sl<val.length; sl++){
    val[sl].onblur=function(){
        if(isNaN(this.value)){
            this.style.border="1px solid red";
        }else{
            this.style.border="1px solid black";
        }
    }
}
//створює таблицю
getE('createTb').onclick = function () {
    var fol=true;
    for(var check=0; check<val.length; check++){
        if(isNaN(val[check].value)){
            fol=false;
            break;
        }
        }
    
    if(fol){
    var tbht = getE('tbHeight').value;
    var tbwd = getE('tbWidth').value;
    var brwidth = getE('bordWidth').value;
    var tbcolor;
    var poloscolor;
    for (var opt = 0; opt < getE('bordColor').children.length; opt++) {
        if (getE('bordColor').children[opt].selected) {
            poloscolor = getE('bordColor').children[opt].value;
        }
    }
    var polos;
    var tbstyle;
    for (var sel = 0; sel < getE('bordPoloska').children.length; sel++) {
        if (getE('bordPoloska').children[sel].selected) {
            polos = getE('bordPoloska').children[sel].value;
        }
    }
    var table = document.createElement("table");
    table.id = 'tableStyle';
    for (var i = 0; i < getE('rows').value; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < getE('cols').value; j++) {
            var td = document.createElement("td");
            td.style.height = tbht + "px";
            td.style.width = tbwd + "px";
            td.style.borderWidth = brwidth + "px";
            td.style.borderColor = poloscolor;
            td.style.borderStyle = polos;
            td.style.borderCollapse = "collapse";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    getE('htmlOn').appendChild(table);
    getE('tableStyle').style.borderCollapse = "collapse";
    getE('tableStyle').style.borderStyle = tbstyle;
    getE('tableStyle').style.borderColor = polos;
    getE('tableStyle').style.borderWidth = getE('bordWidth').value + "px";
    getE('txtAria').value = getE('htmlOn').innerHTML;
    getE('table').style.display="none";
        }else{
        alert('Заповніть будьласка всі поля правильно!')
    }
}

//створюємо список
var spisMark=true;
getE('numbor').onclick=function(){
    getE('typeMark').style.display="none";
    getE('typeMark1').style.display="block";
    spisMark=false;
}
getE('numbor2').onclick=function(){
    getE('typeMark').style.display="block";
    getE('typeMark1').style.display="none";
    spisMark=true;
}
getE('spblocksp').onclick=function(){
    var fol=true;
     if(isNaN(val[5].value))
            fol=false;
    if(fol){
    var el=getE('spelem').value;
    var mark;
        var mark2;
    for (var ark = 0; ark < getE('typeMark').children.length; ark++) {
        if (getE('typeMark').children[ark].selected) {
            mark = getE('typeMark').children[ark].value;
        }
    }
        for (var ark1 = 0; ark1 < getE('typeMark1').children.length; ark1++) {
        if (getE('typeMark1').children[ark1].selected) {
            mark2 = getE('typeMark1').children[ark1].value;
        }
    }
        if(spisMark){
            var olik=document.createElement('ul');
//            olik.style.listStyleType=mark;
            olik.type=mark;
        }else{
             var olik=document.createElement('ol');
            olik.type=mark2;
        }
    
    olik.id="spisinv";
        
    for(var nn=0;nn<el; nn++){
        var li=document.createElement('li');
        li.innerHTML="List";
        olik.appendChild(li);
    }
    getE('htmlOn').appendChild(olik);
    getE('txtAria').value = getE('htmlOn').innerHTML;
    getE('tablesp2').style.display="none";
    }else{
        alert('Заповніть будьласка всі поля правильно!')
    }
}
//кнопки для очистки 
getE('clear1').onclick=function(){
    for(var i=0;i<val.length;i++){
        val[i].value=""
    }
}
getE('clear2').onclick=function(){
    val[5].value="";
    getE('numbor').checked="false";
    getE('numbor2').checked="false";
}



































