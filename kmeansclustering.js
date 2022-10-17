export function Kmeans(arr) {
    // let iteration=1;
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
            drawAndColor(absvalueX,absvalueY,colors[n])
        }
    }  
    return clusters;
}