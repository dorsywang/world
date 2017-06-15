class World{
    constructor(){
        this.canvas = document.getElementById('world');
        this.ctx = this.canvas.getContext('2d');

        this.ajustHeight();

        this.bindEvent();
    }

    ajustHeight(){
        var computedStyle = window.getComputedStyle(this.canvas);

        var width = parseInt(computedStyle.width);
        var height = parseInt(computedStyle.height);

        this.width = width;
        this.height = height;

        this.canvas.width = width;
        this.canvas.height = height;
    }

    onClick(e){
        var x = e.pageX;
        var y = e.pageY;

        console.log(x, y);

        this.drawPoint(x, y);
    }

    drawPoint(x = 0, y = 0){
        //this.ctx.fillStyle = '#000';
        this.ctx.fillRect(x, y, 10, 10);
    }

    bindEvent(){
        this.canvas.onclick = this.onClick.bind(this);

        [].map.call(document.querySelectorAll('.colorItem'), item => {
            item.onclick = (e) => {
                console.log('xxx');
                var value = item.getAttribute('data-fillstyle');
                console.log('xxx', value);

                this.ctx.fillStyle = value;
            };
        });
    }
}

new World();
