
window.onload = function() {

    var automated = document.getElementById('automated');
    var manual = document.getElementById('manual');
    var reset = document.getElementById('reset');
    var btnSynthesizePicture = document.getElementById('btn-synthesize-picture');
    var btnDataAugmentation = document.getElementById('btn-data-augmentation');
    var allAuto = document.getElementById('all-auto');
    var nextBtn = document.getElementById('next-btn');
    var prevBtn = document.getElementById('prev-btn');


    
    automated.onclick = automatedFunc;
    manual.onclick = manualFunc;
    reset.onclick = resetFunc;
    btnSynthesizePicture.onclick = synthesizePictureFunc;
    btnDataAugmentation.onclick = btnDataAugmentationFunc;
    allAuto.onclick = allAutoFunc;
    nextBtn.onclick = nextFunc;
    prevBtn.onclick = prevFunc;
}

var pageController = 1;
var nauralArcSeachRadios = document.getElementsByName("neural-architecture-search");
var modelSelectionRadios = document.getElementsByName("model-selection");

// page controller
function nextFunc(){
    pageController++;
    if(pageController == 1){
        document.getElementById("prev-btn").style.display = "none";
        document.getElementById("next-btn").innerHTML = "Next";
        document.getElementById("next-btn").style.display = "block";
        document.getElementById("auto-btn").style.display = "initial";
    }
    else if(pageController == 2){
        document.getElementById("prev-btn").style.display = "block";
        document.getElementById("next-btn").innerHTML = "Run";
        document.getElementById("next-btn").style.display = "block";
    }

    else if(pageController == 3){
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("prev-btn").style.display = "none";
        document.getElementById("auto-btn").style.display = "none";

    }
}

function prevFunc(){
    pageController--;
    if(pageController == 1){
        document.getElementById("prev-btn").style.display = "none";
        document.getElementById("next-btn").innerHTML = "Next";
    }
    else if(pageController == 2){
        document.getElementById("prev-btn").style.display = "block";
        document.getElementById("next-btn").innerHTML = "Run";
        document.getElementById("next-btn").style.display = "block";
    }

    else if(pageController == 3){
        
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("prev-btn").style.display = "none";
        document.getElementById("auto-btn").style.display = "none";
    }
}

function resetButtonsFunc(){
    pageController = 1;
    document.getElementById("prev-btn").style.display = "none";
    document.getElementById("next-btn").innerHTML = "Next";
    document.getElementById("next-btn").style.display = "block";
    document.getElementById("auto-btn").style.display = "initial";
}

function autoButtonsFunc(){
    pageController = 2;
    document.getElementById("prev-btn").style.display = "block";
    document.getElementById("next-btn").innerHTML = "Run";
    document.getElementById("next-btn").style.display = "block";
}

//page controller end

// bottom auto button
function allAutoFunc(){
    autoButtonsFunc();

    document.querySelectorAll("#blocked-algorithm option").forEach(opt => {
        if (opt.value == "gradient-boosting") {
            opt.selected = true;
        }
    });

    document.querySelectorAll("#optimization-algorithm option").forEach(opt => {
        if (opt.value == "bayes-search") {
            opt.selected = true;
        }
    });

    document.querySelectorAll("#learning-rate option").forEach(opt => {
        if (opt.value == "0.03") {
            opt.selected = true;
        }
    });
    
    document.querySelectorAll("#activation option").forEach(opt => {
        if (opt.value == "tanh") {
            opt.selected = true;
        }
    });

    document.querySelectorAll("#regularization option").forEach(opt => {
        if (opt.value == "L1") {
            opt.selected = true;
        }
    });

    document.querySelectorAll("#regularization-rate option").forEach(opt => {
        if (opt.value == "0") {
            opt.selected = true;
        }
    });

    document.getElementById("carousel-1").className = "carousel-item";
    document.getElementById("carousel-2").className = "carousel-item active";
    document.getElementById("carousel-3").className = "carousel-item";
    
    document.getElementById('color-augmentation').checked = true;

    document.getElementById("training-ratio").value = "40";
    document.getElementById("training-ratio-output").innerHTML = "40";

    document.getElementById("noise").value = "5";
    document.getElementById("noise-output").innerHTML = "5";

    document.getElementById("batch-size").value = "15";
    document.getElementById("batch-size-output").innerHTML = "15";

    //modelSelectionRadios auto select 
    modelSelectionRadios[3].checked = true;
    //nauralArcSeachRadios auto select 
    nauralArcSeachRadios[4].checked = true;

    document.getElementById('ncounter').innerHTML = "2";
    document.getElementById('counter').innerHTML = "3";

    document.getElementById('synthetic').checked = true;

}
// bottom auto button end


// bottom reset button
function resetFunc(){
    resetButtonsFunc();
    document.querySelectorAll("#learning-rate option").forEach(opt => {
        if (opt.value == "automated") {
            opt.selected = true;
        }
    });

    document.querySelectorAll("#blocked-algorithm option").forEach(opt => {
        if (opt.value == "automated") {
            opt.selected = true;
        }
    });

    document.querySelectorAll("#activation option").forEach(opt => {
        if (opt.value == "automated") {
            opt.selected = true;
        }
    });

    document.querySelectorAll("#regularization option").forEach(opt => {
        if (opt.value == "automated") {
            opt.selected = true;
        }
    });

    document.querySelectorAll("#optimization-algorithm option").forEach(opt => {
        if (opt.value == "automated") {
            opt.selected = true;
        }
    });

    document.querySelectorAll("#regularization-rate option").forEach(opt => {
        if (opt.value == "automated") {
            opt.selected = true;
        }
    });

    document.getElementById("result-picture").style.display = "none";
    document.getElementById("btn-bottom").style.marginBottom = "100px";

    document.getElementById("carousel-1").className = "carousel-item active";
    document.getElementById("carousel-2").className = "carousel-item";
    document.getElementById("carousel-3").className = "carousel-item";
    
    document.getElementById("adding-noise").checked = false;
    document.getElementById('ratation').checked = false;
    document.getElementById('translation').checked = false;
    document.getElementById('contrast').checked = false;
    document.getElementById('saturation').checked = false;
    document.getElementById('color-augmentation').checked = false;
    document.getElementById('brightness').checked = false;
    document.getElementById('scalling').checked = false;
    document.getElementById('flipping').checked = false;
    document.getElementById('cropping').checked = false;

    document.getElementById("training-ratio").value = "25";
    document.getElementById("training-ratio-output").innerHTML = "25";

    document.getElementById("noise").value = "0";
    document.getElementById("noise-output").innerHTML = "0";

    document.getElementById("batch-size").value = "10";
    document.getElementById("batch-size-output").innerHTML = "10";


    modelSelectionRadios[0].checked = true;
    nauralArcSeachRadios[0].checked = true;

    document.getElementById('ncounter').innerHTML = "0";
    document.getElementById('counter').innerHTML = "0";

    document.getElementById('synthetic').checked = true;
}


function synthesizePictureFunc(){
    document.getElementById("result-picture").style.display = "grid";
    document.getElementById("btn-bottom").style.marginBottom = "0";
    
}

function btnDataAugmentationFunc(){
    document.getElementById("result-picture").style.display = "grid";
    document.getElementById("btn-bottom").style.marginBottom = "0";
}

function automatedFunc() {

    document.getElementById('ms-automated').checked = true;

    document.getElementById('feed-forward-neural-network').disabled = true;
    document.getElementById('multilayer-perceptron').disabled = true;
    document.getElementById('convolutional-neural-network').disabled = true;
    document.getElementById('radial-basis-functional-neural-network').disabled = true;
    document.getElementById('recurrent-neural-network').disabled = true;
    document.getElementById('lstm-long-short-term-memory').disabled = true;
    document.getElementById('sequence-to-sequence-model').disabled = true;
    document.getElementById('modular-neural-network').disabled = true;
    document.getElementById('generative-adversarial-network').disabled = true;
    document.getElementById('autoencoder').disabled = true;
    document.getElementById('transformer').disabled = true;

    document.getElementById('nas-automated').checked = true;

    document.getElementById('reinforcement-learning').disabled = true;
    document.getElementById('evolutionary-algorithm').disabled = true;
    document.getElementById('gradient-descent').disabled = true;
    document.getElementById('random-search').disabled = true;
    document.getElementById('neural-bayesian-optimization').disabled = true;

    document.querySelectorAll("#blocked-algorithm option").forEach(opt => {
        if (opt.value == "automated") {
            opt.selected = true;
        }
        opt.disabled = true;
    });

    document.querySelectorAll("#learning-rate option").forEach(opt => {
        if (opt.value == "automated") {
            opt.selected = true;
        }
        opt.disabled = true;
    });

    document.querySelectorAll("#activation option").forEach(opt => {
        if (opt.value == "automated") {
            opt.selected = true;
        }
        opt.disabled = true;
    });

    document.querySelectorAll("#regularization option").forEach(opt => {
        if (opt.value == "automated") {
            opt.selected = true;
        }
        opt.disabled = true;
    });

    document.querySelectorAll("#regularization-rate option").forEach(opt => {
        if (opt.value == "automated") {
            opt.selected = true;
        }
        opt.disabled = true;
    });


    document.querySelectorAll("#optimization-algorithm option").forEach(opt => {
        if (opt.value == "automated") {
            opt.selected = true;
        }
        opt.disabled = true;
    });
}

function manualFunc() {

    document.querySelectorAll("#learning-rate option").forEach(opt => {
        opt.disabled = false;
    });

    document.querySelectorAll("#activation option").forEach(opt => {
        opt.disabled = false;
    });

    document.querySelectorAll("#regularization option").forEach(opt => {
        opt.disabled = false;
    });

    document.querySelectorAll("#regularization-rate option").forEach(opt => {
        opt.disabled = false;
    });

    document.querySelectorAll("#blocked-algorithm option").forEach(opt => {
        opt.disabled = false;
    });


    document.getElementById('feed-forward-neural-network').disabled = false;
    document.getElementById('multilayer-perceptron').disabled = false;
    document.getElementById('convolutional-neural-network').disabled = false;
    document.getElementById('radial-basis-functional-neural-network').disabled = false;
    document.getElementById('recurrent-neural-network').disabled = false;
    document.getElementById('lstm-long-short-term-memory').disabled = false;
    document.getElementById('sequence-to-sequence-model').disabled = false;
    document.getElementById('modular-neural-network').disabled = false;
    document.getElementById('generative-adversarial-network').disabled = false;
    document.getElementById('autoencoder').disabled = false;
    document.getElementById('transformer').disabled = false;


    document.getElementById('reinforcement-learning').disabled = false;
    document.getElementById('evolutionary-algorithm').disabled = false;
    document.getElementById('gradient-descent').disabled = false;
    document.getElementById('random-search').disabled = false;
    document.getElementById('neural-bayesian-optimization').disabled = false;
}



let counter = document.getElementById('counter');
let incr = document.querySelector('#incr');
let decr = document.querySelector('#decr');
let count = 0;
incr.addEventListener("click", ()=>{
    count++;
    updateDisplay();
});
decr.addEventListener("click", ()=>{
    if(document.getElementById('counter').innerHTML >0){
        count--;
        updateDisplay();
    }
});
function updateDisplay(){
    counter.innerHTML = count;
};



let ncounter = document.getElementById('ncounter');
let nincr = document.querySelector('#nincr');
let ndecr = document.querySelector('#ndecr');
let ncount = 0;
nincr.addEventListener("click", ()=>{
    ncount++;
    nUpdateDisplay();
});
ndecr.addEventListener("click", ()=>{
    if(document.getElementById('ncounter').innerHTML >0){
        ncount--;
        nUpdateDisplay();
    }
    
});
function nUpdateDisplay(){
    ncounter.innerHTML = ncount;
};


