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

setWines =()=>{
	let main = document.getElementById('list')
	wines.map((bottle)=>{
		let div = document.createElement('div')
		div.setAttribute('class','col-md-4 mt-2 mb-2')
		div.innerHTML=`
			<div class="bg-white p-3 shadow" style="border-radius:8px;overflow: hidden;">
				<div>
					<h4 class="font-weight-bold">
						${bottle.name}
					</h4>
				</div>
				<div class="d-flex mt-4 justify-content-center">
					<img height="200" src="${bottle.image}" />
				</div>
				<div class="mt-2">
					<b>${bottle.description} </b>
				</div>
				<div class="mt-2 row">
					<div class="col-md-9">
						<button class="btn btn-success w-100">
							Add to cart
						</button>
					</div>
					<div class="col-md-3">
						<button class="btn btn-dark w-100">
							<i class="fa fa-eye" aria-hidden="true"></i>
						</button>
					</div>
				</div>
			</div>
		`
		main.appendChild(div)
	})
}


let menu = [
	{
		id:1,
		title:'home',
		url:'./home',
		is_active:false,
	},
]

setMenu =()=>{
	let main = document.getElementById('header')

}

this.setWines()