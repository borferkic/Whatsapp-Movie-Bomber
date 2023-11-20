{
	const dialogos = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	if(!textarea) throw new Error("La conversacion no esta abierta") //En caso de error
	//Funcion de escritura
	for(const line of dialogos)
	{
		console.log(line)
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
		setTimeout(() => 
		{
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		if(dialogos.indexOf(line) !== dialogos.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	return dialogos.length;
}
//Reemplazar el texto de la linea 26 por el dialogo o mensajes que desees enviar//
enviarScript(`

PULP [pulp] n.

1. A soft, moist, shapeless mass or matter.

2. A magazine or book containing lurid subject matter and being characteristically printed on rough, unfinished paper.

American Heritage Dictionary: New College Edition

INT. COFFEE SHOP – MORNING

A normal Denny's, Spires-like coffee shop in Los Angeles. It's about 9:00 in the morning. While the place isn't jammed, there's a healthy number of people drinking coffee, munching on bacon and eating eggs.

Two of these people are a YOUNG MAN and a YOUNG WOMAN. The Young Man has a slight working-class English accent and, like his fellow countryman, smokes cigarettes like they're going out of style.

It is impossible to tell where the Young Woman is from or how old she is; everything she does contradicts something she did. The boy and girl sit in a booth. Their dialogue is to be said in a rapid- pace "HIS GIRL FRIDAY" fashion.

YOUNG MAN
No, forget it, it's too risky. I'm through
doin' that shit.

YOUNG WOMAN
You always say that, the same thing every
time: never again, I'm through, too
dangerous.

YOUNG MAN
I know that's what I always say. I'm
always right too, but –

YOUNG WOMAN
– but you forget about it in a day or two
–

YOUNG MAN
– yeah, well, the days of me forgittin'
are over, and the days of me rememberin'
have just begun.

YOUNG WOMAN
When you go on like this, you know what
you sound like?

YOUNG MAN
I sound like a sensible fucking man, is
what I sound like. 
YOUNG WOMAN You sound like a duck.
(imitates a duck)
Quack, quack, quack, quack, quack, quack,
quack...

YOUNG MAN
Well take heart, 'cause you're never gonna
hafta hear it again. Because since I'm
never gonna do it again, you're never
gonna hafta hear me quack about how I'm
never gonna do it again.

YOUNG WOMAN After tonight.

The boy and girl laugh, their laughter putting a pause in there, back and forth.

YOUNG MAN (with a smile)
Correct. I got all tonight to quack. A WAITRESS comes by with a pot of coffee.
WAITRESS
Can I get anybody anymore coffee?

YOUNG WOMAN Oh yes, thank you.

The Waitress pours the Young Woman's coffee. The Young Man lights up another cigarette.

YOUNG MAN I'm doin' fine.

The Waitress leaves. The Young Man takes a drag off of his smoke. The Young Woman pours a ton of cream and sugar into her coffee.

The Young Man goes right back into it.

YOUNG MAN
I mean the way it is now, you're takin'
the same fuckin' risk as when you rob a
bank. You take more of a risk. Banks are
easier! Federal banks aren't supposed to
stop you anyway, during a robbery. They're
insured, why should they care? You don't
even need a gun in a federal bank. I heard
about this guy, walked into a federal bank
with a portable phone, handed the phone to
the teller, the guy on the other end of
the phone said: "We got this guy's little
girl, and if you don't give him all your
money, we're gonna kill 'er."

YOUNG WOMAN Did it work? 
YOUNG MAN
Fuckin' A it worked, that's what I'm
talkin' about! Knucklehead walks in a bank
with a telephone, not a pistol, not a
shotgun, but a fuckin' phone, cleans the
place out, and they don't lift a fuckin'
finger.

YOUNG WOMAN
Did they hurt the little girl?

YOUNG MAN
I don't know. There probably never was a
little girl – the point of the story isn't
the little girl. The point of the story is
they robbed the bank with a telephone.

YOUNG WOMAN You wanna rob banks?

YOUNG MAN
I'm not sayin' I wanna rob banks, I'm just
illustrating that if we did, it would be
easier than what we been doin'.

YOUNG WOMAN
So you don't want to be a bank robber?

YOUNG MAN
Naw, all those guys are goin' down the
same road, either dead or servin' twenty.

YOUNG WOMAN
And no more liquor stores?

YOUNG MAN
What have we been talking about? Yeah, no-
more-liquor-stores. Besides, it ain't the
giggle it usta be. Too many foreigners own
liquor stores. Vietnamese, Koreans, they
can't fuckin' speak English. You tell 'em:
"Empty out the register," and they don't
know what it fuckin' means. They make it
too personal. We keep on, one of those
gook motherfuckers' gonna make us kill
'em.

YOUNG WOMAN
I'm not gonna kill anybody. 
YOUNG MAN
I don't wanna kill anybody either. But
they'll probably put us in a situation
where it's us of them. And if it's not the
gooks, it these old Jews who've owned the
store for fifteen fuckin' generations. Ya
got Grandpa Irving sittin' behind the
counter with a fuckin' Magnum. Try walkin'
into one of those stores with nothin' but
a telephone, see how far it gets you. Fuck
it, forget it, we're out of it.

YOUNG WOMAN
Well, what else is there, day jobs?

YOUNG MAN (laughing)
Not this life.

YOUNG WOMAN Well what then?

He calls to the Waitress.

YOUNG MAN Garcon! Coffee!

Then looks to his girl.
 

This place.
 
YOUNG MAN 

The Waitress comes by, pouring him some more.

WAITRESS (snotty)
"Garcon" means boy. She splits.
YOUNG WOMAN Here? It's a coffee shop.

YOUNG MAN
What's wrong with that? People never rob
restaurants, why not? Bars, liquor stores,
gas stations, you get your head blown off
stickin' up one of them. Restaurants, on
the other hand, you catch with their pants
down. They're not expecting to get robbed,
or not as expecting.

YOUNG WOMAN (taking to idea)
I bet in places like this you couldcut down on the hero factor. 
YOUNG MAN
Correct. Just like banks, these places are
insured. The managers don't give a fuck,
they're just tryin' to get ya out the door
before you start pluggin' diners.
Waitresses, forget it, they ain't takin' a
bullet for the register. Busboys, some
wetback gettin' paid a dollar fifty a hour
gonna really give a fuck you're stealin'
from the owner. Customers are sittin'
there with food in their mouths, they
don't know what's goin' on. One minute
they're havin' a Denver omelette, next
minute somebody's stickin' a gun in their
face.

The Young Woman visibly takes in the idea. The Young Man continues in a low voice.

YOUNG MAN
See, I got the idea last liquor store we
stuck up. 'Member all those customers kept
comin' in?
 

Yeah.
 
YOUNG WOMAN 

YOUNG MAN
They you got the idea to take everybody's
wallet.
 

Uh-huh.
 
YOUNG WOMAN 

YOUNG MAN That was a good idea.
 

Thanks.
 
YOUNG WOMAN 

YOUNG MAN
We made more from the wallets then we did
the register.
 

Yes we did.
 
YOUNG WOMAN 

YOUNG MAN
A lot of people go to restaurants.

YOUNG WOMAN A lot of wallets.

YOUNG MAN Pretty smart, huh?

The Young Woman scans the restaurant with this new information. She sees all the PATRONS eating, lost in conversations. The tires WAITRESS, taking orders. The BUSBOYS going through the motions, 
collecting dishes. The MANAGER complaining to the COOK about something. A smiles breaks out on the Young Woman's face.

YOUNG WOMAN Pretty smart.
(into it)
I'm ready, let's go, right here, right
now.

YOUNG MAN
Remember, same as before, you're crowd
control, I handle the employees.
 

Got it.
 
YOUNG WOMAN 

They both take out their .32-caliber pistols and lay them on the table. He looks at her and she back at him.

YOUNG WOMAN I love you, Pumpkin.

YOUNG MAN
I love you, Honey Bunny.

And with that, Pumpkin and Honey Bunny grab their weapons, stand up and rob the restaurant. Pumpkin's robbery persona is that of the in-control professional. Honey Bunny's is that of the psychopathic, hair-triggered, loose cannon.

PUMPKIN (yelling to all)
Everybody be cool this is a robbery!

HONEY BUNNY
Any of you fuckin' pricks move and I'll
execute every one of you motherfuckers!
Got that?

CUT TO:


CREDIT SEQUENCE: "PULP FICTION"

INT. '74 CHEVY (MOVING) – MORNING

An old gas guzzling, dirty, white 1974 Chevy Nova BARRELS down a homeless-ridden street in Hollywood. In the front seat are two young fellas – one white, one black – both wearing cheap black suits with thin black ties under long green dusters. Their names are VINCENT VEGA (white) and JULES WINNFIELD (black). Jules is behind the wheel.

JULES
– Okay now, tell me about the hash bars? 
VINCENT
What so you want to know?

JULES
Well, hash is legal there, right?

VINCENT
Yeah, it's legal, but is ain't a hundred
percent legal. I mean you can't walk into
a restaurant, roll a joint, and start
puffin' away. You're only supposed to
smoke in your home or certain designated
places.

JULES Those are hash bars?

VINCENT
Yeah, it breaks down like this: it's legal
to buy it, it's legal to own it and, if
you're the proprietor of a hash bar, it's
legal to sell it. It's legal to carry it,
which doesn't really matter 'cause – get a
load of this – if the cops stop you, it's
illegal for this to search you. Searching
you is a right that the cops in Amsterdam
don't have.

JULES
That did it, man – I'm fuckin' goin',
that's all there is to it.

VINCENT
You'll dig it the most. But you know what
the funniest thing about Europe is?
 

What?
 
JULES 

VINCENT
It's the little differences. A lotta the
same shit we got here, they got there, but
there they're a little different.
 

Examples?
 
JULES 

VINCENT
Well, in Amsterdam, you can buy beer in a
movie theatre. And I don't mean in a paper
cup either. They give you a glass of beer,
like in a bar. In Paris, you can buy beer
at MacDonald's. Also, you know what they
call a Quarter Pounder with Cheese in
Paris?

JULES
They don't call it a Quarter Pounder with
Cheese? 
VINCENT
No, they got the metric system there, they
wouldn't know what the fuck a Quarter
Pounder is.

JULES What'd they call it?

VINCENT Royale with Cheese.

JULES (repeating)
Royale with Cheese. What'd they call a Big
Mac?

VINCENT
Big Mac's a Big Mac, but they call it Le
Big Mac.

JULES
Le Big Mac. What do they call a Whopper?

VINCENT
I dunno, I didn't go into a Burger King.
But you know what they put on french fries
in Holland instead of ketchup?
 

What?
 
JULES 
 

Mayonnaise.
 
VINCENT 
 

Goddamn!
 
JULES 

VINCENT
I seen 'em do it. And I don't mean a
little bit on the side of the plate, they
fuckin' drown 'em in it.
 

Uuccch!
 
JULES 

CUT TO:


INT. CHEVY (TRUNK) – MORNING

The trunk of the Chevy OPENS UP, Jules and Vincent reach inside, taking out two .45 Automatics, loading and cocking them.

JULES
We should have shotguns for this kind of
deal.

VINCENT How many up there? 
JULES Three or four.

VINCENT Counting our guy?

JULES I'm not sure.

VINCENT
So there could be five guys up there?

JULES It's possible.

VINCENT
We should have fuckin' shotguns.

They CLOSE the trunk.

CUT TO:


EXT. APARTMENT BUILDING COURTYARD – MORNING

Vincent and Jules, their long matching overcoats practically dragging on the ground, walk through the courtyard of what looks like a hacienda-style Hollywood apartment building.

We TRACK alongside.

VINCENT What's her name?
 

Mia.
 
JULES 

VINCENT
How did Marsellus and her meet?

JULES
I dunno, however people meet people. She
usta be an actress.

VINCENT
She ever do anything I woulda saw?

JULES
I think her biggest deal was she starred
in a pilot.

VINCENT What's a pilot?

JULES
Well, you know the shows on TV?

VINCENT I don't watch TV. 
JULES
Yes, but you're aware that there's an
invention called television, and on that
invention they show shows?
 

Yeah.
 
VINCENT 

JULES
Well, the way they pick the shows on TV is
they make one show, and that show's called
a pilot. And they show that one show to
the people who pick the shows, and on the
strength of that one show, they decide if
they want to make more shows. Some get
accepted and become TV programs, and some
don't, and become nothing. She starred in
one of the ones that became nothing.

They enter the apartment building.


INT. RECEPTION AREA (APARTMENT BUILDING) – MORNING

Vincent and Jules walk through the reception area and wait for the elevator.

JULES
You remember Antwan Rockamora? Half-black,
half-Samoan, usta call him Tony Rocky
Horror.

VINCENT Yeah maybe, fat right?

JULES
I wouldn't go so far as to call the
brother fat. He's got a weight problem.
What's the nigger gonna do, he's Samoan.

VINCENT
I think I know who you mean, what about
him?

JULES
Well, Marsellus fucked his ass up good.
And word around the campfire, it was on
account of Marsellus Wallace's wife.

The elevator arrives, the men step inside.


INT. ELEVATOR – MORNING

VINCENT What'd he do, fuck her?

JULES
No no no no no no no, nothin' that bad. 
VINCENT Well what then?

JULES
He gave her a foot massage.

VINCENT A foot massage?

Jules nods his head: "Yes."
 

That's all?
 
VINCENT 

Jules nods his head: "Yes."

VINCENT What did Marsellus do?

JULES
Sent a couple of guys over to his place.
They took him out on the patio of his
apartment, threw his ass over the balcony.
Nigger fell four stories. They had this
garden at the bottom, enclosed in glass,
like one of them greenhouses – nigger fell
through that. Since then, he's kinda
developed a speech impediment.

The elevator doors open, Jules and Vincent exit.

VINCENT That's a damn shame.


INT. APARTMENT BUILDING HALLWAY – MORNING

STEADICAM in front of Jules and Vincent as they make a beeline down the hall.

VINCENT
Still I hafta say, play with matches, ya
get burned.

JULES Whaddya mean?

VINCENT
You don't be givin' Marsellus Wallace's
new bride a foot massage.

JULES
You don't think he overreacted?

VINCENT
Antwan probably didn't expect Marsellus to
react like he did, but he had to expect a
reaction. 
JULES
It was a foot massage, a foot massage is
nothing, I give my mother a foot massage.

VINCENT
It's laying hands on Marsellus Wallace's
new wife in a familiar way. Is it as bad
as eatin' her out – no, but you're in the
same fuckin' ballpark.

Jules stops Vincent.

JULES
Whoa... whoa... whoa... stop right there.
Eatin' a bitch out, and givin' a bitch a
foot massage ain't even the same fuckin'
thing.

VINCENT
Not the same thing, the same ballpark.

JULES
It ain't no ballpark either. Look maybe
your method of massage differs from mine,
but touchin' his lady's feet, and stickin'
your tongue in her holyiest of holyies,
ain't the same ballpark, ain't the same
league, ain't even the same fuckin' sport.
Foot massages don't mean shit.

VINCENT
Have you ever given a foot massage?

JULES
Don't be tellin' me about foot massages –
I'm the foot fuckin' master.

VINCENT Given a lot of 'em?

JULES
Shit yeah. I got my technique down man, I
don't tickle or nothin'.

VINCENT
Have you ever given a guy a foot massage?

Jules looks at him a long moment – he's been set up.
 

Fuck you.
 
JULES 

He starts walking down the hall.Vincent, smiling, walks a little bit behind.
 

How many?
 
VINCENT 
 

Fuck you.
 
JULES 
VINCENT
Would you give me a foot massage – I'm
kinda tired.

JULES
Man, you best back off, I'm gittin' pissed
– this is the door.

The two men stand in front of the door numbered "49."They whisper.

JULES What time is it?

VINCENT
(checking his watch)
Seven-twenty-two in the morning.

JULES
It ain't quite time, let's hang back.

They move a little away from the door, facing each other, still whispering.

JULES
Look, just because I wouldn't give no man
a foot massage, don't make it right for
Marsellus to throw Antwan off a building
into a glass-motherfuckin-house, fuckin'
up the way the nigger talks. That ain't
right, man. Motherfucker do that to me, he
better paralyze my ass, 'cause I'd kill'a
motherfucker.

VINCENT
I'm not sayin' he was right, but you're
sayin' a foot massage don't mean nothing,
and I'm sayin' it does. I've given a
million ladies a million foot massages and
they all meant somethin'. We act like they
don't, but they do. That's what's so
fuckin' cool about 'em. This sensual
thing's goin' on that nobody's talkin
about, but you know
it and she knows it, fuckin'Marsellus knew
it, and Antwan shoulda known fuckin'
better. That's his fuckin' wife, man. He
ain't gonna have a sense of humor about
that shit.

JULES
That's an interesting point, but let's get
into character.

VINCENT What's her name again?

JULES
Mia. Why you so interested in big man's
wife? 
VINCENT
Well, Marsellus is leavin' for Florida and
when he's gone, he wants me to take care
of Mia.

JULES Take care of her?

Making a gun out of his finger and placing it to his head.

VINCENT
Not that! Take her out. Show her a good
time. Don't let her get lonely.

JULES
You're gonna be takin'MIA Wallace out on a
date?

VINCENT
It ain't a date. It's like when you and
your buddy's wife go to a movie or
somethin'. It's just... you know... good
company.

Jules just looks at him.

VINCENT It's not a date.

Jules just looks at him.


INT. APARTMENT (ROOM 49) – MORNING

THREE YOUNG GUYS, obviously in over their heads, sit at a table with hamburgers, french fries and soda pops laid out.

One of them flips the LOUD BOLT on the door, opening it to REVEAL Jules and Vincent in the hallway.
 

Hey kids.
 
JULES 

The two men stroll inside.

The three young caught-off-guard Guys are:

MARVIN, the black young man, who open the door, will, as the scene progresses, back into the corner.

ROGER, a young blond-haired surfer kid with a "Flock of Seagulls" haircut, who has yet to say a word, sits at the table with a big sloppy hamburger in his hand.
BRETT, a white, preppy-looking sort with a blow-dry haircut. Vincent and Jules take in the place, with their hands in their
pockets. Jules is the one who does the talking. 
JULES How you boys doin'?

No answer.

JULES (to Brett)
Am I trippin', or did I just ask you a question.

BRETT We're doin' okay.

As Jules and Brett talk, Vincent moves behind the young Guys.

JULES
Do you know who we are?
Brett shakes his head: "No." JULES
We're associates of your business partner
Marsellus Wallace, you remember your
business partner dont'ya?

No answer.

JULES (to Brett)
Now I'm gonna take a wild guess here:
you're Brett, right?
 

I'm Brett.
 
BRETT 

JULES
I thought so. Well, you remember your
business partner Marsellus Wallace,
dont'ya Brett?

BRETT I remember him.

JULES
Good for you. Looks like me and Vincent
caught you at breakfast, sorry 'bout that.
What'cha eatin'?
 

Hamburgers.
 
BRETT 

JULES
Hamburgers. The cornerstone of any
nutritious breakfast. What kinda
hamburgers?

BRETT Cheeseburgers. 
JULES
No, I mean where did you get'em?
MacDonald's, Wendy's, Jack-in-the-Box,
where?

BRETT Big Kahuna Burger.

JULES
Big Kahuna Burger. That's that Hawaiian
burger joint. I heard they got some tasty
burgers. I ain't never had one myself, how
are they?

BRETT They're good.

JULES
Mind if I try one of yours?
 

No.
 
BRETT 

JULES
Yours is this one, right?
 

Yeah.
 
BRETT 

Jules grabs the burger and take a bite of it.

JULES
Uuummmm, that's a tasty burger.
(to Vincent)
Vince, you ever try a Big Kahuna Burger?
 

No.
 
VINCENT 

Jules holds out the Big Kahuna.

JULES
You wanna bite, they're real good.

VINCENT I ain't hungry.

JULES
Well, if you like hamburgers give 'em a
try sometime. Me, I can't usually eat 'em
'cause my girlfriend's a vegetarian. Which
more or less makes me a vegetarian, but I
sure love the taste of a good burger.
(to Brett)
You know what they call a Quarter Pounder
with Cheese in France?
 

No.
 
BRETT 
JULES Tell 'em, Vincent.

VINCENT Royale with Cheese.

JULES
Royale with Cheese, you know why they call
it that?

BRETT
Because of the metric system?

JULES
Check out the big brain on Brett. You'a
smart motherfucker, that's
right. The metric system.
(he points to a fast food
drink cup)
What's in this?
 

Sprite.
 
BRETT 

JULES
Sprite, good, mind if I have some of your
tasty beverage to wash this down with?
 

Sure.
 
BRETT 

Jules grabs the cup and takes a sip.

JULES Uuuuummmm, hit's the spot!
(to Roger)
You, Flock of Seagulls, you know what
we're here for?
Roger nods his head: "Yes." JULES
Then why don't you tell my boy here Vince,
where you got the shit hid.

MARVIN It's under the be –

JULES
– I don't remember askin' you a goddamn
thing.
(to Roger) You were sayin'?

ROGER It's under the bed.

Vincent moves to the bed, reaches underneath it, pulling out a black snap briefcase. 

Got it.
 
VINCENT 

Vincent flips the two locks, opening the case. We can't see what's inside, but a small glow emits from the case. Vincent just stares at it, transfixed.
 

We happy?
 
JULES 

No answer from the transfixed Vincent.
 

Vincent!
 
JULES 

Vincent looks up at Jules.
 
We happy? Closing the case.
 
JULES 

VINCENT We're happy.

BRETT (to Jules)
Look, what's your name? I got his name'sVINCENT, but what's yours?

JULES
My name's Pitt, and you ain't talkin' your
ass outta this shit.

BRETT
I just want you to know how sorry we are
about how fucked up things got between us
and Mr. Wallace. When we entered into this
thing, we only had the best intentions –

As Brett talks, Jules takes out his gun and SHOOTS Roger three times in the chest, BLOWING him out of his chair.

Vince smiles to himself. Jules has got style.

Brett has just shit his pants. He's not crying or whimpering, but he's so full of fear, it's as if his body is imploding.

JULES (to Brett)
Oh, I'm sorry. Did that break your concentration? I didn't mean to do that. Please, continue. I believe you were saying something about "best intentions."

Brett can't say a word. 
JULES
Whatsamatter? Oh, you were through anyway.
Well, let me retort. Would you describe
for me what Marsellus Wallace looks like?

Brett still can't speak.

Jules SNAPS, SAVAGELY TIPPING the card table over, removing the only barrier between himself and Brett. Brett now sits in a lone chair before Jules like a political prisoner in front of an interrogator.

JULES
What country you from!
 


What?
 
BRETT (petrified) 

JULES
"What" ain't no country I know! Do they
speak English in "What?"
 


What?
 
BRETT
(near heart attack) 

JULES
English-motherfucker-can-you-speak-it?
 

Yes.
 
BRETT 

JULES
Then you understand what I'm sayin'?
 

Yes.
 
BRETT 

JULES
Now describe what Marsellus Wallace looks
like!
 


What?
 
BRETT
(out of fear) 

Jules takes his .45 and PRESSES the barrel HARD in Brett's cheek.

JULES
Say "What" again! C'mon, say "What" again!
I dare ya, I double dare ya motherfucker,
say "What" one more goddamn time!

Brett is regressing on the spot.

JULES
Now describe to me what Marsellus Wallace
looks like! 
Brett does his best.

BRETT
Well he's... he's... black –
 

– go on!
 
JULES 

BRETT
... and he's... he's... bald –

JULES
– does he look like a bitch?!
 


What?
 
BRETT
(without thinking) 

Jules' eyes go to Vincent, Vincent smirks, Jules rolls his eyes and SHOOT Brett in the shoulder.

Brett SCREAMS, breaking into a SHAKING/TREMBLING SPASM in the chair.

JULES
Does-he-look-like-a-bitch?!
 


No.
 
BRETT (in agony) 

JULES
Then why did you try to fuck 'im like a
bitch?!
 

I didn't. Now in a lower voice.
 
BRETT (in spasm) 

JULES
Yes ya did Brett. Ya tried ta fuck 'im.
You ever read the Bible, Brett?
 


Yes.
 
BRETT (in spasm) 
JULES
There's a passage I got memorized, seems
appropriate for this situation: Ezekiel
25:17. "The path of the righteous man is
beset on all sides by the inequities of
the selfish and the tyranny of evil men.
Blessed is he who, in the name of charity
and good will, shepherds the weak through
the valley of darkness, for he is truly
his brother's keeper and the finder of
lost children. And I will strike down upon
thee with great vengeance and furious
anger those who attempt to poison and
destroy my brothers. And you will know my
name is the Lord when I lay my vengeance
upon you."

The two men EMPTY their guns at the same time on the sitting
Brett.


AGAINST BLACK, TITLE CARD:

"VINCENT VEGA AND MARSELLUS WALLACE'S WIFE"

FADE IN:


MEDIUM SHOT – BUTCH COOLIDGE

We FADE UP on BUTCH COOLIDGE, a white, 26-year-old prizefighter.Butch sits at a table wearing a red and blue high school athletic jacket. Talking to him OFF SCREEN is everybody's boss MARSELLUS WALLACE. The black man sounds like a cross between a gangster and a king.

MARSELLUS (O.S.)
I think you're gonna find – when all this
shit is over and done – I think you're
gonna find yourself one smilin'
motherfucker. Thing is Butch, right now
you got ability. But painful as it may be,
ability don't last. Now that's a hard
motherfuckin' fact of life, but it's a
fact of life your ass is gonna hafta git
realistic about. This business is filled
to the brim with unrealistic motherfuckers
who thought their ass aged like wine.
Besides, even if you went all the way,
what would you be? Feather-weight champion
of the world. Who gives a shit? I doubt
you can even get a credit card based on
that.

A hand lays an envelope full of money on the table in front of
Butch. Butch picks it up. 
MARSELLUS (O.S.)
Now the night of the fight, you may fell a
slight sting, that's pride fuckin' wit ya.
Fuck pride! Pride only hurts, it never
helps. Fight through that shit. 'Cause a
year from now, when you're kickin' it in
the Caribbean you're gonna say, "Marsellus
Wallace was right."

BUTCH
I got no problem with that.

MARSELLUS (O.S.)
In the fifth, your ass goes down.

Butch nods his head: "yes."
 

Say it!
 
MARSELLUS (O.S.) 

BUTCH
In the fifth, my ass goes down.

CUT TO:


INT. CAR (MOVING) – DAY

Vincent Vega looks really cool behind the wheel of a 1964 cherry- red Chevy Malibu convertible. From the car radio, ROCKABILLY MUSIC PLAYS. The b.g. is a COLORFUL PROCESS SHOT.


EXT. SALLY LeROY'S – DAY
Sally LeRoy's is a large topless bat by LAX that Marsellus owns. Vincent's classic Malibu WHIPS into the near empty parking lot and
parks next to a white Honda Civic.

Vince knocks on the door. The front entrance is unlocked, revealing the Dapper Dan fellow on the inside:ENGLISH DAVE. Dave isn't really English, he's a young black man from Baldwin Park, who has run a few clubs for Marsellus, including Sally LeRoy's.

ENGLISH DAVE
Vincent Vega, our man in Amsterdam, git
your ass on in here.

Vincent, carrying the black briefcase from the scene between Vincent and Jules, steps inside. English Dave SLAMS the door in our faces.


INT. SALLY LeROY'S – DAY

The spacious club is empty this time of day. English Dave crosses to the bar, and Vince follows. 
VINCENT Where's the big man?

ENGLISH DAVE
He's over there, finishing up some
business.

VINCENT'S POV: Butch shakes hands with a huge figure with his back to us. The huge figure is the infamous and as of yet still UNSEEN Marsellus.

ENGLISH DAVE (O.S.)
Hand back for a second or two, and when
you see the white boy leave, go on over.
In the meanwhile, can I make you an
espresso?

VINCENT
How 'bout a cup of just plain ol'
American?

ENGLISH DAVE
Comin' up. I hear you're taking Mia out
tomorrow?

VINCENT
At Marsellus' request.

ENGLISH DAVE
Have you met Mia?
 

Not yet.
 
VINCENT 

English Dave smiles to himself.

VINCENT What's so funny?

ENGLISH DAVE Not a goddamn thing.

VINCENT
Look, I'm not a idiot. She's the big man's
fuckin' wife. I'm gonna sit across a
table, chew my food with my mouth closed,
laugh at her jokes and that's all I'm
gonna do.

English Dave puts Vince's coffee in front of him.

ENGLISH DAVE
My name's Paul, and this is between y'all.

Butch bellies up to the bar next to Vincent, drinking his cup of
"Plain ol' American."

BUTCH
(to English Dave)
Can I get a pack'a Red Apples? 

Filters?
 
ENGLISH DAVE 
 

Non.
 
BUTCH 

While Butch waits for his smokes, Vincent just sips his coffee, staring at him. Butch looks over at him.

BUTCH
Lookin' at somethin', friend?

VINCENT
I ain't your friend, palooka.

Butch does a slow turn toward Vincent.

BUTCH What was that?

VINCENT
I think ya heard me just fine, punchy.

Butch turns his body to Vincent, when...

MARSELLUS (O.S.)
Vincent Vega has entered the building, git
your ass over here!

Vincent walks forward OUT OF FRAME, never giving Butch another glance. We DOLLY INTO CU on Butch, left alone in the FRAME, looking like he's ready to go into the manners-teaching business.

BUTCH'S POV: Vincent hugging and kissing the obscured figure that is Marsellus.

Butch makes the wise decision that is this asshole's a friend of
Marsellus, he better let it go – for now.

ENGLISH DAVE (O.S.) Pack of Red Apples, dollar-forty.

Butch is snapped out of his ass-kicking thoughts. He pays English
Dave and walks out of the SHOT.

DISSOLVE TO:


INT. LANCE'S HOUSE (KITCHEN) – NIGHT CLOSEUP – JODY
A woman who appears to have a fondness for earrings. Both of her ears are pierced five times. She also sports rings in her lips, eyebrows and nose.

JODY
... I'll lend it to you. It's a great book
on body piercing. 
Jody, Vincent and a young woman named TRUDI sit at the kitchen table of a suburban house in Echo Park. Even though Vince is at the same table, he's not included in the conversation.

TRUDI
You know how they use that gun when they
pierce your ears? They don't use that when
they pierce your nipples, do they?

JODY
Forget that gun. That gun goes against the
entire idea behind piercing. All of my
piercing, sixteen places on my body, every
one of 'em done with a needle. Five in
each ear. One through the nipple on my
left breast. One through my right nostril.
One through my left eyebrow. One through
my lip. One in my clit. And I wear a stud
in my tongue.

Vince has been letting this conversation go through one ear and out the other, until that last remark.

VINCENT (interrupting)
Excuse me, sorry to interrupt. I'm curious, why would you get a stud in your tongue?

Jody looks at him and says as if it were the most obvious thing in the world.

JODY
It's a sex thing. It helps fellatio.

That thought never occurred to Vincent, but he can't deny it makes sense. Jody continues talking to Trudi, leaving Vincent to ponder the truth of her statement.

LANCE (O.S.) Vince, you can come in now!


INT. LANCE'S BEDROOM – NIGHT

Lance, late 20s, is a young man with a wild and woolly appearance that goes hand-in-hand with his wild and woolly personality. LANCE has been selling drugs his entire adult life. He's never had a day job, never filed a tax return and has never been arrested. He
wears a red flannel shirt over a "Speed Racer" tee-shirt. Three bags of heroin lie on Lance's bed.
Lance and Vincent stand at the foot of the bed. 
LANCE
Now this is Panda, from Mexico. Very good
stuff. This is Bava, different, but
equally good. And this is Choco from the
Hartz Mountains of Germany. Now the first
two are the same, forty-five an ounce –
those are friend prices – but this one...
(pointing to the Choco)
... this one's a little more expensive.
It's fifty-five. But when you shoot it,
you'll know where that extra money went.
Nothing wrong with the first two. It's
real, real, real, good shit. But this
one's a fuckin' madman.

VINCENT
Remember, I just got back from Amsterdam.

LANCE
Am I a nigger? Are you in Inglewood? No.
You're in my house. White people who know
the difference between good shit and bad
shit, this is the house they come to. My
shit, I'll take the Pepsi Challenge with
Amsterdam shit any ol' day of the fuckin'
week.

VINCENT That's a bold statement.

LANCE
This ain't Amsterdam, Vince. This is a
seller's market. Coke is fuckin' dead as
disco. Heroin's comin' back in a big
fuckin' way. It's this whole seventies
retro. Bell bottoms, heroin, they're as
hot as hell.

Vincent takes out a roll of money that would choke a horse to death.

VINCENT
Give me three hundred worth of the madman.
If it's as good as you say, I'll be back
for a thousand.

LANCE
I just hope I still have it. Whaddya think
of Trudi? She ain't got a boyfriend, wanna
hand out an' get high?

VINCENT
Which one's Trudi? The one with all the
shit in her face?

LANCE
No, that's Jody. That's my wife.

Vincent and Lance giggle at the "faux pas." 
VINCENT
I'm on my way somewhere. I got a dinner
engagement. Rain check?
 

No problem?
 
LANCE 

Vincent takes out his case of the works (utensils for shooting up).

VINCENT
You don't mind if I shoot up here?

LANCE Me casa, su casa.

VINCENT Mucho gracias.

Vincent takes his works out of his case and, as the two continue to talk, Vince shoots up.

LANCE
Still got your Malibu?

VINCENT
You know what some fucker did to it the
other day?
 

What?
 
LANCE 

VINCENT Fuckin' keyed it.

LANCE
Oh man, that's fucked up.

VINCENT
Tell me about it. I had the goddamn thing
in storage three years. It's out five
fuckin' days – five days, and some
dickless piece of shit fucks with it.

LANCE
They should be fuckin' killed. No trial,
no jury, straight to execution.

As he cooks his heroin...

VINCENT
I just wish I caught 'em doin' it, ya
know? Oh man, I'd give anything to catch
'em doin' it. It'a been worth his doin'
it, if I coulda just caught 'em, you know
what I mean?

LANCE
It's chicken shit. You don't fuck another
man's vehicle. 
CLOSEUP – THE NEEDLE

Going into Vincent's vein.


CLOSEUP – BLOOD

Spurting back into the syringe, mixing with the heroin.


CLOSEUP – VINCENT'S THUMB Pushing down on the plunger.
CUT TO:


EXT. MARSELLUS WALLACE'S HOUSE – NIGHT

Vincent walks toward the house and pulls a note off the door

CLOSEUP – NOTE The Not reads: "Hi Vincent,
I'm getting dressed. The door's
open. Come inside and make
yourself a drink.

Mia"

MIA (V.O.)
Hi, Vincent. I'm getting dressed. The
door's open. Come inside and make yourself
a drink.

FADE TO WHITE (music in)
FADE TO:

INT. MARCELLUS' HOUSE / LIVING ROOM – NIGHT Vincent enters on the background.
 

Hello?
 
VINCENT 


INT. MARCELLUS' HOUSE / DRESSING ROOM – NIGHT

MIA, Marcellus' beautiful young wife. Video screens are in the background. Dusty Springfield is singing "SON OF A PREACHER MAN". Mia's mouth comes toward a microphone. 



Vincent.
 
MIA
(into microphone) 


INT. MARCELLUS' HOUSE / LIVING ROOM – NIGHT Vincent turns.
MIA
(over intercom)
Vincent. I'm on the intercom.

INT. MARCELLUS' HOUSE / DRESSING ROOM – NIGHT MIA
(into microphone)
It's on the wall by the two African
fellas.

INT. MARCELLUS' HOUSE / LIVING ROOM – NIGHT MIA
(over intercom)
To your right.

Vincent walks.

MIA
... warm. Warmer. Disco.

Vincent finds the intercom on the wall.
 

Hello.
 
VINCENT 

MIA
(over intercom)
Push the button if you want to talk.
 


Hello.
 
VINCENT
(into intercom) 

INT. MARCELLUS' HOUSE / DRESSING ROOM – NIGHT

MIA
(into microphone)
Go make yourself a drink., and I'll be
down in two shakes of a lamb's tail.

INT. MARCELLUS' HOUSE / LIVING ROOM – NIGHT MIA
(over intercom)
The bar's by the fireplace. 



Okay.
 
VINCENT
(into intercom)

(licks lips) 


INT. MARCELLUS' HOUSE / DRESSING ROOM – NIGHT

A video screen with an image of Vincent, walking. The Dusty
Springfield song continues.

Mia turns a knob which controls the movement of the video camera in Marcellus' living room.


INT. MARCELLUS' HOUSE / LIVING ROOM – NIGHT

Vincent picks up a bottle of scotch. He sniffs the bottle, and then pours it into a glass.


INT. MARCELLUS' HOUSE / DRESSING ROOM – NIGHT A razor blade cuts cocaine on a mirror.

INT. MARCELLUS' HOUSE / LIVING ROOM – NIGHT Vincent drinks a glass of scotch.

INT. MARCELLUS' HOUSE / DRESSING ROOM – NIGHT Mia sniffs the cocaine.

INT. MARCELLUS' HOUSE / LIVING ROOM – NIGHT
Vincent ips the drink and looks at a portrait of Mia on the wall. Mia walks into the room, and takes the needle off a record. The
Dusty Springfield song stops.
 

Let's go.
 
MIA 


EXT. JACKRABBIT SLIM'S – NIGHT

In the past six years, 50's diners have sprung up all over L.A., giving Thai restaurants a run for their money. They're all basically the same. Decor out of an "Archie" comic book, Golden Oldies constantly emanating from a bubbly Wurlitzer, saucy waitresses in bobby socks, menus with items like the Fats Domino Cheeseburger, or the Wolfman Jack Omelette, and over prices that pay for all this bullshit.

But then there's JACKRABBIT SLIM'S, the big mama of 50's diners. Either the best or the worst, depending on your point of view. 
Vincent's Malibu pulls up to the restaurant. A big sign with a neon figure of a cartoon surly cool cat jackrabbit in a red windbreaker towers over the establishment. Underneath the cartoon is the name: JACKRABBIT SLIM'S. Underneath that is the slogan:"Next best thing to a time machine."

VINCENT
What the fuck is this place?

MIA
This is Jackrabbit Slim's. An Elvis man
should love it.

VINCENT
Come on, Mia, let's go get a steak.

MIA
You can get a steak here, daddy-o. Don't
be a...

Mia draws a square with her hands. Dotted lines appear on the screen, forming a sqaure. The lines disperse.

VINCENT After you, kitty-cat.


INT. JACKRABBIT SLIM'S – NIGHT

Compared to the interior, the exterior was that of a quaint
English pub. Posters from 50's A.I.P. movies are all over the wall
("ROCK ALL NIGHT," "HIGH SCHOOL CONFIDENTIAL," "ATTACK OF THE CRAB
MONSTER," and "MACHINE GUN KELLY"). The booths that the patrons
sit in are made out of the cut up bodies of 50s cars.

In the middle of the restaurant in a dance floor. A big sign on
the wall states, "No shoes allowed."So wannabe beboppers (actually
Melrose-types), do the twist in their socks or barefeet.

The picture windows don't look out the street, but instead, B & W movies of 50's street scenes play behind them. The WAITRESSES and WAITERS are made up as replicas of 50's icons: MARILYN MONROE, ZORRO, JAMES DEAN, DONNA REED, MARTIN and LEWIS, and THE PHILIP MORRIS MIDGET, wait on tables wearing appropriate costumes.

Vincent and Mia study the menu in a booth made out of a red '59
Edsel. BUDDY HOLLY (their waiter), comes over, sporting a big
button on his chest that says:"Hi I'm Buddy, pleasing you please
me."

BUDDY
Hi I'm Buddy, what can I get'cha?

VINCENT
I'll have the Douglas Sirk steak.

BUDDY
How d'ya want it, burnt to a crisp, or
bloody as hell? 
VINCENT
Bloody as hell. And to drink, a vanilla
coke.

BUDDY
How 'bout you, Peggy Sue?

MIA
I'll have the Durwood Kirby burger –
bloody – and a five-dollar shake.

BUDDY
How d'ya want that shake, Martin and
Lewis, or Amos and Andy?

MIA Martin and Lewis.

VINCENT
Did you just order a five-dollar shake?
 

Sure did.
 
MIA 

VINCENT
A shake? Milk and ice cream?
 

Uh-huh.
 
MIA 

VINCENT
It costs five dollars?
 

Yep.
 
BUDDY 

VINCENT
You don't put bourbon in it or anything?
 

Nope.
 
BUDDY 

VINCENT Just checking.

Buddy exits.

Vincent takes a look around the place. The YUPPIES are dancing, the DINERS are biting into big, juicy hamburgers, and the icons are playing their parts. Marilyn is squealing, The Midget is paging Philip Morris, Donna Reed is making her customers drink their milk, and Dean and Jerry are acting a fool.

MIA Whaddya think?

VINCENT
It's like a wax museum with a pulse rate. 
Vincent takes out his pouch of tobacco and begins rolling himself a smoke.
After a second of watching him – MIA
What are you doing?

VINCENT Rollin' a smoke.
 

Here?
 
MIA 

VINCENT It's just tobacco.

MIA
Oh. Well in that case, will you roll me
one, cowboy?
As he finishes licking it – VINCENT
You can have his one, cowgirl.

He hands her the rolled smoke. She takes it, putting it to her lips. Out of nowhere appears a Zippo lighter in Vincent's hand. He lights it.
 

Thanks.
 
MIA 

VINCENT Think nothing of it.

He begins rolling one for himself.

As this time, the SOUND of a subway car fills the diner, making everything SHAKE and RATTLE. Marilyn Monroe runs to a square vent in the floor. An imaginary subway train BLOWS the skirt of her white dress around her ears as she lets out a squeal. The entire restaurant applauds.

Back to Mia and Vincent.

MIA
Marsellus said you just got back from
Amsterdam.

VINCENT
Sure did. I heard you did a pilot.

MIA
That was my fifteen minutes.

VINCENT What was it? 
MIA
It was show about a team of female secret
agents called "Fox Force Five."
 

What?
 
VINCENT 

MIA
"Fox Force Five."Fox, as in we're a bunch
of foxy chicks. Force, as in we're a force
to be reckoned with. Five, as in there's
one... two ... three... four... five of
us. There was a blonde one, Sommerset
O'Neal from that show "Baton Rouge," she
was the leader. A Japanese one, a black
one, a French one and a brunette one, me.
We all had special skills. Sommerset had a
photographic memory, the Japanese fox was
a kung fu master, the black girl was a
demolition expert, the French fox'
specialty was sex...

VINCENT
What was your specialty?

MIA
Knives. The character I played, Raven
McCoy, her background was she was raised
by circus performers. So she grew up doing
a knife act. According to the show, she
was the deadliest woman in the world with
a knife. But because she grew up in a
circus, she was also something of an
acrobat. She could do illusions, she was a
trapeze artist – when you're keeping the
world safe from evil, you never know when
being a trapeze artist's gonna come in
handy. And she knew a zillion old jokes
her grandfather, an old vaudevillian,
taught her. If we woulda got picked up,
they woulda worked in a gimmick where
every episode I woulda told and ol joke.

VINCENT
Do you remember any of the jokes?

MIA
Well I only got the chance to say one,
'cause we only did one show.
 

Tell me.
 
VINCENT 

MIA
No. It's really corny.

VINCENT
C'mon, don't be that way. 
MIA
No. You won't like it and I'll be
embarrassed.

VINCENT
You told it in front of fifty million
people and you can't tell it to me? I
promise I won't laugh.

MIA (laughing)
That's what I'm afraid of.

VINCENT
That's not what I meant and you know it.

MIA
You're quite the silver tongue devil,
aren't you?

VINCENT
I meant I wouldn't laugh at you.

MIA
That's not what you said Vince. Well now
I'm definitely not gonna tell ya, 'cause
it's been built up too much.
 

What a gyp.
 
VINCENT 

Buddy comes back with the drinks. Mia wraps her lips around the straw of her shake.
 

Yummy!
 
MIA 

VINCENT
Can I have a sip of that? I'd like to know
what a five-dollar shake tastes like.

MIA Be my guest.

She slides the shake over to him.

MIA
You can use my straw, I don't have
kooties.

Vincent smiles.

VINCENT Yeah, but maybe I do.

MIA Kooties I can handle.

He takes a sip. 
VINCENT
Goddamn! That's a pretty fuckin' good
milk shake.
 

Told ya.
 
MIA 

VINCENT
I don't know if it's worth five dollars,
but it's pretty fuckin' good.

He slides the shake back.

Then the first of an uncomfortable silence happens.

MIA
Don't you hate that?
 

What?
 
VINCENT 

MIA
Uncomfortable silences. Why do we feel
it's necessary to yak about bullshit in
order to be comfortable?

VINCENT I don't know.

MIA
That's when you know you found somebody
special. When you can just shit the fuck
up for a minute, and comfortably share
silence.

VINCENT
I don't think we're there yet. But don't
feel bad, we just met each other.

MIA
Well I'll tell you what, I'll go to the
bathroom and powder my nose, while you sit
here and think of something to say.

VINCENT I'll do that.


INT. JACKRABBIT SLIM'S (LADIES ROOM) – NIGHT

Mia powders her nose by doing a big line of coke off the bathroom sink. Her head jerks up from the rush.

MIA
(imitating Steppenwolf)
I said goddamn! 
INT. JACKRABBIT SLIM'S (DINING AREA) – NIGHT

Vincent digs into his Douglas Sirk steak. As he chews, his eyes scan the Hellsapopinish restaurant.

Mia comes back to the table.

MIA
Don't you love it when you go to the
bathroom and you come back to find your
food waiting for you?

VINCENT
We're lucky we got it at all. Buddy Holly
doesn't seem to be much of a waiter. We
shoulda sat in Marilyn Monroe's section.

MIA
Which one, there's two Marilyn Monroes.

VINCENT No there's not.

Pointing at Marilyn in the white dress serving a table.

VINCENT That's Marilyn Monroe...

Then, pointing at a BLONDE WAITRESS in a tight sweater and capri pants, taking an order from a bunch of FILM GEEKS –

VINCENT
... and that's Mamie Van Doren. I don't
see Jayne Mansfield, so it must be her
night off.

MIA Pretty smart.

VINCENT I have moments.

MIA
Did ya think of something to say?

VINCENT
Actually, there's something I've wanted to
ask you about, but you seem like a nice
person, and I didn't want to offend you.

MIA
Oooohhhh, this doesn't sound like
mindless, boring, getting-to-know-you
chit-chat. This sounds like you actually
have something to say.

VINCENT
Only if you promise not to get offended. 
MIA
You can't promise something like that. I
have no idea what you're gonna ask. You
could ask me what you're gonna ask me, and
my natural response could be to be
offended. Then, through no fault of my
own, I woulda broken my promise.

VINCENT
Then let's just forget it.

MIA
That is an impossibility. Trying to forget
anything as intriguing as this would be an
exercise in futility.

VINCENT Is that a fact?
Mia nods her head: "Yes." MIA
Besides, it's more exciting when you don't
have permission.

VINCENT
What do you think about what happened to
Antwan?

MIA Who's Antwan?

VINCENT Tony Rocky Horror.

MIA
He fell out of a window.

VINCENT
That's one way to say it. Another way is,
he was thrown out. Another was is, he was
thrown out by Marsellus. And even another
way is, he was thrown out of a window by
Marsellus because of you.

MIA Is that a fact?

VINCENT
No it's not, it's just what I heard.

MIA
Who told you this?
 

They.

Mia and Vincent smile.
 
VINCENT 
MIA
They talk a lot, don't they?

VINCENT They certainly do.

MIA
Well don't by shyVincent, what exactly did
they say?

Vincent is slow to answer.

MIA
Let me help you Bashful, did it involve
the F-word?

VINCENT
No. They just said Rocky Horror gave you a
foot massage.
 

And...?
 
MIA 

VINCENT No and, that's it.

MIA
You heard Marsellus threw Rocky Horror out
of a four-story window because he massaged
my feet?
 

Yeah.
 
VINCENT 

MIA
And you believed that?

VINCENT
At the time I was told, it seemed
reasonable.

MIA
Marsellus throwing Tony out of a four-
story window for giving me a foot massage
seemed reasonable?

VINCENT
No, it seemed excessive. But that doesn't
mean it didn't happen. I heard Marsellus
is very protective of you.

MIA
A husband being protective of his wife is
one thing. A husband almost killing
another man for touching his wife's feet
is something else.

VINCENT But did it happen? 
MIA
The only thing Antwan ever touched of mine
was my hand, when he shook it. I met Anwan
once – at my wedding – then never again.
The truth is, nobody knows why Marsellus
tossed Tony Rocky Horror out of that
window except Marsellus and Tony Rocky
Horror. But when you scamps get together,
you're worse than a sewing circle.
CUT TO: ED SULLIVAN AND MARILYN MONROE STAND ON STAGE

ED SULLIVAN (into microphone)
Ladies and gentlemen, now the moment you've all been waiting for, the world- famous Jackrabbit Slim's twist contest.

Patrons cheer.

Ed Sullivan is with Marilyn Monroe, who holds a trophy.

ED SULLIVAN
... One lucky couple will win this
handsome trophy that Marilyn here is
holding.

Marilyn holds the trophy.

ED SULLIVAN
... Now, who will be our first
contestants?

Mia holds her hand.
 
Right here. Vincent reacts.
 
MIA 

MIA I wanna dance.

VINCENT
No, no, no no, no, no, no, no.

MIA (overlapping)
No, no, no, no, no, no, no. I do believe Marsellus, my husband, your boss, told you to take me out and do whatever I wanted, Now, I want to dance. I want to win. I
want that trophy. 
VINCENT (sighs)
All right.

MIA So, dance good.

VINCENT
All right, you asked for it.

Vincent and Mia walk onto the dance floor, toward Ed Sullivan.

ED SULLIVAN (into microphone)
Let's hear it for our first contestants. Patrons cheer.
Vincent and Mia walk up to the microphone.

ED SULLIVAN
Now let's meet our first contestants here
this evening. Young lady, what is your
name?

MIA
(into microphone)
Missus Mia Wallace.

ED SULLIVAN (into microphone)
And, uh, how 'bout your fella here?

MIA
(into microphone)
Vincent Vega.

ED SULLIVAN (into microphone)
All right, let's see what you can do. Take it away!

Mia and Vincent dance to Chuck Berry's "YOU NEVER CAN TELL". They make hand movements as they dance.


INT. MARSELLUS WALLACE'S HOME – NIGHT

The front door FLINGS open, and Mia and Vincent dance tango-style into the house, singing a cappella the song from the previous scene. They finish their little dance, laughing.

Then...

The two just stand face to face looking at each other.

VINCENT
Was than an uncomfortable silence? 
MIA
I don't know what that was.
(pause)
Music and drinks!

Mia moves away to attend to both. Vincent hangs up his overcoat on a big bronze coat rack in the alcove.

VINCENT
I'm gonna take a piss.

MIA
That was a little bit more information
than I needed to know, but for right
ahead.

Vincent shuffles off to the john.

Mia moves to her CD player, thumbs through a stack of CDs and selects one: k.d. lang. The speakers BLAST OUT a high energy country number, which Mia plays air-guitar to. She dances her way around the room and finds herself by Vincent's overcoat hanging on the rack. She touches its sleeve. It feels good.

Her hand hoes in its pocket and pulls out his tobacco pouch. Like a little girl playing cowboy, she spreads the tobacco on some rolling paper. Imitating what he did earlier, licks the paper and rolls it into a pretty good cigarette. Maybe a little too fat, but not bad for a first try. Mia thinks so anyway. Her hand reaches back in the pocket and pulls out his Zippo lighter. She SLAPS the lighter against her leg, trying to light it fancy-style like Vince did. What do you know, she did it! Mia's one happy clam. She triumphantly brings the fat flame up to her fat smoke, lighting it up, then LOUDLY SNAPS the Zippo closed.

The Mia-made cigarette is brought up to her lips, and she takes a long, cool drag. Her hand slides the Zippo back in the overcoat pocket. But wait, her fingers touch something else. Those fingers bring out a plastic bag with white powder inside, the madman that Vincent bought earlier from Lance. Wearing a big smile, Mia brings the bag of heroin up to her face.

MIA
(like you would say Bingo!)
Disco! Vince, you little cola nut, you've
been holding out on me.

CUT TO:


INT. BATHROOM (MARSELLUS WALLACE'S HOUSE) – NIGHT

Vincent stands at the sink, washing his hands, talking to himself in the mirror.

VINCENT
One drink and leave. Don't be rude, but
drink your drink quickly, say goodbye,
walk out the door, get in your car, and go
down the road. 
LIVING ROOM

Mia has the unbeknownst-to-her heroin cut up into big lines on her glass top coffee table. Taking her trusty hundred dollar bill like a human Dust-Buster, she quickly snorts the fat line.


CLOSEUP – MIA

Her head JERKS back. Her hands go to her nose (which feels like it's on fucking fire), something is terribly wrong. Then... the rush hits...


BATHROOM

Vincent dries his hands on a towel while he continues his dialogue with the mirror.

VINCENT
... It's a moral test of yourself, whether
or not you can maintain loyalty. Because
when people are loyal to each other,
that's very meaningful.


LIVING ROOM

Mia is on all fours trying to crawl to the bathroom, but it's like she's trying to crawl with the bones removed from her knees. Blood begins to drip from Mia's nose. Then her stomach gets into the act and she VOMITS.


BATHROOM

Vince continues.

VINCENT
So you're gonna go out there, drink your
drink, say "Goodnight, I've had a very
lovely evening," go home, and jack off.
And that's all you're gonna do.

Now that he's given himself a little pep talk, Vincent's ready for whatever's waiting for him on the other side of that door. So he goes through it.


LIVING ROOM

We follow behind Vincent as he walks from the bathroom to the living room, where he finds Mia lying on the floor like a rag doll. She's twisted on her back. Blood and puke are down her front. And her face is contorted. Not out of the tightness of pain, but just the opposite, the muscles in her face are so relaxed, she lies still with her mouth wide open. Slack-jawed.

VINCENT Jesus Christ! 
Vincent moves like greased lightning to Mia's fallen body. Bending down where she lays, he puts his fingers on her neck to check her pulse. She slightly stirs.

Mia is aware of Vincent over her, speaking to her.

VINCENT (sounding weird)
Mia! MIA! What the hell happened?

But she's unable to communicate Mia makes a few lost mumbles, but they're not distinctive enough to be called words.

Vincent props her eyelids open and sees the story.

VINCENT (to himself)
I'll be a son-of-a-bitch. (to Mia)
Mia! MIA! What did you take? Answer me honey, what did you take?

Mia is incapable of answering. He SLAPS her face hard.

Vincent SPRINGS up and RUNS to his overcoat, hanging on the rack. He goes through the pockets FRANTICALLY. It's gone. Vincent makes a beeline to Mia. We follow.

VINCENT (yelling toMia)
Okay honey, we're getting you on your feet.

He reaches her and hoists the dead weight up in his arms.

VINCENT
We're on our feet now, and now we're gonna
talk out to the car. Here we go, watch us
walk.

We follow behind as he hurriedly walks the practically-unconscious
Mia through the house and out the front door.


EXT.VINCENT'S HOT ROD (MOVING) – NIGHT

INSERT SPEEDOMETER: red needle on a hundred.

Vincent driving like a madman in a town without traffic laws, speeds the car into turns and up and over hills.


INT.VINCENT'S HOT ROD (MOVING) – NIGHT

Vincent, one hand firmly on the wheel, the other shifting like Robocop, both eyes staring straight ahead except when he glances over at Mia.

Mia, slack-jawed expression, mouth gaping, posture of a bag of water. 
Vincent takes a cellular phone out of his pocket. He punches a number.


INT. LANCE'S HOUSE – NIGHT

At this late hour, LANCE has transformed from a bon vivant drug dealer to a bathrobe creature.

He sits in a big comfy chair, ratty blue gym pants, a worn-out but comfortable tee-shirt that has, written on it, "TAFT, CALIFORNIA", and a moth-ridden terry cloth robe. In his hand is a bowl of Cap'n Crunch with Crunch Berries. In front of him on the coffee table is a jug of milk, the box the Cap'n Crunch with Crunch Berries came out of, and a hash pipe in an ashtray.

On the big-screen TV in front of the table is the Three Stooges, and they're getting married.

PREACHER (EMIL SIMKUS) (on TV)
Hold hands, you love birds. The phone RINGS.
Lance puts down his cereal and makes his way to the phone. It RINGS again.
Jody, his wife, CALLS from the bedroom, obviously woken up.

JODY (O.S.) Lance! The phone's ringing!

LANCE (calling back)
I can hear it!

JODY (O.S.)
I thought you told those fuckin' assholes
never to call this late!

LANCE
(by the phone)
I told 'em and that's what I'm gonna tell
this fuckin' asshole right now!
(he answers the phone)
Hello, do you know how late it is? You're
not supposed to be callin' me this fuckin'
late.

BACK TO:


VINCENT IN THE MALIBU

Vincent is still driving like a stripe-assed ape, clutching the phone to his ear. WE CUT BACK AND FORTH during the conversation. 
VINCENT
Lance, this is Vincent, I'm in big fuckin'
trouble man, I'm on my way to your place.

LANCE
Whoa, hold you horses man, what's the
problem?

VINCENT
You still got an adrenalin shot?
 


Maybe.
 
LANCE
(dawning on him) 

VINCENT
I need it man, I got a chick she's fuckin'
ODing on me.

LANCE
Don't bring her here! I'm not even fuckin'
joking with you, don't you be bringing
some fucked up pooh-butt to my house!
 

No choice.
 
VINCENT 

LANCE She's ODin'?

VINCENT Yeah. She's dyin'.

LANCE
Then bite the fuckin' bullet, take 'er to
a hospital and call a lawyer!
 

Negative.
 
VINCENT 

LANCE
She ain't my fuckin' problem, you fucked
her up, you deal with it – are you talkin'
to me on a cellular phone?
 

Sorry.
 
VINCENT 

LANCE
I don't know you, who is this, don't come
here, I'm hangin' up.

VINCENT
Too late, I'm already here.

At that moment insideLance's house, WE HEARVINCENT's Malibu coming up the street. Lance hangs up the phone, goes to his curtains and 
YANKS the cord. The curtains open with a WHOOSH in time to see Vincent's Malibu DRIVING UP on his front lawn and CRASHING into his house. The window Lance is looking out of SHATTERS from the impact.

JODY (O.S.) What the hell was that?

Lance CHARGES from the window, out the door to his front lawn.


EXT. LANCE'S HOUSE – NIGHT

Vincent is already out of the car, working on getting Mia out.

LANCE
Have you lost your mind?! You crashed your
car in my fuckin' house! You talk about
drug shit on a cellular fuckin' phone –

VINCENT
If you're through havin' your little hissy
fit, this chick is dyin', get your needle
and git it now!

LANCE
Are you deaf? You're not bringin' that
fucked up bitch in my house!

VINCENT
This fucked up bitch is Marsellus
Wallace's wife. Now if she fuckin' croaks
on me, I'm a grease spot. But before he
turns me into a bar soap, I'm gonna be
forced to tell 'im about how you coulda
saved her life, but instead you let her
die on your front lawn.


INT. LANCE'S HOUSE – NIGHT

WE START in Lance's and Jody's bedroom.

Jody, in bed, throws off the covers and stands up. She's wearing a long tee-shirt with a picture of Fred Flintstone on it.

We follow HANDHELD behind her as she opens the door, walking through the hall into the living room.

JODY
It's only one-thirty in the goddamn
mornin'! What the fuck's goin' on out
here?

As she walks in the living room, she sees Vincent and Lance standing over Mia, who's lying on the floor in the middle of the room. 
From here on in, everything in this scene is frantic, like a DOCUMENTARY in an emergency ward, with the big difference here being nobody knows what the fuck they're doing.
 
Who's she? Lance looks up at Jody.
 
JODY 

LANCE
Get that black box in the bedroom I have
with the adrenalin shot.

JODY
What's wrong with her?

VINCENT She's ODing on us.

JODY
Well get her the hell outta here!

LANCE ANDVINCENT (in stereo)
Get the fuckin' shot!

JODY Don't yell and me!

She angrily turns and disappears into the bedroom looking for the shot.

WE MOVE into the room with the two men.

VINCENT (to Lance)
You two are a match made in heaven.

LANCE
Look, just keep talkin' to her, okay?
While she's gettin' the shot, I gotta get
a medical book.

VINCENT
What do you need a medical book for?

LANCE
To tell me how to do it. I've never given
an adrenalin shot before.

VINCENT
You've had that thing for six years and
you never used it?

LANCE
I never had to use it. I don't go joy-
poppin' with bubble-gummers, all of
myfriends can handle their highs! 
VINCENT Well then get it.

LANCE
I am, if you'll let me.

VINCENT
I'm not fuckin' stoppin' you.

LANCE
Stop talkin' to me, and start talkin' to
her.

WE FOLLOW Lance as he runs out of the living room into a...


INT. SPARE ROOM

With a bunch of junk in it. He frantically starts scanning the junk for the book he's looking for, repeating the words, "Come on," endlessly.

From OFF SCREEN we hear:

VINCENT (O.S.)
Hurry up man! We're losin' her!

LANCE (calling back)
I'm looking as fast as I can! Lance continues his frenzied search.
WE HEAR Jody in the living room now as she talks to Vincent.

JODY (O.S.) What's he lookin' for?

VINCENT (O.S.)
I dunno, some medical book.

Jody calls to LANCE.

JODY (O.S.) What are you lookin' for?

LANCE
My black medical book!

As he continues searching, flipping and knocking over shit, Jody appears in the doorway.

JODY
Whata re you looking for?

LANCE
My black fuckin' medical book. It's like a
text book they give to nurses. 
JODY
I never saw a medical book.

LANCE Trust me, I have one.

JODY
Well if it's that important, why didn't
you keep it with the shot?

Lance spins toward her.

LANCE
I don't know! Stop bothering me!

JODY
While you're lookin' for it, that girl's
gonna die on our carpet. You're never
gonna find it in all this shit. For six
months now, I've been telling you to clean
this room –

VINCENT (O.S.)
– get your ass in here, fuck the book!

Lance angrily knocks over a pile of shit and leaves the SHOT
heading for the living room.


LIVING ROOM

Vincent is bent over Mia, talking softly to her, when Lance reenters the room.

VINCENT
Quit fuckin' around man and give her the
shot!

Lance bends down by the black case brought in by Jody. He opens it and begins preparing the needle for injection.

LANCE
While I'm doing this, take her shirt off
and find her heart.

Vince rips her blouse open.

Jody stumbles back in the room, hanging back from the action.

VINCENT
Does it have to be exact?

LANCE
Yeah, it has to be exact! I'm giving her
an injection in the heart, so I gotta
exactly hit her in the heart.

VINCENT
Well, I don't know exactly where her heart
is, I think it's here. 
Vince points to Mia's right breast.Lance glances over and nods.
 

That's it.
 
LANCE 

As Lance readies the injection, Vincent looks up at Jody.

VINCENT
I need a big fat magic marker, got one?
 

What?
 
JODY 

VINCENT
I need a big fat magic marker, any felt
pen'll do, but a magic marker would be
great.
 

Hold on.
 
JODY 

Jody runs to the desk, opens the top drawer and, in her enthusiasm, she pulls the drawer out of the desk, the contents of which (bills, papers, pens) spill to the floor.

The injection is ready. Lance hands Vincent the needle.

LANCE
It's ready, I'll tell you what to do.

VINCENT
You're gonna give her the shot.

LANCE
No, you're gonna give her the shot.

VINCENT
I've never does this before.

LANCE
I've never done this before either, and I
ain't starting now. You brought 'er here,
that means you give her the shot. The day
I bring an ODing bitch to your place, then
I gotta give her the shot.

Jody hurriedly joins them in the huddle, a big fat red magic marker in her hand.
 

Got it.
 
JODY 

Vincent grabs the magic marker out of Jody's hand and makes a big red dot inMIA's body where her heart is.

VINCENT Okay, what do I do? 
LANCE
Well, you're giving her an injection of
adrenalin straight to her heart. But she's
got a breast plate in front of her heart,
so you gotta pierce through that. So what
you gotta do is bring the needle down in a
stabbing motion.

Lance demonstrates a stabbing motion, which looks like "The Shape" killing its victims in "HALLOWEEN".

VINCENT I gotta stab her?

LANCE
If you want the needle to pierce through
to her heart, you gotta stab her hard.
Then once you do, push down on the
plunger.

VINCENT
What happens after that?

LANCE
I'm curious about that myself.

VINCENT
This ain't a fuckin' joke man!

LANCE
She's supposed to come out of it like –
(snaps his fingers)
– that.

Vincent lifts the needle up above his head in a stabbing motion. He looks down on Mia.

Mia is fading fast. Soon nothing will help her. Vincent's eyes narrow, ready to do this.
VINCENT Count to three.

Lance, on this knees right beside Vincent, does not know what to expect.
 

One...

RED DOT on Mia's body.
 
LANCE 

Needle raised ready to strike.
 

... two...
 
LANCE (O.S.) 

Jody's face is alive with anticipation.

NEEDLE in that air, poised like a rattler ready to strike. 

... three!
 
LANCE (O.S.) 

The needle leaves frame, THRUSTING down hard.

Vincent brings the needle down hard, STABBING Mia in the chest. Mia's head if JOLTED from the impact.
The syringe plunger is pushed down, PUMPING the adrenalin out through the needle.

Mia's eyes POP WIDE OPEN and she lets out a HELLISH cry of the banshee. She BOLTS UP in a sitting position, needle stuck in her chest – SCREAMING.

Vincent, Lance and Jody, who were in sitting positions in front of
Mia, JUMP BACK, scared to death.
Mia's scream runs out. She slowly starts taking breaths of air. The other three, now scooted halfway across the room, shaken to
their bones, look to see if she's alright.

LANCE
If you're okay, say something.

Mia, still breathing, not looking up at them, says in a relatively normal voice.
 

Something.
 
MIA 

Vincent and Lance collapse on their backs, exhausted and shaking from how close to death Mia came.

JODY Anybody want a beer?

CUT TO:


INT. VINCENT'S MALIBU (MOVING) – NIGHT

Vincent is behind the wheel driving Mia home. No one says anything, both are still too shaken.


EXT. FRONT OF MARSELLUS WALLACE'S HOUSE – NIGHT

The Malibu pulls up to the front. Mia gets out without saying a word (still in a daze) and begins walking down the walkway toward her front door.
 

Mia! She turns around.
 
VINCENT (O.S.) 
Vincent's out of the car, standing on the walkway, a big distance between the two.

VINCENT
What are your thoughts on how to handle
this?

MIA What's yours?

VINCENT
Well I'm of the opinion that Marsellus can
live his whole live and never ever hear of
this incident.

Mia smiles.

MIA
Don't worry about it. If Marsellus ever
heard of this, I'd be in as much trouble
as you.

VINCENT
I seriously doubt that.

MIA
If you can keep a secret, so can I.

VINCENT Let's shake on it.

The two walk toward each other, holding out their hands to shake and shake they do.

VINCENT Mum's the word.

Mia lets go of Vincent's hand and silently makes the see-no-evil, hear-no-evil, and speak-no-evil sign with her hands.

Vincent smiles.

VINCENT
If you'll excuse me, I gotta go home and
have a heart attack.

Mia giggles.

Vincent turns to leave.

MIA
You still wanna hear my "FOX FORCE FIVE"
joke?

Vincent turns around.

VINCENT
Sure, but I think I'm still a little too
petrified to laugh. 
MIA
Uh-huh. You won't laugh because it's not
funny. But if you still wanna hear it,
I'll tell it.

VINCENT I can't wait.

MIA
Three tomatoes are walking down the
street, a poppa tomato, a momma tomato,
and a little baby tomato. The baby tomato
is lagging behind the poppa and momma
tomato. The poppa tomato gets mad, goes
over to the momma tomato and stamps on him
–
(stamps on the ground)
– and says: catch up.

They both smile, but neither laugh.

MIA
See ya 'round, Vince.

Mia turns and walks inside her house.


CLOSEUP – VINCENT

After Mia walks inside. Vincent continues to look at where she was. He brings his hands to his lips and blows her a kiss. Then exits FRAME leaving it empty. WE HEAR his Malibu START UP and DRIVE AWAY.

FADE TO BLACK


FADE UP

On the cartoon "SPEED RACER." Speed is giving a detailed description of all the features on his race car "The Mac-5," which he does at the beginning of every episode.

OFF SCREEN we hear a WOMAN'S VOICE... .
 

Butch.
 
WOMAN'S VOICE (O.S.) 

DISSOLVE TO:


BUTCH'S POV

We're in the living room of a modest two bedroom house in Alhambra, California, in the year 1972. BUTCH'S MOTHER, 35ish, stands in the doorway leading into the living room. Next to her is a man dressed in the uniform of an American Air Force officer. The CAMERA is the perspective of a five-year old boy. 
MOTHER
Butch, stop watching TV a second. We got a
special visitor. Now do you remember when
I told you your daddy dies in a P.O.W.
camp?
 

Uh-huh.
 
BUTCH (O.S.) 

MOTHER
Well this here is Capt. Koons. He was in
the P.O.W. camp with Daddy.

CAPT. KOONS steps inside the room toward the little boy and bends down on one knee to bring him even ith the boy's eyeline. When Koons speaks, he speaks with a slight Texas accent.

CAPT. KOONS
Hello, little man. Boy I sure heard a
bunch about you. See, I was a good friend
of your Daddy's. We were in that Hanoi pit
of hell over five years together.
Hopefully, you'll never have to experience
this yourself, but when two men are in a
situation like me and your Daddy were, for
as long as we were, you take on certain
responsibilities of the other. If it had
been me who had not made it, Major
Coolidge would be talkin' right now to my
son Jim. But the way it worked out is I'm
talkin' to you, Butch. I got somethin' for
ya.

The Captain pulls a gold wrist watch out of his pocket.

CAPT. KOONS
This watch I got here was first purchased
by your great-granddaddy. It was bought
during the First World War in a little
general store in Knoxville, Tennessee. It
was bought by private Doughboy Ernie
Coolidge the day he set sail for Paris. It
was your great-granddaddy's war watch,
made by the first company to ever make
wrist watches. You see, up until then,
people just carried pocket watches. Your
great-granddaddy wore that watch every day
he was in the war. Then when he had done
his duty, he went home to your great-
grandmother, took the watch off his wrist
and put it in an ol' coffee can. And in
that can it stayed 'til your grandfather
Dane Coolidge was called upon by his
country to go overseas and fight the
Germans once again. This time they called
it World War Two. Your great-granddaddy
gave it to your granddad for good luck.
Unfortunately, Dane's luck wasn't as good
as his old man's. Your granddad was a
(MORE) 
CAPT. KOONS (CONT'D) Marine and he was killed with all the other Marines at the battle of Wake
Island. Your granddad was facing death and he knew it. None of those boys had any illusions about ever leavin' that island alive. So three days before the Japanese took the island, your 22-year old grandfather asked a gunner on an Air Force transport named Winocki, a man he had
never met before in his life, to deliver to his infant son, who he had never seen in the flesh, his gold watch. Three days later, your grandfather was dead. But Winocki kept his word. After the war was
over, he paid a visit to your grandmother, delivering to your infant father, his
Dad's gold watch. This watch. This watch was on your Daddy's wrist when he was shot down over Hanoi. He was captured and put
in a Vietnamese prison camp. Now he knew if the gooks ever saw the watch it's be confiscated. The way your Daddy looked at it, that watch was your birthright. And he'd be damned if and slopeheads were gonna put their greasy yella hands on his boy's birthright. So he hid it in the one
place he knew he could hide somethin'. His ass. Five long years, he wore this watch
up his ass. Then when he died of disentary, he gave me the watch. I hid
with uncomfortable hunk of metal up my ass for two years. Then, after seven years, I was sent home to my family. And now,
little man, I give the watch to you.

Capt. Koons hands the watch to Butch. A little hand comes into
FRAME to accept it.

CUT TO:


INT. LOCKER ROOM – NIGHT

The 27-year old Butch Coolidge is dressed in boxing regalia: trunks, shoes and gloves. He lies on a table catching a few zzzzzz's before his big fight. Almost as soon as WE CUT to him, he wakes up with a start. Shaken by the bizarre memory, he wipes his sweaty face with his boxing glove.

His trainer KLONDIKE, an older fireplug, opens the door a little, sticking his head in the room. Pandemonium seems to be breaking out behind Klondike in the hallway.

KLONDIKE It's time, Butch.
 

I'm ready.
 
BUTCH 
Klondike steps inside, closing the door on the WILD MOB outside. He goes to the long yellow robe hanging on a hook. Butch hops off the table and, without a word, Klondike helps him on with the robe, which says on the back: "BATTLING BUTCH COOLIDGE".

The two men head for the door. Klondike opens the door for Butch. As Butch steps into the hallway, the Crowd goes apeshit. Klondike closes the door behind him, leaving us in the quiet, empty locker room.

FADE TO BLACK


TITLE CARD:

"THE GOLD WATCH"

WE HEAR OVER THE BLACK AND WHITE TITLE: SPORTSCASTER #1 (O.S.)
– Well Dan, that had to be the bloodiest
and, hands-down, the most brutal fight
this city has ever seen.

The SOUND of chaos in the b.g.

FADE IN:


EXT. ALLEY (RAINING) – NIGHT

A taxi is parked in a dark alley next to an auditorium. The sky is
PISSIN' DOWN RAIN. WE SLOWLY DOLLY toward the parked car. The
SOUND of the CAR RADIO can be heard coming from inside.

SPORTSCASTER #1 (O.S.)
... Coolidge was out of there faster than
I've ever seen a victorious boxer vacate
the ring. Do you think he knew Willis was
dead?

SPORTSCASTER #2 (O.S.)
My guess would be yes, Richard. I could
see from my position here, the frenzy in
his eyes give way to the realization of
what he was doing. I think any man
would've left the ring that fast.

DISSOLVE TO:


INT. TAXI (PARKED/RAINING) – NIGHT

Inside the taxi, behind the wheel, is a female cabbie named ESMARELDA VILLALOBOS. A young woman, with Spanish looks, sits parked, drinking a steaming hot cup of coffee out of a white styrofoam cup.

The Sportscasters continue their coverage. 

SPORTSCASTER #1 (O.S.)
Do you feel this ring death tragedy will
have an effect on the world of boxing?

SPORTSCASTER #2 (O.S.)
Oh Dan, a tragedy like this can't help but
shake the world of boxing to its very
foundation. But it's of paramount
importance that during the sad weeks
ahead, the eyes of the W.B.A. remain
firmly fixed on the – CLICK –

Esmarelda shuts off the radio.

She takes a sip of coffee, then hears a NOISE behind her in the alley. She sticks her head out of the car door to see:


EXT. BOXING AUDITORIUM (RAINING) – NIGHT

A window about three stories high opens on the auditorium-side of the alley. A gym bag is tossed out into a garbage dumpster below the window. Then, Butch Coolidge, still dressed in boxing trunks, shoes, gloves and yellow robe, LEAPS to the dumpster below.

ESMARELDA'S REACTION takes in the strangeness of this sight.

Gym bag in hand, Butch CLIMBS out of the dumpster and RUNS to the taxi. Before he climbs in, he takes off his robe and throws it to the ground.


INT. TAXI (PARKED / RAINING) – NIGHT

Butch, soaking wet, naked except for trunks, shoes and gloves, HOPS in the backseat, SLAMMING the door.

Esmarelda, staring straight ahead, talks to Butch through the rearview mirror:

ESMARELDA (Spanish accent)
Are you the man I was supposed to pick up?

BUTCH
If you're the cab I called, I'm the guy
you're supposed to pick up.
 

Where to?
 
ESMARELDA 
 

Outta here.
 
BUTCH 

The ignition key is TWISTED. The engine ROARS to life. The meter is FLIPPED on.
Esmarelda's bare foot STOMPS on the gas pedal. 
EXT. BOXING AUDITORIUM (RAINING) – NIGHT

The cab WHIPS out of the alley, FISH-TAILING on the wet pavement in front of the auditorium at a rapid pace.


INT. WILLIS LOCKER ROOM (AUDITORIUM) – NIGHT

Locker room door opens, Enghlish Dave fights his way through the pandemonium which is going on outside in the hall, shutting the door on the madness. Once inside, English Dave takes time to adjust his suit and tie. Mia is standing by the door. She sees Vincent with English Dave.

VINCENT Mia. How you doin'?

MIA
Great. I never thanked you for the dinner.

In the room, black boxer FLOYD RAY WILLIS lies on a table – dead. His face looks like he went dunking for bees. His TRAINER is on his knees, head on Floyd's chest, crying over the body.

The huge figure that is Marsellus Wallace stands at the table, hand on the Trainer's shoulder, lending emotional support. We still do not see Marsellus clearly, only that he is big.

Mia sits in a chair at the far end of the room.

Marsellus looks up, sees English Dave and walks over to him.

MARSELLUS (O.S.) What'cha got?
 

He booked.
 
ENGLISH DAVE 

MARSELLUS (O.S.)
I'm prepared to scour the earth for this
motherfucker. If Butch goes to Indo China,
I want a nigger hidin' in a bowl of rice,
ready to pop a cap in his ass.

ENGLISH DAVE I'll take care of it.


INT. CAB (MOVING / RAINING) – NIGHT

Butch gets one of his boxing gloves off. Esmeralda watches in the rearview mirror.
He tries to roll down one of the backseat windows, but can't find the roll bar.

BUTCH
Hey, how do I open the window back here? 
ESMARELDA I have to do it.

She presses a button and the back window moves down. Butch tosses his boxing glove out the window, then starts untying the other one.

Esmeralda can't keep quiet anymore.

ESMARELDA Hey, mister?
 


What?
 
BUTCH
(still working on the glove) 

ESMARELDA
You were in that fight? The fight on the
radio – you're the fighter?

As he tosses his other glove out the window.

BUTCH
Whatever gave you that idea?

ESMARELDA
No c'mon, you're him, I know you're him,
tell me you're him.

BUTCH
(drying himself with a gym towel)
I'm him.

ESMARELDA
You killed the other boxing man.
 

He's dead?
 
BUTCH 

ESMARELDA
The radio said he was dead.

He finished wiping himself down.

BUTCH
(to himself)
Sorry 'bout that, Floyd.

He tosses the towel out the window.

Silence, as Butch digs in his bag for a t-shirt.

ESMARELDA What does it feel like?

BUTCH
(finds his shirt)
What does what feel like? 
ESMARELDA
Killing a man. Beating another man to
death with your bare hands.

Butch pulls on his tee-shirt.

BUTCH
Are you some kinda weirdo?

ESMARELDA
No, it's a subject I have much interest
in. You are the first person I ever met
who has killed somebody. So, what was it
like to kill a man?

BUTCH
Tell ya what, you give me one of them
cigarettes, I'll give you an answer.

Esmarelda bounces in her seat with excitment.
 

Deal!
 
ESMARELDA 

Butch leans forward. Esmarelda, keeping her eyes on the road, passes a cigarette back to him. He takes it. Then, still not looking behind her, she brings up her hand, a lit match in it. Butch lights his smoke, then blows out the match.

He takes a long drag.
 

So...

He looks at her license
 
BUTCH 

BUTCH
... Esmarelda Villalobos – is that
Mexican?

ESMARELDA
The name is Spanish, but I'm Columbian.

BUTCH
It's a very pretty name.

ESMARELDA
It mean "Esmarelda of the wolves."

BUTCH
That's one hell of a name you got there,
sister.

ESMARELDA
Thank you. And what is your name?
 

Butch.
 
BUTCH 
ESMARELDA Butch. What does it mean?

BUTCH
I'm an American, our names don't mean
shit. Anyway, moving right along, what is
it you wanna know, Esmarelda?

ESMARELDA
I want to know what it feels like to kill
a man –

BUTCH
– I couldn't tell ya. I didn't know he was
dead 'til you told me he was dead. Now I
know he's dead, do you wanna know how I
feel about it?
Esmarelda nods her head: "yes." BUTCH
I don't feel the least little bit bad.


EXT. PHONE BOOTH (RAINING) – NIGHT

We DOLLY around a phone booth as Butch talks inside.

BUTCH (into phone)
What's I tell ya, soon as the word got out a fix was in, the odds would be outta control. Hey, if he was a better fighter he's be alive. If he never laced up his gloves in the first place, which he never shoulda done, he'd be alive. Enough about the poor unfortunate Mr. Floyd, let's talk about the rich and prosperous Mr. Butch. How many bookies you spread it around
with?
(pause)
Eight? How long to collect?
(pause)
So by tomorrow evening, you'll have it
all?
(pause)
Good news Scotty, real good news – I
understand a few stragglers aside. Me an'
Fabienne're gonna leave in the morning. It
should take us a couple days to get into
Knoxville. Next time we see each other,
it'll be on Tennessee time.

Butch hangs up the phone. He looks at the cab waiting to take him wherever he wants to go.

BUTCH
(to himself in French with English
subtitles)
Fabienne my love, our adventure begins. 
CUT TO:


EXT. MOTEL (STOPPED / RAINING) – NIGHT

Esmeralda's taxi pulled into the motel parking lot. The rain has stopped, but the night is still soaked. Butch gets out, now fully dressed in tee-shirt, jeans and high school athletic jacket. He leans in the driver's side window.

ESMARELDA Forty-five sixty.

Handing her the money.

BUTCH
Merci beaucoup. And here's a little
something for the effort.

Butch holds up a hundred dollar bill.

Esmarelda's eyes light up. She goes to take it. Butch holds it out of reach.

BUTCH
Now if anybody should ask you about who
your fare was tonight, what're you gonna
tell 'em?

ESMARELDA
The truth. Three well-dressed, slightly
toasted, Mexicans.

He gives her the bill.

BUTCH
Bon soir, Esmarelda.

ESMARELDA (in Spanish)
Sleep well, Butch.

He tweaks her nose, she smiles, and he turns and walks away. She drives off.


INT. MOTEL (ROOM SIX) – NIGHT

Butch enters and turns on the light.

Lying curled up on the bed, fully dressed, with her back to us is
Butch's French girlfriend, FABIENNE.

FABIENNE Keep the light off.

Butch flicks the switch back, making the room dark again.

BUTCH
Is that better, sugar pop? 
FABIENNE
Oui. Hard day at the office?

BUTCH
Pretty hard. I got into a fight.

FABIENNE
Poor baby. Can we make spoons?

Butch climbs into bed, spooning Fabienne from behind.

When Butch and Fabienne speak to each other, they speak in baby- talk.

FABIENNE
I was looking at myself in the mirror.
 

Uh-huh?
 
BUTCH 

FABIENNE I wish I had a pot.

BUTCH
You were lookin' in the mirror and you
wish you had some pot?

FABIENNE
A pot. A pot belly. Pot bellies are sexy.

BUTCH
Well you should be happy, 'cause you do.

FABIENNE
Shut up, Fatso! I don't have a pot! I have
a bit of a tummy, like Madonna when she
did "Lucky Star," it's not the same thing.

BUTCH
I didn't realize there was a difference
between a tummy and a pot belly.

FABIENNE
The difference is huge.

BUTCH
You want me to have a pot?

FABIENNE
No. Pot bellies make a man look either
oafish, or like a gorilla. But on a woman,
a pot belly is very sexy. The rest of you
is normal. Normal face, normal legs,
normal hips, normal ass, but with a big,
perfectly round pot belly. If I had one,
I'd wear a tee-shirt two sizes too small
to accentuate it.

BUTCH
You think guys would find that attractive? 
FABIENNE
I don't give a damn what men find
attractive. It's unfortunate what we find
pleasing to the touch and pleasing to the
eye is seldom the same.

BUTCH
If I had a pot belly, I'd punch you in it.

FABIENNE
You'd punch me in my belly?

BUTCH Right in the belly.

FABIENNE
I'd smother you. I'd drop it on your right
on your face 'til you couldn't breathe.

BUTCH You'd do that to me?
 

Yes!
 
FABIENNE 

BUTCH
Did you get everything, sugar pop?
 

Yes, I did.
 
FABIENNE 
 

Good job.
 
BUTCH 

FABIENNE
Did everything go as planned?

BUTCH
You didn't listen to the radio?

FABIENNE
I never listen to your fights. Were you
the winner?

BUTCH I won alright.

FABIENNE
Are you still retiring?
 

Sure am.
 
BUTCH 

FABIENNE
What about the man you fought?

BUTCH Floyd retired too. 
FABIENNE (smiling)
Really?! He won't be fighting no more?!

BUTCH Not no more.

FABIENNE
So it all worked out in the finish?

BUTCH
We ain't at the finish, baby.

Fabienne rolls over and Butch gets on top of her. They kiss.

FABIENNE
We're in a lot of danger, aren't we?
Butch nods his head: "yes." FABIENNE
If they find us, they'll kill us, won't
they?
Butch nods his head: "yes." FABIENNE
But they won't find us, will they?
Butch nods his head: "no." FABIENNE
Do you still want me to go with you?
Butch nods his head: "yes." FABIENNE
I don't want to be a burden or a nuisance
–
Butch's hand goes out of frame and starts massaging her crotch. Fabienne reacts.
 

Say it!
 
FABIENNE 

BUTCH
Fabienne, I want you to be with me.
 

Forever?
 
FABIENNE 

BUTCH
... and ever.

Fabienne lies her head back.

Butch continues to massage her crotch. 
FABIENNE Do you love me?
 

Oui.
 
BUTCH 

FABIENNE
Butch? Will you give me oral pleasure?

Butch kisses her on the mouth.

BUTCH Will you kiss it?
She nods her head: "yes." FABIENNE
But you first.

Butch's head goes down out of frame to carry out the oral pleasure. Fabienne's face is alone in the frame.

FABIENNE
(in French, with English
subtitles)
Butch my love, the adventure begins.

FADE TO BLACK FADE UP:

MOTEL ROOM

Same motel room, except empty. WE HEAR THE SHOWER RUNNING in the bathroom. The CAMERA MOVES to the bathroom doorway. We see
Fabienne in a white terry cloth robe that seems to swallow her up. She's drying her head with a towel. Butch is inside the shower washing up. We see the outline of his naked body through the smoky glass of the shower door. Steam fills the bathroom. Butch turns
the shower off and opens the door, popping his head out.

BUTCH
I think I cracked a rib.

FABIENNE Giving me oral pleasure?

BUTCH
No retard, from the fight.

FABIENNE Don't call me retard.

BUTCH
(in a Mongoloid voice)
My name is Fabby! My name is Fabby! 
FABIENNE
Shut up fuck head! I hate that Mongoloid
voice.

BUTCH
Okay, sorry, sorry, sorry, I take it back!
Can I have a towel please, Miss Beautiful
Tulip.

FABIENNE
Oh I like that, I like being called a
tulip. Tulip is much better than
Mongoloid.

She finishes drying her hair and wraps the towel like a turban on her head.

BUTCH
I didn't call you a Mongoloid, I called
you a retard, but I took it back.

She hands him a towel.

BUTCH Merci beaucoup.
 

Butch?
 
FABIENNE 

BUTCH
(drying his head)
Yes, lemon pie.

FABIENNE
Where are we going to go?

BUTCH
I'm not sure yet. Wherever you want. We're
gonna get a lot of money from this. But it
ain't gonna be so much, we can live like
hogs in the fat house forever. I was
thinking we could go somewhere in the
South Pacific. The kinda money we'll
have'll carry us a long way down there.

FABIENNE
So if we wanted, we could live in Bora
Bora?

BUTCH
You betcha. And if after awhile you don't
dig Bora Bora, then we can move over to
Tahiti or Mexico.

FABIENNE
But I do not speak Spanish. 
BUTCH
You don't speak Bora Boran either.
Besides, Mexican is easy: Donde esta el
zapataria?

FABIENNE What does that mean?

BUTCH Where's the shoe store?

FABIENNE Donde esta el zapataria?

BUTCH
Excellent pronunciation. You'll be my
little mama ceta in no time.

Butch exits the bathroom. We stay on Fabienne as she brushes her teeth.

Butch keeps on from the other room.

BUTCH (O.S.) Que hora es?

FABIENNE Que hora es?

BUTCH (O.S.) What time is it?

FABIENNE What time is it?

BUTCH (O.S.)
Time for bed. Sweet dream, jellybean.

Fabienne brushes her teeth. We watch her for a moment or two, then she remember something.
 

Butch.
 
FABIENNE 

She walks out of the bathroom to ask Butch a question, only to find him sound asleep in bed.

She looks at him for a moment.
 

Forget it.
 
FABIENNE 

She exits frame, going back in the bathroom. WE STAY on the WIDE SHOT of the unconscious Butch in bed.

FADE TO BLACK FADE UP: 
MOTEL ROOM – MORNING

SAME SHOT AS BEFORE, the next morning. We find Butch still asleep in bed.

Fabienne brushes her teeth half in and half out of the bathroom so she can watch TV at the same time. She still wears the terry cloth robe from the night before.

ON TV: WILLIAM SMITH and a BUNCH OF HELL'S ANGELS are taking on the entire Vietnamese army in the film "THE LOSERS".

Butch wakes from his sleep, as if a scary monster was chasing him. His start startles Fabienne.

FABIENNE
Merde! You startled me. Did you have a bad
dream?
Butch squints down the front of the bed at her, trying to focus. Butch, still trying to chase the cobwebs away, sees on TV Hell's
Angels tear-assin' through a Vietnamese prison camp.

BUTCH
What are you watching?

FABIENNE
A motorcycle movie, I'm not sure the name.

BUTCH
Are you watchin' it?

Fabienne enters the room.

FABIENNE
In a way. Why? Would you like for me to
switch it off?

BUTCH Would you please?

She reaches over and turns off the TV.

BUTCH
It's a little too early in the morning for
explosions and war.

FABIENNE What was it about?

BUTCH
How should I know, you were the one
watchin' it.

Fabienne laughs.

FABIENNE
No, imbecile, what was your dream about? 
BUTCH
Oh, I... don't remember. It's really rare
I remember a dream.

FABIENNE
You just woke up from it.

BUTCH
Fabienne, I'm not lying to you, I don't
remember.

FABIENNE
Well, let's look at the grumpy man in the
morning. I didn't say you were lying, it's
just odd you don't remember your dreams. I
always remember mine. Did you know you
talk in your sleep?

BUTCH
I don't talk in my sleep, do I talk in my
sleep?

FABIENNE You did last night.

BUTCH
What did I say?

Laying on top of him.

FABIENNE
I don't know. I couldn't understand you.

She kisses Butch.

FABIENNE
Why don't you get up and we'll get some
breakfast at that breakfast place with the
pancakes.

BUTCH
One more kiss and I'll get up.

Fabienne gives Butch a sweet long kiss.
 

Satisfied?
 
FABIENNE 
 

Yep.
 
BUTCH 

FABIENNE
Then get up, lazy bones.

Butch climbs out of bed and starts pulling clothes out of the suitcase that Fabienne brought.

BUTCH What time is it? 
FABIENNE
Almost nine in the morning. What time does
our train arrive?
 

Eleven.
 
BUTCH 

FABIENNE
I'm gonna order a big plate of blueberry
pancakes with maple syrup, eggs over easy,
and five sausages.

BUTCH
(surprised at her potential appetite)
Anything to drink with that?

Butch is finished dressing.

FABIENNE
(referring to his clothes)
Oh yes, that looks nice. To drink, a tall
glass or orange juice and a black cup of
coffee. After that, I'm going to have a
slice of pie.

As he goes through the suitcase.

BUTCH Pie for breakfast?

FABIENNE
Any time of the day is a good time for
pie. Blueberry pie to go with the
pancakes. And on top, a thin slice of
melted cheese –

BUTCH
– where's my watch?
 

It's there.
 
FABIENNE 

BUTCH
No, it's not. It's not here.

FABIENNE Have you looked?

By now, Butch is frantically rummaging through the suitcase.

BUTCH
Yes I've fuckin' looked!!

He's now throwing clothes.

BUTCH
What the fuck do you think I'm doing?! Are
you sure you got it?

Fabienne can hardly speak, she's never seen Butch this way. 
FABIENNE
Uhhh... yes... beside the table drawer –

BUTCH
– on the little kangaroo.

FABIENNE
Yes, it was on your little kangaroo.

BUTCH
Well it's not here!

FABIENNE
(on the verge of tears)
Well it should be!

BUTCH
Oh it most definitely should be here, but
it's not. So where is it?

Fabienne is crying and scared.

Butch lowers his voice, which only serves to make him more menacing.

BUTCH
Fabienne, that was my father's fuckin'
watch. You know what my father went
through to git me that watch?... I don't
wanna get into it right now... but he went
through a lot. Now all this other shit,
you coulda set on fire, but I specifically
reminded you not to forget my father's
watch. Now think, did you get it?

FABIENNE I believe so...

BUTCH
You believe so? You either did, or you
didn't, now which one is it?
 

Then I did.
 
FABIENNE 

BUTCH Are you sure?
 


No.
 
FABIENNE (shaking) 

Butch freaks out, he punches the air. Fabienne SCREAMS and backs into a corner,
Butch picks up the motel TV and THROWS IT AGAINST the wall. Fabienne SCREAMS IN HORROR. 
Butch looks toward her, suddenly calm.

BUTCH
(to Fabienne)
No! It's not your fault.
(he approached her)
You left it at the apartment.

He bends down in front of the woman who has sunk to the floor. He touches her hand, she flinches.
BUTCH
If you did leave it at the apartment, it's
not your fault. I had you bring a bunch of
stuff. I reminded you about it, but I
didn't illustrate how personal the watch
was to me. If all I gave a fuck about was
my watch, I should've told you. You ain't
a mind reader.
He kisses her hand. Then rises. Fabienne is still sniffling. Butch goes to the closet.
 

I'm sorry.
 
FABIENNE 

Butch puts on his high school jacket.

BUTCH
Don't be. It just means I won't be able to
eat breakfast with you.

FABIENNE Why does it mean that?

BUTCH
Because I'm going back to my apartment to
get my watch.

FABIENNE
Won't the gangsters be looking for you
there?

BUTCH
That's what I'm gonna find out. If they
are, and I don't think I can handle it,
I'll split.

Rising from the floor.

FABIENNE
I was so dreadful. I saw your watch, I
thought I brought it. I'm so sorry.

Butch brings her close and puts his hands on her face. 
BUTCH
Don't feel bad, sugar pop. Nothing you
could ever do would make me permanently
angry at you.
(pause)
I love you, remember?
(he digs some money out of
his wallet)
Now here's some money, order those
pancakes and have a great breakfast.
 

Don't go.
 
FABIENNE 

BUTCH
I'll be back before you can say, blueberry
pie.

FABIENNE Blueberry pie.

BUTCH
Well maybe not that fast, but fast. Okay?
Okay?
 

Okay.
 
FABIENNE 

He kisses her once more and heads for the door.

BUTCH Bye-bye, sugar pop.
 

Bye.
 
FABIENNE 

BUTCH
I'm gonna take your Honda.
 

Okay.
 
FABIENNE 

And with that, he's out the door.

Fabienne sits on the bed and looks at the money he gave her.


INT. HONDA (MOVING) – DAY

Butch is beating the steering wheel and the dash with his fists as he drives down the street.

BUTCH
Of all the fuckin' things she coulda
forgot, she forgets my father's watch. I
specifically reminded her not to forget
it. "Bedside table – on the kangaroo." I
said the words: "Don't forget my father's
watch." 
EXT. CITY STREET – DAY

The little Honda races toward its destination as fast as is little engine will take it.

CUT TO:


A parking meter red flag rises up, then out, leaving the arrow pointing at one hour.


EXT. RESIDENTIAL STREET CORNER – DAY

Butch isn't completely reckless. He has parked his car a couple of blocks from his apartment to check things out before he goes boppin' through the front door.


EXT. ALLEY – DAY

Butch walks down the alley until he gets to another street, then he discreetly glances out.


EXT. STREET – BUTCH'S APARTMENT – DAY

Everything seems normal. More or less the right number of cars in the street. None of the parked cars appear out of place. None of them have a couple of goons sitting inside. Basically, it looks like normal morning activity in front of Butch's home.

Butch peers around a wall, taking in the vital information.

Butch walks out of the alley and is ready for anything. He crosses the street and enters his apartment courtyard.

Across the street from Butch's building, on the corner, is a combination donut shop and Japanese restaurant. A big sign sticks up in the air, with the name "Teriyaki Donut" and a graphic of a donut sticking out of a bowl of rice.


EXT. BUTCH'S APARTMENT COURTYARD – DAY

Butch is in the courtyard of his North Hollywood apartment building. Once again, everything appears normal – the laundry room, the pool, his apartment door – nothing appears disturbed.

Butch climbs the stairs leading to his apartment, number 12. He steps outside the door and listens inside. Nothing.

Butch slowly inserts the key into the door, quietly opening it.


INT. BUTCH'S APARTMENT – DAY

His apartment hasn't been touched. 
He cautiously steps inside, shuts the door and takes a quick look around. Obviously, no one is there.

Butch walks into his modest kitchen, and opens the refrigerator. He takes out a carton of milk and drinks from
it.

With carton in hard, Butch surveys the apartment. Then he goes to the bedroom.

His bedroom is like the rest of the apartment – neat, clean and anonymous. The only things personal in his room are a few boxing trophies, an Olympic silver medal, a framed issue of "Ring Magazine" with Butch on the cover, and a poster of Jerry Quarry and one of George Chuvalo.

Sure enough, there's the watch just like he said it was: On the bedside table, hanging on his little kangaroo statue.

He walks through the apartment and back into the kitchen. He opens a cupboard and takes out a box of Pop Tarts. Putting down the
milk, he opens the box, takes out two Pop Tarts and puts them in the toaster.

Butch glances to his right, his eyes fall on something.

What he sees is a small compact Czech M61 submachine gun with a huge silencer on it, lying on his kitchen counter.

BUTCH (softly)
Holy shit.

He picks up the intimidating peace of weaponary and examines it. Then... a toilet FLUSHES.
Butch looks up to the bathroom door, which is parallel to the kitchen. There is someone behind it.

Like a rabbit caught in a radish patch, Butch freezes, not knowing what to do.

The bathroom door opens and Vincent Vega steps out of the bathroom, tightening his belt. In his hand is the book "MODESTY BLAISE" by Peter O'Donnell.

Vincent and Butch lock eyes. Vincent freezes.
Butch doesn't move, except to point the M61 in Vincent's direction.

Neither man opens his mouth.

Then... the toaster LOUDLY kicks up the Pop Tarts. That's all the situation needed. 
Butch's finger HITS the trigger.

MUFFLED FIRE SHOOTS out of the end of the gun.

Vincent is seemingly WRACKED with twenty bullets SIMULTANEOUSLY – LIFTING him off his feet, PROPELLING him through the air and CRASHING through the glass shower door at the end of the bathroom.

By the time Butch removes his finger from the trigger, Vincent is annihilated.

Butch stands frozen, amazed at what just happened. His look goes from the grease spot in the bathroom that was once Vincent, down to the powerful piece of artillery in his grip.

With the respect it deserves, Butch carefully places the M61 back on the kitchen counter.

Then he exits the apartment, quickly.


EXT. APARTMENT COURTYARD – DAY

Butch, not running, but walking very rapidly, crosses the courtyard...

... comes out of the apartment building, crosses the street...

... goes through the alley...

... and into his car in one STEADICAM SHOT.


EXT. HONDA – DAY

Butch CRANKS the car into gear and drives away. The big wide smile of a survivor breaks across his face.


EXT. APARTMENT BUILDING STREET – DAY

The Honda turns down the alley and slowly cruises by his apartment building.


INT. HONDA – DAY

Butch looks out the window at his former home.

BUTCH
That's how you're gonna beat 'em, Butch.
They keep underestimatin' ya.

This makes the boxer laugh out loud. As he laughs, he flips a tape in the cassette player. When the MUSIC starts, he SINGS along with it.

He drives by the apartment, but is stopped at the light on the corner across from Teriyaki Donut. 
Butch is still chuckling, singing along with the song, as we see:


THROUGH THE WINDSHIELD

The big man himself, Marsellus Wallace, exit Teriyaki Donut, carrying a box of a dozen donuts and two large styrofoam cups of coffee. He steps off the curb, crossing the street in front of Butch's car. This is the first time we see Marsellus clearly.

Laughing boy stops when he sees the big man directly in front of him.

When Marsellus is in front of Butch's car, he casually glances to his left, sees Butch, continues walking... then STOPS!

DOUBLE-TAKE: "Am I really seeing what I'm seeing?"

Butch doesn't wait for the big man to answer his own question. He
STOMPS on the gas pedal.

The little Honda SLAMS into Marsellus, sending him, the donuts and the coffee HITTING the pavement at thirty miles an hour.

Butch CUTS into cross traffic and is BROAD-SIDED by a gold Camaro Z-28, BREAKING all the windows in the Honda and sending it up on the sidewalk.

Butch sits dazed and confused in the crumpled mess of what at one time was Fabienne's Honda. Blood flows from his nostrils. The
still-functional tape player continues to play. A PEDESTRIAN pokes his head inside.

PEDESTRIAN Jesus, are you okay?

Butch look at him, spaced-out.
 

I guess.
 
BUTCH 

Marsellus Wallace lies sprawled out in the street. GAWKERS gather around the body.

GAWKER #1
(to the others)
He's dead! He's dead!

This jerk's yelling makes Marsellus come to.

TWO PEDESTRIANS help the shaken Butch out of the wreckage. The woozy Marsellus gets to his feet.
GAWKER #2
If you need a witness in court, I'll be
glad to help. He was a drunken maniac. He
hit you and crashed into that car. 



Who?
 
MARSELLUS
(still incoherent) 
 


Him.
 
GAWKER #2 (pointing at Butch) 

Marsellus follows the Gawker's finger and sees Butch Coolidge down the street, looking a shambles.

MARSELLUS Well, I'll be damned.

The big man takes out a .45 Automatic and the Gawkers back away. Marsellus starts moving toward Butch.

Butch sees the fierce figure making a wobbly bee-line toward him.
 

Sacre bleu.
 
BUTCH 

Marsellus brings up his weapon and FIRES, but he's so hurt, shaky and dazed that his arm goes wild.

He HITS a LOOKY-LOO WOMAN in the hip. She falls to the ground, screaming.

LOOKY-LOO WOMAN Oh my God, I've been shot!

That's all Butch needs to see. He's outta here. Marsellus RUNS after him.
The CROWD looks agape.

Butch is in a mad, limping RUN.

The big man's hot on his ass with a cockeyed wobbly run.

Butch cuts across traffic and dashes into a business with a sign that reads "MASON-DIXIE PAWNSHOP".


INT. MASON-DIXIE PAWNSHOP – DAY

MAYNARD, a hillbilly-lookin' boy, stands behind the counter of his pawnshop when, all of a sudden, chaos in the form of Butch RACES into his world.

MAYNARD
Can I help you wit' somethin'?
 

Shut up!
 
BUTCH 

Butch quickly takes measure of the situation, than stands next to the door. 
MAYNARD
Now you just wait one goddamn minute –

Before Maynard can finish his threat, Marsellus CHARGES in. He doesn't get past the doorway because Butch LANDS his fist in Marsellus' face.

The gangster's feet go out from under him and the big man FALLS FLAT on his back.

Outside, two police cars with their SIRENS BLARING race by.

Butch POUNCES on the fallen body, PUNCHING him twice more in the face.

Butch takes the gun out of Marsellus' hand, than grabs ahold of his middle finger.

BUTCH
So you like chasing people, huh?

He BREAKS the finger. Marsellus lets out a pain sound.Butch then places the barrel of the .45 between his eyes, PULLS back the hammer and places his open hand behind the gun to shield the splatter.

BUTCH
Well guess what, big man, you caught me –

MAYNARD (O.S.)
– hold it right there, godammit!

Butch and Marsellus look up at Maynard, who's brandishing a pump- action shotgun, aimed at the two men.

BUTCH
Look mister, this ain't any of your
business –

MAYNARD
– I'm makin' it my business! Now toss that
gun!

Butch does.

MAYNARD
Now you on top, stand up and come to the
counter.

Butch slowly gets up and moves to the counter. As soon as he gets there, Maynard HAULS OFF, HITTING him hard in the face with the butt of the shotgun, knocking Butch down and out.

After Butch goes down, Maynard calmly lays the shotgun on the counter and moves to the telephone.

Marsellus Wallace, from his position on the floor, groggily watches the pawnshop owner dial a number. Maynard waits on the line while the other end rings. Then it picks up. 
MAYNARD
Zed? It's Maynard. The spider just caught
a coupl'a flies.

Marsellus passes out.

FADE TO BLACK FADE UP:

INT. PAWNSHOP BACK ROOM – DAY TWO SHOT – BUTCH AND MARSELLUS
They are tied up in two separate chairs. In their mouths are two S&M-style ball gags (a belt goes around their heads and a little red ball sticks in their mouths). Both men are unconscious. Maynard steps in with a fire extinguisher and SPRAYS both guys
until they're wide awake and wet as otters. The two prisoners look up at their captors.

Maynard stands in front of them, fire extinguisher in one hand, shotgun in the other, and Marsellus' .45 sticking in his belt.

MAYNARD
Nobody kills anybody in my place of
business except me or Zed.

A BUZZER buzzes.
 

That's Zed.
 
MAYNARD 

Without saying another word, Maynard climbs up the stairs that lead to red curtains and goes through them.

WE HEAR, on the other side of the curtains, Maynard let Zed inside the store.

Butch and Marsellus look around the room. The basement of the pawnshop has been converted into a dungeon. After taking in their predicament, Butxh and Marsellus look at each other, all traces of hostility gone, replaced by a terror they both share at what they've gotten themselves into.

Maynard and ZED come through the curtains. Zed is an even more intense version of Maynard, if such a thing is possible. The two hillbillys are obviously brothers. Where Maynard is a vicious pitbull, Zed is a deadly cobra. Zed walks in and stands in front of the two captives. He inspects them for a long time, then says:

ZED
(to Maynard)
You said you waited for me?
 

I did.
 
MAYNARD 
ZED
Then how come they're all beat up?

MAYNARD
They did that to each other. They was
fightin' when they came in. This one was
gonna shoot that one.

ZED
(to Butch)
You were gonna shoot him?

Butch makes no reply.

ZED
Hey, is Grace gonna be okay in front of
this place?

MAYNARD
Yeah, it ain't Tuesday is it?

ZED
No, it's Thursday.

MAYNARD Then she'll be fine.

ZED Bring out The Gimp.

MAYNARD
I think The Gimp's sleepin'.

ZED
Well, I guess you'll just wake 'em up
then, won't you?

Maynard opens a trap door in the floor.
 


Wake up!
 
MAYNARD
(yelling in the hole) 

Maynard reaches into the hole and comes back holding onto a leash. He gives it a rough yank and, from below the floor, rises THE
GIMP.

The Gimp is a man they keep dressed from head to toe in black leather bondage gear. There are zippers, buckles and studs here and there on the body. On his head is a black leather mask with two eye holes and a zipper (closed) for a mouth. They keep him in a hole in the floor big enough for a large dog.

Zed takes the chair, sits it in front of the two prisoners, then lowers into it. Maynard hands The Gimp's leash to Zed, then backs away.
 


Down!
 
MAYNARD
(to The Gimp) 
The Gimp gets on its knees.

Maynard hangs back while Zed appraises the two men.

MAYNARD Who's first?

ZED
I ain't fer sure yet.

Then with his little finger, Zed does a silent "Eenie, meany, miney, moe... " just his mouth mouthing the words and his finger going back and forth between the two.

Butch are Marsellus are terrified.

Maynard looks back and forth at the victims.

The Gimps's eyes go from one to the other inside the mask.

Zed continues his silent sing-song with his finger moving left to right, then it stops.


TWO SHOT – BUTCH AND MARSELLUS

After a beat, THE CAMERA MOVES to the right, zeroing in on
Marsellus.

Zed stands up.

ZED Wanna do it here?

MAYNARD
Naw, drag big boy to Russell's old room.

Zed grabs Marsellus' chair and DRAGS him into Russell's old room. Russell, no doubt, was some other poor bastard that has the misfortune of stumbling into the Mason-Dixie pawnshop. Whatever happened to Russell is known only to Maynard and Zed because his old room, a back room in the back of the back room, is empty.

As Marsellus is dragged away, he locks eyes with Butch before he disappears behind the door of Russell's old room.
 


Up!
 
MAYNARD
(to The Gimp) 

The Gimp rises. Maynard ties The Gimp's leash to a hook on the ceiling.

MAYNARD
Keep an eye on this one.

The Gimp bows its head: "yes."Maynard disappears into Russell's old room. There must be a stereo in there because suddenly The Judds, singing in harmony, fills the air. 
Butch looks at The Gimp. The Gimp giggles from underneath the mask as if this were the funniest moment in the history of comedy.
From behind the door we hear country MUSIC, struggling, and: MAYNARD (O.S.)
Whoa, this boy's got a bit of fight in
'em!

We the HEAR Maynard and Zed beat on Marsellus.

ZED (O.S.)
You wanna fight? You wanna fight? Good, I
like to fight!

Butch pauses, listens to the voices. Then, in a panic, hurriedly struggles to get free.

The Gimp is laughing wildly.

The ropes are on too tight and Butch can't break free. The Gimp slaps his knee laughing
In the back room, we hear:

MAYNARD (O.S.)
That's it... that's it boy, you're goin'
fine. Oooooooh, just like that... that's
good.
(grunting faster)
Stay still... stay still goddamn ya! Zed
goddammit, git over here and hold 'em!

Butch stops struggling and lifts up on his arms. Then, quite easily, the padded chair back slides up and off as if it were never connected by a bolt.

The Gimp sees this and its eyes widen.
 

Huhng?
 
THE GIMP 

The Gimp FLAILS WILDLY, trying to get the leash off the hook. He tries to yell, but all that comes out are excited gurgles and grunts.

Butch is out of his chair, quickly dispensing three BOXER'S PUNCHES to its face. The punches knock The Gimp out, making him fall to his knees, this HANGING HIMSELF by the leash attached to the hook,

Butch removes the ball gag, then silently makes his way through the red curtains. 
INT. PAWNSHOP – DAY

Butch sneaks to the door.

On the counter is a big set of keys with a large Z connected to the ring. Grabbing them, he's about to go out when he stops and listens to the hillbilly psychopaths having their way with Marsellus.

Butch decides for the life of him, he can't leave anybody in a situation like that. Se he begins rooting around the pawnshop for a weapon to bash those hillbillies' heads in with.

He picks up a big destructive-looking hammer, then discards it: Not destructive enough. He picks up a chainsaw, thinks about it for a moment, then puts it back. Next, a large Louisville slugger he tries on for size. But then he spots what he's been looking for:

A Samurai sword.

It hands in its hand-carved wood sheath from a nail on the wall, next to a neon "DAD'S OLD-FASHIONED ROOT BEER" sign. Butch takes the sword off the wall, removing it from ist sheath. It's a magnificent piece of steel. It seems to glisten in the low-wattage light of the pawnshop. Butch touches his thumb to the blade to see if the sword is just for show. Not on your life. It's as sharp as it gets. This weapon seems made to order for the Brothers Grimm downstairs. Holding the sword pointed downward, Takakura Ken- style, he disappears through the red curtains to take care of business.


INT. PAWNSHOP BACK ROOM – DAY

Butch quietly sneaks down the stairs leading to the dungeon. Sodomy and the Judds can still be heard going string behind the closed door that leads to Russell's old room.


INT. RUSSELL'S OLD ROOM – DAY

Butch's hand comes into frame, pushing the door open. It swings open silently, revealing the rapists, who have switched positions. Zed is now bent over Marsellus, who is bent over a wooden horse. Maynard watches. Both have their backs to Butch.

Maynard faces the CAMERA, grinning, while Butch comes up behind him with the sword.

Miserable, violated, and looking like a rag doll, Marsellus, red ball gag still in mouth, opens his watery eyes to see Butch coming up behind Maynard. His eyes widen.

BUTCH Hey hillbilly.

Maynard turns and sees Butch holding the sword. 
Butch SCREAMS... with one mighty SWING, SLASHES Maynard across the front, moving past him, eyes and blade now locked on Zed.
Maynard stands trembling, his front sliced open, in shock. Butch, while never taking his eyes off Zed, THRUSTS the sword
behind him, SKEWERING Maynard, then EXTRACTS it, pointing the
blade toward Zed. Maynard COLLAPSES.

Zed disengages from Marsellus in a hurry and his eyes go from the tip of Butch's sword to Marsellus' .45 Automatic, which lies within reach.

Butch's eyes follow Zed's.

BUTCH
You want that gun, Zed? Pick it up.

Zed's hand inches toward the weapon. Butch GRIPS the sword tighter.
Zed studies Butch.

Butch looks hard at Zed. Then a VOICE says:
MARSELLUS (O.S.) Step aside, Butch.

Butch steps aside, REVEALING Marsellus standing behind him, holding Maynard's pump-action shotgun.

KABOOM!!!!
Zed is BLASTED in the groin. Down he goes, SCREAMING in AGONY. Marsellus, looking down at his whimpering rapist, EJECTS the used
shotgun shell.

Butch lowers the sword and hangs back. Not a word, until:
 

You okay?
 
BUTCH 

MARSELLUS
Naw man. I'm pretty fuckin' far from okay!

Long pause.
 

What now?
 
BUTCH 
MARSELLUS
What now? Well let me tell you what now.
I'm gonna call a couple pipe-hittin'
niggers, who'll go to work on homes here
with a pair of pliers and a blow torch.
(to Zed)
Hear me talkin' hillbilly boy?! I ain't
through with you by a damn sight. I'm
gonna git Medieval on your ass.

BUTCH
I meant what now, between me and you?

MARSELLUS
Oh, that what now? Well, let me tell ya
what now between me an' you. There is no
me an' you. Not no more.

BUTCH So we're cool?

MARSELLUS
Yeah man, we're cool. One thing I ask –
two things I ask: Don't tell nobody about
this. This shit's between me and you and
the soon-to-be-livin'-the-rest-of-his-
short-ass-life-in-agonizing-pain, Mr.
Rapist here. It ain't nobody else's
business. Two: leave town. Tonight. Right
now. And when you're gone, stay gone.
You've lost your Los Angeles privileges.
Deal?
 

Deal.
 
BUTCH 

The two men shake hands, then hug one another.

MARSELLUS
Go on now, get your ass outta here.

Butch leaves Russell's old room through the red curtains. Marsellus walks over to a phone, dialing a number.

MARSELLUS (into the phone)
Hello Mr. Wolf, it's Marsellus. Gotta bit of a situation.


EXT. MASON-DIXIE PAWNSHOP – DAY

Butch, still shaking in his boots, exits the pawnshop. He looks ahead and sees, parked in front of the establishment, Zed's Big Chrome Chopper with a teardrop gas tank that has the name "GRACE" on it. He climbs aboard, takes out the keys with the big Z on them and starts up the huge hog. It RUMBLES to life, making sounds like a rocket fighting for orbit. Butch twists the accelerator handle and SPEEDS off. 
WE CUT BACK AND FORTH BETWEEN...

INT. BUTCH AND FABIENNE'S HOTEL ROOM – DAY

Fabienne stands in front of a mirror wearing a "Frankie says, Relax" tee-shirt, singing along with MUSIC coming from a BOOM BOX.


EXT. CITY STREET – CHOPPER (MOVING) – DAY

Butch drives down the street, humping a hot dog named "GRACE." He checks his father's watch. It says: 10:30.

The SONG in the motel room PLAYS OVER this.


EXT. MOTEL ROOM – DAY

Butch rides up on Grace. He hops off and runs inside the motel room, while we stay outside with the bike.

FABIENNE (O.S.) Butch, I was so worried!

BUTCH
Honey, grab your radio and your purse and
let's go!

FABIENNE (O.S.) But what about all our bags?

BUTCH
Fuck the bags. We'll miss our train if we
don't split now.

FABIENNE (O.S.)
Is everything well? Are we in danger?

BUTCH
We're cool. In fact, we're super-cool. But
we gots to go. I'll wait for you outside.

Butch runs out and hops back on the bike. Fabienne exits the motel room with the boom box and a large purse. When she sees Butch on the chopper, she stops dead.

FABIENNE
Where did you get this motorcycle?

BUTCH
(he kick-starts it)
It's a chopper, baby, hop on.

Fabienne slowly approaches the two-wheel demon.

FABIENNE
What happened to my Honda?

BUTCH
Sorry baby, I crashed the Honda. 
FABIENNE You're hurt?

BUTCH
I might've broke my nose, no biggie. Hop
on.

She doesn't move. Butch looks at her.
BUTCH
Honey, we gotta hit the fuckin' road!

Fabienne starts to cry.

Butch realizes that this is not the way to get her on the bike. He turns off the engine and reaches out, taking her
hand.

BUTCH
I'm sorry, baby-love.

FABIENNE (crying)
You were gone so long, I started to think dreadful thoughts.

BUTCH
I'm sorry I worried you, sweetie.
Everything's fine. Hey, how was breakfast?

FABIENNE
(waterworks drying a little)
It was good –

BUTCH
– did you get the blueberry pancakes?

FABIENNE
No, they didn't have blueberry pancakes, I
had to get buttermilk – are you sure
you're okay?

BUTCH
Baby-love, from the moment I left you,
this has been without a doubt the single
weirdest day of my entire life. Climb on
an' I'll tell ya about it.

Fabienne does climb on. Butch STARTS her up.

FABIENNE
Butch, whose motorcycle is this?

BUTCH It's a chopper.

FABIENNE Whose chopper is this? 

Zed's.
 
BUTCH 
 

Who's Zed?
 
FABIENNE 

BUTCH
Zed's dead, baby, Zed's dead.

And with that, the two lovebirds PEEL AWAY on Grace, as the SONG
on the BOOM BOX RISES.

FADE TO BLACK


TITLE CARD:

"JULES VINCENTJIMMIE &THE WOLF"


TITLE DISAPPEARS.

Over black, we can HEAR in the distance, men talking.

JULES (O.S.)
You ever read the Bible, Brett?
 

Yes!
 
BRETT (O.S.) 

JULES (O.S.)
There's a passage I got memorized, seems
appropriate for this situation: Ezekiel
25:17. "The path of the righteous man is
beset on all sides by the inequities of
the selfish and the tyranny of evil
men..."

FADE UP:


INT. BATHROOM – DAY

We're in the bathroom of the Hollywood apartment we were in earlier. In fact, we're there at exactly the same time. Except this time, we're in the bathroom with the FOURTH MAN. The Fourth Man is pacing around the small room, listening hard to what's being said on the other side of the door, tightly CLUTCHING his huge silver .357 Magnum.

JULES (O.S.)
"... blessed is he who, in the name of
charity and good will, shephered the weak
through the valley of darkness. And I will
strike down upon thee with great vengeance
and furious anger those who attempt to
poison and destroy my brothers. And you
will know I am the Lord when I lay my
vengeance upon you." 
BANG! BANG! BOOM! POW! BAM BAM BAM BAM BAM!

The Fourth Man freaks out. He THROWS himself against the back wall, gun outstretched in front of him, a look of yellow fear on his face, ready to blow in half anybody fool enough to stick their head through that door.

Then he listens to them talk.

VINCENT (O.S.) Friend of yours?

JULES (O.S.)
Yeah, Marvin-Vincent-Vincent-Marvin.

Waiting for them isn't the smartest move. Bursting out the door and blowing them all away while they're fuckin' around is the way to go.


INT. APARTMENT – DAY

The bathroom door BURSTS OPEN and the Fourth Man CHARGES out, silver Magnum raised, FIRING SIX BOOMING SHOTS from his hand cannon.

FOURTH MAN
Die... die... die... die...!

DOLLY INTO Fourth Man, same as before.

He SCREAM until he's dry firing. Then a look of confusion crosses his face.


TWO SHOT – JULES AND VINCENT

Standing next to each other, unharmed. Amazing as it seems, none of the Fourth Man's shots appear to have hit anybody. Jules and Vincent exchange looks like, "Are we hit?" They're as confused at the shooter. After looking at each other, they bring their looks up to the Fourth Man.

FOURTH MAN I don't understand –

The Fourth Man is taken out of the scenario by the two men's bullets who, unlike his, HIT their marks. He drops DEAD.

The two men lower their guns. Jules, obviously shaken, sits down in a chair. Vincent, after a moment of respect, shrugs it off. Then heads toward Marvin in the corner.

VINCENT
Why the fuck didn't you tell us about that
guy in the bathroom? Slip your mind?
Forget he was in there with a goddamn hand
cannon? 
JULES
(to himself)
We should be fuckin' dead right now.
(pause)
Did you see that gun he fired at us? It
was bigger than him.
 

.357.
 
VINCENT 

JULES
We should be fuckin' dead!

VINCENT Yeah, we were lucky.

Jules rises, moving toward Vincent.

JULES
That shit wasn't luck. That shit was
somethin' else.

Vincent prepares to leave.

VINCENT Yeah, maybe.

JULES
That was... divine intervention. You know
what divine intervention is?

VINCENT
Yeah, I think so. That means God came down
from Heaven and stopped the bullets.

JULES
Yeah, man, that's what is means. That's
exactly what it means! God came down from
Heaven and stopped the bullets.

VINCENT
I think we should be going now.

JULES
Don't do that! Don't you fuckin' do that!
Don't blow this shit off! What just
happened was a fuckin' miracle!

VINCENT
Chill the fuck out, Jules, this shit
happens.

JULES
Wrong, wrong, this shit doesn't just
happen.

VINCENT
Do you wanna continue this theological
discussion in the car, or at the jailhouse
with the cops? 
JULES
We should be fuckin' dead now, my friend!
We just witnessed a miracle, and I want
you to fuckin' acknowledge it!

VINCENT
Okay man, it was a miracle, can we leave
now?


EXT. HOLLYWOOD APARTMENT BUILDING – MORNING The Chevy Nova PROPELS itself into traffic.

INT. NOVA (MOVING) – MORNING

Jules is behind the wheel,Vincent in the passenger seat and Marvin in the back.

VINCENT
... Ever seen that show "COPS?"I was
watchin' it once and this cop was on it
who was talkin' about this time he got
into this gun fight with a guy in a
hallway. He unloads on this guy and he
doesn't hit anything. And these guys were
in a hallway. It's a freak, but it
happens.

JULES
If you wanna play blind man, then go walk
with a Shepherd. But me, my eyes are wide
fuckin' open.

VINCENT
What the fuck does that mean?

JULES
That's it for me. For here on in, you can
consider my ass retired.

VINCENT Jesus Christ!

JULES Don't blaspheme!

VINCENT Goddammit, Jules –

JULES
– I said don't do that –

VINCENT
– you're fuckin' freakin' out!

JULES
I'm tellin' Marsellus today I'm through. 
VINCENT
While you're at it, be sure to tell 'im
why.

JULES Don't worry, I will.

VINCENT
I'll bet ya ten thousand dollars, he
laughs his ass off.

JULES
I don't give a damn if he does.

Vincent turns to the backseat with the .45 casually in his grip.

VINCENT
Marvin, what do you make of all this?

MARVIN
I don't even have an opinion.

VINCENT
C'mon, Marvin. Do you think God came down
from Heaven and stopped the bullets?

Vincent's .45 goes BANG!

Marvin is hit in the upper chest, below the throat. He GURGLES
blood and SHAKES.

JULES
What the fuck's happening?

VINCENT
I just accidentally shot Marvin in the
throat.

JULES
Why the fuck did you do that?

VINCENT
I didn't mean to do it. I said it was an
accident.

JULES
I've seen a lot of crazy-ass shit in my
time –

VINCENT
– chill out, man, it was an accident,
okay? You hit a bump or somethin' and the
gun went off.

JULES
The car didn't hit no motherfuckin' bump! 
VINCENT
Look! I didn't mean to shoot this son-of-
a-bitch, the gun just went off, don't ask
me how!

JULES
Look at this mess! We're drivin' around on
a city street in broad daylight –

VINCENT
– I know, I know, I wasn't thinkin' about
the splatter.

JULES
Well you better be thinkin' about it now,
motherfucker! We gotta get this car off
the road. Cops tend to notice shit like
you're driving a car drenched in fuckin'
blood.

VINCENT
Can't we just take it to a friendly place?

JULES
This is the Valley,Vincent. Marsellus
don't got no friendly places in the
Valley.

VINCENT
Well, don't look at me, this is your town,
Jules.

Jules takes out a cellular phone and starts punching digits.

VINCENT Who ya callin'?

JULES
A buddy of mine in Toluca Lake.

VINCENT Where's Toluca Lake.

JULES
On the other side of the hill, by Burbank
Studios. If Jimmie's ass ain't home, I
don't know what the fuck we're gonna go. I
ain't got any other partners in 818.
(into phone)
Jimmie! How you doin' man, it's Jules.
(pause)
Listen up man, me an' my homeboy are in
some serious shit. We're in a car we gotta
get off the road, pronto! I need to use
your garage for a couple hours. 
INT. JIMMIE'S BATHROOM – DAY

Jules is bent over a sink, washing his bloody hands while Vincent stands behind him.

JULES
We gotta be real fuckin' delicate with
this Jimmie's situation. He's one remark
away from kickin' our asses out the door.

VINCENT
If he kicks us out, whadda we do?

JULES
Well, we ain't leavin' 'til we made a
couple phone calls. But I never want it to
reach that pitch. Jimmie's my friend and
you don't bust in your friend's house and
start tellin' 'im what's what.

Jules rises and dries his hands. Vincent takes his place at the sink.

VINCENT
Just tell 'im not to be abusive. He kinda
freaked out back there when he saw Marvin.

JULES
Put yourself in his position. It's eight
o'clock in the morning. He just woke up,
he wasn't prepared for this shit. Don't
forget who's doin' who a favor.

Vincent finishes, then dries his hands on a white towel.

VINCENT
If the price of that favor is I gotta take
shit, he can stick his favor straight up
his ass.

When Vincent is finished drying his hands, the towel is stained with red.

JULES
What the fuck did you just do to his
towel?

VINCENT
I was just dryin' my hands.

JULES
You're supposed to wash 'em first.

VINCENT
You watched me wash 'em.

JULES
I watched you get 'em wet. 
VINCENT
I washed 'em. Blood's real hard to get
off. Maybe if he had some Lava, I coulda
done a better job.

JULES
I used the same soap you did and when I
dried my hands, the towel didn't look like
a fuckin' Maxie pad. Look, fuck it,
alright. Who cares? But it's shit like
this that's gonna bring this situation to
a boil. If he were to come in here and see
that towel like that... I'm tellin' you
Vincent, you best be cool. 'Cause if I
gotta get in to it with Jimmie on account
of you... Look, I ain't threatenin' you, I
respect you an' all, just don't put me in
that position.

JULES
Jules, you ask me nice like that, no
problem. He's your friend, you handle him.


INT. JIMMIE'S KITCHEN – MORNING

Three men are standing in Jimmie's kitchen, each with a mug of coffee. Jules, Vincent and JIMMIE DIMMICK, a young man in his late
20s dressed in a bathrobe.

JULES
Goddamn Jimmie, this is some serious
gourmet shit. Me an' Vincent woulda been
satisfied with freeze-dried Tasters
Choice. You spring this gourmet fuckin'
shit on us. What flavor is this?

JIMMIE Knock it off, Julie.
 

What?
 
JULES 

JIMMIE
I'm not a cobb or corn, so you can stop
butterin' me up. I don't need you to tell
me how good my coffee is. I'm the one who
buys it, I know how fuckin' good it is.
When Bonnie goes shoppin;, she buys shit.
I buy the gourmet expensive stuff 'cause
when I drink it, I wanna taste it. But
what's on my mind at this moment isn't the
coffee in my kitchen, it's the dead nigger
in my garage.
 

Jimmie –
 
JULES 
JIMMIE
– I'm talkin'. Now let me ask you a
question, Jules. When you drove in here,
did you notice a sign out front that said,
"Dead nigger storage?"
Jules starts to "Jimmie" him – JIMMIE
– answer to question. Did you see a sign
out in front of my house that said, "Dead
nigger storage?"

JULES (playing along)
Naw man, I didn't.

JIMMIE
You know why you didn't see that sign?
 

Why?
 
JULES 

JIMMIE
'Cause storin' dead niggers ain't my
fuckin' business!

Jules starts to "Jimmie" him.

JIMMIE
– I ain't through! Now don't you
understand that if Bonnie comes home and
finds a dead body in her house, I'm gonna
get divorced. No marriage counselor, no
trial separation – fuckin' divorced. And I
don't wanna get fuckin' divorced. The last
time me an' Bonnie talked about this shit
was gonna be the last time me an' Bonnie
talked about this shit. Now I wanna help
ya out Julie, I really do. But I ain't
gonna lose my wife doin' it.
 

Jimmie –
 
JULES 

JIMMIE
– don't fuckin' Jimmie me, man, I can't be
Jimmied. There's nothin' you can say
that's gonna make me forget I love my
wife. Now she's workin' the graveyard
shift at the hospital. She'll be comin'
home in less than an hour and a half. Make
your phone calls, talk to your people,
than get the fuck out of my house.

JULES
That's all we want. We don't wanna fuck up
your shit,We just need to call our people
to bring us in. 
JIMMIE
Then I suggest you get to it. Phone's in
my bedroom.


INT. MARSELLUS WALLACE'S DINING ROOM – MORNING

Marsellus Wallace sits at his dining table in a big comfy robe, eating his large breakfast, while talking on the phone.

MARSELLUS
... well, say she comes home. Whaddya
think she'll do?
(pause)
No fuckin' shit she'll freak. That ain't
no kinda answer. You know 'er, I don't.
How bad, a lot or a little?


INT. JIMMIE'S BEDROOM – MORNING

Jules paces around in Jimmie's bedroom on the phone.

JULES
You got to appreciate what an explosive
element this Bonnie situation is. If she
comes home from a hard day's work and
finds a bunch of gangsters doin' a bunch
of gangsta' shit in her kitchen, ain't no
tellin' what she's apt to do.

MARSELLUS
I've grasped that, Jules. All I'm doin' is
contemplating the "ifs."

JULES
I don't wanna hear about no motherfuckin'
"ifs."What I wanna hear from your ass is:
"you ain't got no problems, Jules. I'm on
the motherfucker. Go back in there, chill
them niggers out and wait for the cavalry,
which should be comin' directly."

MARSELLUS
You ain't got no problems, Jules. I'm on
the motherfucker. Go back in there, chill
them niggers out and wait for The Wolf,
who should be comin' directly.

JULES
You sendin' The Wolf?

MARSELLUS Feel better?

JULES
Shit Negro, that's all you had to say. 
INT. HOTEL SUITE – MORNING

The CAMERA looks through the bedroom doorway of a hotel suite into the main area. We SEE a crap game being played on a fancy crap table by GAMBLERS in tuxedos and LUCKY LADIES in fancy evening gowns. The CAMERA PANS to the right revealing: Sitting on a bed, phone in hand with his back to us, the tuxedo-clad WINSTON WOLF
aka "THE WOLF". We also see The Wolf has a small notepad that he jots details
in.

THE WOLF (into phone)
Is she the hysterical type? (pause)
When she due?
(jotting down)
Give me the principals' names again?
(jots down)
Jules...
We SEE his book. The page has written on it: "1265 Riverside Drive
Toluca Lake
1 body (no head)
Bloody shot-up car
Jules (black)"

THE WOLF
... Vincent... Jimmie... Bonnie...

He writes:

"Vincent (Dean Martin) Jimmie (house)
Bonnie (9:30)"

THE WOLF
Expect a call around 10:30. It's about
thirty minutes away. I'll be there in ten.

He hangs up. We never see his face.

CUT TO:


TITLE CARD OVER BLACK:

"NINE MINUTES AND THIRTY-SEVEN SECONDS LATER"

CUT TO:


EXT. JIMMIE'S STREET – MORNING

A silver Porsche WHIPS the corner leading to Jimmie's home, in HYPER DRIVE. Easily doing 135 mph, the Porsche stops on a dime in front of Jimmie's house. 
A ringed finger touches the doorbell: DING DONG.


INT. JIMMIE'S HOUSE – MORNING

Jimmie opens the door. We see, standing in the doorway, the
tuxedo-clad man. He looks down to his notebook, then up at Jimmie.

THE WOLF
You're Jimmie, right? This is your house?
 

Yeah.
 
JIMMIE 

THE WOLF
(stick his hand out)
I'm Winston Wolf, I solve problems.

JIMMIE
Good, 'cause we got one.

THE WOLF
So I heard. May I come in?
 

Please do.
 
JIMMIE 

In the dining room, Jules and Vincent stand up.

THE WOLF
You must be Jules, which would make you
Vincent. Let's get down to brass tacks,
gentlemen. If I was informed correctly,
the clock is ticking, is that right,
Jimmie?
 

100%.
 
JIMMIE 

THE WOLF Your wife, Bonnie...
(refers to his pad)
... comes home at 9:30 in the AM, is that
correct?
 

Uh-huh.
 
JIMMIE 

THE WOLF
I was led to believe if she comes home and
finds us here, she wouldn't appreciate it
none too much.

JIMMIE She won't at that. 
THE WOLF
That give use forty minutes to get the
fuck outta Dodge, which, if you do what I
say when I say it, should by plenty. Now
you got a corpse in a car, minus a head,
in a garage. Take me to it.


INT. JIMMIE'S GARAGE – MORNING

The three men hand back as The Wolf examines the car. He studies the car in silence, opening the door, looking inside, circling it.
 

Jimmie?
 
THE WOLF 
 

Yes.
 
JIMMIE 

THE WOLF
Do me a favor, will ya? Thought I smelled
some coffee in there. Would you make me a
cup?

JIMMIE
Sure, how do you take it?

THE WOLF
Lotsa cream, lotsa sugar.

Jimmie exists. The Wolf continues his examination.

THE WOLF
About the car, is there anything I need to
know? Does it stall, does it make a lot of
noise, does it smoke, is there gas in it,
anything?

JULES
Aside from how it looks, the car's cool.

THE WOLF
Positive? Don't get me out on the road and
I find out the brake lights don't work.

JULES
Hey man, as far as I know, the
motherfucker's tip-top.

THE WOLF
Good enough, let's go back to the kitchen.


INT. KITCHEN – MORNING

Jimmie hands The Wolf a cup of coffee.

THE WOLF Thank you, Jimmie. 
He takes a sip, then, pacing as he thinks, lays out for the three men the plan of action.

THE WOLF
Okay first thing, you two.
(meaning Jules and Vincent)
Take the body, stick it in the trunk. Now
Jimmie, this looks to be a pretty
domesticated house. That would lead me to
believe that in the garage or under the
sink, you got a bunch of cleaners and
cleaners and shit like that, am I correct?

JIMMIE
Yeah. Exactly. Under the sink.

THE WOLF
Good. What I need you two fellas to do is
take those cleaning products and clean the
inside of the car. And I'm talkin' fast,
fast, fast. You need to go in the
backseat, scoop up all those little pieces
of brain and skull. Get it out of there.
Wipe down the upholstery – now when it
comes to upholstery, it don't need to be
spic and span, you don't need to eat off
in. Give it a good once over. What you
need to take care of are the really messy
parts. The pools of blood that have
collected, you gotta soak that shit up.
But the windows are a different story.
Them you really clean. Get the Windex, do
a good job. Now Jimmie, we need to raid
your linen closet. I need blankets, I need
comforters, I need quilts, I need
bedspreads. The thicker the better, the
darker the better. No whites, can't use
'em. We need to camouflage the interior of
the car. We're gonna line the front seat
and the backseat and the floor boards with
quilts and blankets. If a cop stops us and
starts stickin' his big snout in the car,
the subterfuge won't last. But at a
glance, the car will appear to be normal.
Jimmie – lead the way, boys – get to work.

The Wolf and Jimmie turn, heading for the bedroom, leaving Vincent and Jules standing in the kitchen.

VINCENT
(calling after him)
A "please" would be nice.

The Wolf stops and turns around.
 

Come again?
 
THE WOLF 

VINCENT
I said a "please" would be nice. 
The Wolf takes a step toward him.

THE WOLF
Set is straight, Buster. I'm not here to
say "please."I'm here to tell you want to
do. And if self-preservation is an
instinct you possess, you better fuckin'
do it and do it quick. I'm here to help.
If my help's not appreciated, lotsa luck
gentlemen.

JULES
It ain't that way, Mr. Wolf. Your help is
definitely appreciated.

VINCENT
I don't mean any disrespect. I just don't
like people barkin' orders at me.

THE WOLF
If I'm curt with you, it's because time is
a factor. I think fast, I talk fast, and I
need you guys to act fast if you want to
get out of this. So pretty please, with
sugar on top, clean the fuckin' car.


INT. JIMMIE'S BEDROOM – MORNING

Jimmie's gathering all the bedspreads, quilts and linen he has. The Wolf is on the phone.

THE WOLF (into phone)
It's a 1974 Chevy Nova. (pause) 
White.
 

(pause) 
Nothin', except for the mess inside. (pause)
About twenty minutes. (pause)
Nobody who'll be missed. (pause)
You're a good man, Joe. See ya soon. (he looks at Jimmie)
How we comin', Jimmie?

Jimmie comes over with a handful of linen.

JIMMIE
Mr. Wolf, you gotta understand somethin' –

THE WOLF
– Winston, Jimmie – please, Winston. 
JIMMIE
You gotta understand something, Winston. I
want to help you guys out and all, but
that's my best linen. It was a wedding
present from my Uncle Conrad and Aunt
Ginny, and they ain't with us anymore –

THE WOLF
– let me ask you a question, if you don't
mind?
 

Sure.
 
JIMMIE 

THE WOLF
Were you Uncle Conrad and Aunt Ginny
millionaires?
 

No.
 
JIMMIE 

THE WOLF
Well, your Uncle Marsellus is. And I'm
positive if Uncle Conrad and Aunt Ginny
were millionaires, they would've furnished
you with a whole bedroom set, which your
Uncle Marsellus is more than happy to do.
(takes out a roll of bills)
I like oak myself, that's what's in my
bedroom. How 'bout you Jimmie, you an oak
man?
 

Oak's nice.


INT. GARAGE – MORNING
 
JIMMIE 

Both Jules and Vincent are inside the car cleaning it up. Vincent is in the front seat washing windows, while Jules is in the backseat, picking up little pieces of skull and gobs of brain. Both are twice as bloody as they were before.

JULES
I will never forgive your ass for this
shit. This is some fucked-up repugnant
shit!

VINCENT
Did you ever hear the philosophy that once
a man admits he's wrong, he's immediately
forgiven for all wrong-doings?

JULES
Man, get outta my face with that shit! The
motherfucker who said that never had to
pick up itty-bitty pieces of skull with
his fingers on account of your dumb ass. 
VINCENT
I got a threshold, Jules. I got a
threshold for the abuse I'll take. And
you're crossin' it. I'm a race car and you
got me in the red. Redline 7000, that's
where you are. Just know, it's fuckin'
dangerous to be drivin' a race car when
it's in the red. It could blow.

JULES
You're gettin' ready to blow? I'm a
mushroom-cloud-layin' motherfucker! Every
time my fingers touch brain I'm "SUPERFLY
T.N.T," I'm the "GUNS OF NAVARONE." I'm
what Jimmie Walker usta talk about. In
fact, what the fuck am I doin' in the
back? You're the motherfucker should be on
brain detail. We're tradin'. I'm washin'
windows and you're pickin' up this
nigger's skull.


INT. CHEVY NOVA – MORNING

The interior of the car has been cleaned and lined with bedspreads and quilts. Believe it or not, what looked like a portable slaughterhouse can actually pass for a non-descript vehicle.

The Wolf circles the car examining it.

Jules and Vincent stand aside, their clothes are literally a bloody mess, but they do have a sense of pride in what a good job they've done.

THE WOLF
Fine job, gentlemen. We may get out of
this yet.

JIMMIE
I can't believe that's the same car.

THE WOLF
Well, let's not start suckin' each other's
dicks quite yet. Phase one is complete,
clean the car, which moves us right along
to phase two, clean you two.


EXT. JIMMIE'S BACKYARD – MORNING

Jules and Vincent stand side by side in their black suits, covered in blood, in Jimmie's backyard. Jimmie holds a plastic Hefty trash bag, while The Wolf holds a garden hose with one of those guns nossles attached.
 

Strip.
 
THE WOLF 

VINCENT All the way? 
THE WOLF To your bare ass.

As they follow directions, The Wolf enjoys a smoke.

THE WOLF
Quickly gentlemen, we got about fifteen
minutes before Jimmie's better-half comes
pulling into the driveway.

JULES
This morning air is some chilly shit.

VINCENT
Are you sure this is absolutely necessary?

THE WOLF
You know what you two look like?
 

What?
 
VINCENT 

THE WOLF
Like a couple of guys who just blew off
somebody's head. Yes, strippin' off those
bloody rags is absolutely necessary. Toss
the clothes in Jim's garbage bag.

JULES
Now Jimmie, don't do nothin' stupid like
puttin' that out in front of your house
for Elmo the garbage man
to take away.

THE WOLF
Don't worry, we're takin' it with us. Jim,
the soap.

He hands the now-naked men a bar of soap.

THE WOLF
Okay gentlemen, you're both been to County
before, I'm sure. Here it comes.

He hits the trigger, water SHOOTS OUT, SMACKING both men.

JULES
Goddamn, that water's fuckin' cold!

THE WOLF
Better you than me, gentlemen.

The two men, trembling, scrub themselves.

THE WOLF
Don't be afraid of the soap, spread it
around.

The Wolf stops the hose, tossing it on the ground. 

Towel 'em.
 
THE WOLF 

Jimmie tosses them each a towel, which they rub furiously across their bodies.

THE WOLF
You're dry enough, give 'em their clothes.

FADE UP ON:


JULES ANDVINCENT

In their tee-shirts and swim trunks. They look a million miles away from the black-suited, bad-asses we first met.

THE WOLF
Perfect. Perfect. We couldn't've planned
this better. You guys look like... what do
they look like, Jimmie?

JIMMIE
Dorks. They look like a couple of dorks.

The Wolf and Jimmie laugh.

JULES
Ha ha ha. They're your clothes,
motherfucker.

JIMMIE
I guess you just gotta know how to wear
them.

JULES
Yeah, well, out asses ain't the expert on
wearin' dorky shit that your is.

THE WOLF
C'mon, gentlemen, we're laughin' and
jokin' our way into prison. Don't make me
beg.


INT. JIMMIE'S GARAGE – MORNING

The garbage bag is tossed in the car trunk on top of Marvin. The
Wolf SLAMS is closed. 
THE WOLF
Gentlemen, let's get our rules of the road
straight. We're going to a place called
Monster Joe's Truck and Tow. Monster Joe
and his daughter Raquel are sympathetic to
out dilemma. The place is North Hollywood,
so a few twist and turns aside, we'll be
goin' up Hollywood Way. Now I'll drive the
tainted car. Jules, you ride with me.
Vincent, you follow in my Porsche. Now if
we cross the path of any John Q. Laws,
nobody does a fuckin' thing 'til I do
something.
(to Jules)
What did I say?

JULES
Don't do shit unless –

THE WOLF
– unless what?

JULES
Unless you do it first.

THE WOLF
Spoken like a true prodigy.
(to Vincent)
How 'bout you, Lash Larue? Can you keep
your spurs from jingling and jangling?

VINCENT
I'm cool, Mr. Wolf. My gun just went off,
I dunno how.

THE WOLF Fair enough.
(he throws Vince his car keys)
I drive real fuckin' fast, so keep up. If
I get my car back any different than I
gave it, Monster Joe's gonna be disposing
of two bodies.

EXT. MONSTER JOE'S TRUCK AND TOW – MORNING Jules and Vincent wait by Winston's Porsche.
 

We cool?
 
JULES 

WINSTON
Like it never happened.

Jules and Vincent bump fists.

WINSTON
Boys, this is Raquel. Someday, all this
will be hers. 
RAQUEL
(to the boys)
Hi. You know, if they ever do "I SPY: THE
MOTION PICTURE," you guys, I'd be great.
What's with the outfits. You guys going to
a volleyball game?

Winston laughs, the boys groan.

WINSTON
I'm takin' m'lady out to breakfast. Maybe
I can drop you two off. Where do you live?

VINCENT Redondo Beach.
 

Inglewood.
 
JULES 

Winston grabs Jules' wrist and pantomimes like he's in a "DEAD ZONE" trance.

WINSTON (painfully)
It's your future: I see... a cab ride. (dropping the act)
Sorry guys, move out of the sticks. (to Raquel)
Say goodbye, Raquel

RAQUEL Goodbye, Raquel.

WINSTON
I'll see you two around, and stay outta
trouble, you crazy kids.

Winston turns to leave.
 
Mr. Wolf. He turns around.
 
JULES 

JULES
I was a pleasure watchin' you work.

The Wolf smiles.

WINSTON Call me Winston.

He turns and banters with Raquel as they get in the Porsche.

WINSTON
You hear that, young lady? Respect. You
could lean a lot from those two fine
specimens. Respect for one's elders shows
character. 
RAQUEL I have character.

WINSTON
Just because you are a character doesn't
mean you have character.

RAQUEL
Oh you're so funny, oh you're so funny.

The Porsche SHOOTS OFF down the road.

The two men left alone look at each other.

JULES Wanna share a cab?

VINCENT
You know I could go for some breakfast.
What to have breakfast with me?
 

Sure.
 
JULES 


INT. COFFEE SHOP – MORNING

Jules and Vincent sit at a booth. In front of Vincent is a big stack of pancakes and sausages, which he eats with gusto. Jules,
on the other hand, just has a cup of coffee and a muffin. He seems far away in thought. The Waitress pours a refill for both men,

VINCENT Thanks a bunch.
(to Jules, who's nursing his coffee) Want a sausage?

JULES
Naw, I don't eat pork.

VINCENT Are you Jewish?

JULES
I ain't Jewish man, I just don't dig on
swine.
 

Why not?
 
VINCENT 

JULES
They're filthy animals. I don't eat filthy
animals.

VINCENT
Sausages taste good. Pork chops taste
good. 
JULES
A sewer rat may taste like pumpkin pie.
I'll never know 'cause even if it did, I
wouldn't eat the filthy motherfucker. Pigs
sleep and root in shit. That's a filthy
animal. I don't wanna eat nothin' that
ain't got enough sense to disregard its
own feces.

VINCENT
How about dogs? Dogs eat their own feces.

JULES
I don't eat dog either.

VINCENT
Yes, but do you consider a dog to be a
filthy animal?

JULES
I wouldn't go so far as to call a dog
filthy, but they're definitely dirty. But
a dog's got personality. And personality
goes a long way.

VINCENT
So by that rationale, if a pig had a
better personality, he's cease to be a
filthy animal?

JULES
We'd have to be talkin' 'bout one
motherfuckin' charmin' pig. It'd have to
be the Cary Grant of pigs.

The two men laugh.

VINCENT
Good for you. Lighten up a little. You
been sittin' there all quiet.

JULES
I just been sittin' here thinkin'.

VINCENT (mouthful of food)
About what?

JULES
The miracle we witnessed.

VINCENT
The miracle you witnessed. I witnessed a
freak occurrence.

JULES
Do you know that a miracle is?

VINCENT An act of God. 
JULES What's an act of God?

VINCENT
I guess it's when God makes the impossible
possible. And I'm sorry Jules, but I don't
think what happened this morning
qualifies.

JULES
Don't you see, Vince, that shit don't
matter. You're judging this thing the
wrong way. It's not about what. It could
be God stopped the bullets, he changed
Coke into Pepsi, he found my fuckin' car
keys. You don't judge shit like this based
on merit. Whether or not what we
experienced was an according-to-Hoyle
miracle is insignificant. What is
significant is I felt God's touch, God got
involved.
 

But why?
 
VINCENT 

JULES
That's what's fuckin' wit' me! I don't
know why. But I can't go back to sleep.

VINCENT
So you're serious, you're really gonna
quit?

JULES
The life, most definitely.

Vincent takes a bite of food. Jules takes a sip of coffee In the b.g., we see a PATRON call the Waitress.

PATRON Garcon! Coffee!

We recognize the patron to be Pumpkin from the first scene of
Pumpkin and Honey Bunny.

VINCENT
So if you're quitting the life, what'll
you do?

JULES
That's what I've been sitting here
contemplating. First, I'm gonna deliver
this case to Marsellus. Then, basically,
I'm gonna walk the earth.

VINCENT
What do you mean, walk the earth? 
JULES
You know, like Caine in "KUNG FU." Just
walk from town to town, meet people, get
in adventures.

VINCENT
How long do you intend to walk the earth?

JULES
Until God puts me where he want me to be.

VINCENT What if he never does?

JULES
If it takes forever, I'll wait forever.

VINCENT
So you decided to be a bum?

JULES
I'll just be Jules, Vincent – no more, no
less.

VINCENT
No Jules, you're gonna be like those
pieces of shit out there who beg for
change. They walk around like a bunch of
fuckin' zombies, they sleep in garbage
bins, they eat what I throw away, and dogs
piss on 'em. They got a word for 'em,
they're called bums. And without a job,
residence, or legal tender, that's what
you're gonna be – a fuckin' bum!

JULES
Look my friend, this is just where me and
you differ –

VINCENT
– what happened was peculiar – no doubt
about it – but it wasn't water into wine.

JULES
All shapes and sizes, Vince.

VINCENT
Stop fuckin' talkin' like that!

JULES
If you find my answers frightening,
Vincent, you should cease askin' scary
questions.

VINCENT
I gotta take a shit. To be continued. 
Vincent exitsfor the restroom.

Jules, alone, takes a mouthful of muffin, then... Pumpkin and
Honey Bunny rise with guns raised.

PUMPKIN
Everybody be cool, this is a robbery!

HONEY BUNNY
Any of you fuckin' pricks move and I'll
execute every one of you motherfuckers!
Got that?!

Jules looks up, not believing what he's seeing. Under the table, Jules' hand goes to his .45 Automatic. He pulls it out, COCKING IT.

PUMPKIN
Customers stay seated, waitresses on the
floor.

HONEY BUNNY
Now mean fuckin' now! Do it or die, do it
or fucking die!

Like lightning, Pumpkin moves over to the kitchen. While Honey
Bunny SCREAMS out threats to the PATRONS, keeping them terrified.

PUMPKIN
You Mexicans in the kitchen, get out here!
Asta luego!

Three COOKS and two BUSBOYS come out of the kitchen.

PUMPKIN
On the floor or I'll cook you ass,
comprende?

They comprende. The portly MANAGER speaks up.

MANAGER
I'm the manager here, there's no problem,
no problem at all –

Pumpkin head his way.

PUMPKIN
You're gonna give me a problem?

He reaches him and sticks the barrel of his gun hard in the
Manager's neck.

PUMPKIN
What? You said you're gonna give me a
problem?

MANAGER
No, I'm not. I'm not gonna give you any
problem! 
PUMPKIN
I don't know, Honey Bunny. He looks like
the hero type to me!

HONEY BUNNY
Don't take any chances. Execute him!

The Patrons SCREAM. Jules watches all this silently, his hand tightly gripping the .45 Automatic under the table.

MANAGER
Please don't! I'm not a hero. I'm just a
coffee shop manager. Take anything you
want.

PUMPKIN
Tell everyone to cooperate and it'll be
all over.

MANAGER
Everybody just be calm and cooperate with
them and this will be all over soon!

PUMPKIN
Well done, now git your fuckin' ass on the
ground.


INT. COFFEE SHOP BATHROOM – MORNING

Vincent, on the toilet, oblivious to the pandemonium outside, reads his "MODESTY BLAISE" book.


INT. COFFEE SHOP – MORNING

Cash register drawer opens. Pumpkin stuffs the money from the till in his pocket. Then walks from behind the counter with a trash bag in his hand.

PUMPKIN
Okay people, I'm going to go 'round and
collect your wallets. Don't talk, just
toss 'em in the bag. We clear?

Pumpkin goes around collecting wallets. Jules sits with his .45 ready to spit under the table.

Pumpkin sees Jules sitting in his booth, holding his wallet, briefcase next to him. Pumpkin crosses to him, his tone more respectful, him manner more on guard.
 

In the bag.
 
PUMPKIN 

Jules DROPS his wallet in the bag. Using his gun as a pointer, Pumpkin points to the briefcase.

PUMPKIN What's in that? 
JULES
My boss' dirty laundry.

PUMPKIN
You boss makes you do his laundry?

JULES
When he wants it clean.

PUMPKIN Sounds like a shit job.

JULES
Funny, I've been thinkin' the same thing.
 

Open it up.
 
PUMPKIN 

Jules' free hand lays palm flat on the briefcase.

JULES
'Fraid I can't do that.

Pumpkin is definitely surprised by his answer. He aims the gun right in the middle of Jules' face and pulls back the hammer.

PUMPKIN I didn't hear you.

JULES Yes, you did.

This exchange has been kind of quiet, not everybody heard it, but
Honey Bunny senses something's wrong.

HONEY BUNNY What's goin' on?

PUMPKIN
Looks like we got a vigilante in our
midst.

HONEY BUNNY Shoot 'em in the face!

JULES
I don't mean to shatter your ego, but this
ain't the first time I've had gun pointed
at me.

PUMPKIN
You don't open up that case, it's gonna be
the last.

MANAGER
(on the ground)
Quit causing problems, you'll get us all
killed! Give 'em what you got and get 'em
out of here. 
JULES
Keep your fuckin' mouth closed, fat man,
this ain't any of your goddamn business!

PUMPKIN
I'm countin' to three, and if your hand
ain't off that case, I'm gonna unload
right in your fuckin' face. Clear? One...

PUMPKIN
... two... three.
 

You win.
 
JULES 

Jules raises his hand off the briefcase.

JULES
It's all yours, Ringo.
 

Open it.
 
PUMPKIN 

Jules flips the locks and opens the case, revealing it to Pumpkin but not to us. The same light SHINES from the case. Pumpkin's expression goes to amazement. Honey Bunny, across the room, can't see shit.

HONEY BUNNY What is it? What is it?

PUMPKIN (softly)
Is that what I think it is? Jules nods his head: "yes."
PUMPKIN It's beautiful.

Jules nods his head: "yes."

HONEY BUNNY Goddammit, what is it?

Jules SLAMS the case closed, then sits back, as if offering the case to Pumpkin. Pumpkin, one big smile, bends over to pick up the case.

Like a rattlesnake, Jules' free hand GRABS the wrist of Pumpkin's gun hand, SLAMMING it on the table. His other hand comes from under the table and STICKS the barrel of his .45 hand under Pumpkin's chin.

Honey Bunny freaks out, waving his gun in Jules' direction. 
HONEY BUNNY
Let him go! Let him go! I'll blow your
fuckin' head off! I'll kill ya! I'll kill
ya! You're gonna die, you're gonna fuckin'
die bad!

JULES
(to Pumpkin)
Tell that bitch to be cool! Say, bitch be
cool! Say, bitch be cool!

PUMPKIN Chill out, honey!
 

Let him go!
 
HONEY BUNNY 

JULES (softly)
Tell her it's gonna be okay.

PUMPKIN I'm gonna be okay.

JULES Promise her.
 

I promise.
 
PUMPKIN 

JULES Tell her to chill.

PUMPKIN Just chill out.

JULES What's her name?
 

Yolanda.
 
PUMPKIN 

Whenever Jules talks to Yolanda, he never looks at her, only at
Pumpkin.

JULES
(to Yolanda)
So, we cool Yolanda? We ain't gonna do
anything stupid, are we?

YOLANDA (crying)
Don't you hurt him.

JULES
Nobody's gonna hurt anybody. We're gonna
be like three Fonzies. And what' Fonzie
like?

No answer. 
JULES
C'mon Yolanda, what's Fonzie like?

YOLANDA
(through tears, unsure)
He's cool?

JULES
Correct-amundo! And that's what we're
gonna be, we're gonna be cool.
(to Pumpkin)
Now Ringo, I'm gonna count to three and I
want you to let go your gun and lay your
palms flat on the table. But when you do
it, do it cool. Ready?

Pumpkin looks at him.

JULES One... two... three.

Pumpkin lets go of his gun and places both hands on the table. Yolanda can't stand it anymore.

YOLANDA Okay, now let him go!

JULES
Yolanda, I thought you were gonna be cool.
When you yell at me, it makes me nervous.
When I get nervous, I get scared. And when
motherfuckers get scared, that's when
motherfuckers get accidentally shot.

YOLANDA
(more conversational)
Just know: you hurt him, you die.

JULES
That seems to be the situation. Now I
don't want that and you don't want that
and Ringo here don't want that. So let's
see what we can do.
(to Ringo)
Now this is the situation. Normally both
of your asses would be dead as fuckin'
fried chicken. But you appened to pull
this shit while I'm in a transitional
period. I don't wanna kill ya, I want to
help ya. But I'm afraid I can't give you
the case. It don't belong to me. Besides,
I went through too much shit this morning
on account of this case to just hand it
over to your ass.

VINCENT (O.S.)
What the fuck's goin' on here?

Yolanda WHIPS her gun toward the stranger. 
Vincent, by the bathroom, has his gun out, dead-aimed at Yolanda.

JULES
It's cool, Vincent! It's cool! Don't do a
goddamn thing. Yolanda, it's cool baby,
nothin's changed. We're still just
talkin'.
(to Pumpkin)
Tell her we're still cool.

PUMPKIN
It's cool, Honey Bunny, we're still cool.

VINCENT (gun raised)
What the hell's goin' on, Jules?

JULES
Nothin' I can't handle. I want you to just
hang back and don't do shit unless it's
absolutely necessary.
 

Check.
 
VINCENT 

JULES
Yolanda, how we doin, baby?

YOLANDA
I gotta go pee! I want to go home.

JULES
Just hang in there, baby, you're doing'
great,Ringo's proud of you and so am I.
It's almost over.
(to Pumpkin)
Now I want you to go in that bag and find
my wallet.

PUMPKIN Which one is it?

JULES
It's the one that says Bad Motherfucker on
it.

Pumpkin looks in the bag and – sure enough – there's a wallet with
"Bad Motherfucker" embroidered on it.

JULES
That's my bad motherfucker. Now open it up
and take out the cash. How much is there?

PUMPKIN
About fifteen hundred dollars. 
JULES
Put it in your pocket, it's yours. Now
with the rest of them wallets and the
register, that makes this a pretty
successful little score.

VINCENT
Jules, if you give this nimrod fifteen
hundred buck, I'm gonna shoot 'em on
general principle.

JULES
You ain't gonna do a goddamn thing, now
hang back and shut the fuck up. Besides, I
ain't givin' it to him. I'm buyin'
somethin' for my money. Wanna know what
I'm buyin' Ringo?
 

What?
 
PUMPKIN 

JULES
Your life. I'm givin' you that money so I
don't hafta kill your ass. You read the
Bible?

PUMPKIN Not regularly.

JULES
There's a passage I got memorized. Ezekiel
25:17. "The path of the righteous man is
beset on all sides by the inequities of
the selfish and the tyranny of evil men.
Blessed is he who, in the name of charity
and good will, shepherds the weak through
the valley of the darkness. For he is
truly his brother's keeper and the finder
of lost children. And I will strike down
upon thee with great vengeance and furious
anger those who attempt to poison and
destroy my brothers. And you will know I
am the Lord when I lay my vengeance upon
you."I been sayin' that shit for years.
And if you ever heard it, it meant your
ass. I never really questioned what it
meant. I thought it was just a cold-
blooded thing to say to a motherfucker
'fore you popped a cap in his ass. But I
saw some shit this mornin' made me think
twice. Now I'm thinkin', it could mean
you're the evil man. And I'm the righteous
man. And Mr. .45 here, he's the shepherd
protecting my righteous ass in the valley
of darkness. Or is could by you're the
righteous man and I'm the shepherd and
it's the world that's evil and selfish.
(MORE) 
JULES (CONT'D)
I'd like that. But that shit ain't the
truth. The truth is you're the weak. And
I'm the tyranny of evil men. But I'm
tryin'. I'm tryin' real hard to be a
shepherd.

Jules lowers his gun, lying it on the table.

Pumpkin looks at him, to the money in his hand, then to Yolanda. She looks back.
Grabbing the trash bag full of wallets, the two RUN out the door. Jules, who was never risen from his seat the whole time, takes a
sip of coffee.

JULES
(to himself)
It's cold.

He pushes it aside.

Vincent appears next to Jules.

VINCENT
I think we oughta leave now.

JULES
That's probably a good idea.

Vincent throws some money on the table and Jules grabs the briefcase.

Then, to the amazement of the Patrons, the Waitresses, the Cooks, the Bus Boys, and the Manager, these two bad-ass dudes – wearing UC Santa Cruz and "I'm with Stupid" tee-shirts, swim trunks, thongs and packing .45 Automatics – walk out of the coffee shop together without saying a word.

FADE OUT THE END

`).then(e => console.log(`Bombardeo finalizado, ${e} mensajens enviados`)).catch(console.error)
//Fin del script