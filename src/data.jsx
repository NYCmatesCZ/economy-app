
let Profil = JSON.parse(localStorage.getItem('profil')) 
if (!Profil){
    Profil = {
        money: 300,
        suroviny: [{
            nazev: "Pšenice",
            pocet: 400,
        }]
    }
    localStorage.setItem("profil",JSON.stringify(Profil))
}
export default Profil
