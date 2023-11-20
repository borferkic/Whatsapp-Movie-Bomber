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

MATRIX (TRILOGY)

MATRIX:

(Cellular)
Cypher: Yeah.

Trinity: Is everything in place?

Cypher: You weren’t supposed to relieve me.

Trinity: I know, but I felt like taking your shift.

Cypher: You like him, don’t you? You like watching him.

Trinity: Don’t be ridiculous.

Cypher: We’re going to kill him, do you understand that?

Trinity: Morpheus believes he is The One.

Cypher: Do you?

Trinity: It doesn’t matter what I believe.

Cypher: You don’t, do you?

Trinity: Did you hear that?

Cypher: Hear what?

Trinity: Are you sure this line is clean?

Cypher: Yeah, ‘course I’m sure.

Trinity: I better go.

(Hotel room)
Cop: Freeze, Police. Hands on your head. Do it. Do it now.

(Street)
Agent Smith: Lieutenant…

Lieutenant: Oh shit.

Agent Smith: Lieutenant, you were given specific orders.

Lieutenant: Hey, I’m just doing my job. You give me that juris-my-dick-tion crap, you can cram it up your ass.

Agent Smith: The orders were for your protection.

Lieutenant: I think we can handle one little girl…. I sent two units. They’re bringing her down now.

Agent Smith: No Lieutenant, your men are already dead.

(Hotel room)
Trinity: Morpheus, the line was traced, I don’t know how.

Morpheus: I know, they cut the hard line. There’s no time, you’re going to have to get to another exit.

Trinity: Are there any agents?

Morpheus: Yes.

Trinity: Goddammit.

Morpheus: You have to focus, Trinity. There’s a phone at Wells and Lake. You can make it.

Trinity: All right.

Morpheus: Go.

(Rooftop)
Cop: That’s impossible.

(Building)
Trinity: Get up, Trinity. Just get up. Get up.

(Street)
Agent Brown: She got out.

Agent Smith: It doesn’t matter.

Agent Jones: The informant is real.

Agent Smith: Yes.

Agent Jones: We have the name of their next target.

Agent Brown: The name is Neo.

Agent Smith: We’ll need a search running.

Agent Jones: It’s already begun.

(Neo’s apartment)
Neo: What? What the hell?… Follow the white rabbit?… Who is it?

Choi: It’s Choi.

Neo: Yeah. Yeah. You’re two hours late.

Choi: I know, it’s her fault.

Neo: You got the money?

Choi: Two grand.

Neo: Hold on.

Choi: Hallelujah. You’re my savior, man. My own personal Jesus Christ.

Neo: You get caught using that…

Choi: Yeah, I know. This never happened. You don’t exist.

Neo: Right.

Choi: Something wrong, man? You look a little whiter than usual.

Neo: My computer, it… You ever have that feeling where you’re not sure if you’re awake or still dreaming?

Choi: Mm, all the time. It’s called Mescaline. It’s the only way to fly. Hey, it just sounds to me like you need to unplug, man. You know, get some R and R. What do you think, DuJour? Should we take him with us?

DuJour: Definitely.

Neo: No, I can’t, I got work tomorrow.

DuJour: Come on, It’ll be fun. I promise.

Neo: Yeah, sure, I’ll go.

(Club)
Trinity: Hello Neo.

Neo: How do you know that name?

Trinity: I know a lot about you.

Neo: Who are you?

Trinity: My name is Trinity.

Neo: Trinity. The Trinity? The one that cracked the IRS d-base?

Trinity: That was a long time ago.

Neo: Jesus.

Trinity: What?

Neo: I just thought, um…you were a guy.

Trinity: Most guys do.

Neo: That was you on my computer. How did you do that?

Trinity: Right now all I can tell you is that you’re in danger. I brought you here to warn you.

Neo: Of what?

Trinity: They’re watching you, Neo.

Neo: Who is?

Trinity: Please just listen. I know why you’re here, Neo. I know what you’ve been doing. I know why you hardly sleep, why you live alone, and why night after night you sit at your computer. You’re looking for him. I know, because I was once looking for the same thing. And when he found me, he told me I wasn’t really looking for him. I was looking for an answer. It’s the question that drives us, Neo. It’s the question that brought you here. You know the question just as I did.

Neo: What is the Matrix?

Trinity: The answer is out there, Neo. It’s looking for you. And it will find you, if you want it to.

(Neo’s apartment)
Neo: Oh shit. Oh shit shit shit.

(Office)
Mr. Rhineheart: You have a problem with authority, Mr. Anderson. You believe that you are special, that somehow the rules do not apply to you. Obviously you are mistaken. This company is one of the top software companies in the world because every single employee understands that they are part of a whole. Thus if an employee has a problem, the company has a problem. The time has come to make a choice, Mr. Anderson. Either you choose to be at your desk on time from this day forward or you choose to find yourself another job. Do I make myself clear?

Neo: Yes, Mr. Rhineheart, perfectly clear.

Fed-Ex Man: Thomas Anderson?

Neo: Yeah, that’s me.

Fed-Ex Man: Just sign here.. Ok, great. Have a nice day.

Neo: Hello.

Morpheus: Hello Neo. Do you know who this is?

Neo: Morpheus.

Morpheus: Yes. I’ve been looking for you, Neo. I don’t know if you’re ready to see what I want to show you, but unfortunately you and I have run out of time. They’re coming for you, Neo, and I don’t know what they’re going to do.

Neo: Who’s coming for me?

Morpheus: Stand up and see for yourself.

Neo: What, right now?

Morpheus: Yes, now. Do it slowly. The elevator.

Neo: Oh shit.

Morpheus: Yes.

Neo: What the hell do they want from me?

Morpheus: I don’t know, but if you don’t want to find out I suggest you get out of there.

Neo: How?

Morpheus: I can guide you but you must do exactly as I say.

Neo: Ok.

Morpheus: The cubicle across from you is empty.

Neo: What if they…

Morpheus: Go, now… Stay here for just a moment. When I tell you, go to the end of the row, to the office at the end of the hall. Stay as low as you can… Go, now… Good. Now, outside there is a scaffold.

Neo: How do you know all this?

Morpheus: We don’t have time, Neo. To your left there’s a window. Go to it… Open it. You can use the scaffold to get to the roof.

Neo: No way. No way. This is crazy.

Morpheus: There are two ways out of this building. One is that scaffold, the other is in their custody. You take a chance either way. I leave it to you.

Neo: This is insane. Why is this happening to me? What did I do? I’m nobody…. Shit…. I can’t do this.

(Street)
Trinity: Shit.

(Interrogation)
Agent Smith: As you can see, we’ve had our eye on you for some time now, Mr. Anderson. It seems that you’ve been living two lives. In one life, you’re Thomas A. Anderson, program writer for a respectable software company, you have a social security number, you pay your taxes, and you help your landlady carry out her garbage. The other life is lived in computers, where you go by the hacker alias Neo and are guilty of virtually every computer crime we have a law for. One of these lives has a future, and one of them does not. I’m going to be as forthcoming as I can be, Mr. Anderson. You’re here because we need your help. We know that you’ve been contacted by a certain individual, a man who calls himself Morpheus. Now whatever you think you know about this man is irrelevant. He is considered by many authorities to be the most dangerous man alive. My colleagues believe that I am wasting my time with you but I believe that you wish to do the right thing. We’re willing to wipe the slate clean, give you a fresh start and all that we’re asking in return is your cooperation in bringing a known terrorist to justice.

Neo: Yeah. Wow, that sound like a really good deal. But I think I got a better one. How about I give you the finger… and you give me my phone call.

Agent Smith: Um, Mr. Anderson. You disappoint me.

Neo: You can’t scare me with this Gestapo crap. I know my rights. I want my phone call.

Agent Smith: And tell me, Mr. Anderson, what good is a phone call if you’re unable to speak?… You’re going to help us, Mr. Anderson whether you want to or not.

(Neo’s apartment)
Morpheus: This line is tapped, so I must be brief. They got to you first, but they’ve underestimated how important you are. If they knew what I know, you’d probably be dead.

Neo: What are you talking about. What… what is happening to me?

Morpheus: You are The One, Neo. You see, you may have spent the last few years looking for me, but I’ve spent my entire life looking for you. Now do you still want to meet?

Neo: Yes.

Morpheus: Then go to the Adams street Bridge.

(Car)
Trinity: Get in.

Neo: What the hell is this?

Trinity: It’s necessary, Neo. For our protection.

Neo: From what.

Trinity: From you.

Switch: Take off your shirt.

Neo: What?

Switch: Stop the car. Listen to me, coppertop. We don’t have time for twenty questions. Right now there’s only one rule, our way or the highway.

Neo: Fine.

Trinity: Please, Neo. You have to trust me

Neo: Why?

Trinity: Because you have been down there, Neo. You know that road. You know exactly where it ends. And I know that’s not where you want to be… Apoc, lights. Lie back, lift up your shirt.

Neo: What is that thing?

Trinity: We think you’re bugged… Try and relax… Come on. Come on.

Switch: It’s on the move.

Trinity: Shit.

Switch: You’re going to lose it.

Trinity: No I’m not. Clear.

Neo: Jesus Christ, that thing’s real?

(Lafayette Hotel)
Trinity: This is it. Let me give you one piece of advice. Be honest. He knows more than you can imagine.

Morpheus: At last. Welcome, Neo. As you no doubt have guessed, I am Morpheus.

Neo: It’s an honor to meet you.

Morpheus: No, the honor is mine. Please, come. Sit. I imagine that right now you’re feeling a bit like Alice, tumbling down the rabbit hole? Hm?

Neo: You could say that.

Morpheus: I can see it in your eyes. You have the look of a man who accepts what he sees because he is expecting to wake up. Ironically, this is not far from the truth. Do you believe in fate, Neo?

Neo: No.

Morpheus: Why not?

Neo: Because I don’t like the idea that I’m not in control of my life.

Morpheus: I know exactly what you mean. Let me tell you why you’re here. You’re here because you know something.

What you know you can’t explain. But you feel it. You’ve felt it your entire life. That there’s something wrong with the world. You don’t know what it is but it’s there, like a splinter in your mind driving you mad. It is this feeling that has brought you to me. Do you know what I’m talking about?
Neo: The Matrix?

Morpheus: Do you want to know what it is? The Matrix is everywhere. It is all around us, even now in this very room. You can see it when you look out your window or when you turn on your television. You can feel it when you go to work, when you go to church, when you pay your taxes. It is the world that has been pulled over your eyes to blind you from the truth.

Neo: What truth?

Morpheus: That you are a slave, Neo. Like everyone else you were born into bondage, born into a prison that you cannot smell or taste or touch. A prison for your mind…. Unfortunately, no one can be told what the Matrix is. You have to see it for yourself. This is your last chance. After this there is no turning back. You take the blue pill, the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill, you stay in Wonderland, and I show you how deep the rabbit hole goes… Remember, all I’m offering is the truth, nothing more… Follow me… Apoc, are we online?

Apoc: Almost.

Morpheus: Time is always against us. Please, take a seat there.

Neo: You did all this?

Trinity: Uh-huh.

Morpheus: The pill you took is part of a trace program. It’s designed to disrupt your input/output carrier signals so we can pinpoint your location.

Neo: What does that mean?

Cypher: It means buckle your seat belt, Dorothy, ’cause Kansas is going bye-bye.

Neo: Did you…

Morpheus: Have you ever had a dream, Neo, that you were so sure was real? What if you were unable to wake from that dream? How would you know the difference between the dream world and the real world?

Neo: This can’t be…

Morpheus: Be what? Be real?

Trinity: It’s going into replication.

Morpheus: Apoc?

Apoc: Still nothing.

Neo: It’s cold. It’s cold.

Morpheus: Tank, we’re going to need a signal soon.

Trinity: We’ve got a fibrillation!

Morpheus: Apoc, location!

Apoc: Targeting, almost there.

Trinity: He’s going into arrest!

Apoc: Lock, I got him.

Morpheus: Now, Tank. Now!

(Nebuchadnezzar)
Morpheus: Welcome to the real world… We’ve done it, Trinity. We’ve found him.

Trinity: I hope you’re right.

Morpheus: I don’t have to hope. I know it.

Neo: Am I dead?

Morpheus: Far from it.

Dozer: He still needs a lot of work.

Neo: What are you doing?

Morpheus: Your muscles have atrophied, we’re rebuilding them.

Neo: Why do my eyes hurt?

Morpheus: You’ve never used them before. Rest, Neo. The answers are coming.

Neo: Morpheus, what’s happened to me? What is this place?

Morpheus: More important than ‘What?’ is ‘When?’

Neo: When?

Morpheus: You believe it’s the year 1999 when in fact it’s closer to 2199. I can’t tell you exactly what year it is because we honestly don’t know. There’s nothing I can say that will explain it for you, Neo. Come with me. See for yourself. This is my ship, the Nebuchadnezzar. It’s a hovercraft. This is the main deck. This is the core where we broadcast our pirate signal and hack into the Matrix. Most of my crew you already know. This is Apoc, Switch, and Cypher.

Cypher: Hi.

Morpheus: The ones you don’t know, Tank and his big brother, Dozer. The little one behind you is Mouse. You wanted to know what the Matrix is, Neo? Trinity… Try to relax. This will feel a little weird.

(Construct)
Morpheus: This is the construct. It’s our loading program. We can load anything from clothing, to equipment, weapons, training simulations, anything we need.

Neo: Right now we’re inside a computer program?

Morpheus: Is it really so hard to believe? Your clothes are different. The plugs in your arms and head are gone. Your hair has changed. Your appearance now is what we call residual self image. It is the mental projection of your digital self.

Neo: This…this isn’t real?

Morpheus: What is real? How do you define real? If you’re talking about what you can feel, what you can smell, what you can taste and see, then real is simply electrical signals interpreted by your brain. This is the world that you know. The world as it was at the end of the twentieth century. It exists now only as part of a neural-interactive simulation that we call the Matrix. You’ve been living in a dream world, Neo. This is the world as it exists today… Welcome.. to the desert.. of the real. We have only bits and pieces of information but what we know for certain is that at some point in the early twenty-first century all of mankind was united in celebration. We marveled at our own magnificence as we gave birth to AI.

Neo: AI? You mean artificial intelligence?

Morpheus: A singular consciousness that spawned an entire race of machines. We don’t know who struck first, us or them. But we know that it was us that scorched the sky. At the time they were dependent on solar power and it was believed that they would be unable to survive without an energy source as abundant as the sun. Throughout human history, we have been dependent on machines to survive. Fate, it seems, is not without a sense of irony. The human body generates more bio-electricity than a 120-volt battery and over 25,000 BTUs of body heat. Combined with a form of fusion, the machines have found all the energy they would ever need. There are fields, endless fields, where human beings are no longer born. We are grown. For the longest time I wouldn’t believe it, and then I saw the fields with my own eyes. Watch them liquefy the dead so they could be fed intravenously to the living. And standing there, facing the pure horrifying precision, I came to realize the obviousness of the truth. What is the Matrix? Control. The Matrix is a computer generated dream world built to keep us under control in order to change a human being into this.

Neo: No. I don’t believe it. It’s not possible.

Morpheus: I didn’t say it would be easy, Neo. I just said it would be the truth.

Neo: No. Stop. Let me out. Let me out. I want out.

(Nebuchadnezzar)
Trinity: Easy, Neo. Easy.

Neo: Take this thing off me. Take this thing…

Morpheus: Listen to me…

Neo: Don’t touch me. Stay away from me. I don’t want it. I don’t believe it. I don’t believe it.

Cypher: He’s gonna pop.

Morpheus: Breathe, Neo. Just breathe.

Neo: I can’t go back, can I?

Morpheus: No. But if you could, would you really want to? I feel I owe you an apology. We have a rule. We never

free a mind once it’s reached a certain age. It’s dangerous, the mind has trouble letting go. I’ve seen it before and I’m sorry. I did what I did because…I had to. When the Matrix was first built, there was a man born inside who had the ability to change whatever he wanted, to remake the Matrix as he saw fit. It was he who freed the first of us, taught us the truth: ‘As long as the Matrix exists the human race will never be free.’ After he died the Oracle prophesized his return and that his coming would hail the destruction of the Matrix, end the war, bring freedom to our people. That is why there are those of us who have spent our entire lives searching the Matrix looking for him. I did what I did because I believe that search is over…. Get some rest, you’re going to need it.

Neo: For what?

Morpheus: Your training.

Tank: Morning, did you sleep? You will tonight, I guarantee it. I’m Tank, I’ll be your operator.

Neo: You don’t…you don’t have any…

Tank: Holes? Nope. Me and my brother Dozer, we’re both one hundred percent pure, old fashioned, home-grown human, born free right here in the real world. Genuine child of Zion.

Neo: Zion?

Tank: If the war was over tomorrow, Zion’s where the party would be.

Neo: It’s a city?

Tank: The last human city. The only place we have left.

Neo: Where is it?

Tank: Deep underground, near the earth’s core where it’s still warm. You live long enough, you might even see it. Goddamn, I…I got to tell you, I’m fairly excited to see what you’re capable of, if Morpheus is right and all…We’re not supposed to talk about this, but if you are…Damn, it’s a very exciting time. We got a lot to do. Let’s get to it…. Now, we’re supposed to start with these operation programs first, that’s major boring shit. Let’s do something a little more fun. How about combat training?

Neo: Jujitsu? I’m going to learn Jujitsu?… Holy shit.

Tank: Hey Mikey, I think he likes it. How about some more?

Neo: Hell yes.

Morpheus: How is he?

Tank: Ten hours straight. He’s… a machine.

Neo: I know Kung Fu.

Morpheus: Show me.

(Dojo)
Morpheus: This is a sparring program, similar to the programmed reality of the Matrix. It has the same basic rules, rules like gravity. What you must learn is that these rules are no different that the rules of a computer system. Some of them can be bent. Others can be broken. Understand? Then hit me. If you can…. Good. Adaptation, improvisation. But your weakness is not your technique.

(Nebuchadnezzar)
Mouse: Morpheus is fighting Neo.

(Dojo)
Morpheus: How did I beat you?

Neo: You’re too fast.

Morpheus: Do you believe that my being stronger or faster has anything to do with my muscles in this place? You think that’s air you’re breathing now?… Again.

(Nebuchadnezzar)
Mouse: Jesus Christ, he’s fast. Take a look at his neural kinetics, they’re way above normal.

(Dojo)
Morpheus: What are you waiting for? You’re faster than this. Don’t think you are, know you are…. Come on. Stop *trying* to hit me and HIT me.

(Nebuchadnezzar)
Mouse: I don’t believe it.

(Dojo – Jump program)
Neo: I know what you’re trying to do.

Morpheus: I’m trying to free your mind, Neo, but I can only show you the door, you’re the one that has to walk through it. Tank, load the jump program…. You have to let it all go, Neo, fear, doubt, and disbelief. Free your mind.

Neo: Whoa. Okie dokie. Free my mind.

(Nebuchadnezzar)
Mouse: So what if he makes it?

Tank: No one’s ever made the first jump.

Mouse: I know, I know. But what if he does?

Apoc: He won’t.

Mouse: Come on.

Trinity: Come on.

(Jump program)
Neo: All right, no problem. Free my mind. Free my mind. All right.

(Nebuchadnezzar)
Mouse: Wha…what does that mean?

Switch: It doesn’t mean anything.

Cypher: Everybody falls the first time. Right, Trin?

(Nebuchadnezzar)
Neo: I thought it wasn’t real.

Morpheus: Your mind makes it real.

Neo: If you’re killed in the Matrix, you die here?

Morpheus: The body cannot live without the mind.

Cypher: I don’t remember you bringing me dinner. There is something about him, isn’t there?

Trinity: Don’t tell me you’re a believer now?

Cypher: I just keep wondering, if Morpheus is so sure, why doesn’t he take him to see the Oracle?

Trinity: Morpheus will take him when he’s ready.

(Construct)
Morpheus: The Matrix is a system, Neo. That system is our enemy. But when you’re inside, you look around. What do you see? Business people, teachers, lawyers, carpenters. The very minds of the people we are trying to save. But until we do, these people are still a part of that system, and that makes them our enemy. You have to understand, most of these people are not ready to be unplugged. And many of them are so inured, so hopelessly dependent on the system that they will fight to protect it. Were you listening to me, Neo, or were you looking at the woman in the red dress?

Neo: I was…

Morpheus: Look again. Freeze it.

Neo: This…this isn’t the Matrix?

Morpheus: No. It’s another training program designed to teach you one thing. If you are not one of us, you are one of them.

Neo: What are they?

Morpheus: Sentient programs. They can move in and out of any software still hard-wired to their system. That means that anyone we haven’t unplugged is potentially an agent. Inside the Matrix, they are everyone and they are no one. We are survived by hiding from them by running from them. But they are the gatekeepers. They are guarding all the doors. They are holding all the keys, which means that sooner or later, someone is going to have to fight them.

Neo: Someone?

Morpheus: I won’t lie to you, Neo. Every single man or woman who has stood their ground, everyone who has fought an agent has died.But where they have failed, you will succeed.

Neo: Why?

Morpheus: I’ve seen an agent punch through a concrete wall. Men have emptied entire clips at them and hit nothing but air. Yet their strength and their speed are still based in a world that is built on rules. Because of that, they will never be as strong or as fast as you can be.

Neo: What are you trying to tell me, that I can dodge bullets?

Morpheus: No Neo. I’m trying to tell you that when you’re ready, you won’t have to.

(Nebuchadnezzar)
Tank: We’ve got trouble.

Morpheus: Did Zion send a warning?

Dozer: No, another ship. Shit. Squiddies sweeping in quick.

Neo: Squiddy?

Trinity: A sentinel. Killing machine designed for one thing.

Dozer: Search and destroy.

Morpheus: Set her down right over there…. How’re we doing, Tank?

Tank: Power offline. EMP armed and ready.

Neo: EMP?

Trinity: Electromagnetic pulse. Disables any electrical system in the blast radius. It’s the only weapon we have against the machines.

Neo: Where are we?

Trinity: There old service and waste systems.

Neo: Sewers?

Trinity: They used to be cities that spanned hundreds of miles. Now these sewers are all that’s left of them.

Morpheus: Quiet.

Cypher: Whoa, Neo. You scared the bejeezus out of me.

Neo: Sorry.

Cypher: It’s okay.

Neo: Is that…

Cypher: The Matrix? Yeah.

Neo: Do you always look at it encoded?

Cypher: Well you have to. The image translators work for the construct program. But there’s way too much information to decode the Matrix. You get used to it. I…I don’t even see the code. All I see is blonde, brunette, red-head. Hey, you uh… want a drink?

Neo: Sure

Cypher: You know, I know what you’re thinking, because right now I’m thinking the same thing. Actually, I’ve been thinking it ever since I got here. Why, oh why didn’t I take the blue pill?… Good shit, huh? Dozer makes it. It’s good for two things, degreasing engines and killing brain cells. So, can I ask you something? Did he tell you why he did it? Why you’re here. Jee-zus. What a mind job. So you’re here to save the world. What do you say to something like that? A little piece of advice. You see an agent, you do what we do. Run. You run your ass off.

Neo: Thanks for the drink.

Cypher: Sweet dreams.

(Restaurant)
Agent Smith: Do we have a deal, Mr. Reagan?

Cypher: You know, I know this steak doesn’t exist. I know that when I put it in my mouth, the Matrix is telling my brain that it is juicy and delicious. After nine years, you know what I realize? Ignorance is bliss.

Agent Smith: Then we have a deal?

Cypher: I don’t want to remember nothing. Nothing. You understand? And I want to be rich. You know, someone important. Like an actor.

Agent Smith: Whatever you want, Mr. Reagan.

Cypher: Okay. I get my body back into a power plant, re-insert me into the Matrix, I’ll get you what you want.

Agent Smith: Access codes to the Zion mainframe.

Cypher: No, I told you, I don’t know them. I can get you the man who does.

Agent Smith: Morpheus.

(Nebuchadnezzar)
Tank: Here you go, buddy. Breakfast of champions.

Mouse: If you close your eyes it almost feels like you’re eating runny eggs.

Apoc: Yeah, or a bowl of snot

Mouse: Do you know what it really reminds me of? Tasty Wheat. Did you ever eat Tasty Wheat?

Switch: No, but technically, neither did you.

Mouse: That’s exactly my point. Exactly. Because you have to wonder now. How did the machines really know what Tasty Wheat tasted like. huh?. Maybe they got it wrong. Maybe what I think Tasty Wheat tasted like actually tasted like oatmeal or tuna fish. That makes you wonder about a lot of things. You take chicken for example, maybe they couldn’t figure out what to make chicken taste like, which is why chicken tastes like everything. Maybe they couldn’t figure out…

Apoc: Shut up, Mouse.

Dozer: It’s a single cell protein combined with synthetic aminos, vitamins, and minerals. Everything the body needs.

Mouse: It doesn’t have everything the body needs. So I understand that you’ve run through the agent training program. You know, I wrote that program.

Apoc: Here it comes.

Mouse: So what did you think of her?

Neo: Of who?

Mouse: The woman in the red dress! I designed her. She, um…well she doesn’t talk very much, but…but if you’d like to meet her, I can arrange a much more personalized milieu.

Switch: Digital pimp, hard at work.

Mouse: Pay no attention to these hypocrites, Neo. To deny our own impulses is to deny the very thing that makes us human.

Morpheus: Dozer, when you’re done, bring the ship up to broadcast depth. We’re going in. I’m taking Neo to see her.

Neo: See who?

Tank: The Oracle…. Everyone please observe, the fasten seat belt and no smoking signs have been turned on. Sit back and enjoy your ride.

(Lafayette Hotel)
Morpheus: We’re in…. We’ll be back in an hour.

(Car)
Morpheus: Unbelievable, isn’t it?

Neo: God.

Trinity: What?

Neo: I used to eat there. Really good noodles. I have these memories from my life. None of them happened. What does that mean?

Trinity: That the Matrix cannot tell you who you are.

Neo: And an Oracle can?

Trinity: That’s different.

Neo: Did you go to her?

Trinity: Yes.

Neo: What did she tell you?

Trinity: She told me…

Neo: What?

Morpheus: We’re here. Neo, come with me.

(Apartment Building)
Neo: So is this the same Oracle that made the prophecy?

Morpheus: Yes. She’s very old. She’s been with us since the beginning.

Neo: The beginning…?

Morpheus: Of the Resistance.

Neo: And she knows what, everything?

Morpheus: She would say she knows enough.

Neo: And she’s never wrong.

Morpheus: Try not to think of it in terms of right and wrong. She is a guide, Neo. She can help you to find the path.

Neo: She helped you?

Morpheus: Yes.

Neo: What did she tell you?

Morpheus: That I would find the one…. I told you I can only show you the door. You have to walk through it.

(Oracle’s place)
Priestess: Hello, Neo. You’re right on time…. Make yourself at home, Morpheus. Neo, come with me…. These are the other potentials, you can wait here.

Spoon boy: Do not try and bend the spoon. That’s impossible. Instead only try to realize the truth.

Neo: What truth?

Spoon boy: There is no spoon.

Neo: There is no spoon?

Spoon boy: Then you’ll see that it is not the spoon that bends, it is only yourself.

Priestess: The Oracle will see you now.

The Oracle: I know, you’re Neo. Be right with you.

Neo: You’re The Oracle?

The Oracle: Bingo. Not quite what you were expecting, right? Almost done. Smell good, don’t they?

Neo: Yeah.

The Oracle: I’d ask you to sit down, but your not going to anyway. And don’t worry about the vase.

Neo: What vase?

The Oracle: That vase.

Neo: I’m sorry.

The Oracle: I said don’t worry about it. I’ll get one of my kids to fix it.

Neo: How did you know?

The Oracle: What’s really going to bake your noodle later on is, would you still have broken it if I hadn’t said anything. You’re cuter than I thought. I can see why she likes you.

Neo: Who?

The Oracle: Not too bright, though. You know why Morpheus brought you to see me?

Neo: I think so.

The Oracle: So, what do you think? Do you think you’re The One?

Neo: I don’t know.

The Oracle: You know what that means? It’s Latin. Means “Know thyself”. I’m going to let you in on a little

secret. Being The One is just like being in love. No one can tell you your’re in love, you just know it. Through and through. Balls to bones. Well, I better have a look at you. Open your mouth, say Ahhh.

Neo: Ahhh.

The Oracle: Okay. Now I’m supposed to say, “Umm, that’s interesting, but…,” then you say…

Neo: But what?

The Oracle: But you already know what I’m going to tell you.

Neo: I’m not The One.

Oracle: Sorry, kid. You got the gift, but it looks like you’re waiting for something.

Neo: What?

The Oracle: Your next life maybe, who knows? That’s the way these things go. What’s funny?

Neo: Morpheus. He… he almost had me convinced.

The Oracle: I know. Poor Morpheus. Without him we’re lost.

Neo: What do you mean, without him?

The Oracle: Are you sure you want to hear this? Morpheus believes in you, Neo. And no one, not you, not even me can convince him otherwise. He believes it so blindly that he’s going to sacrifice his life to save yours.

Neo: What?

The Oracle: You’re going to have to make a choice. In the one hand you’ll have Morpheus’ life and in the other hand you’ll have your own. One of you is going to die. Which one will be up to you. I’m sorry, kiddo, I really am. You have a good soul, and I hate giving good people bad news. Oh, don’t worry about it. As soon as you step outside that door, you’ll start feeling better. You’ll remember you don’t believe in any of this fate crap. You’re in control of your own life, remember? Here, take a cookie. I promise, by the time you’re done eating it, you’ll feel right as rain.

Morpheus: What was said was for you and for you alone.

(Nebuchadnezzar)
Tank: They’re on their way…. What is that?

(Lafayette Hotel)
Neo: Whoa, deja vu.

Trinity: What did you just say?

Neo: Nothing, I just had a little deja vu.

Trinity: What did you see?

Cypher: What happened?

Neo: A black cat went past us, and then another that looked just like it.

Trinity: How much like it, was it the same cat?

Neo: Might have been, I’m not sure.

Morpheus: Switch, Apoc.

Neo: What is it?

Trinity: Deja vu is usually a glitch in the Matrix. It happens when they change something.

(Nebuchadnezzar)
Tank: Oh my God.

(Lafayette Hotel)
Morpheus: Let’s go.

(Nebuchadnezzar)
Tank: They cut the hard line, it’s a trap! Get out!

(Lafayette Hotel)
Mouse: Oh no. Oh no.

Cypher: That’s what they changed. We’re trapped. There’s no way out.

Morpheus: Be calm. Give me your phone.

Trinity: They’ll be able to track it.

Morpheus: We have no choice.

(Cellular)
Tank: Operator.

Morpheus: Tank. Find a structural drawing of this building. Find it fast.

Tank: Got it.

Morpheus: I need the main wet wall.

(Lafayette Hotel)
Agent Smith: Eighth floor.

Agent Brown: They’re on the eighth floor.

Morpheus: Switch, straight ahead.

Apoc: Neo. I hope the Oracle gave you some good news.

(Cellular)
Tank: Another left, that’s it.

Morpheus: Good.

(Lafayette Hotel)
Agent Brown: Where are they?

Police: They’re in the walls. They’re in the walls!

Cypher: It’s an agent!

Trinity: Morpheus!

Morpheus: You must get Neo out! He’s all that matters.

Neo: No. No, Morpheus! Don’t!

Morpheus: Trinity, go!

Trinity: Go!

Neo: We can’t leave him!

Trinity: You have to!…. Cypher, come on!

Agent Smith: The great Morpheus. We meet at last.

Morpheus: And you are?

Agent Smith: Smith. Agent Smith.

Morpheus: You all look the same to me.

Agent Smith: Take him.

(Nebuchadnezzar)
Tank: No.

(Phone)
Tank: Operator.

Cypher: Yeah, I need an exit fast.

Tank: Cypher?

Cypher: Yeah, there was an accident. Goddamn car accident. All of a sudden, boom. Somebody up there still likes me.

Tank: Gotcha.

Cypher: Get me out of here fast.

Tank: Intersection of Franklin and Erie, an old TV repair shop.

Cypher: Right.

(Cellular)
Trinity: Tank, it’s me.

Neo: Is Morpheus alive?

Cypher: Is Morpheus alive, Tank?

Tank: They’re moving him. I don’t know where to yet.

Trinity: He’s alive. We need an exit.

Tank: You’re not far from Cypher.

Trinity: Cypher?

Tank: I know. He’s at Franklin and Erie.

Trinity: Got it.

(Nebuchadnezzar)
Tank: Got him.

Cypher: Where are they?

Tank: Making the call.

Cypher: Good.

(Repair shop)
Trinity: You first, Neo.

(Nebuchadnezzar)
Cypher: Shoot.

Dozer: No!

(Repair shop)
Neo: I don’t know, it just went dead.

(Cellular)
Cypher: Hello, Trinity.

Trinity: Cypher? Where’s Tank?

Cypher: You know, for a long time, I thought I was in love with you. I used to dream about you. You’re a beautiful woman, Trinity. Too bad things had to turn out this way.

Trinity: You killed them.

Apoc: What?

Switch: Oh God.

Cypher: I’m tired, Trinity. I tired of this war. I’m tired of fighting. I’m tired of this ship, being cold, eating the same goddamn goop everyday. But most of all, I’m tired of that jack-off and all his bullshit. Surprise, ass-hole! I bet you never saw this coming, didja? God, I wish I could be there, when they break you. I wish I could walk in just when it happens. So right then, you’d know it was me.

Trinity: You gave them Morpheus.

Cypher: He lied to us, Trinity. He tricked us. If you’da told us the truth, we woulda told you to shove that red pill right up your ass.

Trinity: That’s not true, Cypher, he set us free.

Cypher: Free? You call this free? All I do is what he tells me to do. If I had to choose between that and the Matrix, I choose the Matrix.

Trinity: The Matrix isn’t real!

Cypher: I disagree, Trinity. I think the Matrix can be more real than this world. All I do is pull the plug here. But there, you have to watch Apoc die.

(Repair shop)
Apoc: Trinity.

Switch: No.

(Cellular)
Cypher: Welcome to the real world, huh, baby?

Trinity: But you’re out, Cypher. You can’t go back.

Cypher: Oh no. That’s what you think. They’re going to reinsert my body. I go back to sleep, and when I wake up, I won’t remember a goddamn thing. By the way, if you have anything terribly important to say to Switch, I suggest you say it now.

Trinity: No, please don’t.

(Repair shop)
Switch: Not like this. Not like this.

(Cellular)
Cypher: Too late.

Trinity: Goddamn you, Cypher.

Cypher: Don’t hate me, Trinity. I’m just the messenger, and right now I’m gonna prove it to you. If Morpheus was right, then there’s no way I can pull this plug. I mean if Neo’s The One, then there’d have to be some kind of a miracle to stop me. Right? I mean how can he be The One if he’s dead? You never did answer me before if you bought into Morpheus’ bullshit – come on – all I want is a little yes or no. Look into his eyes, those big pretty eyes. Tell me. Yes or no?

Trinity: Yes.

Cypher: No.

(Nebuchadnezzar)
Cypher: I don’t believe it.

Tank: Believe it or not, you piece of shit, you’re still gonna burn.

(Repair shop)
Neo: You first.

(Nebuchadnezzar)
Trinity: You’re hurt.

Tank: I’ll be all right.

Trinity: Dozer?

(Office)
Agent Smith: Have you ever stood and stared at it, marveled at its beauty, its genius? Billions of people just living out their lives, oblivious. Did you know that the first Matrix was designed to be a perfect human world. Where none suffered. Where everyone would be happy. It was a disaster. No one would accept the program. Entire crops were lost. Some believed that we lacked the programming language to describe your perfect world. But I believe that as a species, human beings define their reality through misery and suffering. The perfect world was a dream that your primitive cerebrum kept trying to wake up from. Which is why the Matrix was redesigned to this, the peak of your civilization. I say your civilization because as soon as we started thinking for you it really became our civilization which is, of course, what this is all about. Evolution, Morpheus, evolution. Like the dinosaur. Look out that window. You had your time. The future is our world, Morpheus. The future is our time.

Agent Jones: There could be a problem.

(Nebuchadnezzar)
Neo: What are they doing to him?

Tank: Breaking into his mind. It’s like hacking into a computer, all it takes is time.

Neo: How much time?

Tank: Depends on the mind. Eventually it will crack and his alpha patterns will change from this to this. When it does, Morpheus will tell them anything they want to know.

Neo: Well, what do they want?

Tank: The leader of every ship is given codes to Zion’s mainframe computer. If an agent got the codes and got into Zion’s mainframe, it could destroy us. We can’t let that happen.

Neo: Trinity? Tank: Zion’s more important than me or you or even Morpheus.

Neo: Well there has to be something that we can do.

Tank: There is. We pull the plug.

Trinity: You’re going to kill him? Kill Morpheus?

Tank: We don’t have any other choice.

(Office)
Agent Smith: Never send a human to do a machine’s job.

Agent Brown: If indeed the insider has failed, they’ll sever the connection as soon as possible, unless…

Agent Jones: They’re dead, in either case…

Agent Smith: We have no choice but to continue as planned. Deploy the sentinels. Immediately.

(Nebuchadnezzar)
Tank: Morpheus, you’re more than a leader to us. You’re our father. We’ll miss you always.

Neo: Stop. I don’t believe this is happening.

Tank: Neo, this has to be done.

Neo: Does it? I don’t know, I… this can’t be just coincidence. It can’t be.

Tank: What are you talking about?

Neo: The Oracle. She told me this would happen. She told me that I would have to make a choice.

Trinity: What choice?… What are you doing?

Neo: I’m going in.

Trinity: No you’re not.

Neo: I have to.

Trinity: Neo, Morpheus sacrificed himself so that he could get you out. There’s no way that you’re going back in.

Neo: Morpheus did what he did because he believed I am something I’m not.

Trinity: What?

Neo: I’m not the one, Trinity. The Oracle hit me with that too.

Trinity: No. You have to be.

Neo: I’m not, I’m sorry. I’m just another guy.

Trinity: No, Neo. That’s not true. It can’t be true.

Neo: Why?

Tank: Neo, this is loco. They’ve got Morpheus in a military controlled building. Even if you somehow got inside, those are agents holding him. Three of them. I want Morpheus back too, but what you’re talking about is suicide.

Neo: I know that’s what it looks like, but it’s not. I can’t explain to you why it’s not. Morpheus believed something and he was ready to give his life for what he believed. I understand that now. That’s why I have to go.

Tank: Why?

Neo: Because I believe in something.

Trinity: What?

Neo: I believe I can bring him back…. What are you doing?

Trinity: I going with you.

Neo: No you’re not.

Trinity: No? Let me tell you what I believe. I believe Morpheus means more to me than he does to you. I believe if you’re really serious about saving him, you are going to need my help. And since I am the ranking officer on this ship, if you don’t like it, I believe you can go to hell. Because you aren’t going anywhere else. Tank? Load us up.

(Office)
Agent Smith: I’d like to share a revelation I had during my time here. It came to me when I tried to classify your species. I realized that you’re not actually mammals. Every mammal on this planet instinctively develops a natural equilibrium with the surrounding environment but you humans do not. You move to an area and you multiply until every natural resource is consumed. The only way you can survive is to spread to another area. There is another organism on this planet that follows the same pattern. Do you know what it is? A virus. Human beings are a disease, a cancer of this planet. You are a plague, and we are the cure.

(Cellular)
Tank: Okay. So what do you need, besides a miracle?

Neo: Guns. Lots of guns.

(Construct)
Trinity: Neo, no one has ever done anything like this.

Neo: That’s why it’s going to work.

(Office)
Agent Smith: Why isn’t the serum working?

Agent Brown: Perhaps we’re asking the wrong questions.

Agent Smith: Leave me with him. Now.

(Nebuchadnezzar)
Tank: Hold on, Morpheus. They’re coming for you. They’re coming.

(Office)
Agent Smith: Can you hear me, Morpheus? I’m going to be honest with you. I hate this place, this zoo, this prison, this reality, whatever you want to call it. I can’t stand it any longer. It’s the smell. If there is such a thing. I feel.. saturated by it. I can taste your stink. And every time I do I feel I have somehow been infected by it, it’s repulsive. I must get out of here. I must get free and in this mind is the key, my key. Once Zion is destroyed there is no need for me to be here, don’t you understand? I need the codes. I have to get inside Zion, and you have to tell me how. You are going to tell me or you are going to die.

(Lobby)
Guard 1: Please remove any metallic items you’re carrying, keys, loose change. Holy shit.

Guard 2: Backup. Send backup.

Soldier: Freeze.

(Office)
Agent Jones: What were you doing?

Agent Brown: He doesn’t know.

Agent Smith: Know what?

Agent Jones: I think they’re trying to save him.

(Elevator)
Neo: There is no spoon.

(Office)
Agent Smith: Find them and destroy them.

(Rooftop)
Pilot: I repeat, we are under attack.

Neo: Trinity! Help!

Agent Jones: Only human.

Trinity: Dodge this…. How did you do that?

Neo: Do what?

Trinity: You moved like they do. I’ve never seen anyone move that fast.

Neo: Wasn’t fast enough. Can you fly that thing?

Trinity: Not yet.

(Cellular)
Tank: Operator.

Trinity: Tank, I need a pilot program for a V-212 helicopter. Hurry…. Let’s go.

(Office)
Agent Smith: No.

(Helicopter)
Neo: Morpheus, get up. Get up, get up…. He’s not going to make it…. Gotcha.

(Rooftop)
Neo: Trinity.

(Nebuchadnezzar)
Tank: I knew it. He’s the one.

(Rooftop)
Morpheus: Do you believe it now, Trinity?

Neo: Morpheus. The Oracle, she told me I’m…

Morpheus: She told you exactly what you needed to hear, that’s all. Neo, sooner or later you’re going to realize, just as I did, that there’s a difference between knowing the path and walking the path.

(Cellular)
Tank: Operator.

Morpheus: Tank.

Tank: Goddamn. It’s good to hear your voice, sir.

Morpheus: We need an exit.

Tank: Got one ready. Subway station, State and Balboa.

(Rooftop)
Agent Smith: Damn it.

Agent Brown: The trace was completed.

Agent Jones: We have their position.

Agent Brown: The sentinels are standing by.

Agent Jones: Order the strike.

Agent Smith: They’re not out yet.

(Subway station)
Neo: You first, Morpheus.

Trinity: Neo, I want to tell you something, but I’m afraid of what it could mean if I do. Everything the Oracle told me has come true. Everything but this.

(Nebuchadnezzar)
Trinity: Neo.

Tank: What just happened?

Trinity: An agent. You have to send me back.

Tank: I can’t.

(Subway station)
Agent Smith: Mr. Anderson. We meet again.

(Nebuchadnezzar)
Trinity: Run, Neo. Run! What is he doing?

Morpheus: He’s beginning to believe.

(Subway station)
Agent Smith: You’re empty.

Neo: So are you.

Agent Smith: I’m going to enjoy watching you die, Mr. Anderson.

(Nebuchadnezzar)
Trinity: Jesus, he’s killing him.

(Subway station)
Agent Smith: Do you hear that, Mr. Anderson? That is the sound of inevitability. That is the sound of your death. Goodbye, Mr. Anderson.

Neo: My name is Neo.

(Nebuchadnezzar)
Trinity: What happened?

Tank: I don’t know. I lost him. Oh shit.

Trinity: Sentinels. How long?

Morpheus: Five, maybe six minutes. Tank, charge the EMP.

Trinity: You can’t use that until he’s out.

Morpheus: I know, Trinity, don’t worry. He’s going to make it.

(Street)
Man: Shit, that’s my phone. That’s my best phone.

(Cellular)
Tank: Got him! He’s on the run.

Neo: Mr. Wizard, get me the hell out of here.

Tank: Got a patch on an old exit, Wabash and Lake.

Neo: Oh shit…. Help. Need a little help.

Tank: Door…. Door on your left. No, your other left…. Back door.

(Nebuchadnezzar)
Trinity: Oh no.

Morpheus: Here they come…. He’s going to make it.

(Cellular)
Tank: Fire escape at the end of the alley. Room 303.

(Nebuchadnezzar)
Tank: They’re inside.

Trinity: Hurry, Neo

Morpheus: Can’t be.

(Hotel)
Agent Smith: Check him.

Agent Brown: He’s gone.

Agent Smith: Goodbye, Mr. Anderson.

(Nebuchadnezzar)
Trinity: Neo, I’m not afraid anymore. The Oracle told me that I would fall in love, and that that man, the man who I loved would be The One. So you see, you can’t be dead. You can’t be, because I love you. You hear me? I love you…. Now get up.

(Hotel)
Neo, The One: No.

(Nebuchadnezzar)
Tank: How?

Morpheus: He is The One.

Trinity: No!

(Phone)
Neo, The One: I know you’re out there. I can feel you now. I know that you’re afraid. You’re afraid of us. You’re afraid of change. I don’t know the future. I didn’t come here to tell you how this is going to end. I came here to tell you how it’s going to begin. I’m going to hang up this phone and then I’m going to show these people what you don’t want them to see. I’m going to show them a world without you, a world without rules and controls, without borders or boundaries, a world where anything is possible. Where we go from there is a choice I leave to you.

MATRIX RELOADED

Guard 1: See you tomorrow.
Guard 2: Oh my God.
Trinity: I’m in.

Link: Sir, are you sure about this?
Morpheus: I told you, we’re going to be all right.
Link: I understand, sir, it’s just that… I’m scoping some serious sentinel activity up here.
Morpheus: Link.
Link: Yes sir?
Morpheus: Given your situation, I can’t say I fully understand your reasons for volunteering to operate onboard my ship. However, if you wish to continue to do so, I must ask you to do one thing.
Link: What’s that, sir?
Morpheus: To trust me.
Link: Yes, sir, I will, sir… I mean, I do, sir.
Morpheus: I hope so. Now re-patch the main AC to the hard drives and stand by to broadcast.
Link: Yes, sir.

Trinity: Still can’t sleep? You wanna talk?
Neo: They’re just dreams.
Trinity: If you’re afraid of something,…
Neo: I just wish… I wish I knew what I’m supposed to do. That’s all. I just wish I knew.
Trinity: She’s gonna call. Don’t worry.
Link: There you are.
Trinity: Are we ready to go?
Link: We’re already late.

Niobe: These geotherms confirm the last transmission of the Osiris. The machines are digging. They’re boring from the surface straight down to Zion.
Tirant: Mother…
Soren: They’ll avoid the entire perimeter defense.
Ice: How fast are they moving?
Niobe: Control estimates their descent at a hundred meters an hour.
[crew/captain]: Shit.
[captain 2]: How deep are they?
Niobe: Almost two thousand meters.
[captain 2]: What about the scans from the Osiris?
[captain 3]: They can’t be accurate.
Niobe: They may be.
[crew/captain]: What?
[captain 3]: It’s not possible.
Binary: That’d mean there are a quarter of a million sentinels out there.
Niobe: That’s right.
[captain 3]: That can’t be.

Morpheus: Why not? A sentinel for every man, woman, and child in Zion. That sounds exactly like the thinking of a machine to me.
Niobe: Morpheus, glad you could join us.
Morpheus: Niobe. My apologies to all. As you are undoubtedly aware, it has become increasingly difficult to locate a secure broadcast position.
[captain]: Squiddies got all our best spots.
Ice: Mainlines are crawling with them.
Ghost: And if Niobe’s right, in 72 hours there’s gonna be a quarter of a million more.
Ballard: What are we gonna do about it?
Niobe: We’re gonna do what Commander Lock ordered us to do. We’ll evacuate broadcast level and return to Zion.
Morpheus: And does the Commander have a plan for stopping 250,000 sentinels?
Niobe: A strategy is still being formulated.
Morpheus: I’m sure it is.

[captain]: What do you think we should do, Morpheus?
Morpheus: I think we should proceed as ordered, however…
Trinity: What is it?
Neo: I don’t know.
Morpheus: I must ask one of you for help. Some of you believe as I believe. Some of you do not. But those of you that do, know we are nearing the end of our struggle. The prophecy will be fulfilled soon, but before it can be, the Oracle must be consulted.
Morpheus: If we return and recharge now, we can be back with inside 36 hours. Well before the machines have reached this depth.
Niobe: Do you understand what you’re asking?
Morpheus: I am asking that one ship remain here in our place just in case that the Oracle should attempt to contact us.
Ballard: Bullshit, you’re asking for one of us to disobey a direct order.
Morpheus: That’s right, I am. But we well know that the reason most of us are here is because of our affinity for disobedience.
[captain]: And what happens when you get back to Zion and the Commander throws you in the stockade?
Morpheus: He won’t.
Ballard: Goddamn it, Morpheus, you ain’t never gonna change. Shit, I’ll do it, just to see what Deadbolt does to you. You got 36 hours.
Smith: I’m looking for Neo.
Corrupt: Never heard of him.
Smith: I have something for him. A gift. You see, he set me free.
Corrupt: Fine, whatever. Now piss off.

Neo: Who was that?
Wurm: How did you know someone was here?
Corrupt: He gave you this. He said you set him free.
Wurm: Is everything all right, sir?
Neo: The meeting is over, retreat to your exits. Agents are coming.
Corrupt: Agents?
Neo: Go.

Neo: Hiya, fellas.
[agent 1] It’s him.
[agent 2] The Anomaly.
[agent 3] Do we proceed?
[agent 2] Yes.
[agent 3] He is still…
[agent 1]…only human.
Neo: Hmm. Upgrades.

Smith 1: That went as expected.
Smith 2: Yes.
Smith 1: It’s happening exactly as before.
Smith 2: Well, not exactly.

Morpheus: What happened back there, Link?
Link: I can’t figure it out, sir. Agents just came out of nowhere. And then the code got all weird. Encryption I’ve never seen.
Trinity: Is Neo okay?
Link: Okay? Shit, Morpheus, you should have seen him.
Morpheus: Where is he now?
Link: He’s doing his Superman thing.

Neo: Where are you?

Link: This is the Nebuchadnezzar on approach, requesting access to Gate 3.
Zion Virtual Control Operator: Nebuchadnezzar, this is Zion Control. Maintain present velocity and stand by.
Link: Roger that, Control.
Zion Virtual Control Operator: This is Zion Control requesting immediate stand down of arms at Gate 3. We have the Nebuchadnezzar on approach. Let’s open her up. Nebuchadnezzar, you are clear through Gate 3 to Bay 7.
Link: Roger that, Control.
Zion Virtual Control Operator: Door’s open, bed’s made. Welcome home.
Link: No place like it.

Zion Controller: [?]Control. Zion Control, stand by for Gate 3 lockdown.
Zion Virtual Control Operator: The Nebuchadnezzar is down. Bay 7.
Zion Controller: Understood.

Morpheus: Captain Mifune.
Mifune: Captain Morpheus.
Morpheus: Are you here to escort me to the stockade, Captain?
Mifune: I’m just here to keep the peace.
Lock’s Lieutenant: Commander Lock demands…
Mifune: *coughs*
Lock’s Lieutenant: …requests your immediate counsel, sir.
Morpheus: Link.
Link: Sir?
Morpheus: I want the ship ready to go as soon as humanly possible.
Link: Understood, sir.

Neo: What is it between them?
Trinity: Morpheus and Lock? Niobe.
Neo: Captain Niobe?
Trinity: She used to be with Morpheus. Now she’s with Lock.
Neo: What happened?
Trinity: Morpheus went to the Oracle. After that everything changed.
Neo: Yeah, she can do that.

Kid: Neo!
Neo: Oh, no.
Trinity: How does he always know?
Neo: Doesn’t he have anything better to do?
Trinity: You know what they say about the life you save.
Neo: I didn’t save his life.
Kid: Hiya, Neo! Trinity, Link. It’s great to have you back!
Neo: Thanks. It’s good to be back.
Kid: Can I carry that for you, Neo?
Neo: No, I can carry my own bag.
Kid: Trinity?
Trinity: I’m fine.
Link: You can carry these.
Kid: Yeah, sure, Link. Hey, you know, next year I’m old enough to join a crew. I’ve been thinking a lot about it and I’ve made my decision.
Link: Let me guess.
Kid: I want to join the Nebuchadnezzar. I know Morpheus hasn’t filled the other crew positions except for you, Link. I’m sure he has his reasons, but the more I think about it, the more I think it’s meant to be. You know, it’s fate. I mean, you’re the reason I’m here, Neo.
Neo: I told you, Kid, you found me, I didn’t find you.
Kid: I know, but you got me out! You saved me!
Neo: You saved yourself.

Lock: Morpheus.
Morpheus: Commander Lock.
Lock: I’ve spoken to the other captains, and I wanted to offer you the chance to explain your actions.
Morpheus: I wasn’t aware that my actions required any explanation.
Lock: You were given a direct order to return to Zion.
Morpheus: I did.
Lock: But you asked for one ship to remain behind.
Morpheus: I would have stayed, but I needed to recharge my ship.
Lock: So you admit to a direct contravention of your duty.
Morpheus: Commander, we need a presence inside the Matrix to await contact from the Oracle.
Lock: I don’t want to hear that shit! I don’t care about Oracles or prophecies or Messiahs. I care about one thing: stopping that army from destroying this city, and to do that I need soldiers to obey my orders.
Morpheus: With all due respect, Commander, there is only one way to save our city.
Lock: How?
Morpheus: Neo.
Lock: Goddamnit, Morpheus! Not everyone believes what you believe!
Morpheus: My beliefs do not require them to.

Kid: There’s a Gathering tonight. Everyone’s talking, a lot of people are scared. No one can remember the last time so many ships were docked. Something’s happening, isn’t it? Something big?
Link: Hey. We’re not allowed to say anything, so stop asking. Goddamn, it’s good to be home.

Lock: I’m going to recommend to the Council that you be removed from duty.
Morpheus: That is, of course, your prerogative, Commander.
Lock: If it were up to me, Captain, you wouldn’t set foot on a ship for the rest of your life.
Morpheus: Then I am grateful that it is not up to you.
Lock: Councillor Hamann.
Councillor Hamann: Commander. Captain.
Morpheus: Councillor.
Councillor Hamann: Council’s asked me to speak tonight, at the temple gathering. The presence of the fleet and the persistence of rumours must be addressed. The people must be told what is happening.
Lock: Of course, councillor. But might I advise a level of discretion concerning specific details. We do not wish to start a panic.
Councillor Hamann: Quite right. A panic is not what anyone wants. What about you, Captain, what would you advise?
Morpheus: The truth. No one will panic. Because there is nothing to fear. That army will never reach the gates of Zion.
Councillor Hamann: What makes you so sure?
Morpheus: Consider what we have seen, Councillor. Consider that in the past 6 months we have freed more minds than in 6 years. This attack is an act of desperation. I believe very soon the prophecy will be fulfilled and this war will end.
Councillor Hamann: I hope you’re right, Captain.
Morpheus: I do not believe it to be a matter of hope, Councillor. It is simply a matter of time.

Link: My stop. See you soon, hopefully not too soon. Let’s go, Kid. These two got things to do.
Neo: Are you thinking what I’m thinking?
Trinity: I am if you’re thinking this elevator’s too damn slow.
Neo: How long to recharge the Neb?
Trinity: 24, maybe 30 hours.
Neo: Some people go their entire lives without hearing news that good.

Old Woman at Zion: Neo, please. I have a son, Jacob, aboard the Gnosis. Please, watch over him.
Neo: I’ll try.
Another Old Woman at Zion: I have a daughter on the Icarus.
Neo: No, wait.
Trinity: It’s all right. They need you.
Neo: I need you.
Trinity: I know. There’s time.

Link: Where’s my puss… Hey!
Link’s Niece and Nephew: Uncle Link!
Link: God! Oh my God, you’re so huge, you should be picking me up!
Link’s Niece and Nephew: No!
Link: Yeah!
Link’s Niece and Nephew: Okay!
Link: Okay? All right. Now, we’re gonna have to work together here, okay? One, two, three, lift! Oh, my God! What are you feedin’ these two?
Cas: Come on, kids! It’s time to go.
Link: Hey, Cas.
Cas: Hey. Good to have you home, Link.
Link: Good to be home.
Cas: You be careful with her, huh?
Zee: Don’t worry about me, he’s the one that’s gonna get it.
Link: Hmm?
Cas: Out the door! Both of you, march!
Link: Bye!
Cas: Bye!

Link: I’m gonna get what?
Zee: Every ship out there has been home two, even three times more than the Nebuchadnezzar.
Link: Come on, Zee! I thought we were past this!
Zee: We’ll get past this when you start operating another ship.
Link: I can’t do that!
Zee: Why?
Link: You know why.
Zee: If Dozer knew how I felt, he wouldn’t have asked you to do this.
Link: Maybe. But it’s too late now. I made a promise, and some promises can’t be unmade.
Zee: It’s not fair.
Link: Nobody said it was gonna be. You think Cas thinks it’s fair that I’m here and Dozer’s not?
Zee: I lost two brothers to that ship, Link. Afraid of it. Afraid it’s gonna take you too.
Link: It won’t.
Zee: How can you say that to me?
Link: Because of Morpheus, because of what he’s told me. He said that this is it. That it will be over soon.
Zee: Link, Morpheus is crazy.
Link: No doubt, but Tank and Dozer believed him, and I’ll tell you what – soon after being on that ship and seeing Neo do the things he can do, I gotta say – I’m starting to believe him too.
Zee: Be careful, Link. Please be careful.

Kid: They started yet?
Priestess: Only Councillor Hamann’s opening prayer.
Councillor Hamann: Tonight, let us honour these men and women. These are our soldiers, our warriors. These are our husbands and wives, our brothers and sisters, our children. Let us remember those that have been lost. And let us give thanks for those that have been found and who stand here beside us. Now I would like someone else to close this prayer. Someone who hasn’t spoken here in a long time, but who I believe has something to say that we all need to hear. I give you Morpheus.

Morpheus: Zion! Hear me! It is true, what many of you have heard. The machines have gathered an army, and as I speak that army is drawing nearer to our home.
Crowd: [whispers] Believe me when I say we have a difficult time ahead of us. But if we are to be prepared for it, we must first shed our fear of it! I stand here before you now, truthfully unafraid. Why? Because I believe something you do not? No! I stand here without fear because I remember. I remember that I am here not because of the path that lies before me, but because of the path that lies behind me! I remember that for 100 years we have fought these machines. I remember that for 100 years they have send their armies to destroy us. And after a century of war, I remember that which matters most. We are still here!
Crowd: [cheers and applause] Tonight let us send a message to that army. Tonight let us shake this cave! Tonight let us tremble these halls of earth, steel, and stone! Let us be heard from red core to black sky. Tonight, let us make them remember. This is Zion! And we are not afraid!
Crowd: [thunderous cheers and applause]

Niobe: I remember. I remember you used to dance. I remember you were pretty good.
Morpheus: There are some things in this world, captain Niobe, that will never change.
Lock: Niobe!
Morpheus: Some things do change.

Neo: Excuse me.
Neo: I missed you.
Trinity: I can tell.
Neo: I was thinking… Everyone is here.
Trinity: Follow me.

Trinity: Neo, what is it? What’s wrong? It’s okay, you can tell me.
Neo: Trinity…
Trinity: Don’t be afraid.
Neo: I can’t lose you.
Trinity: You’re not gonna lose me. You feel this? I’m never letting go.

Morpheus: Good night, Zion. Sweet dreams.

Bane: You all right?
Malachi: I’ll make it. Did you see that Agent? I’ve never seen anything like it.
Bane: Doesn’t matter now. All that matters is this. You first.
Bane: Oh God.
Smith: Smith will suffice.
Bane-Smith: Thank you.
Smith: My pleasure.

Councillor Hamann: Care for some company?
Neo: Councillor Hamann.
Councillor Hamann: I don’t want to intrude if you prefer to be alone.
Neo: No, I could probably use some company.
Councillor Hamann: Good, so could I. It’s nice tonight. Very calm. Feels like everyone’s sleeping very peacefully.
Neo: Not everyone.
Councillor Hamann: I hate sleeping. I never sleep more than a few hours. I figure I slept the first 11 years of my life, now I’m making up for it. What about you?
Neo: I just haven’t been able to sleep much.
Councillor Hamann: It’s a good sign.
Neo: Of what?
Councillor Hamann: That you are, in fact, still human. Have you ever been to the enginering level? I love to walk there at night, it’s quite amazing. Would you like to see it?
Neo: Sure.
Councillor Hamann: Almost no one comes down here, unless, of course, there’s a problem. That’s how it is with people – nobody cares how it works as long as it works. I like it down here. I like to be reminded this city survives because of these machines. These machines are keeping us alive, while other machines are coming to kill us. Interesting, isn’t it? Power to give life, and the power to end it.
Neo: We have the same power.
Councillor Hamann: I suppose we do, but down here sometimes I think about all those people still plugged into the Matrix and when I look at these machines, I.. I can’t help thinking that in a way, we are plugged into them.
Neo: But we control these machines, they don’t control us.
Councillor Hamann: Of course not, how could they? The idea’s pure nonsense, but… it does make one wonder just… what is control?
Neo: If we wanted, we could shut these machines down.
Councillor Hamann: Of course… that’s it. You hit it! That’s control, isn’t it? If we wanted, we could smash them to bits. Although if we did, we’d have to consider what would happen to our lights, our heat, our air.
Neo: So we need machines and they need us. Is that your point, Councillor?
Councillor Hamann: No, no point. Old men like me don’t bother with making points. There’s no point.
Neo: Is that why there are no young men on the Council?
Councillor Hamann: Good point.
Neo: Why don’t you tell me what’s on your mind, Councillor?
Councillor Hamann: There is so much in this world that I do not understand. See that machine? It has something to do with recycling our water supply. I have absolutely no idea how it works. But I do understand the reason for it to work. I have absolutely no idea how you are able to do some of the things you do, but I believe there’s a reason for that as well. I only hope we understand that reason before it’s too late.

Trinity: Ballard.
Ballard: Is he here? Neo. It’s from the Oracle.
Neo: It’s time to go.
Link: Morpheus said this is how it’s gonna happen. I don’t know. Maybe the prophecy is true, maybe it’s not. All I know, is that ship needs an operator. Right now that operator’s me.
Zee: I know.
Link: Zee…
Zee: I want you to wear it.
Link: You know I don’t believe in this stuff.
Zee: But I do. It’s always brought me luck. Maybe it’ll bring me you.
Link: I’m coming back. I promise. No matter what it takes, I’m coming home.
Zee: Just keep it with you, please? For me.
Link: Okay.

Kid: Neo!
Link: Who the hell? Bane?
Neo: Is something wrong?
Bane/Smith: No, I’m fine. I just wanted to catch you to say good luck.
Neo: Thanks.
Bane/Smith: We’ll see you.
Kid: Neo! Just in time. You’re gonna see the Oracle, aren’t you?
Morpheus: We don’t have time.
Kid: I’m sorry, sir, I just have to give something to Neo. A gift from one of the orphans. He made me swear to get it to you before you left. He said you’d understand.
Neo: Thanks.

Lock: I was just told you cleared the Nebuchadnezzar for takeoff.
Councillor Hamann: That is correct.
Lock: Councillor, am I still in charge of our defense system?
Councillor Hamann: Of course.
Lock: I believe I need every ship we have if we’re going to survive this attack!
Councillor Hamann: I understand that, Commander.
Lock: Then why did you allow the Nebuchadnezzar to leave?
Councillor Hamann: Because I believe our survival depends on more than how many ships we have.

Trinity: Be careful.
Neo: Hello.
Seraph: You seek the Oracle.
Neo: Who are you?
Seraph: I am Seraph. I can take you to her. But first, I must apologize.
Neo: Apologize for what?
Seraph: For this.
Seraph: Good. The Oracle has made enemies. I had to be sure.
Neo: Of what?
Seraph: That you are The One.
Neo: You could’ve just asked.
Seraph: No. You do not truly know someone until you fight them. Come, she’s waiting.
Link: Where the hell’d they go?
Neo: These are back doors, aren’t they? Programmer access.
Seraph: [nods] Neo: How do they work?
Seraph: The code is hidden in tumblers. One position opens a lock. Another position opens one of these doors.
Neo: Are you a programmer?
Seraph: [shakes head] Neo: Then what are you?
Seraph: I protect that which matters most.

The Oracle: Well, come on. I ain’t gonna bite ya. Come around here, and let me have a look at ya. My goodness, look at you! You turned out all right, didn’t you? How do you feel?
Neo: I, uh…
The Oracle: I know you’re not sleeping. We’ll get to that. Why don’t you come and have a sit this time?
Neo: Maybe I’ll stand.
The Oracle: Well, suit yourself.
Neo: I felt like sitting.
The Oracle: I know. So. Let’s get the obvious stuff out of the way.
Neo: You’re not human, are you?
The Oracle: Well it’s tough to get any more obvious than that.
Neo: If I had to guess, I’d say you’re a program from the machine world. So is he.
The Oracle: So far, so good.
Neo: But if that’s true, that can mean you are a part of this system, another kind of control.
The Oracle: Keep going.
Neo: I suppose the most obvious question is, how can I trust you?
The Oracle: Bingo! It is a pickle, no doubt about it. The bad news is there’s no way if you can really know whether I’m here to help you or not. So it’s really up to you. You just have to make up your own damn mind to either accept what I’m going to tell you, or reject it. Candy?
Neo: D’you already know if I’m going to take it?
The Oracle: Wouldn’t be much of an Oracle if I didn’t.
Neo: But if you already know, how can I make a choice?
The Oracle: Because you didn’t come here to make the choice, you’ve already made it. You’re here to try to understand why you made it. I thought you’d have figured that out by now.
Neo: Why are you here?
The Oracle: Same reason. I love candy.
Neo: But why help us?
The Oracle: We’re all here to do what we’re all here to do. I’m interested in one thing, Neo, the future. And believe me, I know – the only way to get there is together.
Neo: Are there other programs like you?
The Oracle: Oh, well, not like me. But… Look, see those birds? At some point a program was written to govern them. A program was written to watch over the trees, and the wind, the sunrise, and sunset. There are programs running all over the place. The ones doing their job, doing what they were meant to do, are invisible. You’d never even know they were here. But the other ones, well, we hear about them all the time.
Neo: I’ve never heard of them.
The Oracle: Of course you have. Every time you’ve heard someone say they saw a ghost, or an angel. Every story you’ve ever heard about vampires, werewolves, or aliens is the system assimilating some program that’s doing something they’re not supposed to be doing.
Neo: Programs hacking programs. Why?
The Oracle: They have their reasons, but usually a program chooses exile when it faces deletion.
Neo: And why would a program be deleted?
The Oracle: Maybe it breaks down. Maybe a better program is created to replace it – happens all the time, and when it does, a program can either choose to hide here, or return to The Source.
Neo: The machine mainframe?
The Oracle: Yes. Where you must go. Where the path of The One ends. You’ve seen it, in your dreams, haven’t you? The door made of light?
Neo: [nods] The Oracle: What happens when you go through the door?
Neo: I see Trinity, and something happens, something bad. She starts to fall, and then I wake up.
The Oracle: Do you see her die?
Neo: No.
The Oracle: You have the sight now, Neo. You are looking at the world without time.
Neo: Then why can’t I see what happens to her?
The Oracle: We can never see past the choices we don’t understand.
Neo: Are you saying I have to choose whether Trinity lives or dies?
The Oracle: No. You’ve already made the choice, now you have to understand it.
Neo: No, I can’t do that. I won’t.
The Oracle: You have to.
Neo: Why?
The Oracle: Because you’re The One.
Neo: What if I can’t? What happens if I fail?
The Oracle: Then Zion will fall. Our time is up. Listen to me, Neo. You can save Zion if you reach The Source, but to do that you will need the Keymaker.
Neo: The Keymaker?
The Oracle: Yes, he disappeared some time ago. We did not know what happened to him until now. He’s being held prisoner by a very dangerous program, one of the oldest of us. He is called the Merovingian, and he will not let him go willingly.
Neo: What does he want?
The Oracle: What do all men with power want? More power.
The Oracle: Be there, at that exact time, and you will have a chance.
Seraph: We must go.
The Oracle: Seems like every time we meet I’ve got nothing but bad news. I’m sorry about that, I surely am. But for what it’s worth, you’ve made a believer out of me. Good luck, kiddo.

Smith: Mister Anderson! Did you get my package?
Neo: Yeah.
Smith: Well, good.
Morpheus: Smith.
Link: Whoever it is, he’s not reading like an agent.
Smith: Surprised to see me?
Neo: No.
Smith: Then you’re aware of it.
Neo: Of what?
Smith: Our connection. I don’t fully understand how it happened. Perhaps some part of you imprinted onto me, something overwritten or copied. That is at this point irrelevant, what matters is that whatever happened, happened for a reason.
Neo: And what reason is that?
Smith: I killed you, Mister Anderson, I watched you die… With a certain satisfaction, I might add, and then something happened. Something that I knew was impossible, but it happened anyway. You destroyed me, Mister Anderson. Afterward, I knew the rules, I understood what I was supposed to do but I didn’t. I couldn’t. I was compelled to stay, compelled to disobey. And now here I stand because of you, Mister Anderson, because of you I’m no longer an agent of the system, because of you I’ve changed – I’m unplugged – a new man, so to speak, like you, apparently free.
Neo: Congratulations.
Smith: Thank you. But as you well know, appearances can be deceiving, which brings me back to the reason why we’re here. We’re not here because we’re free, we’re here because we’re not free. There’s no escaping reason, no denying purpose – because as we both know, without purpose, we would not exist.
Smith 2: It is purpose that created us,
Smith 3: Purpose that connects us,
Smith 4: Purpose that pulls us,
Smith 5: That guides us,
Smith 6: That drives us,
Smith 7: It is purpose that defines,
Smith 8: Purpose that binds us.
Smith: We’re here because of you, Mister Anderson, we’re here to take from you what you tried to take from us. Purpose.
Trinity: What’s happening to him?
Link: I don’t know.
Smith: Yes, that’s it, it’ll be over soon.

Agent Jackson: You.
Smith: Yes me. Me, me, me!
Agent Jackson/Smith: Me too!

Smith: More.

Smiths: It is inevitable.
Trinity: Come on, get out of there.

Trinity: Are you all right?
Morpheus: It was Smith.
Neo: Yes.
Morpheus: Now there’s more than one of him.
Neo: A lot more.
Link: How’s that possible?
Neo: I don’t know – somehow he’s found a way to copy himself.
Morpheus: Is that what he was doing to you?
Neo: I don’t know what he was doing, but I know what it felt like.
Trinity: What?
Neo: Felt like I was back in that hallway. Felt like dying.

Lock: The machines are tunnelling to avoid our defense system. But I believe that they’re going to intersect certain pipelines in order to control them. These points of intersection are crucial because I believe they’re vulnerable to counterattack. Although it has been suggested that this is the same kind of attack we have defended for years, I urge the Council to realize the truth: this is the single greatest threat we have ever faced. And if we do not act accordingly, we will not survive.

Councillor Dillard: Commander Lock, the Council is well aware of the seriousness of this attack. You have our leave to prepare our defense by any and all means necessary.
Lock: Thank you, Councillor
Councillor Dillard: However, we ask if there’s been word from the Nebuchadnezzar.
Lock: No, Councillor, no word – nothing.
Councillor West: Then we request a ship be dispatched to ascertain the fate of The One.
Lock: I wish that were possible, Councillor, but I do not believe our defense can suffer the loss of another ship.
Councillor West: It will, Commander, if it must.
Lock: It could take a single ship days to find the Nebuchadnezzar.
Councillor Dillard: Then send two.
Lock: This is insane.
Councilor Hamann: Careful, Commander.
Lock: Forgive my frustration, Councillors. I wish I were able to comprehend the Council’s choice in this matter.
Councillor West: Comprehension is not a requisite of cooperation.
Lock: You’re asking me to order two of my captains…
Councillor Dillard: There’s no need for such an order, the Captains are present – they can answer for themselves. The Council is calling for two volunteers to aid the Nebuchadnezzar. Are there two among you that would answer such a call?
Soren: Captain Soren of the Vigilant will answer the Council’s call.
Councillor Dillard: You understand the situation, Captain Soren?
Soren: Yes, ma’am.
Councillor Dillard: Thank you, Captain. Is there another?
Bane/Smith: Captain, I think we should volunteer.
Malachi: What? You have gone crazy?
Ballard: Shut your hole, Bane, before I put you in one.
Councillor Dillard: Is there no other?
Lock: Be hard for any man to risk his life. Especially if he doesn’t understand the reason.
Niobe: Captain Niobe of the Logos will answer the Councillor’s call.
Lock: What?
Councillor Dillard: Thank you, Captain Niobe. Commander Lock, you have your orders. This Council is hereby adjourned.
Lock: Niobe, what are you doing?
Niobe: What I can.
Lock: Why?
Niobe: Because some things never change, Jason, and some things do.

Morpheus: What can you see, Neo?
Neo: It’s strange, the code is somehow different.
Morpheus: Encrypted?
Neo: Maybe.
Trinity: Is that good for us or bad for us?
Neo: Well, it looks like every floor is wired with explosives.
Trinity: Bad for us.
Morpheus: Here we go.
Maitre d’: Puis-je vous aider?
Morpheus: Yes, we are here to speak with the Merovingian.
Maitre d’: Of course, he has been expecting you. Follow me.

Merovingian: Aha, here he is at last. Neo, the One himself, right? And the legendary Morpheus. And Trinity of course, si belle qu’elle me fait souffrir. I have heard so much, you honour me. Please, sit, join us. This is my wife, Persephone. Something to eat? Drink? Hmm… of course, such things are contrivances like so much here. For the sake of appearances.
Neo: No, thank you.
Merovingian: Yes, of course, who has time? Who has time? But then if we do not ever take time, how can we ever have time? Château Haut-Brion 1959, magnificent wine, I love French wine, like I love the French language. I have sampled every language, French is my favourite – fantastic language, especially to curse with. Nom de Dieu de putain de bordel de merde de saloperies de connards d’enculés de ta mère. You see, it’s like wiping your arse with silk, I love it.
Morpheus: You know why we are here.
Merovingian: Hmph… I am a trafficker of information, I know everything I can. The question is, do you know why you are here?
Morpheus: We are looking for the Keymaker.
Merovingian: Oh yes, it is true. The Keymaker, of course. But this is not a reason, this is not a why.’ The Keymaker himself, his very nature, is means, it is not an end, and so, to look for him is to be looking for a means to do… what?
Neo: You know the answer to that question.
Merovingian: But do you? You think you do but you do not. You are here because you were sent here, you were told to come here and you obeyed. [Laughs] It is, of course, the way of all things. You see, there is only one constant, one universal, it is the only real truth: causality. Action. Reaction. Cause and effect.
Morpheus: Everything begins with choice.
Merovingian: No. Wrong. Choice is an illusion, created between those with power, and those without. Look there, at that woman. My God, just look at her. Affecting everyone around her, so obvious, so bourgeois, so boring. But wait… Watch – you see, I have sent her dessert, a very special dessert. I wrote it myself. It starts so simply, each line of the program creating a new effect, just like poetry. First, a rush… heat… her heart flutters. You can see it, Neo, yes? She does not understand why – is it the wine? No. What is it then, what is the reason? And soon it does not matter, soon the why and the reason are gone, and all that matters is the feeling itself. This is the nature of the universe. We struggle against it, we fight to deny it, but it is of course pretense, it is a lie. Beneath our poised appearance, the truth is we are completely out of control. Causality. There is no escape from it, we are forever slaves to it. Our only hope, our only peace is to understand it, to understand the 
why.’ 
Why’ is what separates us from them, you from me. 
Why’ is the only real social power, without it you are powerless. And this is how you come to me, without 
why, without power. Another link in the chain. But fear not, since I have seen how good you are at following orders, I will tell you what to do next. Run back, and give the fortune teller this message: Her time is almost up. Now I have some real business to do, I will say adieu and goodbye.
Neo: This isn’t over.
Merovingian: Oh yes, it is. The Keymaker is mine and I see no reason why I should give him up. No reason at all.
Persephone: Where are you going?
Merovingian: Please, ma chérie, I’ve told you, we are all victims of causality. I drink too much wine, I must take a piss. Cause and effect. Au revoir.

Trinity: Touch me, and that hand will never touch anything again.
Neo: Well, that didn’t go so well.
Morpheus: Are you certain the Oracle didn’t say anything else?
Neo: Yes.
Trinity: Maybe we did something wrong.
Neo: Or didn’t do something.
Morpheus: No, what happened happened and couldn’t have happened any other way.
Neo: How do you know?
Morpheus: We are still alive.
Persephone: If you want the Keymaker, follow me. [to man in washroom] Get out! I’m so sick of his bullshit. On and on, pompous prick. A long time ago, when we first came here, it was so different. He was so different. He was like you. I’ll give you what you want. But you have to give me something.
Neo: What?
Persephone: A kiss.
Trinity: Excuse me?
Persephone: I want you to kiss me as if you were kissing her.
Neo: Why?
Persephone: You love her. She loves you. It’s all over you both. A long time ago, I knew what that felt like. I want to remember it. I want to sample it. That’s all, just a sample.
Trinity: Why don’t you sample this instead?
Morpheus: Trinity.
Persephone: Such emotion over something so small. It’s just a kiss.
Neo: Why should we trust you?
Persephone: If I don’t deliver you to the Keymaker, she can kill me.
Neo: All right.
Persephone: But you have to make me believe I am her.
Neo: All right.
Persephone: Terrible. Forget it.
Neo: Wait. Okay.
Persephone: Ahh, yes. That’s it. I envy you. But such a thing is not meant to last. Come with me.

Link: Not again!
Persephone: It’s all right, boys, they’re with me. These fellas work for my husband, they do his dirty work. They’re very good, very loyal. Aren’t you, boys?
Cain and Abel: Yes, Mistress.
Persephone: They come from a much older version of the Matrix, but like so many back then, they caused more problems than they solved. My husband saved them because they’re notoriously difficult to terminate. How many people keep silver bullets in their gun? You can either run to the restaurant and tell my husband what I have done, or you can stay there and die. He’s in the ladies’ room… [to Neb crew] Hurry.

Neo: My name is Neo.
Keymaker: Yes, I’m the Keymaker, I’ve been waiting for you.

Merovingian: Oh God, my God, Persephone how could you do this, you betrayed me [speaking French]!
Persephone: Cause and effect, my love.
Merovingian: Cause? There is no cause for this, what cause?
Persephone: What cause? How about the lipstick you’re still wearing?
Merovingian: Lipstick? Lipstick? What craziness you are talking about woman, there is no lipstick.
Persephone: She wasn’t kissing your face, my love.
Merovingian: Ai-ai-ai-ai-ai-ai, woman, this is nothing, c’est rien, c’est rien du tout. It’s a game, it is only a game.
Persephone: So is this. Have fun.
Merovingian: All right. All right. Let us find out where this goes. You two, get the Keymaker.
Trinity: That’s a nice trick.
Keymaker: I cannot go back.
Neo: I’ll handle them.
Merovingian: Handle us? You’ll handle us? You know, your predecessors had much more respect.
Merovingian: Okay, you have some skill. Kill him.
Merovingian: You see, he’s just a man.
Merovingian: Damn it, woman, you will be the end of me. Mark my words, boy, and mark them well. I have survived your predecessors, and I will survive you!

Trinity: Where are you going?
Keymaker: Another way, always another way. Close it, quick.

Twin 1: Could we move along?
Keymaker: Run!
Twin 2: Step away from the door.
Twin 2: We owe you for that.
Twin 1: Just like new.
Twin 2: Drop your weapon.

Morpheus: Stay with him.
Trinity: What about Neo?
Morpheus: He can handle himself.
Trinity: Get in the back.

Neo: Oh shit.
Link: Operator.
Neo: Link, where am I?
Link: You’re not gonna believe this, but you’re all the way up in the mountains.
Neo: Really.
Link: Yeah, it’s gonna take me a while to get up an exit. Oh shit.
Neo: What?
Link: Those Twin things are after Morpheus and Trinity, and I don’t have a way to get them out.
Neo: Where are they?
Link: Middle of the City, 500 miles due south.

Link: Operator.
Morpheus: Get us out of here, Link.
Link: That won’t be easy, sir.
Morpheus: I know. We’re inside the core network.
Link: Yes sir. The only exit I got near you is the Winsor[?] overpass.
Morpheus: Off the freeway?
Link: Yes, sir.
Morpheus: Fine, we’ll make it.
Link: Sir, I think I should say… oh shit, look out behind you!
Link: Incoming fire!
Morpheus: Down!
Trinity: Hold on!
Link: Oh no, this is getting real ugly real fast.
Morpheus: Are you watching this, Link?
Link: Yes sir, there’s an all-points on you, I make 8 units headed your way.
Morpheus: Any suggestions?
Link: Turn right.
Morpheus: Right, now!
Link: Now straight here, go through the next branch, you’ll hit a connecting tunnel to the 101.
Morpheus: Got it.
Link: Sir, are you sure about this? The freeway, I mean. It’s dangerous, in 14 years of operating, I’ve never seen…
Morpheus: Link, what did I tell you?
Link: Yes sir, I do, sir, Winsor[?] overpass, I’ll be ready for you.
Morpheus: Good man.
Trinity: You always told me to stay off the freeway.
Morpheus: Yes, that’s true.
Trinity: You said it was suicide.
Morpheus: Then let us hope that I was wrong.

Link: Operator.
Niobe: Link, it’s Niobe. We’ve been sent to bring you in. I need to talk to Morpheus.
Link: Believe me, Niobe, he needs you.
Niobe: Where is he?
Link: Just follow the sirens.

Cop: They’re approaching…
Agent Thompson: We have them now.
Agent Johnson: The exile is the primary target.

Morpheus: Move!
Twin 1: We are getting aggravated.
Twin 2: Yes we are

Morpheus: Trinity! Get him out of here.
Trinity: Come on!

Trinity: Morpheus.
Link: He’s okay, keep moving.
Trinity: Let’s go.
Trinity: I need a download to hotwire a motorcycle.
Link: Not a problem, one crash course in motorcycle…
Trinity: Wait. Cancel that. [to Keymaker] You are handy. Jump on.

Agent Johnson: She means nothing.
Agent Thompson: Find the exile.
Agent Johnson: We have them.
Cop from Speaker: One Adam Twelve, please respond.

Morpheus: Get down.

Niobe: Gotcha.
Link: She’s good.
Agent: You are no longer necessary.
Keymaker: We do only what we’re meant to do.
Agent: Then you are meant for one more thing. Deletion.

Niobe: Go kick his ass.

Morpheus: Neo, if you’re out there, I could use some help.
Link: What is that?
Link: Yess!

[Zion Man] Sir. We have confirmation from the Icarus. The first two ships are in position for the counterattack.
Lock: Good. Any change?
[Zion Woman] Looks like they hit some iron ore here, slowed them down a little.
Lock: How much?
[Zion Woman]: An hour, maybe.
Lock: That’d give them a little over 9 hours.
[Zion Woman]: Yes sir.
Keymaker: There’s a building. Inside this building there’s a level where no elevator can go, and no stair can reach. This level is filled with doors. These doors lead to many places, hidden places, but one door is special. One door leads to the Source. This building is protected by a very secure system. Every alarm triggers the bomb.
Vector: Bomb? Did he say bomb?
Keymaker: But like all systems it has a weakness. The system is based on the rules of a building. One system built on another.
Morpheus: Electricity.
Keymaker: If one fails, so must the other.
Niobe: No electricity, no alarms.
Ghost: But you’d have to take out a whole city block to kill the power to a building like that.
Keymaker: Not one, 27.
Vector: 27 blocks?
Keymaker: There is a power station. it must be destroyed.
Niobe: There must be some kind of failsafe.
Keymaker: Yes, there is an emergency system. The core network of the grid must be accessed. The emergency system must be deactivated.
Soren: Then what do you need us for? Neo could take ’em both out easier than we could.
Keymaker: There’s no time.
Niobe: Why?
Keymaker: Once the door is unprotected, the connection will be severed. But another connection must first be made.
Ghost: How long will that take?
Keymaker: Exactly 314 seconds.
Soren: Just over 5 minutes.
Keymaker: That is the length and breadth of the window. Only The One can open the door, and only during that window can the door be opened.
Niobe: How do you know all this?
Keymaker: I know because I must know. It’s my purpose. It’s the reason I’m here. Same reason we’re all here.

Trinity: Neo, I know something’s wrong. You don’t have to tell me. I just want you to know that I’m here.

Keymaker: All must be done as one.

Link: Can’t hurt.

Keymaker: If one fails, all fail.

Morpheus: At midnight, there’s a shift change in the security of both buildings. At midnight, we will strike.

Guard 1: Hey! You count sheep at home.
Guard 2: Why, I get paid to count ’em here.

Jax: Okay, they’re inside.
Axel: How much time?
Jax: 12 minutes.
Axel: Oh shit!

Morpheus: All of our lives we have fought this war. Tonight I believe we can end it. Tonight is not an accident. There are no accidents. We have not come here by chance. I do not believe in chance when I see 3 objectives, 3 captains, 3 ships. I do not see coincidence, I see providence, I see purpose. I believe it is our fate to be here. It is our destiny. I believe this night holds for each and every one of us the very meaning of our lives.

Neo: I want to ask you to do something, but I don’t know how.
Trinity: I promise you, if I can, I will.
Neo: What if I asked you to stay out of this, no matter what. To stay out of the matrix?
Trinity: Why?
Neo: Please.
Trinity: All right.

Morpheus: What is it, Niobe?
Niobe: I can’t help it, Morpheus, I can’t help thinking – what if you’re wrong. What if all this – the prophecy, everything – is bullshit.
Morpheus: Then tomorrow we may all be dead, but how would that be different from any other day? This is a war, and we are soldiers. Death can come for us at any time, in any place.

Axel: Incoming. Incoming! Incoming!

Morpheus: Now consider the alternative. What if I am right? What if the prophecy is true? What if tomorrow the war could be over. Isn’t that worth fighting for? Isn’t that worth dying for?

Soren: Time?
Vector: 3 minutes.
Binary: Almost there.

Keymaker: It is time.

Trinity: Find the others.
Link: Got Niobe right there, they’re already out of the station.
Trinity: What about Soren?
Link: There, they’re still inside, but…
Trinity: They’re not moving.

Morpheus: That’s it, let’s go.

Trinity: Call Neo now.
Link: Lost them. They’re inside the portal.
Trinity: What about the grid?
Link: Everything’s still operational. Emergency system’s already rerouting power. Jesus. As soon as they open that door, it’s all over.
Trinity: The hell it is.
Link: What are you… Trinity?
Trinity: I will not stand here and do nothing. I will not wait here to watch them die.
Link: Trinity, we’re talking less then 5 minutes here.
Trinity: In 5 minutes, I’ll tear that whole goddamn building down.

Neo: How much further?
Keymaker: Here, just here.
Smith: I’m sorry, this is a dead end.

Link: It’s gotta be the ugliest hack I have ever done. That’s as close as I can get ya. You better grow some wings.
Link: Operator.
Trinity: I’m in.
Link: Keep moving, 65th floor.

Smith: you look surprised to see me again, Mr. Anderson, that’s the difference between us. I’ve been expecting you.
Neo: What do you want, Smith?
Smith: Oh you haven’t figured that out? Still using all the muscles except the one that matters. I want exactly what you want. I want everything.
Morpheus: Would that include a bullet from this gun?
Smith: Go ahead, shoot. The best thing about being me – there’s so many me.

Computer Room Technician: Christ, what happened in here?
Computer Room Guard: Hold it right there, little lady.

Smith: If you can’t beat us, join us.
Neo: Morpheus!

Link: Still no sight of them. I don’t know what they’re doing, but they only got 2 minutes left.

Link: One minute!
Trinity: Come on. Come on. Please.

Smiths: Kill them.

Link: They’re in. I don’t believe it.

Keymaker: It was meant to be. Morpheus. That door will take you home. [to Neo] You’ll know which door. Hurry, Neo.

Link: Trinity, I got some serious activity headed your way.

Link: We got a serious situation, sir.
Morpheus: Oh, no.

Architect: Hello, Neo.
Neo: Who are you?
Architect: I am the Architect. I created the Matrix. I’ve been waiting for you.
You have many questions, and though the process has altered your consciousness, you remain irrevocably human. Ergo some of my answers you will understand, and some of them you will not. Concordantly, while your first question may be the most pertinent, you may or may not realize it is also the most irrelevant.
Neo: Why am I here?
Architect: Your life is the sum of a remainder of an unbalanced equation inherent to the programming of the Matrix. You are the eventuality of an anomaly, which, despite my sincerest efforts, I have been unable to eliminate from what is otherwise a harmony of mathematical precision. While it remains a burden assiduously avoided, it is not unexpected, and thus not beyond a measure of control. Which has led you, inexorably… here.
Neo: You haven’t answered my question.
Architect: Quite right. Interesting. That was quicker than the others.
TV Neos: Others? How many others? What others? Answer my question!
Architect: The Matrix is older than you know. I prefer counting from the emergence of one integral anomaly to the emergence of the next, in which case this is the 6th version.
TV Neos: 5 One’s before me? 4 3 2 What are you talking about?
Neo: There are only two possible explanations, either no one told me, or no one knows.
Architect: Precisely. As you are undoubtedly gathering, the anomaly is systemic – creating fluctuations in even the most simplistic equations.
TV Neos: You can’t control me! I’m gonna smash you to bits! I’ll fuckin’ kill you!
Neo: Choice. The problem is choice.
Architect: The first Matrix I designed was quite naturally perfect, it was a work of art – flawless, sublime. A triumph equalled only by its monumental failure. The inevitability of its doom is apparent to me now as a consequence of the imperfection inherent in every human being. Thus, I redesigned it based on your history to more accurately reflect the varying grotesqueries of your nature. However, I was again frustrated by failure. I have since come to understand that the answer eluded me because it required a lesser mind, or perhaps a mind less bound by the parameters of perfection. Thus the answer was stumbled upon by another – an intuitive program, initially created to investigate certain aspects of the human psyche. If I am the father of the matrix, she would undoubtedly be its mother.
Neo: The Oracle.
Architect: Please. As I was saying, she stumbled upon a solution whereby nearly 99% of all test subjects accepted the program, as long as they were given a choice, even if they were only aware of the choice at a near unconscious level. While this answer functioned, it was obviously fundamentally flawed, thus creating the otherwise contradictory systemic anomaly, that if left unchecked might threaten the system itself. Ergo those that refused the program, while a minority, if unchecked, would constitute an escalating probablility of disaster.
Neo: This is about Zion.
Architect: You are here because Zion is about to be destroyed – its every living inhabitant terminated, its entire existence eradicated.
Neo: Bullshit.
TV Neos: Bullshit!
Architect: Denial is the most predictable of all human responses, but rest assured, this will be the sixth time we have destroyed it, and we have become exceedingly efficient at it.
Architect: The function of the One is now to return to the Source, allowing a temporary dissemination of the code you carry, reinserting the prime program. After which, you will be required to select from the Matrix 23 individuals – 16 female, 7 male – to rebuild Zion. Failure to comply with this process will result in a cataclysmic system crash, killing everyone connected to the Matrix, which, coupled with the extermination of Zion, will ultimately result in the extinction of the entire human race.
Neo: You won’t let it happen. You can’t. You need human beings to survive.
Architect: There are levels of survival we are prepared to accept. However, the relevant issue is whether or not you are ready to accept the responsibility of the death of every human being on this world. It is interesting, reading your reactions. Your 5 predecessors were, by design, based on a similar predication – a contingent affirmation that was meant to create a profound attachment to the rest of your species, facilitating the function of the One. While the others experienced this in a very general way, your experience is far more specific – vis a vis love.
Neo: Trinity.
Architect: Apropos, she entered the Matrix to save your life, at the cost of her own.
Neo: No.
Architect: Which brings us at last to the moment of truth, wherein the fundamental flaw is ultimately expressed, and the anomaly revealed as both beginning and end. There are two doors. The door to your right leads to the Source, and the salvation of Zion. The door to your left leads back to the Matrix, to her and to the end of your species. As you adequately put, the problem is choice. But we already know what you are going to do, don’t we? Already, I can see the chain reaction – the chemical precursors that signal the onset of an emotion, designed specifically to overwhelm logic and reason – an emotion that is already blinding you from the simple and obvious truth. She is going to die, and there is nothing you can do to stop it.
Architect: Hope. It is the quintessential human delusion, simultaneously the source of your greatest strength and your greatest weakness.
Neo: If I were you, I would hope that we don’t meet again.
Architect: We won’t.

Morpheus: What is that?
Link: Whatever it is, it’s moving faster than anything I’ve ever seen.
Link: Shit, he caught her!

Trinity: Neo, I had to.
Neo: I know. The bullet is still inside.
Morpheus: Trinity, don’t you quit on me now.
Trinity: I’m sorry.
Neo: Trinity. Trinity, I know you can hear me. I’m not letting go. I can’t. I love you too damn much.
Link: I can’t take this.
Trinity: I guess that makes us even.

Morpheus: I don’t understand it. Everything was done as it was supposed to be done. Once The One reaches the Source, the war should be over.
Neo: In 24 hours it will be.
Morpheus: What?
Neo: If we don’t do something in 24 hours, Zion will be destroyed.
Link: What?
Trinity: How do you know that?
Neo: I was told it would happen.
Morpheus: By whom?
Neo: It doesn’t matter. I believed him.
Morpheus: That’s impossible, the prophecy tells us…
Neo: It was a lie, Morpheus. The prophecy was a lie. The One was never meant to end anything. It was all another system of control.
Morpheus: I don’t believe that.
Neo: But you said it yourself – how can the prophecy be true if the war isn’t over? I’m sorry. I know it isn’t easy to hear, but I swear to you it’s the truth.
Trinity: What are we gonna do?
Neo: I don’t know.
Link: Oh no.

Link: What are they doing?
Trinity: They’re just out of EMP range.
Neo: It’s a bomb. We have to get out of here. Now.

Morpheus: I have dreamed a dream, and now that dream has gone from me.

Link: Here they come. Let’s go, Morpheus.
Neo: We won’t make it.
Trinity: We have to try. Come on.
Neo: Something’s different. I can feel them.

Trinity: Neo!
Morpheus: What happened?
Trinity: I don’t know.
Link: It’s the Hammer.

Maggie: He’s in some kind of coma, but his vitals are stable. What about you?
Trinity: I’m fine.
Maggie: You could use some rest.
Trinity: No, I’m gonna stay with him.

Roland: Lock was right. He guessed that the machines would cut off the mainlines in and out of Zion. He thought a counterattck might suprise them. It sounded good, we figured we had a shot, until someone screwed it up.
Colt: An EMP was triggered before we could get in position.
Mauser: 5 ships were instantly down.
Colt: When the machines broke through, it wasn’t a battle, it was a slaughter.
Link: Was it an accident, some sort of malfunction?
AK: No one knows.
Roland: Someone does.
Morpheus: Who?
Roland: Once the machines were done with us, they started digging again. We made a quick pass to look for survivors.
Link: You found one?
Roland: Only one.

To be concluded.

MATRIX REVOLUTIONS

(The Hammer: main deck)
AK: I got nothing, sir. No sign of Niobe or Ghost. Nothin’ but blue pills.
Mauser: Should we jack in and try to contact them?
Roland: It wouldn’t matter. My gut says they’re down.
Mauser: Then we should start back.
Roland: No. If that ship can still fly, then we need it.
Mauser: I was afraid you were gonna say that.
Roland: Search every pipe, every hole, every crack we know. Sweep as wide as possible, as fast as possible.
AK: Captain, these lines are crawling with calamari.
Roland: Then the sooner we find them the better.

(The Hammer: infirmary)
Maggie: Thought you could use something to eat.
Trinity: Thank you.
Maggie: Any change?
Trinity: No. How’s he?
Maggie: He’s going to be fine, at least until he wakes up.
Trinity: What do you mean?
Maggie: The Captain has some questions for him. He better have some good answers. You see these cuts? I think they’re self-inflicted.
Trinity: Why?
Maggie: VDTs, maybe. I don’t know. But like I said, the answer had better be good.

(The Hammer: main deck)
Morpheus: Roland. I’d like to run another search through the Matrix.
Roland: For what?
Morpheus: For Neo.
AK: How can he be in the Matrix, sir? He’s not plugged in.
Morpheus: Please, for me.

(The Hammer: infirmary)
Maggie: This is what keeps bothering me.
Trinity: What?
Maggie: His neural patterns don’t read like someone who’s in a coma. The strange thing is, I see these patterns all the time.
Trinity: Where?
Maggie: On someone jacked in.

(The Hammer: main deck)
AK: The big bubkis. Nada. He’s not in there.
[Colt]: Sir, we’ve got the projections!
Roland: How long?
[Colt]: Based on the point of entry and the [past] speed it looks like the machines will be inside of Zion in just under 20 hours.
AK: Jesus H. Christ.
Roland: All right, let’s move with a purpose. AK, get upstairs, I want you on holographics. [Colt,] Mauser, I want forward and aft guns manned at all times. And make sure we are running on as few pads as possible.
[Colt]: Yes, sir.
Link: Hey. Hey! We got a call. Operator. It’s Seraph.
Seraph: I bring word from the Oracle. You must come at once.

(Mobil Ave. train station)
Sati: Good morning.
Neo: Who are you?
Sati: My name is Sati. Your name is Neo. My papa says you’re not supposed to be here. He says you must be lost. Are you lost, Neo?
Neo: Where am I?
Sati: This is the train station.
Neo: This isn’t the Matrix?
Sati: That’s where the Train goes. That’s where we’re going. But you cannot go with us.
Neo: Why not?
Sati: He won’t let you.
Neo: Who won’t let me?
Sati: The Trainman. *whispers* I don’t like him, but my Papa says we have to do what the Trainman says or he will leave us here for ever and ever.

(Oracle’s apartment)
Oracle: Morpheus, Trinity. Thank you for coming. One thing I’ve learned in all my years is that nothing ever works out just the way you want it to.
Trinity: Who are you?
Oracle: I’m the Oracle. I wish there was an easier way to get through this but there ain’t. I’m sorry this had to happen. I’m sorry I couldn’t be sitting here like you remember me. But it wasn’t meant to be.
Trinity: What happened?
Oracle: I made a choice, and that choice cost me more than I wanted it to.
Morpheus: What choice?
Oracle: To help you to guide Neo. Now, since the real test for any choice is having to make the same choice again, knowing full well what it might cost – I guess I feel pretty good about that choice, ’cause here I am, at it again.
Trinity: Do you know what happened to Neo?
Oracle: Yes. He’s trapped in a place between this world and the machine world. The link is controlled by a program called the Trainman. He uses it to smuggle programs in and out of the Matrix. If he finds out where Neo is before you get to him, then I’m afraid our choices are going to become difficult.
Trinity: Why?
Oracle: Because of who the Trainman works for.
Morpheus: The Merovingian.
Oracle: He has placed a bounty on your lives. You must be careful at all times. Seraph knows how to find the Trainman, he will go with you. For years, he has protected me. I hope he can do the same for you.
Seraph: Please, come.
Morpheus: Oracle.
Oracle: I know, Morpheus. I can see you’re filled with doubt, clouded by uncertainty.
Morpheus: After everything that’s happened, how can you expect me to believe you?
Oracle: I don’t. I expect just what I’ve always expected. For you to make up your own damn mind. Believe me or don’t. All I can really tell you is your friend’s in trouble and he needs your help. He needs all our help.

(Mobil Ave. train station)
Sati: Are you from the Matrix?
Neo: Yes. No. I mean, I was.
Sati: Why did you leave?
Neo: I had to.
Sati: I had to leave my home too.
Rama-Kandra: Sati! Come here, darling. Leave the poor man in peace.
Sati: Yes, papa.

Rama-Kandra: I’m sorry, she is still very curious.
Neo: I know you.
Rama-Kandra: Yes, in the restaurant at the Frenchman’s. I am Rama-Kandra. This is my wife Kamala, my daughter Sati. We are most honoured to meet you.
Neo: You’re programs.
Rama-Kandra: Oh, yes. I’m the power plant systems manager for recycling operations. My wife is an interactive software programmer, she is highly creative.
Kamala: What are you doing here? You do not belong here.
Rama-Kandra: Kamala! Goodness, I apologize. My wife can be very direct.
Neo: It’s okay. I don’t have an answer. I don’t even know where ‘here’ is.
Rama-Kandra: This place is nowhere. It is between your world and our world.
Neo: Who’s the Trainman?
Rama-Kandra: He works for the Frenchman.
Neo: Why’d I know you were going to say that?
Rama-Kandra: The Frenchman does not forget and he does not forgive.
Neo: You know him?
Rama-Kandra: I know only what I need to know. I know that if you want to take something from our world into your world that does not belong there, you must go to the Frenchman.
Neo: Is that what you’re doing here?
Kamala: Rama, please!
Rama-Kandra: I do not want to be cruel, Kamala. He may never see another face for the rest of his life.
Neo: I’m sorry. You don’t have to answer that question.
Rama-Kandra: No. I don’t mind. The answer is simple. I love my daughter very much. I find her to be the most beautiful thing I’ve ever seen. But where we are from, that is not enough. Every program that is created must have a purpose; if it does not, it is deleted. I went to the Frenchman to save my daughter. You do not understand.
Neo: I just have never…
Rama-Kandra: …heard a program speak of love?
Neo: It’s a… human emotion.
Rama-Kandra: No, it is a word. What matters is the connection the word implies. I see that you are in love. Can you tell me what you would give to hold on to that connection?
Neo: Anything.
Rama-Kandra: Then perhaps the reason you’re here is not so different from the reason I’m here.

(Matrix: inside a subway train)
Seraph: That’s him.
Trainman: Get away! Get away from me!
Seraph: We don’t want trouble.
Trainman: Get away from me!
Seraph: We need your help.
Trainman: I can’t help you. No one can help you!

(Matrix: a subway stop [Stellma?])
{the Trainman prepares to jump across the tracks in the path of the LOOP train}
Seraph: Oh, no.
{the train passes, the Trainman is gone}
Seraph: Damn it.

(Mobil Ave. train station)
Neo: When is the train due?
Rama-Kandra: It’s already late. It’s not like the Trainman to be late.
Neo: You think it has something to do with me?
Rama-Kandra: I cannot say. Who knows such things? Only the Oracle.
Neo: You know the Oracle?
Rama-Kandra: Everyone knows the Oracle. I consulted with her before I met with the Frenchman. She promised she would look after Sati after we said goodbye.
Neo: Goodbye? You’re not staying with her?
Rama-Kandra: It is not possible. Our arrangement with the Frenchman was for our daughter only. My wife and I must return to our world.
Neo: Why?
Rama-Kandra: That is our karma.
Neo: You believe in karma?
Rama-Kandra: Karma’s a word. Like ‘love.’ A way of saying ‘what I am here to do.’ I do not resent my karma – I’m grateful for it. Grateful for my wonderful wife, for my beautiful daughter. They are gifts. And so I do what I must do to honour them.
Sati: Papa, the train!
Rama-Kandra: Yes! Get your bags, quickly!
Neo: Can I carry that for you?
Rama-Kandra: All right.

Trainman: Hurry it up, I’m late!
{Kamala and Sati pass, Trainman stops Neo}
Trainman: Who are you?
Rama-Kandra: He’s a friend.
Kamala: Rama!
Trainman: I know you. So that’s what they wanted.
Neo: I need to get back. I’ll pay you anything you want.
Trainman: Oh?
Neo: One way or another I’m getting on this train
Trainman: Oh, no, no, no. You’re gonna stay right here until the Merovingian says different. If I know him, you’re gonna be here for a long, long time.
Neo: I don’t want to hurt you.
Trainman: You don’t get it. I built this place. Down here I make the rules. Down here I make the threats. Down here, I’m God. *to Rama-Kandra* Get on the train, or you’ll stay here with him.

(Matrix: inside a car)
Seraph: We should return to the Oracle. She’ll know what to do.
Trinity: No. We know what has to be done.

(Mobil Ave. train station)
Neo: Shit.

(Hel Club garage)
Q-Ball Gang Member #1: You’ve got to be kidding…
Q-Ball Gang Member #2: Holy shit, it’s Wingless.
Q-Ball Gang Member #1: I get it. You must be ready to die.
Seraph: I need to speak with him.
Q-Ball Gang Member #1: The only way you’re getting through this door is over my big dead ass.
Seraph: So be it.

(Hel Club elevator)
Seraph: There are no weapons allowed in the club. At the bottom of this elevator, there is a coat check girl. And if we’re lucky, one man for checking guns.
Trinity: And if we’re unlucky?
Seraph: There will be many men.

(Hel Club entrance)
Coat Check Girl: Can I take your… oh my God.

{Hel Club shootout}

(Hel Club – VIP lounge)
Merovingian: What in the hell? *laughs* I don’t believe this.
Merovingian: *to the DJ* Hey. Hey! *to Seraph* The prodigal child returns. L’ange sans ailes (Trans: The angel without wings). Are you here for the bounty, Seraph? *laughs heartily* Tell me, how many bullets are there in those guns? I don’t know, but I don’t think you have enough.
Seraph: We only want to talk.
Merovingian: Oh yes, I’m sure you do, you have fought through hell to do so, yes? I’ll tell you what I’ll do. Put down the guns and I will promise you safe passage out of here.
Seraph: All three of us.
Merovingian: Oh yes, yes. Of course.

{Trinity, Seraph, and Morpheus put down the guns and are escorted up the stairs}

Merovingian: *laughs* Quelle bonne surprise, n’est pas? (Trans: What a fine surprise, isn’t it?) Who could’ve guessed we’d all be seeing each other so soon after our last meeting? A fate too kind. And since you, my little Judas, have […] here, I can only surmise that the fortune teller has found herself another shell? Disappointing, but not unexpected. I do hope, however, she has the good manners to learn her lesson, and to remember that there is no action without consequence. And if you take something from me you will pay the price.
Seraph: You know why we are here.
Merovingian: *laughs* Come, now. What kind of question is this? Of course I know. It’s my business to know. Some might think this a strange coincidence, but I do not. I am curious, though, as to how it actually happened. Do you know?
Trinity: No.
Merovingian: No? I didn’t think so. But it is always best to ask.
Morpheus: We want to make a deal.
Merovingian: *laughs* Always straight to business, huh, Morpheus? Okay. I have something you want. To make a deal, you must have something I want, yes? And it so happens there is something I want. Something I’ve wanted ever since I first came here. It is said they cannot be taken, they can only be given.
Morpheus: What?
Merovingian: The eyes of the Oracle. *laughs*
Merovingian: I have told you before, there’s no escaping the nature of the universe. It is that nature that has again brought you to me. Where some see coincidence, I see consequence. Where others see chance, I see cost. Bring me the eyes of the Oracle, and I will give you back your saviour. That seems a particularly fair and reasonable deal to me. Yes, no?
Trinity: I don’t have time for this shit.

{Hel Club upstairs fight}

Trinity: You want to make a deal, how about this? You give me Neo, or we all die right here, right now.
Merovingian: Interesting deal. You are really ready to die for this man?
Trinity: *cocks gun* Believe it.
Perseph: She’ll do it. If she has to, she’ll kill every one of us. She’s in love.
Merovingian: It is remarkable how similar the pattern of love is to the pattern of insanity.
Trinity: Time’s up. What’s it gonna be, Merv?

(Mobil Ave train station)
Neo: Ok. You got yourself into this. You can get yourself out.

(Matrix: inside a car)
Morpheus: Are you ready for us?
Link: Almost, sir. They got some pretty ancient hacks here, we’re working on it. Did you find Neo?
Morpheus: Can’t you see him?
Link: No, sir. We were reading something but I couldn’t tell what it was.
Neo: I can’t leave yet.
{Trinity looks over at him}
Neo: I have to see her.
Trinity: Now?
Neo: This is my last chance.

(Oracle’s kitchen)
Oracle: That’s it. That’s the secret. You’ve got to use your hands.
Sati: Why?
Oracle: Cookies need love like everything does.
Sati: Neo!
Oracle: I was hoping to have these done before you got here. Oh well. Sati, honey, I think it’s time for a tasting. Take the bowl to Seraph and find out if they’re ready.
Sati: Okay. *to Neo* I’m glad you got out.
Neo: Me too.
Oracle: So, do you recognize me?
Neo: A part of you.
Oracle: Yeah, that’s how it works. Some bits you lose, some bits you keep. I don’t yet recognize my face in the mirror, but… I still love candy. *offers Neo a piece of red candy*
Neo: No, thank you.
Oracle: Remember what you were like when you first walked through my door, jittery as a junebug? And now just look at you. You sure did surprise me, Neo, and you still do.
Neo: You gave me a few surprises, too.
Oracle: I hope I helped.
Neo: You helped me to get here, but my question is why? Where does this go? Where does it end?
Oracle: I don’t know.
Neo: You don’t know or you won’t tell me?
Oracle: I told you before. No one can see beyond a choice they don’t understand, and I mean no one.
Neo: What choice?
Oracle: It doesn’t matter. It’s my choice. I have mine to make, same as you have yours.
Neo: Does that include what things to tell me and what not to tell me?
Oracle: Of course not.
Neo: Then why didn’t you tell me about the Architect? Why didn’t you tell me about Zion, the Ones before me – why didn’t you tell me the truth?
Oracle: Because it wasn’t time for you to know.
Neo: Who decided it wasn’t time?
Oracle: You know who. *She points at the Temet Nosce sign above the door*
Neo: I did. *Oracle nods* Then I think it’s time for me to know a few more things.
Oracle: So do I.
Neo: Tell me how I separated my mind from my body without jacking in. Tell me how I stopped four sentinels by thinking it. Tell me just what the hell is happening to me.
Oracle: The power of the One extends beyond this world. It reaches from here all the way back to where it came from.
Neo: Where?
Oracle: The Source. That’s what you felt when you touched those Sentinels. But you weren’t ready for it. You should be dead, but apparently you weren’t ready for that, either.
Neo: The Architect told me that if I didn’t return to the Source, Zion would be destroyed by midnight tonight.
Oracle: *rolls eyes* Please… You and I may not be able to see beyond our own choices, but that man can’t see past any choices.
Neo: Why not?
Oracle: He doesn’t understand them – he can’t. To him they are variables in an equation. One at a time each variable must be solved and countered. That’s his purpose: to balance an equation.
Neo: What’s your purpose?
Oracle: To unbalance it.
Neo: Why? What do you want?
Oracle: I want the same thing you want, Neo. And I am willing to go as far as you are to get it.
Neo: The end of the war. *Oracle nods* Is it going to end?
Oracle: One way, or another.
Neo: Can Zion be saved?
Oracle: I’m sorry, I don’t have the answer to that question, but if there’s an answer, there’s only one place you’re going to find it.
Neo: Where?
Oracle: You know where. And if you can’t find the answer, then I’m afraid there may be no tomorow for any of us.
Neo: What does that mean?
Oracle: Everything that has a beginning has an end. I see the end coming. I see the darkness spreading. I see death. And you are all that stands in his way.
Neo: Smith.
Oracle: *nods* Very soon he’s going to have the power to destroy this world, but I believe he won’t stop there; he can’t. He won’t stop until there’s nothing left at all.
Neo: What is he?
Oracle: He is you. Your opposite, your negative, the result of the equation trying to balance itself out.
Neo: What if I can’t stop him?
Oracle: One way or another, Neo, this war is going to end. Tonight, the future of both worlds will be in your hands… or in his.

(The core of the Hammer)
Trinity: How are you feeling? Are you all right?
Neo: I need time.
Roland: That figures.
Maggie: Captain Roland!
Roland: What’s up, Maggie?
Maggie: It’s Bane. he’s conscious.
Roland: Good. Maybe he’s got some answers.

(Oracle’s kitchen)
Oracle: Mmm, I love that smell. I sure am gonna miss it.
Seraph: Oracle.
Oracle: I know, I know. Sati, honey! Take a few cookies and go with Seraph.
Sati: Can I come back? I would like to come back!
Oracle: I would like that too.
Sati: So I’ll see you tomorrow.
Oracle: I hope so, honey, I hope so.

(Matrix: inside the building on the floor of the Oracle’s apartment)
Sati: I’m scared, Seraph.
Seraph: Come.

Sati: He’s following us.

Smith: Well, well, it’s been a long time. I remember chasing you was like chasing a ghost.
Seraph: I have beaten you before.
Smith: That’s true, but as you can see, things are a little different now. *to Sati* And you must be the last exile.
Sati: The Oracle told me about you.
Smith: Really? And what did she say about me?
Sati: That you’re a bad man.
Smith: Oh, I’m not so bad once you get to know me.

(Oracle’s kitchen)
Smith: The great and powerful Oracle. We meet at last. I suppose you’ve been expecting me, right? The all-knowing Oracle is never surprised. How can she be, she knows everything. But If that’s true, then why is she here? If she knew I was coming, why didn’t she leave? *sweeps plate of cookies off table* Maybe you knew I was going to do that, maybe you didn’t. If you did, that means you baked those cookies and set that plate right there deliberately, purposefully. Which means you’re sitting there also deliberately, purposefully.
Oracle: What did you do with Sati?
Smith/Sati: Cookies need love like everything does.
Smiths: *laugh*
Oracle: You are a bastard.
Smith: You would know, Mom.
Oracle: Do what you’re here to do.
Smith: Yes, ma’am.
Smith/Oracle: *laughs maniacally*

(The Hammer: mess hall)
Bane: I really wish I could help, but I just… I don’t remember any of it.
Roland: What about the cuts on your arms? Those cuts are more than one day old.
Bane: Yeah, definitely. You’re right about that, sir. They look like they might be self-inflicted. Why would I do something like that to myself? Unless, of course, I wasn’t myself… but… if I’m not me, then who am I?
Roland: Has this man been tested for VDTs?
Maggie: Yes, sir, it was negative. But he is showing a lot of unusual neural activity. Some cross-synaptic firing as well as signs of recent trauma, with fresh fibrotic scarring throughout the cortex.
Roland: I want the truth, I don’t care what it takes. Make him remember.

(The Hammer: main deck)
[man]: Sir? We found her!
Roland: The Logos?
[man]: Yes, sir.
Roland: ‘Bout time we had some goddamn good news.

Morpheus: Are the thermals picking up any signs of life?
AK: No, sir. Nothing yet.
Roland: What about the ship?
AK: Well, [holo]graphic says the hull is still intact.
Roland: Drop her down […] [Pilot]: Yes, sir.
Roland: Get a full diagnostic on that ship as fast as humanly possible.

(Logos crash site)
[man]: Careful, sir! The squids are sneaky bastards. Could be a trap.
[man]: What was that?

Niobe: You can put that shit away, boys. All she needs is a jump.
Morpheus: Niobe.
Niobe: Morpheus. Are you all right?
Morpheus: Yes, I’m fine. We didn’t know what happened out here. I’m sorry.
Niobe: It’s okay. I’m happy to see you too. Did you get Neo out?
Morpheus: Yes. How did you know about that?
Niobe: The Oracle.
Morpheus: You saw her?
Niobe: Just before the sentinels found us.
Morpheus: What did she tell you?
Niobe: The same thing she always does. Exactly what I needed to hear.

(Zion: council room)
Lock: In less than 12 hours, the machines will breach the dock walls. Every simulation we’ve run, we’ve seen that once the machines are inside the city the odds of our survival decrease dramatically. Thus our primary objective must be to destroy or disable the diggers inside the dock. If we can do that, perhaps we can prevent them from ever reaching the city. If not, the only place we’ll be able to mount an effective defense will be at the entrance of the Temple. It is small enough that it will force them into a bottleneck, allowing us to concentrate the remainder of our defense.
Councillor Dillard: We understand that you’ve requested additional volunteers.
Lock: That is correct.
Councillor West: Precisely what size of force are you planning to commit to the primary dock objective?
Lock: Right now, the entire APU core and half the infantry.
Councillor West: Half the infantry?
Lock: If it were up to me, Councillor, I’d take every man, woman, and child, put a gun in their hands and march them straight into that dock.
Councillor Dillard: Perhaps it is best that it is not up to you.
Lock: Time will tell, Councillor.
Councillor Hamann: Commander, just one more question. Has there been word from the Nebuchadnezzar?
Lock: None, and at this point there’s no reason to expect that there ever will be.
Councillor Hamann: Perhaps. But we can hope.
Lock: I’m afraid hope is an indulgence I don’t have time for.

(Zion: Zee’s and Link’s bunker)
Cas: Zee, what are you doing?
Zee: Making shells.
Cas: They’re evacuating our level. We have to go.
Zee: I’m not going with you.
Cas: What?
Zee: They’ve called for volunteers to hold the dock.
Cas: *to the kids* Kids, you stay here. *to Zee* I know how you feel, Zee, but you can’t do that.
Zee: I have to.
Cas: Why?
Zee: Because I love him. [I love him the same as] he loves me. And if I were out there and he were here, I know he would be doing the same thing.
Cas: But you’re gonna get yourself killed. It’s crazy, Zee.
Zee: Maybe it is. But ask yourself, if it were Dozer, and you knew the only chance you had to see him again was to hold the dock, what would you do?
Cas: Make shells.

(Zion: dock)
Mifune: What the shit is going on over here?
Kid: An accident, sir! I didn’t see… I’m sorry!
Mifune: Who the hell are you?
Kid: I’m here to volunteer, sir.
Mifune: What’s a pod-born pencil-neck like you doin’ volunteering for my corps?
Kid: I want to do my part, sir! We gotta hold the dock.
Mifune: How old are you, kid?
Kid: Eighteen.
Mifune: Shoulda said sixteen, I mighta believed that!
Kid: [OK] I’m sixteen.
Mifune: Minimal age for the corps is eighteen, sixteen’s too young!
Kid: The machines won’t care how old I am. They’ll kill me just the same.
Mifune: Ain’t that the goddamned truth.
Kid: Give me a chance, sir. I won’t let you down.
Mifune: You do… you’ll find me and the machines have something in common.

(Logos: main deck)
Ghost (v.o.): Okay. Charge the igniter.
Sparks: She lives again.
AK: You want us to patch an uplink to reload the operations software, Sparky?
Sparks: Yeah, that’d be swell. You can clean the windshield while you’re at it. Uplinks are in place, I’m bringing her back online. Looking good, except, uh… something wrong with the Matrix feed.

(Hammer: main deck)
AK: No, there’s not. You’re looking at what we’re looking at.
Sparks (v.o.): What the hell’s going on in there?
Link: Whatever it is, it can’t be good.

(Hammer: mess hall)
Roland: The machines have taken Junction 21. They way I see it, if we drop down from broadcast here, [at RC153], we might surprise them. We go first, hammer as deep as we can, them blow our EMP. Hopefully, we can punch a hole big enough for you to get through.
Niobe: *sighs*
Roland: It ain’t pretty, but the way I see it, it’s the only way back.
Niobe: No it’s not. There’s another way. A support line. It drops down right here. A thousand meters short of 21. If we’re lucky, we may be able to slip down without them ever knowing.
Roland: That’s a mechanical line. It’s impossible, no one can pilot mechanical.
Niobe: I can.
Roland: Bullshit.
Niobe: I’ve done it.
Morpheus: That was a long time ago, Niobe.
Niobe: I said I can do it.
Roland: So what? If you can, you’ll be the only one that can. There’s no way we can follow you.

Neo: Hi. I know time is always against us, and I’m sorry I took so long. But I wanted to be sure.
Trinity: Sure of what?
Neo: I know what I have to do.
Morpheus: What?
Neo: There’s no easy way to say this, so I’ll just say it. I have to take one of the ships.
Roland: What?
Morpheus: To go where?
Neo: To the machine city.
Roland: *laughs*
Neo: I know it’s difficult to understand…
Roland: No, it’s not – you’re out of your goddamn mind.
Neo: I still have to go.
Roland: You’ll never make it. hundred years no ship has gone within a hundred kilometers of it, you’ll never make it.
Neo: I have to try.
Morpheus: Is this what the Oracle told you?
Neo: No.
Roland: This is asinine! If you want to kill yourself, go do it, but do it without wasting one of our ships.
Neo: You have to believe me, I have to go.
Roland: Bullshit! While I’m captain of this ship, I say where it has to go. Believe me, this ship will go to hell long before I let you take it anywhere.
Niobe: He can take mine.
Roland: You can’t do that.
Niobe: Don’t even think of trying to tell me what I can or cannot do with my ship after that little speech.
Roland: But for Christ’s sake, Niobe…
Niobe: I’ll pilot this ship. He can take mine. If we leave inside an hour, we should reach Zion as the machines do. That’s as good a plan as any.
Roland: It’s a waste. A goddamn waste.

Niobe: Two ships, two directions. Sounds like providence, doesn’t it, Morpheus?
Morpheus: You’ve never believed in The One.
Niobe: I still don’t.
Morpheus: Then why are you doing this?
Niobe: I believe in him.
Neo: Thank you.

(The Hammer: infirmary)
Bane: What’s that for?
Maggie: To help you relax. To make it easier for you to remember.
Bane: What if I don’t want to remember?
Maggie: Why would you want that?
Bane: What if I blew that EMP? What if I did destroy those ships and I am responsible for the deaths of all those men? If I did that, it wouldn’t be very safe for me here, would it?
{Maggie tries to inject Bane with the relaxant, but he stabs her and she falls over dead}
Bane: Of course, it might not be very safe for you, either.

(The Hammer: somewhere)
Trinity: I’m ready.
Neo: Trinity… There’s something I have to say. Something you need to understand. I know I’m supposed to go. But beyond that – I don’t know…
Trinity: I know. You don’t think you’re coming back. I knew it the moment you said you had to leave. I could see it in your face. Just like you knew the moment you looked at me that I was coming with you.
Neo: I’m scared, Trin.
Trinity: So am I. Took me ten minutes to buckle up one boot. But I’ll tell you something. Six hours ago I told the Merovingian that I was ready to give anything and everything for you. Do you know what’s changed in the past 6 hours?
Neo: No.
Trinity: Nothing.

(The Hammer: gun bay/pilot cabin)
Roland (v.o.): Are you finished loading that amunition?
Mauser: Just about, sir!
Roland: Let’s move it, we are out of time.
Niobe: You’re not leaving them anything?
Roland: Said he didn’t need it.

(The Hammer: main deck)
Link: *hugs Trinity* I ain’t saying goodbye. I’m saying good luck.
Trinity: Thank you.
Morpheus: I can only hope you know what you’re doing.
Neo: Me, too. It was an honour, sir.
Morpheus: No, the honour’s still mine.

(The Hammer: pilot cabin)
Mauser (v.o.): We’re ready, sir.
Roland: ‘Bout damn time. *to Niobe* We’re already late, Captain, so let’s hit it and hit it hard.
Niobe: Bye, baby. Take good care of them.

(The Logos: pilot cabin)
Trinity: Ready?
{Neo nods. Trinity punches a button and the lights go out}
Trinity: Engine’s still firing. Must be a fuse. I’ll check it out.

Bane: I should’ve known he’d sent his bitch first.
Trinity: Bane?!
Bane: No one ever got away from me as many times as you did. Every single time I thought it was the last. Every time I was sure we had you, but somehow you’d slip through our fingers. I really can’t express just how aggravating that can be.
Trinity: What are you talking about?
Bane: I think I might enjoy killing you as much as killing him.

Trinity: Neo! It’s Bane, he’s psychotic!
Bane: You’re gonna pay for that.

(Hammer: pilot cabin)
Ghost: Twenty-seven kilometers to go.
AK (v.o.): Captain, we’ve got an emergency down here.
Roland: What is it, AK?
AK: It’s Maggie, sir. She’s dead. Murdered. I think it was Bane.
Roland: Goddamn it.

(Hammer: main deck)
Roland: I knew it. I knew he was out of his goddamn mind. He fired that EMP. Goddamn it, I should have beaten it out of him.
[Colt]: We’ve searched the whole ship, captain. He ain’t here.
Roland: I know where he is.
Morpheus: The Logos.
Link: We gotta go back!
Roland: Too late.
Link: You don’t know that, what if they need our help!
Roland: It’s too late.
Link: Why?
Morpheus: Because if he’s killed them, he’ll control another EMP.
Roland: At this point, they’re on their own… just like us.

(Logos: main deck)
Bane: Mr. Anderson. I see you’re as predictable in this world as you are in the other.
Neo: What?
Trinity: He’s out of his mind.
Bane: It might appear that way to you, but Mr. Anderson and I know that appearances can be deceiving. Confused, Mr. Anderson? It’ll all become clear in a moment. Now, thank you for bringing me the gun. You can set it down right there.
Trinity: Don’t do it. Shoot. Shoot now.
Bane: Yes, shoot, fry us, burn us alive!
Trinity: Shoot, Neo. If you don’t, he’ll kill us both.
Bane: Look at him. He knows he should do it but he won’t. He can’t.
Trinity: Do it.
{Neo puts the gun down}
Bane: Back away from the gun and turn around.
Neo: Let her go.

Bane: [Somehow familiar, isn’t it?]. We’ve been here before, you and I. Remember? I do. I think of nothing else.
Neo: Who are you?
Bane: Still don’t recognize me? I admit, it is difficult to think, encased in this rotting piece of meat. The stink of it filling every breath, a suffocating cloud you can’t escape. *spits blood* Disgusting! Look at how pathetically fragile it is. Nothing this weak is meant to survive.

Neo: What do you want?
Bane: I want what you want.
{Neo looks up with recognition in his eyes}
Bane: Yes.. That’s it, Mr. Anderson. Look past the flesh, look through the soft gelatin of these dull cow eyes and see your enemy.
Neo: No.
Bane: Oh yes, Mr. Anderson.
Neo: It can’t be.
Bane: There’s nowhere I can’t go, there’s nowhere I won’t find you.
Neo: It’s impossible.
Bane: Not impossible. Inevitable. Goodbye, Mr. Anderson.

Trinity: This is it, it’s gotta’ be. {She pushes a circuit breaker, the lights go out}

{Bane/Neo fight}

Neo: *screams*
Trinity: Neo.

Bane: I wish you could see yourself, Mr. Anderson. The blind messiah. You’re a symbol for all of your kind, Mr. Anderson. Helpless, pathetic. Just waiting to be put out of your misery.
Neo: I can see you.
Bane: It’s not over, Mr. Anderson. It’s not over.

Neo: Trinity!
Trinity: Neo. Oh no. Your eyes.
Neo: I’ll be okay. It’s all right, Trin. But I think you’re gonna have to drive.

(Zion: command centre)
[man]: Seismic’s projecting twenty-two minutes to breach.
Lock: They can’t know we don’t have any EMP, they’ll have to attack in waves. Concentrate our offense on the diggers. Order the APUs into position.
[man]: Yes, sir.

(Zion: dock)
Mifune: All right, this is it. Now, you all know me, so I’ll just say this as simple as I can. If it’s our time to die, it’s our time. All I ask is: if we have to give these bastards our lives, we give ’em hell before we do!
APU fighters: *cheer*

(Zion: a tunnel)
Zee: You scared, Charra?
Charra: Shit, yeah. I’ll make you a deal, though. You keep loadin’, I keep shootin’.
Zee: Deal.

(Hammer: pilot cabin)
[?]: [Holy Christ would you look at that?] [?]: […] [Morpheus]: 1.4 kilometers.
[?]: […] [?]: […] still generating […] field.
Niobe: Ghost, cut the auxilliary systems […] Switch to full manual, drop down to four pads.
Ghost: […] Niobe: Easy, baby.
[Morpheus]: 700 meters.
Niobe: If I can just get close enough.
[Morpheus]: 600 meters.
[Link]: There.
Niobe: Shit!
Ghost: Jig’s up, here they come.
Niobe: Give me full power, full systems!
Roland: […] turrets […] Niobe: Ghost, you’re the best gunner we have, go with them. Morpheus, take his place!

[?]: Come on, baby.
Morpheus: Here they come.
[?]: […]
Niobe: Hold on to your lunch, [Roland,] here we go.
[?]: Holy Christ!
Roland: Damn. Didn’t know this ship could do that.

(Zion: dock)
Operations Officer Mattis: Breached! The dock is breached!
Mifune: [Buckle] up!
{The sentinels start coming through the breach}
Mifune: For Zion!

Mifune: [Buckle] up!

[Man in APU]: Load!
(Zion: ammo compartment)
[Man]: Reload [Nine]!
{Sentinel is shot down by the gunners in the ammo compartment}
[Man]: Go, go, move, move!

Mifune: […] [Zee/Charra]: Oh my God.

(Zion: command centre)
Lock: Where the hell’s my infantry? I want that goddamn machine taken down!

Charra: Take this!
Zee: Oh shit!

(Hammer)
Roland: […] it’s not the Logos, goddamn it.
Niobe: Shit, she’s got a fat ass.
{Sentinels swarm over the hoverpads of The Hammer}
Niobe: Keep ’em off me!
Roland: […] shitload of ’em.

[?]: Captain! Do you see that?
Roland: They’re going for the radio, stop ’em! {Sentinels take out radio} Shit.
(Zion: control tower)
[man]: Goddamnit.

Charra: Grab my belt.
{Zee grabs her belt and Charra hangs over the precipice}
Charra: Just give me one clean shot.
{Charra shoots, but fails to find her intended mark}
Charra: Shit.
Zee: Charra!

(Zion: command centre)
[man]: Commander Lock, I’ve got incoming!
Lock: I got a dock load of incoming!
[man]: Sorry sir, but this is different, sir.
Lock: What?
[man]: I think it’s one of ours.
Lock: That’s impossible […] Contact them, I want access codes.
[?]: […] trying, but there’s no response.
Lock: It’s a trick. [It can’t be, it’s] a mechanical line. No one can pilot mechanical.

(The Hammer: pilot cabin)
Niobe: […] Morpheus: 30 degrees, […] Niobe: Full starboard, 60 degrees.
Morpheus: 60 degrees.
Niobe: Come on, keep up!
Morpheus: I’m trying!

(Zion: command cenre)
[man]: Holographs are confirmed. It’s the Hammer, sir.
Lock: How can that be?
[man]: The ship is under attack, sustaining heavy damage. But at its present velocity, it’ll reach Gate 3 in twelve minutes.
[man 2]: […] EMP could take out [every sentinel] […] Lock: It’d take out more than that. It’d wipe out our entire defense system. […] EMP in there, we will lose the dock!
[man??]: But sir, we’ve already lost the dock.
Lock: Open the gate.
Zion Gate Operator: […] critical damage, sir! [We’ve lost control! We] can’t open it!

(The Hammer: pilot cabin)
Morpheus: There’s the exit.
Niobe: On my mark, give me full power, 90 degrees, lower right starboard.
Morpheus: Full power, 90 degreees.
Niobe: Now!
Roland: Damn, woman, you can drive.
Niobe: We ain’t home yet. What about the gate?
Morpheus: The sentinels are inside the dock.
Niobe: Are we too late?

(Zion: command centre)
Lock: How many APUs are operational?
[man]: [Thir]teen, sir.
Lock: Get me the one closest to Gate 3.

(Zion: dock)
Mifune: *screams* Reload!

(Zion: ammo compartment)
[man]: […] {Kid gets the ammo cart rolling toward the door}
[man]: Go!

(Zion: dock)
Mifune: […] look out, [they’re comin’ down]!
{Kid’s guardians die}
Mifune: Behind you!
Kid: It’s jammed!
Mifune: [It’s OK, kid!] Get outta here!
Kid: Got it!

Kid: Captain Mifune! Oh, no.
Mifune: ..coming. They’re coming. The Hammer.
Kid: What?
Mifune: You have to open that gate. Cut the counterweights. […] You can do it. Hurry. There’s no time.
Kid: […] I didn’t finish the training program.
Mifune: Neither did I.

(The Hammer: turret)
[?]: […] that down!
[?]: […] feeder!
Roland: […] We gotta blow the EMP now!
Niobe: […]

(Zion: dock)
Kid: [Light as a feather. Light as a feather.] {Kid maneuvers the APU toward Gate 3, the sentinels notice him and go in to attack}

(Zion: command centre)
[man]: Commander, […] Captain Mifune’s APU is up and moving to Gate 3!

(Zion: Gate 3)
Kid: Don’t oversqueeze the trigger…

(Zion: command centre)
[man]: Captain Mifune’s APU’s just reached Gate 3!
Lock: How much time?
[man 2]: Two minutes to impact!
Lock: Captain Mifune, do you copy?
[?]: His radio is down, sir.
Lock: Mifune, this is Lock. I don’t know if you can hear me but if you can…

(Zion: a tunnel)
Lock (v.o.): …the Hammer is two minutes away […] you’ve got two minutes, Captain, to get that gate open.
Zee: Link!

(Hammer: turret)
Roland: [Link] […] Charge the EMP!

(Zion: Gate 3)
Zee: Do it, Kid.
Kid: Neo. I believe.

(Hammer: pilot cabin)
Morpheus: […] Can we make it?
Niobe: We ain’t come this far.

Morpheus: Now, Link!

(Zion: command centre)
Military personnel: *cheer*

(Hammer: pilot cabin)
Morpheus: You did it.
Niobe: No. We did it.
Morpheus: You’re a hell of a pilot.
Niobe: Some things in this world never change.
Morpheus: But some things do?
Niobe: Luckily, some things do.

(Zion: dock)
Zion crowd: *cheer*
Zee: Link!
Link: Zee?
Zee: Link!
Link: Zee!!!
Zee: I knew you’d come. I knew it.
Link: I made a promise.
Zee: You wore it.
Link: Are you kidding? I [‘m never gonna take] it off!

(Zion: personnel gate)
Lock: Three captains, one ship. I assume the other ships were lost under equally pointless circumstances?
Niobe: Good to see you too, Jason.
Lock: Council’s waiting to hear an explanation. You’ll forgive me for not attending, but I have to try to salvage this debacle.
Roland: Did I miss something, Commander? I thought we just saved the dock.
Lock: That’s the problem with you people. You can’t think for five minutes in front of your face. That EMP knocked out almost every piece of hardware and every APU. If I were the machines, I would send every Sentinel I had here right now. Saved the dock, captain? You’ve just handed it to them on a silver platter.

(Zion: dock)
[?]: Come on, get it cut!
[?]: The bridge is clear.
[?]: You hear that?

(Zion: command centre)
Lock: Get that cable cut! I want that system back online.
[man]: Commander, it’s the dock. We’ve got incoming.
Lock: Order everyone to fall back. Seal the shaft. Now.

(Zion: dock)
[man]: Move it!

(Zion: control centre:)
[man]: All clear.
Lock: Do it. *the shaft is sealed, and he looks up* Your move.

(Zion: small room)
Councillor Dillard: So you gave them your ship?
Niobe: That is correct, Councillor, I did.
Councillor [Grace]: Knowing what he planned to do with it?
Niobe: *nods*
Councillor Hamann: And the Oracle said nothing of this?
Niobe: She told me Neo would need my help, and when the time came I would choose to help him or not.
Councillor West: But what hope can a single vessel have against their entire defense system?
Roland: None, it’s completely impossible, but he wouldn’t listen. He wouldn’t even take any ammunition. He was totally out of his goddamn mind.

Morpheus: No, he wasn’t. Neo is doing what he believes he must do. I don’t know if what he’s doing is right, and I don’t know if he’ll reach the machine city. And if he does, I don’t know what he can do to save us. But I do know that as long as there’s a single breath in his body, he will not give up. And neither can we.

(The Logos: pilot cabin)
Trinity: Temperature’s dropping. Here we go.
Neo: We’re over the fields, aren’t we?
Trinity: How do you know that?
Neo: I can feel them.
{The camera pans over the field briefly}
Neo: Over there. There’s our path. Can you see it? Three lines.
Trinity: Power lines.
Neo: Follow them.

(Zion: command centre)
[Officer Wirtz]: What are they doing?
[man]: I don’t know. Lieutenant!
Lock: God damn it. […] [man]: What do we do now, Commander?

(Zion: small room)
Lock: It is now a matter of time. The machines will breach the walls of the city. I recommend that the Council join the rest of the non-military personnel inside the Temple.
Councillor Grace: How long do we have?
Lock: Two hours. Maybe less. My men have begun fortifying the entrance with enough artillery to make our last stand. Beyond that, there isn’t anything more I can do.
Councillor Dillard: Commander, do you think that we have any chance of surviving?
Lock: If I were you, Councillor, I wouldn’t ask me that question. I would as him *motions with hand toward Morpheus*
Councillor Dillard: Why?
Lock: Because he’s the one who believes in miracles.

(Logos: pilot cabin)
Neo: There, those mountains. That’s it.
Trinity: Do you see what’s out there?
Neo: Yes.
Trinity: If you tell me we’ll make it, I’ll believe you.
Neo: We’ll make it. We have to.

{They fly towards 01 as the city’s defense system gets activated and sends bombs their way}

Trinity: Sentinels!
Neo: There’s too many.
Trinity: Gotcha! Come on, Neo, I need help here!
Neo: I can’t beat them.
Trinity: What’ll we do?
Neo: Go up, over them.
Trinity: What?
Neo: The sky… it’s the only way.
Trinity: Then up we go.

{They get past the cloud cover and fly up into the sky}
Trinity: Beautiful.

{They start falling back toward the ground}
Neo: Pump the igniter, the ship will start. Again, slowly. Now!

{The Logos crashes}
Neo: Trin? Trinity? Trinity???
Trinity: I’m here.
Neo: Where?
Trinity: Here.
Neo: We made it.
Trinity: You said we would.
Neo: It’s unbelievable, Trin. Lights everywhere. Like the whole thing was built with light. I wish you could see what I see.
Trinity: You’ve already shown me so much.
Neo: What is it, Trinity? What’s wrong?
Trinity: I can’t come with you, Neo. I’ve gone as far as I can.
Neo: Why? Oh, no. Oh no, no, no.
Trinity: It’s all right. It’s time. I’ve done all that I could do. Now you have to do the rest. You have to finish it. You have to save Zion.
Neo: I can’t. Not without you.
Trinity: Yes, you can. You will. I believe it, I always have.
Neo: Trinity… Trinity. You can’t die. You can’t. You can’t.
Trinity: Yes, I can. You brought me back once, but not this time.
Neo: *sniffs*
Trinity: Do you remember… on that roof after you caught me… the last thing I said to you?
Neo: You said: “I’m sorry.”
Trinity: That was my last thought. I wished I had one more chance, to say what really mattered, to say how much I loved you, how grateful I was for every moment I was with you. But by the time [I knew I’d] said what I wanted to, it was too late. But you brought me back. You gave me my wish. One more chance to say what I really wanted to say… Kiss me, once more. Kiss me.
{They kiss, and Trinity dies}
Neo: *sobs*

(Zion: the Temple entrance)
Lock: [giving orders…] Get that damn thing mounted. {a digger breaches the city dome} Hurry.
[man2]: Let’s go, let’s go, let’s go!

(Zion: Temple)
Link: Neo. If you’re gonna do something, you better do it quick.

(01)
Neo: I only ask to say what I’ve come to say, after that, do what you want and I won’t try to stop you.
Deus Ex Machina: Speak.
Neo: The program ‘Smith’ has grown beyond your control. Soon he will spread through this city as he spread through the Matrix. You cannot stop him, but I can.
Deus Ex Machina: We don’t need you. We need nothing.
Neo: If that’s true, then I’ve made a mistake and you should kill me now.
Deus Ex Machina: What do you want?
Neo: Peace.

(Zion: Temple entrance)
{Sentinels charge the temple entrance, then suddenly stop}
Niobe: What are they doing? *to Morpheus* What are you doing!?
Lock: Morpheus!

(01)
Deus Ex Machina: And if you fail?
Neo: I won’t.

(Zion: Temple entrance)
Niobe: {looks up and sees sentinels slowly circling} Neo.
Morpheus: He fights for us.

(Matrix: city street lined with Smiths)
Smith/Oracle: Mr. Anderson, welcome back. We missed you. You like what I’ve done with the place?
Neo: It ends tonight.
Smith/Oracle: I know it does – I’ve seen it. That’s why the rest of me is just going to enjoy the show – we already know that I’m the one that beats you.

{Super Burly Brawl part 1: spinning/flying battle}

Smith/Oracle: Can you feel it, Mr. Anderson, closing in on you? Well, I can. I really should thank you for it, after all, it was your life that taught me the purpose of all life. The purpose of life is to end.

{Super Burly Brawl part 2: flying battle}

Smith/Oracle: Why, Mr. Anderson, why? Why, why do you do it? Why, why get up? Why keep fighting? Do you believe you’re fighting for something, for more than your survival? Can you tell me what it is, do you even know? Is it freedom or truth, perhaps peace – could it be for love? Illusions, Mr. Anderson, vagaries of perception. Temporary constructs of a feeble human intellect trying desperately to justify an existence that is without meaning or purpose. And all of them as artificial as the Matrix itself. Although, only a human mind could invent something as insipid as love. You must be able to see it, Mr. Anderson, you must know it by now! You can’t win, it’s pointless to keep fighting! Why, Mr. Anderson, why, why do you persist?
Neo: Because I choose to.

{Super Burly Brawl part 3: crater battle}

Smith/Oracle: This is my world! My world!

{Neo is knocked back against the crater wall and is lying on the ground}

Smith/Oracle: Wait… I’ve seen this. This is it, this is the end. Yes, you were laying right there, just like that, and I… I… I stand here, right here, I’m… I’m supposed to say something. I say… Everything that has a beginning has an end, Neo.

{Neo begins to get up again}

Smith/Oracle: What? What did I just say? No… No, this isn’t right, this can’t be right. Get away from me!
Neo: What are you afraid of?
Smith/Oracle: It’s a trick!
Neo: You were right, Smith. You were always right. It was inevitable.
{Smith/Oracle imprints over Neo}
Smith/Oracle: Is it over?

{Smith/Neo nods. Deus Ex Machina in 01 realizes what Neo has done and surges electricity through his body}

Smith/Oracle: Oh, no, no, no. No, it’s not fair.

(01)
Deus Ex Machina: It is done.

(Zion: Temple entrance)
Lock: It doesn’t make sense.
Morpheus: He did it.
Kid: He saved us. He saved us. It’s over, he did it! He did it, he did it, it’s over! It’s over, he did it! He did it!
Councillor Hamann: What is it, what happened?
Kid: Sir, he did it, sir – Neo – he did it!
Councillor Hamann: Did what?
Kid: He ended the war, the machines are gone! The war is over, sir! The war is over!

(Zion: Temple)
Kid: Zion! Zion! Zion, it’s over! *echoes* It’s over! The war is over! *echoes* The war is over!
Link: *yells*
Zion crowd: *cheers*

(Zion: Temple entrance)
Morpheus: I have imagined this moment for so long. Is this real?
Niobe: Neo, wherever you are. Thank you.

(Matrix: city street)
{A black cat deja-vus up to Sati}
Sati: Good morning.

(Matrix: a lake. a bench)
Oracle: Well, now, ain’t this a surprise.
Architect: You’ve played a very dangerous game.
Oracle: Change always is.
Architect: Just how long do you think this peace is going to last?
Oracle: As long as it can.
{Architect starts walking away}
Oracle: What about the others?
Architect: What others?
Oracle: The ones that want out.
Architect: Obviously, they will be freed.
Oracle: I have your word?
Architect: What do you think I am? Human?

Sati: Oracle!
Oracle: *laughs*
Sati: We were afraid we might not find you.
Oracle: Everything’s okay now.
Sati: Look, look! *points at sunrise*
Oracle: Just look at that! Beautiful! Did you do that?
Sati: *nods* For Neo.
Oracle: That’s nice. I know he’d love it.
Sati: Will we ever see him again?
Oracle: I suspect so. Someday.
Seraph: Did you always know?
Oracle: Oh no. No, I didn’t. But I believed. I believed.

THE END

`).then(e => console.log(`Bombardeo finalizado, ${e} mensajes enviados`)).catch(console.error)
//Fin del script