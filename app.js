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
chargerActivites().then(resultat => {console.log(resultat)
  affichageLivre(resultat)
})








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

let cartdActivite = document.getElementById("cartdActivite")


function affichageLivre(data) {
  data.forEach(card => {
   let apperent = document.createElement("div")
   apperent.classList.add("border-2" ,"border-black" ,"rounded-lg"  ,"h-[300px]" ,"p-5")

cartdActivite.append(apperent)
apperent.append(cardInfo(card) , contenue(card) , desObjectif(card) , button(card)  )
  });



}


function cardInfo(Activity){
  let info = document.createElement("div")
  info.classList.add("flex" ,"justify-around" ,"gap-3")

  let theme=document.createElement("div")
  theme.classList.add("flex" ,"justify-center" ,"items-center" ,"border" ,"rounded-full" ,"bg-green-400" ,"w-[130px]" ,"text-[14px]" ,"text-green-700" ,"shadow-xl" ,"h-8")
  let min = document.createElement("div")
  min.classList.add("flex" ,"justify-center" ,"items-center" ,"border" ,"rounded-full" ,"w-[80px]" ,"text-[14px]" ,"text-white" ,"bg-gray-300")
  let nomDiv = document.createElement("div")
  nomDiv.classList.add("flex" ,"border" ,"rounded-full" ,"justify-center" ,"items-center" ,"w-[150px]" ,"text-[14px]")
  info.append(theme , min , nomDiv)
 let paraTheme=document.createElement("p")
 let temp = document.createElement("p")
 let nom = document.createElement("p")
 theme.append(paraTheme)
 min.append(temp)
 nomDiv.append(nom)

paraTheme.textContent=`${Activity.theme}`
temp.textContent=`${Activity.duree}`
nom.textContent+=`${Activity.auteur}`

return info

}


function contenue(description){
  let titreDiv = document.createElement("div")
  let titreact = document.createElement("h2")
  titreDiv.classList.add("font-bold" ,"text-[20px]")

titreDiv.append(titreact)
titreact.textContent =`${description.titre}`
return titreDiv

}

function desObjectif(objectif) {
     let obj = document.createElement("div")
     obj.classList.add("flex" ,"justify-center" ,"items-center" ,"p-5")
    let object = document.createElement("p")

    obj.append(object)
    object.textContent=`${objectif.objectifs}`
    console.log(objectif.objectifs)
  
    return obj
  
}

function button() {
  let divBtn= document.createElement("div")
  divBtn.classList.add("flex" ,"justify-around")
  let btnModiffier = document.createElement("div")
  btnModiffier.classList.add("border" ,"rounded-lg" ,"flex" ,"justify-center" ,"items-center" ,"w-[150px]","h-[40px]")
  let btnSupprimer = document.createElement("div")
  btnSupprimer.classList.add("border" ,"rounded-lg" ,"flex" ,"justify-center" ,"items-center" ,"w-[150px]" ,"h-[40px]" ,"bg-red-500")

  divBtn.append(btnModiffier , btnSupprimer)
  let modifiet = document.createElement("button")
let supprimer = document.createElement("button")
 btnModiffier.append(modifiet)
 btnSupprimer.append(supprimer)

 modifiet.textContent="Modiffier"
 supprimer.textContent="Supprimer"

 return divBtn
 
}


















