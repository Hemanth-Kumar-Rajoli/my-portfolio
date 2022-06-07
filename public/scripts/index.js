let itemNo = 0
document.querySelector(`[data-item-no='0']`).classList.add('skills-card-hide');
function hideOnMobileCompatability(number,boolHide){
    console.log(number)
    let ele = document.querySelector(`[data-item-no='${number}']`)
    if(boolHide){
        ele.classList.remove('skills-card-hide');
    }else{
        ele.classList.add('skills-card-hide');
    }
    console.log(ele)
}
document.querySelector('#backward').addEventListener('click',()=>{
    rightPosition = document.getElementById('skills-card-container')
    rightInteger = parseInt((rightPosition.style.right.split("px").length>0)?rightPosition.style.right.split("px")[0]:'0');
    if(rightPosition.style.right && rightInteger>0){
        rightPosition.style.right=""+(rightInteger-310)+"px";
    }
})
document.querySelector('#forward').addEventListener('click',()=>{
    rightPosition = document.getElementById('skills-card-container')
    if(!rightPosition.style.right){
        rightPosition.style.right='310px'
    }
    else{
        if(parseInt(rightPosition.style.right.split("px")[0])>=(rightPosition.dataset.totalSkills*310)){
            rightPosition.style.right="0px"
        }
        else{
            rightPosition.style.right=""+(parseInt(rightPosition.style.right.split("px")[0])+310)+"px";
        }
    }
})
document.querySelector('#backward-2').addEventListener('click',()=>{
    rightPosition = document.getElementById('skills-card-container')
    // rightInteger = parseInt((rightPosition.style.right.split("px").length>0)?rightPosition.style.right.split("px")[0]:'0');
    if(itemNo>0){
        // rightPosition.style.right=""+(rightInteger-310)+"px";
        hideOnMobileCompatability(itemNo,true);
        itemNo--;
        hideOnMobileCompatability(itemNo,false);
    }
})
document.querySelector('#forward-2').addEventListener('click',()=>{
    rightPosition = document.getElementById('skills-card-container')
    hideOnMobileCompatability(itemNo,true);
    
    itemNo=(itemNo+1)%(rightPosition.dataset.totalSkills);
    hideOnMobileCompatability(itemNo,false);
})