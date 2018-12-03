/*jshint esversion:6*/
const worker = {
    weight: 80,
    experience: 1,
    bloodAlcjoholLevel: 0,
    handShakig: true
};

function fixWorking(workerObj) {
    if (!workerObj.handShakig) {
        return Object.create(workerObj);
    }
    const newWorker = Object.create(workerObj);
    newWorker.bloodAlcjoholLevel += 0.1 * newWorker.weight * newWorker.experience;
    newWorker.handShakig = false;

    return newWorker;
}
console.log(JSON.stringify(fixWorking({
    weight: 120,
    experience: 20,
    bloodAlcjoholLevel: 200,
    handShakig: true
}))); //JSON do not show properties in prototype. Only hasOwnProperty
console.log(fixWorking({
    weight: 120,
    experience: 20,
    bloodAlcjoholLevel: 200,
    handShakig: true
}));