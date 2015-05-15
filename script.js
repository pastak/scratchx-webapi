(function(ext) {
    ext._shutdown = function(){};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    $(window).on('devicelight', function(event) {
      ext.getLightSensor = function(){
        return event.originalEvent.value;
      }
    })

    // blockが呼び出された時に呼ばれる関数を登録する。
    // 下にあるdescriptorでブロックと関数のひも付けを行っている。
    ext.getLightSensor = function() {};

    // ブロックと関数のひも付け
    var descriptor = {
        blocks: [
            ['r', 'Light sensor', 'getLightSensor',null],
        ]
    };

    ScratchExtensions.register('WebAPI', descriptor, ext);
})({});
