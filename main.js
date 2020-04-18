let name, age, city, profession, gender, checkedGender, $showData, $buttonSubmit, $form, $buttonReset

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
	resetForm(){
		$form = document.querySelector('form')
		$form.reset()
	}
}

function inicio() 
{
	const user = new NewUser

	$buttonSubmit = document.querySelector("#buttonEnviar");
	$buttonSubmit.addEventListener("click", app);
	$buttonReset = document.querySelector('#buttonReset')
	$buttonReset.addEventListener("click", user.resetForm)
};

function app() 
{
	$('#modal').on('shown.bs.modal', function () {
		$('#ModalInput').trigger('focus')
	  })

	const user = new NewUser
	user.handleGetNewUser()
	user.resetForm()
}