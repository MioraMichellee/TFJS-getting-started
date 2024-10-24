const array = [];
const shape = [2,3];

for (let i=0; i<6;i++){
    array[i]= Math.random();
}

const data = tf.tensor2d(array, shape, 'int32' );

data.print();