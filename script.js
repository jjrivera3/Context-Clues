var FRIEND_NAME = ['Joseph', 'Hannah', 'Michael', 'Darius', 'Kelsey'];
var LOCATION_NAME = ['closet', 'room', 'elevator', 'toilet', 'mystery box', 'toaster', 'microwave', 'shoe box', 'cofee mug', 'washing machine'];
var WEAPON_NAME = ['fish', 'knife', 'vacuum', 'candy bar', 'protein shake', 'cell phone', 'pickle', 'oven mitt', 'apple watch', 'tea bag', 'stuffed animal', 'bag of dog poop', 'track spike', 'rubber ducky', 'mechanical pencil', 'tennis ball', 'fire extinguisher', 'keyboard', 'oatmeal', 'car keys'];

$(document).ready(function () {
    for (var i = 1; i < 100; i++) {
        var $accusation = $('<h3>Accusation ' + i + ':</h3>');
        $('body').append($accusation);
        $accusation.click(displayAlert(i));
    }
    
    function displayAlert(i) {
        return function () {
            var text = $(this).text();
            alert(text + ' I accuse ' + FRIEND_NAME[i % FRIEND_NAME.length] + ', with the ' + WEAPON_NAME[i % WEAPON_NAME.length] + ' in the ' + LOCATION_NAME[i % LOCATION_NAME.length] + '! ');
        }
    }
});