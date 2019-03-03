const generateDlRandom = ()=>{
	const dl = document.getElementById('dl');
	let dl_id = 'DL2019' + (parseInt(Math.random()*1000 ));
	dl.value=dl_id;
	console.log('add random');

}