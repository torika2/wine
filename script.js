let wines = [
	{
		id:1,
		name:'ღვინო 1',
		description:'ღვინო 1-ის აღწერა',
		image:'./images/wine1.jpg',
		is_active:false,
	},
	{
		id:2,
		name:'ღვინო 2',
		description:'ღვინო 2-ის აღწერა',
		image:'./images/wine2.jpg',
		is_active:false,
	},
	{
		id:3,
		name:'ღვინო 3',
		description:'ღვინო 3-ის აღწერა',
		image:'./images/wine1.jpg',
		is_active:false,
	},
	{
		id:4,
		name:'ღვინო 4',
		description:'ღვინო 4-ის აღწერა',
		image:'./images/wine2.jpg',
		is_active:false,
	},

]

setWines =(data,div_id,input_default_value=1)=>{
	let main = document.getElementById(div_id)
	data.map((item)=>{
		let div = document.createElement('div')
		div.setAttribute('class','col-md-4 mt-2 mb-2')
		div.innerHTML=`
			<div class="bg-white p-3 shadow" style="border-radius:8px;overflow: hidden;">
				<div>
					<h4 class="font-weight-bold">
						${item.name}
					</h4>
				</div>
				<div class="d-flex mt-4 justify-content-center">
					<img height="200" src="${item.image}" />
				</div>
				<div class="mt-2">
					<b>${item.description} </b>
				</div>
				<form action="javascript:void(0)" onSubmit="setCartQuantity(this,'quantity')">
					<div class="mt-2 d-flex flex-nowrap justify-content-center align-items-center">
						<div class="col-md-9 d-flex  justify-content-start align-items-center">
							<div style=";width:35%;">
								<input type="number" class="form-control" value="${input_default_value}">
								<input type="hidden" class="form-control" value="${item.id}">
							</div>
							<div style="margin-left:10px;">
								<button class="btn btn-success ">
									Add
								</button>
							</div>
						</div>
						<div class="col-md-3 d-flex justify-content-end">
							<button class="btn btn-dark">
								<i class="fa fa-eye" aria-hidden="true"></i>
							</button>
						</div>
					</div>
				</form>

			</div>
		`
		main.appendChild(div)
	})
}


let cart = []

setCartQuantity =(event, div_id)=> {
	let input = (parseInt(event[0].value) > 0)?parseInt(event[0].value):1
	let bottle_id = parseInt(event[1].value)
	let obj = wines.find((wine)=>wine.id === bottle_id)

	obj['quantity'] = (obj['quantity'] === undefined)?input:obj['quantity']
	let is_exist = false
	cart.map((item)=>{
		if(item.id === obj.id){
			is_exist = true
			obj.quantity += input
		}
	})

	if(!is_exist){
		cart.push(obj)
	}

	let number = 0
	let quantity = cart.map((item)=> number+=item.quantity)

	let div = document.getElementById(div_id)
	div.innerText = number
	alert(`წარმატებით დაემატა ${number}ცალი ჩამონათვალში.`)
}

makeModalDiv =(name, div_append_direction)=> {
	let background = document.createElement('div')
	background.setAttribute('style','z-index:1;display:box;padding:10px;background-color: rgba(0, 0, 0, 0.4);top:0;left:0;position:absolute;width:100%;height:100vh;')
	background.onclick = (event)=>{
		event.target.setAttribute('style','z-index:1;display:none!important;')
	}
	background.setAttribute('class', 'd-flex justify-content-center align-items-center')
	background.setAttribute('id', name)

	let div = document.createElement('div')
	div.setAttribute('class','shadow p-3 bg-white d-flex')
	div.setAttribute('style','z-index:2;border-radius:8px;height:60vh;width:50%;')
	this.setWines(cart,div_append_direction)
	background.appendChild(div)
	document.getElementById(div_append_direction).appendChild(background)
}

modalFunction =(name, div_append_direction="body")=>{
	this.makeModalDiv(name,div_append_direction)
	setTimeout(()=>{
		let modal = document.getElementById(name)
		if(modal){
			let display = (modal.style.display==='none' && modal.style.display==='')?'box':'none'
			modal.style.display = `${display}!important`
		}
	},500)
}

this.setWines(wines,'list')