let n = { "codigo": "" }

const url = `https://continentalassist.co/backmin/restapp/test_consulta_cupones`;

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
	let val = document.getElementById("ipt").value;
    if(val){
        n = new code(val);
        loadData(url, n)
            .then(data => {
                if (data) {
                    let html = ''
                    data.resultado.forEach(element => {
                        html +=`
                            <div class="cupon">
                                <p class="text-1">ID ${element.id}</p>
                                <p class="text-2">CODE <br><span class="font-1">${element.codigo}</span></p>
                                <p class="text-3">${element.porcentaje} %</p>
                                <div class="date">
                                    <p class="text-4">Desde <span class="color-primary">${element.fecha_desde}</span></p>
                                    <p class="text-4">Hasta <span class="color-primary">${element.fecha_hasta}</span></p>
                                </div>
                                <p class="text-3">Status ${element.id_status}</p>
                                <div class="box"></div>
                            </div>
                            `
                    });
                    document.getElementById("container").innerHTML = html
                }
            });
	} else {
        alert("Ingresa un codigo valido");
        n = { "codigo": "" }
        loadData(url, n)
            .then(data => {
                if (data) {
                    let html = ''
                    data.resultado.forEach(element => {
                        html +=`
                            <div class="cupon">
                                <p class="text-1">ID ${element.id}</p>
                                <p class="text-2">CODE <br><span class="font-1">${element.codigo}</span></p>
                                <p class="text-3">${element.porcentaje} %</p>
                                <div class="date">
                                    <p class="text-4">Desde <span class="color-primary">${element.fecha_desde}</span></p>
                                    <p class="text-4">Hasta <span class="color-primary">${element.fecha_hasta}</span></p>
                                </div>
                                <p class="text-3">Status ${element.id_status}</p>
                                <div class="box"></div>
                            </div>
                            `
                    });
                    document.getElementById("container").innerHTML = html
                }
            });
    }
});

const loadData = async (url, data) => {
	try {
		const response = await fetch(url, { method: 'POST', body: JSON.stringify(data) });
		return response.json()
	} catch(error){
		console.error(error);
	}

}

loadData(url, n)
    .then(data => {
        console.log(data);
        let html = ''
        data.resultado.forEach(element => {
            html +=`
                <div class="cupon">
                    <p class="text-1">ID ${element.id}</p>
                    <p class="text-2">CODE <br><span class="font-1">${element.codigo}</span></p>
                    <p class="text-3">${element.porcentaje} %</p>
                    <div class="date">
                        <p class="text-4">Desde <span class="color-primary">${element.fecha_desde}</span></p>
                        <p class="text-4">Hasta <span class="color-primary">${element.fecha_hasta}</span></p>
                    </div>
                    <p class="text-3">Status ${element.id_status}</p>
                    <div class="box"></div>
                </div>
                `
        });
        document.getElementById("container").innerHTML = html
    });

function code(codigo) {
    this.codigo = codigo
}