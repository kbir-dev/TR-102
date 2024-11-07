// 1) To-Do Data
async function fetchData() {

    try {
        const response = await fetch("https://dummyjson.com/todos")
        const data = await response.json()
        const todos = data.todos
    
        const card = document.querySelector(".card")
    
        todos.forEach(e => {
            card.innerHTML += `
            <div class="card text-bg-warning mb-3 box" style="max-width: 18rem;">
              <div class="card-header">ID :  ${e.id}</div>
               <div class="card-body">
                <h5 class="card-title">Todo :   ${e.todo} </h5>
                <p class="card-text">Completed :  ${e.completed}</p>
                <p class="card-text">UserId :   ${e.userId} </p>
              </div>
            </div>
            `
        });
        
    } catch (error) {
        console.log(error)
        
    }


}

fetchData()

// 2) User Details

async function user(){
    const res = await fetch ("https://dummyjson.com/users")
    const dta = await res.json()
    const u = dta.users
    // console.log(u)

    // ${obj.image}
    // ${obj.firstName}
    // ${obj.lastName}
    //  ${obj.gender}
    //  ${obj.email}
    //  ${obj.phone}
    //  ${obj.address.city}
    //  ${obj.company.name}


    const card1 = document.querySelector(".ucard")

    u.forEach(function(obj){
        card1.innerHTML+=`

          <div class="card text-bg-warning " style="width: 18rem;">
                    <img src="${obj.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Name : ${obj.firstName} ${obj.lastName} </h5>
                    <p class="card-text">
                        Gender : ${obj.gender} 
                        <br/>
                        E-mail :  ${obj.email}
                    </p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Mobile Number : ${obj.phone}</li>
                <li class="list-group-item">City : ${obj.address.city} </li>
                <li class="list-group-item">Company Name :  ${obj.company.name}</li>
            </ul>
           
            </div>
         `
    });
}
user()

