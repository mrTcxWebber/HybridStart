/**
 * chooseList
 * extParam 可以作为ajax参数也可以作为数据体，以是否含url作为判断标识;
 * 作为数据体支持多层选择，以subList作为下一级数据字段名;
 * extParam的mark字段值作为返回数据标识，将一起存入 choosenItem 的mark字段中;
 */
define(function(require) {
	var comm = require('sdk/server');
    require('sdk/common');
    var extParam = JSON.parse(app.ls.val('crossParam'));

    if(extParam && extParam.multi){
        $('#ok').show();
    }
    var submitChoose = function(){
        var choosenItem = app.ls.val('choosenItem');
        setTimeout(function(){
            if(!choosenItem){
                return null;
            }
            app.window.publish('choosenItem',choosenItem);
            app.window.close();
        },0);
    };
    //选好了
    $('#ok').on('click',function(){
        submitChoose();
    });
    window.submitChoose = submitChoose;
    //loading
    app.loading.show();
    
	app.ready(function() {
        app.window.popoverElement({
            id: 'mainCont',
            name: 'popView',
            url: 'content.html'
        });
	    
	});
});