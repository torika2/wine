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
let money = 1000
setWines =(data,div_id,input_default_value=1)=>{
	let main = document.getElementById(div_id)
	document.getElementById(div_id).innerHTML=""
	data.map((item)=>{
		let div = document.createElement('div')
		div.setAttribute('class','col-12 col-sm-12 col-md-6 col-xl-4 mt-5 mb-2')
		let is_modal = (div_id==='cart-init')?true:false
		let quantity = (is_modal)?item.quantity:input_default_value
		let obj = {
			button:{
				title:(is_modal)?'Edit':'Add',
				class:(is_modal)?'btn-warning':'btn-success',
				onSubmit:(is_modal)?`editItemQuantity(item_quantity${item.id}, ${item.quantity}, this)`:"setCartQuantity(this,'quantity')",
				delete:(is_modal)?'box':'none',
			},
		}
		let item_div_id = `${obj.button.title}wine${item.id}`
		div.setAttribute('id',item_div_id)
		div.innerHTML=`
			<div class="bg-white p-3 shadow position-relative" style="border-radius:8px;overflow: hidden;">
				<div class="position-absolute" style="display:${obj.button.delete};top:0px;right:0px;">
					<button class="btn btn-danger" onclick="deleteItem(${item_div_id})">
						X
					</button>
				</div>
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
				<form action="javascript:void(0)" onSubmit="${obj.button.onSubmit}">
					<div class="mt-2 row justify-content-between">
						<div class="col-md-12 col-12 col-sm-12 col-xl-9 d-flex">
							<div class="col-md-9 m-0 pl-0">
								<input type="number" id="item_quantity${item.id}" class="form-control" value="${quantity}">
							</div>
							<div class="col-md-3 p-0 m-0">
								<input type="hidden" class="form-control" value="${item.id}">
								<button style="width:100%;" class="btn ${obj.button.class}">
									${obj.button.title}
								</button>
							</div>
						</div>
						<div class="col-md-12 col-12 col-sm-12 col-xl-3 mt-2 mt-sm-2 mt-md-2 mt-xl-0">
							<button class="btn btn-dark" style="width:100%;">
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
	this.setWines(cart,'cart-init')
}

editItemQuantity =(item_id, quantity, step)=>{
	document.getElementById(item_id).value = quantity+step
}

deleteItem =(item)=> {
	document.getElementById(item.id).remove()
}

modalFunction =(name, div_append_direction="list")=> {
	let modal = document.getElementById(name)
	if(modal){
		// let display = (modal.style.display==='none' && modal.style.display==='')?'open-modal':'closed-modal'
		let class_name = 'closed-modal' 
		modal.classList.forEach((cls)=>{
		  if(cls === 'closed-modal'){
		    class_name = 'open-modal'
		  }
		})
		modal.setAttribute('class',`${class_name} cart-modal d-flex justify-content-center align-items-center`)
	}
}
closeCartModal =(div_id)=> {
	let div = document.getElementById(div_id)
	div.setAttribute('class',`closed-modal cart-modal d-flex justify-content-center align-items-center`)
}
addWine =(event)=> {

}
this.setWines(wines,'list')