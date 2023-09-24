'use script';

  let playlist //variable playlist
let prenom="John" //variable prénom du personnage
   let SanteMental=10 //variable niveau de santé mental
let feuRouge=30 //variable nombre de feu rouge
       let nbrTaxi=1 //variable nombre de taxi

       let Musique=["Anissa-Wejdene","musique 2","musique 3","musique 4","musique 5"]
      //liste des 5 chansons dont Anissa-Wejdene

  
for (let i=29;i>=0;i--){
  playlist=Musique[Math.floor(Math.random() * Musique.length)]; //aléatoire
  if(playlist=="Anissa-Wejdene"){
    SanteMental--;
              nbrTaxi++;
    console.log("john perd un point de santé mentale et change de taxi. Il reste à John "+SanteMental+" points de santé mentale et il reste "+i+" feux rouges.");
      console.log("Dans cette playlist il y a  "+ Musique.length)//si la chanson Anissa-Wejdene est joué alors John perd 1 point de santé mental
  }
  if (SanteMental==0){
    console.log("La santé mentale de Paul est tombée à 0, EXPLOSION")
    break//si la santé mental de John tombe à 0 alors il explose
  }
  if (i==0){
    console.log("Paul est rentré chez lui avec "+nbrTaxi+" taxis.")
    break  //phrase finale
  }
  if (playlist=="musique 2"){ //si musique 2 est joué alors John apprécie la musique et affiche le nombre de feux rouges restant
    console.log("John apprécie la musique, il reste "+i+" feux rouges")
  }
  if (playlist=="musique 3"){//si musique 3 est joué alors John apprécie la musique et affiche le nombre de feux rouges restant
    console.log("John apprécie la musique, il reste "+i+" feux rouges")
  }
  if (playlist=="musique 4"){//si musique 4 est joué alors John apprécie la musique et affiche le nombre de feux rouges restant
    console.log("John apprécie la musique, il reste "+i+" feux rouges")
  }
  if (playlist=="musique 5"){//si musique 5 est joué alors John apprécie la musique et affiche le nombre de feux rouges restant
    console.log("John apprécie la musique, il reste "+i+" feux rouges")
  }

}
        
