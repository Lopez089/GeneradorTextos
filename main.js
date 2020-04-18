let name, age, city, profession, gender, checkedGender, $showData

// class new user
class NewUser{
	
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
		$showData.innerHTML = `Hola soy un ${checkedGender}, y mi nombre es ${name}. Tengo ${age} años. Soy ${profession} y vivo en ${city}.` ;
	}
}


function inicio() 
{
	b = document.getElementById("Enviar");
	b.addEventListener("click", app);
};

function app() 
{
	$('#modal').on('shown.bs.modal', function () {
		$('#ModalInput').trigger('focus')
	  })

	const user = new NewUser
	user.handleGetNewUser()
}