// FEATURES SECTION ANIMATION

let features = document.querySelectorAll(".features");

let currentFeature = features[0];

currentFeature.classList.add("active-feature");

function newFeature(newFeature){

    if(newFeature != currentFeature){

        oldFeature(currentFeature);

        setTimeout(function(){
            newFeature.classList.add("active-feature")
        }, 1000)
    
        currentFeature = newFeature

    }
}

function oldFeature(oldFeature){

    oldFeature.classList.add("old-feature");

    if(oldFeature.classList.contains("active-feature")){

        setTimeout(function(){

            oldFeature.classList.remove("active-feature")

        }, 1000)

    }

    setTimeout(function(){

        oldFeature.classList.remove("old-feature")

    }, 2000)
}

// ACCORDIAN SCRIPT

let accordianTabs = document.querySelectorAll(".accordian-tab");

accordianTabs.forEach(function(accordian){

    accordian.onclick = function(){

        let accordianBody = this.lastElementChild;

        let arrow = this.firstElementChild.lastElementChild;

        if(accordianBody.classList.contains("accordian-body")){

            accordianBody.classList.remove("accordian-body");

            arrow.classList.remove("active-arrow")

        }else{

            closeAllTabs(accordianTabs);

            accordianBody.classList.add("accordian-body")

            arrow.classList.add("active-arrow")

        }

    }

})

function closeAllTabs(accordians){

    accordians.forEach(function(accordian){

        let closeItem = accordian.lastElementChild;

        let arrow = accordian.firstElementChild.lastElementChild;

        if(closeItem.classList.contains("accordian-body")){

            closeItem.classList.remove("accordian-body");

        }

        if(arrow.classList.contains("active-arrow")){

            arrow.classList.remove("active-arrow");

        }

    })

}
