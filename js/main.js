document.onreadystatechange = function() {
    if (this.readyState === 'complete') {
        var canvas = new Rss.Canvas(document.body, 'paper');
        new Rss.Gui.Window(canvas, 'Window title 1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut');
        
    }
};