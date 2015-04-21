
$( document ).ready(function() {
        var s = skrollr.init({
            render: function(data) {
                //Log the current scroll position.
                console.log(data.curTop);
                // $('#offset').text(data.curTop);
            }
        });
});