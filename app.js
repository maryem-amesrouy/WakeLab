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
console.log(chargerActivites().json().data)

let enreg = document.getElementById("enregistrement")

enreg.addEventListener("click" , ()=>{
  form.classList.toggle("hidden")
})

