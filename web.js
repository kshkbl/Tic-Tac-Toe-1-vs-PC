var whose_move=1;
var temp="";
var ok=0;
var who_won=0;
var count_player1_wins=0;
var count_player2_wins=0;
var count_ties=0;
var a=0;
var	b=0;
var c=0;
var d=0;
var	e=0;
var	f=0;
var	g=0;
var	h=0;
var	i=0;

function computer_random_move()
{
	while(ok==0)
	{
		var compute_move=(Math.floor(Math.random()*9))+1;
		if(compute_move==1)temp="A";
		if(compute_move==2)temp="B";
		if(compute_move==3)temp="C";
		if(compute_move==4)temp="D";
		if(compute_move==5)temp="E";
		if(compute_move==6)temp="F";
		if(compute_move==7)temp="G";
		if(compute_move==8)temp="H";
		if(compute_move==9)temp="I";
		
		check_Space(temp);
	}
}

function computer_com_move(z)
{
	if((a==0)&&(b==z)&&(c==z)&&(temp==""))temp="A";
	if((a==z)&&(b==0)&&(c==z)&&(temp==""))temp="B";
	if((a==z)&&(b==z)&&(c==0)&&(temp==""))temp="C";
	
	if((d==0)&&(e==z)&&(f==z)&&(temp==""))temp="D";
	if((d==z)&&(e==0)&&(f==z)&&(temp==""))temp="E";
	if((d==z)&&(e==z)&&(f==0)&&(temp==""))temp="F";
	
	if((g==0)&&(h==z)&&(i==z)&&(temp==""))temp="G";
	if((g==z)&&(h==0)&&(i==z)&&(temp==""))temp="H";
	if((g==z)&&(h==z)&&(i==0)&&(temp==""))temp="I";
	
	if((a==0)&&(d==z)&&(g==z)&&(temp==""))temp="A";
	if((a==z)&&(d==0)&&(g==z)&&(temp==""))temp="D";
	if((a==z)&&(d==z)&&(g==0)&&(temp==""))temp="G";
	
	if((b==0)&&(e==z)&&(h==z)&&(temp==""))temp="B";
	if((b==z)&&(e==0)&&(h==z)&&(temp==""))temp="E";
	if((b==z)&&(e==z)&&(h==0)&&(temp==""))temp="H";
	
	if((c==0)&&(f==z)&&(i==z)&&(temp==""))temp="C";
	if((c==z)&&(f==0)&&(i==z)&&(temp==""))temp="F";
	if((c==z)&&(f==z)&&(i==0)&&(temp==""))temp="I";
	
	if((a==0)&&(e==z)&&(i==z)&&(temp==""))temp="A";
	if((a==z)&&(e==0)&&(i==z)&&(temp==""))temp="E";
	if((a==z)&&(e==z)&&(i==0)&&(temp==""))temp="I";
	
	if((g==0)&&(e==z)&&(c==z)&&(temp==""))temp="G";
	if((g==z)&&(e==0)&&(c==z)&&(temp==""))temp="E";
	if((g==z)&&(e==z)&&(c==0)&&(temp==""))temp="C";
	
	check_Space(temp);
}
function computer_move()
{
	temp="";
	ok=0;
	computer_com_move(2);
	if(ok==0)
	{
		computer_com_move(1);
		if(ok==0)
			computer_random_move();
	}
	document.getElementById(temp).src="o.png";
	whose_move=1;
	process();
}

function Move(c)
{
	if(who_won==1)
		alert("YOU ALREADY WON. Press Play Again.");
	if(who_won==2)
		alert("COMPUTER ALREADY WON. Press Play Again.");
	if(who_won==3)
		alert("MATCH TIED.Press Play Again.");
	if(who_won==0)
	{	
		temp=c;
		ok=0;
		check_Space(temp);
		if(whose_move==1)
		{
			if(ok==1)
			{
				document.getElementById(c).src="x.png";
				whose_move=2;
			}
			else
     			alert("That square is already occupied.Please select another square.");
        }
	    process();
	}
	if(who_won==0&&ok==1)
		computer_move();
	
}
function check_Space(temp)
{
	if((temp=="A")&&(a==0))
	{
		ok=1;
		if(whose_move==1)
			a=1;
		if(whose_move==2)
			a=2;
	}
	if((temp=="B")&&(b==0))
	{
		ok=1;
		if(whose_move==1)
			b=1;
		if(whose_move==2)
			b=2;
	}
	if((temp=="C")&&(c==0))
	{
		ok=1;
		if(whose_move==1)
			c=1;
		if(whose_move==2)
			c=2;
	}
	if((temp=="D")&&(d==0))
	{
		ok=1;
		if(whose_move==1)
			d=1;
		if(whose_move==2)
			d=2;
	}
	if((temp=="E")&&(e==0))
	{
		ok=1;
		if(whose_move==1)
			e=1;
		if(whose_move==2)
			e=2;
	}
	if((temp=="F")&&(f==0))
	{
		ok=1;
		if(whose_move==1)
			f=1;
		if(whose_move==2)
			f=2;
	}
	if((temp=="G")&&(g==0))
	{
		ok=1;
		if(whose_move==1)
			g=1;
		if(whose_move==2)
			g=2;
	}
	if((temp=="H")&&(h==0))
	{
		ok=1;
		if(whose_move==1)
			h=1;
		if(whose_move==2)
			h=2;
	}
	if((temp=="I")&&(i==0))
	{
		ok=1;
		if(whose_move==1)
			i=1;
		if(whose_move==2)
			i=2;
	}
}

function process()
{
	check_win();
	if(who_won==1)
	{
		alert("YOU WON");
		count_player1_wins++;
		document.getElementById('playerx').value=count_player1_wins;
	}	
	if(who_won==2)
	{
		alert("COMPUTER WON");
		count_player2_wins++;
		document.getElementById('playero').value=count_player2_wins;
	}
    if(who_won==3)	
	{
		alert("TIE OCCURED");
		count_ties++;
		document.getElementById('ties').value=count_ties;
	}
}

function check_win()
{
	if(((a==1)&&(b==1)&&(c==1))||((a==1)&&(d==1)&&(g==1))||((g==1)&&(h==1)&&(i==1))||((c==1)&&(f==1)&&(i==1))||((d==1)&&(e==1)&&(f==1))||((b==1)&&(e==1)&&(h==1))||((a==1)&&(e==1)&&(i==1))||((g==1)&&(e==1)&&(c==1))) 
	{
		who_won=1;
	}	
	if(((a==2)&&(b==2)&&(c==2))||((a==2)&&(d==2)&&(g==2))||((g==2)&&(h==2)&&(i==2))||((c==2)&&(f==2)&&(i==2))||((d==2)&&(e==2)&&(f==2))||((b==2)&&(e==2)&&(h==2))||((a==2)&&(e==2)&&(i==2))||((g==2)&&(e==2)&&(c==2)))  
	{	
		who_won=2;
	}	
	if((a!=0)&&(b!=0)&&(c!=0)&&(d!=0)&&(e!=0)&&(f!=0)&&(g!=0)&&(h!=0)&&(i!=0)&&(who_won==0))		
	{	
		who_won=3;
	}	
}

function playAgain()
{
	who_won=0;
	whose_move=1;
	a=0;
	b=0;
	c=0;
    d=0;
    e=0;
	f=0;
	g=0;
	h=0;
	i=0;
	document.getElementById('A').src="blank.png";
	document.getElementById('B').src="blank.png";
	document.getElementById('C').src="blank.png";
	document.getElementById('D').src="blank.png";
	document.getElementById('E').src="blank.png";
	document.getElementById('F').src="blank.png";
	document.getElementById('G').src="blank.png";
	document.getElementById('H').src="blank.png";
	document.getElementById('I').src="blank.png";
	
}

function help()
{
	alert("The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.");
}


