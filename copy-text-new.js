'use-strict'

const containerItems = document.createElement('div');
const btnSelect = document.createElement('button');
const btnCopy = document.createElement('button');
const btnFinish = document.createElement('button');
const alertSucess = document.createElement('span');
const alertDanger = document.createElement('span');
const alertError = document.createElement('span');
const btnStart = document.createElement('div');
var chosenElement = document.createElement('div');
const alertTime = 3000
const timeToChangeColor = 1000
const transitionDurationValue = '1s'
var timerChangeColor

containerItems.style.position = 'fixed';
containerItems.style.top = '15px';
containerItems.style.left = '20px';
containerItems.style.display = 'grid';
containerItems.style.gridTemplateColumns = '1fr 1fr 1fr';
containerItems.style.zIndex = '9999';
containerItems.style.gap = '20px'
containerItems.style.display = 'none'
containerItems.style.fontFamily = 'sans-serif'
containerItems.style.fontSize = '20px'
containerItems.style.fontWeight = '500'
document.body.appendChild(containerItems);

btnSelect.setAttribute('id', 'btnSelect')
btnSelect.innerText = 'Iniciar selección';
btnSelect.style.color = '#eee'
btnSelect.style.backgroundImage = 'linear-gradient(154deg, #005de9, #004ca1)'
btnSelect.style.padding = '5px 10px'
btnSelect.style.borderRadius = '5px'
btnSelect.style.boxShadow = 'rgb(0, 0, 0) 0px 0px 5px'
btnSelect.style.zIndex = '9999';
btnSelect.style.fontFamily = 'sans-serif'
containerItems.appendChild(btnSelect);

btnCopy.setAttribute('id', 'btnCopy')
btnCopy.innerText = 'Copiar Texto';
btnCopy.style.color = '#eee'
btnCopy.style.backgroundImage = 'linear-gradient(154deg, #005de9, #004ca1)'
btnCopy.style.padding = '5px 10px'
btnCopy.style.borderRadius = '5px'
btnCopy.style.boxShadow = 'rgb(0, 0, 0) 0px 0px 5px'
btnCopy.style.zIndex = '9999';
btnCopy.style.fontFamily = 'sans-serif'
containerItems.appendChild(btnCopy);

btnFinish.setAttribute('id', 'btnFinish')
btnFinish.innerText = 'Finalizar';
btnFinish.style.color = '#eee'
btnFinish.style.backgroundImage = 'linear-gradient(154deg, #005de9, #004ca1)'
btnFinish.style.padding = '5px 10px'
btnFinish.style.borderRadius = '5px'
btnFinish.style.boxShadow = 'rgb(0, 0, 0) 0px 0px 5px'
btnFinish.style.zIndex = '9999';
btnFinish.style.fontFamily = 'sans-serif'
containerItems.appendChild(btnFinish);

alertSucess.setAttribute('id', 'alertSucess')
alertSucess.style.color = '#fff';
alertSucess.style.backgroundImage = 'linear-gradient(9deg, #11c717, #136627)';
alertSucess.style.fontSize = '20px';
alertSucess.style.fontWeight = 'bold';
alertSucess.style.padding = '5px 10px';
alertSucess.style.borderRadius = '5px';
alertSucess.style.boxShadow = '0px 0px 5px #000';
alertSucess.style.position = 'fixed'
alertSucess.style.top = '80px'
alertSucess.style.left = '20px'
alertSucess.style.display = 'none'
alertSucess.style.zIndex = '9999';
alertSucess.style.fontFamily = 'sans-serif'
document.body.appendChild(alertSucess);

alertDanger.setAttribute('id', 'alertDanger')
alertDanger.style.color = '#fff';
alertDanger.style.backgroundImage = 'linear-gradient(9deg, rgb(214 217 21), rgb(161 156 6))';
alertDanger.style.fontSize = '20px';
alertDanger.style.fontWeight = 'bold';
alertDanger.style.padding = '5px 10px';
alertDanger.style.borderRadius = '5px';
alertDanger.style.boxShadow = '0px 0px 5px #000';
alertDanger.style.position = 'fixed'
alertDanger.style.top = '80px'
alertDanger.style.left = '20px'
alertDanger.style.display = 'none'
alertDanger.style.zIndex = '9999';
alertDanger.style.fontFamily = 'sans-serif'
document.body.appendChild(alertDanger);

alertError.setAttribute('id', 'alertError')
alertError.style.color = '#fff';
alertError.style.backgroundImage = 'linear-gradient(9deg, rgb(199 17 17), rgb(102 19 19))';
alertError.style.fontSize = '20px';
alertError.style.fontWeight = 'bold';
alertError.style.padding = '5px 10px';
alertError.style.borderRadius = '5px';
alertError.style.boxShadow = '0px 0px 5px #000';
alertError.style.position = 'fixed'
alertError.style.top = '80px'
alertError.style.left = '20px'
alertError.style.display = 'none'
alertError.style.zIndex = '9999';
alertError.style.fontFamily = 'sans-serif'
document.body.appendChild(alertError);

btnStart.setAttribute('id', 'btnStart')
btnStart.innerText = 'Iniciar copiado 👾';
btnStart.style.color = '#eee'
btnStart.style.backgroundImage = 'linear-gradient(154deg, #005de9, #004ca1)'
btnStart.style.padding = '2px 5px'
btnStart.style.fontSize = '15px';
btnStart.style.borderRadius = '5px'
btnStart.style.boxShadow = 'rgb(0, 0, 0) 0px 0px 5px'
btnStart.style.display = 'none'
btnStart.style.position = 'fixed'
btnStart.style.bottom = '10px'
btnStart.style.right = '10px'
btnStart.style.zIndex = '9999';
btnStart.style.fontFamily = 'sans-serif'
document.body.appendChild(btnStart);











btnSelect.addEventListener('click', startSelection)
btnCopy.addEventListener('click', copyNow)
btnFinish.addEventListener('click', finishOptions)
btnStart.addEventListener('click', startOptions)







function startSelection() {
	removeAllMarks()
	setTimeout(() => {
		document.body.addEventListener('click', selectedElement, false)
		document.body.addEventListener('mouseover', markElement, false)
		document.body.addEventListener('mouseout', unmarkElement, false)
	}, 200);
}

function markElement(e) {
	target = e.target;
	target.style.outline = `2px dashed ${getRandomColor()}`
}

function unmarkElement(e) {
	target = e.target;
	target.style.outline = 'initial'
}

function selectedElement(e) {
	e.preventDefault()
	chosenElement = e.target;

	document.body.removeEventListener('click', selectedElement, false)
	document.body.removeEventListener('mouseover', markElement, false)
	document.body.removeEventListener('mouseout', unmarkElement, false)

	if(timerChangeColor){
		clearInterval(timerChangeColor)
	}

	timerChangeColor=setInterval(() => {
		chosenElement.style.transitionDuration = transitionDurationValue
		chosenElement.style.outline = `2px solid ${getRandomColor()}`
	}, timeToChangeColor);

	document.body.addEventListener('contextmenu', getParent)
}

function removeAllMarks() {
	Array.from(document.querySelectorAll('*')).forEach(elm => {
		elm.style.outline = 'initial'
	})
}










function getParent(ev) {
	ev.preventDefault()
	let selectedCurrently = chosenElement;
	try {
		let parent
		parent = chosenElement.parentNode
		chosenElement = parent
		removeAllMarks()
		chosenElement.style.outline = "2px solid #0f0"
	} catch (err) {
		showAlertDanger("⚠ Se ha seleccionado toda la página 👀")
		chosenElement = selectedCurrently
	}
}






function copyNow() {
	window.navigator.clipboard.writeText(chosenElement.innerText)
		.then(function () {
			showAlertSucess("✔ Seeepe, texto copiado 😄")
		}).catch(function (err) {
			showAlertError("❌ Nopes... Error al copiar 🤔🤔")
		});
}














function showAlertSucess(text) {
	alertSucess.innerText = text
	alertSucess.style.display = 'block'
	setTimeout(function () {
		alertSucess.style.display = 'none'
	}, alertTime)
}

function showAlertDanger(text) {
	alertDanger.innerText = text
	alertDanger.style.display = 'block'
	setTimeout(function () {
		alertDanger.style.display = 'none'
	}, alertTime)
}

function showAlertError(text) {
	alertError.innerText = text
	alertError.style.display = 'block'
	setTimeout(function () {
		alertError.style.display = 'none'
	}, alertTime)
}







function getRandomColor(){
	let colors=[
		"#e34c26",
		"#ffb820",
		"#f1e05a",
		"#62c44a",
		"#1bf8c8",
		"#17e2fd",
		"#388bfd",
		"#c135e4",
		"#c6538c",
		"#eb3434",
	]
	return colors[Math.floor(Math.random() * colors.length)]
}









function startOptions() {
	containerItems.style.display = 'initial'
	btnStart.style.display = 'none'
	chosenElement = document.createElement('div');
}

function finishOptions() {
	containerItems.style.display = 'none'
	document.body.removeEventListener('contextmenu', getParent)
	document.body.removeEventListener('click', selectedElement, false)
	document.body.removeEventListener('mouseover', markElement, false)
	document.body.removeEventListener('mouseout', unmarkElement, false)
	btnStart.style.display = 'initial'
	if(timerChangeColor){
		clearInterval(timerChangeColor)
	}
	removeAllMarks()
}

finishOptions()
console.clear()