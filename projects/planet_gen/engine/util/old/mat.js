util.identity = function ()
{
    return new Mat4([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
}

util.translation = function(deltaP) {
    let d = deltaP.array();
    return new Mat4([1,0,0,d[0],0,1,0,d[1],0,0,1,d[2],0,0,0,1]); 
}

util.scale = function(deltaS){
    let s = deltaS.array();
    return new Mat4([s[0],0,0,0,0,s[1],0,0,0,0,s[2],0,0,0,0,1]);
}

util.rotation = function (angles)
{
    let rad = angles.Index(2) * Math.PI / 360;
    return new Mat4([Math.cos(rad),-Math.sin(rad),0,0,Math.sin(rad),Math.cos(rad),0,0,0,0,1,0,0,0,0,1]);
}

util.rotationQuat = function (quaternion)
{

}

util.projection = function (near, far, fovy, aspect)
{
    let f = Math.tan(fovy*Math.PI / 180);
    return new Mat4([f/aspect, 0, 0, 0,
                    0, f, 0, 0,
                    0, 0, -(far+near)/(far-near), -(2*near*(far+near))/(far-near),
                    0,0,-1,0]);
}
util.getCameraBasis = function (eye, up, coi)
{
    let basis = {};
    let n = eye.Sub(coi);
    n.Normalize();
    let u = up.Cross(n);
    u.Normalize();
    let v = n.Cross(u);
    basis.n = n.array();
    basis.u = u.array();
    basis.v = v.array();
    return basis; 
}
util.view = function (eye, up, coi, delta)
{
    let b = util.getCameraBasis(eye, up, coi);
    var rotation = util.rotation(new Vector([0,0,-delta]));
    var basis = new Mat4([
            b.u[0], b.u[1], b.u[2], 0,   
            b.v[0], b.v[1], b.v[2], 0,   
            b.n[0], b.n[1], b.n[2], 0,   
            0,0,0,1   
        ]); 
    var translation = util.translation(eye.Multiply(-1));
    var result = rotation.multiply(basis).multiply(translation);
    return result;
}
class Mat4
{
    constructor(array){
        this.data = array;
    }
    multiply_point(rhs)
    {
        let array = [];
        for(let gcol = 0; gcol < 4; gcol++)
        {
            let result = 0;
            for(let i = 0; i < 4; i++)
            {
                result += (this.index(gcol, i) * rhs.Index(i));
            }
            array.push(result);
        }
        return new Vector([array[0], array[1], array[2], array[3]]);
    }
    index(r,c)
    {
        return this.data[4*r + c];
    }
    multiply(rhs)
    {
        let array = [];
        for(let frow = 0; frow < 4; frow++)
        {
            for(let gcol = 0; gcol < 4; gcol++)
            {
                let result = 0;
                for(let i = 0; i < 4; i++)
                {
                    result += (this.index(frow, i) * rhs.index(i, gcol));
                }
                array.push(result);
            }
        }
        return new Mat4(array);
    }
    array(){
        let d = this.data;
        let newData = [  
            d[0], d[4], d[8], d[12],
            d[1], d[5], d[9], d[13],
            d[2], d[6], d[10], d[14],
            d[3], d[7], d[11], d[15]
        ];
        return newData;
    }
    log(){
        let rep = "";
        for(let column = 0; column < 4; column++)
        {
            for (let row = 0; row < 4; row++){
                rep += this.data[column * 4 + row].toFixed(4) + " ";
            }
            rep += "\n";
        }
        console.log(rep);
    }
}
