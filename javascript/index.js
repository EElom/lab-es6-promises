// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));



// Iteration 1 - using callbacks

 getInstruction(0, ()=>{
  getInstruction(1, ()=>{
    getInstruction(2, ()=>{
      getInstruction(3, ()=>{
        getInstruction(4, ()=>{
        });
      });
     });
  });
});


// Iteration 2 - using promises


obtainInstruction("steak", 0)
  .then((step0) => {
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    return obtainInstruction("steak", 2);
  })
  .then((step2)=> {
    return obtainInstruction("steak", 3);
  })
  .then((step3)=> {
    return obtainInstruction("steak", 4);
  })
  .then((step4)=> {
    return obtainInstruction("steak", 5);
  })
  .then((step5)=> {
    return obtainInstruction("steak", 6);
  })
  .then((step6)=> {
    return obtainInstruction("steak", 7);
  })
  .then((step7)=> {
    return obtainInstruction("Steak is ready");  
  })






// Iteration 3 using async/await

async function makeBroccoli() {
  const step0 = await obtainInstruction ("broccoli", 0);
  const step1 = await obtainInstruction ("broccoli", 1);
  const step2 = await obtainInstruction ("broccoli", 2);
  const step3 = await obtainInstruction ("broccoli", 3);
  const step4 = await obtainInstruction ("broccoli", 4);
  const step5 = await obtainInstruction ("broccoli", 5);
  const step6 = await obtainInstruction ("broccoli", 6);
  const step7 = await obtainInstruction ("broccoli is ready");
}

// Bonus 1

makeBroccoli();

// Bonus 2 - Promise all

const pr0 = obtainInstruction("broccoli",0);
const pr1 = obtainInstruction("broccoli", 1);
const pr2 = obtainInstruction("broccoli", 2);
const pr3 = obtainInstruction("broccoli", 3);
const pr4 = obtainInstruction("broccoli", 4);
const pr5 = obtainInstruction("broccoli", 5);
const pr6 = obtainInstruction("broccoli", 6);

Promise.all([pr0, pr1, pr2, pr3, pr4, pr5, pr6])
  .then((values) => {
    values.forEach((instruction) => {
    });
  })
  .catch((err) => console.log(err));
  