
let Profil = JSON.parse(localStorage.getItem('profil')) 
if (!Profil){
    Profil = {
        money: 300,
        suroviny: [{
            nazev: "Pšenice",
            pocet: 0,
        },
        {
            nazev: "Dřevo",
            pocet: 0,
        },
        {
            nazev: "Olej",
            pocet: 0,
        },
        {
            nazev: "Plátno",
            pocet: 0,
        },
        {
            nazev: "Bylinky",
            pocet: 0,
        },
        ]
    }
    localStorage.setItem("profil",JSON.stringify(Profil))
}
export default Profil
