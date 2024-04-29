var scores=[
    {
        // "src":img,
        "firstname":"Manish",
        "lastname":"Kumar",
        "country":"India",
        "profession":'criketer',
        "scores":2101
        

    },
    {
        "firstname":"Karan",
        "lastname":"Kumar",
        "country":"India",
        "profession":'criketer',
        "scores":2101
    },
    {
        "firstname":"Mahendra Singh",
        "lastname":"Dhoni",
        "country":"India",
        "profession":'criketer',
        "scores":1800
    },
    {
        "firstname":"Neeraj",
        "lastname":"Chopra",
        "country":"India",
        "profession":'Athelete',
        "scores":88.94
    },
    {
        "firstname":"Sunil",
        "lastname":"Chetri",
        "country":"India",
        "profession":'Footballer',
        "scores":2561
    }
]
function comparotor(a,b)
{

    if(a["scores"]>b['scores']){
        return -1;
    }
    else if(b['scores']>a['scores']){
        return 1;
    }else{
        return 0;
    }
}

function displayData(data)
{
 let main=document.getElementById('info')
 main.innerHTML= "";

data.sort(comparotor);
data.forEach((e)=>{

    let firstRowdiv=document.createElement('div');
    firstRowdiv.classList.add('row')

    // let img=document.createElement('img')
    // img.src='./download.jpeg'

    let firstP=document.createElement('p')
   firstP.innerText=e['firstname']+e["lastname"]


    let contryP=document.createElement('p')
    contryP.innerText=e["country"];

let profesp=document.createElement('p')
profesp.innerText=e['profession'];

    let scoresP=document.createElement('p');
    scoresP.innerText=e['scores']

// let incebtn=document.createElement('button');
// incebtn.innerText='+5'
// incebtn.addEventListener('click',()=>{
//     // alert('click')
//     incremntScore();
// });

  

    
//     let decrementbtn=document.createElement('button')
//     decrementbtn.innerHTML= "-5";
//     decrementbtn.addEventListener('click',()=>{
//         decrescore()
//     })
let incebtn = document.createElement('button');
incebtn.innerText = '+5';
incebtn.addEventListener('click', () => {
    let index = data.indexOf(e);
    incremntScore(index);
});

let decrementbtn = document.createElement('button');
decrementbtn.innerHTML = "-5";
decrementbtn.addEventListener('click', () => {
    let index = data.indexOf(e);
    decrescore(index);
});


    let del=document.createElement('button')
    del.innerHTML='delete';
    del.addEventListener('click',()=>{
        Toastify({
            text: "Delted the Item",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
        delteScore()
        
    })
   
    main.append(firstRowdiv);
//    firstRowdiv.append(img)
   firstRowdiv.append(firstP)
   firstRowdiv.append(contryP)
   firstRowdiv.append(scoresP)
   firstRowdiv.append(profesp)
   
   firstRowdiv.append(del)
   firstRowdiv.append(incebtn)
   firstRowdiv.append(decrementbtn)
//    firstRowdiv.append(i)

//    incremnetBtn.append(icons)

//    firstRowdiv.append(decrementbtn)
   console.log(main);
   


    console.log(e);
})

}

function delteScore(index)
{
scores.splice(index,1)
displayData(scores)
}
function incremntScore(index)
{
scores[index]["scores"]+=5
displayData(scores)

}
function decrescore(index)
{
    scores[index]["scores"]-=5;
    displayData(scores)

}
// function addData(fname,lname,country,profession,scores){
//     let obj={
// "firstname":fname,
// "lastname":lname,
// "country":country,
// profession,
// scores,


//     }
//     scores.push(obj);
// displayData(scores);
// }
function addData(fname, lname, country, profession, score) {
    let obj = {
        "firstname": fname,
        "lastname": lname,
        "country": country,
        "profession": profession,
        "scores": score,
    }
    scores.push(obj);
    displayData(scores);
}


window.addEventListener('load',()=>{
    
    displayData(scores);
document.getElementById('scoreform').addEventListener('submit',(e)=>{
    e.preventDefault();
    let fname=document.getElementById('fname').value;
    let lname=document.getElementById('lname').value;
    let country=document.getElementById('country').value;
    let profession=document.getElementById('pro').value;
    let scores=document.getElementById('score').value;
    Toastify({
        text: "Added the Item",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
      addData(fname,lname,country,profession,scores);

})
    
})