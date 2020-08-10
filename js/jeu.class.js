class Game {
	

	constructor(selector,col,lgn){ //7 6

		this.selector = selector;
		this.col = col;
		this.lgn = lgn; 
		this.grid = [];
		this.player_one = 1;
		this.player_two = 2;
		this.turn = this.player_one;
		this.max_turn = this.col * this.lgn;
		this.count_turn = 0;
		this.winner = null;

		this.drawP4();
		this.playGame();
	}

	// construction de notre jeu et de sa grille
	drawP4(){
		const $table = $(this.selector)
		for (let x = 0; x < this.lgn; x++) {
			const $x = $("<tr>").addClass("lgn");
			this.grid[x] = [];
			for (let y = 0; y < this.col; y++) {
				const $y = $("<td>").addClass("col").attr("data-col", y).attr("data-lgn", x);
				this.grid[x][y] = 0;
				$x.append($y);
			}
			$table.append($x);
		}
		console.log(this.grid);
	}

	// fonction qui regroupe nos différents events sur notre jeu
	playGame(){
		const that = this; //reference au constructor
		
		// evenement au click sur une de notre case 
		$("td").on("click", function(event){
	        let $lgn = parseFloat($(event.target).attr('data-col'));  //y
	        let $col = that.check_last_index($lgn);   // x le parcours de toute la colonne qui revois le dernier 0 dispo
	        if ($col!=null){ //si colones vide on pousse notre jetons
	        	that.addJetons($col, $lgn);
	        } else{
	        	alert("colonne pleine!!");
	        }
		})

		// evenement au click de notre bouton
		$("#restartGame").click(function(){
			if (confirm("souitez-vous recommencer?")) { // message au click du boutton et si valider ...
				that.endGame(this.col, this.lgn); // on appel notre fonction endGame sur 
			}									//les colonnes et les lign de notre constructor
		})

		// au survol de nos colonnes surbrillace 
		$("td").on("mouseenter", function(e){
	        let $lgn = parseFloat($(event.target).attr('data-col'));  //y
	        let $col = that.check_last_index($lgn);   // x le parcours de toute la colonne qui revois le dernier 0 dispo
	        
	        	$($col).addClass("opacity");

			console.log($col);
	       
		})
	}

	checkCol(x){ // x vault colonne pour effect css sur la colone au survol
	    for (let h = 0; h < this.lgn.length; h--) {
	        if (this.grid[h][x] == $(this).attr('data-col')) {
	            return h;
	        }
	    }
    } 

    // fonction pour reperer notre derneire ligne vault 0
	check_last_index(x){ // x vault colonne
	    for (let h = this.lgn-1; h >= 0; h--) {
	        if (this.grid[h][x] == 0) {
	            return h;
	        }
	    }
	    return null;
    } 
    // au moment du click sur la grille
	addJetons(y ,x){
		
		this.grid[y][x] = this.turn;
		this.count_turn++;
		// console.log("count-turn :",this.count_turn);
		if (this.turn === this.player_one) {
			$(`tr:nth-child(${y+1}) td:nth-child(${x+1})`).addClass("player1");
		}
		else {
			$(`tr:nth-child(${y+1}) td:nth-child(${x+1})`).addClass("player2");
		}

		// switch de joueurs
		this.turn = (this.player_one === this.turn) ? this.player_two : this.player_one;
		
		// checkwin appliquer sur nos col, lgn et this.turn
		if (this.checkWin(y, x, this.grid[y][x])) {
			
			alert("le joueur :"+ this.grid[y][x]+"a gagner");

			if (confirm("voulez vous recommencer la partie ??")) {
				// $("td").addClass("restartGame").attr("data-col");
				this.endGame(y,x);
			}
		}

		// match null si 42 count atteind
		if(this.count_turn === this.max_turn) {
			alert("Match null");
			this.endGame(y,x);
		}
	}

	// on reinitialise la grille, on enléve les images, le joueur 1 par default et le compteur de tour a 0
	endGame(h, l){
        for (let h = 0; h < this.lgn; h++) {
            this.grid[h] = [];
            for (let l = 0; l < this.col; l++) {
                this.grid[h][l] = 0;
            }
    	}
    	$("td").removeClass("player1 player2");
    	this.turn = 1;
    	this.count_turn = 0;
	}

	checkWin(x, y, playerTurn){ //col
		//horizontal
		// console.log("test",x);
		// console.log("player: ", playerTurn)
		let count = 0;
		for (let i = 0; i < this.col; i++) {
			count = (this.grid[x][i] === playerTurn) ? count+1 : 0;
			// console.log("myCount:", count);
			if(count >= 4){
				// alert("joueur :"+playerTurn+" à gagner en horizontal");
				$(playerTurn).addClass("opacity");
				return true;
			}
		}
		// vertical
		count = 0;
		for (let j = 0; j < this.lgn; j++) {
			count = (this.grid[j][y] === playerTurn) ? count+1 : 0;
			// console.log("index2: ", this.grid[y][j])
			// console.log("myCount2:", count);
			if(count >= 4){
				// alert("joueur :"+playerTurn+" à gagner en vertical");
				return true;
			}
		}
		// Diagonal
	    count = 0;
		let shift = x - y;
	    for (let i = Math.max(shift, 0); i < Math.min(this.lgn, this.lgn + shift); i++) {
	    	count = (this.grid[i][i - shift] == playerTurn) ? count+1 : 0;
		    if (count >= 4){
		    		// alert("joueur :"+playerTurn+" à gagner en diagonal");
		    	return true;
		    } 
	    }
		// Anti-diagonal
	    count = 0;
		shift = y + x;
		for (let i = Math.max(shift - this.col + 1, 0); i < Math.min(this.lgn, shift + 1); i++) {
		    // console.log(i,shift-i,shift)
		     count = (this.grid[i][shift - i] == playerTurn) ? count+1 : 0;
		     if (count >= 4){
		    		// alert("joueur :"+playerTurn+" à gagner en antiDiagonal");
		    	return true;
		    } 
	    }
		return null;
	}
}

