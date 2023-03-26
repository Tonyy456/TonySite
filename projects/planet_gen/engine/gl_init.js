function _init_gl(canvas) {
    let gl;
    try {
        gl = canvas.getContext("experimental-webgl");  // the graphics context 
        gl.canvas = canvas;
        gl.fixCanvasWidth = function ()
        {
            console.log("setting canvas width");
            if(gl.camera)
                gl.camera._calculate();
            let style = document.querySelector('.glcanvas');
            let test = getComputedStyle(style);
            canvas.width = parseInt(test.width, 10);
            canvas.height = parseInt(test.height, 10);
            gl.viewportWidth = canvas.width;   // the width of the canvas
            gl.viewportHeight = canvas.height; // the height 
            gl.aspect = canvas.width / canvas.height;
        }
        gl.fixCanvasWidth();
        window.addEventListener('resize', gl.fixCanvasWidth);
        gl.enable(gl.DEPTH_TEST);
    } catch (e) { } 
    if (!gl) {
        alert("WebGL is not supported or working");
    }
    return gl;
}
