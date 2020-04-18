let name, age, city, profession, gender, checkedGender, $showData

// class new user
class NewUser{
	constructor(name, age, city, profession, gender){
		this.name = name,
		this.age= age,
		this.city = city,
		this.profession = profession,
		this.gender = gender
	}
	handleGetNewUser(){
		name= document.querySelector('#name').value
		age = document.querySelector('#age').value
		city = document.querySelector('#city').value
		profession= document.querySelector('#profession').value
		gender = document.querySelectorAll("input[name='gender']")

		this.checkedValueGender(gender)
		this.showDataUI(name, age, city, profession, checkedGender)
		console.log({
			name, 
			age, 
			city, 
			profession,
			checkedGender
		})
	}
	checkedValueGender(gender){
		gender.forEach((genders, i, gender )=>{
			let genderCheckedValue = genders.checked
			genderCheckedValue? checkedGender= gender[i].value : null	
		})
	}
	validateDate(){

	}
	showDataUI(name, age, city, profession,checkedGender){
		$showData = document.getElementById("texto");
		$showData.innerHTML = `Hola soy un ${checkedGender}, y mi nombre es ${name}. Tengo una edad de ${age} años. Soy ${profession} y vivo en ${city}` ;
	}
}








var s, n, e, p, c, b, tsh, tsm, tn, te, tp, tc;

/*tsh = document.getElementById("hombre");
tsm = document.getElementById("mujer");
var tsmv = (tsh.value);
function hombreMujer() {
	
}*/

tn = document.getElementById("nombre");
var tnv = tn.value;  /////////////introducir los valores

// function humano(s,n,e,p,c)
// {
// 	this.sexo = s;
// 	this.nombre = n;
// 	this.edad = e;
// 	this.profecion = p;
// 	this.ciudad = c;
// };

function genero() 
{
	var t = document.getElementById("texto");
	s = hombre.sexo;
	n = hombre.nombre;
	e = hombre.edad;
	p = hombre.profecion;
	c = hombre.ciudad;
	if (hombre.sexo == "hombre") 
	{
		t.innerHTML = "Hola soy un hombre, y mi nombre es " + n + ". Tengo una edad de " + e +" años. Me dedico profesionalmente a "+p+ " y soy de " +c ;
	}
	else
	{
		t.innerHTML = "Hola soy una mujer, y mi nombre es " + n + ". Tengo una edad de " + e +" años. Me dedico profesionalmente a "+p+ " y soy de " +c;
	};
};


function inicio() 
{
	b = document.getElementById("Enviar");
	b.addEventListener("click", app);
	

	//var hombre = new humano("mujer","pepe",28,"pescadero","cadiz");
	
};

function app() 
{
	$('#modal').on('shown.bs.modal', function () {
		$('#ModalInput').trigger('focus')
	  })

	const user = new NewUser
	user.handleGetNewUser()
}