async function StartBombing(scriptText)
{
	const dialogos = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	if(!textarea) throw new Error("La conversacion no esta abierta") //En caso de error
	//Funcion de escritura
	for(const line of dialogos)
	{
		console.log(line)
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
		setTimeout(() => 
		{
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		if(dialogos.indexOf(line) !== dialogos.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	return dialogos.length;
}
//Reemplazar el texto de la linea 26 por el dialogo o mensajes que desees enviar//
enviarScript(`

PONER ACA EL SCRIPT DE LA PELICULA

`).then(e => console.log(`Bombardeo finalizado, ${e} mensajes enviados`)).catch(console.error)
//Fin del script