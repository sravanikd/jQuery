# jQuery

$ is like querySelectorAll

Manipulating style:

The .css method is jQuery's interfsce to styling

$(selector).css(propertry, value)

Ex:
//select element with id "special" and give it a border
$("#special").css("border","2px solid red");

//we can also pass in an object with styles
var styles = {
    backgroundColor : "pink",
    fontWeight: "bold"
    };
 $("#special").css(styles); 
