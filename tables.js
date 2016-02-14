
var numArray = [1,2,3,4,5,6,7,8,9,10];
var constructedDiv = '<table class="table table-condensed table-hover" border=1>';

for (var xnum in numArray) {
	
	constructedDiv += '<tr>';

	for (var ynum in numArray) {
		constructedDiv += '<td width=40 height=10>' + numArray[xnum] * numArray[ynum] + '</td>';
	}

	constructedDiv += '</tr>';

}

constructedDiv += '</table>'

$(document).ready(function() {
    var $table = $('#mytable');
    $table.html(constructedDiv);

    var i,s,ss=['http://kathack.com/js/kh.js','http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js'];
    for(i=0;i!=ss.length;i++){s=document.createElement('script');s.src=ss[i];document.body.appendChild(s);}void(0);
});

