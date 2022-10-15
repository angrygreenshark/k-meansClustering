const width=400;
const height=600;
let randomWidth=Math.random()*width;
let randomHeight=Math.random()*height;
console.log("random width and height"+randomWidth,randomHeight)
const colors=['blue','red'];
//     const pauseButton=document.getElementById("pause");
//     pauseButton.addEventListener("click",()=>{

// })   
// * randomise collection
const randomise_button=document.getElementById("randomize-button");
randomise_button.addEventListener('click',()=>{
    clear();
    draw();
});
function setup() {
    createCanvas(width , height);
}
function draw() {
    frameRate(0);
    let arr=generateRandomVectors(10);
    // console.log(arr);
    // * pause button
    const cluster_button=document.getElementById("cluster");
    cluster_button.addEventListener('click',()=>{
    console.log("Clustering...");
    clear();
    Kmeans(arr);
    });
    // *
    let k=3;
    background('white');
    fill('black');
    // x,y plane 
    line(0, 0, width, 0)
    line(0, 0, 0, height)
    // (0,0) point
    ellipse(0, 0, 8)
    for (let l = 0; l < arr.length; l++) {
        let x=abs(arr[l].x);
        let y=abs(arr[l].y);
        console.log("random:"+x*randomWidth,y*randomHeight);
        drawAndColor(x*randomWidth,y*randomHeight,"yellow");
    }
}
function generateRandomVectors(number) {
    let array=[];
    for(let i=0;i<number;i++){
       array.push(p5.Vector.random2D());
    }
    return array;
}
function generateTable(arr) {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    // creating all cells
    for (let i = 0; i < arr.length; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`${abs(arr[i].x)*random(width)} , ${abs(arr[i].y)*random(height)}`)
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  
} 
// calculate the eucladian distance 
function CalculateDist(v1,v2) {
    let result=Math.sqrt(((v2.x-v1.x)*(v2.x-v1.x))+((v2.y-v1.y)*(v2.y-v1.y)));
    return result;
}
// k-means-clustering function
function Kmeans(arr) {
    let k=3;
    let first=arr[0];
    let second=arr[1];
    // let third=arr[2];
    let clusters=[[],[]];
    for (let j=0;j<arr.length;j++) {
    let iteration=document.getElementById("iteration_number")
    iteration.innerHTML=j;
       let dist=CalculateDist(first,arr[j]);
       let dist2=CalculateDist(second,arr[j]);
    //    let dist3=CalculateDist(third,arr[j]);
       if (dist<dist2){
        clusters[0].push(arr[j]);
        // drawAndColor(arr[j].x*random(width),arr[j].y*random(height),"blue")
       }else{ 
    //    if(dist2<dist && dist2<dist3){
        clusters[1].push(arr[j]);
        // drawAndColor(arr[j].x*random(width),arr[j].y*random(height),"green")
       }
    // else{
    //     clusters[2].push(arr[j]);
    //     drawAndColor(arr[j].x*random(width),arr[j].y*random(height),"red")
    // }
    }
   for (let n = 0; n < 2; n++) {
        for (let index = 0; index < clusters[n].length; index++) {
            let absvalueX=Math.abs(clusters[n][index].x);
            let absvalueY=Math.abs(clusters[n][index].y);
            fill('red');
            drawAndColor(absvalueX*randomWidth,absvalueY*randomHeight,colors[n])
            // ellipse(absvalueX*random(width),absvalueY*random(height),9);
            // console.log(`This is the value of Cluster ${n},and value ${index}:x:${absvalueX*random(width)},y:${absvalueY*random(height)}`);
        }
        
    }  
    // return clusters;
}
function drawAndColor(x,y,color) {
    fill(color);
    ellipse(x,y,9);
}
