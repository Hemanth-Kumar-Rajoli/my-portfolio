document.querySelector('#backward').addEventListener('click',()=>{
    rightPosition = document.getElementById('skills-card-container')
    rightInteger = parseInt((rightPosition.style.right.split("px").length>0)?rightPosition.style.right.split("px")[0]:'0');
    if(rightPosition.style.right && rightInteger>0){
        rightPosition.style.right=""+(rightInteger-300)+"px";
    }
})
document.querySelector('#forward').addEventListener('click',()=>{
    rightPosition = document.getElementById('skills-card-container')
    if(!rightPosition.style.right){
        rightPosition.style.right='300px'
    }
    else{
        if(parseInt(rightPosition.style.right.split("px")[0])>=(rightPosition.dataset.totalSkills*300))
            rightPosition.style.right="0px"
        else
            rightPosition.style.right=""+(parseInt(rightPosition.style.right.split("px")[0])+300)+"px";
    }
})
document.querySelector('#backward-2').addEventListener('click',()=>{
    rightPosition = document.getElementById('skills-card-container')
    rightInteger = parseInt((rightPosition.style.right.split("px").length>0)?rightPosition.style.right.split("px")[0]:'0');
    if(rightPosition.style.right && rightInteger>0){
        rightPosition.style.right=""+(rightInteger-300)+"px";
    }
})
document.querySelector('#forward-2').addEventListener('click',()=>{
    rightPosition = document.getElementById('skills-card-container')
    if(!rightPosition.style.right){
        rightPosition.style.right='300px'
    }
    else{
        if(parseInt(rightPosition.style.right.split("px")[0])>=(rightPosition.dataset.totalSkills*300))
            rightPosition.style.right="0px"
        else
            rightPosition.style.right=""+(parseInt(rightPosition.style.right.split("px")[0])+300)+"px";
    }
})