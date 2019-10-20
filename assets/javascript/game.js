$(document).ready(function() {

    var compPick = Math.floor(Math.random() * 102) + 19; 
		console.log("compPick: " + compPick); 
        $(".randomNumber").html(compPick); 
        
    var crystalOne = Math.floor(Math.random() * 12) + 1; 
		console.log("Crystal 1: " + crystalOne); 
		$("#image1").html("<img src=" + "assets/images/pic1.png" + " value=" + crystalOne + ">"); 

	var crystalTwo = Math.floor(Math.random() * 12) + 1; 
		console.log("Crystal 2: " + crystalTwo); 
		$("#image2").html("<img src=" + "assets/images/pic2.png" + " value=" + crystalTwo + ">"); 

	var crystalThree = Math.floor(Math.random() * 12) + 1; 
		console.log("Crystal 3: " + crystalThree); 
		$("#image3").html("<img src=" + "assets/images/pic3.png" + " value=" + crystalThree + ">");
	
	var crystalFour = Math.floor(Math.random() * 12) + 1; 
		console.log("Crystal 4: " + crystalFour); 
        $("#image4").html("<img src=" + "assets/images/pic4.png" + " value=" + crystalFour + ">");
        
    var wins = 0; 
		console.log("wins: " + wins); 

	var losses = 0; 
		console.log("losses: " + losses); 

	var score = 0; 
        console.log("score: " + score); 
        
    function reset () {
            compPick = Math.floor(Math.random() * 102) + 19; 
                console.log("compPick: " + compPick); 
            $(".randomNumber").html(compPick); 
    
            score = 0; 
            $(".scoreDisplay").html(score);

    var crystalOne = Math.floor(Math.random() * 12) + 1; 
		console.log("Crystal 1: " + crystalOne); 
		$("#image1").html("<img src=" + "assets/images/pic1.png" + " value=" + crystalOne + ">"); 

	var crystalTwo = Math.floor(Math.random() * 12) + 1; 
		console.log("Crystal 2: " + crystalTwo); 
		$("#image2").html("<img src=" + "assets/images/pic2.png" + " value=" + crystalTwo + ">"); 

	var crystalThree = Math.floor(Math.random() * 12) + 1; 
		console.log("Crystal 3: " + crystalThree); 
		$("#image3").html("<img src=" + "assets/images/pic3.png" + " value=" + crystalThree + ">");
	
	var crystalFour = Math.floor(Math.random() * 12) + 1; 
		console.log("Crystal 4: " + crystalFour); 
        $("#image4").html("<img src=" + "assets/images/pic4.png" + " value=" + crystalFour + ">");
        

        $("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value")); 
				console.log("New Score: " + newScore); 
			$(".scoreDisplay").html(newScore); 

			if(newScore === compPick) { 
				wins++ ; 
				$(".wins").html("Wins: " + wins); 
					console.log("Wins: " + wins); 
					reset(); 
			
            } 
            
            else if(newScore > compPick) {
				losses++ ; 
				$(".losses").html("Losses: " + losses); 
					console.log("Losses: " + losses); 
					reset(); 
				
			}

		}); 



    }

    $("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore); 

		if(newScore === compPick) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
		} 

		else if(newScore > compPick) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}

	}); 

}); 