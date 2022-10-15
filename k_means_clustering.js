 function Kmeans(arr) {
    let first=arr[0];
    let second=arr[3];
    let third=arr[6];
    let cluster1=[];
    let cluster2=[];
    let cluster3=[];
    for (let j=0;j<arr.length;j++) {
       let dist=CalculateDist(first,arr[j]);
       let dist2=CalculateDist(second,arr[j]);
       let dist3=CalculateDist(third,arr[j]);
       if (dist<dist2&&dist<dist3) {
        cluster1.push(arr[j]);
       }else if(dist2<dist && dist2<dist3){
        cluster2.push(arr[j]);
       }
    else{
        cluster3.push(arr[j]);
    }
    }
    return [cluster1,cluster2,cluster3];
}
