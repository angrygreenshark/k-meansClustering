export function CalculateDist(v1,v2) {
    let result=Math.sqrt(((v2.x-v1.x)*(v2.x-v1.x))+((v2.y-v1.y)*(v2.y-v1.y)));
    return result;
}