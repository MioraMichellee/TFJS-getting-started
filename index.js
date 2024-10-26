
const values = [];
const shape = [2,5,3];

for(let i=0; i<30; i++){
    values[i]= Math.random();
}

const data = tf.tensor3d(values, shape,'int32')
data.print();
data.dataSync();


const test = tf.tensor([[[1], [2]], [[3], [4]]]);
console.log(tf.memory())
test.dispose() // libere la memoire allouer pour le tensor test 
console.log(tf.memory())
