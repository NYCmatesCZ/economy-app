
let Profil = JSON.parse(localStorage.getItem('profil')) 
if (!Profil){
    Profil = {
        money: 300,
        suroviny: [],
    }
}
export default Profil
