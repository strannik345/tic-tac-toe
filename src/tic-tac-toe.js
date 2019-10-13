class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.one = null;
        this.two = null;
        this.three = null;
        this.four = null;
        this.five = null;
        this.six = null;
        this.seven = null;
        this.eight = null;
        this.nine = null;
        this.winner = null;
        this.turn = 0;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(rowIndex == 0 && columnIndex ==0 && this.one == null){
            this.one=this.currentPlayer;
            this.turn ++;
            if(this.currentPlayer =='x') this.currentPlayer ='o';
            else this.currentPlayer = 'x';
        } 
        else if(rowIndex == 0 && columnIndex ==1 && this.two == null){
            this.two=this.currentPlayer;
            this.turn ++;
            if(this.currentPlayer =='x') this.currentPlayer ='o';
            else this.currentPlayer = 'x';            
        } 
        else if(rowIndex == 0 && columnIndex ==2 && this.three == null){
            this.three=this.currentPlayer;
            this.turn ++;
            if(this.currentPlayer =='x') this.currentPlayer ='o';
            else this.currentPlayer = 'x';

        } 
        else if(rowIndex == 1 && columnIndex ==0 && this.four == null){
            this.four=this.currentPlayer;
            this.turn ++;
            if(this.currentPlayer =='x') this.currentPlayer ='o';
            else this.currentPlayer = 'x';
            
        }
        else if(rowIndex == 1 && columnIndex ==1 && this.five == null){
            this.five=this.currentPlayer;
            this.turn ++;
            if(this.currentPlayer =='x') this.currentPlayer ='o';
            else this.currentPlayer = 'x';
            
        } 
        else if(rowIndex == 1 && columnIndex ==2 && this.six == null){
            this.six=this.currentPlayer;
            this.turn ++;
            if(this.currentPlayer =='x') this.currentPlayer ='o';
            else this.currentPlayer = 'x';
            
        } 
        else if(rowIndex == 2 && columnIndex ==0 && this.seven == null){
            this.seven=this.currentPlayer;
            this.turn ++;
            if(this.currentPlayer =='x') this.currentPlayer ='o';
            else this.currentPlayer = 'x';
            
        }
        else if(rowIndex == 2 && columnIndex ==1 && this.eight == null){
            this.eight=this.currentPlayer;
            this.turn ++;
            if(this.currentPlayer =='x') this.currentPlayer ='o';
            else this.currentPlayer = 'x';
            
        }
        else if(rowIndex == 2 && columnIndex ==2 && this.nine == null){
            this.nine=this.currentPlayer;
            this.turn ++;
            if(this.currentPlayer =='x') this.currentPlayer ='o';
            else this.currentPlayer = 'x';
            
        }
        if(this.one == this.two && this.two == this.three){
            this.winner = this.one;
        }
        if(this.one == this.four && this.four == this.seven){
            this.winner = this.one;
        }
        if(this.one == this.five && this.five == this.nine){
            this.winner = this.one;
        }
        
        if(this.two == this.five && this.five == this.eight){
            this.winner = this.two;
        }

        if(this.three == this.six && this.six == this.nine){
            this.winner = this.three;
        }
        if(this.three == this.five && this.five == this.seven){
            this.winner = this.three;
        }
        
        if(this.four == this.five && this.five == this.six){
            this.winner = this.four;
        }

        if(this.seven == this.eight && this.eight== this.nine){
            this.winner = this.seven;
        }          
    }

    isFinished() {
       if(this.turn == 9 || this.winner != null) return true;
       else return false;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        if(this.turn == 9) return true;
        else return false;
    }

    isDraw() {
        if(this.turn == 9 && this.winner == null) return true;
        else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if(rowIndex == 0 && colIndex ==0){
            return this.one;
        } 
        else if(rowIndex == 0 && colIndex ==1){
            return this.two;
        } 
        else if(rowIndex == 0 && colIndex ==2){
            return this.three;
        } 
        else if(rowIndex == 1 && colIndex ==0){
            return this.four;
        } 
        else if(rowIndex == 1 && colIndex ==1){
            return this.five;
        } 
        else if(rowIndex == 1 && colIndex ==2){
            return this.six;
        } 
        else if(rowIndex == 2 && colIndex ==0){
            return this.seven;
        } 
        else if(rowIndex == 2 && colIndex ==1){
            return this.eight;
        } 
        else if(rowIndex == 2 && colIndex ==2){
            return this.nine;
        } 
    }
}

module.exports = TicTacToe;
