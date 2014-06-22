$(document).ready( function() {
	$('.input-text').submit( function(event){
		// zero out results if previous search has run


		$('.results').html('');
		// get the value of the quote the user submitted
		var userInputtedOriginalQuote = $(this).find("input[name='originalquote']").val();

		getYodaQuote(userInputtedOriginalQuote);

	});





});


var showSearchResults = function(query, resultNum) {
	var results = resultNum + ' results for <strong>' + query;
	return results;
};



var getYodaQuote = function(userInputtedOriginalQuote){

        
        var result= $.ajax({
            url: 'https://yoda.p.mashape.com/yoda', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            type: 'GET', // The HTTP Method
            data: {sentence: userInputtedOriginalQuote}, // Parameters go here
            datatype: 'json',
            success: function (result) {
                console.log(result);
                var yodaQuote = result;
                $('.result').append(yodaQuote);
            },
            error: function (err) {
                alert(err);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "cvqYmQiG8Y1FiHfLX0FWkG3RIv905sNP"); // Enter your Mashape key here
            }
        });

};


