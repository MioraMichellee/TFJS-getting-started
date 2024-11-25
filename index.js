
// const values = [];
// const shape = [2,5,3];

// for(let i=0; i<30; i++){
//     values[i]= Math.random();
// }

// const data = tf.tensor3d(values, shape,'int32')
// data.print();
// data.dataSync();


// const test = tf.tensor([[[1], [2]], [[3], [4]]]);
// console.log(tf.memory())
// test.dispose() // libere la memoire allouer pour le tensor test 
// console.log(tf.memory())

// Seuil de toxicite
const threshold = 0.5;
function classify() {
  const inputText = document.getElementById("myText").value;  // Récupérer le texte du champ

  if (inputText.trim() === "") {
    alert("Veuillez entrer un texte.");
    return;
  }

  // Charger le modèle
  toxicity.load(threshold).then((model) => {
    // Classifier
    model.classify(inputText).then((predictions) => {
      console.log(predictions);
      
      // Affichage du resultat
      let result = "Résultats de l'analyse :<br>";
      predictions.forEach((prediction) => {
        result += `${prediction.label}: ${prediction.results[0].match ? "Toxicité détectée" : "Pas de toxicité"}<br>`;
      });
      document.getElementById("result").innerHTML = result;
    });
  });
}