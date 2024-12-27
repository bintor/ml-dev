const tf = require('@tensorflow/tfjs-node');
 
async function loadModel() {
    return tf.loadGraphModel("file://models/model.json");
}
 
module.exports = loadModel;