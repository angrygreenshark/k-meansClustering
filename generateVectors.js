export function generateRandomVectors(number) {
    let array=[];
    let temp,tempx,tempy;
    for(let i=0;i<number;i++){
    temp=p5.Vector.random2D();
    tempx=abs(temp.x*Math.random()*width);
    tempy=abs(temp.y*Math.random()*height);
    temp.x=tempx;
    temp.y=tempy;
    array.push(temp);
    }
    return array;
}