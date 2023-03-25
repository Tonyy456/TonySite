class Vector
{
    constructor(N)
    {
        if(Array.isArray(N)) // is array
        {
            this.length = N.length;
            this.data = N;
        } 
        else // is a integer
        {
            this.length = N;
            this.data = [];
            for(let i = 0; i < N; i++)
            {
                this.data.push(0);
            }
        }
    }
    dot(rhs)
    {
        let value = 0;
        for(let i = 0; i < this.N; i++)
        {
            value += this.Index(i) + rhs.Index(i);
        }
        return value;
    }

    angle(rhs)
    {
        let dotProd = this.dot(rhs);
        let mag1 = this.Magnitude();
        let mag2 = rhs.Magnitude();
        let result = Math.acos((dotProd)/(mag1*mag2))
        result = result * 180 / Math.PI;
        return result;
    }

    popLast()
    {
        let copy = [...this.data];
        copy.pop();
        return new Vector(copy);
         
    }

    array()
    { return this.data }

    Set(array)
    {
        if(array.length != this.length) {
            throw new Error('setting vector of size ' + 
            this.length + ' to size of ' + array.length); 
        }
        this.data = array;
    }

    Index(i) { return this.data[i] } 

    Add(rhs)
    {
        if(rhs.length != this.length) {
            throw new Error('adding vector of size ' + 
            this.length + ' to size of ' + rhs.length); 
        }

        let result = new Vector(this.length);
        let data = [];
        for(let i = 0; i < this.length; i++)
        {
            data.push(this.Index(i) + rhs.Index(i));
        }
        result.Set(data);
        return result;
    }
    Scale(rhs)
    {
        if(rhs.length != this.length) {
            throw new Error('adding vector of size ' + 
            this.length + ' to size of ' + array.length); 
        }

        let result = new Vector(this.length);
        let data = [];
        for(let i = 0; i < this.length; i++)
        {
            data.push(this.Index(i) * rhs.Index(i));
        }
        result.Set(data);
        return result;
    }
    Sub(rhs)
    {
        if(rhs.length != this.length) {
            throw new Error('adding vector of size ' + 
            this.length + ' to size of ' + array.length); 
        }

        let result = new Vector(this.length);
        let data = [];
        for(let i = 0; i < this.length; i++)
        {
            data.push(this.Index(i) - rhs.Index(i));
        }
        result.Set(data);
        return result;
    }
    Divide(rhs)
    {
        let result = new Vector(this.length);
        let data = [];
        for(let i = 0; i < this.length; i++)
        {
            data.push(this.Index(i) / rhs);
        }
        result.Set(data);
        return result;
    }
    Multiply(rhs)
    {
        let result = new Vector(this.length);
        let data = [];
        for(let i = 0; i < this.length; i++)
        {
            data.push(this.Index(i) * rhs);
        }
        result.Set(data);
        return result;
    }
    Cross(rhs)
    {
        if(this.length != 3)
            throw new Error("Cant call cross if length is not 3 (l = " + this.length + ")");
        let r0 =this.Index(1) * rhs.Index(2) - this.Index(2) * rhs.Index(1); 
        let r1 =this.Index(2) * rhs.Index(0) - this.Index(0) * rhs.Index(2); 
        let r2 = this.Index(0) * rhs.Index(1) - this.Index(1) * rhs.Index(0);
        let data = [ r0, r1, r2];
        let r =  new Vector(data);
        console.log("===========================================");
        console.log(rhs);
        console.log(this);
        console.log(r1);
        console.log(r);
        return r;
    }
    Magnitude()
    {
        let sum = 0;
        for(let i = 0; i < this.length; i++)
        {
            let d = this.Index(i);
            sum += d * d;
        }
        return Math.sqrt(sum);
    }
    Normalize()
    {
        let mag = this.Magnitude();
        let arr = [];
        for (let i = 0; i < this.length; i++)
        {
            let d = this.Index(i);
            arr.push(d / mag);
        } 
        this.Set(arr);
    } 
    Copy()
    {
        return new Vector(this.data);
    }
    Normalized()
    {
        let copy = this.Copy();
        copy.Normalize();
        return copy;
    }
}
