const buttonActionSelect=document.createElement('button');
var selectedElement;
var buttonCopy
var btnFinish

function showBtnFinish(){
	btnFinish = document.createElement('button');
	btnFinish.innerText = 'Fin';
	btnFinish.style.color= '#eee'
	btnFinish.style.backgroundImage= 'linear-gradient(154deg, #005de9, #004ca1)'
	btnFinish.style.fontSize= '20px'
	btnFinish.style.fontWeight= 'bold'
	btnFinish.style.position= 'fixed'
	btnFinish.style.top= '15px'
	btnFinish.style.left= '240px'
	btnFinish.style.zIndex= '9999'
	btnFinish.style.padding= '10px'
	btnFinish.style.borderRadius= '5px'
	btnFinish.style.boxShadow= 'rgb(0, 0, 0) 0px 0px 5px'
	btnFinish.style.display= 'initial'
	btnFinish.addEventListener('click', FinishCopyOptions,false)
	document.body.appendChild(btnFinish)
}

function showSuccess(text){
	let span = document.createElement('span');
	span.innerHTML = text??'Seeepe, copiado 😄😄';
	span.style.color = '#fff';
	span.style.backgroundImage = 'linear-gradient(9deg, #11c717, #136627)';
	span.style.fontSize = '20px';
	span.style.fontWeight = 'bold';
	span.style.position = 'fixed';
	span.style.top = '135px';
	span.style.left = '20px';
	span.style.zIndex = '9999';
	span.style.padding = '10px';
	span.style.borderRadius = '5px';
	span.style.boxShadow = '0px 0px 5px #000';
	document.body.appendChild(span);
	setTimeout(function(){
		document.body.removeChild(span);
	}, 2000);
}

function showAlert(text){
	let span = document.createElement('span');
	span.innerHTML = text??'⚠ Es posible que no se haya copiado el texto ⚠';
	span.style.color = '#fff';
	span.style.backgroundImage = 'linear-gradient(180deg, rgb(233, 237, 13), rgb(172, 175, 9))';
	span.style.fontSize = '20px';
	span.style.fontWeight = 'bold';
	span.style.position = 'fixed';
	span.style.top = '135px';
	span.style.left = '20px';
	span.style.zIndex = '9999';
	span.style.padding = '10px';
	span.style.borderRadius = '5px';
	span.style.boxShadow = '0px 0px 5px #000';
	document.body.appendChild(span);
	setTimeout(function(){
		document.body.removeChild(span);
	}, 2000);
}

function showError(text){
	let span = document.createElement('span');
	span.innerHTML = text??'Nopes, no se ha copiado 🤔🤔';
	span.style.color = '#fff !important';
	span.style.backgroundImage = 'linear-gradient(7deg, #e30d0d, #8d2828)';
	span.style.fontSize = '20px';
	span.style.fontWeight = 'bold';
	span.style.position = 'fixed';
	span.style.top = '135px';
	span.style.left = '20px';
	span.style.zIndex = '9999';
	span.style.padding = '10px';
	span.style.borderRadius = '5px';
	span.style.boxShadow = '0px 0px 5px #000';
	document.body.appendChild(span);
	setTimeout(function(){
		document.body.removeChild(span);
	}, 2000);
}

function showButtonActionCopy(){
	buttonCopy=document.createElement('button');
	buttonCopy.setAttribute('id','btnShowCopy')
	buttonCopy.innerText = 'Copiar el Texto Ahora';
	buttonCopy.style.color= '#eee'
	buttonCopy.style.backgroundImage= 'linear-gradient(154deg, #005de9, #004ca1)'
	buttonCopy.style.fontSize= '20px'
	buttonCopy.style.fontWeight= 'bold'
	buttonCopy.style.position= 'fixed'
	buttonCopy.style.top= '75px'
	buttonCopy.style.left= '20px'
	buttonCopy.style.zIndex= '9999'
	buttonCopy.style.padding= '10px'
	buttonCopy.style.borderRadius= '5px'
	buttonCopy.style.boxShadow= 'rgb(0, 0, 0) 0px 0px 5px'
	buttonCopy.addEventListener('click', function(){
		window.navigator.clipboard.writeText(selectedElement.innerText).then(function() {
			showSuccess()
		}).catch(function(err) {
			showError()
		});
	})
	document.body.appendChild(buttonCopy);
}

function showButtonActionSelect(){
	buttonActionSelect.innerText = 'Iniciar selección';
	buttonActionSelect.style.color= '#eee'
	buttonActionSelect.style.backgroundImage= 'linear-gradient(154deg, #005de9, #004ca1)'
	buttonActionSelect.style.fontSize= '20px'
	buttonActionSelect.style.fontWeight= 'bold'
	buttonActionSelect.style.position= 'fixed'
	buttonActionSelect.style.top= '15px'
	buttonActionSelect.style.left= '20px'
	buttonActionSelect.style.zIndex= '9999'
	buttonActionSelect.style.padding= '10px'
	buttonActionSelect.style.borderRadius= '5px'
	buttonActionSelect.style.boxShadow= 'rgb(0, 0, 0) 0px 0px 5px'
	buttonActionSelect.style.display= 'initial'
	buttonActionSelect.addEventListener('click', function(){
		document.addEventListener('mouseover',getElementOver,false)
	});
	document.body.appendChild(buttonActionSelect);
}

function getElementOver(ev){
	let target=ev.target
	target.style.outline = '1px solid #00ff00';
	target.addEventListener('click',chooseElement,false)
	target.addEventListener('mouseleave',getElementLeave,false)
}

function getElementLeave(ev){
	let target=ev.target
	target.style.outline = 'none';
	target.removeEventListener('click',chooseElement,false)
	target.removeEventListener('mouseleave',getElementLeave,false)
}

function chooseElement(ev){
	selectedElement=ev.target
	removeOutlines()
	try{
		Array.from(document.all).forEach(elm=>{
			elm.removeEventListener('click',chooseElement,false)
		})
	}catch(e){}
	document.removeEventListener('mouseover',getElementOver,false)
	selectedElement.removeEventListener('mouseleave',getElementLeave)
	selectedElement.removeEventListener('click',chooseElement,false)
	document.addEventListener('contextmenu',getParent,false)
	setTimeout(() => {
		selectedElement.style.outline="2px solid #00ff00"
	}, 500);
	if(!buttonCopy){
		showButtonActionCopy()
	}
}


function removeOutlines(){
	Array.from(document.all).forEach(elm=>{
		if(elm){
			elm.style.outline="none"
		}
	})
}

function getParent(ev){
	ev.preventDefault()
	let selectedCurrently = selectedElement;
	try{
		let parent
		parent=selectedElement.parentNode
		selectedElement=parent
		removeOutlines()
		selectedElement.style.outline="2px solid #00ff00"
	}
	catch(err){
		showAlert("⚠ Se ha seleccionado toda la página")
		selectedElement=selectedCurrently
	}
}

function startCopyOptions(){
	buttonActionSelect.style.display= 'initial'
}

function FinishCopyOptions(){
	removeOutlines()
	buttonActionSelect.style.display= 'none'
	document.getElementById('btnShowCopy').style.display= 'none'
	window.removeEventListener('contextmenu',getParent,false)
	window.addEventListener('contextmenu',(e)=>{return true})
	showSuccess=undefined
	showAlert=undefined
	showError=undefined
	showButtonActionCopy=undefined
	getElementOver=undefined
	getElementLeave=undefined
	chooseElement=undefined
	getParent=undefined
	startCopyOptions=undefined
	removeOutlines=undefined
	selectedElement=undefined
	buttonCopy=undefined
	btnFinish.style.display= 'none'
}

showButtonActionSelect()
showBtnFinish()
startCopyOptions()
console.clear()