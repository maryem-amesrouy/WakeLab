const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: { "Content-Type": "application/json" },
});

const chargerActivites = async () => {
  try {
    const response = await api.get("/activites");
    return response.data;
    
  } catch (error) {
    console.error(error.response?.data?.message ?? "API inaccessible");
    return [];
  }
};
chargerActivites().then(resultat => console.log(resultat))





let user = document.getElementById("user")
let enreg = document.getElementById("enregistrement")

let nom = document.getElementById("enregistrementNom")

user.addEventListener("click" , ()=>{
  enreg.classList.remove("hidden")
})

nom.addEventListener("click",()=>{
  enreg.classList.add("hidden")
  if (condition) {
    
  }
})

let cartdLivre = document.getElementById("cartdLivre")


function affichageLivre() {
let divLivre = document.createElement("div")
  response.forEach(cart => {

    let livre

  
});


}




