const getCine = async() => {
    const id = new URLSearchParams( window.location.search ).get('id')
    const data  = await fetch( `https://oaemdl.es/cinestar_sweb_php/cines/${id}` ) 
    const beta  = await fetch( `https://oaemdl.es/cinestar_sweb_php/cines/${id}/tarifa` )
    const delta = await fetch( `https://oaemdl.es/cinestar_sweb_php/cines/${id}/peliculas` )
 if ( data.status == 200 )
 if ( beta.status == 200 )
 if ( delta.status == 200 ) {
	const cine = await (data.json() ) 
	const tarifas = await ( beta.json() )  
	const peliculas = await ( delta.json() )
	html =  `
            <h2>${cine.RazonSocial}</h2>
            <div class="cine-info">
                <div class="cine-info datos">
                    <p>${cine.Direccion} - ${cine.Detalle}</p>
                    <p>Teléfono: ${cine.Telefonos}</p>
				</div>
			</div>
		`
	tarifas.forEach( tarifa => {
		html += `
			<div class="cine-info">
				<div class="cine-info datos">
					<div class="tabla">
		    			<div class="fila impar">
							<div class="celda-titulo">${tarifa.DiasSemana}</div>
							<div class="celda">${tarifa.Precio}</div>
						</div>
					</div>
				</div>
			</div>
			`
	const cine = 
	html1 = `
		<div class="cine-info">
			<div class="cine-info datos">
		    	<div class="aviso">
    				<p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente, a los usuarios que compren sus entradas por el aplicativo de Cine Papaya para Cine Star Comas, Excelsior, Las Américas, Benavides, Breña, San Juan, UNI, Aviación, Sur, Porteño, Tumbes y Tacna.</p>
				</div>
			</div>
		</div>
		<div class="cine-info datos">
			<img src="img/cine/${id}.2.jpg"/>
				<br/><br/><h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br/>
            	<div class="cine-info peliculas">
	                <div class="tabla">
				    	<div class="fila">
						    <div class="celda-cabecera">Películas</div>
						    <div class="celda-cabecera">Horarios</div>				        
						</div>
					</div>
				</div>
		</div>
	`

	peliculas.forEach( pelicula =>{
		html1 += ` 
		<div class="cine-info peliculas">
			<div class="tabla">
				<div class="fila">
				    <div class="fila impar">
				        <div class="celda-titulo">${pelicula.Titulo}</div>
				        <div class="celda">${pelicula.Horarios}</div>
					</div>
				</div>
			</div>
		</div>
		`
	const cine =
	html2 = `
			<div>
				<img style="float:left;" src="img/cine/${id}.3.jpg" alt="Imagen del cine"/>
				<span class="tx_gris">Precios de los juegos: desde S/1.00 en todos los Cine Star.<br/>
					Horario de atención de juegos es de 12:00 m hasta las 10:30 pm. 
					<br/><br/>
					Visitános y diviértete con nosotros. 
					<br/><br/>
					<b>CINESTAR</b>, siempre pensando en tí. 
				</span>		
			</div>
            `
		});
	});
            document.getElementById ( 'contenido-interno' ).innerHTML = html + html1 + html2;
 }
}
getCine();