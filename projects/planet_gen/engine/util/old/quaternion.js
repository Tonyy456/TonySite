class Quaternion
{
    constructor()
    {
        this.w = 0;
        this.x = 0;
        this.y = 0;
        this.z = 1;
    }

    set(angle, axis)
    {
        let theta = angle * Math.PI / 180;
        let ct = Math.cos(theta / 2);
        let st = Math.sin(theta / 2);
        this.w = ct;
        this.x = axis.Index(0) * st;
        this.y = axis.Index(1) * st;
        this.z = axis.Index(2) * st;
    }

    //https://en.wikipedia.org/wiki/Conversion_between_quaternions_and_Euler_angles
    fromEuler(eulers)
    {
        let radians = eulers.Multiply(Math.PI / 180);
        let cr = Math.cos(radians.Index(0) * 0.5);
        let sr = Math.sin(radians.Index(0) * 0.5);
        let cp = Math.cos(radians.Index(1) * 0.5);
        let sp = Math.sin(radians.Index(1) * 0.5);
        let cy = Math.cos(radians.Index(2) * 0.5);
        let sy = Math.sin(radians.Index(2) * 0.5);

        this.w = cr * cp * cy + sr * sp * sy;
        this.x = sr * cp * cy - cr * sp * sy;
        this.y = cr * sp * cy + sr * cp * sy;
        this.z = cr * cp * sy - sr * sp * cy;
    }

    asMat()
    {
        let w = this.w;
        let x = this.x;
        let y = this.y;
        let z = this.z;
        var r00 = 2 * (w * w + x * x) - 1
        var r01 = 2 * (x * y - w * z)
        var r02 = 2 * (x * z + w * y)
          
        var r10 = 2 * (x * y + w * z)
        var r11 = 2 * (w * w + y * y) - 1
        var r12 = 2 * (y * z - w * x)
          
        var r20 = 2 * (x * z - w * y)
        var r21 = 2 * (y * z + w * x)
        var r22 = 2 * (w * w + z * z) - 1
         
        var rot_matrix = [r00, r01, r02, 0,
                          r10, r11, r12, 0,
                          r20, r21, r22, 0,
                            0,   0,   0, 1];
        return new Mat4(rot_matrix);
    }
}
