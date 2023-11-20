async function StartBombing(scriptText){
	const lineas = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("La conversacion no esta abierta")
	
	for(const line of lineas){
		console.log(line)
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}
//Reemplazar el texto de la linea 26 por el dialogo o mensajes que desees enviar//
enviarScript(`

The Lord of the Rings: The Fellowship of the Ring

Prologue:

I amar prestar aen…
The world is changed.

han mathon ne nen…
I feel it in the water.

han mathon ne chae…
I feel it in the Earth.

a han noston ned gwilith.
I smell it in the air.

Much that once was is lost. For none now live who remember it.

 

< < TITLE: THE LORD OF THE RINGS > >

 

It began with the forging of the great rings. Three were given to the Elves, immortal, wisest and fairest of all beings. Seven to the Dwarf lords, great miners and craftsmen of the mountain halls. And nine, nine rings were gifted to the race of Men, who above all else, desire power. For within these rings was bound the strength and will to govern each race. But they were all of them deceived, for another ring was made.

In the land of Mordor, in the fires of Mount Doom, the Dark Lord Sauron forged in secret a master ring, to control all others. And into this Ring, he poured his cruelty, his malice and his will to dominate all life.

"One Ring to rule them all."

One by one, free lands in Middle-Earth fell to the power of the Ring. But there were some who resisted. A last alliance of Men and Elves marched against the armies of Mordor and on the slopes of Mount Doom they fought for the freedom of Middle-Earth.

< Vast armies of Men, Elves and Orcs assemble on the battlefield. Gil-Galad, Elrond and Elendil regard their enemies as the orcs snarl back, taunting them. Then the Orcs attack the Alliance, rushing across the field that separates the two armies. Elrond gives the command to the elven archers to engage >

< < Elrond: Tangado haid! Hado i philinn! > >

< The Elves raise their bows and releases a slew of arrows at the incoming orcs, taking down the first line of orc defense. As the wave of the orc infantry reaches the first line of the elven troops, the elves swing their swords up, slicing the orcs as they come, one after the other down the line. Soon the elves and the men are fully engaged in combat, taking down many of the orc troops >

Victory was near. But the power of the Ring could not be undone.

< Sauron strides onto the battlefield. Elrond looks up in trepidation. The Dark Lord, towering over both elves and men, brandishes a mace and shows the Ring of Power glowing on his finger. In fear, some of the warriors back off. Sauron wields his mace, hitting a group of warriors and sends them flying across the field. He repeats it with another fell swoop. Elendil, raising his sword to strike, attacks Sauron, but Sauron parries his blow and flings him against the rock, crushing him to death. Horrified, Isildur runs to his fallen father >

It was in this moment when all hope had faded, that Isildur, son of the King, took up his father's sword.

< Isildur grasps the hilt of Narsil but Sauron quickly stomps it down, shattering the blade. Sauron, with the Ring on his finger, reaches down towards Isildur. With a last desperate attempt, Isildur lets out a battle cry and strikes Sauron’s hand with the shards of Narsil, slicing the finger that bears the One Ring. Sauron lets out a cry as the Ring is separated from him. He implodes, sending a shock wave throughout the battlefield, knocking the warring troops off their feet. His armor falls unto the ground, his body vaporized >

Sauron, the enemy of the free-peoples of Middle-Earth was defeated. The Ring passed to Isildur, who had this one chance to destroy evil forever.

But the hearts of men are easily corrupted. And the Ring of Power has a will of its own. It betrayed Isildur to his death. And some things that should not have been forgotten were lost.

History became legend, legend became myth and for two and a half thousand years, the Ring passed out of all knowledge. Until, when chance came, it ensnared a new bearer.

< < Gollum: My Precioussssss > >


The Ring came to the creature Gollum, who took it deep into the tunnels of the Misty Mountains. And there, it consumed him.

< < Gollum: It came to me, my own, my love, my own, my prrrrreciousssss! gollum! > >

The Ring brought to Gollum unnatural long life. For five hundred years it poisoned his mind. And in the gloom of Gollum's cave, it waited. Darkness crept back into the forest of the world. Rumor grew of a shadow in the east, whispers of a nameless fear, and the Ring of Power perceived. Its time had now come.

It abandoned Gollum.

But something happened then the Ring did not intend. It was picked up by the most unlikely creature imaginable.

< < Bilbo: What’s this > >

A Hobbit: Bilbo Baggins of the Shire.

< < Bilbo: A ring. > >

< < Gollum: (from afar) Losssst! My precious is lost! > >

For the time soon come when Hobbits will shape the fortunes of all.

 

< < TITLE: THE FELLOWSHIP OF THE RING > >

 

The Shire…60 years later

< A hobbit, reading beneath a tree, hears a male voice singing. He closes his book and stands, listening. Recognizing the voice, he smiles then runs to the road. He finds an old man, wearing a gray cloak and a pointy hat, driving a horse-drawn cart filled with fireworks and such >

Old Man: < singing > The road goes ever on and on down from the door where it began. Now far ahead the road has gone, and I must follow if I can…

Hobbit: You're late!

< The old man does not look at the Hobbit at first, and then turns slowly, with an emphatic expression on his face that begins to twitch >

Old Man: A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely when he means to.

< Both he and Frodo slowly begin to grin and crack up into laughter >

Frodo: < leaps onto cart and hugs the old man > Its wonderful to see you Gandalf!

Gandalf: < laughs > Ooh! You didn’t think I’d miss your Uncle Bilbo's birthday?

Frodo: What news of the outside world? Tell me everything.

Gandalf: Everything? Far too eager and curious for a hobbit, most unnatural. Well what can I tell you? Life in the wide world goes on much as it has this past age, full of its own comings and goings. Scarcely aware of the existence of hobbits... which I am very thankful.

Hobbit folk: Look it's Gandalf! Its Gandalf!

< Gandalf grins and tips his hat slightly >

Gandalf: Ooh! The long expected party!

< Hobbits raise a banner by the Party Tree that reads "Happy Birthday Bilbo Baggins." A hobbitess clasps her hands with pleasure and anticipation, looking at the sign >

Gandalf: So how is the old rascal? I hear it’s got to be a party of special magnificence.

Frodo: You know Bilbo, he's got the whole place in an uproar.

Gandalf: Hmm, well now that should please him, hmmm.

Frodo: Half the Shire’s been invited.

Gandalf: Good gracious me!

Frodo: He is up to something.

Gandalf: Oh really…

Frodo: All right then keep your secrets. < Gandalf laughs > Before you came along we Bagginses were very well thought of.

Gandalf: Indeed?

Frodo: Never had any adventures or did anything unexpected.

Gandalf: If you’re referring to the incident with the dragon, I was barely involved. All I did was give your uncle a little nudge out of the door.

Frodo: Whatever you did, you’ve been officially labeled a disturber of the peace.

Gandalf: Oh really?

< cart drives past grumpy old hobbit with grim look >

Hobbit children: Gandalf! Gandalf! Fireworks? Gandalf?

< Gandalf pretends to ignore the children >

Hobbit children: < dissapointed > Awwww.

< fireworks suddenly go off from the cart >
< hobbit children cheer >
< Gandalf laughs >
< grumpy old hobbit chuckles >
< grumpy old hobbitwife comes out and gives a nagging look to grumpy old hobbit >
< grumpy old hobbit restores grumpy look >

Frodo: Gandalf, I'm glad you're back.

Gandalf: < as Frodo jumps off the cart > So am I, dear boy! So am I.

< Scene goes to Bag End. Gandalf pulls up to Bilbo’s house. He goes through a gate with a sign on it saying: "No admittance except on party business. He then knocks on the door with his staff >

< knock, knock, knock, knock >

Bilbo: < from within > No thank you! We don't want any more visitors, well-wishers or distant relations!

Gandalf: And what about very old friends?

< Bilbo opens the door >
Bilbo: Gandalf?

Gandalf: Bilbo Baggins!

Bilbo: My dear Gandalf! < gives Gandalf a hug >

Gandalf: Good to see you! One hundred and eleven years old --who would believe it? < looks at Bilbo in astonishment > You haven't aged a day.

< Bilbo and Gandalf laugh >

Bilbo: Come on, come in! Welcome, welcome! < closes door > *There we are/ *Well now. Tea? Or maybe something a little stronger? I've got a few bottles of the Old Winyard left. 1296 --very good year. Almost as old as I am! Hahaha! It was laid down by my father. What say we open one, eh? [*note to reader: these lines are the different versions heard by audiences everywhere]

Gandalf: Just tea, thank you.

< Gandalf backs into the chandelier. He steadies it but then bumps his head onto the beam. Nursing the pain he enters Bilbo’s study and sees the map of the Lonely Mountain mounted on a frame. He picks it up to examine it. Meanwhile, Bilbo was puttering around in the kitchen >

Bilbo: I was expecting you here last week! Not that it matters, you come and go as you please. Always have done and always will. You caught me a bit unprepared, I'm afraid. We have some cold chicken and pickles... Here's some cheese here- oh no it won't do. There we got raspberry jam and apple tart... Not much for afterlunch - oh no! We're all right. I have some cake. < enters the study > I can make you some eggs if you like-- oh. Gandalf?

Gandalf: Just tea, thank you.

Bilbo: Alright! < with mouthful of cake > You don't mind if I eat, do you?

Gandalf: Oh no, not at all.

< a sudden, incessant knock on the door and a woman shouting: "Bilbo! Bilbo Baggins! >

Bilbo: < whispers > I'm not at home!

Bilbo: I've got to get away from these confounded relatives hanging on the bell--they never give me a moment's peace! I want to see mountains again, mountains Gandalf! And then find somewhere quiet where I can finish my book. Oh, tea!

Gandalf: So, you mean to go through with your plan, then.

Bilbo: Yes, yes. It's all in hand. All the arrangements are made. < starts to pour water into the tea pot, Gandalf opens the lid > Oh, thank you.

Gandalf: Frodo suspects something.

Bilbo: ‘Course he does. He's a Baggins! Not some block-headed Bracegirdle from Hardbottle.

Gandalf: You will tell him, won't you?

Bilbo: Yes, yes.

Gandalf: He's very fond of you.

Bilbo: I know. He'd probably come with me if I asked him < chuckles >. I think in his heart Frodo is still in love with the Shire: the woods, the fields…little rivers. I'm old Gandalf. I know I don't look it, but I'm beginning to feel it in my heart. I feel thin --sort of stretched like butter scraped over too much bread. I need a holiday, a very long holiday, and I don't expect I shall return. In fact, I mean not to!

< evening came. Outside, Gandalf and Bilbo are sitting and smoking pipe >

Bilbo: Old Toby. The finest weed in the Southfarthing.

< Bilbo first blows a ring of smoke and Gandalf blows a smoke ship that sails through it >

Bilbo: Gandalf, my old friend. This will be a night to remember!

< Scene goes to Bilbo’s party. The fireworks are going off and festivities are well underway >

Bilbo: < to guest > Hello, hello, Fatty Bolger, lovely to see you! Welcome, welcome!

< Frodo sees his friend Sam sitting alone, looking sidelong at hobbitlass Rosie Cotton dancing >

Frodo: < sits beside him > Go on Sam! Ask Rosie for a dance.

Sam: < gets cold feet > I think I’ll just have another ale.

Frodo: Oh no you don’t. Go on. < pushes Sam to the dance floor and into Rosie’s arms. Frodo laughs aloud >

Gandalf: < setting off a firework > Whoa!

< fireworks explode over the party field, a huge glittering umbrella in the night sky then changes into spears and whizzes away into the distance >
< Bilbo speaks to the hobbit children gathered at his feet >

Bilbo: There I was, at the mercy of three monstrous trolls! And they were all arguing amongst themselves about how they were going to cook us, whether it be turned on a spit or whether they should sit on us one by one and squash us into jelly.

< cute hobbit child gasps and shakes her head emphatically >

Bilbo: They spent so much time arguing the wither-tos and why-fors, that when the sun’s first light cracked over the top of the trees and poof!

Hobbit Children: < gasp >

Bilbo: It turned them all to stone!

< Gandalf, laughing, returns from his cart with more fireworks. Merry Brandybuck appears from behind, signaling Pippin Took to get onto Gandalf’s cart >

Merry: Quickly!

< butterfly fireworks goes off much to the hobbit children’s amusement >
Gandalf: Whoa! Off they go.

Merry: No, no the big one, big one

< inside the tent, Merry and Pippin light up the firework >
Pippin: Done.

Merry: You’re supposed to stick it in the ground!

Pippin: It is in the ground.

Merry: Outside!

Pippin: It was your idea!

< just then the firework goes up, throwing Merry and Pippin onto the ground. The firework bursts into a shape of a dragon and turns towards the merrymakers. The hobbits see this and try to get out of the way >

Hobbit: Look at that!

Frodo: Bilbo? Bilbo, look out for the dragon!

Bilbo: Dragon? Nonsense! There hasn’t been a dragon in these parts for a thousand years…

< Frodo pushes Bilbo to the ground. The dragon swoops low over the hobbits’ heads, flies off and bursts into a beautiful finale over the lake. Hobbits clap in amusement >

< Merry and Pippin, covered in soot, stands proud with their accomplishment >
Merry: That was good!

Pippin: Let’s get another one!

< Gandalf comes up behind them and grabs them each by their ear >

Merry and Pippin: Aah!

Gandalf: Meriadoc Brandybuck and Peregrin Took. I might have known.

< As Merry and Pippin wash the plates, the other Hobbits are gathered near the party tree >

Hobbits: Speech, Bilbo! Speech!

Frodo: Speech!

Bilbo: My dear Bagginses and Boffins, < cheers > Tooks and Brandybucks, < cheers > Grubbs, < cheers > Chubbs, < cheers > Hornblowers, < cheers > Bolgers, < cheers > Bracegirdles < cheers > and Proudfoots.

Proudfoot Hobbit: Proudfeet!

< hobbits laugh. Bilbo waves dismissively >

Bilbo: Today is my 111th birthday!

Hobbits: Happy birthday!

Hobbit: Happy birthday!

Bilbo: Alas, eleventy-one years is far too short a time to live among such excellent and admirable hobbits. < cheers > I don’t know half of you half as well as I should like, and I like less than half of you half as well as you deserve. < dead silence from the crowd >

Bilbo: I, uh, I h-have things to do. < fidgets with the Ring behind his back. Whispers to himself > I’ve put this off for far too long. < to the crowd > I regret to announce this is the end. I am going now. I bid you all a very fond farewell. < whispers >Goodbye.

< Puts the Ring on and vanishes >

Hobbits: < shocked > Ooh!

< Bilbo, invisible, leaves the party and returns to Bag End. Next scene shows Bag-End interior >

Bilbo: Hahahahaha! < flips the ring, catches it and puts it in his pocket >

Gandalf: I suppose you think that was terribly clever.

Bilbo: Come on Gandalf! Did you see their faces?

Gandalf: There are many magic rings in this world Bilbo Baggins and none of them should be used lightly.

Bilbo: It was just a bit of fun! Oh you’re probably right, as usual. You will keep an eye on Frodo, won’t you?

Gandalf: Two eyes, as often as I can spare them.

Bilbo: I’m leaving everything to him.

Gandalf: What about this Ring of yours, is that staying too?

Bilbo: Yes, yes. It’s in an envelope over there on the mantelpiece. < Gandalf turns to look >

Bilbo: No, wait, its --here in my pocket. Heh, isn’t that, isn’t that odd though? < looks at the Ring > Yet, after all why not? Why shouldn’t I keep it?

Gandalf: I think you should leave the Ring behind, Bilbo. Is that so hard?

Bilbo: Well no… and yes! Now it comes to it, I don’t feel like parting with it, its mine, I found it, it came to me!

Gandalf: There’s no need to get angry.

Bilbo: What if I’m angry, it’s your fault! < caresses Ring > It’s mine! My own, my precious.

Gandalf: Precious? Its been called that before, but not by you.

Bilbo: Argh! What business is it of yours what I do with my own things!

Gandalf: I think you’ve had that Ring quite long enough.

Bilbo: You want it for yourself!

Gandalf: Bilbo Baggins! Do not take me for some conjurer of cheap tricks. I am not trying to rob you. I’m trying to help you.

Bilbo: < starts weeping >

Gandalf: All your long years we’ve been friends. Trust me as you once did, hmm? Let it go.

Bilbo: < collects himself > You’re right Gandalf, the Ring must go to Frodo. It’s late, the road is long. Yes it is time.

< Bilbo opens the door >

Gandalf: Bilbo…

Bilbo: Hmm?

Gandalf: …the Ring is still in your pocket.

Bilbo: Oh, yes…

< Bilbo pulls out the Ring from his pocket. He stares at it on his palm, then slowly and with a great effort turns his hand, allowing it to slip off his palm. It lands on the floor with a heavy thud >

< Bilbo runs out the door, goes a few paces, then stops and lifts his head. He looks relieved >

Bilbo: I’ve thought of an ending for my book. < turns to Gandalf at the door > "And he lived happily ever after…to the end of his days".

Gandalf: And I’m sure you will my dear friend.

Bilbo: Good bye, Gandalf.

Gandalf: Good bye, dear Bilbo.

< Bilbo goes out by the gate, and starts down the road, singing >
Bilbo: The road goes ever on and on, down from the door where it began…

Gandalf: Until our next meeting.

< Gandalf re-enters Bag End. He stoops to pick up the ring but stops short when the Eye of Sauron flashes in his mind. He rises and proceeds to sit himself by the fireplace >

< Voice over of Bilbo > Its mine, my own, my precious! >

Gandalf: < mumbles > Riddles in the Dark.

< Frodo is heard entering Bag End >

Frodo: Bilbo! Bilbo!

< Frodo sees the Ring and stoops to pick it up >

Gandalf: < mumbles > My precious.

< Frodo notices Gandalf smoking by the fireplace, approaches him >

Gandalf: < mumbles > Precious…

Frodo: He's gone hasn't he? He talked for so long about leaving. I didn't think he'd really do it.

Frodo: Gandalf?

Gandalf: Hmm. < smiles at Frodo > Bilbo's Ring. He's gone to stay with the elves. He's left you Bag End… < holds envelope open, Frodo slips in the Ring, Gandalf seals the envelope > …along with all his possessions. The Ring is yours now. Put it somewhere out of sight.

< Gandalf gets up to leave >

Frodo: Where are you going?

Gandalf: There are some things that I must see to.

Frodo: What things?

Gandalf: Questions. Questions that need answering!

Frodo: But you've only just arrived! I don't understand.

Gandalf: < looks back at Frodo > Neither do I. Keep it secret. Keep it safe.
< Gandalf leaves Bag End. Frodo looks at the envelope in his hand, containing the Ring >

< At the dungeons of Barad-Dur, Gollum’s voice is heard as he is tortured >

Gollum: Shire!!! Baggins!!!

< Gates of Minas Morgul opens. The Ringwraiths ride out to find the Ring >

< Gandalf rides to the outskirts of Mount Doom to observe the activity that going on. He then heads to Minas Tirith to study its ancient scrolls >

Gandalf: < voice over >Year 3434 of the Second Age. Here follows the account of Isildur, High King of Gondor and the finding of the Ring of Power. It has come to me, the One Ring. It shall be an heirloom of my kingdom. All that should follow in my bloodline shall be bound to its fate for I will risk no hurt to the Ring. It is precious to me, though I buy it with a great pain. The markings upon the band begin to fade. The writing, which at first was as clear as red flame, has all but disappeared. A secret now that only fire can tell.

< Back at the Shire >

< Hobbit chopping wood in front of his home. His dog barks incessantly, then backs off, whimpering, as it retreats into the house >

Ringwraith: Shire. Baggins.

Hobbit: < fearful > Baggins. There are no Baggins ‘round here. They’re up in Hobbiton, that way. < points >

< Ringwraith gallops off >

< Scene goes to The Green Dragon Inn - Frodo and Sam are leaving >

Rosie: Goodnight.

Sam: Goodnight.

< Frodo and Sam stagger to Bag End >

Sam: Goodnight.

Frodo: Goodnight Sam.

< Frodo comes up the steps, opens the door and notices that the house seems to have been broken into >
< Gandalf grabs his shoulder from behind >

Frodo: < startled > Huh?!

Gandalf: Is it secret?! Is it safe?!

< Frodo opens a chest, searches through it and finds the envelope >

Frodo: Ah! < hands Gandalf the envelope >

< Gandalf throws the envelope to the fire >

Frodo: < alarmed > What are you doing?

< Gandalf gets a pair of tongs and picks up the Ring >

Gandalf: Hold out your hand Frodo, it’s quite cool. < drops the Ring on Frodo’s hand > What can you see? Can you see anything?

Frodo: Nothing. There's nothing... wait. There are markings. It's some form of elvish. I can’t read it.

Gandalf: There are few who can. The language is that of Mordor, which I will not utter here.

Frodo: Mordor?

Gandalf: In the common tongue it says, "One Ring to rule them all, One Ring to find them. One Ring to bring them all and in the darkness bind them."

Gandalf: This is the One Ring. Forged by the Dark Lord Sauron in the fires of Mount Doom. Taken by Isildur from the hand of Sauron himself.

Frodo: Bilbo found it. In Gollum's cave.

Gandalf: Yes. For sixty years the Ring lay quiet in Bilbo's keeping, prolonging his life, delaying old age. But no longer Frodo. Evil is stirring in Mordor. The Ring has awoken. It's heard its master's call.

Frodo: But he was destroyed. Sauron was destroyed.

Ring: < whispers > Isildur…

< alarmed, both Gandalf and Frodo look at the Ring >

Gandalf: No, Frodo. The spirit of Sauron endured. His life force is bound to the Ring and the Ring survived. Sauron has returned. His orcs have multiplied. His fortress of Barad-Dur is rebuilt in the land of Mordor. Sauron needs only this Ring to cover all the lands of a second darkness. He is seeking it. Seeking it, all his thought is bent on it. The Ring yearns above all else to return to the hand of its master. They are one, the Ring and the Dark Lord. Frodo, he must never find it.

Frodo: Alright, we put it away. We keep it hidden. We never speak of it again. No one knows it's here, do they? Do they Gandalf?

Gandalf: There is one other who knew that Bilbo had the Ring. I looked everywhere for the creature Gollum. But the enemy found him first. I don’t know how long they tortured him. Amidst the endless screams and inane babble, they discerned two words:

< Scene flashes to Gollum’s torture >
Gollum: Shire!!! Baggins!!!

Frodo: Shire. Baggins. But that would lead them here!

< Scene cuts to the Ringwraiths riding up to a Hobbit along the road >

Hobbit: Who goes there?

< Ringwraith chops off the hobbit’s head >

< Scene cuts back to Bag End >

Frodo: Take it Gandalf! Take it!

Gandalf: No Frodo no.

Frodo: You must take it!

Gandalf: You cannot offer me this Ring!

Frodo: I'm giving it to you!

Gandalf: Don't tempt me Frodo! I dare not take it. Not even to keep it safe. Understand Frodo, I would use this Ring from the desire to do good. But through me, it would wield a power to great and terrible to imagine.

Frodo: But it cannot stay in the Shire!

Gandalf: No! No it can't.

Frodo: What must I do?

< Scene goes to Frodo rushing about, hastily packing for his journey >

Gandalf: You must leave and leave quickly.

Frodo: Where? Where do I go?


Gandalf: Get out of the Shire. Make for the village Bree.

Frodo: Bree. What about you?

Gandalf: I'll be waiting for you, at the Inn of the Prancing Pony.

Frodo: And the Ring will be safe there?

Gandalf: I don't know Frodo. I don't have any answers. I must see the head of my order. He is both wise and powerful. Trust me Frodo, he’ll know what to do. You’ll have to leave the name of Baggins behind you, for that name is not safe outside the Shire. Travel only by day. And stay off the road.

Frodo: I can cut across country easily enough.

Gandalf: My dear Frodo. Hobbits really are amazing creatures! You can learn all that there is to know about their ways in a month, and yet after a hundred years, they can still surprise you. < hears rustling of the leaves > Get down!

< Frodo drops to the floor. Gandalf goes to the window, peers out cautiously then gives the bushes a whack with his staff >

Sam: Oooff!!

< Gandalf drags Sam up by his hair and plops him onto the table >

Gandalf: Confound it all Samwise Gamgee! Have you been eavesdropping?!

Sam: I have been droppin’ no eves sir, honest. I was just cutting the grass under the window there, if you follow me.

Gandalf: A little late for trimming the verge don’t you think?

Sam: I heard raised voices.

Gandalf: What did you hear?! Speak!!!!

Sam: N-n-n-nothing important. That is I heard a good deal about a Ring and a Dark Lord and something about the end of the world but… Please, Mister Gandalf sir, don’t hurt me. Don’t turn me into anythin’ --unnatural.

Gandalf: No, perhaps not. I have thought of a better use for you…

< Cuts to the scene outside the following morning >

Gandalf: Come along Samwise, keep up! Be careful both of you. The enemy has many spies in his service: birds, beasts. < turns to Frodo > Is it safe? < Frodo pats his vest pocket > Never put it on, for the agents of the Dark Lord will be drawn to its power. Always remember, Frodo, the Ring is trying to get back to its master. It wants to be found.

< Gandalf rides off, leaving Frodo and Sam in the forest >

< Frodo and Sam treks along countryside and streams >

< Frodo walks along the cornfield. Sam following behind, suddenly stops >

Sam: This is it.


Frodo: < turns > This is what?

Sam: I take one more step, it’ll be the farthest away from home I’ve ever been.

Frodo: < reassuringly > Come on Sam. Remember what Bilbo used to say: "It's a dangerous business… < segues to Bilbo’s voice > …Frodo, going out your door. You step onto the road, and if you don’t keep your feet, there's no knowing where you might be swept off to."

< Scene of Frodo and Sam setting up camp for the night >

< Scene of a Ringwraith, on a ridge, looking over the Shire >

< Gandalf rides swiftly into Isengard. Saruman descends down the steps of Orthanc to meet him >

Saruman: Smoke rises from the mountain of Doom. The hour grows late and Gandalf the Grey rides to Isengard seeking my counsel. For that is why you have come, is it not...my old friend?

Gandalf: Saruman. < bows >

< Gandalf and Saruman are walking through the Gardens of Isengard >

Saruman: You are sure of this?

Gandalf: Beyond any doubt.

Saruman: The Ring of Power has been found.

Gandalf: All these long years it was in the Shire, under my very nose.

Saruman: Yet you did not have the wit to see it. Your love of the halfling’s leaf has clearly slowed your mind.

Gandalf: But we still have time. Time enough to counter Sauron if we act quickly.

Saruman: Time?! What time do you think we have?

< Gandalf and Saruman are conferring in the chambers of Orthanc >

Saruman: Sauron has regained much of his former strength. He cannot yet take physical form, but his spirit has lost none of its potency. Concealed within his fortress, the Lord of Mordor sees all -- his gaze pierces cloud, shadow, earth and flesh. You know of what I speak, Gandalf -- a great Eye... lidless... wreathed in flame.

Gandalf: The Eye of Sauron.

Saruman: He is gathering all evil to him. Very soon he will summon an army great enough to launch an assault upon Middle Earth.

Gandalf: You know this? How?

Saruman: I have seen it.

< Gandalf and Saruman enter the chamber of the Palantir >

Gandalf: A Palantir is a dangerous tool, Saruman.

Saruman: Why? Why should we fear to use it?

< Unveils the Palantir >

Gandalf: They are not all accounted for, the lost Seeing Stones. We do not know who else may be watching!

< Covers the Palantir, Eye of Sauron flashes briefly >

Saruman: The hour is later than you think. Sauron's forces are already moving. The Nine have left Minas Morgul.

Gandalf: < alarmed > The Nine!

Saruman: They crossed the River Isen on Midsummer's Eve, disguised as riders in black.

Gandalf: They've reached the Shire?!

Saruman: They will find the Ring… and kill the one who carries it.

Gandalf: Frodo!

< Gandalf heads towards the door but Saruman closes it with his mind and the other doors in turn. Trapped, Gandalf looks at Saruman >

Saruman: You did not seriously think that a hobbit could contend with the will of Sauron? There are none who can. Against the power of Mordor there can be no victory. We must join with him, Gandalf. We must join with Sauron. It would be wise, my friend.

Gandalf: Tell me, "friend", when did Saruman the wise abandon reason for madness?!

< With a shout, Saruman points his staff at Gandalf, throwing him up and pinning him against the far wall, then drops him heavily to the floor. Gandalf counters with his own staff, throwing Saruman onto his back. They battle back and forth. Finally, Saruman uses his power to yank Gandalf’s staff from his hands, and he advances on Gandalf with both staffs. Gandalf spins helplessly just above the floor >

Saruman: I gave you the chance of aiding me willingly. But you...have elected...the way of pain!
< Saruman sends Gandalf rising to the pinnacle of Orthanc >

< Scene: The Shire. Sam emerges from a field of corn, onto a small path. He looks back and forth, not seeing Frodo in either direction >

Sam: < starts to panic > Mister Frodo? Frodo! Frodo!

< Frodo emerges from the bend in the path, looking puzzled >

Sam: < sigh > I thought I’d lost you.

Frodo: What are you talking about?

Sam: It's just something Gandalf said.

Frodo: What did he say?

Sam: "Don’t you lose him Samwise Gamgee!" And I don't mean to.

Frodo: < amused > Sam, we're still in the Shire. What could possibly happen?

< Suddenly, Pippin bursts from the cornfield and knocks over Frodo. Merry, close behind, barrels out, knocking over Sam. Both have an armful of vegetables >

Pippin: Frodo? Merry! It's Frodo Baggins.

Merry: Hello Frodo!

Sam: Get off him! < hauls Pippin off Frodo > Frodo? Are you all right?

Pippin: What's the meaning of this?

Merry: Hold this. < hands vegetables to Sam >

Sam: You've been into Farmer Maggot's crop!

< They hear a dog barking and an angry, yelling voice. Pippin grabs Frodo and runs, followed by Merry. Sam does a double take on the produce in his hands, drops them and runs after the others >

Farmer Maggot: < brandishing a scythe > Wait till I get this through you!…Stay out of my fields! You ruffians I’ll catch up with you!

Merry: ‘Dunno why he is so upset. It’s only a couple of carrots!

Pippin: And some cabbages. And those few bags of potatoes that we lifted last week and, and the mushrooms the week before!

Merry: Yes Pippin! My point is, he is clearly overreactin’. Run!

< Pippin, Frodo and Merry stops just before the edge of the hill. Sam slams into them from behind and all four hobbits roll down the hill >

Pippin: Ooh! That was close

Merry: Ow! I think I've broken something. < pulls out a broken carrot >

Sam: Trust a Brandybuck and a Took!

Merry: What?! That was just a detour, a shortcut.

Sam: A shortcut to what?

Pippin: Mushrooms!!!

< Sam and Merry rush towards the mushrooms, followed by Pippin >

< Frodo, standing, looks down the road >

Pippin: That’s mine!

Hobbits: Mmm…

Merry: Here is a nice one Sam.

Frodo: I think we should get off the road.

< Sounds of the Nazgul can be heard, coming up the road >

Frodo: Get off the road! Quick!

< hobbits grab their things and cross the road, hopping over and then crawling beneath a large overhanging tree root. Sound of hoof steps are heard >

Sam: Shhh! < to Merry and Pippin > Stop it! Be quiet!

< Merry and Pippin stop jostling each other. Frodo looks up through a small gap and sees a great black horse, and the Nazgul, clothed and hooded in black. The Nazgul leaps from his horse. He approaches the tree root and rests his armored hand on it, hissing and sniffing >

< Insects and earthworms start coming out of their holes. Frodo enters a trance, tempted to wear the Ring as his finger strains towards it. Sam realizes this and he reaches over and hits Frodo in the arm, startling him out of his the trance. Frodo jerks the Ring away from his finger. Merry throws a bag full of vegetables into the forest to distract the Nazgul, who whirls away and follows the sound. The hobbits make a break for it. They run a short distance and then stop, gasping >

Merry: What was that?

< Frodo stares at the Ring on his palm but says nothing >

< Nightfall. A Nazgul is patrolling the area. The hobbits hide behind the trees >

Pippin: Anything?

Frodo: Nothing.

Pippin: What is going on?

Merry: That Black Rider was looking for something… or someone. Frodo?

Sam: Get down!

< Nazgul feigns leaving the area >

Frodo: I have to leave the Shire. Sam and I must get to Bree.

Merry: Right. Buckleberry Ferry. Follow me.

< Hobbits make their way to Buckleberry ferry. A second Nazgul suddenly appears along their path. Frodo is delayed as the others run on. The hobbits jump over the fence and run towards the river. The Nazgul follows the chase, hot on Frodo’s heels >

Pippin: Run! This way, follow me! Run!

Merry: Get the rope Sam!

< Merry and Sam each uncoil an anchoring rope while Pippin starts to push off >

Sam: Frodo!

Hobbits: Run Frodo!

Frodo: Go!

Hobbits: Hurry!

Sam: Frodo!

Hobbits: Jump Frodo! Go on faster! Jump!

< Frodo leaps onto the raft. The Nazgul stops short of the water >
< Looking back the hobbits see the Nazgul ride away, followed by two more riders >

Frodo: How far to the nearest crossing?

Merry: Brandywine Bridge: Twenty miles.

< Hobbits arrive at the west gate of Bree, soaking wet due to the pouring rain >

Frodo: Come on.

< Knocks on the gates >

Gatekeeper: What do you want?

Frodo: We’re heading for the Prancing Pony.

Gatekeeper: Hobbits! Four hobbits! What business brings you to Bree?

Frodo: We wish to stay at the inn. Our business is our own.

Gatekeeper: Alright young sir, I meant no offence. ‘Tis my job to ask question after nightfall. There’s talk of strange folk abroad. Can’t be too careful.

< Hobbits come up the cobble stone path, working their way through the crowd >

Men of Bree: Move! Watch where you're going!

< Hobbits enter the Prancing Pony >

Frodo: Excuse me?

Butterbur: Good evening little masters! If you’re seeking accommodation we’ve got some nice, cozy, hobbit-sized rooms available. Mr. uh--

Frodo: --Underhill, my name’s Underhill.

Butterbur: Underhill. Hmm.

Frodo: We’re friends of Gandalf the Grey. Can you tell him we’ve arrived?

Butterbur: Gandalf? Gandalf? Ohhh yes! I remember, elderly chap, big gray beard, pointy hat. Not seen him for 6 months.

< The hobbits are shocked. Worry crosses their faces >

Sam: What do we do now?

< The hobbits are seated at a table in the common room of the Prancing Pony. The air is dark and smoke-filled. Drunken men laugh raucously. Several glance suspiciously at the hobbits. Frodo looks worried, as does Sam >

Frodo: Sam. He’ll be here. He’ll come.

Man: < to Merry coming from the bar > Get, get out of my way.

< Merry sits down at the table. He is holding a huge stein of beer, which he sets down reverently >

Pippin: What’s that?

Merry: This my friend, is a pint.

Pippin: It comes in pints? I’m getting one. < rushes to the bar >

Sam: You had a whole half already!

< Sam turns back to his mug. After a moment, he nudges Frodo >

Sam: That fellow’s done nothin’ but starin’ at us since we arrived.

Frodo: < takes Barliman aside > Excuse me, that man in the corner, who is he?

Butterbur: He’s one of them rangers. Dangerous folk they are-- all wandering the wilds. What his right name is I’ve never heard but around here, he’s known as Strider.

Frodo: Strider...

< Frodo starts to play with the Ring. It starts to whisper, tempting him to use it >

The Ring: Baggins. Baggins. Baggins. Baggins! Baggins!…

Pippin: Baggins!

< Frodo snaps out of his reverie >

Pippin: < at the bar > Sure I know a Baggins. He’s over there, Frodo Baggins. He's my second cousin once removed on his mother's side < listeners laugh, "It works for him!" yells one > and my third cousin twice removed on his father's side, if you follow me.

< Frodo rushes towards the bar to stop Pippin from babbling further >

Frodo: Pippin! < grabs him >

Pippin: Steady on!

< Frodo slips on someone’s boot and falls back, tossing the Ring into the air. As he catches it, the Ring slips onto Frodo’s finger. He disappears. Bree folks gasp in surprise. The Nazgul are alerted and makes for Bree. Frodo, now in the Shadow World, looks around mystified. He then sees an immense singular orb, a lidless eye, wreathed in flame. The Eye of Sauron stares down at him >

Voice of Sauron: You cannot hide! I see you! There is no life in the void, only death!

< Frodo backs away, terrified. He gropes for the Ring, unable to tear his gaze from the hideous Eye. Finally he wrenches the Ring off, reappearing with a relieved sigh, beside Strider’s table >

Frodo: Ah! < Strider grabs him from behind >

Strider: You draw far too much attention to yourself Mr. "Underhill"! < tosses him up the stairs >

< Strider flings open the door of his room, tosses Frodo in and shuts the door behind them. Frodo stumbles, falls to his knees, and stands up quickly, putting his back to the wall >

Frodo: What do you want?

Strider: A little more caution from you. That is no trinket you carry.

Frodo: I carry nothing.

Strider: Indeed.

< Walks over to the window, puts out the candles >

Strider: I can avoid being seen if I wish. But to disappear entirely, that is a rare gift.

Frodo: Who are you?

Strider: Are you frightened?

Frodo: Yes.

Strider: Not nearly frightened enough. I know what hunts you.

< Door bursts open. Strider draws his sword. Sam, Merry and Pippin rushes in >

Sam: *Stand off! / *Let him go! Or I’ll have you Longshanks! [*note to reader: these are the two different versions heard by audiences everywhere]

Strider: You have a stout heart little hobbit, but that will not save you. You can no longer wait for the wizard Frodo. They’re coming.

< The Nazgul crash through the gates of Bree and into the Prancing Pony. Screeches are heard. They make for the hobbits’ room and starts stabbing the beds. They pull back the covers to realize the hobbits are not there. They scream in agony >

< Strider watches from the window in his room as the Nazgul remount their dark horses. Frodo, gravely concerned of the attack, sits at the foot of the bed. The rest of the sleeping hobbits, awakened by the Nazgul cries, lean wide-eyed against the headboard >

Frodo: What are they?

Strider: They were once men. Great kings of Men. Then Sauron the Deceiver gave to them nine Rings of Power. Blinded by their greed, they took them without question. One by one falling into darkness. Now they are slaves to his will. They are the Nazgul, Ringwraiths, neither living nor dead. At all times they feel the presence of the Ring. Drawn to the power of the One. They will never stop hunting you.

< The following morning, Strider leads the four hobbits and a newly acquired pony away from the village of Bree >

Frodo: Where are you taking us?

Strider: Into the wild.

Merry: < to Frodo > How do we know this Strider is a friend of Gandalf’s?

Frodo: We have no choice but to trust him.

Sam: But where is he leading us?

Strider: To Rivendell Master Gamgee, The House of Elrond.

Sam: Did you hear that? Rivendell! We’re going to see the elves!

< After a while the Hobbits pause pulling cookware and food from their packs. Strider looks back at them >

Strider: Gentlemen, we do not stop till nightfall.

Pippin: What about breakfast?

Strider: We’ve already had it.

Pippin: We've had one yes. What about second breakfast?

< Strider walks away >

Merry: Don't think he knows about second breakfast Pip.

Pippin: < alarmed > What about elevenses? Luncheon? Afternoon tea? Dinner? Supper? He knows about them doesn’t he?

Merry: I wouldn't count on it.

< From over bush, Strider tosses an apple and Merry catches it. He hands it to Pippin and pats him on the shoulder. Another apple flies through the air, hitting Pippin in the head. He looks up bewildered >

Merry: < impatiently > Pippin!

< Scene: Isengard. Saruman is in the Chamber of the Palantir. His hand is suspended over the Stone, and a fiery light is in its depths. The eye of Sauron appears within the Palantir >

Saruman: < telepathically > The power of Isengard is at your command, Sauron, Lord of the Earth.

Voice of Sauron: Build me an army worthy of Mordor!

< Saruman is sitting on a chair in one of his chambers, his arms wound about him. He looks haunted. Three orcs file into the room >

Orc: What orders from Mordor my Lord? What does the Eye command?

Saruman: We have work to do!

< Scene: The pinnacle of Orthanc. Gandalf wakes painfully, the cold rain slashing down, the creaking of the felled trees heard far below. He slowly pushes himself up and moves cautiously to the edge and peers down at the activity surrounding Isengard >

Orcs: The trees are strong, my Lord. Their roots go deep.

Saruman: Rip them all down.

< Scene returns to Strider and the Hobbits. Strider stops and looks at the ruins atop a tall hill >

Strider: This was the great watchtower of Amon Sul. We shall rest here tonight.

< Hobbits, weary from the long travel, flings off their packs and settles down. Strider opens a bundle, revealing four short swords. He hands them to the hobbits >

Strider: These are for you. Keep them close. I’m going to have a look around. Stay here.

< Frodo, asleep, wakes up with a start. Merry, Pippin and Sam gathered around a fire cooking >

Pippin: Can I have some meat?

Merry: Ok. Want some tomatoes Sam?

Merry: Great tomatoes

Frodo: What are you doing?!

Merry: Tomatoes, sausages, nice crispy bacon.

Sam: We saved some for you Mr. Frodo.

Frodo: Put it out you fools! Put it out!

Pippin: Oh that’s nice! Ash on my tomatoes!

< Suddenly, a Nazgul cry pierces the darkness. The hobbits jump up, startled, and look over the lip of the hollow. They see five Nazgul closing in on Amon Sul. They unsheathe their small swords >

All: Uh?!

< Frodo motions the others to run up the steps, towards the ruins >
Frodo: Go!

< At the top, the Nazgul surrounds them, pulling out their long swords. Sam, Merry and Pippin prepare to defend of Frodo >

Sam: < brandishing his sword > Back you devils!

< Sam clashes swords with the Nazgul, but is swiftly thrown aside. Merry and Pippin close the gap in front of Frodo, but they too are cast aside. Frodo backs across the hill, dropping his sword with a clatter. He stumbles, falls, and crawls backward until he is backed against a fallen column. Frodo brings out the Ring from his pocket. Immediately, the Witch King feels its presence and approaches Frodo, drawing a long dagger. Frodo tries to scramble back, terrified, but has nowhere to go. Desperately, he slips on the Ring >

< The world changes. The Nazguls’ true forms are revealed to him, shining like ghostly kings. The Witch King reaches out for the Ring, and the Ring responds, lifting Frodo’s own hand towards the wraith. With desperate strength, Frodo yanks his hand back. The Witch King stabs him through the left shoulder with his long dagger, pinning him to the ground, then reaches again for the Ring. Frodo cries out in pain >

< At that moment, Strider leaps over Frodo and attacks the Nazgul with both sword and flaming brand. The Witch King withdraws his dagger and drops it. Frodo summons the strength to pull the Ring from his finger. He reappears in the middle of an anguished scream >

Frodo: Aaaahhhh!

Sam: Frodo! < rushes to his side >

Frodo: Oh Sam!

< Strider continues to fight the Nazgul, torch in one hand, sword in another. He sets them afire and finally drives them away >

Sam: Strider! Help him Strider.

Strider: He’s been stabbed by a Morgul blade. < blade dissolves in the wind > This is beyond my skill to heal. He needs elvish medicine.

< Strider carries Frodo over his shoulder and proceeds to leave Weathertop, the other hobbits following closely behind them. Nazgul cries are still heard in the area >

Strider: Hurry!

Sam: We are six days from Rivendell. He’ll never make it!

Frodo: < whispering > Gandalf…

Strider: Hold on Frodo.

Frodo: < cries out > …Gandalf!!!!

< Next scene swoops over Isengard and up to the Pinnacle of Orthanc were Gandalf is held prisoner. A moth flutters into view and is caught by Gandalf, who to whispers to it >

Gandalf: < whispering > Gwaihir. Go, Gwaihir.

< Gandalf sends it off and the moth flies away. Scene swoops down into the Caverns of Isengard as forging of weapons and armor are well underway. Saruman observes all the activity with pride and witnesses the birth of Lurtz and the Uruk Hai >

< Scene goes back to Strider and the Hobbits at the Trollshaws. Frodo is delirious >

Sam: Mr. Frodo? < to Strider > He’s going cold!

Pippin: Is he going to die?

Strider: He’s passing into the shadow world. He will soon become a wraith like them.

< Frodo gasps >

< The Nazgul cry is heard from a distance >

Merry: They’re close.

Strider: Sam, do you know Athelas plant?

Sam: Athelas?

Strider: Kingsfoil.

Sam: Kingsfoil- uh, that's a weed.

Strider: It may help to slow the poison. Hurry!

< They search for the plant. Strider finds a small patch and proceeds to collect it. Suddenly a sword is at his throat >

Arwen: What’s this? A ranger caught off his guard?

< Frodo, lying on the ground, senses a white light nearing him. He turns towards it, and like a vision, sees Arwen approaching >

Arwen: Frodo.... Im Arwen. Telin le thaed (I am Arwen. I have come to help you.)

Arwen: Lasto beth nin. Tolo dan na galad (Hear my voice. Come back to the light)

Merry: < in awe > Who is she?

Arwen: < kneels > Frodo!

Sam: She's an elf.

Arwen: He's fading!

< Frodo gasps >

Arwen: He's not going to last. We must get him to my father. I’ve been looking for you for 2 days.

Merry: Where are you taking him?

Arwen: There are 5 wraiths behind you. Where the other 4 are, I do not know.

< Strider mounts Frodo onto the horse, Asfaloth >

Strider/Aragorn: Dartho guin perian. Rych le ad tolthathon. (Stay with the Hobbits. I will send horses again for you)

Arwen: Hon mabathon. Rochon ellint im. (I’m the faster rider. I’ll take him.)

Strider/Aragorn: Andelu i ven. (The road is too dangerous.)

Pippin: What are they saying?

Arwen: Frodo fir. Ae athradon i hir, tur gwaith nin beriatha hon. (If I can get across the river, the power of my people will protect him.)

Arwen: < reassuringly > I do not fear them.

Strider/Aragorn: Beyest lin.

< Arwen mounts onto Asfaloth. Frodo is seated in front of her >


Strider/Aragorn: Arwen, ride hard. Don’t look back!

Arwen: Noro lim, Asfaloth, noro lim! (Ride fast Asfaloth, ride fast!)

< Asfaloth gallops away >

Sam: < to Strider > What are you doing?! Those wraiths are still out there!

< Arwen rides on as the Nazgul gives chase. Amongst the trees and over open spaces they rode in pursuit >

Arwen: Noro lim Asfaloth!!! (Ride faster Asfaloth!)

< Arwen reaches the river, and splashes across the ford. She pauses and looks back. The Nazgul have stops at the edge of the water >

Nazgul: Give up the half-fling she-elf!

Arwen: < draws her sword > If you want him, come and claim him!

< The Nazgul draws their sword and begin to cross the ford >

< Arwen casts a spell unto the river >
Arwen: Nin o Chithaeglir, lasto beth daer, Rimmo nin Bruinen dan in Ulair!
Nin o Chithaeglir, lasto beth daer, Rimmo nin Bruinen dan in Ulair! (Waters of the Misty Mountains listen to the great word; flow waters of Loudwater against the Ringwraiths!)

< Gradually, the water level rises. A great flood comes around the bend, with peaks like white horses. The Nazgul are cast from their mounts and washed away down the river >

< Frodo starts to slip from the horse. Arwen lays him on the ground >

Arwen: No! Frodo...No! Frodo, don’t give in! Not now!

< Arwen cries and embraces Frodo >

Arwen: < voice over > What grace is given me, let it pass to him, let him be spared, save him.

< Scene whites out, Elrond’s image appears >

Elrond: Lasto beth nin. Tolo dan nan galad. (Hear my voice, come back to the light)

< Scene opens with Frodo lying in bed at The House of Elrond, Rivendell >

Frodo: < half-asleep > Where am I?

Gandalf: You are in the house of Elrond. And it is 10 o’clock in the morning, on October the 24th if you want to know.

< Frodo wakes up >

Frodo: Gandalf!

Gandalf: Yes...I’m here. And you're lucky to be here too. A few more hours and you
would have been beyond our aid. But you have some strength in you, my dear hobbit!

Frodo: What happened Gandalf? Why didn't you meet us?

Gandalf: Oh I'm sorry Frodo... I was delayed.

< Flashback to Isengard. Saruman using his powers, flips Gandalf about then dangles him dangerously over the edge of Orthanc >

Saruman: Friendship with Saruman is not lightly thrown aside.

Saruman: One ill turn deserves another. It is over! Embrace the power of the Ring…or embrace your own destruction!

< flips Gandalf back towards the platform >

Gandalf: < slowly raises himself > There is only one Lord of the Ring! Only one can bend it to his will. And he does not share power!

< Gandalf leaps off the Tower of Orthanc and lands on Gwaihir's back >

Saruman: So you have chosen - death.

< Gwaihir flies over the mountains, bearing Gandalf to safety >
< End of Flashback. Scene returns to Rivendell >

Frodo: Gandalf? What is it?

Gandalf: Nothing Frodo.

< Sam enters the room >

Sam: Frodo! Frodo!

Frodo: Sam!

Sam: Bless you, you're awake!

< Frodo laughs >

Gandalf: Sam has hardly left your side.

Sam: We were that worried about you, weren't we Mr. Gandalf?

Gandalf: By the skills of Lord Elrond, you're beginning to mend.

Elrond: Welcome to Rivendell, Frodo Baggins.

< Reunion of the hobbits. Frodo sees Bilbo >

Frodo: Bilbo!

Bilbo: Hello Frodo my lad!

Frodo: Bilbo! < hug >

Bilbo: Oh!

< Next scene, Frodo reads Bilbo's book >

Frodo: "There and Back Again: A Hobbit's Tale by Bilbo Baggins". < leafs through the book > This is wonderful!

Bilbo: I meant to go back...wander the paths of Mirkwood... visit Laketown...see the Lonely Mountain again. But age it seems have finally caught up with me. < gives Frodo a playful smirk >

< Frodo leafing through the book, stops to look at the map of the Shire >

Frodo: I miss the Shire. I spent all my childhood, pretending I was off somewhere else…off with you on one of your adventures! < realizes sadly > My own adventure turned out to be quite different.

Frodo: I’m not like you Bilbo.

Bilbo: My dear boy.

< Scene goes to Sam packing his bag >

Sam: < to himself > Now what have I forgotten?

Frodo: Packed already?

Sam: No harm in being prepared.

Frodo: I thought you wanted to see the elves Sam.

Sam: I do!

Frodo: More than anything.

Sam: I did! Its just...we did what Gandalf wanted didn't we? We got the Ring this far
to Rivendell and then I thought, seen’ as how you’re on the mend, we'd be off soon. Off home.

Frodo: You're right Sam. We did what we set out to do. < shows the Ring on his palm > The Ring will be safe in Rivendell.

Frodo: I am ready to go home.

< Gandalf and Elrond watches Frodo and Sam from the balcony in Elrond's study >

Elrond: His strength returns.

Gandalf: That wound will never fully heal. He will carry it the rest of his life.

Elrond: And yet to have come so far, still bearing the Ring, the hobbit has shown extraordinary resilience to it's evil.

Gandalf: It is a burden he should never have had to bear. We can ask no more of Frodo.

Elrond: Gandalf, the enemy is moving. Sauron's forces are amassing in the east-- his eye is fixed on Rivendell. And Saruman you tell me has betrayed us. Our list of allies grows thin.

Gandalf: His treachery runs deeper than you know. By foul craft Saruman has crossed orcs with goblin-men, he's breeding an army in the caverns of Isengard. An army that can move in sunlight and cover great distance at speed. Saruman is coming for the Ring.

Elrond: This evil cannot be concealed by the power of the Elves. We do not have the strength to fight both Mordor and Isengard!

< Gandalf moves away, deep in thought >

Elrond: Gandalf, the Ring cannot stay here.

< Gandalf sees Boromir, Legolas and Gimli arrive at Rivendell >

Elrond: This peril belongs to all middle earth. They must decide now how to end it. The time of the Elves is over-- my people are leaving these shores. Who will you look to when we've gone? The Dwarves? They hide in their mountains seeking riches-- they care nothing for the troubles of others.

Gandalf: It is in Men that we must place our hope.

Elrond: Men? Men are weak. The race of men is failing. The blood of Numenor is all but spent. It's pride and dignity forgotten. It is because of men the Ring survives. I was there Gandalf. I was there three thousand years ago…

< Quick flashback to Isildur slicing the Ring off Sauron’s hand >

Elrond: Isildur took the Ring. I was there the day the strength of men failed.

< Return to flashback, Elrond and Isildur on the slopes of Mount Doom >

Elrond: Isildur hurry. Follow me.

Elrond: < voice over > I led Isildur into the heart of Mount Doom, where the Ring was forged, the one place it could be destroyed.

< At Sammath Naur, Elrond stands near the cracks of Doom >

Elrond: Cast it into the fire!

< Isildur looks at the Ring in his hand. The Ring whispers to him >

Elrond: Destroy it!

Isildur: No.

< Isildur walks away >

Elrond: Isildur!!!

Elrond: < voice over > It should’ve ended that day, but evil was allowed to endure.

< Flashback ends. Scene returns to Rivendell >

Elrond: Isildur kept the Ring. The line of kings is broken. There is no strength left in the world of men. They’re scattered, divided, leaderless.

Gandalf: There is one who could unite them, one who could reclaim the throne of Gondor.

Elrond: He turned from that path long time ago. He has chosen exile.

< Interior shot in Rivendell. Cut to Aragorn is reading a book. Boromir enters and pauses to regard the painting of Isildur and Sauron. Then he turns to the shrine and sees the broken sword lying there. He picks up the haft and stares at the blade >

Boromir: The shards of Narsil! The blade that cut the ring from Sauron's hand!

< Boromir runs his finger up the blade and cuts himself >

Boromir: < in amazement > It's still sharp!

< Turns to look at Aragorn who is watching him >

Boromir: < in disdain > No more than a broken heirloom!

< He returns the sword carelessly and it clatters to the ground. Boromir walks away. Aragorn gets up and walks to the shrine. He picks up the dropped haft and carefully sets it in place with the other shards. He takes a step back and touches his right hand to his heart, as he looks at the shrine. Arwen walks in behind him >

Arwen: Why do you fear the past? You are Isildur's heir, not Isildur himself. You are not bound to his fate.

Aragorn: The same blood flows in my veins. < turns to Arwen > Same weakness.

Arwen: Your time will come. You will face the same evil, and you will defeat it. A si i-Dhúath ú-orthor. Ú or le a ú or nin. (The Shadow does not hold sway yet, not over you and not over me.)

< Scene goes to Arwen and Aragorn, in the garden at twilight, standing atop of a bridge >

Arwen: Renech i lu i erui govannen? (Do you remember when we first met?)

Aragorn: Nauthannem i ned ol reniannen. (I thought I had strayed into a dream.)

Arwen: < tenderly touches Aragorn’s cheek > Gwenwin in enninath...U-arnech in naeth i si celich. (Long years have passed…You did not have the cares you carry now.)

Arwen: Renech i beth i pennen? (Do you remember what I told you?)

Aragorn: < his fingers run across the Evenstar pendant > You said you'd bind yourself to me. Forsaking the immortal life of your people.

Arwen: And to that I hold. I would rather share one lifetime with you than face all the ages of this world alone.

< Arwen gives Aragorn the Evenstar >

Arwen: I choose a mortal life.

Aragorn: You cannot give me this!

Arwen: It is mine to give to whom I will...like my heart.
< They kiss >

< The following morning, at the Council of Elrond. Gandalf and Frodo along with a congregation of Men, Elves and Dwarves sit in a semi-circle around a stone pedestal >

Elrond: Strangers from distant lands, friends of old. You have been summoned here to answer the threat of Mordor. Middle-Earth stands upon the brink of destruction. None can escape it. You will unite or you will fall. Each race is bound to this fate--this one doom. < gestures to the pedestal > Bring forth the Ring, Frodo.

< Frodo rises and lays the Ring on the pedestal and returns to his seat >

< People starts whispering >

Boromir: So it is true...

Man of Laketown: The Doom of Men

Boromir: < shakes head > It is a gift. A gift to the foes of Mordor. Why not use this Ring? < paces > Long has my father, the Steward of Gondor, kept the forces of Mordor at bay. By the blood of our people are your lands kept safe! Give Gondor the weapon of the enemy. Let us use it against him!

Aragorn: You cannot wield it! None of us can. The One Ring answers to Sauron alone. It has no other master.

Boromir: And what would a ranger know of this matter?

< Legolas stands suddenly >

Legolas: This is no mere ranger. He is Aragorn, son of Arathorn. You owe him your allegiance.

Boromir: Aragorn? This... is Isildur's heir?

Legolas: And heir to the throne of Gondor.

< Frodo looks wide-eyed at Aragorn >

Aragorn: Havo dad Legolas (Sit down Legolas)

Boromir: Gondor has no king. Gondor needs no king. < returns to his seat >

Gandalf: Aragorn is right. We cannot use it.

Elrond: You have only one choice. The Ring must be destroyed.

Gimli: What are we waiting for?

< Gimli grabs an axe and approaches the pedestal >

Gimli: ARGH!!!!

< Gimli strikes the Ring with full force but is repelled back, throwing him to the ground. Concurrently, Frodo sees the Eye of Sauron in his mind and winces in pain. The Ring remains intact with the shards of the axe all around it >

< Whispers in the black tongue issue forth from the Ring >

Elrond: The Ring cannot be destroyed, Gimli, son of Gloin by any craft that we here possess. The Ring was made in the fires of Mount Doom. Only there can it be unmade. It must be taken deep into Mordor and cast back into the fiery chasm from whence it came.

< Ring whispers: Ash Nazg >

Elrond: One of you must do this.

< Dead silence from the council >

Boromir: One does not simply walk into Mordor. Its black gates are guarded by more than just orcs. There is evil there that does not sleep. And the great Eye is ever watchful. It is a barren wasteland. Riddled with fire and ash and dust. The very air you breathe is a poisonous fume. Not with ten thousand men could you do this. It is folly!

Legolas: < stands indignantly > Have you heard nothing Lord Elrond has said? The Ring must be destroyed!

Gimli: < leaps to his feet > And I suppose you think you're the one to do it?!

Boromir: < rises > And if we fail, what then?! What happens when Sauron takes back what is his?!

Gimli: I will be dead before I see the Ring in the hands of an elf!

< Commotion starts as arguments erupt amongst the council members >

Gimli: Never trust an elf!

Gandalf: Do you not understand that while we bicker amongst ourselves, Sauron's power grows?! None can escape it!

< Frodo remains seated, watching the Ring uneasily, the angry figures of the council reflected on its surface. Suddenly, flames flare up, engulfing the surface of the Ring >

Ring: Ash Nazg Durbatuluk! Ash Nazg Gimbatul! Ash Nazg Gimbatul! Ash Nazg Gimbatul!

< The intensity of the arguments increase. Slowly, determination dawns on Frodo’s face. He stands and takes a few steps toward the arguing council, trying to make his voice heard above the din >

Frodo: I will take it! I will take it!

< The argument dies down. Gandalf closes is eyes as he hears Frodo’s statement. The members of the council slowly turn towards Frodo, astonished >

Frodo: I will take the Ring to Mordor. Though-- I do not know the way.

Gandalf: < walks towards Frodo > I will help you bear this burden, Frodo Baggins, so long as it is yours to bear. < places his hands reassuringly on Frodo’s shoulders >

Aragorn: < rises > If by my life or death, I can protect you, I will.

< approaches Frodo and keels before him >

Aragorn: You have my sword.

Legolas: And you have my bow. < walks to join them >

Gimli: And my axe! < looks grimly at Legolas as he joins the group >

Boromir: < walks over to them > You carry the fates of us all little one. If this is indeed the will of the council, then Gondor will see it done.

Sam: Heh! < jumps from behind the bushes and joins them > Mr. Frodo is not goin’ anywhere without me!

Elrond: < amused > No indeed, it is hardly possible to separate you even when he is summoned to a secret council and you are not.

Pippin and Merry: < emerges from behind the pillars to join them > Wait! We are coming too!

Merry: You'd have to send us home tied up in a sack to stop us!

Pippin: Anyway you need people of intelligence on this sort of mission, quest... thing.

Merry: Well that rules you out Pip.

Elrond: Nine companions... So be it! You shall be the Fellowship of the Ring!

Pippin: Great! Where are we going?

< Scene goes to Bilbo’s room >

Bilbo: My old sword, Sting! Here! Take it, take it!

< Frodo unsheathes the sword and examines it >

Frodo: It’s so light!

Bilbo: Yes...yea--made by the elves you know. The blade glows blue when orcs are close. And its times like that my lad, when you'll have to be extra careful!

< Bilbo brings out a mail shirt >

Bilbo: Here’s a pretty thing --Mithril! As light as a feather! And as hard as dragon scales! Let me see you put it on. Go on.

< Bilbo sees the Ring hanging on a chain around Frodo’s neck >

Bilbo: Oh...M-my old Ring! Oh well… I sh-sh-should very much like, to hold it again, one last time.

< Frodo begins to cover up the Ring >
< Bilbo, transformed by the power of the Ring, lashes out. Frodo, startled, backs away. Bilbo soon regains his composure. He then sits on the bed weeping >

Bilbo: I’m sorry I brought this upon you my boy...I’m sorry that you must carry this burden. I’m sorry for everything!

< Frodo places a reassuring hand on Bilbo’s shoulder >

< The Fellowship departs from Rivendell. They travel through the woods, over open plains and hillsides. They pause on a hill in the wild >

Gandalf: < voice over > We must hold this course west of the Misty Mountains for 40 days. If our luck holds the Gap of Rohan will still be open to us. From there our road turns east to Mordor.

< Boromir spars with Merry and Pippin, tutoring them on sword fighting >

Boromir: Two, Three, Four, Five. Good, very good.

Aragorn: Move your feet.

Merry: That’s good, Pippin.

Pippin: Thanks.

Boromir: Faster

Gimli: ‘Anyone was to ask for my opinion, which I note they’re not, I’d say we were taking the long way round. Gandalf, we could pass through the Mines of Moria. My cousin Balin would give us a royal welcome.

Gandalf: No Gimli, I would not take the roads through Moria unless I had no other choice.

< Legolas notices something amiss and looks intently towards the South >

Boromir: Come on. Good.

< Boromir accidentally nicks Pippin’s hand >

Pippin: Aaaah!

Boromir: Sorry!

< Pippin kicks Boromir on the shin >

Boromir: Ahh!

Merry: Get Him!

< Boromir goes down in mock battle and Boromir and Aragorn laughs >

Pippin: For the Shire!

Pippin: Hold him! Hold him Merry!

Merry: He got my arm! He got my arm!

< taking notice of Legolas’ observation >
Sam: What is that?

Gimli: Nothing, it’s just a whiff of cloud.

Boromir: It’s moving fast…against the wind.

Legolas: Crebain from Dunland!

Aragorn: Hide!

Boromir: Merry! Frodo!

Aragorn: Come on, come on! Take cover!

< The Fellowship scrambles to gather their things. Sam puts out the fire. They hide behind rock outcroppings and under bushes. Just then, a flock of black birds rushes overhead, cawing loudly. They circle the hill, then turn and fly back Southward >

Gandalf: Spies of Saruman! The passage south is being watched. We must take the Pass of Caradhras.

< The Fellowship climbs the snowy slopes of Caradhras. Frodo looses his footing and falls, rolling down the slope towards Aragorn >

Frodo: Ungh!

Aragorn: Frodo! < helps him to his feet >

< Frodo searches himself for the Ring. Finding it missing, he looks back up the slope. Boromir, sees the Ring on the snow and picks it up by its chain >

Aragorn: Boromir.

Boromir: It is a strange fate we should suffer so much fear and doubt over so small a thing… such a little thing.

Aragorn: Boromir! Give the Ring to Frodo.

Boromir: < hands it to Frodo > As you wish. I care not.

< Frodo grabs the Ring from him. Boromir jokingly tousles Frodo’s hair then turns to resume climbing. Frodo looks on suspiciously. Aragorn releases his grip from his sword >

< Scene goes to Crebain returning to Isengard- beneath Orthanc >
Saruman: So, Gandalf, you try to lead them over Caradhras. And if that fails, where then will you go? If the mountain defeats you will you risk a more dangerous road?

< Scene - The Pass of Caradhras >

< Fellowship with the exception of Legolas plods through the snow >

< Voice of Saruman is heard >
Saruman: Cuiva nwalca Carnirasse; nai yarvaxea rasselya! (Wake up cruel Redhorn! May your horn be bloodstained!)

Legolas: There is a fell voice on the air.

Gandalf: Its Saruman!

< First avalanche falls. It misses the Fellowship by a hair >

Aragorn: He’s trying to bring down the mountain! Gandalf, we must turn back!

Gandalf: No!

< Gandalf rises on the snow, chants out counter spell >

Gandalf: Losto Caradhras, sedho, hodo, nuitho i 'ruith! (Sleep Caradhras, be still, lie still, hold your wrath!)

< Saruman stands on the Pinnacle of Orthanc continues to cast spells on Caradhras >
Saruman: Cuiva nwalca Carnirasse; Nai yarvaxea rasselya; taltuva notto-carinnar! (Wake up cruel Redhorn! May your bloodstained horn fall upon enemy heads!)

< lightning strikes the tip of Caradhras sending a second avalanche onto the Fellowship below. Legolas snatches Gandalf from the edge, pulling him against the cliff just before the snow buries them completely. After a moment, they emerge from the snow >

Boromir: We must get off the mountain! Make for the Gap of Rohan and take the west road to my city!

Aragorn: The Gap of Rohan takes us too close to Isengard!

Gimli: If we cannot pass over a mountain, let us go under it. Let us go through the mines of Moria.

< Scene flashes to Saruman in his chamber in Orthanc, reading a page in the book of lore >

Saruman: Moria. You fear to go into those mines. The dwarves delved too greedily and too deep. You know what they awoke in the darkness of Khazad-dum: Shadow and Flame!

< Scene returns to Caradhras >

Gandalf: < grimly > Let the Ring bearer decide.

Gandalf: Frodo?

Frodo: We will go through the mines.

Gandalf: So be it.

< Nest scene: The Fellowship arrives at the West Gate of Moria >

Gimli: < in awe > The walls of Moria!

< Fellowship walks by the side of the lake. Frodo’s foot slips into the water >

Frodo: < gasp >

< Gandalf makes out an outline of the doors >

Gandalf: Now, let’s see. Ithildin -- it mirrors only starlight and moonlight.

< Moon appears. Doors illuminate >

Gandalf: It reads "The doors of Durin - Lord of Moria. Speak friend and enter."

Merry: What do you suppose that means?

Gandalf: Oh it’s quite simple. If you are a friend you speak the password and the doors will open.

Gandalf: Annon Edhellen edro hi ammen! (Gate of the Elves open now for me!)

< Doors remain closed. Gandalf begins to push it with his staff >

< Time passes. The rest of the Fellowship are seated around the doors or near the lake, still waiting for Gandalf to open it >

Gandalf: Ando Eldarinwa a lasta quettanya, Fenda Casarinwa! (Gate of Elves listen to my word, Threshold of Dwarves!)

Aragorn: < unhitches Bill’s bridle > The mines are no place for a pony, even one so brave as Bill.

Sam: < sadly > Buh-bye Bill

Aragorn: Go on, Bill, go on. Don’t worry Sam, he knows the way home.

< Merry begins to throw stones into the water. Pippin follows suit but Aragorn stops him >

Aragorn: Do not disturb the water.

Gandalf: < exasperated > Oh, it’s useless!

< Frodo stands and looks at the writings intently >
Frodo: It’s a riddle. Speak "friend" and enter. What’s the Elvish word for friend?

Gandalf: Mellon

< The stone doors slowly swing open. The Fellowship enters Moria >

Gimli: Soon master elf you will enjoy the fabled hospitality of the dwarves. Roaring fires, malt beer, ripe meat off the bone. This, my friend, is the home of my cousin Balin. And they call it a mine. A mine!

Boromir: This is no mine, it’s a tomb!

< Dwarf corpses litter the floor >

Gimli: Oh! No! Noooo!!!

< Legolas picks up an arrow from the body of a fallen dwarf, examines it and casts it away in disgust >

Legolas: Goblins!

< Legolas, Aragorn and Boromir draw out their swords >

Boromir: We make for the Gap of Rohan. We should never have come here.

< The four hobbits are backing toward the door. Something stirs in the water behind them >

Boromir: Now get out of here, get out!

< The whole company starts for the door. Suddenly, Frodo is grabbed from behind and pulled off his feet by the Watcher in the water >

Sam, Merry, and Pippin: Frodo!

Sam: Strider! < hacks at tentacle > Get off him!

< The watcher releases Frodo for a split-second, and feigns to disappear under the water. Suddenly as many tentacles come boiling out of the water its slaps the other hobbits aside and grab Frodo around the leg. He is pulled out over the water and into the air >

Frodo: aah!

Merry: Aragorn!

< Legolas shoots one of the tentacles holding Frodo. Boromir and Aragorn rush to the water with their swords, and attack the Watcher. It flings Frodo wildly in the air. Boromir slices the main tentacle holding Frodo’s leg. Frodo falls, and Boromir catches him. Aragorn and Boromir retreat towards the shore >

Gandalf: Into the Mines!

Boromir: Legolas! Aim for his eye! Come on!

< Legolas shoots an arrow straight into the Watcher’s eye. It pulls back and as the Fellowship race into Moria, it reaches out and slams the gates shut. Slabs of rocks drop and the roof of the passageway collapses. Total darkness falls. Then a beam of light emits from Gandalf’s staff, showing the startled faces of the Fellowship >

Gandalf: We now have but one choice. We must face the long dark of Moria. Be on your guard. There are older and fouler things than orcs in the deep places of the world.

< The Fellowship carefully picks its way over the floor and up the broad steps >

Gandalf: Quietly now. It’s a four-day journey to the other side. Let us hope that our presence may go unnoticed.

< The Fellowship enters a great cavern with a serpentine walkway down through the middle. They then climb up steep steps on the side of a cavern with its many buildings and stalagmites above them. Pippin looses his footing and slips onto Merry >

Merry: Pippin!

< On the fourth day of their journey, the Fellowship climbs another flight of stairs to a crossroads in the mine: three portals loom before them >

Gandalf: I have no memory of this place

< The Fellowship rests while Gandalf tries to decide their course >

Pippin: Are we lost?

Merry: No.

Pippin: I think we are.

Sam: Shhh! Gandalf’s thinking.

Pippin: Merry?

Merry: What?

Pippin: I’m hungry.

< Frodo looks down into the cavern and sees a small figure leaping from stone to stone. Startled, he walks over to where Gandalf is sitting >

Frodo: There’s something down there.

Gandalf: It’s Gollum.

Frodo: Gollum?

Gandalf: He’s been following us for three days.

Frodo: He escaped the dungeons of Barad-Dur!

Gandalf: Escaped? Or set loose?

< From the distance below, Gollum looks up, his large eyes pierces the darkness and observes the company >

Gandalf: He hates and loves the Ring, as he hates and loves himself. He will never be rid of his need for it.

Frodo: It’s a pity Bilbo didn’t kill him when he had the chance!

Gandalf: Pity? It was pity that stayed Bilbo’s hand. Many that live deserve death, and some that die deserve life. Can you give it to them, Frodo?

Gandalf: Do not be too eager to deal out death in judgement. Even the very wise can not see all ends. My heart tells me that Gollum has some part to play yet, for good or ill, before this is over. The pity of Bilbo may rule the fate of many.

< Gollum slinks off. Frodo sits down next to Gandalf >

Frodo: I wish the Ring had never come to me. I wish none of this had happened.

Gandalf: So do all who live to see such times, but that is not for them to decide. All we have to decide is what to do with the time that is given to us. There are other forces at work in this world Frodo besides the will of evil. Bilbo was meant to find the Ring, in which case you also were meant to have it. And that is an encouraging thought.

Gandalf: < looks towards one of the doorways > Ah! It’s that way.

Merry: He’s remembered!

Gandalf: No, but the air doesn’t smell so foul down here. If in doubt, Meriadoc, always follow your nose.

< The Fellowship heads down the left-hand passage, and before long they come to a more open space >

Gandalf: Let me risk a little more light.

< His staff illuminates a grandiose hall of stone lined with tall pillars and arched ceilings as far as the eye can see. Members of the Fellowship, including Gimli, react in awe >

Gandalf: Behold the great realm and dwarf city of Dwarrowdelf.

Sam: Now there’s an eye opener and no mistake.

< Fellowship walks forward through the hall. Gimli sees a ray of sunlight shining through the Chamber of Mazarbul. Corpses lay scattered about >

Gimli: Haugh!

Gandalf: Gimli!

< Gimli pays no heed to Gandalf, but runs into the chamber. He stops and kneels by a crypt >

Gimli: No! No! < sob > No! < sob >

< Boromir moves forward and places his hand on Gimli’s shoulder >

Gandalf: < translates the runes on the tomb > "Here lies Balin, son of Fundin, Lord of Moria." He is dead then. Its as I feared.

Gimli: < wails >

< Gandalf gives his staff and hat to Pippin, bends down, and takes from the grasp of a corpse a large and battered book. He opens it and clears the dirt from its pages >

Legolas: < to Aragorn > We must move on, we cannot linger!

Gandalf: < reading > "They have taken the bridge, and the second hall. We have barred the gates, but cannot hold them for long. The ground shakes. Drums, drums in the deep. < turns the page > We cannot get out. A Shadow moves in the dark. We cannot get out…They are coming."

< Pippin sees a corpse sitting by a stone well with an arrow in its chest. Curiously, he reaches out and lightly touches the arrow. The arrowhead breaks off from the rest of the corpse, causing first the skull, then the body, then the chain and bucket to go over the side of the well and drop far below, its noise echo from hall to hall. He winces at each new wave of noise. Then silence. The Fellowship begins to relax >

Gandalf: < slams the book shut > Fool of a Took! Throw yourself in next time and rid us of your stupidity!

< Just then, drums echo up from deep below. Terror creeps into their faces >

Sam: Frodo! < Sting glows blue >

Legolas: Orcs!

< Boromir goes to the door to have a look. Arrows are shot and hits the door near his face >

Aragorn: < to the Hobbits > Get back! Stay close to Gandalf!

< Aragorn, dropping his torch, runs to Boromir and closes the doors. A troll can be heard just outside >

Boromir: They have a cave troll.

< Legolas tosses weapons to Boromir and Aragorn to help blockade the door. Fellowship draws out their weapons Gimli leaps atop Balin's tomb and brandishes his axe >

Gimli: Aarrgghhh!!! Let them come! There is one dwarf yet in Moria that still draws breath!

< Orcs begin breaking the door down. Legolas and Aragorn shoot at them through the holes in the door. The orcs break through and the battle begins. The Fellowship engages the orcs >

< A cave troll smashes through the doorway. Legolas shoots him; he growls. Sam looks up, sees the troll swinging his mace down at him, and runs under the troll's legs. The troll swings twice at Gimli, but hits first the tomb, then an Orc instead. The battle rages on >

Sam: < hits orcs with skillet > I think I’m getting the hang of this.

< Legolas kills orcs on a ledge on one wall. The troll swings his chain at Legolas, who avoids it until the troll wraps it around a pillar. Legolas stamps the chain tight and then runs along it onto the troll's head. He shoots the troll and then jumps off >

< The troll continues to seek Frodo who tries to evade its searches by hiding around the pillar. The troll finds him nevertheless and grabs him. Frodo falls on his back into a corner. The troll lifts and drags Frodo off the edge >

Frodo: Aragorn? Aragorn!

< Frodo stabs the troll's hand with Sting. The troll drops Frodo to the ground >

Aragorn: Frodo! Yaaahh!

< Aragorn grabs a spear from the floor and stabs the troll with it. The troll, infuriated, hits Aragorn and sends him flying across the room. He collapses onto the floor. Frodo races after him and tries to rouse him, but Aragorn is too stunned to move >

< Frodo begins to run but the troll blocks Frodo’s path with its spear, throwing him back. The troll takes aim and stabs Frodo on the chest >

Frodo: < being stabbed > Ungh!

Sam: Frodo? Frodo!

< Frodo slumps to the floor >

Merry and Pippin: Yaahh!

< They leap onto the troll's head and start stabbing him. The troll flails at its head, finally grabbing Merry, swinging him around and throws him to the ground. The Fellowship redoubles its efforts against Orcs and troll. Gandalf and Gimli take turns stabbing at the troll and dodging out of range. Legolas takes aim. With Pippin stabbing the troll one more time on the head, the troll opens its mouth. Legolas delivers the deathblow >

< The troll moans then collapses to the ground. Pippin is thrown against the floor and is knocked out. There is a moment of silence. All Orcs are dead or has fled >

Aragorn: Oh no!

< He runs towards Frodo and turns him over. Frodo groans >

Sam: He’s alive!

Frodo: I’m all right, I’m not hurt.

Aragorn: You should be dead! That spear would have skewered a wild boar.

Gandalf: I think there’s more to this hobbit than meets the eye.

< Frodo reveals his Mithril shirt >

Gimli: Mithril! You are full of surprises Master Baggins.

< Orcs are once again heard down the hall >

Gandalf: To the bridge of Khazad-dum!

< The Fellowship runs out the rear door of the chamber, closely pursued by an army of orcs. Other orcs spring out from the floor or crawl from the ceiling and down the pillars like spiders. They surround the Fellowship, who have drawn their weapons outward. Just then a fiery light appears at the end of a hall followed by a thunderous growl. The orcs, dismayed, flee panicking in all directions >

Boromir: What is this new devilry?

Gandalf: A Balrog-- a demon of the ancient world. This foe is beyond any of you. Run!

< The Fellowship enters a passageway, then down a flight of steps. Parts of the steps end into a chasm and Boromir nearly falls into one. Legolas pulls him back. The Hobbits too stop short of falling in. They take another flight of stairs down. Aragorn and Gandalf bring up the rear >

Aragorn: Gandalf.

Gandalf: Lead them on Aragorn. The bridge is near. < Aragorn resists > Do as I say! Swords are no more use here.

< The Fellowship encounter a gap on the stairs. Legolas leaps forward and lands on the other side >

Legolas: < beckons > Gandalf.

< Gandalf leaps after him >

< Arrows whistles into the air, striking the stone steps at their feet. Legolas and Aragorn shoots back >

Boromir: Merry! Pippin! Hoo-aah!
< He takes Merry and Pippin, one on each side, and leaps forward >

Aragorn: Sam.
< He pitches Sam to the other side and is caught by Boromir >

< Aragorn reaches to pick up Gimli >

Gimli: < holds up his hand > Nobody tosses a dwarf.

< He leaps forward but nearly falls back into the chasm. Legolas grabs his beard >

Gimli: Not the beard!

< Some of the stone steps crumble and fall into the abyss. Aragorn pushes Frodo back up the steps and clambers after him. They struggle to their feet and look at the widened gap that separates them from the rest of the fellowship. The Balrog is heard approaching from the other hall, its the fiery light is seen getting closer. Stone structures around the mine collapse as it draws near. A huge rock falls from the ceiling and smashes down the steps behind Aragorn and Frodo, creating another gap behind them and weakening the stairs’ foundation. The stairs begin to wobble >

Aragorn: Stay there. Hold on. Hang on! Lean forward!

Legolas: Come on!

< They shift their weight forward, tipping the stairs across the divide and slamming onto the steps where their companions are. They leap across to safety. Turning, they continue to run down the stairs as the stone structures collapse behind them >

Gandalf: Over the bridge! Fly!

< The Fellowship crosses the bridge. Gandalf turns to face the Balrog >
< The Balrog growls >

Gandalf: You cannot pass!

Frodo: Gandalf!

< A blazing light radiate from Gandalf’s staff, illuminating the entire bridge >

Gandalf: I am the servant of the secret fire, wielder of the flame of Anor. The dark fire will not avail you! Flame of Udun!

< The Balrog strikes down on Gandalf with its flaming sword. Gandalf parries the blow with Glamdring, shattering the Balrog’s sword >

Gandalf: Go back to the shadow!

< The Balrog brandishes a flaming whip, lashing it about menacingly >

Gandalf: YOU…SHALL NOT...PASS!!!

< Gandalf strikes his staff onto the bridge. As the Balrog steps forward, the bridge collapses from under it and the demon plunges backward into the chasm. Gandalf, exhausted, leans on his staff and watches the Balrog fall then turns to follow the others. At the last minute, the flaming whip lashes up from the depths of the abyss and wounds about Gandalf’s ankle, dragging him over the edge. He clings onto the bridge but is straining to keep his grip >

< Frodo rushes forward but Boromir restrains him >

Boromir: No, Frodo!

Frodo: Gandaaaaalf!

Gandalf: Fly you fools!

< Gandalf loses his grip and falls into the chasm >

Frodo: Noooooooooooooooo!!!!

< Boromir grabs hold of Frodo and starts to leave >

Boromir: Aragorn!

Frodo: Noooooooooooo!!!

< Aragorn is stunned. He stares at the bridge in disbelief. For a moment he does not move, but then orc arrows start whistling by once again, shooting at the companions. Dodging, he turns and follows the others up the stairs >

< The Fellowship comes streaming out of the East Gate of Moria. Everyone is distraught. Sam sits on the ground, bows his head onto his hands and begins to weep. Merry consoles Pippin, who lay crying. Boromir tries to restrain Gimli as the dwarf vents out his rage and sorrow. Legolas wears a look of shock and disbelief >

< Aragorn wipes his sword clean, re-sheathes it and turns to the others >

Aragorn: Legolas, get them up.

Boromir: Give them a moment for pity's sake.

Aragorn: By nightfall these hills will be swarming with orcs! We must reach the Woods of Lothlorien. Come Boromir, Legolas, Gimli, get them up.

Aragorn: < he reaches down and lifts Sam up > On your feet Sam. < looks around > Frodo? Frodo!

< Frodo, a few paces away, grieves alone. Weeping silently, he turns towards Aragorn >

< Next scene: The Fellowship crosses Dimrill Dale and enters the Woods of Lothlorien >

Gimli: Stay close young hobbits! They say there’s a great sorceress lives in these woods, an elf-witch of terrible power. All who look upon her, fall under her spell...

Galadriel’s Voice: < whispering echo > Frodo....

< Frodo, startled, looks around >

Gimli: ... and are never seen again.

Galadriel’s Voice: …Your coming to us… is as the footsteps of doom. You bring great evil here Ring bearer!

Sam: Mr. Frodo?

Gimli: Well, here is one dwarf she won't ensnare so easily. I have the eyes of a hawk and the ears of a fox!

< With arrows notched, Lorien elves suddenly appear from behind the trees, aiming at them. The Fellowship stops and look around, alarmed >

Gimli: Oh...

Haldir: The dwarf breathes so loud we could have shot him in the dark.

Gimli: Grrr....

Aragorn: Haldir o Lórien. Henion aníron, boe ammen i dulu lîn. Boe ammen veriad lîn.

(Haldir of Lorien, we come here for help. We need your protection.)

Gimli: Aragorn, these woods are perilous! We should go back.

Haldir: You have entered the realm of the Lady of the Wood. You cannot go back. Come, she is waiting.

< The Fellowship arrive at Caras Galadhon. They ascend a winding stairway amongst the trees, towards the grand court of Galadriel and Celeborn. With a glow issuing forth from them, the Lord and Lady of Lothlorien descend to meet the Fellowship, hand in hand. Aragorn touches his head reverently in greeting >

Celeborn: Eight that are here yet nine there were set out from Rivendell. Tell me where is Gandalf? For I much desire to speak with him.

< Galadriel looks at Aragorn, reading the answer in his eyes >

Galadriel: He has fallen into shadow.

Galadriel: The quest stands upon the edge of a knife. Stray but a little and it will fail to the ruin of all.

< Galadriel looks at Boromir who can't stand her gaze. He starts shaking and casts his eyes downwards >

Galadriel: Yet hope remains while the company is true.

< Galadriel looks at Sam and smiles. Sam continues to gaze at her >

Galadriel: Do not let your hearts be troubled. Go now and rest for you are weary with sorrow and much toil. Tonight you will sleep in peace. < whispers to Frodo in his mind > Welcome Frodo of the Shire. One who has seen the Eye!

< Later, back on the ground, an area has been provided for them to rest in. The hobbits are settling down to rest. In the trees, the elves singing can be heard >

A Olorin i yaresse ( Olorin, who once was...)

Mentaner i Numeherui… (sent by the Lords of the West…)

Legolas: < pensive > A lament for Gandalf.

Merry: What do they say about him?

Legolas: I have not the heart to tell you. For me the grief is still too near.

Tirien i Romenori (to guard the lands of the East…)
Maiarion i Oiosaila…(wisest of all Maiar…)

Mana elye etevanne…(what drove you to leave…)

Norie i melanelye? (that which you loved?)

< Aragorn walks over to Boromir, who is seated alone on a great tree root >

Aragorn: Take some rest. These borders are well protected.

Boromir: I will find no rest here. I heard her voice inside my head. She spoke of my father and the fall of Gondor. She said to me even now there is hope left. But I cannot see it. It is long since we had any hope.

Boromir: My father is a noble man, but his rule is failing. And now our…our people lose faith. He looks to me to make things right and I would do it. I would see the glory of Gondor restored. < sigh > Have you ever seen it Aragorn? White tower of Ecthelion, glimmering like a spike of pearl and silver. It's banners caught high in the morning breeze. Have you ever been called home by the clear ringing of silver trumpets?

Aragorn: I have seen the White City, long ago.

Boromir: One day, our paths will lead us there. And the tower guards shall take up the call: The Lords of Gondor have returned!

< The Fellowship is asleep. Galadriel walks by. Frodo wakes up with a start and proceeds to follow her. Galadriel descends to her garden and fills the ewer with water. She turns towards Frodo >

Galadriel: Will you look into the mirror?

Frodo: What will I see?

Galadriel: Even the wisest cannot tell. For the mirror shows many things.

< She begins to pour the water into the silver basin >

Galadriel: Things that were, things that are and some things… < empties the ewer > that have not yet come to pass.

< Frodo steps up to the mirror to take a look. He peers down and sees nothing but his reflection. The suddenly the mirror clears and shows a vision of Legolas, Merry and Pippin, then Sam. He sees Bag End, then the burning of Hobbiton, the enslavement of the Hobbits and the destruction of the Shire. Then the Eye of Sauron fills the mirror. The Ring hanging from his neck pulls him closer to the water. Steam begins to curl up from the basin as Sauron speaks to Frodo in Black Speech. Terrified, he grabs the Ring and jerks back, throwing himself off the step and landing on his back on the forest floor >

Galadriel: I know what it is you saw, for it is also in my mind. < speaks to Frodo telepathically > It is what will come to pass if you should fail. The Fellowship is breaking. It has already begun. He will try to take the Ring. You know of whom I speak. One by one it will destroy them all.

Frodo: < telepathically > If you ask it of me, I will give you the One Ring.

< Opening his palm, he offers the Ring to her >

Galadriel: You offer it to me freely. I do not deny that my heart has greatly desired this.

< She approaches Frodo and places her hand over the Ring. Her image begins to change >

Galadriel: In place OF A DARK LORD, YOU WILL HAVE A QUEEN! NOT DARK BUT BEAUTIFUL AND TERRIBLE AS THE DAWN! TREACHEROUS AS THE SEA! STRONGER THAN THE FOUNDATIONS OF THE EARTH! ALL SHALL LOVE ME AND DISPAIR!

< Galadriel’s image returns to normal >

Galadriel: I pass the test! I will diminish, and go into the West, and remain Galadriel.

Frodo: I cannot do this alone.

Galadriel: You are a Ring bearer, Frodo. To bear a Ring of power is to be alone. This task was appointed to you and if you do not find a way, no one will.

Frodo: Then I know what I must do. It's just… I'm afraid to do it.

< Galadriel bends down to meet him at eye level >

Galadriel: Even the smallest person can change the course of the future.

< Scene goes to Orthanc in Isengard. Saruman and Lurtz are standing in the central chamber >

Saruman: Do you know how the Orcs first came into being? They were elves once, taken by the dark powers. Tortured and mutilated: a ruined and terrible form of life. Now...perfected: my fighting Uruk-Hai. Whom do you serve?

Lurtz: Saruman!

< The Uruk-Hai wear their armor and are given their weapons. They receive a white handprint on their heads and faces, signifying Saruman’s army. They then assemble before him >

Saruman: < to the troops > Hunt them down. Do not stop until they are found. You do not know pain. You do not know fear. You will taste man flesh!

Saruman: < to Lurtz > One of the halflings carries something of great value. Bring them to me alive and unspoiled. Kill the others!

< Uruk-Hai troop leaves Isengard >

< Scene returns to Lothlorien >

Galadriel: Farewell, Frodo Baggins. I give you the light of Earendil, our most beloved star.

Galadriel: Namarie.

Galadriel: May it be a light for you in dark places, when all other lights go out.

< Galadriel raises her hand in farewell as the Fellowship canoes down the river >

< The Uruk-Hai march along through the forest as the three boats carrying the Fellowship float along the Anduin >

< The Fellowship’s boats pass through a canyon. Aragorn lifts his head, half-smiles and taps Frodo on the shoulder >

Aragorn: Frodo, the Argonath! Long have I desired to look upon the kings of old. My kin.

< The Fellowship looks up in awe at the towering splendor of the Argonath. Two majestic statues, carved right out of the rock, proudly stand on each side of the Anduin. Their left arms are held aloft, their palms facing outwards in gesture of warning. Solemn and stern were their faces, the silent wardens of a long vanished kingdom >

< The Fellowship reaches the foot of Amon Hen, the Hill of Sight. As they disembark on the gravel beach of Parth Galen, Boromir looks troubled and appears to be fighting a conflict within him. Frodo looks perturbed. The Fellowship starts to make camp >

Aragorn: We cross the lake at nightfall. Hide the boats and continue on foot. We approach Mordor from the north.

Gimli: Oh, yes?! It's just a simple matter of finding our way through Emyn Muil? An impassable labyrinth of razor sharp rocks! And after that, it gets even better! < Pippin looks up, alarmed > Festering, stinking marshlands far as the eye can see!

Aragorn: That is our road. I suggest you take some rest and recover your strength master dwarf.

Gimli: Recover my…?! Phrrrrr...

Legolas: < quietly to Aragorn > We should leave now.

Aragorn: No. Orcs patrol the eastern shore. We must wait for cover of darkness.

Legolas: It is not the eastern shore that worries me. A shadow and a threat has been growing in my mind. Something draws near...I can feel it!

Gimli: No dwarf need recover strength! < to Pippin > Pay no heed to that, young hobbit.

< Merry, returning with some wood for the campfire, looks around >

Merry: Where's Frodo?

< Sam, who was half-dozing, rouses with a start. Aragorn looks over the camp. His gaze stops on Boromir’s shield, lying with the baggage >

< Frodo wanders into the forest. He stands by an immense stone head, lying with its side on the ground. Boromir, gathering wood, sees Frodo and approaches him >

Boromir: None of us should wander alone, you least of all. So much depends on you. Frodo?

Boromir: I know why you seek solitude. You suffer; I see it day by day. You sure you do not suffer needlessly? There are other ways, Frodo, other paths that we might take.

Frodo: I know what you would say. And it would seem like wisdom but for the warning in my heart.

Boromir: Warning? Against what? We're all afraid, Frodo. But to let that fear drive us to destroy what hope we have. Don't you see that is madness?

Frodo: There is no other way!

Boromir: I ask only for the strength to defend my people! < throws the gathered wood to the ground > If you would but lend me the Ring...

Frodo: No. < steps back >

Boromir: Why do you recoil? I am no thief.

Frodo: You are not yourself.

Boromir: What chance do you think you have? They will find you! They will take the Ring and you will beg for death before the end!

< Frodo begins to run from Boromir >

Boromir: Fool!

< Boromir gives chase >

Boromir: It is not yours save by unhappy chance. It could have been mine! < tackles Frodo > It should be mine! Give it to me!

< struggle ensues >

Boromir: Give it to me!

Frodo: No!

Boromir: Give me… Give me the Ring!

Frodo: Nurgh…ugh!

< Frodo slips the Ring on and disappears. He kicks Boromir and runs away >

Boromir: < looks around desperately > I see your mind. You will take the Ring to Sauron! You will betray us! You go to your death and the death of us all! Curse you! Curse you! And all the halflings!

< Boromir slips and falls to the ground. The madness of the Ring leaves him and he comes to his senses >

Boromir: Frodo?...Frodo?...what have I done?...please...Frodo!

Boromir: < in the background > Frodo, I'm sorry! Oh no!

< Frodo, in the "shadow world," climbs up onto the Seat of Seeing atop Amon Hen. He looks over the stone seat and sees the Dark Tower from afar. The image rushes towards him and his vision rise to its pinnacle-where the burning Eye of Sauron stares back menacingly. Frodo, rushing to remove the Ring, falls off the Seat of Seeing and lands on his back. He sits up, trying to catch his breath >

< Aragorn approaches >

Aragorn: Frodo?

Frodo: < startled > Huh?! It has taken Boromir.

Aragorn: < intensely > Where is the Ring?

Frodo: Stay away! < scrambles up and retreats from Aragorn. Aragorn comes after him >

Aragorn: Frodo!

< Frodo stops >

Aragorn: I swore to protect you!

Frodo: Can you protect me from yourself?!

< Shows the Ring on his palm >

Frodo: Would you destroy it?

< Aragorn, looking at the Ring, slowly approaches Frodo. The Ring begins to whisper >

The Ring: Aragorn...Aragorn…Elessar...

< He reaches out. With both hands, Aragorn closes Frodo’s hand over the Ring and pushes it to the hobbit’s chest >

Aragorn: I would have gone with you to the end, into the very fires of Mordor.

Frodo: I know. Look after the others, especially Sam. He will not understand.

< Aragorn nods but then sees Sting’s blue glow. He stands suddenly >

Aragorn: Go on Frodo. < draws out his sword > Run. Run!

< Frodo leaves. Aragorn walks out from beneath the Seat of Seeing and finds a troop of Uruk-Hai advancing towards him. He gives a half-smile, and half-swaggers towards them, holding his sword up to his face as an acceptance to the challenge. They attack. He cuts several down, but they force him up the stairs of the Seat >

< Sam searches frantically for Frodo in the woods >

Sam: Mr.Frodo!!!
< He hears the clash of sword on sword. His eyes widen >

Lurtz: < to his troops > Find the Halfling! Find the Halfling!

Aragorn: < jumps onto the Uruk-Hai > Elendil!!!!!

< Legolas and Gimli run forward from behind the Seat. Legolas shoots three Uruk-Hai with quick bow-work; Gimli lands blow after blow with his axe >

Legolas: Aragorn! Go!

< Frodo runs and hides behind a tree. Across the way, Merry and Pippin hide in a space under some fallen tree trunks >

Merry: Frodo!

Pippin: < beckoning > Hide here quick! Come on!

< Frodo looks at them, anguished, then shakes his head >

Pippin: < to Merry > What’s he doin'?

Merry: He's leavin’.

Pippin: No! < runs out to Frodo >

Merry: Pippin! < comes after him >

< Merry and Pippin are out in the open. Several Uruk-Hai are coming down the hill, towards their area >


Merry: < quietly > Run Frodo! Go!

< Merry cups his hands and calls out to the Uruk-Hai >

Merry: Hey! Hey you! Over here!

Pippin: Hey!

Merry: Over here!

Pippin: < waving his arms > This way!

< Both hobbits run away from Frodo. The Uruk-Hai troop follows them. Frodo makes a break for it, running in the opposite direction >

Pippin: Its working!

Merry: I know its working! Run!

< Merry and Pippin run across an old stone bridge. At its far end, they stop and see Uruk-hai running towards them. The Uruks are closing in, both in front and behind. An Uruk runs up to them, raising his battleaxe. But Boromir comes charging in, knocks the Uruk back, and kills him with his own axe. He throws a knife at another. More close in >

< Back at the Seat of Seeing, Legolas, Aragorn, and Gimli continue to fight the Uruk-Hai. In one smooth move, Legolas stabs one Uruk with an arrow then shoots it out at another. Gimli wields his axe. Aragorn stabs one behind his back. Legolas shoots an Uruk who has closed in on Aragorn >

< Three loud ox-horn blasts are heard >

Legolas: The Horn of Gondor!

Aragorn: Boromir!

< They run down Amon Hen towards the sound, but Uruks are between them and Boromir. A visual sweep shows some running towards Boromir, down the stone steps; the others attack Aragorn, Legolas, and Gimli as they struggle to follow >

< Boromir sounds the horn of Gondor again >

Boromir: < to the hobbits > Run! Run!

< The Uruks attack Boromir. He kills two more. Lurtz walks into view, lifts his bow, aims a big black arrow, and shoots it into Boromir’s left shoulder. The hobbits look at him in shock. Boromir drops to his knees, begins to breathe hard, and looks at the hobbits. Uruks come closer, but he gives a battle cry, rises, and swings his sword at one, who falls. Lurtz growls, lifts his bow, and shoots again. A black arrow flies into Boromir’s stomach. He drops to his knees again, gasping. But he swings his sword at another Uruk and gets back up. Lurtz shoots him one more time, in the chest. Boromir falls on his knees and stays there, swaying a little and blinking >

< Merry and Pippin look at him, aghast. With all the courage they could muster, they take up their swords and attack the Uruk-Hai >

Merry and Pippin: Shire!!!!!

< They never have the chance to strike. The Uruk-Hai lifted them up and carried them off. Merry and Pippin wave their arms frantically. The Uruk-Hai troop walks away from Boromir. Boromir looks on in helplessly >

< Lurtz, now left alone, stops ten feet from Boromir and takes aim with his bow. Boromir swallows and stares back at him. Just then Aragorn crashes into Lurtz, whose arrow flies off harmlessly >

< Lurtz and Aragorn fight. Aragorn loses his sword and is thrown to the ground; when he gets up, Lurtz throws his two-prong shield at Aragorn and pins him by the neck against a tree. Lurtz raises his sword and strikes, but Aragorn slips beneath the shield and dodges the blow. Aragorn pulls out a knife and stabs Lurtz on the leg. Lurtz roars. Lurtz then pulls out the knife and throws it at Aragorn, who has found his sword and uses it to bat the knife away. Aragorn closes in on Lurtz and in a flurry of swordplay, slices his arm off and then stabs him in the chest. Lurtz pulls himself up on the sword closer to Aragorn, snarling. Aragorn grimaces, pulls his sword out of Lurtz, swings it wide, and hacks off Lurtz’s head. The rest of Lurtz falls to the ground >

< Aragorn pauses a moment, panting. He then races to Boromir. Boromir, pale and bloodied, is now lying on his back, his head close to a tree >

Aragorn: No! < runs up and kneels near Boromir >

Boromir: They took the little ones.

Aragorn: Be still.

Boromir: Frodo, where is Frodo?

Aragorn: I let Frodo go.

Boromir: Then you did what I could not. I tried to take the Ring from him.

Aragorn: The Ring is beyond our reach now.

Boromir: Forgive me, I did not see it. I have failed you all.

Aragorn: No, Boromir, you fought bravely! You have kept your honor. < reaches out to pull the arrows from Boromir >

Boromir: Leave it! It is over. The world of men will fall, and all will come to darkness… and my city to ruin.

Aragorn: I do not know what strength is in my blood, but I swear to you I will not let the white city fall, nor our people fail!

Boromir: Our people? Our people.

< He reaches for his sword. Aragorn places the hilt in his hand, and Boromir clasps it to his chest >

Boromir: I would have followed you my brother, my captain, my king!

< Boromir passes away. Aragorn touches his hand to his forehead, then to his lips in respect >

Aragorn: Be at peace, son of Gondor. < bends and kisses Boromir on the brow >

< Legolas and Gimli arrive at the scene. Legolas looks sadly at Aragorn and Boromir. Gimli bows his head and turns away >

< Scene shows Sam running through the woods >

Sam: Frodo!

< Frodo stands upon Parth Galen, staring into the distance, with the Ring on his palm. Weeping silently, he recalls his conversation with Gandalf >

< flashback >

Frodo: I wish the Ring had never come to me. I wish none of this had happened.

Gandalf: So do all who live to see such times but that is not for them to decide. All you have to decide is what to do with the time that is given to you.

< flashback ends. Frodo decides to leave. Determined to proceed with the quest alone, he closes his hand over the Ring, and puts it into his vest pocket. He pushes the boat into the river and jumps in. Just then, Sam emerges from the woods. He sees Frodo paddling away and runs after him >

Sam: Frodo no! Frodo! Mr. Frodo!

Frodo: < quietly > No Sam. < continues to paddle away >

< Sam runs into the river after Frodo. Frodo, hearing the splashes, looks back >

Frodo: Go back Sam! I’m going to Mordor alone.

Sam: Of course you are, and I’m coming with you!

Frodo: You can’t swim! Sam!

< Sam struggles to swim then sinks into the water >

Frodo: Sam!!!

< Sam sinks deeper and deeper. He sees the sun shimmering up on the surface. His arm floats limply as he descends into the water. Suddenly Frodo’s hand reaches down and grabs Sam’s wrist. . Sam tightens his hand around Frodo’s. Frodo pulls him out of the water and up into the boat and Sam tumbles in >

Sam: < dripping wet > I made a promise, Mr. Frodo. A promise! "Don’t you leave him Samwise Gamgee." And I don’t mean to! I don’t mean to.

Frodo: Oh Sam! < hug > Come on.

< Frodo and Sam paddle towards the eastern shore >

< Boromir is laid to rest in one of the boats. His sword rests with him, his shield is above his head and his cloven horn at his side. The boat slips over the falls of Rauros and then drops into the mists below. Gimli watches the boat disappear. Aragorn wears Boromir’s vambraces in his honor. Legolas shoves the third boat into the water >

Legolas: Hurry! Frodo and Sam have reached the eastern shore.

< Aragorn stand still and says nothing >

Legolas: You mean not to follow them?

Aragorn: Frodo’s fate is no longer in our hands.

Gimli: Then it has all been in vain! The Fellowship has failed.

Aragorn: < puts his hands on their shoulders > Not if we hold true to each other. We will not abandon Merry and Pippin to torment and death. Not while we have strength left. Leave all that can be spared behind. We travel light. Let’s hunt some orc!

< Legolas and Gimli look at each other, grinning >

Gimli: Yes!!! Haha!

< Aragorn runs into the woods, followed by Gimli and Legolas >

< Frodo and Sam stand upon Emyn Muil, seeing the Dead Marshes and Mordor in the distance ahead >

Frodo: Mordor. I hope the others find a safer route.

Sam: Strider will look after them.

Frodo: I don’t suppose we’ll ever see them again.

Sam: We may yet, Mr. Frodo. We may.

Frodo: < turns, smiling > Sam, I’m glad you’re with me.

< Frodo and Sam descend the rocky slope. Scene fades out >

THE LORD OF THE RING: THE TWO TOWERS

GANDALF
You cannot pass!

 FRODO
Gandalf!

 GANDALF
I am a servant of the Secret Fire, wielder 
of the Flame of Anor!
 
[Camera pans closer to the mountain 
side.]
 
 GANDALF
Argh! Go back to the shadow. The Dark 
Fire will not avail you, Flame of Ud�n! 
[Camera zooms in through the mountain 
and focuses on Gandalf and the Balrog 
on the bridge of Khazad-d�m. The Balrog 
strikes down on Gandalf with its flaming 
sword. Gandalf parries the blow with 
Glamdring, shattering the Balrog�s sword.] 
YOU� SHALL NOT... PASS!!!
 
[Gandalf strikes his staff onto the 
bridge. As the Balrog steps forward, 
the bridge collapses from under it and 
the demon plunges backward into the 
chasm. Gandalf, exhausted, leans on 
his staff and watches the Balrog fall 
then turns to follow the others. At 
the last minute, the flaming whip lashes 
up from the depths of the abyss and 
winds around Gandalf�s ankle, dragging 
him over the edge. He clings onto the 
bridge but is straining to keep his 
grip.]
 
 GANDALF
Argh!

[Frodo rushes forward but Boromir restrains 
him.]
 
 BOROMIR
No! No!

 FRODO
Gandalf!

 GANDALF
Fly, you fools!

[Gandalf loses his grip and falls into 
the chasm]
 
 FRODO
Noooooooooooooooo!!!!

[Gandalf loses his grip and falls into 
the chasm]
 
 FRODO
[Calls after Gandalf as he falls into 
the abyss] Gaaandaaaaalf!!
 
[Gandalf falls after the Balrog and 
grabs hold of his sword Glamdring on 
his way down. As they continue to plunge 
into the depths, Gandalf hacks away 
at the Balrog even as it thrashes and 
bounces off the walls. They continue 
to plunge at great speed, sometimes 
with Gandalf clinging to the horn of 
the demon. The battling pair then falls 
into an enormous cavern and plunges 
into the water. Just then Frodo awakens 
as if from a nightmare.]
 
 FRODO
Gandalf!

 SAM
What is it, Mr. Frodo?

 FRODO
Nothing. Just a dream. [Lies back down.]
 

[Frodo and Sam climbs over the rocky 
terrain Emyn Muil. They look into the 
distance at the Mountain of Fire.]
 

 SAM
Mordor. The one place in Middle-earth 
we don�t want to see any closer, and 
the one place we�re trying to get to. 
It�s just where we can�t get. Let�s 
face it, Mr. Frodo, we�re lost. I don�t 
think Gandalf meant for us to come this 
way.
 
 FRODO
He didn�t mean for a lot of things to 
happen, Sam... but they did.
 
[Suddenly Frodo feels and sees the Eye 
zooming in on him. He gasps and pants 
as he backs away.]
 
 SAM
Mr. Frodo? It�s the Ring, isn�t it?
 

 FRODO
It�s getting heavier. [Clutches the 
Ring by his chest and sits down, still 
panting. He then fumbles for his water 
bottle and takes a sip.]
 
 FRODO
What food have we got left?

 SAM
Well, let me see. [He takes out a package 
of lembas bread from his pack] Oh yes, 
lovely � Lembas bread. And look! [He 
digs deeper into his pack] More lembas 
bread.
 
[Sam shows another package. He then 
breaks off a piece and tosses it to 
Frodo, and munches on a piece himself.]
 

 SAM
I don't usually hold with foreign food, 
but this Elvish stuff, it�s not bad.
 

 FRODO
[smiles] Nothing ever dampens your spirits, 
does it Sam?
 
[Sam smiles back, and then looks ominously 
towards Mordor.]
 
 SAM
Those rain clouds might.

[They continue trekking through difficult 
terrain, often huddling underneath their 
cloaks.]
 
 SAM
[Looks around] This looks strangely 
familiar.
 
 FRODO
[Exasperated] It�s because we�ve been 
here before! We�re going in circles.
 

 SAM
Ah! What's that 'orrid stink? I'll warrant 
there's a nasty bog nearby. Can you 
smell it?
 
 FRODO
Yes. I can smell it. [Drops to a whisper] 
We�re not alone.
 
 [NIGHTTIME
Frodo and Sam are sleeping. A dark shape 
appears on top of the cliff. The creature 
Gollum has appeared and is making his 
way down to the hobbits.]
 
 GOLLUM
The thieves! The thieves! The filthy 
little thieves! Where is it? Where isss 
it? They stole it from us. My preciousss. 
[Gollum creeps closer and closer.] Curse 
them! We hates them! It�s ours, it is... 
and we wantssss it!
 
[Gollum reaches out his hand towards 
the hobbits. Suddenly the hobbits spring 
up, grab hold of Gollum�s arms and pull 
him down. Amidst the struggle, Gollum 
wriggles loose and leaps onto Frodo. 
As Frodo falls back, the chain and Ring 
around his neck is revealed and Gollum 
jumps straight for the Ring. Sam tries 
to grab at him but is knocked away. 
Gollum now jumps on top of Frodo and 
tries to reach for the Ring even as 
Frodo grabs his hands and tries to push 
him away. Gollum�s cheeks puff with 
exertion as he struggles with Frodo, 
his enormous eyes fixed on the Ring. 
Sam grabs hold of Gollum again and tears 
him away from Frodo. Gollum then turns 
around and bites Sam on the shoulder, 
wriggles around and clasps his arms 
around Sam�s neck and legs around his 
waist in a death grip. Frodo unsheathes 
Sting and holds it to Gollum's throat.]
 

 FRODO
[menacingly] This is Sting. You�ve seen 
it before, haven�t you... Gollum! Release 
him or I�ll cut your throat!
 
[Slowly, Gollum loosens his grip on 
Sam and as the latter disentangles himself, 
Gollum wails. In the next scene, Gollum 
is being dragged with Sam's Elvish rope 
around his neck, wailing and writhing 
in pain.]
 
 GOLLUM
It burns! It burns us! It freezes! Nasty 
Elves twisted it. Take it off us!
 

 SAM
Quiet you!

[Sam tugs fiercely at the rope. Gollum 
cries some more and collapses onto his 
back. Sam turns to Frodo in dismay.]
 

 SAM
It�s hopeless! Every Orc in Mordor�s 
going to hear this racket! Let�s just 
tie him up and leave him.
 
 GOLLUM
No! That would kill us! Kill us!

 SAM
It�s no more than you deserve!

 FRODO
Maybe he does deserve to die, but now 
that I see him, I do pity him.
 
 GOLLUM
[Begging] We be nice to them if they 
be nice to us. Take it off us. We swears 
to do what you wants. We swears.
 
 FRODO
There�s no promise you can make that 
I can trust.
 
 GOLLUM
We swears to serve the master of the 
preciousss. We swears on... on the precious. 
*Gollum. Gollum.*
 
 FRODO
The Ring is treacherous. It will hold 
you to your word.
 
 GOLLUM
Yes... on the preciousss. On the preciousss.
 

 SAM
I don�t believe you! [Gollum backs away, 
frightened, and climbs onto a boulder] 
Get down! I said, down!
 
[Sam jerks strongly at the rope as Gollum 
tries to get away from him. He crashes 
onto the ground, choking.]
 
 FRODO
Sam!

 SAM
He�s trying to trick us! We let him 
go he�ll throttle us in our sleep!
 

[Gollum lies panting and holding his 
throat. He backs away, frightened, as 
Frodo approaches him.]
 
 FRODO
You know the way to Mordor?

 GOLLUM
[nods warily] Yes...

 FRODO
You�ve been there before?

 GOLLUM
[nods again] Yes...

[Frodo reaches out and takes the rope 
noose off Gollum�s neck. Gollum seems 
surprised and relieved.]
 
 FRODO
You will lead us to the Black Gate.
 

[Gollum scrambles off in the direction 
of Morannon and the hobbits follow in 
his wake.]
 


[A band of Uruk-hai marches across the 
plain, with two hobbits bound to the 
backs of two Uruk-hai. Pippin tries 
to call to Merry, who is unconscious 
with a gash on his right brow.]
 
 PIPPIN
Merry. Merry! [He receives no response.]
 

[Suddenly, an Uruk-hai puts up his hand 
and signals a stop.]
 
 UGL�K
What is it? What do you smell?

 MAN-FLESH URUK
[sniffs the air] Man-flesh.

 PIPPIN
[quietly to himself] Aragorn!

 UGL�K
They've picked up our trail! Let's move!
 

[The Uruk-hai quicken their pace. Pippin 
struggles to reach his Elven brooch 
with his teeth. He then tears it off 
his cloak and drops it onto the ground. 
A foot stomps onto the brooch but it 
remains unbroken and visible on the 
grass.]
 
[Aragorn is lying with his eyes closed 
and ear pressed to the ground, listening 
for the sound of footsteps.]
 
 ARAGORN
Their pace has quickened. [He looks 
up.] They must have caught our scent. 
Hurry! [He runs off.]
 
 LEGOLAS
Come on, Gimli! [Looks back at Gimli 
and then runs after Aragorn]
 
 GIMLI
[pauses in his steps and huffs] Three 
days� and nights� pursuit. No food. 
No rest. And no sign of our quarry but 
what bare rock can tell. [Runs after 
his companions.]
 
[The Three Hunters run across rocks 
and plains, with Aragorn in the lead, 
followed by Legolas and Gimli. From 
time to time, Legolas looks back to 
make sure that Gimli is keeping up. 
Aragorn suddenly bends down to pick 
up an Elven brooch from the ground.]
 

 ARAGORN
Not idly do the leaves of L�rien fall.
 

 LEGOLAS
[stops and turns to Aragorn.] They may 
yet be alive.
 
 ARAGORN
Less than a day ahead of us. Come! [Runs 
off again]
 
[Gimli stumbles from behind some rocks 
and rolls to the ground]
 
 LEGOLAS
Come, Gimli! We are gaining on them!
 

 GIMLI
[Panting] I am wasted on cross-country! 
We dwarves are natural sprinters! Very 
dangerous over short distances!
 
[The trackers come over a hill and pause 
as they gaze across the plains below.]
 


 ARAGORN
Rohan. Home of the horse-lords. There 
is something strange at work here. Some 
evil gives speed to these creatures, 
sets its will against us.
 
[Legolas runs ahead and looks out to 
the horizon.]
 
 ARAGORN
Legolas, what do your Elf eyes see?
 

 LEGOLAS
The Uruks turn northeast. They�re taking 
the hobbits to Isengard!
 
 ARAGORN
Saruman.



[The tower of Orthanc stands amidst 
the smoking caverns of Isengard. Saruman 
stands in his chamber, communicating 
with the Dark Lord through the Palant�r.]
 

 SARUMAN (V.O.)
The world is changing. [View changes 
to the tower of Barad-d�r, with its 
huge Orc armies on a bridge.] Who now 
has the strength to stand against the 
armies of Isengard and Mordor? To stand 
against the might of Sauron and Saruman 
and the union of the two towers?
 
[Camera pans upwards along the height 
of the tower of Barad-d�r until the 
flaming Eye is in view.]
 
 SARUMAN (V.O.)
Together, my lord Sauron, we shall rule 
this Middle-earth.
 
[The trees around Isengard are being 
ripped down, chopped up and used to 
feed huge furnaces. The caverns of Isengard 
glow with the fires of industry, sounds 
of hammering fill the air and molten 
iron is poured into casts to forge weapons.]
 

 SARUMAN (V.O.)
The old world will burn in the fires 
of industry. The forests will fall. 
A new order will rise. We will drive 
the machine of war with the sword and 
the spear and the iron fists of the 
Orc. We have only to remove those who 
oppose us.
 
[Saruman stands in the midst of a gathering 
of Dunlanders.]
 
 SARUMAN
The horsemen took your land. They drove 
your people into the hills to scratch 
a living off rocks.
 
 DUNLAND MAN
Murderers!

 SARUMAN
Take back the lands they stole from 
you! Burn every village!
 
 CROWD
[Roars with approval] Argh!!

[They stomp off to destroy the villages 
of Rohan as Saruman stands coldly still 
among the stampede. A Rohan village 
is in pandemonium as people try to escape 
the on-coming pillage.]
 
 SARUMAN (V.O.)
It will begin in Rohan. Too long have 
these peasants stood against you. But 
no more.
 
[A woman with her hand on a horse calls 
out to her children.]
 
 MORWEN
�othain! �othain! You take your sister. 
You�ll go faster with just two.
 
 FREDA
[As Morwen puts her onto the horse in 
front of her brother] Papa says �othain 
must not ride Garulf, he is too big 
for him!
 
 MORWEN
Listen to me. You must ride to Edoras 
and raise the alarm. Do you understand 
me?
 
 �OTHAIN
Yes, Ma!

 FREDA
[starts to cry] I don�t wanna leave! 
I don't wanna go, Mama!
 
 MORWEN
Freda, I will find you there.

[A woman screams]

 MORWEN
Quickly!

[The children ride off.]

 MORWEN
[Looks after them] Go child!

[Dunlanders and Uruk-hai enter the village, 
burning everything in sights as the 
Rohirrim scream and run in all directions. 
�othain and Freda weep as they look 
back from a distance.]
 
 SARUMAN (V.O.)
Rohan, my lord, is ready to fall.

[A group of horsemen ride to Edoras. 
�omer is in the lead, carrying a gravely 
wounded Th�odred.]
 
[�owyn runs hastily up the stairs to 
the Golden Hall and enters a bedchamber. 
She runs to the bed.]
 
 �OWYN
Th�odred!

[Th�odred seems to hear her call but 
is unable to respond. He has a bloody 
gash on the side of his head. �omer 
nods to �owyn in the direction of Th�odred�s 
torso. �owyn draws back the covers and 
upon seeing Th�odred�s fatal wound, 
her lips tighten and eyes close. She 
looks up to catch �omer�s eye.]
 
[�omer and �owyn are speaking to Th�oden-king 
who sits motionless on his throne, wizened, 
and aged beyond his years.]
 
 �OWYN
Your son is badly wounded, my lord.
 

 �OMER
He was ambushed by Orcs. If we don�t 
defend our country, Saruman will take 
it by force.
 
 GR�MA
That is a lie! [Appears from the shadows.] 
Saruman the White has ever been our 
friend and ally.
 
 TH�ODEN
[mumbles feebly] Gr�ma� Gr�ma� [Gr�ma 
leans down close to the King.]My son...? 
Gr�ma...?
 
 �OMER
Orcs are roaming freely across our lands. 
Unchecked. Unchallenged. Killing at 
will. Orcs bearing the white hand of 
Saruman. [He drops a helmet onto the 
ground, which topples over to reveal 
the white hand of Saruman.]
 
 GR�MA
Why do you lay these troubles on an 
already troubled mind. Can you not see? 
Your uncle is wearied by your malcontent, 
your war-mongering.
 
 �OMER
War-mongering?

[�omer grabs Gr�ma and pins him against 
a pillar.]
 
 �OMER
How long is it since Saruman bought 
you? What was the promised price, Gr�ma? 
When all the men are dead you will take 
your share of the treasure?
 
[Gr�ma�s eyes flicks to right, watching 
�owyn as she walks by. �owyn stops to 
stare back for a moment before departing 
form the hall. �omer jerks Gr�ma again 
and clutches his hand around Gr�ma�s 
jaw.]
 
 �OMER
Too long have you watched my sister, 
too long have you haunted her steps.
 

[Gr�ma's eyes look to the left and relax 
as �omer is suddenly pulled off Gr�ma 
by his thugs.]
 
 GR�MA
You see much �omer, Son of �omund. Too 
much. [The thugs punch �omer n the stomach] 
You are banished forthwith from the 
kingdom of Rohan. Under pain of death!
 

 �OMER
[Being dragged away] Argh!!



[Uruk-hai and Orcs continue to march 
across the plains with their hobbit 
captives, with Aragorn, Legolas, and 
Gimli hot on their pursuits.]
 
 GIMLI
Keep breathing! That�s the key! Breathe! 
Ho!
 
 LEGOLAS
They�ve run as if the very whips of 
their masters were behind them.
 
[They continue running over vast distances. 
The Uruk-hai and Orcs halt at nightfall, 
many panting with exertion.]
 
 MORDOR ORC
We�re not going no further till we�ve 
had a breather!
 
 UGL�K
Get a fire going!

[As the Orcs and Uruk-hai take their 
rest, Pippin crawls over towards Merry.]
 

 PIPPIN
Merry! Merry!

 MERRY
[opens his eyes] I think... we might 
have made a mistake leaving the Shire, 
Pippin.
 
[A group of Orcs chops down the trees 
nearby for firewood. Low groans and 
rumbles start to emerge from the forest.]
 

 PIPPIN
What�s making that noise?

 MERRY
[looks towards the forest] It�s the 
trees.
 
 PIPPIN
What?

 MERRY
Do you remember the Old Forest? On the 
borders of Buckland? Folk used to say 
that there was something in the water 
that made the trees grow tall... and 
come alive.
 
 PIPPIN
Alive?

 MERRY
Trees that could whisper. Talk to each 
other. Even move.
 
 MA�HUR
I'm starving. We ain't 'ad nothin' but 
maggoty bread for three stinkin' days!
 

 SNAGA
Yeah. Why can�t we have some meat? [His 
eyes rest on the hobbits.] What about 
them? They�re fresh.
 
 UGL�K
They are not for eating!

 GRISHN�KH
What about their legs? They don't need 
those. Ooh� They look tasty!
 
 UGL�K
[Shoves at the Orcs] Get back, scum!
 

[The other Orcs are getting restless.]
 

 MORDOR ORC
Carve them up!

 SNAGA
[Moves towards the hobbits with his 
blade drawn] Just a mouth full.
 
 UGL�K
No!

[Pippin and Merry recoil in fright. 
Ugl�k jumps on the Orc and cuts off 
his head, which bounces off the hobbit's 
shoulders.]
 
 UGL�K
Looks like meat�s back on the menu, 
boys!!
 
[The Uruk-hai and Orcs cheer and started 
tearing into the fresh meat, intestines 
flying, taking their eyes off the hobbits 
for a while.]
 
 MERRY
Pippin, let�s go.

[Their hands still bound, the hobbits 
try to crawl away. Suddenly a foot comes 
down on Merry and Pippin is turned onto 
his back.]
 
 GRISHN�KH
[Brandishing a blade in front of Pippin�s 
face] Go on, call for help. Squeal! 
No one�s gonna save you now!
 
[Suddenly, a spear pierces the Orc's 
back. Mayhem ensues as Riders of Rohan 
burst out from their hiding places and 
ambush the Orcs.]
 
 MERRY
Pippin! [Gestures for them to make their 
escape.]
 
[The hobbits try to escape from the 
pandemonium to the forest, dodging bodies 
and stomping feet. Suddenly Pippin turns 
onto his face and looks up to a pair 
of thrashing hooves bearing down on 
him.]
 
 PIPPIN
ARGH!!!



[The Three Hunters are still chasing 
after the Uruk-hai. It is dawn.]
 
 LEGOLAS
[Pauses and looks up] A red sun rises. 
Blood has been spilled this night.
 

[Camera pans over the rock and plains, 
alternating between the band of Uruk-hai 
and the Three Hunters giving chase. 
The trackers hear the sound of horses. 
Aragorn and company hide behind some 
boulders. A large group of horse-men 
appears, galloping quickly with their 
banners flying. Aragorn comes out of 
hiding as they pass, followed by Legolas 
and Gimli.]
 
 ARAGORN
Riders of Rohan, what news from the 
Mark?
 
[At a signal from �omer at the lead, 
the riders make a quick turn and head 
towards them, surrounding them in ever-tightening 
circles. As they stop, they point their 
long spears menacingly at them.]
 
 �OMER
What business does an Elf, a man and 
a Dwarf have in the Riddermark? Speak 
quickly!
 
 GIMLI
Give me your name, Horsemaster, and 
I shall give you mine.
 
[�omer hands his staff to another rider, 
and gets off his horse. Aragorn puts 
a hand on Gimli�s shoulder.]
 
 �OMER
I would cut off your head, Dwarf, if 
it stood but a little higher from the 
ground.
 
[Legolas, in a lightning fast move, 
points an arrow at �omer.]
 
 LEGOLAS
You would die before your stroke fell!
 

[The riders all point their spears closer 
at the travellers. After a tense moment, 
Aragorn pushes down Legolas� arm.]
 

 ARAGORN
I am Aragorn, son of Arathorn. This 
is Gimli, son of Gl�in and Legolas of 
the Woodland realm. We are friends of 
Rohan and of Th�oden, your king.
 
 �OMER
Th�oden no longer recognizes friend 
from foe. [Takes off helmet] Not even 
his own kin.
 
[The spears are withdrawn.]

 �OMER
Saruman has poisoned the mind of the 
king and claimed lordship over these 
lands. My company are those loyal to 
Rohan. And for that, we are banished. 
The White Wizard is cunning. He walks 
here and there, they say, as an old 
man, hooded and cloaked. And everywhere 
his spies slip past our nets.
 
 ARAGORN
We are not spies. We track a party of 
Uruk-hai westward across the plain. 
They�ve taken two of our friends captive.
 

 �OMER
The Uruks are destroyed. We slaughtered 
them during the night.
 
 GIMLI
But there were two hobbits. Did you 
see two hobbits with them?
 
 ARAGORN
They would be small � only children 
to your eyes.
 
 �OMER
We left none alive. We piled the carcasses 
and burned them. [Points to a smoking 
pile in the distance.]
 
 GIMLI
Dead?

 �OMER
[nods] I am sorry.

[Legolas puts a hand on Gimli�s shoulder 
in grief. �omer turns and whistles.]
 

 �OMER
Hasufel! Arod! [Two horses move up.] 
May these horses bear you to better 
fortune than their former masters. Farewell.
 

[�omer puts on his helmet and gets back 
on his horse]
 
 �OMER
Look for your friends. But do not trust 
to hope, it has forsaken these lands. 
[To the riders] We ride north!
 
[Aragorn, Legolas and Gimli look on 
as the Riders go off. They then ride 
towards the burning carcasses. Gimli 
starts to shift through the smoldering 
pile, and pulls out a charred belt and 
dagger sheath.]
 
 GIMLI
It�s one of their wee belts.

 LEGOLAS
[with his head bowed and eyes closed] 
Hiro �th� ab 'wanath... (May they find 
peace in death)
 
 ARAGORN
[Kicks a helmet and yells] AAARRGGHH!!! 
[He falls to his knees.]
 
 GIMLI
We failed them.

[Aragorn looks to the side as some tracks 
catch his attention.]
 
 ARAGORN
A hobbit lay here, and the other. [Flashback: 
Pippin yells as he looks up at a pair 
of thrashing hooves bearing down on 
him. He rolls over, avoiding the hooves.] 
They crawled.
 
 [ARAGORN STARTS TO FOLLOW THE TRACKS, WITH LEGOLAS AND GIMLI BEHIND HIM. FLASHBACK
Merry and Pippin crawl frantically away 
from the battle.]
 
 ARAGORN
Their hands were bound. [Flashback: 
Merry rubs his bonds furiously against 
the sharp edge of a weapon.] Their bonds 
were cut. [Aragorn holds up a broken 
length of thick rope.]
 
 ARAGORN
They ran over here. They were followed.
 

 [FLASHBACK
Their hands freed, the hobbits run away 
from the battle scene, dodging under 
a horse and trying to stay out of harms 
way. As they flee, Grishn�kh grabs Pippin 
by his belt and clings on.]
 
 MERRY
The belt!

[Pippin undoes his belt and Grishn�kh 
is left holding it.]
 
 MERRY
Run!

 ARAGORN
The tracks lead away from the battle... 
[They break into a run and then stop] 
into Fangorn Forest.
 
[The Three looks up into a dense and 
dark forest]
 
 GIMLI
Fangorn. What madness drove them in 
there?
 


[Scene moves from the trackers into 
the nighttime chase of Merry and Pippin. 
The hobbits run into the Fangorn, seeking 
to lose the pursuing Orc. They collapse 
onto the ground, out of breath.]
 
 PIPPIN
Did we lose him? [Looks around] I think 
we lost him.
 
[Suddenly, Grishn�kh appears from behind 
the trees, brandishing a blade.]
 
 GRISHN�KH
I�m gonna rip out your filthy little 
innards! Come here!
 
[Merry and Pippin run and hide behind 
a tree.]
 
 MERRY
Trees! Climb a tree!

[Pippin and Merry quickly scramble up 
a tree each.]
 
 MERRY
[Looks around and then sighs in relief.] 
He's gone.
 
[Suddenly, Merry is pulled by his legs 
and falls to the ground. Grishn�kh leans 
over him with his menacing blade. Merry 
tries to kick him off but to no avail.]
 

 PIPPIN
Merry!

[Pippin looks down in horror but as 
he turns his head, he spots a pair of 
gleaming yellow eyes blinking in the 
tree he�s clinging to. The tree starts 
to move and groan.]
 
 TREEBEARD
Hooooo...

 PIPPIN
Argh!!

[Pippin loses his grip in fright and 
grabs at the air futilely as he falls. 
The tree catches him before he hits 
the ground.]
 
 GRISHN�KH
Let�s put a maggot-hole in your belly. 
[Suddenly he senses something behind 
him and as he looks up, the tree stomps 
and squashes him onto the forest floor.]
 

 PIPPIN
Run, Merry!

[Merry tries to run away but is scooped 
by the tree.]
 
 TREEBEARD
[Looks at the creatures in his hands] 
Little Orcs! Bur�rum...
 
 PIPPIN
It�s talking, Merry. The tree is talking!
 

 TREEBEARD
Tree?! I am no tree. I am an Ent. [Stomps 
slowly through the forest.]
 
 MERRY
A treeherder! A shepherd of the forest.
 

 PIPPIN
Don�t talk to it, Merry. Don�t encourage 
it.
 
 TREEBEARD
Treebeard, some call me.

 PIPPIN
And whose side are you on?

 TREEBEARD
Side? I am on nobody�s side because 
nobody�s on my side, little Orc. Nobody 
cares for the woods anymore.
 
 MERRY
We�re not Orcs. We�re Hobbits!

 TREEBEARD
Hobbits? Never heard of a hobbit before. 
Sounds like Orc mischief to me! [Tightens 
his hold on the hobbits and squeezes 
them. Merry and Pippin whimpers in pain] 
They come with fire, they come with 
axes. Gnawing, biting, breaking, hacking, 
burning! Destroyers and usurpers, curse 
them!
 
 MERRY
No, you don�t understand. We�re Hobbits... 
Halflings! Shirefolk!
 
 TREEBEARD
Maybe you are and maybe you aren�t. 
The White Wizard will know.
 
 PIPPIN
The White Wizard?

 MERRY
Saruman.

[Treebeard drops them on the ground 
and the hobbits look up at the White 
Wizard.]
 


[Following Gollum, Frodo and Sam reach 
the end of Emyn Muil and see that Mordor 
is now closer.]
 
 GOLLUM
See, see, we have led you out! Hurry 
hobbitses hurry. Very lucky we find 
you.
 
[Gollum jumps on a rock. Frodo walks 
past, Gollum shrinks as Sam draws near.]
 

 GOLLUM
Nice hobbit. [Leaps after Frodo, putting 
a wide berth between him and Sam.]
 

[Sam�s foot slipped into muck.]

 SAM
Whoa, it�s a bog! He�s led us into a 
swamp!
 
 GOLLUM
A swamp, yes, yes. Come, master. We 
will take you on safe paths through 
the mist. Come, hobbits, come. We go 
quickly.
 
[Gollum looks back and gestures for 
the hobbits to follow.]
 
 GOLLUM
I found it, I did. The way through the 
marshes. Orcs don't use it. Orcs don't 
know it. They go round for miles and 
miles. Come quickly. Swift and quick 
as shadows we must be.
 
[The marsh lands stretch for miles and 
miles as far as the eye can see. The 
hobbits and Gollum appear as little 
specks. As the three pick their way 
gingerly though the marshes, they see 
faces floating in the water, still, 
rotting and pale, and flickering flames 
on the swamps.]
 
 SAM
There are dead things! Dead faces in 
the water!
 
 GOLLUM
All dead. All rotten. Elves and men 
and orcses. A great battle long ago. 
[Turns to face the hobbits.] The Dead 
Marshes. Yes, yes that is their name. 
This way. Don�t follow the lights.
 

[Sam�s foot slips again into the water.]
 

 SAM
Ohh!

 GOLLUM
Careful now, or hobbits go down to join 
the dead ones and light little candles 
of their own.
 
[Frodo is drawn to one of the faces 
in Elven armour. He stares at it intently, 
until suddenly its eyes open and Frodo 
falls face-down into the water.]
 
 SAM
Frodo!

[Frodo is in the water and sees many 
faces of the dead, no longer still but 
screaming and grasping, their rotten 
robes and hair flowing about their gruesome 
faces. Their hands are reaching for 
him. Suddenly he is grabbed from behind. 
Frodo sputters and gasps for air as 
Gollum pulls him out of the water.]
 

 FRODO
[Looks at Gollum in perplexed gratitude 
and disbelief.] Gollum...
 
 GOLLUM
Don�t follow the lights! [Crawls away]
 

 SAM
[Runs to Frodo�s side.] Mr. Frodo! Are 
you alright?
 
[Frodo lies panting, staring after Gollum]
 



 [NIGHTFALL
Sam is asleep but Frodo is still awake. 
He is holding the Ring in the palm of 
his hand and stroking it, mesmerized. 
Suddenly he hears Gollum.]
 
 GOLLUM
Sooo bright. Sooo beautiful. [Frodo 
quickly puts the Ring back inside his 
shirt. He looks up to see Gollum crouching 
away from him, stroking the centre of 
his palm] our preciousss...
 
 FRODO
What did you say?

 GOLLUM
Master should be resting. Master needs 
to keep up his strength.
 
 FRODO
[Moves over and crouches in front of 
Gollum] Who are you?
 
 GOLLUM
Mustn�t ask us. Not its business. *Gollum, 
Gollum*
 
 FRODO
Gandalf told me you were one of the 
River Folk.
 
 GOLLUM
Cold be heart and hand and bone. Cold 
be travellers far from home.
 
 FRODO
He said your life was a sad story.
 

 GOLLUM
They do not see what lies ahead, when 
sun has failed and moon is dead.
 
 FRODO
You were not so very different from 
a hobbit once, were you... Sm�agol?
 

 GOLLUM
[Looks up slowly.] What did you call 
me?
 
 FRODO
That was your name once, wasn�t it? 
A long time ago.
 
 GOLLUM
My name... My name... S... S...Sm�agol�
 

[Suddenly, the piercing cries of the 
Nazg�l are heard overhead]
 
 GOLLUM
Argh!!

 SAM
Black Riders!

 GOLLUM
Hide! Hide!

 FRODO
Argh!

[Suddenly Frodo feels the pain of the 
Nazg�l's sword piercing him and the 
call of the Ring. Images of the Ringwraiths 
come to him in flashes.]
 
 FRODO
Argh!!

 SAM
C�mon Frodo! C'mon!

[Frodo continues to clutch at the Ring 
on his chest, immobilized. Sam drags 
Frodo across to hide beneath some bramble 
bushes. The Nazg�l appears, tightening 
his hold on the reins. Camera then shows 
him riding a Fell Beast, swooping down 
across the marsh lands. Chilling screams 
of the Nazg�l fill the air.]
 
 GOLLUM
Quick! They will see us! They will see 
us!
 
 SAM
I thought they were dead!

 GOLLUM
Dead? No, you cannot kill them. No.
 

[A loud screech from the Nazg�l flying 
high above the marshes.]
 
 GOLLUM
[cowering] Wraiths! Wraiths on wings! 
They are calling for it. They are calling 
for the preciousss.
 
[Frodo feels the call of the Ring and 
gropes for his necklace. Sam sees this 
and grabs hold of Frodo�s hand.]
 
 SAM
Mr. Frodo! It�s alright. I�m here.
 

[The Nazg�l continues to circle overhead 
and then flies off towards Mordor.]
 

 GOLLUM
Hurry, hobbits. The Black Gate is very 
close.
 


[Scene returns to Fangorn forest. Gimli 
fingers a dark stain on a leaf and brings 
it to his mouth.]
 
 GIMLI
[Spits] Ptui! Orc blood.

 ARAGORN
These are strange tracks.

 GIMLI
The air is so close in here.

 LEGOLAS
This forest is old. Very old. Full of 
memory... and anger.
 
[Groans reverberate through the forest 
and Gimli raises his axe.]
 
 LEGOLAS
The trees are speaking to each other.
 

 ARAGORN
[Whispers] Gimli!

 GIMLI
Huh?

 ARAGORN
[Gestures] Lower your axe.

 GIMLI
[Lowering his axe slowly] Oh.

 LEGOLAS
Aragorn, nad n� ennas! (Something is 
out there.)
 
 ARAGORN
Man cenich? (What do you see?)

[Close-up of Legolas� eyes]

 LEGOLAS
The White Wizard approaches.

 ARAGORN
Do not let him speak. He will put a 
spell on us.
 
[Aragorn wraps his hand around the hilt 
of his sword, Gimli tightens his hold 
on his axes, and Legolas notches an 
arrow to his bow.]
 
 ARAGORN
We must be quick.

[With a yell, the three swing round 
to attack. Gimli�s axe and Legolas� 
arrow are deflected. Aragorn drops his 
sword as it becomes red hot in his grasp. 
They shield their eyes with their hands 
from the bright light emanating from 
the White Wizard.]
 
 WHITE WIZARD
You are tracking the footsteps of two 
young hobbits.
 
 ARAGORN
Where are they?

 WHITE WIZARD
They passed this way the day before 
yesterday. They met someone they did 
not expect. Does that comfort you?
 

 ARAGORN
Who are you? Show yourself!

[The bright light dims, revealing Gandalf, 
all dressed in white. The three are 
astounded. Legolas and Gimli bow.]
 

 ARAGORN
It cannot be. You fell.

 GANDALF
Through fire and water. [Flashback: 
Gandalf is battling the Balrog atop 
D�rin�s Tower.] From the lowest dungeon 
to the highest peak, I fought with the 
Balrog of Morgoth.
 
[Gandalf holds up Glamdring and a flash 
of lightning strikes it before he plunges 
the sword into the Balrog. With a final 
cry, the Balrog falls from the peak 
and lands, smoking, onto the icy mountainside.]
 

 GANDALF
Until at last, I threw down my enemy 
and smote his ruin upon the mountainside.
 

[On top of the mountain, Gandalf crawls 
a bit and then collapses.]
 
 GANDALF
Darkness took me. And I strayed out 
of thought and time. [Camera zooms in 
Gandalf�s eye and enters an amorphous 
realm of stars and galaxies, ending 
in a blinding white light] Stars wheeled 
overhead and everyday was as long as 
a life-age of the earth. But it was 
not the end. I felt life in me again.
 

[Camera zooms out from Gandalf�s eye, 
lying naked and very still. His hair 
has turned white and wounds are completely 
healed. He suddenly shudders with a 
deep gasp and pants as life returns 
to him]
 
 GANDALF
I've been sent back until my task is 
done.
 
 ARAGORN
Gandalf!

 GANDALF
Gandalf? Yes... That's what they used 
to call me. Gandalf the Grey. That was 
my name. [He smiles]
 
 GIMLI
Gandalf!

 GANDALF
[With a twinkle in his eye] I am Gandalf 
the White. [Aragorn grins] And I come 
back to you now at the turn of the tide.
 

[They walk through the forest, with 
Gandalf leading the way, now wearing 
a grey cloak over his white robes.]
 

 GANDALF
One stage of your journey is over, another 
begins. War has come to Rohan. We must 
ride to Edoras with all speed.
 
[Outside the forest, Gandalf whistles 
piercingly. Soon an answering neigh 
is heard and a white horse appears from 
the plain, answering the call.]
 
 LEGOLAS
That is one of the Mearas, unless my 
eyes are cheated by some spell.
 
[The horse comes round to stop in front 
of Gandalf.]
 
 GANDALF
Shadowfax. [Gimli bows in the background.] 
He's the lord of all horses and he's 
been my friend through many dangers.
 

[The Three Hunters and Gandalf ride 
across the plains to Edoras.]
 


[Back at Fangorn, Treebeard is walking 
through the forest with Merry and Pippin 
sitting on his shoulders.]
 
 TREEBEARD
My home lies deep in the forest near 
the roots of the mountain. I told Gandalf 
I would keep you safe and safe is where 
I�ll keep you. The trees have grown 
wild and dangerous. Anger festers in 
their hearts. They will harm you if 
they can. There are too few of us now. 
Too few of us Ents left to manage them.
 



[Frodo and Sam are climbing a high rock 
overlooking Morannon.]
 
 GOLLUM
The Black Gate of Mordor.

[The enormous Black Gate comes into 
view with Orcs patrolling and standing 
guard on the towers and atop the walls. 
From the right, an army of Easterling 
soldiers is marching to the Black Gate.]
 

 SAM
Oh save us. My ol' Gaffer'd have a thing 
or two to say if he could see us now.
 

 GOLLUM
Master says to show him the way into 
Mordor, so good Sm�agol does. Master 
says so.
 
 FRODO
I did.

[Orcs are patrolling the Black Gate.]
 

 SAM
That�s it then. We cannot get past that.
 

[A command is heard and an Orc sounds 
a horn, signalling for the Gate to be 
opened. Two enormous cave trolls stretch 
and growl and then pull the mighty Gate 
open.]
 
 SAM
Look! The gate, it's opening! I can 
see a way down.
 
[He moves closer to the edge. Suddenly, 
the rock underneath him gives way and 
he falls.]
 
 FRODO
Sam, no!

 SAM
Argh!!

[Frodo goes after Sam.]

 GOLLUM
Master!

[Two Easterling soldiers see streams 
of dust coming down the cliff made by 
Sam and Frodo. They move away from the 
troop to investigate. Frodo reaches 
Sam who is stuck in the scree. As the 
Easterlings move closer and closer, 
Frodo throws his Elvish cloak over himself 
and Sam. The soldiers are now directly 
in front of Sam, but their eyes see 
nothing but rock. Frodo and Sam peer 
from underneath the cloak. The soldiers 
soon leave and after a moment, Frodo 
throws back the cloak and pulls Sam 
out.]
 
 FRODO
I do not ask you to come with me, Sam.
 

 SAM
I know, Mr Frodo. I doubt even these 
Elvish cloaks will hide us in there.
 

[They prepare to make a run for the 
Gate.]
 
 FRODO
Now!

[Gollum pulls them back.]

 GOLLUM
No! No, no master! They catch you! They 
catch you! Don�t take it to him! He 
wants the preciousss. Always he�s looking 
for it! And the preciousss is wanting 
to go back to him. But we mustn�t let 
him have it.
 
[Frodo tries to make a run for it.]
 

 GOLLUM
No! [Pulls Frodo back again.] There�s 
another way. More secret. A dark way.
 

 SAM
Why haven�t you spoken of this before?!
 

 GOLLUM
Because Master did not ask!

 SAM
He�s up to something.

 FRODO
Are you saying there�s another way into 
Mordor?
 
 GOLLUM
Yes. There is a path, and some stairs, 
and then� a tunnel.
 [Frodo and Sam watch as the Black Gate 
closes. Gollum is stroking Frodo�s arm 
and burying his face in his cloak.]
 

 FRODO
He�s led us this far, Sam.

 SAM
Mr. Frodo, no.

 FRODO
He�s been true to his word.

 SAM
[Whispers] No!

 FRODO
Lead the way, Sm�agol.

 GOLLUM
Good Sm�agol always helps.

[Frodo follows Gollum as Sam stares 
after him in disbelief.]
 
[On the plains of Rohan. Gandalf, Aragorn, 
Legolas and Gimli stop as Edoras comes 
into view.]
 
 GANDALF
Edoras and the Golden Hall of Meduseld. 
There dwells Th�oden, King of Rohan, 
whose mind is overthrown. Saruman�s 
hold over King Th�oden is now very strong.
 

[In the Hall, �owyn is kneeling before 
Th�oden, holding his hand in hers.]
 

 �OWYN
My lord, your son, he is dead. My lord? 
Uncle?
 
[Th�oden just sits and stares ahead, 
his eyes clouded and unseeing.]
 
 �OWYN
Will you not go to him? [She weeps.] 
Will you do nothing?
 
[Scene returns to Gandalf and company.]
 

 GANDALF
Be careful what you say. Do not look 
for welcome here.
 
[They ride on towards Edoras.]



[At Edoras, �owyn is weeping at the 
dead Th�odred's bed. She kisses his 
hand. Gr�ma appears at the door.]
 

 GR�MA
Oh, he� he must have died sometime in 
the night. What a tragedy for the king 
to lose his only son and heir.
 
[He sits on the bed and puts a hand 
on �owyn�s shoulder.]
 
 GR�MA
I understand his passing is hard to 
accept, especially now that your brother 
has deserted you.
 
 �OWYN
[jumps back and throws off Gr�ma�s hand] 
Leave me alone, snake!
 
 GR�MA
[Rises from the bed and moves ever closer 
to �owyn] Oh, but you are alone! Who 
knows what you have spoken to the darkness. 
In bitter watches of the night, when 
all your life seems to shrink, the walls 
of your bower closing in about you, 
like a hutch to trammel some wild thing 
in.
 
[He puts a hand on her cheek and moves 
down to her throat.]
 
 GR�MA
So fair, so cold, like a morning of 
pale spring still clinging to winter's 
chill.
 
[�owyn and Gr�ma stare at each other 
intently.]
 
 �OWYN
Your words are poison!

[�owyn runs out of the hall. Weeping, 
she looks away into the distance. A 
flag comes off its pole and is carried 
by the breeze. �owyn sees riders coming 
towards Edoras. As Aragorn passes the 
entrance to Edoras, the flag floats 
down to land near him. Edoras is silent 
and somber. Everyone is dressed in black 
and staring at the newcomers in wary 
silence. Aragorn looks up at the hall 
and sees a lady in white standing on 
the steps. He looks around at more somber 
people.]
 
 GIMLI
You�ll find more cheer in a graveyard.
 

[Aragorn looks up to the hall again 
but the lady has disappeared. The company 
climbs up the stairs to the hall and 
is met by guards.]
 
 GANDALF
[sees H�ma] Ah.

 H�MA
I cannot allow you before Th�oden-King 
so armed, Gandalf Greyhame. By order 
of Gr�ma Wormtongue.
 
[Gandalf nods in understanding and signals 
for the others to surrender their weapons. 
Aragon hands over his sword and knives. 
Legolas gives a little twirl to his 
knives before handing them over to the 
guards. Gimli hands over his axes reluctantly.]
 

 H�MA
[gestures to Gandalf] Your staff.

 GANDALF
Hmm? [Glances at his staff.] Oh. You 
would not part an old man from his walking 
stick? [Looks at H�ma innocently.]
 

[H�ma hesitates for a second and then 
gestures that they follow him into the 
hall. Gandalf gives Aragorn a tiny wink 
and enters the hall, leaning on Legolas� 
arm.]
 
 GR�MA
[Leaning down and whispering to Th�oden.] 
My lord, Gandalf the Grey is coming. 
He�s a herald of woe.
 
 GANDALF
The courtesy of your hall is somewhat 
lessened of late, Th�oden King.
 
[As Gandalf approaches Th�oden, Aragorn, 
Legolas and Gimli pull back and survey 
the hall and its hostile occupants. 
A group of men starts to follow their 
steps with hostility.]
 
 GR�MA
[Whispering to Th�oden.] He�s not welcome.
 

 TH�ODEN
Why should I� welcome you, Gandalf� 
Stormcrow? [Looks to Gr�ma for affirmation.]
 

 GR�MA
A just question, my liege. [He walks 
towards Gandalf.] Late is the hour in 
which this conjurer chooses to appear. 
Lathspell spell I name him. Ill news 
is an ill guest.
 
 GANDALF
Be silent! Keep your forked tongue behind 
you teeth. I have not passed through 
fire and death to bandy crooked words 
with a witless worm! [Raises his staff 
against Gr�ma.]
 
 GR�MA
His staff! [Backing away from Gandalf 
while addressing the guards] I told 
you to take the wizard�s staff!
 
[The hostile guards attack. Aragorn, 
Legolas and Gimli engage them in a fist-fight 
as Gandalf continues to approach Th�oden. 
Gamling tries to go forward but H�ma 
holds him back.]
 
 GANDALF
Th�oden, son of Thengel, too long have 
you sat in the shadows.
 
[Gr�ma tries to crawl away unnoticed, 
but Gimli catches him and pins him to 
the floor.]
 
 GIMLI
[Growls] I would stay still, if I were 
you.
 
 GANDALF
Hearken to me! I release you from the 
spell. [Gestures with his hand]
 
 TH�ODEN
[Menacingly] Hahahhhahahahah! [Gandalf 
opens his eyes in surprise.] You have 
no power here, Gandalf the Grey!
 
[Gandalf throws back his grey cloak, 
exuding blinding white light. Th�oden 
is thrown back against his seat.]
 

 TH�ODEN
Argh!

 GANDALF
[Points his staff towards Th�oden.] 
I will draw you, Saruman, as poison 
is drawn from a wound.
 
[�owyn rushes in. Seeing her uncle threatened, 
she tries to go to him but is held back 
by Aragorn.]
 
 ARAGORN
Wait.

 TH�ODEN
[In Saruman�s voice.] If I go. . . Th�oden 
dies.
 
[Gandalf moves his staff sharply and 
Th�oden flies back against the chair 
again.]
 
 GANDALF
You did not kill me, you will not kill 
him!
 
 TH�ODEN
[in Saruman's voice] Rohan is mine!
 

 GANDALF
Be gone!!

[Gandalf smites Th�oden as he lunges 
at him. Th�oden is thrown back into 
the chair and the shot changes to Saruman 
flying backwards from the Palant�r which 
he used to manipulate Th�oden. He lands 
landing hard on the floor of Orthanc, 
bleeding from a gash in his forehead. 
In the hall, Th�oden lets out a moan 
and slumps forward in the chair. �owyn 
runs to her uncle�s side as he falls. 
Th�oden�s head rises again and his face 
begins to change gradually into that 
of a much younger-looking man. Clarity 
and recognition returns to his eyes.]
 

 TH�ODEN
[Looks closely at �owyn] I know your 
face. �owyn� �owyn.
 
[�owyn weeps with joy]

 TH�ODEN
Gandalf?

 GANDALF
Breathe the free air again, my friend.
 

[The hall is shown to be filled with 
light again, as everyone marvels at 
the rejuvenation of the king.]
 
 TH�ODEN
[Standing up and looking around him.] 
Dark have been my dreams of late. [He 
looks down at his trembling hands.]
 

 GANDALF
Your fingers would remember their old 
strength better... if they grasped your 
sword.
 
[H�ma runs up with his sword. Th�oden 
reaches for it with trembling hands. 
He wraps his fingers around it slowly 
and then draws it, gazing upon the shiny 
steel. In a corner, Gr�ma trembles and 
tries to escape but is pulled back by 
Gimli. Suddenly, Th�oden�s gaze turns 
to Gr�ma. Gr�ma is thrown out of the 
hall and down the stairs.]
 
 GR�MA
Argh! [Beseechingly to Th�oden] I've 
only ever served you, my lord!
 
 TH�ODEN
[Advancing towards Gr�ma, holding the 
sword firmly in his hand] Your leechcraft 
would have had me crawling on all fours 
like a beast!
 
 GR�MA
[Grovelling] Send me not from your side.
 

[Th�oden raises his sword to kill Gr�ma. 
Aragorn holds him back.]
 
 ARAGORN
No, my lord! No, my lord. Let him go. 
Enough blood has been spilled on his 
account.
 
[Gr�ma scrambles to his feet and pushes 
through the crowd]
 
 GR�MA
Get out of my way!

 H�MA
Hail, Th�oden king!

[The crowd kneels in homage before Th�oden. 
Aragorn kneels also. Gr�ma rides out 
of Edoras. As Th�oden turns to go back 
into the hall, he looks up.]
 
 TH�ODEN
Where is Th�odred? Where is my son?
 



[A white flower comes into view, held 
up by a hand. It is released and spirals 
down to land among similar flowers, 
in front of a tomb.]
 
 TH�ODEN
Simbelmyn�. Ever has it grown on the 
tombs of my forebearers. [Looks at Gandalf] 
Now it shall cover the grave of my son. 
Alas, that these evil days should be 
mine. The young perish and the old linger. 
That I should live to see the last days 
of my house.
 
 GANDALF
Th�odred�s death was not of your making.
 

 TH�ODEN
No parent should have to bury their 
child.
 
[Th�oden starts to weep]

 GANDALF
He was strong in life. His spirit will 
find its way to the halls of your fathers. 
Westu h�l. Fer�u, Th�odred, Fer�u. (Be-thou 
well. Go-thou, Th�odred, go-thou.)
 

[Gandalf turns to go back to the hall 
and leaves Th�oden to grieve in private. 
He spots two children on horseback. 
The boy collapses and falls off the 
horse. Later, inside the Golden Hall, 
the two children are eating at a table, 
and �owyn is with them.]
 
 �OWYN
They had no warning. They were unarmed. 
Now the wildmen are moving through the 
Westfold, burning as they go. Rick, 
cot and tree.
 
 FREDA
Where�s mama?

 �OWYN
Shh...

 GANDALF
This is but a taste of the terror that 
Saruman will unleash. All the more potent 
for he is driven now by fear of Sauron. 
Ride out and meet him head on. Draw 
him away from your women and children. 
[Leans forward and puts a hand on Th�oden�s 
chair. Th�oden looks at his hand warily.] 
You must fight.
 
 ARAGORN
You have two thousand good men riding 
north as we speak. �omer is loyal to 
you. His men will return and fight for 
their king.
 
 TH�ODEN
They will be three hundred leagues from 
here by now. �omer cannot help us. I 
know what it is that you want of me. 
But I will not bring further death to 
my people. I will not risk open war.
 

[Gimli takes a bite of his bread as 
he watches the exchange between Aragorn 
and Th�oden.]
 
 ARAGORN
Open war is upon you. Whether you would 
risk it or not.
 
 TH�ODEN
When last I looked, Th�oden, not Aragorn, 
was king of Rohan.
 
[Gimli takes a drink and burps.]

 GANDALF
Then what is the king�s decision?

[Scene shifts to outside Meduseld]
 

 H�MA
By order of the king, the city must 
empty. We make for the refuge of Helm�s 
Deep. Do not burden yourselves with 
treasures. Take only what provisions 
you need.
 
[People are moving about, gathering 
their belongings and preparing to move. 
Gandalf, Aragorn, Legolas and Gimli 
walk towards the stables.]
 
 GIMLI
Helm�s Deep! They flee to the mountains 
when they should stand and fight. Who 
will defend them if not their king.
 

 ARAGORN
He�s only doing what he thinks is best 
for his people. Helm�s Deep has saved 
them in the past.
 
[They enter the stables]

 GANDALF
There is no way out of that ravine. 
Th�oden is walking into a trap. He thinks 
he�s leading them to safety. What they 
will get is a massacre. Th�oden has 
a strong will but I fear for him. I 
fear for the survival of Rohan. He will 
need you before the end, Aragorn. The 
people of Rohan will need you. The defences 
HAVE to hold.
 
 ARAGORN
They will hold.

 GANDALF
[Turns to Shadowfax and strokes him] 
The Grey Pilgrim... that�s what they 
used to call me. Three hundred lives 
of men I�ve walked this earth and now 
I have no time. With luck, my search 
will not be in vain. Look to my coming 
at first light on the fifth day. At 
dawn, look to the East.
 
 ARAGORN
[Opens the stall gates] Go.

[Legolas jumps back as Gandalf rides 
out of the stable and over the plains 
of Rohan.]
 


[�owyn opens a chest in which lies a 
sword. She unsheathes it and begins 
to practice. She swings around and is 
met by Aragorn, who blocks her parry.]
 

 ARAGORN
You have some skill with a blade.

[With a swift move, �owyn swings her 
sword and renders Aragorn vulnerable, 
gaining the upper hand.]
 
 �OWYN
[Stepping back and sheathing her sword.] 
Women of this country learned long ago: 
Those without swords may still die upon 
them. I fear neither death nor pain.
 

 ARAGORN
What do you fear, my lady?

 �OWYN
A cage. To stay behind bars until use 
and old age accept them and all chance 
of valor has gone beyond recall or desire.
 

 ARAGORN
You are a daughter of kings, a shieldmaiden 
of Rohan. [He sheaths his knife.] I 
do not think that would be your fate.
 

[He bows and �owyn gazes after him as 
he walks away.]
 


[The people of Rohan are moving out 
of Edoras towards Helm�s Deep, with 
Th�oden leading the way. At Isengard, 
Gr�ma confers with Saruman, holding 
a cloth to his mouth.]
 
 GR�MA
Th�oden will not stay at Edoras. It�s 
vulnerable, he knows this. He will expect 
an attack on the city. They will flee 
to Helm�s Deep, the great fortress of 
Rohan. It is a dangerous road to take 
through the mountains. They will be 
slow. They will have women and children 
with them.
 
[Saruman�s eyebrows rise in response. 
He walks through the depths of Isengard 
and gives orders to an Orc.]
 
 SARUMAN
Send out your warg riders.

[The Orc smiles. In a pit behind him, 
ferocious growls are heard and shadows 
dances.]
 


[Gollum is trying to catch a fish in 
the river. He slips and falls, grasping 
at a slippery fish as he goes. Frodo 
and Sam follow behind.]
 
 SAM
Hey Stinker! Don�t go getting too far 
ahead!
 
 FRODO
Why do you do that?

 SAM
What?

 FRODO
Call him names; run him down all the 
time.
 
 SAM
Because� because that's what he is, 
Mr. Frodo. There's naught left in 'im 
but lies and deceit. It's the Ring he 
wants. It's all he cares about.
 
 FRODO
[Glaring at Sam] You have no idea what 
it did to him. What it�s still doing 
to him. [He walks past Sam and stops.] 
I want to help him, Sam...
 
 SAM
Why?

 FRODO
Because I have to believe he can come 
back.
 
 SAM
You can�t save him, Mr. Frodo.

 FRODO
[Snapping at Sam]What do you know about 
it? Nothing!
 
[Sam walks away slowly.]

 FRODO
[With remorse] I'm sorry, Sam. I don't 
know why I said that.
 
 SAM
[Looks back at Frodo with tears in his 
eyes.] I do. It's the Ring. You can't 
take your eyes off it. I've seen you. 
You're not eating. You barely sleep. 
It's taken a hold of you, Mr Frodo. 
You have to fight it!
 
 FRODO
[Grows angry again] I know what I have 
to do Sam. The Ring was entrusted to 
me! It's my task! Mine! My own! [He 
walks away]
 
 SAM
Can�t you hear yourself? Don�t you know 
who you sound like?
 
[Frodo continues to walk away without 
looking back.]
 


[Nighttime, Frodo and Sam are asleep. 
Gollum is crouching in a corner by himself.]
 

 GOLLUM
We wants it. We needs it. Must have 
the precioussss. They stole it from 
us. Sneaky little hobbitsesss. Wicked, 
trickssssy, falssse!
 
 SM�AGOL
No! Not Master.

 GOLLUM
Yes, precious. False. They will cheat 
you, hurt you, lie.
 
 SM�AGOL
Master�s my friend.

 GOLLUM
[Tauntingly] You don�t have any friends. 
Nobody likes YOU...
 
 SM�AGOL
[Covers his ears] Not listening. I�m 
not listening.
 
 GOLLUM
You�re a liar and a thief.

 SM�AGOL
[Shaking his head] Nope.

 GOLLUM
Mur�derer�!

 SM�AGOL
[Starts to weep and whimper] Go away.
 

 GOLLUM
Go away! [Cackles] HAHAHAHA!!

 SM�AGOL
[Weeping and in a small voice] I hate 
you. I hate you!
 
 GOLLUM
[Fiercely] Where would you be without 
me? *Gollum, gollum*. I saved us. It 
was me. We survived because of me!
 

 SM�AGOL
[Resolute] Not anymore.

 GOLLUM
[Startled] What did you say?

 SM�AGOL
Master looks after us now. We don�t 
need you.
 
 GOLLUM
What?

 SM�AGOL
Leave now and never come back.

 GOLLUM
No!!

 SM�AGOL
[Louder] Leave now and never come back!
 

 GOLLUM
[Growls and bares his teeth] Arrrgh!!!
 

 SM�AGOL
LEAVE. NOW. AND. NEVER. COME. BACK!
 

[Sm�agol pants and then looks around.]
 

 SM�AGOL
We... we told him to go away! And away 
he goes, preciousss. [He hops around 
in joy and does a little dance.] Gone, 
gone, gone! Sm�agol is free!
 
[The next day, while the hobbits were 
resting, Sm�agol comes back with two 
rabbits and drops them onto Frodo�s 
lap.]
 
 SM�AGOL
Look! Look! See what Sm�agol finds! 
Hehehe! Hahaha!
 
[Frodo looks at up him with bloodshot 
eyes. He smiles at Sm�agol and looks 
at Sam. Sm�agol raises a fist in self-congratulation 
and dances around. He then picks up 
one of the rabbits and snaps the rabbit's 
back in front of Frodo.]
 
 SM�AGOL
They are young. They are tender. They 
are nice. Yes they are! Eat them! Eat 
them!
 
[He bites and tears into the raw meat. 
Sam rushes over and snatches the rabbit 
out of Gollum�s hands]
 
 SAM
You�ll make him sick, you will, behaving 
like that! [Holding up the two rabbits] 
There�s only one way to eat a brace 
of coneys.
 
[A pot of stew is simmering over a fire.]
 

 SM�AGOL
[Looking into the pot] Argh!! What�s 
it doing! Stupid fat hobbit! It ruins 
it!
 
 SAM
What�s to ruin? There�s hardly any meat 
on �em.
 
[A faint calling sound catches the attention 
of Frodo.]
 
 SAM
What we need is a few good taters.
 

 GOLLUM
What�s taters, preciousss? What�s taters 
uh?
 
 SAM
PO-TAY-TOES! Boil �em. Mash �em. Stick 
�em in a stew. Lovely big golden chips 
with a nice piece of fried fish....
 

 SM�AGOL
[Sticks out his tongue in disgust] Pbbbttt!!
 

 SAM
Even you couldn�t say no to that. [He 
takes a sip of the stew]
 
 SM�AGOL
Oh yes we could! Spoil nice fish... 
[scrambles up close to Sam] Give it 
to usss rrraw... and wrrriggling! [Makes 
sickeningly happy face.] You keep nasty 
chips. [Hops away]
 
 SAM
You�re hopeless.

[Frodo follows the source of the sound. 
Sam suddenly notices that Frodo is no 
longer in his sight.]
 
 SAM
Mr. Frodo?

[He goes in search of Frodo and finds 
him lying down near some bushes looking 
at a Haradrim army marching across the 
land. He moves to lie low beside Frodo. 
Sm�agol also moves in beside Frodo.]
 

 SAM
Who are they?

 GOLLUM
Wicked men. Servants of Sauron. They 
are called to Mordor. The Dark One is 
gathering all armies to him. It won�t 
be long now. He will soon be ready.
 

 SAM
Ready to do what?

 GOLLUM
To make his war. The last war that will 
cover all the world in shadow.
 
 FRODO
We�ve got to get moving. Come on, Sam.
 

 SAM
[Suddenly grabs Frodo�s arm] Mr Frodo! 
Look! It�s an Oliphaunt!
 
[Gigantic Oliphaunts appear, carrying 
soldiers and supplies on their backs.]
 

 SAM
No one at home will believe this...
 

[Sm�agol slips away unnoticed.]

 FRODO
[Looking around] Sm�agol?

[Suddenly, pandemonium breaks out from 
below; the soldiers are being ambushed. 
Cloaked rangers are firing deadly arrows 
at the soldiers and Oliphaunts from 
behind bushes. One of the Oliphaunts 
starts trumpeting and stomping towards 
Frodo and Sam, swinging his huge trunk 
and tusks. Faramir takes aim and shoots 
a soldier. He falls from the Oliphaunt 
and lands right behind Frodo and Sam, 
dead.]
 
 FRODO
We�ve lingered here too long. Come on, 
Sam!
 
[Frodo runs right into a Gondorian Ranger, 
who grabs hold of him and throws him 
onto his back. Sam sees Frodo in danger 
and grapples for his sword]
 
 SAM
Ah!

[He charges at Faramir but is grabbed 
by another ranger and thrown down. A 
sword appears at his throat. Faramir 
appears.]
 
 FARAMIR
Bind their hands.



[Meanwhile, the Rohirrim refugees are 
heading towards Helm�s Deep. Gimli is 
on a horse, chatting with �owyn who 
is leading it by the reins.]
 
 GIMLI
It�s true you don�t see many Dwarf women. 
And in fact, they are so alike in voice 
and appearance, haha that they�re often 
mistaken for Dwarf men.
 
[�owyn smiles and looks back at Aragorn.]
 

 ARAGORN
[Gestures and whispers] It�s the beards....
 

 GIMLI
And this, in turn, has given rise to 
the belief that there are no Dwarf women. 
And that dwarves just spring out of 
holes in the ground!
 
 �OWYN
[Laughs gaily] Hahahaha!!

 GIMLI
Hehehe! Which is of course ridiculous� 
Whoa!!
 
[The horse suddenly rears up and gallops 
away as �owyn loses her hold on the 
reins. Gimli falls off after a short 
distance and lands with a loud thump.]
 

 �OWYN
Ooh! [She rushes forward to Gimli]
 

 GIMLI
[Struggling to get up] It�s alright, 
it�s alright. Nobody panic. That was 
deliberate. It was deliberate.
 
[�owyn helps Gimli up. She laughs as 
she brushes him off and looks back at 
Aragorn with the sun behind her and 
the wind in her hair. At that particular 
moment, Aragorn seems enchanted by �owyn�s 
light-hearted image. That night. Aragorn 
could not sleep and smokes his pipe 
as he thinks of Arwen.]
 
 ARWEN (V.O.)
The light of the Evenstar does not wax 
and wane� It is mine to give to whom 
I will... Like my heart� Go to sleep...
 

 [FLASHBACK
Aragorn is lying on a chaise in Rivendell. 
He opens his eyes and sees Arwen before 
him, smiling down at him.]
 
 ARAGORN
I am asleep. This is a dream.

 ARWEN
[Bends down to kiss him] Then it is 
a good dream. Sleep�
 
[She kisses him lightly on the lips 
and then steps away to look out upon 
Rivendell. Aragorn closes his eyes but 
for a while. He looks over at Arwen.]
 

 ARAGORN
Min l� pennich nin i aur hen telitha. 
(You told me once that this day would 
come.)
 
 ARWEN
[Turns to look at Aragorn] � i vethed... 
n� i onnad. Boe bedich go Frodo. Han 
b�d l�n. (This is not the end... it 
is the beginning. You must go with Frodo. 
That is your path.)
 
 ARAGORN
[Walks over to Arwen] Dolen i v�d o 
nin. (My path is hidden from me.)
 

 ARWEN
Si peliannen i v�d na dail l�n. Si boe 
�-dhannathach. (It is already laid before 
your feet. You cannot falter now.)
 

 ARAGORN
Arwen�

[Arwen hushes him, resting her fingers 
on his lips. As her hands moves down 
to rest on the Evenstar pendant around 
Aragorn�s neck, he clasps her hand in 
his and they gaze into each other�s 
eyes.]
 
 ARWEN
Ae �-esteliach nad... estelio han. Estelio 
ammen. (If you trust nothing else... 
trust this. Trust us.)
 
[They kiss.]



[The next day, on the journey to Helm�s 
Deep. �owyn is walking alongside Aragorn.]
 

 �OWYN
Where is she? The woman who gave you 
that jewel.
 
 [ARAGORN SMILES AND SAYS NOTHING. FLASHBACK
Elrond is speaking to Aragorn in Rivendell, 
before he sets out with the Fellowship.]
 

 ELROND
Our time here is ending. Arwen�s time 
is ending. Let her go. Let her take 
the ship into the west. Let her bear 
away her love for you to the Undying 
Lands. There it will be evergreen.
 

 ARAGORN
But never more than a memory.

 ELROND
I will not leave my daughter here to 
die.
 
 ARAGORN
She stays because she still has hope.
 

 ELROND
She stays for YOU! She belongs with 
her people!
 
[Aragorn and Arwen are together before 
the Fellowship departs.]
 
 ARAGORN
Idhren emmen menna gui ethwel. Hae o 
auth a n�r a naeth. (You have a chance 
for another life. Away from war... grief... 
despair.)
 
 ARWEN
Why are you saying this?

 ARAGORN
I am mortal; you are Elfkind. It was 
a dream, Arwen, nothing more.
 
[He takes Arwen�s hand to return the 
Evenstar necklace to her.]
 
 ARAGORN
This belongs to you.

 ARWEN
[Closes Aragorn�s hand over the Evenstar] 
It was a gift. Keep it.
 
[Scene shifts back to Aragorn and �owyn]
 

 �OWYN
My lord?

 ARAGORN
She is sailing to the Undying Lands, 
with all that is left of her kin.
 

[Gamling and Ham� ride to the front. 
Legolas watches them as they pass.]
 

 GAMLING
What is it? H�ma?

[Their horses become restless.]

 H�MA
[Looking around] I�m not sure.

[A warg scout appears on a slope above 
and charges at them. The warg attacks 
H�ma and kills him.]
 
 GAMLING
Wargs!

[Just as it starts to turn on Gamling, 
Legolas runs over and kills the warg 
with an arrow. He then draws his knife 
and kills the Orc.]
 
 LEGOLAS
Argh! [Shouts to Aragorn] A scout!
 

 TH�ODEN
What is it? What do you see?

 ARAGORN
[Running back to Th�oden] Wargs! We 
are under attack!
 
[Hearing the alarm, the villagers begin 
to cry and panic.]
 
 ARAGORN
Get them out of here!

 TH�ODEN
All riders to the head of the column!
 

 GIMLI
[Trying to mount Arod] Come on, get 
me up here, I�m a rider! Argh!
 
[Gimli gets onto the horse with some 
help. Legolas gazes into the distance 
and sees many warg-riders coming fast 
towards them, kicking up dust trails 
as they go.]
 
 TH�ODEN
[To �owyn] You must lead the people 
to Helm�s Deep. And make haste!
 
 �OWYN
I can fight!

 TH�ODEN
No! You must do this... for me.

[�owyn holds Th�oden�s gaze for a moment 
and then turn to attend to the villagers.]
 

 TH�ODEN
[To his men] Follow me! Yah!

 GIMLI
[Tries to get Arod to move] Forward. 
I mean, charge forward! March forward! 
[Arod moves off with Gimli seated rather 
unsteadily.] That�s it! Go on!
 
 �OWYN
[To the villagers] Make for the lower 
ground! Stick together!
 
[She looks back at the Rohirrim and 
sees Aragorn on Hasufel. They hold each 
other�s gaze for a moment before Aragorn 
turns to join Th�oden. �owyn departs 
with the villagers in the opposite direction.]
 

[Legolas takes aim at the distant target 
and fells a warg rider. He draws another 
arrow and kills another. Just as he 
reaches for a third arrow, he sees Th�oden 
and company approaching. He quickly 
runs and mounts Arod with a smooth leap 
and joins in the fray with Gimli behind 
him on horseback.]
 
 WARG-RIDERS
Argh!!

 TH�ODEN
CHARGE!!

[The Rohirrim and warg riders crash 
head on and the battle begins. Th�oden 
and company hack away at the warg riders. 
In the midst of fighting, Gimli falls 
off Arod. He turns to find a warg growling 
at him.]
 
 GIMLI
Bring your pretty face to my axe!

[Just as the warg leaps at Gimli, Legolas 
kills it with one shot.]
 
 GIMLI
[Jumping back as the warg falls, outraged] 
Argh! That one counts as mine!
 
[As Gimli swings his axe at another 
warg, it dies and falls onto Gimli, 
pinning him under.]
 
 GIMLI
Argh! Stinking creature. Argh!

[As he tries to lift the warg off him, 
an Orc leans over them both. Gimli kills 
him quickly, twisting his neck, and 
it lands on him also. Gimli sniffs at 
the Orc and makes a face. He tries to 
lift both the warg and Orc off him. 
Just then, another warg comes upon him 
and bares its teeth, ready to strike. 
]
 
 GIMLI
[Eyes widening] Ooh..!

[Aragorn plucks a spear as he passes 
on horseback and throws it at the warg. 
It dies, landing on Gimli and adding 
to the pile on top of him.]
 
 GIMLI
[As the warg lands on him] Oooh!!

[Th�oden stabs at a warg rider. Aragorn 
is knocked off Hasufel and attacked 
by Sharku. Aragorn tries to kill the 
warg rider but Sharku blocks his attempt 
and grabs Aragorn by the neck, while 
the latter is half-dragged by the warg. 
In the struggle, Sharku is thrown off 
and he rips the Evenstar pendant from 
Aragorn�s neck as he falls. Aragorn 
tries to let go of the warg but finds 
his wrist tangled with the saddle straps. 
He tries unsuccessfully to disentangle 
himself and is dragged closer and closer 
to the edge of a cliff at great speed. 
The warg runs right off the cliff and 
they both disappear over the edge. The 
battle is winding down as the Rohirrim 
finish off the last few wargs and Orcs.]
 

 LEGOLAS
[Looking around] Aragorn!

 GIMLI
Aragorn?

[They come near to the cliff and hear 
Sharku wheezing and laughing]
 
 GIMLI
[Standing over the dying Orc] Tell me 
what happened and I will ease your passing.
 

 SHARKU
He�s [cough] dead. [Laughs evilly] Took 
a little tumble off the cliff.
 
 LEGOLAS
[Looks towards the edge of the cliff, 
and grabs Sharku] You lie!
 
[Sharku chortles and dies. Legolas looks 
down at Sharku�s fist and finds the 
Evenstar pendant. He takes it, runs 
to the edge of the cliff and looks down 
to see the great drop and rushing waters 
below, with no sign of Aragorn. Gimli 
comes to stand beside him.]
 
 TH�ODEN
[To his men] Get the wounded on horses. 
The wolves of Isengard will return. 
Leave the dead.
 
[Legolas turns to Th�oden, an expression 
of perplexed anger on his face.]
 
 TH�ODEN
[Puts a hand on Legolas' shoulder] Come.
 

[He leaves Legolas and Gimli to stare 
down at the river.]
 


[The Rohan villagers are drawing close 
to Helm�s Deep. Cries of relief are 
heard as the refuge is within sight.]
 

 REFUGEES
Helm�s Deep! At last! There it is!
 

 OLD WOMAN
[To �owyn] We�re safe, my lady! Thank 
you!
 
[�owyn embraces the woman and they walk 
on towards Helm�s Deep. The gate is 
opened for the villagers. Many have 
already taken refuge within and are 
resting along the passage. �othain and 
Freda run towards their mother.]
 
 FREDA
Mama!

 MORWEN
�othain! Freda!

[The three hug and cry with joy. Th�oden 
and company returns from the battle 
with warg riders]
 
 GAMLING
Make way for Th�oden!

 SOLDIERS
Sire!

 GAMLING
Make way for the king!

[�owyn rushes down to meet them]

 �OWYN
[Looking about] So few. So few of you 
have returned.
 
 TH�ODEN
[Dismounting] Our people are safe. We 
have paid for it with many lives.
 

 GIMLI
[Going up to �owyn] My lady...

 �OWYN
Lord Aragorn, where is he?

 GIMLI
He fell...

[�owyn is shaken and raises teary eyes 
to Th�oden. The latter looks down and 
then walks away, confirming her unasked 
question.]
 


[At the battlements]

 TH�ODEN
Draw all our forces behind the wall. 
Bar the gate, and set a watch on the 
surround.
 
 GAMLING
What of those who cannot fight, my lord? 
The women and children?
 
 TH�ODEN
Get them into the caves. [Walks down 
the steps and past a sewer gate] Saruman's 
arm would have grown long indeed if 
he thinks he can reach us here.
 
[Camera zooms in on the gate]

 GR�MA (V.O.)
Helm�s Deep has one weakness. Its outer 
wall is solid rock but for a small culvert 
at its base which is little more than 
a drain.
 
[Camera turns to Gr�ma and Saruman at 
Orthanc. Saruman is pouring some dark 
dry substances into a vessel. Gr�ma 
is holding a lit candle in his hand.]
 

 GR�MA
How? How can fire undo stone? What kind 
of device could bring down the wall?
 

[As he steps closer to the vessel, Saruman 
takes hold of Gr�ma�s hand and pushes 
the candle away from the vessel firmly.]
 

 SARUMAN
If the wall is breached, Helm's Deep 
will fall.
 
[He walks away towards the balcony.]
 

 GR�MA
[Following Saruman] Even if it is breached, 
it would take a number beyond reckoning, 
thousands to storm the keep.
 
 SARUMAN
Tens of thousands.

 GR�MA
But, my lord, there is no such force.
 

[Both of them came onto the balcony 
of the tower. Gr�ma suddenly sees and 
hears the enormous armies laid out below 
in neat rows and is astounded and awed. 
He continues to hold the extinguished 
candle aloft as he gapes at the vast 
army below. A horn is sounded, announcing 
the appearance of Saruman. A loud cheer 
is heard from the army. Saruman raises 
a hand.]
 
 SARUMAN
A new power is rising. Its victory is 
at hand!
 
[The army cheers and roars.]

 SARUMAN
This night, the land will be stained 
with the blood of Rohan! March to Helms 
Deep! Leave none alive!
 
[The camera keeps zooming out from the 
balcony over the incredible size of 
Saruman�s army, past Uruk-hai, spears, 
and banners and yet more Uruk-hai. The 
camera focuses back on Saruman who then 
raises his hands in the air]
 
 SARUMAN
To war!!

[The army cheers and roars even louder.]
 

 SARUMAN
[Sneers] There will be no dawn for Men.
 

[A tear flows down Gr�ma�s cheek. The 
Uruk-hai army began their march to Helm�s 
Deep.]
 


[Merry and Pippin are travelling through 
the forest, carried by Treebeard.]
 

 PIPPIN
Look! There�s smoke to the south!

 TREEBEARD
There is always smoke rising from Isengard 
these days.
 
 MERRY
Isengard?

[The two hobbits climb higher up onto 
Treebeard for a better view.]
 
 TREEBEARD
There was a time when Saruman would 
walk in my woods. But now he has a mind 
of metal and wheels. He no longer cares 
for growing things.
 
[Pippin and Merry are now on top of 
Treebeard and they see a massive army 
moving across the land]
 
 PIPPIN
What is it?

 MERRY
It�s Saruman�s army! The war has started.
 



[Aragorn is floating in the river, unconscious. 
He is washed ashore and dreams of Arwen.]
 

 ARWEN
[Kissing him on the lips] May the grace 
of the Valar protect you.
 
[A horse arrives and nudges Aragorn, 
turning him over and nuzzling him.]
 

 ARAGORN
[Mumbles] Brego� [He grabs hold of Brego�s 
mane, pulls himself onto the horse and 
rides slowly to Helms Deep.]
 
[Arwen is lying on her bed, deep in 
thought.]
 
 ELROND
[Coming into her room] Arwen.

[Arwen hears him and sits up.]

 ELROND
Tollen i l�. I chair gwannar na Valannor. 
Si bado, no c�rar. (Arwen, it is time. 
The ships are leaving for Valinor. Go 
now... before it is too late.)
 
 ARWEN
I have made my choice.

 ELROND
He is not coming back. Why do you linger 
here when there is no hope?
 
 ARWEN
There is still hope.

 ELROND
[Walks towards window and looks out] 
If Aragorn survives this war, you will 
still be parted. If Sauron is defeated, 
and Aragorn made king and all that you 
hope for comes true, you will still 
have to taste the bitterness of mortality. 
Whether by the sword or the slow decay 
of time, Aragorn will die.
 
[Arwen sees a vision of her future as 
Elrond speaks. She is dressed as a queen 
in mourning garb and looking down upon 
Aragorn, a crown on his brow, And�ril 
in his hand, and dead. Mourners are 
walking around the altar, paying their 
final respects. Arwen is weeping.]
 

 ELROND
And there will be no comfort for you. 
No comfort to ease the pain of his passing. 
He will come to death, an image of the 
splendor of the kings of men in glory 
undimmed before the breaking of the 
world.
 
[The body of Aragorn is now cast as 
a monument in stone. Arwen stands before 
the monument, veiled and in black.]
 

 ELROND
But you, my daughter, you will linger 
on in darkness and in doubt. As nightfall 
in winter that comes without a star. 
Here you will dwell, bound to your grief, 
under the fading trees, until all the 
world is changed and the long years 
of your life are utterly spent.
 
[Still veiled in black, Arwen is walking 
alone through the deserted woods of 
Lothl�rien.]
 
 ELROND
[Tuning to Arwen] Arwen... there is 
nothing for you here, only death.
 

[The vision ends and Arwen weeps with 
sadness and fear. Elrond comes to sit 
beside his daughter and raises a hand 
to her cheek.]
 
 ELROND
A im, �-'erin veleth l�n? (Do I not 
also have your love?)
 
 ARWEN
[Crying and moving into her father�s 
embrace] Gerich meleth n�n, ada. (You 
have my love, father)
 
[Elves, cloaked and carrying a lantern 
each, are setting off from Rivendell 
on their journey to the West. Elrond 
looks on as Arwen leaves with them. 
Arwen turns back to look at her father 
one last time before she departs. Elrond 
continues to stare after her with an 
expression of resigned sadness.]
 
[Elrond is standing by a window. He 
hears Galadriel speaking.]
 
 GALADRIEL
I amar prestar aen... han mathon ne 
nen, han mathon ne chae a han nostan 
ned gwilith. (The world has changed... 
I feel it in the water, I feel it in 
the earth, I smell it in the air.) The 
power of the enemy is growing. [Saruman 
is communicating with Sauron via the 
Palant�r.] Sauron will use his puppet 
Saruman to destroy the people of Rohan. 
Isengard has been unleashed. [View of 
Saruman's marching army] The eye of 
Sauron now turns to Gondor, the last 
free kingdom of men. [View of Osgiliath] 
His war on this country will come swiftly. 
He senses the Ring is close. The strength 
of the Ringbearer is failing. In his 
heart, Frodo begins to understand. [Close-up 
of Galadriel] The quest will claim his 
life. You know this. You have foreseen 
it. It is the risk we all took.
 
[Close-up of the Ring spinning in slow 
motion]
 
 GALADRIEL (V.O.)
In the gathering dark, the will of the 
Ring grows strong. It works hard now 
to find its way back into the hands 
of men.
 
[We see Faramir and Gondorian rangers 
with the captured Frodo and Sam.]
 

 GALADRIEL (V.O.)
Men, who are so easily seduced by its 
power. The young captain of Gondor has 
but to extend his hands, take the Ring 
for his own and the world will fall. 
It is close now, so close to achieving 
its goal.
 
[Faramir and company have reached Henneth 
Ann�n. Frodo and Sam and being carries, 
blinded-folded into the cave.]
 
 GALADRIEL (V.O.)
For Sauron will have dominion of all 
life on this Earth, even unto the ending 
of the world. The time of the Elves 
is over.
 
[Close-up of Galadriel's luminous eyes 
with their deep pools of wisdom. We 
then see Elrond in his library, looking 
at the painting of Isildur facing down 
Sauron with the broken blade of Narsil.]
 

 GALADRIEL (V.O.)
Do we leave Middle-earth to its fate? 
Do we let them stand alone?
 


[Scene returns to Henneth Ann�n. Faramir 
is conferring with his man. They unroll 
a map.]
 
 FARAMIR
What news?

 MADRIL
Our scouts report Saruman has attacked 
Rohan. Th�oden�s people have fled to 
Helm�s Deep. [Points at the map] But 
we must look to our own borders. Faramir, 
Orcs are on the move. Sauron is marshalling 
an army. Easterlings and Southrons are 
passing through the Black Gate.
 
 FARAMIR
How many?

 MADRIL
Some thousands. More come every day.
 

 FARAMIR
Who�s covering the river to the north?
 

 MADRIL
We pulled 500 men at Osgiliath, but 
if the city is attacked, we won�t hold 
it.
 
 FARAMIR
[Tracing on the map] Saruman attacks 
from Isengard. Sauron from Mordor. The 
fight will come to men on both fronts. 
Gondor is weak. Sauron will strike us 
soon. And he will strike hard. He knows 
now we do not have the strength to repel 
him.
 
[The hobbits are unbound and blindfolds 
taken off them by Damrod and another 
ranger. Sam and Frodo find themselves 
in a cave behind a waterfall, with Damrod 
sitting behind them on a rock constantly 
watching them. Faramir comes up to them 
and sits.].
 
 FARAMIR
My men tell me that you are Orc spies.
 

 SAM
Spies?! Now wait just a minute!

 FARAMIR
Well if you�re not spies, then who are 
you?
 
[Frodo and Sam remain silent.]

 FARAMIR
Speak.

 FRODO
We are hobbits of the Shire. Frodo Baggins 
is my name and this is Samwise Gamgee.
 

 FARAMIR
Your bodyguard?

 SAM
His gardener.

 FARAMIR
And where is your skulking friend? That 
gangrel creature. He had an ill-favoured 
look.
 
 FRODO
[The merest hesitation.] There was no 
other.
 
[Sam looks shifty-eyed and uncomfortable.]
 

 FRODO
We set out from Rivendell with seven 
companions. One we lost in M�ria. Two 
were my kin. A Dwarf there was also, 
and an Elf. And two men, Aragorn, son 
of Arathorn, and Boromir of Gondor.
 

 FARAMIR
[Intently] You�re a friend of Boromir?
 

 FRODO
Yes... for my part.

 FARAMIR
It will grieve you then to learn that 
he is dead.
 
 FRODO
[Shocked] Dead? How? When?

 FARAMIR
As one of his companions, I�d hoped 
you would tell me. [Pause] He was my 
brother.
 


[Faramir is sitting alone, deep in thought. 
Suddenly someone comes up to him.]
 

 GONDORIAN RANGER
Captain Faramir. [whispers] We found 
the third one.
 
[Frodo and Sam are sleeping. Frodo awakens 
as Faramir stands before him.]
 
 FARAMIR
You must come with me. Now.

[Frodo gets up and follow. They come 
to the edge of the waterfall, overlooking 
the Forbidden Pool.]
 
 FARAMIR
[Pointing down] Down there.

[Frodo looks down and sees Gollum diving 
into the water.]
 
 FARAMIR
To enter the forbidden pool bears the 
penalty of death. [He gestures to archers 
hidden in the bushes.] They wait for 
my command.
 
[The Rangers notch their arrows]

 FARAMIR
Shall I shoot?

[Frodo looks stricken. Gollum emerges 
from the pool onto a rock. He holds 
a fish in his hand and starts singing, 
slapping the fish on the rock as he 
goes.]
 
 GOLLUM
[singing] The rock and pool is nice 
and cool, so juicy sweet! I only wish 
[Whacks the fish on the rock] to catch 
a fish [whacks], so juicy sweet! [The 
fish almost wriggles out of his grasp 
and he whacks it some more.]
 
[Faramir has his hand raised to order 
his men to shoot. At the last moment, 
Frodo calls out.]
 
 FRODO
Wait! [Faramir stops] This creature 
is bound to me. And I to him. He is 
our guide. Please, let me go down to 
him.
 
[Faramir nods. Frodo descends to the 
Forbidden Pool and approaches Gollum 
who is gorging on the raw fish.]
 
 FRODO
Sm�agol. [Gollum turns round at Frodo�s 
voice.] Master is here. Come, Sm�agol. 
Trust master. Come!
 
[Frodo gestures for Gollum to follow 
him.]
 
 GOLLUM
We must go now?

 FRODO
Sm�agol, you must trust master. Follow 
me, come on. Come. Come, Sm�agol. Nice 
Sm�agol. That�s it. Come on.
 
[With the fish between his teeth, Gollum 
follows Frodo warily. Suddenly he looks 
up in alarm and is caught by Rangers.]
 

 FRODO
Don�t hurt him! Sm�agol don�t struggle! 
Sm�agol listen to me!
 
 GOLLUM
[wails] Master!!

[A black cloth is brought over Gollum's 
head. Frodo stares after them with a 
stricken expression as Faramir leads 
Gollum and his men away. Back in the 
cave, Gollum is thrown down to the ground. 
Crying, he crawls into a corner and 
curls up into ball.]
 
 GOLLUM
No! No!

 FARAMIR
Where are you leading them? Answer me!
 

 GOLLUM
[Cooing, his hand stroking his shoulder] 
Sm�a�gol... Why does it cry, Sm�agol?
 

 SM�AGOL
[Sobbing] Cruel men hurts us. Master 
trickst us.
 
 GOLLUM
Of course he did. I told you he was 
tricksy. I told you he was false.
 

 SM�AGOL
[Sobbing] Master is our friend... our 
friend.
 
 GOLLUM
Master betrayed us.

 SM�AGOL
No, not its business. Leave us alone!
 

 GOLLUM
[Hits his fist against the wall] Filthy 
little hobbitses. They stole it from 
us.
 
 SM�AGOL
[Whimpers] No... No!

 FARAMIR
What did they steal?

 GOLLUM
[Turns to Faramir with a ferocious expression] 
Myyy� PRECIOUSSS!! [He bares his teeth 
and growls] Aaaarrrggghhh!!!
 


[Back in their holding area, Sam and 
Frodo are alone.]
 
 SAM
We have to get out of here. You go. 
Go, now! You can do it. Use the Ring, 
Mr. Frodo. Just this once. Put it on. 
Disappear.
 
 FRODO
I can�t. You were right, Sam. You tried 
to tell me, but� I�m sorry. The Ring�s 
taking me Sam. If I put it on, he�ll 
find me. He�ll see.
 
 SAM
Mr. Frodo...

[They both stand as Faramir enters.]
 

 FARAMIR
[Unsheathes his sword] So... this is 
the answer to all the riddles. Here 
in the wild I have you. Two halflings 
and a host of men at my call. The Ring 
of power within my grasp.
 
[Faramir lifts the Ring from Frodo's 
neck with the tip of his sword.]
 
 FARAMIR
A chance for Faramir, captain of Gondor, 
to show his quality.
 
[Frodo is backed up fearfully against 
the wall. The Ring whispers and Frodo 
falls into a trance. Suddenly, he grabs 
the Ring in his hand and jerks himself 
away.]
 
 FRODO
No!! [He runs away from Faramir]

 SAM
Stop it! Leave him alone! Don�t you 
understand? He�s got to destroy it. 
That�s where we�re going. Into Mordor. 
To the mountain of fire.
 
[Faramir stares at Frodo. Just then 
Damrod enters.]
 
 DAMROD
Osgiliath is under attack. They call 
for reinforcements.
 
 SAM
Please. It�s such a burden. Will you 
not help him?
 
 DAMROD
Captain?

 FARAMIR
Prepare to leave. The Ring will go to 
Gondor. [He turns to leave.]
 
[Sam looks after Faramir sadly.]



[Aragorn is riding towards Helm�s Deep. 
On the way, he sees an enormous Uruk-hai 
army marching with great speed. He quickly 
makes haste towards Helm�s Deep and 
soon sees the refuge.]
 
 ARAGORN
[Patting Brego on the neck] Mae carnen, 
Brego, mellon n�n. (Well done, Brego, 
my friend)
 
[He rides into Helm�s Deep to the amazement 
of all.]
 
 REFUGEES
He�s alive!

 GIMLI
[Pushing his way through the crowd.] 
Where is he? Where is he? Get out of 
the way. I�m gonna kill him! [He sees 
Aragorn.] You are the luckiest, the 
canniest and the most reckless man I 
ever knew! [He hugs Aragorn.] Bless 
you, laddie!
 
 ARAGORN
Gimli, where is the king?

[Gimli gestures to the hall. As Aragorn 
makes his way in, he runs into Legolas 
who stands waiting.]
 
 LEGOLAS
Le ab-dollen. (You�re late.) [They smile. 
Legolas pauses and looks at Aragorn�s 
wounds.] You look terrible.
 
[To the side, �owyn sees Aragorn and 
smiles joyously and with relief. Legolas 
takes Aragorn�s hand and gives the Evenstar 
pendant. Aragorn looks at the Evenstar 
and claps Legolas on the shoulder.]
 

 ARAGORN
Hannon le. (Thank you.)

[�owyn looks on and smiles even as tears 
fill her eyes.]
 
[Aragorn is in the keep, conferring 
with Th�oden]
 
 TH�ODEN
A great host, you say?

 ARAGORN
All Isengard is emptied

 TH�ODEN
How many?

 ARAGORN
Ten thousand strong at least.

 TH�ODEN
Ten thousand?!

 ARAGORN
It is an army bred for a single purpose: 
to destroy the world of men. They will 
be here by nightfall.
 
 TH�ODEN
Let them come! [Walks away resolutely]
 

[Along the passage behind the Deeping 
Wall.]
 
 TH�ODEN
[to Gamling] I want every man and strong 
lad able to bear arms to be ready for 
battle by nightfall.
 
[Gamling nods and goes off. Th�oden 
stands at the gate of Helm�s Deep, speaking 
to Aragorn, Legolas and Gimli.]
 
 TH�ODEN
We will cover the causeway and the gate 
from above. No army has ever breached 
the Deeping Wall or set foot inside 
the Hornburg.
 
 GIMLI
This is no rabble of mindless Orcs. 
These are Uruk-hai. Their armor is thick 
and their shields broad.
 
 TH�ODEN
I have fought many wars, Master Dwarf. 
I know how to defend my own keep.
 

[Gimli seems miffed. Legolas claps a 
hand on Gimli�s shoulder as he follows 
Aragorn and Th�oden back in.]
 
 TH�ODEN
They will break upon this fortress like 
water on rock. Saruman�s hordes will 
pillage and burn, we�ve seen it before. 
Crops can be resown; homes rebuilt. 
Within these walls, we will outlast 
them.
 
 ARAGORN
They do not come to destroy Rohan�s 
crops or villages. They come to destroy 
its people. Down to the last child.
 

 TH�ODEN
[Draws close to Aragorn] What would 
you have me do? Look at my men. Their 
courage hangs by a thread. If this is 
to be our end, then I would have them 
make such an end as to be worthy of 
remembrance.
 
 ARAGORN
Send out riders, my lord. You must call 
for aid.
 
 TH�ODEN
And who will come? Elves? Dwarves? We 
are not so lucky in our friends as you. 
The old alliances are dead.
 
 ARAGORN
Gondor will answer.

 TH�ODEN
Gondor? Where was Gondor when the Westfold 
fell? Where was Gondor when our enemies 
closed in around us? Where was Gon� 
� No, my lord Aragorn, we are alone. 
[He walks away, calling out orders] 
Get the women and children into the 
caves.
 
 GAMLING
We need more time to lay provisions 
for a siege, lord �
 
 TH�ODEN
[Cutting him off] There is no time. 
War is upon us!
 
 ROHAN CAPTAIN
[to the soldiers] Secure the gate!
 

[Men rush to prepare for battle as flocks 
of carrion crows circle overhead.]
 



[Treebeard walks through the forest 
carrying Merry and Pippin. He comes 
to a clearing and stops.]
 
 TREEBEARD
We Ents have not troubled about the 
wars of men and wizards for a very long 
time. But now something is about to 
happen that has not happened for an 
age... Ent Moot.
 
 MERRY
What�s that?

 TREEBEARD
'Tis a gathering.

 MERRY
A gathering of what?

[Merry and Pippin turns round as they 
hear movement from the forest around 
them. They see many more Ents like Treebeard 
gathering.]
 
 TREEBEARD
Beech, oak, chestnut, ash... Good, good, 
good. Many have come. Now we must decide 
if the Ents will go to war.
 
[Merry licks his lips in anticipation.]
 



[Back at Helm�s Deep, the women and 
children are being led into the caves.]
 

 SOLDIER 1
Move back! Move to the caves!

 SOLDIER 2
Keep moving!

 SOLDIER 3
Quickly now!

[Old men and young lads are being drafted 
for war. The women and children say 
their tearful and reluctant farewells 
as their fathers, husbands and sons 
are led away by soldiers. In the armoury, 
weapons are being distributed. Aragorn 
picks up a battered sword, looks at 
it and tosses it back.]
 
 ARAGORN
Farmer, farriers, stable boys. These 
are no soldiers.
 
 GIMLI
Most have seen too many winters.

 LEGOLAS
Or too few. Look at them. They�re frightened. 
I can see it in their eyes. [The men 
around them fell silent. Legolas speaks 
to Aragorn.] Boe a h�n: neled herain 
dan caer menig! (And they should be... 
Three hundred against ten thousand!)
 

 ARAGORN
Si beriathar h�n. Amar n� ned Edoras. 
(They have more hope of defending themselves 
here than at Edoras.)
 
 LEGOLAS
Aragorn, men i ndagor. H�n �-... ortheri. 
Natha daged aen! (Aragorn, we are warriors. 
They cannot win this fight. They are 
all going to die!)
 
 ARAGORN
Then I shall die as one them! [He pauses 
and then walks away. Legolas makes as 
if to go after him.]
 
 GIMLI
[Puts a hand on Legolas] Let him go, 
lad. Let him be.
 


[In the hall]

 GAMLING
Every villager able to wield a sword 
has been sent to the armory. My lord?
 

 TH�ODEN
Who am I, Gamling?

 GAMLING
You are our king, sire.

 TH�ODEN
And do you trust your king?

 GAMLING
[Puts armour onto Th�oden] Your men, 
my lord, will follow you to whatever 
end.
 
[The villagers are handed their weapons. 
An oversized helmet is placed on a wide-eyed 
boy. Another stares at the axe that 
he is handed with frightened eyes. Another 
child wearing oversized chain mail takes 
up a huge shield. Th�oden stands inside 
the main hall of the keep, his back 
to the entrance where a bright white 
light is streaming through.]
 
 TH�ODEN
To whatever end� Where is the horse 
and the rider? Where is the horn that 
was blowing? They have passed like rain 
on the mountains. Like wind in the meadow. 
The days have gone down in the west. 
Behind the hills, into shadow. How did 
it come to this?
 


[Everyone is getting ready for war at 
the battlements. Aragorn is sitting 
on the steps. He sees a young lad in 
armour holding a sword looking around 
nervously.]
 
 ARAGORN
Give me your sword. What is your name?
 

 HALETH
Haleth, son of H�ma, my lord. The men 
are saying that we will not live out 
the night. They say that it is hopeless..
 

[Aragorn gives the battered sword a 
few swings.]
 
 ARAGORN
This is a good sword, Haleth, son of 
H�ma.
 
[He hands the sword back to Haleth and 
leans close to him, putting a hand on 
his shoulder.]
 
 ARAGORN
There is always hope.



[Back at the armoury, Aragorn dons his 
battle gear. His sword is handed to 
him as he reaches for it. He nods and 
accepts the sword from Legolas.]
 
 LEGOLAS
We have trusted you this far. You have 
not led us astray. Forgive me. I was 
wrong to despair.
 
 ARAGORN
�-moe edhored, Legolas. (There is nothing 
to forgive, Legolas.)
 
[They smile and clap one another on 
the shoulders. They look at Gimli as 
he walks up to them, struggling with 
his chain mail.]
 
 GIMLI
If we had more time I�d get this adjusted. 
[He drops the bundle and the chain mail 
lands with its length right to the floor.] 
It�s a little tight across the chest.
 

[Aragorn and Legolas bite back smiles. 
Just then, a horn sounds in the background]
 

 LEGOLAS
That is no Orc horn. [They run out to 
the battlements.]
 
[The guards look down in wonderment.]
 

 BEREG
[to another guard] Send for the king. 
Open the gate!
 
 SOLDIER
Open the gate!

[An army of Lothl�rien Elves march up 
the Causeway into the Hornburg. They 
are led by Haldir. The Rohirrim soldiers 
look upon them in wonderment and delight 
as they pass.]
 
 TH�ODEN
How is this possible?

 HALDIR
I bring word from Elrond of Rivendell. 
An alliance once existed between Elves 
and men. Long ago we fought and died 
together. [He looks up to see Aragorn, 
Legolas and Gimli running down the steps, 
and smiles] We come to honor that allegiance.
 

 ARAGORN
[He bows] Mae govannen, Haldir. (Welcome, 
Haldir) [He grabs Haldir in a huge embrace. 
Initially stunned, Haldir hugs him back 
lightly.]
 
 ARAGORN
You are most welcome!

[Legolas and Haldir clasp each other 
on the shoulder.]
 
 HALDIR
[Turning to Th�oden] We are proud to 
fight alongside men, once more.
 
[Men and Elves are in their positions 
on the battlements of Helm�s Deep. The 
sounds of a marching army move closer 
and closer. The women and children in 
the caves hear the sounds overhead and 
are frightened. Mothers draw their children 
close and try to sooth crying babies. 
The men and Elves look out into the 
darkness, lit by the thousands of torches 
carried by the huge advancing Uruk-hai 
army and the light bouncing off their 
armour. With a row of Elf archers, Gimli 
is standing beside Legolas behind a 
wall, only the top of his helmet visible.]
 

 GIMLI
[Grumbling and straining to look above 
the wall.] You could have picked a better 
spot.
 
[Legolas smirks. Aragorn approaches 
and stands beside them]
 
 GIMLI
Well lad, whatever luck you live by, 
let�s hope it lasts the night.
 
[Thunder sounds and lightning flashes, 
revealing the sea of approaching Uruk-hai.]
 

 LEGOLAS
Your friends are with you, Aragorn.
 

 GIMLI
Let�s hope they last the night.

[The marching and thumping grows louder 
and louder. Lightning flashes and it 
begins to rain. While the Uruk-hai army 
continues to march at the fortress, 
an Uruk-hai leader steps on a rock outcrop.]
 

[Aragorn is giving commands to the Elf 
warriors.]
 
 ARAGORN
A Eruch�n, �-dano i faelas a hyn an 
uben tanatha le faelas! (Show them no 
mercy! For you shall receive none!)
 

[The Uruk-hai leader raises his swords 
and commands his army to stop with a 
terrifying animalic cry. The Uruks stop 
and growl in anticipation of the upcoming 
battle and slaughter]
 
 GIMLI
[Jumping and straining to see] What�s 
happening out there?
 
 LEGOLAS
Shall I describe it to you? [Looks at 
Gimli with a grin] Or would you like 
me to find you a box?
 
 GIMLI
[Laughs good-naturedly] Hehehehe!!
 

[The Uruk Leader cries out once, encouraging 
the Uruk-hai to start roaring and thumping 
their spears furiously.The women and 
children in the caves huddle together 
in fear. Suddenly, Aldor, the old man 
next to Haleth, loses his grip and releases 
his arrow prematurely, shooting an Uruk-hai 
in the neck.]
 
 ARAGORN
Dartho! (Hold!)

[The Uruk-hai army stop their roaring 
and thumping. With a hollow groan, the 
Uruk that was shot collapsed to the 
ground. The other Uruk-hai bare their 
teeth and roar with anger. With a cry, 
the Uruk-hai leader thrusts his weapon 
in the air and the Uruk-hai army starts 
charging.]
 
 TH�ODEN
So it begins.

 ARAGORN
Tangado halad! (Prepare to fire!)

[The Elves notch their arrow and aim.]
 

 LEGOLAS
Faeg i-varv d�n na lanc a nu ranc. (Their 
armor is weak at the neck and beneath 
the arms.)
 
 ARAGORN
Leithio i philinn! (Release the arrows!)
 

[Arrows rain down on the Uruk-hai below, 
killing many.]
 
 GIMLI
Did they hit anything?

 TH�ODEN
Give them a volley.

 GAMLING
[to the men] Fire!



 MAN-WITH-MISSING-EYE
Fire!



[More arrows are released. But the Uruk-hai 
army keep advancing, with more replacing 
those fallen.]
 
 ARAGORN
Fire!

 GIMLI
[Impatiently] Send them to me! C�mon!
 

[The Uruk-hai start to load ladders 
onto the walls, pushing them up with 
their long spears.]
 
 ARAGORN
Pendraid! (Ladders!)

[The Elves draw their blades in preparation 
for combat. The first ladders are almost 
reaching the walls with big nasty Uruk 
Berserkers on top of them.]
 
 ARAGORN
Swords! Swords!

 GIMLI
Good!

[Close combat begins as the Uruk-hai 
climb over the wall.]
 
 GIMLI
Legolas, two already! [Holding up two 
fingers]
 
 LEGOLAS
I�m on seventeen!

 GIMLI
[Outraged] Argh! I�ll have no pointy-ear 
outscoring me! [He turns to a Uruk just 
climbing over the wall, whacking it 
in the groin with his axe and killing 
it as it falls.]
 
 LEGOLAS
[Fires two arrows] Nineteen!



[The Ent Moot is still in progress. 
The Ents sway a little as they continue 
to deliberate. Merry and Pippin are 
sitting a distance away. Suddenly, Treebeard 
nods and turns to the hobbits.]
 
 PIPPIN
[Gesturing] Merry!

 TREEBEARD
We have just agreed. [Long pause with 
his eyes closed.]
 
 MERRY
[Angles his head in query] Yes?

 TREEBEARD
I have told your names to the Ent moot 
and we have agreed � you are not Orcs.
 

 PIPPIN
Well, that�s good news.

 MERRY
[impatiently] And what about Saruman? 
Have you come to a decision about HIM?
 

 TREEBEARD
[Waving a hand] Now don�t be hasty, 
Master Meriadoc.
 
 MERRY
Hasty? Our friends are out there! They 
need our help! They cannot fight this 
war on their own.
 
 TREEBEARD
War, yes� It affects us all. But you 
must understand, young hobbit. It takes 
a loong time to say anything in ooold� 
Entish. [Merry and Pippin roll their 
eyes in disgruntlement.] And we never 
say anything� unless it is worth taking 
a looong� time to say.
 


[Gimli is standing on the wall between 
two ladders, hacking away at Uruk-hai 
as they come up]
 
 GIMLI
Seventeen! Eighteen! Nineteen! Twenty! 
Twenty-one! Twenty-two!
 
[Camera pans over the Uruk-hai below 
and turns to the Causeway. A group of 
Uruk-hai is advancing on the Causeway 
towards the gate in tortoise formation, 
using their broad shields to block off 
attacks.]
 
 ARAGORN
Na fennas! (Causeway!) [Directs the 
Elf archers to aim at the Uruk-hai column.]
 

[The Elf archers release their arrows. 
The Uruk-hai at the sides are shot and 
fall down the Causeway. But the column 
keeps advancing.]
 
 TH�ODEN
Is this it? Is this all you can conjure, 
Saruman?
 
[At the bottom of the Deeping Wall, 
two spiky bombs are lodge in the sluice 
gate. The rest opens a path and an Uruk-hai 
carrying a torch starts to run towards 
the sluice gate. Aragorn spots the Uruk-hai.]
 

 ARAGORN
Togo hon dad, Legolas! (Bring him down, 
Legolas!) [Legolas shoots the Uruk-hai 
in the shoulder but the latter keeps 
going] Dago hon! Dago hon! (Kill him! 
Kill him!)
 
[Legolas shoots the Uruk again. It stumbles 
and then throws it self and the torch 
at the bombs. An enormous explosion 
is set off, blowing away a large part 
of the wall. Rock, debris and bodies 
are thrown up. Aragorn is also thrown 
back by the force of the explosion and 
on the ground, knocked out. Th�oden 
looks on in shock as the Uruk-hai streams 
in past the Deeping Walls.]
 
 TH�ODEN
Brace the Gate! Hold them! Stand firm!
 

[Gimli sees the Uruk-hai charging in 
with Aragorn in their path. With a cry, 
he jumps down from the wall and lands 
on the Uruk-hai army, taking them out 
as he stands.]
 
 GIMLI
Aragorn!! Argh!

[He is soon overpowered. Aragorn gets 
up and sees Gimli falling.]
 
 ARAGORN
Gimli! [He yells to the Elves behind 
him] Hado i philinn! (Hurl the arrows!)
 

[The arrows take out the first group 
of Uruk-hai coming through the hole 
in the wall.]
 
 ARAGORN
Herio! (Charge!)

[Aragorn leads the Elves in a charge 
towards the Uruk-hai streaming in. He 
rushes to Gimli�s side and picks him 
up. At the top of the battlements, Legolas 
grabs a shield and sends it sliding 
across the ground. He then hops onto 
it and surfs down the steps, releasing 
three arrows as he goes, and kicking 
the shield to stab an Uruk-hai as he 
lands at the bottom.]
 


[At the Ent Moot]

 TREEBEARD
The Ents cannot hold back this storm. 
We must weather such things as we have 
always done.
 
 MERRY
How can that be your decision?!

 TREEBEARD
This is not our war.

 MERRY
But you're part of this world! Aren�t 
you?! [The Ents look at one another, 
taken back] You must help, please! You 
must do something!
 
 TREEBEARD
You are young and brave, Master Merry. 
But your part in this tale is over. 
Go back to your home.
 
[Merry is putting on his jacket. Pippin 
approaches him slowly]
 
 PIPPIN
Maybe Treebeard�s right. We don�t belong 
here, Merry. It's too big for us. What 
can we do in the end? We've got the 
Shire. Maybe we should go home.
 
 MERRY
[Looking into the distance.] The fires 
of Isengard will spread. And the woods 
of Tuckborough and Buckland will burn. 
And all that was once green and good 
in this world will be gone. [Turns to 
Pippin and puts a hand on his shoulder] 
There won't be a Shire, Pippin.
 
[Pippin looks after Merry as he walks 
away.]
 


 GAMLING
Aragorn! Fall back to the Keep! Get 
your men out of there!
 
 ARAGORN
Na Barad! Na Baraad! Haldir, na Barad! 
(To the Keep! Pull back to the Keep! 
Haldir, to the Keep!)
 
[Haldir nods and turns back. Gimli is 
being carried away, kicking and struggling 
as he goes]
 
 GIMLI
[Protesting] What are you doing? Argh! 
What are you stopping for!
 
[HALDIR HACKS AT A FEW URUK AS HE TURNS TOWARDS 
 THE GATE. SUDDENLY, HE IS STABBED IN HIS ARM.]

With a grimace, he kills the Uruk-hai 
and looks down as his wound in seeming 
disbelief. An Uruk-hai comes up from 
behind him unnoticed and slices him 
on the neck. As Haldir goes down, he 
looks around him and sees his kin fallen 
among dead Uruk-hai.]
 
 ARAGORN
[Sees Haldir falling] HALDIR!! [He runs 
up the steps to Haldir�s side and catches 
him and he collapses. Haldir's head 
rolls back, his eyes empty and unseeing. 
Aragorn bows his head in grief. Then 
with a cry, he jumps onto a ladder and 
swings down to the ground, killing as 
he goes.]
 
 GAMLING
Brace the gate!

 SOLDIER
Hold them!

 TH�ODEN
[Drawing his sword] To the gate! Draw 
your swords!
 
[Th�oden and his commanders come to 
the gate, which is under heavy attack. 
The Uruk-hai are knocking down the gate 
and hacking through the broken wood. 
Th�oden stabs at an Uruk-hai and receives 
a lance in his shoulder, blocked by 
his armour. Grimacing in pain, Th�oden 
continues to stab at the Uruk until 
led away by Gamling.]
 
 GAMLING
Make way! We cannot hold much longer.
 

 TH�ODEN
Hold them!

 ARAGORN
[Runs up and stabs away at the Uruk-hai 
through the broken gate] How long do 
you need?
 
 GAMLING
Brace the gate!

 TH�ODEN
As long as you can give me!

 ARAGORN
Gimli!

 THEODEN
Timbers! Brace the Gate!

[Aragorn and Gimli slip out a side exit 
and stand on a ledge just to the side 
of the main gate. Aragorn peeks over, 
seeing the large band of Uruk-hai storming 
the gate.]
 
 GIMLI
Come on! We can take �em!

 ARAGORN
It�s a long way.

[Gimli takes a peek and then steps back.]
 

 GIMLI
[Mumbles] Toss me.

 ARAGORN
What?

 GIMLI
I cannot jump the distance! You�ll have 
to toss me!
 
[Aragorn nods slowly and then turns 
to grab the Dwarf.]
 
 GIMLI
Oh! [Gimli stays Aragorn�s hand] Don�t 
tell the Elf.
 
 ARAGORN
Not a word.

[He tosses Gimli to the head of the 
Causeway and then leaps over.]
 
 GIMLI
[Making quick work of killing the Uruk-hai] 
ARGH!!
 
[On the other side of the gate]

 TH�ODEN
Shore up the door!

 SOLDIER 1
Make way!

 SOLDIER 2
Follow me to the barricade.

 SOLDIER 3
Watch our backs!

 SOLDIER 4
Throw another one over here!

 TH�ODEN
Higher!

[Men are bracing the gate with wood 
and nails. Aragorn and Gimli continue 
to fight off the Uruk-hai just outside. 
Meanwhile the Uruk-hai load and fires 
enormous hooks over the battlements. 
Hundred of Uruk-hai climb onto super-ladders 
as they are pulled up towards the walls, 
the super-ladders locking onto the edge 
of the battlements with their steel 
grips. Legolas takes aim as another 
super-ladder is being pulled up and 
shoots away one of the ropes. The ladder 
falls back onto the Uruk-hai army.]
 

 SOLDIER
Hold fast the gate!]

 TH�ODEN
[Through a crack in the gate] Gimli! 
Aragorn! Get out of there!
 
[Legolas calls to them from the top 
of the battlements]
 
 LEGOLAS
Aragorn! [He throws them a rope]

[Aragorn grabs Gimli in one hand and 
the rope with the other as they are 
pulled up the wall. Just then the Uruk-hai 
load and fires enormous hooks over the 
battlements. Hundred of Uruk-hai climb 
onto super-ladders as they are pulled 
up towards the walls, the super-ladders 
locking onto the edge of the battlements 
with their steel grips. Legolas takes 
aim as another super-ladder is being 
pulled up and shoots away one of the 
ropes. The ladder falls back onto the 
Uruk-hai army.]
 
 TH�ODEN
Pull everybody back! Pull them back!
 

 GAMLING
Fall back! Fall back!

 TH�ODEN
They�ve broken through! The castle is 
breached. Retreat!
 
 GAMLING
Fall back!

 TH�ODEN
Retreat!

 ARAGORN
Hurry! Inside! Get them inside!

 GAMLING
Into the Keep!

[They all run towards the keep, Legolas 
firing two arrows into the Uruk-hai 
army as he goes.]
 


[Treebeard is walking through the forest, 
carrying Merry and Pippin. The hobbits 
look dejected.]
 
 TREEBEARD
I will leave you at the western borders 
of the forest. You can make your way 
north to your homeland from there.
 

[Pippin suddenly looks up with a gleam 
in his eyes.]
 
 PIPPIN
Wait! Stop! Stop! [Treebeard comes to 
a stop.] Turn around. Turn around. Take 
us south!
 
 TREEBEARD
South? But that will lead you past Isengard.
 

 PIPPIN
Yes. Exactly. If we go south we can 
slip past Saruman unnoticed. The closer 
we are to danger, the farther we are 
from harm. It�s the last thing he�ll 
expect.
 
 TREEBEARD
Mmmm. That doesn�t make sense to me. 
But then, you are very small. Perhaps 
you�re right. South it is then. Hold 
on, little Shirelings. I always like 
going south. Somehow it feels like going 
down hill.
 
 MERRY
Are you mad? We�ll be caught!

 PIPPIN
No we won�t. Not this time.



[Faramir and company draws close to 
Osgiliath.]
 
 RANGER 1
Look! Osgiliath burns!

 RANGER 2
Mordor has come.

 FRODO
[With tears in his eyes] The Ring will 
not save Gondor. It has only the power 
to destroy. Please, let me go.
 
[Faramir hesitates for a moment.]

 FARAMIR
Hurry. [He presses them on]

 FRODO
Faramir, you must let me go!

[Frodo and Sam are pushed on towards 
Osgiliath]
 


[Treebeard, Merry and Pippin come to 
the southern edge of the forest.]
 

 TREEBEARD
And a little family of field mice that 
climb up sometimes and they tickle me 
awfully. They�re always trying to get 
somewhere where they � Oh!! [He sees 
the desolated landscape of tree stumps 
that used to be forested grounds] Many 
of these trees were my friends. Creatures 
I had known from nut and acorn.
 
 PIPPIN
I�m sorry, Treebeard.

 TREEBEARD
[With tears in his eyes] They had voices 
of their own. [His gaze turns to the 
treeless Isengard and its smoking caverns] 
Saruman! A wizard should know better!
 

[He lets out a ferocious roar that echoes 
through the forest]
 
 TREEBEARD
There is no curse in Elvish, Entish 
or the tongues of men for this treachery. 
My business is with Isengard tonight. 
With rock and stone!
 
[Merry and Pippin turn around as they 
hear rumbles from the forest. They see 
many Ents emerging and marching towards 
them]
 
 MERRY
Yes!

 TREEBEARD
Hoorarooom... Come my friends. The Ents 
are going to war. It is likely that 
we go to our doom. Last march of the 
Ents!
 


[Osgiliath is still under siege as Faramir 
and company arrives, dodging arrows 
and falling rocks.]
 
 MADRIL
Faramir, Orcs have taken the eastern 
shore. Their numbers are too great. 
By nightfall we�ll be overrun.
 
[Frodo suddenly seems stricken]

 SAM
Mr Frodo!

 FRODO
It�s calling to him, Sam. His eye is 
almost on me.
 
 SAM
Hold on, Mr. Frodo� You'll be alright...
 

[Frodo sees that Sam is speaking to 
him but he hears nothing. His senses 
are overcome.]
 
 FARAMIR
Take them to my father. Tell him Faramir 
sends a mighty gift. A weapon that will 
change our fortunes in this war.
 
[Sam breaks away as they are being led 
away.]
 
 SAM
Do you want to know what happened to 
Boromir? You want to know why your brother 
died? He tried to take the Ring from 
Frodo! After swearing an oath to protect 
him, he tried to kill him! The Ring 
drove your brother mad!
 
 RANGER
Watch out!

[A boulder crashes into a tower overhead 
and shatters it. Suddenly, Frodo�s eyes 
roll up and he stares at Faramir strangely.]
 

 SAM
Mr Frodo?

 FRODO
[In a faraway voice] They�re here. They�ve 
come.
 
 FARAMIR
[Looking up] NAZG�L!! [He grabs the 
hobbits and thrusts them into a corner.] 
Stay here. Keep out of sight. [To his 
men] Take cover!
 


[Banners of the White Hand are flying 
from the battlements of Helm�s Deep. 
The Hornburg is overrun with Uruk-hai. 
Th�oden and company are in the hall 
of the keep.]
 
 TH�ODEN
The fortress is taken. It is over.
 

 ARAGORN
[Carrying a table with Legolas to shore 
up the door of the hall] You said this 
fortress would never fall while your 
men defend it! They still defend it! 
They have died defending it!
 
[In the Glittering Caves, the women 
and children cry in fear as they hear 
the battering ram banging on the door.]
 

 WOMAN
They are breaking in! 

 ARAGORN
Is there no other way for the women 
and children to get out of the caves? 
[There is no answer.] Is there no other 
way?
 
 GAMLING
There is one passage. It leads into 
the mountains. But they will not get 
far. The Uruk-hai are too many.
 
 ARAGORN
Send word for the women and children 
to make for the mountain pass. And barricade 
the entrance.
 
 TH�ODEN
So much death. What can men do against 
such reckless hate?
 
 ARAGORN
[Pause] Ride out with me. Ride out and 
meet them.
 
 TH�ODEN
[A light of determination shines in 
his eyes] For death and glory.
 
 ARAGORN
For Rohan. For your people.

 GIMLI
The sun is rising.

[Aragorn looks up at a window to see 
faint light streaming through. He recalls 
Gandalf's words.]
 
 GANDALF (V.O.)
Look to my coming at first light on 
the fifth day. At dawn, look to the 
east.
 
 TH�ODEN
Yes. Yes! The horn of Helm Hammerhand 
shall sound in the deep one last time!
 

 GIMLI
Yes! [Gimli runs up the steps to the 
horn of Helm Hammerhand]
 
 TH�ODEN
Let this be the hour when we draw swords 
together. Fell deeds awake. Now for 
wrath! Now for ruin! And a red dawn!
 

[He mounts his horse and puts on his 
helmet. The sound of the horn rumbles 
through Helm's Deep as Gimli blows with 
gusto.]
 
 TH�ODEN
FORTH EORLINGAS!!

[Th�oden leads the charge out of the 
keep into the Hornburg, slashing away 
at the Uruk-hai as they go. Without 
pause, they storm out of the gate and 
down the Causeway, right into the column 
of waiting Uruk-hai. In the midst of 
battle, Aragorn looks east and sees 
a white rider against the rising sun]
 

 ARAGORN
Gandalf.

 GANDALF
Th�oden king stands alone.

 �OMER
[Coming up from behind] Not alone. [He 
raises a hand] Rohirrim!!
 
[Riders move up behind �omer.]

 TH�ODEN
[Looking to the east] �omer!

 �OMER
To the king!

[The Rohirrim and the White Rider charge 
down the slope. Half the Uruk-hai army 
turns to face the challenge, bearing 
their spears down towards the riders. 
As the riders draw closer, the sun rises 
behind them, momentarily blinding the 
Uruk-hai who raise the hands (and spears) 
to shield their eyes. The riders crash 
right into the Uruk-hai and engage them 
in battle.]
 


[The Ents are stomping over Isengard, 
swinging their huge limbs, throwing 
and stamping on Orcs and rolling huge 
boulders over the ground. An Ent is 
pulled down with chains by some Orcs, 
who immediately jump on and hacks away 
at his wooden limbs. Saruman rushes 
out onto the balcony of Orthanc and 
stares at the pandemonium in incredulity. 
Merry and Pippin also throws stones 
at Orcs, their aims true.]
 
 PIPPIN
Yes!

 TREEBEARD
A hit. A fine hit!

[Two Ents rock a wooden structure and 
push it over into the caverns below, 
smashing against the rock. Some Orcs 
fire flamed-tipped arrows at an Ent, 
setting him on fire. Saruman continues 
to look about from his balcony, helpless. 
Some Ents are now breaking away at a 
dam.]
 
 TREEBEARD
Break the dam! Release the river!

[The dam is broken and Saruman looks 
up to see the river rushing down the 
slope towards Isengard, washing away 
Orcs and wooden structures in its path. 
]
 
 MERRY
Pippin, hold on! [The hobbits tighten 
their hold on top of Treebeard]
 
 TREEBEARD
Hold on, little hobbits!

[Treebeard braces himself against the 
flood. As the water rushes over Isengard, 
an Ent rushes in and thrusts his burning 
body into the water. The water rushes 
into the caverns, washing away the bridges, 
mechanisms and structures within.]
 



[Frodo walks slowly away from the safe 
corner. Gondorian Rangers are still 
running about, defending their stations.]
 

 SAM
What are you doing? Where are you going?!
 

 [SLOW MOTION
Frodo walks up some stairs and stands 
on a bridge. A Nazg�l on a Fell beast 
emerges in front of him. Frodo stares 
at the Nazg�l, fixated. Feeling the 
call of the Ring, he holds it up. Faramir 
watches the unfolding tableau from below. 
As Frodo moves to put the Ring on his 
finger and the Nazg�l flies closer and 
closer, Sam runs up and knocks Frodo 
over. Faramir releases an arrow and 
shoots the Fell Beast. Frodo and Sam 
roll down the stairs. As they come to 
a stop at the bottom, Frodo holds Sam 
in a death grip, yells and points Sting 
at his throat, his eyes livid with madness 
and anger that someone would try to 
take the Ring away.]
 
 FRODO
Aaarrgghh!!!

 SAM
[With tears running down his face] It�s 
me. It�s your Sam. Don�t you know your 
Sam?
 
[The madness fades and recognition returns 
to Frodo�s eyes. He realises what he 
nearly did and is overcome. Stumbling 
backwards, he collapses against a wall 
and Sting falls to the ground with a 
clang. Sam gets up slowly.]
 
 FRODO
[Slowly and with despair] I can�t do 
this, Sam.
 
 SAM
[Getting up slowly] I know. It�s all 
wrong. By rights we shouldn�t even be 
here. But we are. [He stands and leans 
against a wall, looking out into the 
distance.] It�s like in the great stories, 
Mr. Frodo. The ones that really mattered. 
Full of darkness and danger they were. 
And sometimes you didn�t want to know 
the end. Because how could the end be 
happy? [Images of the riders winning 
the battle against the Uruk-hai at Helm�s 
Deep] How could the world go back to 
the way it was when so much bad had 
happened?
 
 TH�ODEN
Victory! We have victory! [He raises 
his sword with a victorious cry]
 
 SAM
But in the end, it�s only a passing 
thing, this shadow. [The women and children 
welcome the men as they return. �owyn 
runs up to Aragorn and embraces him, 
crying tears of relief.] Even darkness 
must pass. A new day will come. [Isengard 
is flooded. Merry and Pippin looks on 
from their perch on Treebeard. On the 
balcony, Saruman stumbles back into 
his chamber] And when the sun shines 
it will shine out the clearer. Those 
were the stories that stayed with you. 
That meant something, even if you were 
too small to understand why. But I think, 
Mr. Frodo, I do understand. I know now. 
Folk in those stories had lots of chances 
of turning back only they didn�t. They 
kept going because they were holding 
on to something.
 
 FRODO
What are we holding on to, Sam?

 SAM
There�s some good in this world, Mr. 
Frodo. And it�s worth fighting for.
 

[Standing in a corner, even Gollum seems 
moved. Faramir walks over and comes 
to kneel in front of Frodo]
 
 FARAMIR
I think at last we understand one another, 
Frodo Baggins.
 
 MADRIL
You know the laws of our country, the 
laws of your father. If you let them 
go, your life will be forfeit.
 
 FARAMIR
Then it is forfeit. Release them.

[Sam shakes the ranger�s hand from his 
shoulder. Frodo looks up at Faramir 
with gladness. Over in the realm of 
Rohan, Gandalf, Th�oden and company 
ride to the top of a slope, looking 
towards the Mountain of Fire in the 
distance.]
 
 GANDALF
Sauron�s wrath will be terrible, his 
retribution swift. The battle for Helm�s 
Deep is over. The battle for Middle-earth 
is about to begin. All our hopes now 
lie with two little hobbits. Somewhere 
in the wilderness.
 
[Frodo and Sam are walking through the 
woods, away from Osgiliath.]
 
 SAM
I wonder if we�ll ever be put into songs 
or tales.
 
 FRODO
What?

 SAM
I wonder if people will ever say, �let�s 
hear about Frodo and the Ring.� And 
they�ll say �yes, that�s one of my favorite 
stories. Frodo was really courageous, 
wasn�t he, dad.� �Yes, my boy, the most 
famousest of hobbits. And that�s saying 
alot.�
 
 FRODO
Huh, you left out one of the chief characters 
� Samwise the Brave. I want to hear 
more about Sam.
 
[Frodo turns to look at Sam.]

 FRODO
Frodo wouldn�t have got far without 
Sam.
 
 SAM
Now Mr. Frodo, you shouldn�t make fun. 
I was being serious.
 
 FRODO
[smiling] So was I. [He turns to walk 
on]
 
 SAM
[Dreamily] Samwise the Brave. [He gives 
his backpack a heave and follows Frodo]
 

[Gollum is crouching a short distance 
away]
 
 FRODO
Sm�agol!

 SAM
We�re not gonna wait for you. Come on!
 

 SM�AGOL
Master... Master looks after us. Master 
wouldn�t hurt us.
 
 GOLLUM
Master broke his promise.

 SM�AGOL
Don�t ask Sm�agol. Poor, poor Sm�agol.
 

 GOLLUM
Master betrayed us! Wicked, tricksy, 
false. We ought to wring his filthy 
little neck. [Twists the branch of a 
tree] Kill him! Kill him! Kill them 
both. And then we take the precious 
and we be the master.
 
 SM�AGOL
[Scuttles and hides behind a tree] The 
fat hobbit, he knows. Eyes always watching.
 

 GOLLUM
Then we stabs them out. Put out his 
eyeses. And make HIM crawl.
 
 SM�AGOL
[Bites on his finger and nods eagerly] 
Yes! Yes! Yes!
 
 GOLLUM
Kill them both.

 SM�AGOL
Yes! No no! [Backs away against a tree] 
It�s too risky, it�s too risky.
 
[He looks in the direction of the hobbits]
 

 SAM
Where�s he gone? Hey Gollum, where are 
you?
 
 FRODO
Sm�agol?

 GOLLUM
[Softly and sinisterly] We could let 
HER do it.
 
 SM�AGOL
Yes. She could do it.

 GOLLUM
Yes, precious she could. And then we 
takes it once they�re dead.
 
 SM�AGOL
Once they�re dead�

 GOLLUM
Shh� [He pops out from hiding in front 
of the hobbits.]
 
 SM�AGOL
Come on, hobbits. Long ways to go yet. 
Sm�agol will show you the way.
 
[He turns to walk on, with Frodo and 
Sam following behind.]
 
 GOLLUM
Follow me.

THE LORD OF THE RINGS: RETURN OF THE KING 

DEAGOL
      (excited)
 Smeagol, I've got one!
      (he laughs)
 I've got a fish, Smeagol!

 SMEAGOL
      (excitedly)
 Go on, pull it in.

DEAGOL pulls on his ROD, but is HAULED OVERBOARD and
disappears underwater with a SPLASH!

ANGLE ON: SMEAGOL leaning over the BOAT . . . CONCERNED.

 SMEAGOL (cont'd)
      (worried)
 Deagol!

EXT. UNDERWATER, RIVER ANDUIN - DAY

ANGLE ON: DEAGOL is towed to the RIVER BED by a LARGE FISH
. . . he suddenly lets go of the line . . . eyes fixed on a
SHINING GOLD RING, lying in 'the SILT.

    Final Revision - October, 2003 2



EXT. RIVER ANDUIN, GLADDEN FIELDS - DAY

CLOSE ON: DEAGOL climbs out of the WATER, onto the RIVER
BANK.

CLOSE ON: the RING   revealed in DEAGOL'S PALM . . .

ANGLE ON: SMEAGOL peers over his shoulder . . . the GOLD
reflects in SMEAGOL'S EYES!

ON SOUNDTRACK: The HUM of the RING growing LOUDER . . .

          SMEAGOL
Give us that, Deagol, my love!

DEAGOL turns to look at him, a smirk on his face.

DEAGOL
Why?

CLOSE ON: SMEAGOL moves towards DEAGOL . . .

          SMEAGOL
Because its my birthday, and I wants it.

ANGLE ON: SMEAGOL jumps on DEAGOL . . . STRANGLING HIM! SMEAGOL
rips the GLITTERING RING from DEAGOL'S LIMP HAND.

SMEAGOL (cont'd)
My precious!

CLOSE ON: SMEAGOL slips the RING onto his FINGER and DISAPPEARS.

DISSOLVE TO:

INT. MISTY MOUNTAINS CAVES - DAY

IMAGES: SMEAGOL descending into madness. His body TWISTS and
DISTORTS . . . he becomes a CREEPY, SHRIVELLED wretch . . . finally
crawling into a DARK CAVE beneath the MISTY MOUNTAINS.

          SMEAGOL V/0
They cursed us. Murderer. Murderer they
called us. They cursed us and drove us
away.
(M�RE)      (CONTINUED)

     Final Revision - October, 2003 3.
CONTINUED:
  SMEAGOL V/0 (cont'd)
  And we wept, Precious, we wept to be so
  alone. And we forgot the taste of bread,
  the sound of trees, the softness of the
  wind . . . We even forgot our own name.
       (in a choking cough)
  Gollum! Gollum!

ANGLE ON: GOLLUM in the CAVE staring at the RING in his hand.

  GOLLUM
  It's mine! My own. It came to me.

  SMEAGOL
       (ecstatic)
  My Precious.

 DISSOLVE TO:

EXT. CULVERT, VALE OF MORGUL - DAWN

ANGLE ON: A GRIM LANDSCAPE, covered in THORN BUSHES and the
scars of RECENT FIRES. The DARK MORGUL VALLEY disappears up
towards the MOUNTAINS.

SETTLE ON: FRODO and SAM in a FILTHY CULVERT.
SAM twitches in a RESTLESS SLEEP. But FRODO is awake . . . His
hand trails down to the CHAIN around his NECK ...

A SUDDEN HISS! FRODO quickly hides the RING as GOLLUM peers
at them with GLEAMING EYES.

  GOLLUM
  Wake up! Wake up! Wake up, sleepies! We
  must go, yes, we must go at once!

SAM STIRS, looks at FRODO . . .

  SAM
  Haven't you had any sleep, Mr Frodo?

FRODO shakes his HEAD.

  SAM (cont'd)
  I've gone and had too much!


 (CONTINUED)

       Final Revision - October, 2003 4.
CONTINUED:


SAM looks at the dead, BROWN TWILIGHT, below the LOWERING
CLOUD.

  SAM (cont'd)
  It must be getting late.

  FRODO
  No . . . no it isn't. It isn't midday yet.
  The days are growing darker.

The GROUND suddenly QUIVERS, as a ROLLING, RUMBLING NOISE
ECHOES down the VALLEY.

  GOLLUM
  Come on, must go, no time ...

  SAM
  Not before Mr Frodo's had something to eat.

  GOLLUM
  . . . no time to lose, silly.

SAM shoots GOLLUM a HOSTILE LOOK and turns back to rummage in
his KNAPSACK. He holds up a piece of dried LEMBAS BREAD to
FRODO.

  SAM
  Here.

  FRODO
  What about you?

  SAM
       (lying badly)
  I'm not hungry - leastways, not for lembas
  bread.

  FRODO
  Sam.

  SAM
       (confessing)
  Alright. We don't have that much left.
   (MORE)


   (CONTINUED)

    Final Revision - October, 2003 5.
CONTINUED: ( 2 )
SAM (cont'd)
 We have to be careful or we're going to run
 out. You go ahead and eat that, Mr Frodo.
 I've rationed it. There should be enough.

FRODO looksa t SAM questioningly.

  FRODO
 For what?

 SAM
 The journey home.

FRODO says nothing..

EXT. CULVERT, VALE OF MORGUL - DAY

WIDE: FRODO and SAM follow GOLLUM as he leads them on the
wining, torturous path ... clambering through BRACKEN and
over JAGGED ROCKS.

 GOLLUM
 Come, Hobbitses. Very close now. Very close
 to Mordor! No safe places here. Hurry!
 Shhh.

EXT. THE FOREST OF ISENGARD. DAY

GANDALF leads ARAGORN, LEGOLAS, THEODEN and GIMLI through
dark woodland . . .

The MOVING FOREST of FANGORN ...opens before them . . .
creating an AVENUE of TREES, which allows them access along
the old ISENGARD ROAD. A THICK, HUMID MIST fills the forest.

SUPER:  The Return of the King

ANGLE ON: The FOEST SEPARATES ahead, REVEALING: the RUINS of
ISENGARD.

EXT. ISENGARED GATE - DAY

WIDE ON: All about, the GREAT STONE WALL is cracked and
splintered into countless jagged shards.




         (CONTINUED)

         Final Revision - October, 2003 6.
CONTINUED:


Far off, half veiled int he swirling STEAM, the TOWER of
ORTHANC stands ... Unbroken by the storm. Pale waters lap
about its feet.

ANGLE ON: TWO SMALL HOBBITS are sitting on the SMASHED WALL
. . . MERRY and PIPPIN! SPREAD before them is a feast of
BREADS, MEATS and WINE. They PUFF on long pipes as they lie
back in the SUN.

 PIPPIN
  I feel like I ' m back at the Green Dragon,
  after a hard days work.

 MERRY
  Only, you've never done a hard days work.

MERRY cuts PIPPIN off before he can respond in kind.

 MERRY (cont'd)
  Welcome, my Lords, to Isengard.

  GANDALF

ANGLE ON: GANDALF, ARAGORN, LEGOLAS and GIMLI stare at the
SIGHT before them . . .

 GIMLI
  You young rascals! A merry hunt you've led
  us on, and now we find you feasting and
  smoking.

  PIPPIN
       (mouth full)
  We are sitting on a field of victory,
  enjoying a few well-earned comforts.
  The salted pork is particularly good.

  GIMLI
       (suddenly interested)
  Salted pork?

  GANDALF
       (shaking his head)
  Hobbits!


  (CONTINUED)

        Final Revision - October, 2003 7.
CONTINUED: (2)


          MERRY
We're under orders from Treebeard, who's
taken over management of Isengard.

WIDE: GANDALF leads the company through the flotsam and
jetsam which floats upon the muddied waters surrounding the
TOWER ... TREEBEARD, the GIANT ENT, strides towards them,
ALARMING all but GANDALF.



          TREEBEARD
Huraroom ... Young Master Gandalf, I'm glad
you've come. Wood and water, stock and ,
stone I can master, but there's a wizard to
be managed here ... Locked in his tower.

GANDALF
And there Saruman must remain, under your
guard, Treebeard.

          GIMLI
Let's just have his head and be done with
it.      .

GANDALF stares up the long length of the DARK TOWER . . .

GANDALF
     (quietly)
No. He has no power any more.

THE OLD ENT nods his head wisely . . .

 TREEBEARD
The filth of Saruman is washing away ...
Trees will come back to live here, young
trees . . . wild trees.

CLOSE ON: PIPPIN, his eye caught by something lying in the WATER

ANGLE ON: The MUDDY waters GLOWING wit a golden light . . .

ARAGORN turns as, quick as a FLASH, PIPPIN has jumped off his
ho rse an d pi cke d u p -- th e PA LAN TIR !


 (CONTINUED)

     Final Revision - October, 2003 8,
CONTINUED: ( 3 )


TREEBEARD (cont'd)
 Well bless my bark!

  GANDALF
      (urgent)
 Peregrin Took! I'll take that, my lad!

PIPPIN doesn't move, his eyes staring in wonder at the smooth
black stone ...

 GANDALF (cont'd)
 Quickly, now!

RELUCTANTLY, PIPPIN hands the PALANTIR to GANDALF ... who
immediately smothers it in his cloak.

ANGLE ON: GANDALF looks back at PIPPIN . . . troubled.

EXT. EDORAS - DAY

WIDE: BACK SHOT - a GROUP OF RIDERS gallop towards the ROHAN
CITY of EDORAS . . .

PUSH IN: EOWYN standing alone outside the GOLDEN HALL,
waiting . . .

        CUT

INT. EDORAS, GOLDEN HALL - EVENING

WIDE: A ROARING FIRE; a LAMB ROASTING on SPI; LONG TABLES
laden with FOOD; BARRELS of WINE; a banquet is-laid ready for
the returning soldiers.

 THEODEN
 Tonight we remember those who gave their
 blood to defend this country. Hail the
 victorious dead!

ANGLE ON: Amidst the cheering crowd, EOWYN moves towards
ARAGORN . . . As she proffers the CHALICE their eyes meet.

 EOWYN
 Westu Aragorn hal.


(CONTINUED)

          Final Revision - October, 2003 9,
CONTINUED:


EOWYN watches as ARAGORN moves away . . . a voice speaks in her
ear.

  THEODEN
  I am happy for you.

EOWYN looks at her UNCLE, as THEODEN follows her gaze.

 THEODEN (cont'd)
  He is an honourable man.

  EOWYN
       (smiling)
  You are both honourable men.

  THEODEN
  It was not Theoden of Rohan who led our
  people to victory.

EOWYN looks at him questioningly, disturbed'by his tone.

 T HE ODE N ( co nt' d)
  Don't listen to me - you are young, and
  tonight is for you.

ANGLE ON: EOWYN watches concerned as her UNCLE moves away.

ANGLE ON: MERRY & PIPPIN are in full voice, on top of one of the
TABLES . . . both hold very large mugs of ALE in their hands.

  MERRY & PIPPIN
       (singing)
  Oh, you can search - up and down
  As many lands as can be found
  But you'll never find a beer so brown
  As the one we drink in our home town
  You can keep your fancy ales
  You can drink them by the flagon
  But the only brew, for the brave and true,
  Comes from the Green Dragon!

ANGLE ON: GANDALF laughing and clapping the HOBBITS. ARAGORN
steps up beside him, SMILING at the floorshow.


    (CONTINUED)

     Final Revision - October, 2003 10,
CONTINUED: (2)


         ARAGORN
          No news of Frodo?

          GANDALF
          No word ... nothing.

          ARAGORN
          We till have time.

GANDALF turns quickly to ARAGORN.

         ARAGORN (cont'd)
          Every day Frpdo moves closer to Mordor.

GANDALF watches his friend's face . . . seeking reassurance.

         GANDALF
          Do we know that?

          ARAGORN
    (gently)
          What does your heart tell you?

          GANDALF
    (with a small smile)
          That Frodo is alive.
    (to himself)
          Yes - yes, he is alive.

EXT. MORGUL VALLEY - NIGHT

ANGLE ON: FRODO and SAM lie asleep amidst scrubby bushes near a
stagnant pool. SMEAGOL lies nearby, muttering in his sleep.

          SMEAGOL
          Too risky, too risky. The thieves! They
          stole it from us. Kill them . . . kill them
          ... kill them both!

SMEAGOL wakes suddenly, shaking, his face drenched in SWEAT,
eyes wide in horror.

          SME AGO L (c ont' d)
          No!


(CON TINUED )

        Final Revision - October, 2003 11.
CONTINUED:


  GOLLUM
       (hissed whisper)
  Shhh! Quiet!

SMEAGOL'S features suddenly transform into the MALEVOLENT
face of GOLLUM!

  GOLLUM (cont'd)
  Mustn't wake them, mustn't ruin it now!

SMEAGOL casts a quick glance over his SHOULDER to the
SLEEPING figures of FRODO and SAM as he clambers off his ROCK
. . . silently sidling towards the EDGE of a STAGNANT POOL.

  SMEAGOL
  They knows, they knows, they suspects us.



SMEAGOL stares into the MURKY depths of the WATER.

The SURFACE RIPPLES as the face of GOLLUM appears as SMEAGOL'S
REFLECTION.

  GOLLUM.,    .     ,.�
  What is it saying,.my Precious, my love? Is .
  Smeagol losing his nerve??

  SMEAGOL      :
  No! Not! Never!! Smeagol hates nasty
  Hobbitses! Smeagol wants to see: them -
  dead!

   GOLLUM
  And we will . . ,- Smeagol did it once. . .
       (sly)
  . . . He can do it again.

FLASH INSERT: SMEAGOL choking DEAGOL . . . Fingers locked tight
around his THROAT.

  GOLLUM (cont'd)
  It's ours - ours!



    (CONTINUED)

    Final Revision - October, 2003 12,
CONTINUED: (2)


SMEAGOL
We must get the Precious. We must get it
back.

GOLLUM
Patience, patience, my love. First we must
lead them to her.

SMEAGOL
We lead them to the windy stairs.

GOLLUM
     (prompting)
Yes, the stairs ... and then?

  SMEAGOL
Up, up, up, up the stairs we go . . . until
we come to . . .
      (naughty excitement)
... the Tunnel!

GOLLUM
     (quiet)
And when they go in, there's no coming out.
She's always hungry, she always needs to
feed. She must eat, all She gets is filthy
Orcses.

SMEAGOL
And they doesn't taste very nice, does
they, Precious?    .

GOLLUM
     (sinister)
No . . . not very nice at all, my love. She
hungers for sweeter meats . . .

CLOSE ON: SAM . . . his EYES flicker OPEN . . .

   GOLLUM (cont'd)
"Hobbit meat." And when She throws away the
bones and the empty clothes, then we will
find it . . .

SMEAGOL
And take it for Me!
  (CONTINUED)

   Final Revision - October, 2003 13
CONTINUED: (3)


 GOLLUM
     (correcting)
          For us . . .

          SMEAGOL
          Yes, we, we meant for us . . .
    (choking cough)
          Go Hum! Go Hum!

          GOLLUM
    (sly)
          The Precious will be ours once the
          Hobbitses are dead!

SUDDEN ANGLE ON: SAM image mirrored in the water as he SMACKS
GOLLUM on the HEAD with his POT!

SAM
    (yelling) ,�     .
          You treacherous little toad!

SAM drops the POT and FLINGS himself ON TOP of GOLLUM! GOLLUM
SCREAMS . . . his ARMS and LEGS FLAILING WILDLY!

          GOLLUM
    (crying)
          No! Not! Help! Master!

ANGLE ON: FRODO staggers over to SAM and PULLS HIM OFF
GOLLUM.

         FRODO
          No, Sam! Leave him alone!

CLOSE ON: GOLLUM, huddled on the ground        WHIMPERING and
SOBBING.

SAM
    (fuming)
          I heard it from his own mouth        he means
          to murder us!




         (CONTINUED)

      Final Revision - October, 2003 14
CONTINUED: ( 4 )


 SMEAGOL
 Never! Smeagol wouldn't hurt a fly!
 He's a horrid, fat Hobbit who hates Smeagol
 and who makes up nasty lies!

SAM makes for SMEAGOL again . . . with a look of MURDEROUS
RAGE.

 SAM
 You miserable little maggot! I'll stove
 your head in!

FRODO grabs SAM'S ARM.

 FRODO
 Sm. . .
  a

 SAM
 Call me a liar! You're a liar!

 FRODO
 Sam! If you scare him off, we're lost.

SAM pulls away from FRODO . . .

 SAM
 I don't care! I can't do it, Mr Frodo. I
 won' t wait around for him to kill us !

 FRODO
      (fierce whisper)
 I'm not sending him away.

SAM stares at FRODO . . . at a loss.

 SAM
 You don't see it, do you? He's a villain!

 FRODO
      (lowers voice)
 We can't do this by ourselves, Sam. Not
 without a guide. I need you on my side.

ANGLE ON: SAM, his face softening.


 (CONTINUED)

      Final Revision - October, 2003 15.
CONTINUED: (5)


SAM
     (taken aback)
I'm on your side, Mr Frodo.

 FRODO
I know, Sam, I know.
     (whisper)
You must trust me.

FRODO beckons to GOLLUM.

FRODO (cont'd)
Come, Smeagol.

GOLLUM turns slowly, staring at SAM through hooded, HATE-FILLED
EYES ... and SMILES.

    CUT TO:

EXT. EDORAS, GOLDEN HALL - EARLY DAWN

ARAGORN joins LEGOLAS on the STEPS to the GOLDEN HALL, oblivious
to the CHILL WIND . . . they look out across the SLEEPING CITY to
the LOOMING MOUNTAIN RANGE BEYOND . .-. DARK CLOUDS mark the sky.

LEGOLAS
The stars are veiled, something stirs in
the east . . . A sleepless malice.

LEGOLAS looks at ARAGORN . . . realisation in his face.

LEGOLAS (cont'd)
The eye of the enemy is moving.

INT. EDORAS, SLEEPING QUARTERS - EARLY DAWN,

CLOSE ON: PIPPIN . . . he is AWAKE! He sits up . . . ANXIOUS,
FIDGETY . . .

Suddenly he hops out of bed and creeps towards the SLEEPING FORM
of GANDALF.

MERRY
(whispers)
What you doing?
(CONTINUED)

       Final Revision - October, 2003 16,
CONTINUED:


PIPPIN gasps with FRIGHT! MERRY is sitting up, wiping sleep
from his eyes. He moves on . . .

ANGLE ON: A sleeping GANDALF lies with eyes wide open! But
PIPPIN is undeterred . . .

MERRY sits up, a worried look on his face.

 MERRY (cont'd)
  Pippin? Pippin? Pippin! What are you doing?

With quick stealth, PIPPIN lifts the WRAPPED PALANTIR from
GANDALF'S grasp ...

 MERRY (cont'd)
  Pippin, are you mad?

  PIPPIN
  I just want to look at it. Just one more
  time.

 MERRY
  Put it back! Put - it - back!

PIPPIN unwraps the PALANTIR and as MERRY looks on HORRIFIED,
he gazes INTENTLY into it.

 MERRY (cont'd)
  Pippin!

As PIPPIN lays his hands on the CRYSTAL, a SICKLY PALE light
slowly spreads from the GLASS BALL onto PIPPIN'S FACE ... his
EYES WIDEN.

 MERRY (cont'd)
  Pippin!



EXT. EDORAS GOLDEN HALL - EARLY DAWN

On the STEPS of the GOLDEN HALL, LEGOLAS turns to ARAGORN




 (CONTINUED)

      Final Revision - October, 2003 17.
CONTINUED:


   LEGOLAS
       (urgent)
  He is here.

INT. EDORAS, SLEEPING QUARTERS - NIGHT

PIPPIN suddenly starts to HYPERVENTILATE . . . He STAGGERS
BACKWARDS, PALANTIR held rigidly before him . . .

THE GREAT EYE OF SAURON seems to LEAP from the FIRE . . . PIPPIN
is bathed in the FIERY RED LIGHT.

PIPPIN sinks to his KNEES, his mouth open in a soundless SCREAM
. . . He FALLS BACKWARDS, powerless to release the FIERY GLOBE.

  MERRY
  Help! Someone help him!

GANDALF wakes with a start! Just as ARAGORN enters, and
wrenches the PALANTIR from PIPPIN'S HANDS . . . PIPPIN FALLS to
the FLOOR! . . . ARAGORN spins away, reeling backwards, the
PALANTIR falling from his HANDS . . .

The PALANTIR rolls across the FLOOR, causing EVERYONE in the
room to COWER BACK.   ;


ANGLE ON: GANDALF throws a BLANKET over it, ANGRY DISBELIEF
on his face! He rounds on PIPPIN.         ,

  GANDALF
  Fool of a Took!

GANDALF lifts the HOBBIT'S SLUMPED HEAD.

  MERRY
  Pippin!

PIPPIN is trembling ... GANDALF calms him . . .

  PIPPIN
  Gandalf! Forgive me.

 GANDALF  .
  Look at me! What did you see?


(CONTINUED)

      Final Revision - October, 2003 18.
CONTINUED:


          PIPPIN
    (disjointed)
          A tree ... There was a white tree . . . in a
          courtyard of stone . . . It was dead!

FLASH INSERT: A lone white tree silhouetted by flames.

  PIPPIN (cont'd)
  The city was burning ...

  GANDALF
  Minas Tirith???
       (to PIPPIN)
  Is that what you saw?

   PIPPIN
       (terrified)
  I saw . . . I saw him . . . I could hear his
  voice in my head.

          GANDALF
          And what did you tell him? Speak!

  PIPPIN
          He asked me my name, I didn't answer . . . he
          hurt me . . .

CLOSE ON: GANDALF stares at PIPPIN with a FRIGHTENING
INTENSITY . . .

         GANDALF
          What did you tell him about Frodo and the
          Ring?

INT. EDORAS, GOLDEN HALL - DAY

THEODEN stands in the GOLDEN HALL, gravely listening to
GANDALF ... ARAGORN, LEGOLAS, and GIMLI look on . . .

          GANDALF
          There was no lie in Pippin's eyes; a fool,
          but an honest fool he remains. He told
          Sauron nothing of Frodo and the Ring.

ANGLE ON: GIMLI lets out a sigh of relief.
     (CONTINUED)

Final Revision - October, 2003 19.
CONTINUED:


GANDALF turns to look at THEODEN.

  GANDALF (cont'd)
  We've been strangely fortunate. What Pippin
  saw in the Palantir was a glimpse of our
  enemy's plan.

GANDALF looks from on to the other of the, gathered company.

 GANDALF (cont'd)
  Sauron moves to strike the city of Minas
  Tirith. His defeat at Helm's Deep showed
  our enemy one thing.

The WIZARD turns towards ARAGORN . . .

  GANDALF (cont'd)
  The heir of Elendil has come forth. Men are
  not as weak as he supposed. There is
  courage still - strength enough left to
  challenge him.

THEODEN listens intently, saying nothing.

   GANDALF (cont'd)
(wa rningly)
  Sauro n        fea   rs this. He  will no t risk t   he
  p e o p l es    of    M i d d l e -e a r t   h u n i t i ng u n d e   r    one
  b a n n e r.    He    w i l l r ai s e       M i n a s T ir i t h t   o    the
  groun d        bef   ore he sees   the ret urn oft   he
  King.

CLOSE ON: ARAGORN . . . he knows GANDALF SPEAKS THE TRUTH.

ANGLE ON: GANDALF rounds on THEODEN . . .

  GANDALF (cont'd)
  If the beacons of Condor are lit, Rohan
  must be ready for war!

THEODEN holds GANDALF'S gaze.




      (CONTINUED)

    Final Revision - October, 2003 20
CONTINUED: (2)


 THEODEN
     (quietly)
Tell me. Why should we ride to the aid of
those who did not come to ours?

ANGLE ON: ARAGORN turns to look at THEODEN.

THEODEN (cont'd)
What do we owe Gondor?

ARAGORN
     (low and urgent)
I will go.

  GANDALF
      (hurried)
No!

ARAGORN
They must be warned.

GANDALF
They will be.
     (low voice, to Aragorn)
You must come to Minas Tirith by another
ra ...
 od
     (cryptic)
Follow the river, look to the black ships.
     (louder, to all)
Understand this . . . things are now in
motion that cannot be undone.

GANDALF turns on his heel . . . and stares at a surpirsed
PIPPIN.

GANDALF (cont'd)
I ride for Minas Tirith! And I won't be
going alone !

EXT. EDORAS STREETS - DAWN

ANGLE ON: GANDALF hurries along the STREETS . . .   PIPPIN and
MERRY run alongside trying to KEEP UP . . .



 (CONTINUED)

      Final Revision - October, 2003 21.
CONTINUED:   �


  GANDALF
  Of all the inquisitive Hobbits, Peregrin,
  Took, you are the worst. Hurry, hurry!

PIPPIN catches up to MERRY.

   PIPPIN
       (worried)
  Where are we going?

 MERRY
  Why did you look - why do you always have
  to look?

   PIPPIN.
       (subdued)
  I don't know . . . I can't help it.

MERRY turns away ...

 MERRY
  You never can.

   PIPPIN
       (lightly)     . . . . ,.;      �
  I'm sorry, alright? I won't do it again.

This is too much for MERRY. He turns on PIPPIN.

  MERRY
  Don't you understand ... the Enemy thinks
  you have the Ring . . . he's going to be
  looking for you, Pip. They have to get you
  out of here!

   PIPPIN
  And you. You're coming with me . . .
  Merry?

  MERRY
  Come on!

PUSH IN: PIPPIN'S face as MERRY strides away.

    '     ,.,   CUT TO:

    Final Revision - October, 2003 22



INT. EDORAS STABLES - DAWN

ANGLE ON: PIPPIN is dumped unceremoniously onto the back of
SHADOWFAX as GANDALF hurriedly prepares to leave . . .

          PIPPIN
    (nervous)
          How far is Minas Tirith?

          GANDALF
          Three days ride as the Nazgul flies and
          you'd better hope we don't have one of
          those on our tail.

MERRY thrusts a SMALL PACKAGE into PIPPIN'S HAND . . .

          MERRY
          Here - something for the road.

PIPPIN stares down at the leather-bound bundle of PIPE-WEED.

          PIPPIN
          The last of the Longbottom Leaf.

          MERRY
          I know you've run out . . . you smoke too
          much, Pip.

          PIPPIN
          But we'11 see each other soon?

A WORRIED MERRY exchanges glances with GANDALF.

PIPPIN (cont'd)
          Won't we?

          MERRY
          I don't know . . . I don't know what's going
          to happen.

GANDALF mounts SHADOWFAX.

          PIPPIN
    (rising panic)
          Merry?
          (CONTINUED)

    Final Revision - October, 2003 23.
CONTINUED:


GANDALF spurs the GREAT HORSE forward.

 GANDALF
  Run Shadowfax, show us the meaning of
  haste.

          PIPPIN
    (panicked)
          Merry!

SHADOWFAX thunders out of the STABLES!

CLOSE ON: MERRY'S devastated face.

EXT. GATES OF EDORAS - DAY

ANGLE ON: SHADOWFAX carried GANDALF and PIPPIN out of the
GATE and down the WINDING ROAD towards the PLAINS QF ROHAN.

EXT. EDORAS GATES LOOK-OUT - DAY

ANGLE ON: MERRY clambers up a WATCHTOWER, ARAGORN in pursuit.

ANGLE ON::The SMALL FIGURE as he watches his best friend
DISAPPEAR into the DISTANCE . . .

CLOSE ON: ARAGORN . . . he knows what it is to lose someone.

EXT. RIVENDELL FOREST - DAY

WIDE: ARWEN - escorted by a SMALL ENTOURAGE of ELVES - rides
through the gathering darkness of a PINE FOREST ...

          ELROND V/0
          Take her by the safest road. A ship lies
          anchored in the Grey Havens. It waits to
          carry her across the Sea . . . The last
          journey of Arwen Undomiel.

SLOW MOTION: As ARWEN rides through the FOREST the FIGURE of
a SMALL BOY of about 5 SUDDENLY runs across the path in front
of her.

ARWEN reigns in ASFALOTH ... something about the BOY
intrigues her.- but she does not know why . . .
         (CONTINUED)

     Final Revision - October, 2003 24.
CONTINUED:


As ARWEN watches the BOY moves away, the TREES begin to thin
. . . the BOY continues running. One by one the TREES TRANSFORM
into TALL WHITE PILLARS ...

ARWEN'S POV: The BOY now stands within a VISION of the
majestic architecture of the great Gondorian city of MINAS
TIRITH.

A SILHOUETTED FIGURE appears in the distance and moves
towards the CHILD . . . the BOY runs to the FIGURE.

ARWEN watches as the FIGURE holds out its arms - swinging the
LAUGHING CHILD into the AIR . . .

The figure turns to reveal ... ARAGORN, a little older,
dressed in the casual finery of a GONDORIAN NOBLE.

CLOSE ON: The'CHILD, now in ARAGORN'S ARMS looks directly at
ARWEN . . . it is a QUIET LOOK filled with INFINITE SADNESS.

ARWEN'S eyes drop to the CHILD'S CHEST . . . around the CHILD'S
neck hangs the EVENSTAR . . .

CLOSE ON: ARWEN as she realizes she is staring at a future
that can never be, the CHILD she and ARAGORN will never have.

INSERT: ELROND speaking to his daughter . . .

          ELROND V/0 (cont'd)
Arwen, there is nothing for you here ...
only death.

ARWEN shuts her eyes ... when she opens them again the VISION
is gone . . . she is staring at DARK TREES once more.

          ELF ESCORT O.S.
Lady Arwen?

ARWEN turns towards her COMPANION who stares at her,
concerned.

          ELF ESCORT
We cannot delay.

SUDD ENLY: ARWEN wheels ASFAL OTH ar ound . . .   riding away.
  (C O N TI N U ED )

    Final Revision - October, 2003 25.
CONTINUED: (2)


ELF ESCORT (cont'd)
    (calling)
          My Lady!

EXT. RIVENDELL - DAY

WIDE SHOT: ARWEN'S HORSE gallops over the BRIDGE and through
the GATES into RIVENDELL.

EXT. ELROND'S BALCONY, RIVENDELL - DAY

ANGLE ON: ELROND seated alone ... ARWEN runs up the STEPS
towards him ...

         ARWEN      ....
          What did you see?

CLOSE ON: ELROND stands - stunned.          ,,

 ELROND
          Arwen?

ANGLE ON: ARWEN breathing hard, walking towards ELROND with a
fierce light in her eyes . . .

         ARWEN
          You have the gift of foresight - tell me
          what you have seen.

CLOSE ON: ELROND his face grim.       '
     .

         ELROND
          I looked into your future and I saw death.

         ARWEN
          There is also life.     ,

Her father turns away ...

          ARWEN (cont'd)
          You saw there was a child . . .
          you saw my son.

ELROND stares into space, the fight seems to go out of him.
He won't look at her . . .
          (CONTINUED)

          Final Revision - October, 2003 26,
CONTINUED:


  ELROND
       (quietly)
  That future is almost gone.

  ARWEN
  But it is not lost ...

  ELROND
  Nothing is certain.

ANGLE ON: ARWEN gently takes her FATHER'S face in her hands
and turns him toward her . . .

ARWEN
Some things are certain. If I leave him now
I will regret It forever.
     (whisper)
Ada, it is time.

INSERT IMAGE: A HOODED FIGURE ascends a CURVED STAIRCASE
towards a GALLERY ... The FIGURE stops before a STATUE that
holds the BROKEN SHARDS of an ancient sword in its arms.

  A RW EN ( V .O .) (c on t' d )
  From the ashes of fire shall be woken,
  a light from the shadow shall spring,
  renewed shall be blade that was broken ...

INSERT IMAGE: The BLADE shattering in several fragments as
ISLIDUR brandishes NARSIL at SAURON.

  ARWEN (V.O.) (cont'd)
  The crownless again shall be King . . .

CLOSE ON: The HOODED FIGURE looks up into the sorrowful face
of the STATUE ... The figure is ARWEN . . .

 ARWEN V/0
  Reforge the sword.

INT. ARWEN'S CHAMBER, RIVENDELL - NIGHT

ANGLE ON: ELROND stares at his daughter, unwavering . . .



    (CONTINUED)

     Final Revision - October, 2003 27.
CONTINUED:


 ARWEN
  Ada ...

ANGLE ON: ELROND turns away . . .

ANGLE ON: ARWEN in ANGUISH, sits on her bed, the book falls
to the FLOOR ...

CLOSE ON: ELROND picks up her JOURNAL and takes one of her
hands in his . . .

  ELROND
  Your hands are cold.
       (distressed)
  The life of the Eldar is leaving you.

CLOSE ON: ELROND'S despair is plain . . .

  ELROND (cont'd)
  It has begun.

  ARWEN
  This was my choice. Ada ... Whether by your
  will or not, there is no ship now that can
  bear me hence.

ANGLE ON: ELROND, he understands now that to protect his
dauther, he must trust her . . .

INSERT IMAGES: A BROKEN SWORD GLOWS with RED HEAT . . . It's
BLADE in SEVERAL FRAGMENTS.

IMAGE: A HEAVY HAMMER pounds the RED-HOT BLADE on an ANVIL
. . . As ELVEN-SMITHS TEMPER the STEEL.

IMAGE: ELROND'S FACE lit by FLICKERING FIRE as SPARKS fly in.
the RIVENDELL FORGE.

CLOSE ON: The SWORD is withdrawn from a POOL OF STEAMING
WATER ... LIGHT SHIMMERS as the WATER DROPS slide down the
BLADE of NARSIL, the SWORD that was broken has been remade.

         DISSOLVE TO:

    Final Revision - October, 2003 28



EXT. FOOTHILLS OF WHITE MOUNTAINS - NIGHT

CLOSE ON: PIPPIN asleep . . . GANDALF'S PROTECTIVE ARM around
him ...

. . . as SHADOWFAX THUNDERS through the NIGHT.

          DISSOLVE TO:

EXT. FOOTHILLS OF WHITE MOUNTAINS - DAY

ANGLE ON: SHADOWFAX powers along the COUNTRYSIDE.

ANGLE ON: PIPPIN, huddled in front of GANDALF, the WIND
sailing through his hair.

GANDALF
We have just passed into the realm of
Condor!

EXT. MINAS TIRITH - DAWN

ANGLE ON: SHADOWFAX gallops up onto a LOW RIDGE . . .

ANGLE ON: Before them is the DARK MASS of Mount Mindolluin,
its tall WHITE FACE whitening in the RISING SUN. Upon its out-
thrust knee is the Guarded City: MINAS TIRITH.

With SEVEN WALLS OF WHITE STONE, so strong and old that it
seems to have been not built, MINAS TIRITH looks carven by
giants out of the bones of the earth.

          GANDALF
          Minas Tirith . . . City of the Kings.

Suddenly the SUN climbs over the eastern hills,     and sends
forth a SHAFT OF SUNLIGHT that GLEAMS against th    e face of the
CITY. The TOWER OF ECTHELION stands high within     the topmost
walls. WHITE BANNERS break and FLUTTER from the     BATTLEMENTS
in the morning breeze.

EXT. MINAS TIRITH STREETS - DAY

GANDALF steering SHADOWFAX up the STEEP STREETS of MINAS
TIRITH.
 (CONTINUED)

      Final Revision - October, 2003 29.
CONTINUED:


ANGLE ON: The stares of frightened GONDORIANS as GANDALF and
PIPPIN gallop through the WINDING STREETS . . .

AERIAL SHOT: SHADOWFAX, carrying GANDALF and PIPPIN up
towards the 7th LEVEL.

MINAS TIRITH is built in 7 LEVELS - each behind a CIRCULAR
DEFENSIVE WALL. Each level rises - the city reaches a height
of nearly 1000 FEET on its TOPMOST LEVEL.

A towering BASTION of NATURAL ROCK - shaped like a sharp
ship's prow - bisects the city from the 2nd LEVEL to the TOP.

EXT. MINAS TIRITH, COURT OF THE KINGS - DAY

SHADOWFAX arrives at a GREAT CITADEL on the SUMMIT of the
CITY - 1000 FEET above the PELENNOR FIELDS.

GANDALF and PIPPIN dismount, leaving the GUARDS of the
CITADEL to tend to SHADOWFAX. GANDALF hurries off . . .

CLOSE ON: PIPPIN as he takes in his surroundings, his eye
caught by a DEAD TREE that stands in the middle of the COURT,
FOUR SOLEMN CITADEL GUARDS standing sentry around it.

   PIPPIN       ;
     .
       (whisper)
  It's the tree.,
       (hurrying after GANDALF)
  Gandalf! Gandalf!

 GANDALF
  Yes, the white tree of Gondor. The tree of
  the King.

GANDALF leads PIPPIN across a FLAT COURT of WHITE STONES,
surrounded by GREEN LAWNS . . . towards a GREAT HALL benejath
the GLEAMING TOWER.        '
     \

 GANDALF (cont'd)
  Lord Denethor, however, is not the King. He
  is a steward only. A caretaker of the
  throne.

GANDALF lowers his voice, as they approach the TOWER HALL.

  �,        (CONTINUED)

         Final Revision - October, 2003 30.
CONTINUED:


  GA ND ALF (c on t'd )
       (quietly)
  Now, listen carefully. Lord Denethor is
  Boromir's father. To give him news of his
  beloved son's death would be most unwise
  ... And do not mention Frodo . . . Or the
  Ring . . . And say nothing of Aragorn either.
       (hesitates)
  In fact, it's better if you don't speak at
  all, Pippin Took.

CLOSE ON: PIPPIN, suitably chastened, nods.

INT. MINAS TIRITH TOWER HALL - DAY

ANGLE ON: A LONG SOLEMN HALL ... with ROWS OF BLACK MARBLE
PILLARS. Between the pillars stand a silent company of TALL
KINGS carved in cold STONE.

GANDALF strides down the HALL, with PIPPIN following
obediently behind.

At the FAR END, upon a DAIS OF MANY STEPS, sits a LARGE,
EMPTY THRONE . . . and on the wall behind is the IMAGE of a
FLOWERING WHITE TREE set in GEMS.

At the FOOT of the DAIS, in a small STONE CHAIR, sits an OLD
MAN, gazing at his lap: DENETHOR - the Lord Steward of
CONDOR.

  GANDALF
  Hail, Denethor, Son of Ecthelion, Lord and
  Steward of Gondor.

DENETHOR does not look up as GANDALF and PIPPIN approach.

  GANDALF (cont'd)
  I come with tidings in this dark hour - and
  with counsel.

DENETHOR slowly raises COLD EYES . . .

   DENETHOR
       (bitter)
  Perhaps you come to explain this?

    (CONTINUED)

          Final Revision - October, 2003 31.
CONTINUED:


DENETHOR holds up BOROMIR'S BROKEN HORN ...

    DEN ETH OR (c ont 'd )
  Perhaps you come to tell me why my son is
  dead?

CLOSE ON: PIPPIN remembering . . .

INSERT IMAGE: BOROMIR, as URUK-HAI arrows thud into his body,
he falls to his KNEES . . .

PIPPIN starts forward unable to say nothing . . .

 .. PIPPIN
  Boromir died to save us . . . my kinsman and
  me . . . he fell, defending us from many
  foes.

CLOSE ON: DENETHOR pain flickers in his eyes.

  GANDALF
       (hurried whisper)
  Pippin!

PIPPIN drops to his knee offering DENETHOR his SWORD . . .

  PIPPIN
  I offer you my service, such as it is, in
  payment of this debt.

DENETHOR looks at PIPPIN blankly, overcome with grief.:

   GANDALF
       (to PIPPIN)
  Get up!
       (a ddre ssin g D ENET HOR)
  My Lord, there will be a time to grieve for
  Boromir, but it is not now. War is coming
  ... the Enemy is on your doorstep. As
  Steward, you are charged with the defence
  of this city. Where are Condor's armies?

DENETHOR gaze turns slowly on GANDALF . . .



    (CONTINUED)

   Final Revision - October, 2003 32.
CONTINUED: ( 2 )


 GANDALF (cont'd)
 You still have friends - you are not alone
 in this fight. Send word to Theoden of
 Rohan. Light the beacons.

DENETHOR smiles at GANDALF, as if amused by something.

  DENETHOR
      (softly)
 You think you are wise, Mithrandir, yet for
 all your subtleties.you have not wisdom. Do
 you think the eyes of the White Tower are
 blind? I have seen more than you know. With
 your left hand you would use me as a shield
 against Mordor and with your right you
 would seek to supplant me.

CLOSE ON: GANDALF looks shocked, DENETHOR'S eyes NARROW.

DENETHOR (cont'd)
     (contemptuous)
I know who rides with Theoden of Rohan. Oh,
yes. Word has reached my ears of this
Aragorn, son of Arathorn, and I tell you
now, I will not bow to this Ranger from the
North - last of a ragged house, long bereft
of Lordship.

 GANDALF
     (stung)
Authority is not given to you to deny the
return of the King - Steward!

 DENETHOR
      (explosive)
 The rule of Condor is mine, and no others!

CLOSE ON: PIPPIN, horrified. GANDALF looks at Denethor
closely for a moment, then turns on his heel to leave, PIPPIN
follows.

GANDALF
 Come.

GANDALF and PIPPIN stride from the TOWER HALL ... DENETHOR
slumps back into his SEAT.

   Final Revision - October, 2003 33.



INT. MINAS TIRITH, PIPPIN'S QUARTERS - NIGHT

ANGLE ON: PIPPIN is carefully laying out a SMALL UNIFORM of
the ROYAL GUARD on a bed.

          PIPPIN
          So, I imagine this is just a ceremonial
          position . . . I mean, they don't actually
          expect me to do any fighting . . . do they?

WIDE: GANDALF STANDING QUIETLY on a BALCONY that overlooks
the GREAT CITY.

GANDALF
          You're in the service of the Steward now -
          you're going to have to do as you're told,
          Peregrin Took . . .
    (under his breath)
          Guard of the Citadel!

EXT. MINAS TIRITH BALCONY - NIGHT

ANGLE ON: PIPPIN as he stares up at the vast NIGHT SKY.,

          PIPPIN
          It's so quiet.

GANDALF watches the young HOBBIT.



          GANDALF
          It's the deep breath before the plunge.

PIPPIN
          I don't want to be in a battle . . . but
          waiting on the edge of one I can't escape
          is even worse.          L
    (tense) :
          Is there any hope, Gandalf - for Frodo and
          Sam?

GANDALF joins PIPPIN as they look towards the distant, jagged
MOUNTAINS of MORDOR . . .


        (CONTINUED)

     Final Revision - October, 2003 34.
CONTINUED:


  GANDALF
  There never was much hope.

PIPPIN looks up at him, unnerved. GANDALF gives him a small
self-deprecating smile . . .

 GANDALF (cont'd)
  Just a fool's hope.

GANDALF and PIPPIN share a quiet moment as they stare out
towards the FIERY SKY over MORDOR . . .

 GANDALF V/0
       (grim)
  Our enemy is almost ready, his full
  strength gathered. Not only Ores, but men
  as well.

INSERT IMAGE: GIANT MUMAKIL carrying ARMIES upon their backs

 GANDALF V/0 (cont'd)
  Legions of Haradrim from the South ......

INSERT IMAGE: CORSAIR SHIPS sail up the RIVER . . .

  GANDALF V/0 (cont'd)
  Mercenaries from the coast . . . All will
  answer Mordor' s call.

ANGLE ON: GANDALF . . . he is almost talking to himself now ..
like a man unable to prevent a sure disaster.


 GANDALF
  This will be the end of Gondor as we know
  it. Here the hammerstroke will fall
  hardest.

INSERT IMAGE: The BATTLE-SCARRED CITY of OSGILIATH - last
bastion between MINAS TIRITH and MORDOR . . .

 GANDALF V/0
  If the river is taken, if the garrison at
  Osgiliath falls, the last defence of this
  city will be gone.

  (CONTINUED)

        Final Revision - October, 2003 35.
CONTINUED: ( 2 )


CLOSE ON: PIPPIN ... desperately seeking reassurance.

 PIPPIN
 But we have the White Wizard. That's got to
 count for something.

GANDALF looks down at PIPPIN, he says nothing ...

  PIPPIN (cont'd)
      (nervous)
 Gandalf?

GANDALF stares into the distance as if seeing something in
his mind's eye.

INSERT IMAGE: A TOWERING, HOODED FIGURE, DRESSED in BLACK, is
being dressed in ARMOUR by attendant ORCS ...

     GANDALF V/0
 Sauron    has yet to reveal his deadliest
 servant    . . . The one who will lead Mordor's
 armies    in war, the one they say no living
 man can    kill.

CLOSE ON: GANDALF still staring intently as if facing his
enemy in .person.

  GANDALF
 The Witchking of Angmar . . .
      (he looks down at a startled
       PIPPIN)         ,.
         ;
 You've met him before . . .

ANGLE ON: PIPPIN looks up at GANDALF, afraid to ask . . .

 GANDALF (cont'd)
 He stabbed Frodo on Weathertop.

INSERT IMAGE: FRODO screaming as the MORGUL BLADE is driven
into his SHOULDER . . .

PIPPIN blanches at the MEMORY . . .




       (CONTINUED)

        Final Revision - October, 2003 36.
CONTINUED: ( 3 )


G AN DA LF ( co nt 'd )
 He is the Lord of the Nazgul - the greatest
 of the nine . . .

EXT. MINAS MORGUL - NIGHT

GANDALF V/0
And Minas Morgul is his lair.

ANGLE ON: FRODO and SAM clamber into a SMALL GULLY beside a
ROUGH-HEWN ROAD ... GOLLUM CAREFULLY.peers OVER the lip of
the GULLY ___

ANGLE ON: MINAS MORGUL, a MASSIVE DEAD CITY, set upon a ROCKY
KNEE at the HEAD OF THE morgul valley. CORRUPT and LOATHSOME,
it glows with a SICKLY LUMINOUS LIGHT - like a CORPSE CANDLE.

TWO HUGE, BESTIAL STONE STATUES guard the BRIDGE that leads
to the CITY ...

GOLLUM
     (whisper)
The Dead City, very nasty place, full of
... enemies.

GOLLUM, FRODO and SAM hurry from their COVER scampering in
the SHADOWS towards MINAS MORGUL ...

GOLLUM (cont'd)
     (hissed whisper)
Quick! Quick! They will see, they will see.

CLOSE ON: FRODO . . . he LOOKS UP at the HIDEOUS STATUES. His
SENSES START REELING.

          GOLLUM (cont'd)
Come away, come away. Look! We have found
it.

FRODO and SAM look AGHAST at the sight of a NARROW, NEAR-
VERTICAL STAIRCASE, cut into the ROCK-FACE ... Directly in
FRONT of the MINAS MORGUL GATES.

GOLLUM (cont'd)
The way into Mordor!

  (CO NTINUE D)

      Final Revision - October, 2003 37.
CONTINUED:


ANGLE ON: Following the STAIRS . . . HIGHER and HIGHER up the
sheer western side of the MORGUL VALLEY - to the HIGH PEAKS
of the razor-like MOUNTAINS OF MORDOR.

   GOLLUM (cont'd)
  The secret stairs . . . climb!

SUDDENLY! FRODO staggers across the ROAD . . . as if some
FORCE, other than his own will, is at work! He lurches
towards the BRIDGE . . . towards MINAS MORGUL!

  SAM
  No, Mr Frodo!

  GOLLUM
       (desperate)
  Not that way!

SAM runs after FRODO, catching him in his arms as he STUMBLES,

 GOLLUM (cont'd)
  What's it doing?

  SAM
  No!

SAM and GOLLUM pull FRODO from the BRIDGE.

  FRODO
       (disorientated)
  They're calling me!

FRODO falls to the GROUND.

AT THAT MOMENT: the GROUND QUIVERS, and a great RUMBLING
NOISE rolls across the ground and ECHOES in the mountains.

The cold, dull MORGUL VALLEY is suddenly VIOLENT and FIERCE,
as UPRUSHING FLAME springs from MOUNT DOOM.

MINAS MORGUL ANSWERS: A FLARE of LIVID LIGHTNING, FORKS of
BLUE FLAME, SPRING UP from the TOWER into the SULLEN CLOUD.

        INTERCUT WITH:

   Final Revision - October, 2003 38,



EXT. MINAS TIRITH BALCONY - NIGHT

ANGLE ON: VIOLENT FIERY FLASHES light the CLOUD above MORDOR
. . . SHARP THUNDER rolls across 40 MILES to MINAS TIRITH.

CLOSE ON: PIPPIN looking on in FRIGHTENED AWE. GANDALF'S
comforting HAND rests on his shoulder.

     INTERCUT WITH:

EXT. MINAS MORGUL - NIGHT

SAM and GOLLUM lead FRODO to the STAIRS ...

ABOVE MINAS MORGUL the SKY is BRIGHT with LIGHT as the CITY,
erupts . . .

         GOLLUM
          Hide! Hide!

     INTERCUT WITH:

EXT. MINAS TIRITH BATTLEMENTS - NIGHT

ANGLES ON: FACES of SOLDIERS and CIVILIANS of MINAS TIRITH as
they watch from the PARAPETS of the CITY.

     INTERCUT WITH:

EXT. MINAS MORGUL - NIGHT

FRODO and SAM sink to the ground, holding their hands against
their ears, as out of the CITY comes a RENDING SCREECH . . .
SHIVERING, rising swiftly to a PIERCING PITCH beyond the
range of hearing. The terrible CRY ends, falling back through
a long sickening WAIL, to SILENCE.

ANGLE ON: FRODO slowly RAISES HIS HEAD . . . across the NARROW
VALLEY, directly opposite the HOBBITS, the LORD OF THE NAZGUL
- the WITCH KING - suddenly RISES UP out of the DEAD CITY on
his FELL-BEAST!

. .. ,as the WITCH KING settles on the BATTLEMENTS of MINAS
MORGUL. His DARK HEAD turns this way and that, sweeping the
shadows with unseen eyes - as if SENSING the RING !
        (CONTINUED)

     Final Revision - October, 2003 39.
CONTINUED:


ANGLE ON: FRODO breaking out into a COLD SWEAT. He squeezes
his eyes shut, clutching at his SHIRT as if it's on FIRE!

   FRODO .
       (gasping)
  I can feel his blade!

THE CAVERNOUS GATE of MINAS MORGUL swings OPEN ...

. . . and. a HUGE ARMY MARCHES OUT!

RANK upon RANK of ARMOUR CLAD ORCS, moving SWIFTLY and
SILENTLY, pass close to FRODO and SAM in an ENDLESS STREAM of
RAGGED COLUMNS!

EXT. MINAS TIRITH BALCONY - NIGHT

CLOSE ON: GANDALF . .. .

   GANDALF
       (quiet)
  We come to it at last ... the great battle
  of our time.

       INTERCUT WITH:

EXT. MINAS MORGUL - NIGHT

ANGLE ON: 75,000 ORCS MARCHING TO WAR, just below FRODO and SAM.

  GANDALF V/0
  This war is long planned. Sauron has hated
  the west through many ages . . . It is a
  hatred that flows from the depths of time,
  across the deeps of the Sea.

The WITCH KING SWOOPS down the VALLEY to join the HEAD of his
ARMY. He vanishes into the GLOOM - a shadow into shadow.

CLOSE ON: GOLLUM peers out from his stony hiding place.

  GOLLUM
       (urgent)
  Come, hobbits. We climb - we must climb!


 (CONTINUED)

    Final Revision - October, 2003 40.
CONTINUED:


ANGLE ON: FRODO, SAM and GOLLUM climb the STONY STAIRS high
above the MARCHING ARMY.

EXT. MINAS TIRITH BALCONY - NIGHT

ANGLE ON: GANDALF . . . thinking, calculating . . .

  GANDALF
       (to himself)
  The board is set, the pieces are moving.

EXT. MINAS TIRITH SIXTH LEVEL - NIGHT

ANGLE ON: GANDALF striding BACK STREETS of the CITY . . . so
DETERMINED and PURPOSEFUL is he, that PIPPIN has to RUN to
keep up. GANDALF suddenly stops and looks down at PIPPIN . . .

 GANDALF
  Peregrin Took, my lad, there is a task to
  be done. Another opportunity for one of the
  Shire-folk to prove their great worth!

GANDALF kneels down and looks at PIPPIN earnestly, his hand
on PIPPIN'S shoulder.

 GANDALF (cont'd)
  You must not fail me.

GANDALF watches as PIPPIN hurries away.

EXT. WEST OSGILIATH, RIVER ANDUIN - NIGHT

WIDE ON: An ANCIENT STONE BRIDGE which spans the RUINS of
EAST and WEST OSGILIATH - a once MIGHTY GONDORIAN CITY.

WIDE ON: ITHILIEN RANGERS patrolling the BRIDGE and the
RIVERBANK.

WEST OSGILIATH has fallen into disrepair, but the DESOLATION
of EAST OSGILIATH is more pronounced - it is held by the
FORCES of MORDOR.

CAMERA tracks down beneath the BRIDGE to the DARK WATERS . . .
catching a STEALTHY MOVEMENT . . .

 (CONTINUED)

       Final Revision - October, 2003 41.
CONTINUED:


ANGLE ON: MANY BOATS, carrying MURDEROUS-LOOKING ORCS, are
quietly tracking down the RIVER. On board several HUNCHED
FIGURES steer with LONG OARS.

 GOTHMOG
       (to his oarsmen)
  Quiet!

EXT. WEST OSGILIATH, RIVER ANDUIN - NIGHT

CLOSE ON: FARAMIR, CAPTAIN OF CONDOR, as he issues orders to
his SOLDIERS.

   FARAMIR
       (urgent)
  To the river - quick!

ANGLE ON: ITHILIEN RANGERS take position; they are all
WEATHERED, HARDENED, PROFESSIONAL SOLDIERS . . . Watchful,
ready, waiting . . .

 GOTHMOG
  Faster!

ON THE RIVER the BOATS quietly advance.

  ORC COMMANDER
  Draw swords!

ANGLE ON: FARAMIR and his SOLDIERS lie in wait. As the BOATS
arrive HUNDREDS of ORCS race ashore. FARAMIR steps out, his
SWORD drawn. A FIERCE BATTLE ensues, but FARAMIR is unable to
stop the advance as HUNDREDS OF ORCS cross the WIDE BRIDGE
into WEST OSGILIATH.

EXT. MOUNT MINDOLLUIN - DAWN

HIGH ANGLE ON: A DIZZYING VIEW . . . Looking down on MINAS
TIRITH, 1000 FEET BELOW, as PIPPIN desperately scrambles up
the ROCKY MOUNTAINSIDE.

EXT. MINAS TIRITH BEACON - DAWN

PIPPIN clambers over a ROCKY LEDGE and ducks behind a STONE
WALL . . . panting HEAVILY.

 (CONTINUED)

      Final Revision - October, 2003 42,
CONTINUED:


ANGLE ON: An ancient STONE LEDGE holds a GREAT PILE of
FIREWOOD, secured in stacked bundles ... The MINAS TIRITH
BEACON!

TWO bored CITADEL GUARDS sit chatting ... passing the long
hours.

        INTERCUT WITH:

EXT. MINAS TIRITH STREETS - DAWN

ANGLE ON: GANDALF as he waits tensely below . . .

        INTERCUT WITH:

EXT. MINAS TIRITH BEACON - DAWN

ANGLES ON: PIPPIN as he stealthily manages to POUR OIL on the
WOOD and set a FLAME to it!

Within SECONDS, the GREAT PYRE is alight! The GUARDS look on
in TOTAL SURPRISE as the FLAMES ERUPT into the TWILIGHT SKY.

        INTERCUT WITH:

EXT. MINAS TIRITH STREETS

ANGLE ON: GANDALF as the BEACONS burst into FLAMES ... His.
eyes flash briefly with TRIUMPH before he hurries off ...

EXT. MINAS TIRITH BATTLEMENTS - DUSK

ANGLE ON: The BEACON glows BRIGHTLY on the slopes of MOUNT
MINDOLLUIN, high above MINAS TIRITH ...

PULL BACK: GANDALF hurries to the BATTLEMENT, looking further
west along the WHITE MOUNTAINS.

          GANDALF
    (to himself)
          Amon Din ... come on . . .

ANGLE ON: a bright FIRE ignites on a DISTANT MOUNTAIN PEAK.


(CONTINUED)

    Final Revision - October, 2003 43.
CONTINUED:


NOISY COMMOTION in the city as PEOPLE realise the BEACONS
have been lit!

  SOLDIER
       (yelling)
  The beacon! The beacon at Amon Din is lit!

FLASH INSERT: DENETHOR staring�at the BEACON from the CITADEL
WINDOW . . . a look of BLACK FURY on his face.

ANGLE ON: GANDALF, a strange smile plays on his face . . .

  GANDALF
       (to himself)
  Hope is kindled.

     CUT TO:

EXT. WHITE MOUNTAINS AERIAL - NIGHT

AERIAL SHOT: MOVING over the WHITE MOUNTAINS . . . as the TRAIL
of GREAT FIRES slowly winds from PEAK TO PEAK.

EXT. EDORAS COURTYARD - DAWN

ANGLE ON: A ROCKY PEAK high above EDORAS . . . a GREAT BEACON
FIRE is IGNITED.

ON THE SOUNDTRACK: A BELL TOLLS urgently!

CLOSE ON: ARAGORN looks tensely out across the MOUNTAINS . . .

PULL BACK . . . ARAGORN runs towards the GOLDEN HALL.

INT. EDORAS, GOLDEN HALL - DAWN

CLOSE ON: ARAGORN bursts into the GOLDEN HALL.

 ARAGORN
  The beacons of Minas Tirith! The beacons
  are lit! Condor calls for aid!

ANGLE ON: THEODEN looks up startled.


 (CONTINUED)

    Final Revision - October, 2003 44,
CONTINUED:


CLOSE ON: EOWYN, EOMER turn to look at their UNCLE ... tension
builds.

CLOSE ON: THEODEN his head lowered . . . Slowly it rises - he
looks ARAGORN in the EYE.

  THEODEN
  Then Rohan will answer. Muster the
  Rohirrim!

EXT. EDORAS COURTYARD - DAWN

WIDE ON: EDORAS LOOKOUT . . . A SOLDIER RINGING the GREAT BELL
in alarm as below, in the COURTYARD, SOLDIERS mount their
STEEDS amid great activity.

ANGLE ON: THEODEN striding purposefully outside, flanked by
EOMER and his SOLDIERS ...

          THEODEN
          Assemble the army at Dunharrow - as many
          men as can be found. You have two days ...
          On the third, we ride for Condor ... and
          war!

ANGLE ON: THEODEN strides onto the PARAPETS . . .

  THEODEN (cont'd)
  Gamling, make haste across the Riddermark
  ... Summon every able-bodied man to
  Dunharrow!

ANGLE ON: THEODEN watches as below the SOLDIERS prepare.

ANGLE ON: EOWYN hurriedly pulling on RIDING GLOVES, preparing
to mount her HORSE.

 ARAGORN
  You ride with us?

EOWYN turns and runs SMACK into ARAGORN ...

          EOWYN
          Just to the encampment. It's tradition for
          the women of the Court to farewell the men.
         (CONTINUED)

    Final Revision - October, 2003 45.
CONTINUED:


ARAGORN smiles . . . reaching past her, he lifts a cover to reveal
a SWORD, strapped to the side of the saddle of her HORSE.

EOWYN deftly pulls the cover back down. She looks at ARAGORN.

  EOWYN (cont'd)
       (softly)
  The Men have found their Captain - they
  will follow you into battle, even to death.
       (quietly)
  You have given us hope.

PULL BACK: to reveal THEODEN stares around at the STREETS and
PEOPLE of EDORAS . . . it is as if he knows he will not see
this place again.

 THEODEN V/0
  So . . . It is before the walls of Minas
  Tirith that the doom of our time will be
  decided.

ANGLE ON: EOMER astride his horse, calls to the assembled
SOLDIERS . . .

  EOMER
  Now is the hour! Riders of Rohan - oaths
  you have taken. Now, fulfil them all - to
  Lord and land!

EXT. PLAINS OF ROHAN - DAY

ANGLE ON: THEODEN astride SNOWMANE, as he, EOMER, ARAGORN &
MERRY and LEGOLAS & GIMLI ride out AMID a GREAT COLUMN of
ROHIRRIM, THUNDERING towards DUNHARROW in the MOUNTAINS.

EXT. WEST OSGILIATH, RIVER ANDUIN - DAY

ANGLE ON: FARAMIR and his MEN are fighting a losing BATTLE
against the MORDOR invasion.

  MADRIL
  We can't hold them. The city is lost!




  (CONTINUED)

   Final Revision - October, 2003 46.
CONTINUED:


 FARAMIR
  Tell the men to break up. We ride for Minas
  Tirith.

ON THE SOUNDTRACK: OMINOUS SOUNDS of WIND RISING ... HUGE
WINGS BEATING ...

 RANGER
  Nazgul!

SPINNING ANGLE: FARAMIR looks up at the SKY . . . ITHILIEN
RANGERS are suddenly nervous, frightened . . . A HUGE SHADOW
passes overhead!

 FARAMIR
  Take cover!

A SUDDEN TERRIFYING SHRIEK rends the AIR!

 FARAMIR (cont'd)
  Pull back! Pull back to Minas Tirith!

ANGLE ON: SOLDIERS RETREATING through the RUINS of the CITY
as, high in the sky above, the NAZGUL swoop ...

ANGLE ON: MADRIL as he is cut down by an ORC . . .

CLOSE ON: MADRIL . . . his breathing quick and shallow . . .
footsteps approach . . .

ANGLE ON: The HIDEOUSLY deformed features of GOTHMOG standing
over the prone figure of the INJURED RANGER.

Grabbing a spear from a nearby underling, GOTHMOG drives the
shaft into MADRIL'S chest . . .

CLOSE ON: GOTHMOG surveys the carnage with satisfaction.

GOTHMOG
The age of men is over. The time of the Ore
has come.

    Final Revision - October, 2003 47.



EXT. PELENNOR FIELDS - DAY

FARAMIR and a few survivors flee WEST OSGILIATH, desperately
riding toward MINAS TIRITH . . . in the SKY above DARK SHAPES
pursue them ...

ANGLE ON: SUDDENLY, from on HIGH, the NAZGUL strike!

TILT DOWN ... following the NAZGUL as it SWOOPS out of LOW-
LYING, MURKY CLOUDS tossing MEN in the AIR like LIMP RAG-DOLLS!

AT THAT MOMENT: Across the PLAIN, a FIGURE clothed in WHITE
rides towards them!

From the BATTLEMENTS of MINAS TIRITH, a call . . . "The White
Rider!"

EXT. PELENNOR FIELDS - DAY

WIDE ON: GANDALF as he spurs SHADOWFAX forward! PIPPIN clings
tightly to the great horses MANE.

ANGLE ON: FARAMIR, SWORD in hand, remains at the REAR, trying
desperately to fend off the DEADLY ASSAULT . . .

AGAIN the FELL-BEASTS DIVE low ...

GANDALF thunders into view, raising his STAFF ...

A SHAFT OF WHITE LIGHT suddenly stabs upwards! The NAZGUL
SWERVES AWAY from the LIGHT, as it pierces the LOW CLOUD!

For a BRIEF MOMENT, SUNLIGHT streams through the hole onto
PELENNOR FIELDS . . . The NAZGUL circle away from the SUN RAYS,
swiftly spiralling higher and higher.

The NAZGUL defeated, GANDALF and the RANGERS ride towards the
safety of MINAS TIRITH.

EXT. MINAS TIRITH GATES - DAY

ANGLE ON: IORLAS runs towards the GATES, yelling . . .

          IORLAS
          Open the Gates! Pull!
          (CONTINUED)

        Final Revision - October, 2003 48,
CONTINUED:


The GREAT GATES OPEN, allowing GANDALF, PIPPIN, FARAMIR and
the OSGILIATH SURVIVORS to RIDE IN . . . Nearly 100 WOUNDED AND
SHOCKED MEN.

AS GANDALF pulls SHADOWFAX up . . .

  FARAMIR
  Mithrandir!

ANGLE ON: FARAMIR STEERS HIS HORSE through the CROWD towards
GANDALF ...

  FARAMIR   (cont'd)
  They broke through    our defences. They have
  taken the bridge a   nd the West Bank.
  Battalions of Ores    are crossing the River.

  IORLAS
  It is as the Lord Denethor predicted - long
  has he foreseen this doom!

  GANDALF
  Foreseen and done nothing!

FARAMIR suddenly STARES at PIPPIN. GANDALF reads the surprise
in his eyes.

 GA ND ALF (c on t'd )
  Faramir? ... This is not the first halfling
  to have crossed your path ...

FARAMIR shakes his head.

 FARAMIR
  No.

  PIPPIN
       (disbelief)
  You've seen Frodo and Sam?

FARAMIR NODS.

  GANDALF
  Where? When?


   (CONTINUED)

     Final Revision - October, 2003 49.
CONTINUED: ( 2 )


FARAMIR
 In Ithilien, not two days ago. Gandalf -
 they are taking the road to the Morgul
 Vale.

 GANDALF
      (shocked realisation)
 . . . And then the Pass of Cirith Ungol.

CLOSE ON: GANDALF, deeply troubled.

 PIPPIN
 What does that mean? What's wrong?

  GANDALF
      (urgent)
 Faramir . . . Tell me everything.

EXT. CIRITH UNGOL STAIRS - NIGHT

ANGLE ON: FRODO and SAM following GOLLUM up the dizzying
STAIRWAY, carved into the SHEER CLIFF.

The STEPS are NARROW, UNEVENLY SPACED, and many are BROKEN.
They are so STEEP that FRODO and SAM climb as if on a LADDER �
their desperate FINGERS clinging to the STEPS ABOVE - trying
not to look at the LONG BLACK FALL below them.

ANGLE ON: FRODO'S foot slips and for a brief moment he is
HANGING PRECARIOUSLY from the ROCK-FACE.

GOLLUM
 Careful, Master - careful! Very far to
 fall. Very dangerous on the stairs.

EXT. CIRITH UNGOL LEDGE - NIGHT

ANGLE ON: GOLLUM peering down from ABOVE . . . he has reached a
SMALL LEDGE.

GOLLUM
Come, Master.




(CONTINUED)

     Final Revision - October, 2003 50.
CONTINUED:


CLOSE ON: FRODO tries to CLAMBER UP onto the LEDGE . . . as he
does, the RING slips out of his SHIRT and DANGLES in FULL
VIEW of GOLLUM!

CLOSE ON: GOLLUM rears back in shock . . . tenses like a CAT,
EYES WIDENING.

  GOLLUM (cont'd)
       (dreamlike)
  Come to Smeagol.

ANGLE ON: FRODO, head bowed, trying to pull himself up. He
doesn't notice GOLLUM'S HAND reaching for the RING !

CLOSE ON: GOLLUM'S FINGERS . . . closing in on the RING   ...

ANGLE ON: SAM, still TEETERING on the PRECIPITOUS STAIRS
DRAWS HIS SWORD!

  SAM
       (alarmed yell)
  Mr Frodo!

STARTLED, FRODO looks down at SAM, losing his footing in the
process . . .

  SAM (cont'd)
  Get back, you. Don't touch him!

ANGLE ON: SAM'S horrified face as . . .

GOLLUM'S out-stretched HAND suddenly GRASPS FRODO'S ARM
pulling him SAFELY onto the LEDGE.

GOLLUM glares down at SAM.

 GOLLUM
  Why does he hates poor Smeagol? What has
  Smeagol ever done to him? Master?

CLOSE ON: GOLLUM blinks, masking the MALICE of his EYES with
their heavy pale lids.




 (CONTINUED)

     Final Revision - October, 2003 51.
CONTINUED: (2)


GOLLUM (cont'd)
Master carries heavy burden . . . Smeagol
knows . . . Heavy, heavy burden. Fat one
cannot know. Smeagol look after Master.

CLOSE ON: GOLLUM creeps CLOSE to FRODO and WHISPERS in his
ear:

  GOLLUM (cont'd)
       (rasping whisper)
He   wants it - he needs it. Smeagol sees it
in   his eye. Very soon he will ask you for
it   - you will see . . . the Fat One will take
it   from you.

CLOSE ON: FRODO looking at SAM . . . his hand strays to his
NECK, closing tight around the RING.

      CUT TO:

EXT. OSGILIATH - DAY

HIGH ABOVE OSGILIATH, the SINISTER PROFILE of the WITCH KING
seated on a FELL BEAST as GOTHMOG stands, awaiting his
orders.

WITCH KING
     (clinical)
Send forth all legions. Do not stop the
attack until the city is taken. Slay them
all.

GOTHMOG
What of the Wizard?

SLOWLY the WITCH KING' S HEAD turns . . .

          WITCH KING
I shall break him.

EXT. MINAS TIRITH BATTLEMENTS - DAY

REACTIONS: OF GONDORIAN SOLDIERS upon the MINAS TIRITH
BATTLEMENTS . . . AWE . . . FEAR . . . TERROR!


(CONTINUED)

      Final Revision - October, 2003 52,
CONTINUED:


ANXIOUS SOLDIERS crowd around GANDALF.

  SOLDIER 1
       (worried)
  Where are Theoden's riders?

  SOLDIER 2
  Will Rohan's army come?

 SOLDIER 1
  Mithrandir?

    G AN DA LF
      (grim)
  Courage is the best defence that you have
  now.

      CUT TO:

INT. MINAS TIRITH TOWER HALL - DAY

CLOSE ON: PIPPIN . . . DRESSED in OVER-SIZED ARMOUR . . . kneels
before DENETHOR . . .

  PIPPIN
       (nervous)
  Here do I swear fealty and service to
  Gondor, in peace or war, in living or
  dying, from this hour henceforth, until my
  lord release me, or death take me.

  DENETHOR
  And I shall not forget it, nor fail to
  reward that which is given ...

ANGLE ON: DENETHOR proffers his RING which PIPPIN kisses . . .

 DENETHOR (cont'd)
  ... fealty with love ...

DENETHOR gently raises PIPPIN'S head . . . DENETHOR'S eyes meet
FARAMIR' S.

 DENETHOR (cont'd)
  ... valour with honour ...
  (CONTINUED)

    Final Revision - October, 2003 53.
CONTINUED:


DENETHOR crosses to a table ... Attendants BEGIN SERVING him
a ME L . . .
    A

 DENETHOR (cont'd)

  ... disloyalty with vengeance.

DENETHOR addresses his meal . . .

  DENETHOR (cont'd)
       (reasonable)
  I do not think we should so lightly abandon
  the outer defences; defences that your
  brother long held intact.

  FARAMIR
  What would you have me do?

 DENETHOR
  I will not yield the River and Pelennor
  unfought - Osgiliath must be retaken.

  FARAMIR
  My Lord, Osgiliath is overrun.

  DENETHOR
  Much must be risked in war. Is there a
  Captain here who still has the courage to
  do his Lord's will?

CLOSE ON: FARAMIR as he finally realises the truth.



  FARAMIR
       (quietly)
  You wish now that our places had been
  exchanged, that I had died and Boromir had
  lived?

CLOSE ON: For a brief second, DENETHOR seems to hesitate,
then ...




  (CONTINUED)

    Final Revision - October, 2003 54,
CONTINUED: ( 2 )


  DENETHOR
      (coldly)
 Yes, I wish that.

 FARAMIR
 Since you are robbed of Boromir, I will do
 what I can in his stead.

ANGLE ON: FARAMIR bows low to DENETHOR, then turns to leave,
stops, turns back ...

 FARAMIR (cont'd)
 If I should return ... think better of me,.
 father.

 DENETHOR
 That will depend on the manner of your
 return.

DENETHOR continues with his meal. FARAMIR exits.

      CUT TO:

EXT. CIRITH UNGOL LEDGE - DAWN

AERIAL SHOT: . . . HIGH above MINAS MORGUL, on the SMALL LEDGE
next to the STAIRS, LIE the FIGURES of FRODO, SAM and GOLLUM.

SAM watches a sleeping GOLLUM suspiciously as he desperately
tries to stay awake. SLOWLY, INEVITABLY, SAM, falls asleep.

CLOSE ON: GOLLUM'S EYES SNAP OPEN . . . he sits up and quietly
crawls towards SAM'S KNAPSACK.

SAM breathes deeply now, heavily asleep.

GOLLUM grimaces in DISTASTE as he pulls out the LEMBAS BREAD
. .. Quietly he SPRINKLES CRUMBS over the sleeping SAM.

ANGLE ON: GOLLUM as he throws the remaining LEMBAS BREAD over
the cliff.

CLOSE ON: SAM'S EYES flick open . . . GOLLUM spins around,
caught off guard . . .


          (CONTINUED)

      Final Revision - October, 2003 55.
CONTINUED:


  SAM
  What are you up to? Sneaking off, are we?

  SMEAGOL
       (prevaricating)
  Sneaking? Sneaking? Fat Hobbit is always so
  polite. Smeagol shows them secret ways that
  nobody else could find and they say
  "Sneak!", "Sneak!". Very nice friends, oh
  yes, my Precious, very nice.

  SAM
  Alright, alright - you just startled me is
  all.
       (peering over the cliff's edge)
  What were you doing?

    SMEAGOL
       (sly)
  Sneaking!

Too exhausted to argue, SAM turns away.

  SAM
  Fine, have it your own way.

SAM gently shakes FRODO'S shoulder.      -

  SAM (cont'd)
  Sorry to wake you, Mr Frodo. We have to be
  moving on.

SAM rummages through his KNAPSACK, looking for a bite to eat.
FRODO sits up slowly.

  FRODO        .
  It's dark still.

  SAM
  It's always dark here -

CLOSE ON: SAM stops rummaging . . . SHOCK on his face.

  SAM (cont'd)
  It's gone . . . the Elven bread!

  (CONTINUED)

   Final Revision - October, 2003 56.
CONTINUED: ( 2 )


 FRODO
     (alarmed)
What? That's all we have left!

SAM slowly turns to GOLLUM ...

SAM
     (dawning realisation)
He took it! He must have!

GOLLUM
     (shocked)
Smeagol? No, no, not poor Smeagol. Smeagol
hates nasty Elf bread!

          SAM
You're a lying wretch! What did you do with
it?

FRODO
He doesn't eat it . . . he can't have taken
it.

CLOSE ON: GOLLUM slaps his hand against SAM'S JACKET . . .
sending LEMBAS CRUMBS RAINING DOWN!

GOLLUM
What's this? Crumbs on his jacketses!
     (fake outrage)
He took it! He took it! I seen him, he's
always stuffing himself when Master's not
looking!

 SAM
     (angry)
That's a filthy lie!

SAM is ENRAGED . . . he throws himself at GOLLUM .. punching
him!

 SAM (cont'd)
      (yelling)
You stinking two-faced sneak! Call me a
thie . . .
    f


(CONTINUED)

    Final Revision - October, 2003 57.
CONTINUED: ( 3 )


  FRODO
      (yelling)
 Sam! Stop it!

FRODO pulls SAM off GOLLUM ...

  SAM
      (yelling)
 I'll kill him! I'll kill him!

  FRODO
 No, Sam!

FRODO COLLAPSES on the GROUND!

CLOSE ON: SAM'S horrified face!

 SAM
 Alight, I'm sorry, I didn't mean for it to
 go so far, I was so angry . . . Here, let's
 rest up a bit.

SAM attempts to fuss around FRODO ...

 FRODO
       (exhausted)
 I ' m alright.

SAM
No, no, you're not alright! You're
exhausted! It's that Gollum; it's this
place; it's that thing around your neck. I
could help a bit . . . I could carry it for a
while - share the load.

CLOSE ON: A terrible light comes into FRODO'S eyes as he
STARES into the EARNEST eyes of SAM.

 FRODO
Get away!

FRODO pushes SAM away, clutching at the RING beneath his shirt




   (CONTINUED)

         Final Revision - October, 2003 58.
CONTINUED: ( 4 )


 SAM
      (confused)
 I don't want to keep it . . . I just want to
 help!

FRODO rises to his FEET, as if empowered with a frightening
intense ENERGY.

 GOLLUM
 See! See! He wants it for himself.

 SAM
      (beside himself)
 Shut up, you! Go away. Get out of here.

CLOSE ON: FRODO ...

   FRODO
       (quietly)
 No, Sam . . . it's you.

SAM stares at FRODO with DISBELIEF.
     /

 FRODO (cont'd)
 I'm sorry, Sam ...

CLOSE ON: TEARS WELL in SAM'S eyes . . .

 SAM
      (hopelessly)
 But . . . he's a liar . . . he's poisoned you
 against me.

 FRODO
 You can't help me anymore.

 SAM
 You don't mean that.

 FRODO
      (eerie calm)
 Go home.

CLOSE ON: TEARS spill down SAM'S cheeks . . . as FRODO TURNS AWAY!


     (CONTINUED)

     Final Revision - October, 2003 59.
CONTINUED: (5)


ANGLE ON: FRODO and GOLLUM leave . . . SAM is in complete
MISERY.

EXT. MINAS TIRITH STREETS - DAY

ANGLE ON: FARAMIR leading a COLUMN of 200 KNIGHTS through the
STREETS towards the CITY GATE ... PEOPLE are rushing forward,
THROWING FLOWERS over the KNIGHTS.

CLOSE ON: GANDALF hurries alongside FARAMIR'S HORSE.

         GANDALF
          Faramir! Your father's will has turned to
          madness! Do not throw away your life so
          rashly!

          FARAMIR
    (deadened)
          Where does my allegiance lie if not here?

GANDALF reads the PAIN in FARAMIR'S eyes . . . he calls after
him, trying one more time to stop the YOUNG MAN.

          GANDALF
          Your father loves you, Faramir!
    (quietly)
          And will remember it before the end.

EXT. MINAS TIRITH BATTLEMENTS - DAY

HIGH ANGLE: FARAMIR leads the 200 MOUNTED KNIGHTS through the
GATES OF MINAS TIRITH and across the PELENNOR FIELDS towards
the RUINS of OSGILIATH.

ANGLE ON: The people of MINAS TIRITH watch from the
BATTLEMENTS.

HIGH WIDE: FARAMIR'S KNIGHTS FAN OUT . . .   to form one straight
line of 200 HORSEMEN.

EXT. WEST OSGILIATH - DAY

GOTHMOG and his MEN watch as the KNIGHTS approach.

     Final Revision - October, 2003 60,



INT. TOWER HALL, MINAS TIRITH - DAY

FAST PUSH IN . . . to PIPPIN looking on as DENETHOR eats.

DENETHOR
Can you sing, Master Hobbit?

PIPPIN
     (uneasy)
Well . . . yes, at least, well enough for my
own people ... but we have no songs for
great halls and evil times . . . we seldom
sing of anything more terrible than wind or
rain.

DENETHOR
And why should your songs be unfit for my
halls, or for hours such as these. Come -
sing me a song!

PIPPIN'S simple, clear voice echoes through the VAST HALL.

PIPPIN V/0
Home is behind, the world ahead,
And there are many paths to tread.
Through shadow to the edge of night
Until the stars are all alight.
Mist and shadow, cloud and shade:
All shall fade, all shall fade.

        INTERCUT WITH:

EXT. PELENNOR FIELDS/OSGILIATH RUINS - DAY

ANGLE ON: SLOW MOTION . . . TRACKING WITH THE 200 MOUNTED
KNIGHTS.

ANGLE ON: SLOW MOTION . . . GOTHMOG rises amidst the RUINS of
OSGILIATH.

ANGLE ON: SLOW MOTION . . . FARAMIR'S KNIGHTS - 75 yards away -
thundering towards camera.

PULL BACK . . . to GOTHMOG . . . he turns to CAMERA and RAISES
HIS BOW.
(CONTINUED)

     Final Revision - October, 2003 61
CONTINUED:


ANGLE ON: SLOW MOTION . . . Behind GOTHMOG - all over the
RUINED CITY - 5000 ORC ARCHERS rise to their feet . . . BLACK
ARROWS already strung on their BOWS!

CLOSE ON: SLOW MOTION . . . FARAMIR YELLING defiantly.

WIDE PROFILE: SLOW MOTION . . . FARAMIR'S 200 KNIGHTS ride
straight into a BLACK WALL of FLYING ARROWS . . .

AS ONE, the HORSES and HORSEMEN collapse into a CARTWHEELING,
TUMBLING HEAP . . . within seconds all are MOTIONLESS.

CLOSE ON: NORMAL SPEED . . . FAST CUTS of SCREAMING ORCS . . .

INT. TOWER HALL, MINAS TIRITH - DAY

THROUGHOUT the above sequence DENETHOR has continued to EAT.

ANGLE ON: PIPPIN finishes his bittersweet song . . . he looks
up at DENETHOR who continues as if he has not sent his son to
his death.

ANGLE ON: PIPPIN turns away, his SORROW etched on his YOUNG
FACE ...

EXT. MINAS TIRITH COURTYARD - DAY

GANDALF sits quietly in a COURTYARD, alone, defeated.

EXT. OSGILIATH BRIDGE - DAY

GREAT SIEGE TOWERS and CATAPULTS are ROLL along the REPARIED
BRIDGE which spans both sides of OSGILIATH ... They head
straight towards MINAS TIRITH ...

EX. DUNHARROW ENCAMPMENT - DUSK

ANGLES ON: ARAGORN, THEODEN, EOMER, MERRY, LEGOLAS and GIMLI
GALLOP into a VAST CAMP beneath the COVER OF TREES ...
TEEMING with MEN, HORSES and TENTS.

ANGLE ON: THEODEN acknowledges GRIMBOLD, a MARSHALL OF ROHAN,
as he passes by a GROUP of SOLDIERS.



 (CONTINUED)

  Final Revision - October, 2003 62
CONTINUED:


  THEODEN
  Grimbold, how many?

  GRIMBOLD
  I bring five hundred men from the Westfold,
  my Lord.

  ROHAN MARSHALL (0.S.)
  We have three hundred more from Fenmarch,
  Theoden, King.

THEODEN smiles grimly as he rides on.

  DENETHOR
       (quietly)
  Where are the riders from Snowbourne?

  GAMLING ( O . S . )
  None have come, My Lord.

EXT. DUNHARROW PLATEAU - DUSK

ARAGORN joins THEODEN on a BLUFF overlooking the ENCAMPMENT
BELOW ...

CAMERA CRANES to REVEAL: THOUSANDS of MEN and HORSES! Smoke
from many small CAMP-FIRES has filled the VALLEY with a
TWILIGHT HAZE.

   THEODEN
       (quietly)
  Six thousand spears . . . less than half of
  what I had hoped for . . .

ANGLE ON: ARAGORN turns to THEODEN ...

 ARAGORN
  Six thousand will not be enough to break
  the lines of Mordor.

          THEODEN
          More will come.




       (CONTINUED)

      Final Revision - October, 2003 63.
CONTINUED:


 ARAGORN      ;
  Every hour lost hastens Condor's defeat. We
  have till dawn. Then we must ride.

CLOSE ON: THEODEN realising what ARAGORN is saying - no
matter the numbers he must commit to war by the morning.
THEODEN nods.

The HORSES whinny loudly in the distance ... THEODEN looks up
at the MOUNTAIN which looms behind them . . .

EXT. DUNHARROW PLATEAU - DUSK

ANGLE ON: HORSES rearing in terror as ROHAN SOLDIERS try to
quieten them ...

ANGLE ON: LEGOLAS and GIMLI move through the CAMP . . .

CLOSE ON: LEGOLAS looking at a group of ROHAN SOLDIERS . . .
they sit quiet and hunched ... no-one speaking ...

LEGOLAS looking toward EOMER who is unsaddling his HORSE ...

  LEGOLAS
       (uneasy)
  The horses are restless . . . And the men are -;.
  quiet ..?

    EOMER
  They grow nervous in the shadow of the
  mountain . . .

GIMLI'S eyes travel to a ROW of ANCIENT STANDING STONES that
mark the ENTRANCE to a ROAD leading away from the ENCAMPMENT
and INTO the MOUNTAIN.

 GIMLI
  That road there - where does that lead?

 LEGOLAS
  It is the road to the Dimholt ... The door
  under the mountain.




  (CONTINUED)

    Final Revision - October, 2003 64
CONTINUED:


   EOMER
  None who venture there ever return.
       (under his breath)
  That mountain is evil . . .

ANGLE ON: ARAGORN stands before the road as though transfixed
... before him a HORSE whinnies and pulls at his ropes
nervously . . .

ARAGORN POV: A GHOSTLY FIGURE seems to emerge from the gloom
... ARAGORN starts in fright as . . .

  GIMLI O.S
  Aragorn!

ANGLE ON: ARAGORN stares down at the LITTLE DWARF . . .

  GIMLI
  Let's find some food.

ARAGORN casts another look back at the ANCIENT STANDING
STONES before following GIMLI.

EXT. DUNHARROW PLATEAU - DUSK

ANGLE ON: All is quiet in the ENCAMPMENT...

INT. EOWYN'S TENT, DUNHARROW - NIGHT

ANGLE ON: EOWYN kneels before MERRY, adjusting his HELMET
STRAP.

  EOWYN
  There! A true Esquire of Rohan.

MERRY exhales - excited and terrified in equal measure. In
his EXCITEMENT, he draws his SWORD ...

EOWYN steps back, laughing ...

  MERRY
  Sorry. It isn't all that dangerous.
       (despondent)
  It isn't even sharp.


         (CONTINUED)

    Final Revision - October, 2003 65,
CONTINUED:


 EOWYN
  Well, that's no good. You won't kill many
  Ores with a blunt blade. Come on.

EXT. DUNHARROW PLATEAU - NIGHT

As EOWYN and MERRY leave the tent, EOMER and GAMLING are
sitting nearby, finishing a meal ... EOWYN ushers MERRY off.

  EOWYN
  To the Smithy .- go!

MERRY hurries off    . . . EOMER watches the YOUNG HOBBIT leave.

  EOMER
  You should not encourage him.

  EOWYN
  And you should not doubt him.

  EOMER
  I do not doubt his heart ... Only the reach
  of his arm.

CLOSE ON: GAMLING stifles a laugh . . . EOWYN turns on both of
te .. .
 hm          .

  EOWYN
  Why should Merry be left behind? He has as
  much cause to go to war as you.
       (to herself)
  Why can he not fight for those he loves?

ANGLE ON: At the PLATEAU edge, a GUARD looks down the STEEP
PRECIPICE as a HORSE and RIDER move along the RIDGE ...

EXT. DUNHARROW TRACK - NIGHT

ANGLES ON: The HOODED FIGURE slowly RIDES up the NARROW ZIG-
ZAG TRACK leading up to the PLATEAU ...

INT. ARAGORN'S TENT, DUNHARROW - NIGHT

ANGLE ON: ARAGORN tosses in his SLEEP, disturbed by images
and voices . . .
          (CONTINUED)

      Final Revision - October, 2003 66.
CONTINUED:


  GANDALF V/0
  Look to the Black Ships . . .

In ARAGORN'S dream ARWEN suddenly WAKES ...

  ARWEN V/0
  I choose a mortal life . . . I wish I could
  have seen him, one last time ...

As ARWEN lies dying, the EVENSTAR falls from her fingers ...
At that moment, ARAGORN wakes, his SWORD quickly in his HAND
. . . A GUARD stands in the DOORWAY ...

  GUARD
  King Theoden awaits you, my Lord.

EXT. DUNHARROW PLATEAU - NIGHT

ARAGORN hurries towards THEODEN'S TENT ...

INT. THEODEN'S TENT, DUNHARROW PLATEAU - NIGHT

ANGLE ON:- THEODEN looks up as ARAGORN enters.

 THEODEN
  I take my leave.

ANGLE ON: THEODEN bows slightly to the HOODED FIGURE and
LEAVES, shooting ARAGORN a strange look as he goes ...

CLOSE ON: The FIGURE stands and pulls back the HOOD . . . to
reveal ... ELROND.

         ARAGORN
          My Lord, Elrond.

 ELROND
  I come on behalf of one whom I love.

ELROND'S face is ETCHED with PAIN ...

         ELROND (cont'd)
          Arwen is dying.

ANGLE ON: ARAGORN receiving this news ... ASHEN-FACED.
(CONTINUED)

    Final Revision - October, 2003 67.
CONTINUED:


  ARAGORN
  She stayed?

 ELROND
  She will not long survive the evil that now
  spreads from Mordor.

ELROND'S eyes fall to the EVENSTAR which hangs around
ARAGORN'S neck . . .

  ELROND (cont'd)
  The light of the Evenstar is failing. As
  Sauron's power grows, her strength wanes.
  Arwen's life is now tied to the fate of the
  Ring. The Shadow is upon us, Aragorn, the
  end has come.

 ARAGORN
  It will not be our end, but his.

   ELROND
  You ride to war, but not to victory.
  Sauron's armies march on Minas Tirith -
  this you know - but in secret he sends
  another force which will attack from the
  river . . .

CLOSE ON: ARAGORN looks at ELROND in shock.

 ELROND (cont'd)
  A fleet of Corsair ships sails from the
  South.

FLASH INSERT: A FLEET of BLACK SAILS moving along a SILVER
RIBBON of WATER .

  ELROND (cont'd)
  They will be in the city in two days . . .
  You're out-numbered, Aragorn. You need more
  men.

  ARAGORN
  There are none.

ELROND hesitates a BEAT ...

 (CONTINUED)

       Final Revision - October, 2003 68
CONTINUED: (2)


ELROND
     (quietly)
There are those who dwell in the mountain.

A SUDDEN WIND rushes through the TENT, lifting HANGINGS,
scattering MAPS, knocking over GOBLETS . . .

As ARAGORN looks at ELROND, an IMAGE FLASHES in his MIND'S
EYE . . . The GHOSTLY FIGURE on the DIMHOLT ROAD . . .

ARAGORN looks at ELROND in shock . . .

         ARAGORN
          Murderers, traitors - you would call upon
          them to fight? They believe in nothing.
          They answer to no-one.

          ELROND
          They will answer to the King of Condor.

ARAGORN' S eyes fall to a PLAIN BLACK SCABBARD, which ELROND
draws from beneath his robes.

CLOSE ON: ELROND' S long white fingers draw the hilt of a
SWORD from the scabbard to reveal . . . a ELVEN SWORD glints in
the firelight!

          ELROND (cont'd)
          Anduril, flame of the West . . . forged from
          the shards of Narsil.

ARAGORN takes the sword . . . staring at it in wonder.

  ARAGORN
          Sauron will not have forgotten the sword of
          Elendil . . .

ARAGORN draws the long blade from its sheath . . .

          A RAG OR N (c on t' d)
          . . . the blade that was broken shall return
          to Minas Tirith.




 (CONTINUED)

     Final Revision - October, 2003 69.
CONTINUED: ( 3 )


ELROND
 The man who can wield the power of this
 sword can summon to him an army more deadly
 than any that walks this earth.

ELROND stares hard at ARAGORN . . .

ELROND (cont'd)
 Put aside the Ranger - become who you were
 born to be - take the Dimhplt Road.

A HEAVY SILENCE hangs in the room.

   ELROND (cont'd)
       (ELVISH: with subtitles)
 Onen i-estel Edain.
         /, ,-, ARAGORN
      (ELVISH: with subtitles)
 U-chebin estel anim.
 I keep none for myself.

ANGLE ON: ARAGORN re-sheathes the SWORD.

EXT. DUNHARROW PLATEAU - NIGHT

ANGLE ON: As ARAGORN readies BREGO for leaving EOWYN
approaches ... her temper barely held in check.

 EOWYN
 Why are you doing this?

ARAGORN looks over his shoulder at her . . .

EOWYN (cont'd)
 The war lies to.the East. You cannot leave
 on the eve of battle. You cannot abandon         ;
 the men.

    ARAGORN
 Eowyn . . .

        � EOWYN
 We need you here -         ,
   (CONTINUED)

     Final Revision - October, 2003 70.
CONTINUED:


ARAGORN rounds on her ...

 ARAGORN
  Why have you come?

  EOWYN
       (hesitant)
  Do you not know?

ARAGORN looks at her sadly, not wanting to hurt her.

  ARAGORN
       (gentle)
  It is but a shadow and a thought that you
  love . . . I cannot give you what you seek.

EOWYN steps back at though STRUCK . . . she watches stricken as
ARAGORN leaves . . .

EXT. DUNHARROW PLATEAU'- NIGHT

ANGLE ON: ARAGORN leads his horse through the TENTS towards
the DIMHOLT ROAD.

A LIGHT FLARES ahead.of him . . .

ANGLE ON: A SHORT FIGURE steps out of the SHADOWS . . . PIPE in
hand.

  GIMLI
  And just where do you think you're off to?

ARAGORN looks at GIMLI - GRATEFUL for his COURAGE but
determined to go ALONE.

  ARAGORN
  Not this time ... This time you must stay,
  my friend.

  LEGOLAS O.S
  Have you learnt nothing of the stubbornness
  of Dwarves?

ANGLE ON: ARAGORN looks at LEGOLAS as he appears, leading his
HORSE - already SADDLED.
    (CONTINUED)

    Final Revision - October, 2003 71.
CONTINUED:


GIMLI steps closer to ARAGORN.

  GIMLI
  You might as well accept it - we're going
  with you, laddie.

ARAGORN shakes his head, smiling his acceptance.

ANGLE ON: ARAGORN, LEGOLAS and GIMLI as they slowly ride
towards the BACK of the PLATEAU . . . Past the ANCIENT
STANDING STONES that lead to the NARROW PASS.

EXT. DUNHARROW PLATEAU - NIGHT

ANGLE ON: THEODEN and GAMLING watch the RETREATING FIGURES of
ARAGORN, LEGOLAS and GIMLI ... ROHAN SOLDIERS emerge from
their tents, crestfallen to see ARAGORN leave.

ARAGORN, LEGOLAS and GIMLI disappear into the SHADOWS of the
MOUNTAINS. The ROHAN SOLDIERS murmur among themselves,
"What's happening?", "Where's he going?"

         GAMLING
          Lord Aragorn!

         ROHAN SOLDIER O.S.
          Why does he leave on the eve of battle?

         GAMLING
          He leaves because there is no hope.

CLOSE ON: THEODEN as he moves forward.

         THEODEN
          He leaves because he must.

          GAMLING
          Too few have come. We cannot defeat the
          armies of Mordor.

THEODEN
          No, we cannot . . .
    (surveying his frightened Men)
          But we will meet them in battle,
          nonetheless.

   Final Revision - October, 2003 72,



EXT. THEODEN'S TENT, DUNHARROW PLATEAU - DAWN

ANGLE ON: THEODEN looks at EOWYN who stands as if turned to
stone ... she is looking up at a LIGHTENING SKY ... The QUIET
before the MEN depart for WAR . . .

THEODEN
     (gentle)
I have left instruction: the people are to
follow your rule in my stead ... take up my
seat in the Golden Hall ... long may you
defend Edoras if the battle goes ill.

ANGLE ON: EOWYN turns to the KING ... her FACE a BLANK ...
She speaks without emotion.

EOWYN
What other duty would you have me do, my
Lord?

THEODEN moves towards her, taking up her HAND . . .

          THEODEN
    (quiet)
Duty? ... No, I would have you smile again -
not grieve for those whose time has come.

EOWYN slowly lifts her head . . .

          THEODEN (cont'd)
You shall live to see these days renewed.

CLOSE ON: THEODEN lifts EOWYN faces to look into her EYES . . .

          THEODEN (cont'd)
    (whisper)
          No more despair.

EXT. DIMHOLT ROAD - DAY

ANGLE ON: ARAGORN, LEGOLAS and GIMLI make their way up a.
GLOOMY CANYON, shadowed by BLACK FIR TREES. The shadowed
ridges of the DWIMORBERG MOUNTAIN rise BEFORE THEM.

It is a SPOOKY PLACE.
          (CONTINUED)

    Final Revision - October, 2003 73.
CONTINUED:


  GIMLI
  What kind of an army would linger in such a
  place?

 LEGOLAS
  One that is cursed ... Long ago the Men of
  the Mountain swore an oath to the last King
  of Condor - to come to his aid, to fight,
  but when the time came, when Condor's need
  was dire, they fled ... Vanishing into the
  darkness of the mountain ... And so Isildur
  cursed them - never to rest until they had
  fulfilled their pledge.

SILENCE surrounds them, there are no birds, no wind. Only the
OMINOUSLY MUFFLED THUD of their horses hooves on the dank FIR-
NEEDLES.    '

EXT. DIMHOLT GLEN - DAY

ANGLE ON: Before them, at the ROOT OF THE MOUNTAIN, a SHEER
WALL of ROCK towers . . .

          GIMLI
    (terrified whisper)
          The very warmth of my blood seems stolen
          away.

Within the walls, a creepy DARK DOOR gapes like a mouth of
night. SIGNS and FIGURES are carved above its WIDE ARCH.

          LEGOLAS
    (translating)
          The way is shut. It was made by those who
          are dead, and the Dead keep it. The way is
          shut.

AT THAT MOMENT: A CHILL WIND seems to rush out of the DOORWAY
. . . ARAGORN stares into the BLACKNESS, his HAIR BLOWING
WILDLY. The HORSES REAR and'BUCK'in terror, turning and
GALLOPING AWAY.

 ARAGORN
          Brego!


         (CONTINUED)

    Final Revision - October, 2003 74
CONTINUED:


The three HORSES DISAPPEAR ... ARAGORN turns resolutely
towards the DOORWAY . . .

 ARAGORN (cont'd)
      (steely resolve)
  I do not fear death ...

ANGLE ON: ARAGORN WALKING into the BLACKNESS.

LEGOLAS quickly follows . . . swallowed by the DARKNESS.

CLOSE ON: GIMLI left ALONE . . . He hesitates, struggling with hi
FEAR.

   GIMLI
  Well, this is a thing unheard of ... An Elf
  will go underground when a Dwarf dare not.
       (gritting his teeth)
  Oh! I ' d never hear the end of it!

GIMLI plunges into the TUNNEL behind the OTHERS!

EXT. DUNHARROW ENCAMPMENT - DAWN

MUCH ACTIVITY ... HORNS SOUND ... the ENTIRE CAMP is on the
MOVE ... fires are DOUSED, TENTS pulled down, HORSES saddled.

EXT. DUNHARROW PLATEAU - DAWN

ANGLE ON: THEODEN strides through the CAMP, EOMER at his SIDE.

          THEODEN
          We must ride light and swift. It's a long
          road ahead ... and man and beast must reach
          the end with the strength to fight.

ANGLE ON: MERRY . . . preparing a LITTLE PONY with a SADDLE and
SUPPLIES. He is wearing an OVERSIZED HELMET and ROHIRRIM
CLOTHING . . . he looks at once NERVOUS and EXCITED.

KING THEODEN breaks away from a COLUMN and rides up to MERRY.




         (CONTINUED)

         Final Revision - October, 2003 75,
CONTINUED:


   THEODEN (cont'd)
       (gently)
  Little Hobbits do not belong in war, Master
  Meriadoc!

 MERRY
  All my friends have gone to battle. I would
  be ashamed to be left behind!

  THEODEN
  It is a three day gallop to Minas Tirith.
  None of my Riders can bear you as a burden.

   MERRY
  But . . . I want to fight!

  THEODEN
  I will say no more.

KING THEODEN wheels his HORSE away . . .

MERRY is bitterly DISAPPOINTED. He stands, head down - a TINY
DEJECTED FIGURE - as the MIGHTY ROHIRRIM on their LARGE
HORSES ride by . . . a jangling sea of HELMETS, SHIELDS and
BANNERS.

SUDDENLY . . . MERRY is plucked off the ground! A SOLDIER has
snatched him by the collar ... and plonked him down on their
SADDLE!

CLOSE ON: MERRY twists around, looking up at the SOLDIER . . .
Beneath a HELMET and MAIL HOOD is . . .

. . . EOWYN, disguised as a MAN!

 EOWYN
     (grimly)
Ride with me.

   MERRY
My Lady!

CLOSE ON: MERRY'S face visible under the CAPE . . . looking
EXCITED!


   (CONTINUED)

     Final Revision - October, 2003 76,
CONTINUED: ( 2 )


 EOMER
      (shouting above the din)
 Move out - move out!

 THEODEN
 Ride! Ride now, for Gondor!

EXT. DUNHARROW VALLEY - DAWN

HIGH WIDE: The VALLEY FLOOR as THOUSANDS of HORSEMEN ride out
after their KING.

EXT. PELENNOR FIELDS/MINAS TIRITH - DAY

ANGLE ON: GREAT SIEGE TOWERS and CATAPULTS are ROLLING across
the PELENNOR FIELDS . . . Thousands of FLAMING TORCHES light
the snarling, slathering MORGUL ORCS . . . marching in RAGGED
RANKS.

ANGLES ON: Flowing torrents of ORCS stream past CAVE TROLLS,
beating the DRUMS OF WAR ... MINAS TIRITH lies ahead - only
TWO MILES AWAY!

INT. PATHS OF THE DEAD CAVERN - DAY

ANGLE ON: ARAGORN leads LEGOLAS and GIMLI into a WIDE CAVERN
. . . he WAVES HIS TORCH through the DARKNESS: ILLUMINATING a
HUGE, CAVERN . . .

A ghastly CRACKING NOISE, like stone being sundered, cuts
through the SILENCE.

 A GHOSTLY FIGURE step from the ROCK WALLS!

ANGLES ON: ARAGORN, LEGOLAS and GIMLI look on in HORROR, as a
MUMMIFIED SPECTRE looms before them: EYELESS SOCKETS ...
ROTTEN TEETH . . . a pale SICKLY GLOW . . . the KING OF THE DEAD!

FOG SWIRLS around as the GHOST SNARLS at ARAGORN ...

KING OF THE DEAD
 Who enters my domain?

ARAGORN moves forward ... unflinching . . .

(CONTINUED)

      Final Revision - October, 2003 77,
CONTINUED:


  ARAGORN
  One who will have your allegiance.

   KING OF THE DEAD
       (snarl)
  The dead do not suffer the living to pass ...

  ARAGORN
  You will suffer me!

The KING OF THE DEAD's'MALEVOLENT LAUGH echoes through the
CVS...
 AE

ANGLE ON: The FOG suddenly ROLLS BACK, forming a retreating
wall of GREY VAPOUR ... slowly, RANK upon RANK of SPECTRAL
WARRIORSare revealed! GHOULISH FACES . . . RUSTING WEAPONS . . .
TATTERED BANNERS.

WIDE ON: The FOG reveals a DEAD ARMY of MANY THOUSANDS ...
assembled around the CAVERN!

ANGLE ON: ARAGORN stares GRIMLY at the KING OF THE DEAD.

CLOSE ON: THE KING of the DEAD as he smiles evilly at ARAGORN
... ARAGORN holds his GAZE . . .

   KING OF THE DEAD        ,-
     '"
       (chilling)
  The way is shut . . .

THE KING of the DEAD moves relentlessly towards ARAGORN . . .

   KING OF THE DEAD (cont'd)
  It was made by those who are Dead and the
  Dead keep it . . .

WIDE: ARAGORN, LEGOLAS and GIMLI are now surrounded by~an        ".'
ARMY of the DEAD . . .

  KING OF THE DEAD (cont'd)
    The way is shut. Now, you must die.

ANGLE ON: LEGOLAS fires an ARROW at the KING OF THE DEAD . . .
it PASSES STRAIGHT THROUGH!


  (CONTINUED)

     Final Revision - October, 2003 78
CONTINUED: ( 2 )


ARAGORN keeps moving forward, his eyes locked on the SPECTRE.

 ARAGORN
      (desperate)
 I summon you to fulfil your oath!

ANGLE ON: The KING OF THE DEAD SNARLS and raises his DEADLY
SWORD above ARAGORN' S HEAD!

KING OF THE DEAD
     (raspy yell)
None but the King of Gondor may command me!

QUICK BEAT: ARAGORN RAISES ANDURIL . . .

With a TERRIFYING SHRIEK, THE KING of the DEAD SWEEPS his
SWORD towards ARAGORN' S HEAD!

SLOW MOTION: ARAGORN raises 'his SWORD in ANSWER . . . a LOW
WHISTLE as it SWEEPS through the AIR . . .

CLANG! The BLADE � OF ANDURIL clashes with the SPECTRAL SWORD
. . . the SHARP RING of METAL reverberates through the CAVERNS !



CLOSE ON: THE KING of the DEAD stares at ARAGORN in
DISBELIEF.

KING OF THE DEAD (cont'd)
     (fearful)
It cannot be - that line was broken!

ANGLE ON: ARAGORN grabs the SHOCKED GHOST by the NECK ...

ARAGORN holds the SHARP BLADE against the GHOST'S THROAT!

          ARAGORN
It has been remade!

SILENCE.

ARAGORN releases the KING OF THE DEAD . . . he ADDRESSES the
GHOST ARMY.

          (CONTINUED)

     Final Revision - October, 2003 79.
CONTINUED: ( 3 )


 ARAGORN (cont'd)
 Fight for us and regain your honour!

GHOSTLY FACES stare hollow-eyed at ARAGORN ...

  ARAGORN (cont'd)
      (yelling)
 What say you?

SILENCE.

 ARAGORN (cont'd)
 What say you?,   .

 GIMLI
 Aghh! Your wasting your time, Aragprn. They
 had no honour in life, they have none now
 in death.

  ARAGORN
      (yelling)
 I am Isildur's heir. Fight for me and I
 will hold your oath fulfilled. What say
 you?

EXT. PELENNOR FIELD/MINAS TIRITH - DAY

ANGLES ON: THOUSANDS of ORCS continue moving relentlessly
forward . . . Towards the WALLS of MINAS TIRITH.

EXT. MINAS TIRITH GATES - DAY

CLOSE ON: A GUARD yells down from the PARAPET above the HUGE
WOODEN GATE . . .

  GATE GUARD
      (yelling)
 Open the gate! Quick!

ANGLE ON: The HUGE GATE swings open, revealing . . . FARAMIR'S
badly wounded HORSE . . . dragging FARAMIR behind! Both the
HORSE and FARAMIR are impaled with ORC ARROWS!




(CONTINUED)

      Final Revision - October, 2003 80,
CONTINUED:


   IORLAS
       (shocked)
  Lord Faramir!

EXT. PELENNOR FIELDS/MINAS TIRITH - DAY

As CATAPULTS are prepared GOTHMOG rides through the ranks of
ORCS ...

INT. MINAS TIRITH, COURT OF THE KINGS - DAY

ANGLE ON: IORLAS and OTHER SOLDIERS arrive at the CITADEL
with FARAMIR'S UNCONSCIOUS BODY on a STRETCHER . . . PIPPIN
follows them.

          . he runs
CLOSE ON: DENETHOR EMERGES from the TOWER HALL .
towards his son . . .

    DENETHOR
  Faramir!

DENETHOR bends to the STRETCHER bearing his SON.

  DENETHOR (cont'd)
       (whisper)
  Say not that he has fallen . . .

  IORLAS
  They were outnumbered, none survived.

CLOSE ON: PIPPIN, devastated . . .

EXT. PELENNOR FIELDS/MINAS TIRITH - DAY

GOTHMOG turns to his LIEUTENANTS ...

 GOTHMOG
  Fear! The city is rank with it. Let us ease
  their pain. Release the prisoners!

    LIEUTENANT
  Catapults!

At his ORDERS, the GREAT CATAPULTS fire THWAT! THWAT! THWAT!

    Final Revision - October, 2003 81,



EXT. MINAS TIRITH STREETS - DAY

The ORC CATAPULTS do not fire rocks ...

HORROR sweeps through the streets of MINAS TIRITH as the
SEVERED HEADS of FARAMIR'S HORSEMEN land amongst the
SOLDIERS!

EXT. MINAS TIRITH COURT OF THE KINGS - DAY

DENETHOR looks down at FARAMIR'S UNCONSCIOUS BODY . . .

DENETHOR
My son is dead. My line is ended.

PIPPIN has run to FARAMIR and bends towards him ...

PIPPIN
     (touching Faramir's forehead)
He's alive!

DENETHOR
The House of Stewards has failed! . . .

PIPPIN
     (urgently)          ;
He needs medicine, my Lord!

          DENETHOR
          My line has ended.

          PIPPIN
    (urgently)
          My Lord!

ANGLE ON: DENETHOR slowly turning away . . . walking as if in a
TRANCE . . .

CLOSE ON: DENETHOR has reached the edge of the COURTYARD . . .
he STARES in SHOCKED DISBELIEF at the VISTA spread out BELOW:

HIGH WIDE ANGLE: A FULL VIEW of the ORC ARMY . . . from the TOP
of MINAS'TIRITH.



          (CONTINUED)

     Final Revision - October, 2003 82,
CONTINUED:


75,000 ORCS are spread out across the PELENNOR FIELDS like a
sea of black ANTS.

CLOSE ON: TROLLS load the CATAPULTS with ROCKS.

BATTERING RAMS and SIEGE TOWERS are hauled on CHAINS.
Thousands of flickering TORCHES give the army the look of a
moving city in the MURKY MORDOR TWILIGHT.

CLOSE ON: DENETHOR . . . struggling to regain the power of
speech!

  DENETHOR
       (rasping whisper)
  Rohan has deserted us!

ANGLE ON: A HUGE BOULDER smashes into the wall of MINAS
TIRITH.

WIDE ON: BOULDERS HURTLE from CATAPULTS across the fields
towards MINAS TIRITH.

 DENETHOR (cont'd)
  Theoden's betrayed me!

CLOSE ON: A BOULDER smashes into a BALCONY full of CIVILIANS.

CONFUSION and PANIC spreads amongst the SOLDIERS.

  DENETHOR (cont'd)
       (panicked scream)
  Abandon your posts!

CLOSE ON: PIPPIN, SHOCKED.

 DENETHOR (cont'd)

  Flee! Flee for your lives!

SUDDENLY: THWACK!

GANDALF'S STAFF smashes into the back of DENETHOR'S HEAD!
GANDALF grimly swings his staff again, CLUBBING DENETHOR to
the GROUND!


(CONTINUED)

        Final Revision - October, 2003 83.
CONTINUED: ( 2 )


ANGLE ON: GANDALF spins around and ADDRESSES the SOLDIERS:

      GANDALF
          (yell)
     Prepare for battle!!

EXT. MINAS TIRITH STREETS - DAY

ANGLE ON: GANDALF GALLOPS down the WINDING LABYRINTHINE STREETS
on SHADOWFAX . . . against the flow of FLEEING SOLDIERS.

     GANDALF
          (yelling)
     Return to your posts!

          .. .. ' CUT TO:

EXT. MINAS TIRITH BATTLEMENTS - DAY

ANGLE ON: SHADOWFAX bounds up STAIRS onto the LEVEL ONE
BATTLEMENTS ... GANDALF looks at the approaching ORC ARMY,
now less than 50 yards from the WALLS of the CITY!

     GANDALF
          (angry yell)
     Send these foul beasts into the abyss!

QUICK CUTS: MIGHTY WOODEN CATAPULTS positioned within the
walls of MINAS TIRITH are fired!

EXT. MINAS TIRITH - DAY

THWAT! THWAT! THWAT! CATAPULTS send their great ROCKS high
into the air, over the BATTLEMENTS!

Dizzying AERIAL SHOTS of huge BOULDERS flying up close to
CAMERA . . . then falling away towards the ORCS!

CRUNCH!! BOULDERS flatten ORCS. THWAT!! 100 more ROCKS . . .
THWAT!! another 1 0 0 ! ! The ORC FRONT RANKS are in disarray!

EXT. PELENNOR FIELDS /MINAS TIRITH - DAY  '
         .

A s t h e G R E A T B O U LD E R S l a n d a m o ng t h em ^ t he O R C s t a rt t o P A N IC !


  (CONTINUED)

     Final Revision - October, 2003 84
CONTINUED:


  GOTHMOG
  Stay where you are!

          INTERCUT WITH:

EXT. MINAS TIRITH BATTLEMENTS - DAY

GANDALF walks the BATTLEMENTS as the huge BOULDERS rain onto
the ORC ARMY below ...

          INTERCUT WITH:

EXT. PELENNOR FIELDS/MINAS TIRITH - DAY

GOTHMOG glances up at a WHISTLING SOUND - a huge BOULDER
hurtles towards him. He side-steps CALMLY out of the way ...
spitting on the BOULDER in CONTEMPT.

      CUT TO:

EXT. MINAS TIRITH BATTLEMENTS - DAY

SUDDENLY! 9 NAZGUL DIVE out of the DIM SKY, CLAD in BATTLE
ARMOUR!

ANGLES ON: SOLDIERS throw themselves down as the NAZGUL zoom
overhead, emitting their PIERCING SHRIEKS! GONDORIAN SOLDIERS
run for SHELTER in PANIC, covering their ears ...

CLOSE ON: PIPPIN COWERING . . .

   GANDALF
       (rallying)
  Stand to your posts! Do not give in to
  fear. Fight!

QUICK CUTS: MIGHTY WOODEN CATAPULTS positioned within the
walls of MINAS TIRITH are fired!

The NAZGUL circle LOW over the CITY, like VULTURES seeking
doomed men's flesh. SOLDIERS are plucked into the AIR by
SHRIEKING NAZGUL and dropped to their DEATHS hundreds of FEET
BELOW. TOWERS and BUILDINGS are DESTROYED. CHAOS as SOLDIERS,
WOMEN and CHILDREN DODGE falling MASONRY.


  (CONTINUED)

      Final Revision - October, 2003 85.
CONTINUED:


CLOSE ON: GONDORIAN SOLDIERS send a rain of arrows at the
approaching TOWERS and TROLLS.

 GANDALF (cont'd)
  Not at the towers! Aim for the trolls! Kill
  the trolls! Bring them down!

TOO LATE! The TOWERS reach the walls, their DOORS crashing
down, releasing ORCS directly onto the LOWER LEVELS.

As the ORC swarm from the TOWER, GANDALF realises PIPPIN has
come down from the CITADEL . . .

  GANDALF (cont'd)
  Peregrin Took - go .back to the citadel!

  PIPPIN
       (stupor)
  They called us out to fight . . .

PIPPIN looks on stunned, as a HUGE ORC leaps towards him . . .
GANDALF intercepts the BEAST, striking him with his STAFF ...

GANDALF
       (urgency)
  This is no place for a Hobbit!

GANDALF welds his STAFF, cutting through the attacking ORC
with EASE ... BEHIND him, an ORC prepares to cut down GANDALF
... PIPPIN instinctively slashes his SWORD at him.

ANGLE ON: GANDALF turns on PIPPIN, smiling despite himself.

 GANDALF (cont'd)
  Guard of the Citadel, indeed! Now, back up
  the hill - quickly! Quickly!

      "CUT TO:

EXT. PELENNOR FIELDS - DUSK

ANGLE ON: Out of BLACK SWIRLING BATTLE. SMOKE crawls an IRON
MONSTER! A MASSIVE WHEELED BATTERING RAM . . ' ' . 60 FEET HIGH and
150 FEET LONG . . . pushed by 20 huge MOUNTAIN TROLLS . . . a
MASSIVE IRON HEAD, cast in the likeness of a SNARLING WOLF!

   (CONTINUED)

      Final Revision - October, 2003 86.
CONTINUED:


... this is GROND ... the BATTERING RAM FROM HELL! The Ore
are chanting as the BEAST is wheeled closer and closer to the
GATES ...

  ORCS
  Grond! Grond! Grond!

EXT. MINAS TIRITH BATTLEMENTS - DUSK

CLOSE ON: GANDALF . . . blanching at the sight of this crawling
IRON MONSTER"'!

       CUT TO:

EXT. PASS OF CIRITH UNGOL, TUNNEL MOUTH - DAY

ANGLE ON: GOLLUM leads FRODO up a LONG RAVINE between COLUMNS
of TORN and WEATHERED ROCK.

AHEAD is a GREAT GREY WALL, a last huge mass of mountain-
stone . . . and in the SHADOWS at the base of the TOWERING ROCK
lies a TUNNEL.

FRODO reacts to the FOUL STENCH coming out of the BLACK HOLE.

  FRODO
       (exhausted)
  What is this place?

  GOLLUM
  Master must go inside the tunnel.

  FRODO
  Now that I'm here, I don't think I want to.

CLOSE ON: SMEAGOL sensing his PLAN unravelling. Everything
depends on FRODO going inside the TUNNEL

  SMEAGOL
  It's the only way.
       (GOLLUM;- slyly)
  Go in - or go back.

FRODO stares into the darkness . . .


 (C ON T IN U ED )

      Final Revision - October, 2003 87.
CONTINUED:


  FRODO
       (under his breath)
  I can't go back.

CLOSE ON: GOLLUM, his sparse oily hair hanging like rank weed
over his hooded eyes ...

Drawing a DEEP BREATH, FRODO follows GOLLUM into the TUNNEL.

INT. SHELOB'S TUNNEL - DAY

FRODO nearly GAGS

          FRODO
          What's that smell?

  GOLLUM
       (lying)
  Orcses filth! Orcses come in here
  sometimes.

They continue on, deep into the DARK TUNNEL . . . FRODO is
feeling his way in the dark, following the SOUND ,of GOLLUM'S
scampering..,;
,.
 .

          GOLLUM O.S..
    (disembodied)
          Hurry!

FRODO follows the sound of GOLLUM's voice. He is VERY TIRED.

          GOLLUM O.S.(cont'd)
    (disembodied)        ;�
   ��
    �
          This way.

FRODO cannot see GOLLUM in the MURKY TUNNEL . . .

  FRODO
  Smeagol!

          GOLLUM O.S.
    (disembodied)
          Over here.



(CONTINUED)

         Final Revision - October, 2003 88,
CONTINUED:


FRODO slips as he tries to follow the voice . . . He puts his
HAND to the WALL to STEADY HIMSELF but quickly YANKS it away
... STRANDS of a WHITE THREAD stuck to his HAND.

  FRODO
  It's sticky . . . What is it?

GOLLUM is nowhere to be seen ... only his voice echoes back
down the LABYRINTH of TUNNELS.

   GOLLUM O.S.
  You will see . . . Oh, yes . . . You will see.

FRODO FREEZES!

  FRODO
       (nervous)
  Smeagol! Smeagol!

NO ANSWER, no echo, not even a tremor in the air.

  FRODO (cont'd)
       (panicked)
  Smeagol!

CLOSE ON: FRODO realises with HORROR that GOLLUM has deserted
him!

   FRODO (cont'd)
       (whisper)
  Sm. . .
   a

CLOSE ON: FRODO breathing hard . . . passing all manner of
creatures, trussed up in evil WEB-LIKE material . . . .

A BUBBLING HISS can be heard . . . There is a CREAKING as some
great JOINTED THING moves with slow purpose in the DARK ...

FRODO begins to run in BLIND PANIC ...

        CUT TO:

     Final Revision - October, 2003 89.



EXT. CIRITH UNGOL STAIRS - DAY

SAM stumbles blindly down the ANCIENT STAIRS, reckless and
uncaring, his face pale and devastated.

CLOSE ON: SAM'S FOOT slips . . .

... SUDDENLY, as if the ground has given way beneath him, SAM
is slipping and sliding dangerously OUT OF CONTROL.

ANGLE ON: SAM thudding into a LARGE ROCK, which saves him.
from tumbling headlong over the PRECIPICE.

Something catches SAM'S EYE . . . he stares, barely breathing.

CLOSE ON: A package of LEMBAS BREAD . . .

ANGLE ON: SAM looking BACK UP the LONG STEEP STAIR . . .

    CUT TO:

INT. SHELOB'S TUNNEL - DAY

FRODO is running BLINDLY . . . He falls, trapped in the sticky
substance which CLINGS to him. As he lays on the ground,
unable to move, a VOICE comes to him as if froma distant-;,,
memory . . .

          GALADRIEL V/0
I give you the light of Earendil - our most
beloved star. May it be a light for you in
dark places when all other lights go out.

CLOSE ON: FRODO fumbles in his JACKET, FEAR growing in him
. . . he pulls out the GLASS PHIAL - his GIFT from GALADRIEL -
he holds it aloft.

FRODO
     (stronger)
Aiya Earendil Elenion Ancalima!

The PHIAL flickers ... kindles into a SILVER FLAME - a BRIGHT
RADIANT STARLIGHT!



(CONTINUED)

  Final Revision - October, 2003 90.
CONTINUED:


LOW ANGLE ON: The LIGHT instantly REVEALS a HUGE LOATHSOME
SPIDER . . . towering over FRODO!

CLOSE ON: SHELOB the SPIDER HISSES at the LIGHT! TWO great
clusters of many-windowed EYES protrude from her bulbous
head. Her LEGS are bent, with a 12 FOOT SPAN and HAIRS that
stick out like steel spines. Her HUGE, SWOLLEN BODY, a vast
bloated bag, sways and sags between her legs. Her age-old
BLACK HIDE is knobbly and pitted, blotchy with LIVID MARKS
. . . but her belly underneath is PALE and LUMINOUS.

SHELOB beats the air with her FORELEGS.

ANGLE ON: Calling up all his remaining STRENGTH and
RESOLUTION, FRODO forces his LEGS to MOVE . . . he backs away -
keeping his EYES on SHELOB.

SHELOB crawls SLOWLY towards him ... then, with sudden .
hideous SPEED, she ATTACKS!

She lashes out with her FRONT LEGS ... FRODO is flung back
... the GLASS PHIAL clatters to the TUNNEL FLOOR, casting an
eerie LOW LIGHT.

SHELOB squats above FRODO, her EYE CLUSTERS fidgeting with
hideous delight, gloating over a prey trapped beyond all hope
of escape.

SUDDENLY! FRODO draws STING! He slashes wildly at the GIANT
SPIDER . . . hewing off the TIP of A LEG!

SHELOB SPASMS . . . a WILD BLUR of thrashing LEGS!

ANGLE ON: FRODO leaps to his feet and RUNS - not even pausing
to pick up the PHIAL of LIGHT!

TRACKING BACK: with FRODO as he careers blindly down NARROW
TUNNELS, gasping in the CHOKING AIR ... looking back over his
shoulder for any sign of SHELOB.

ANGLE ON: FRODO sees the TUNNEL EXIT ahead . . .

. . . just as he runs straight into a great COBWEB!



          (CONTINUED)

   Final Revision - October, 2003 91.
CONTINUED: ( 2 )


CLOSE ON: FRODO . . . eyes wild with fear . . . as he tries to
wrench STING free of the STICKY WEB.

GOLLUM O.S.
     (sing-song)
 Naughty little fly,
 Why does it cry?

ANGLE ON: GOLLUM on the other side of the WEB . . .

 GOLLUM
 Caught in a web
 Soon you'll be . . .
 . ?. Eaten!

ANGLE ON: FRODO as he SLASHES WILDLY with STING. The SHINING
BLADE of STING as it hacks through the FIBROUS STRANDS. They
whip and snap back into FRODO'S FACE as he cuts himself free.

ANGLE ON: Back up the TUNNEL - lit by the LIGHT OF GALADRIEL -
SHELOB'S HEAVING SHADOW approaches . . .

CLOSE ON: GOLLUM watches in mounting disbelief as STING
slashes through the WEB ... DISBELIEF turns to FEAR as SHELOB
gets closer and closer, GOLLUM quickly turns and BOLTS::.. . . .

FRODO hacks at the WEB and with a last desperate LUNGE, frees
himself ... STING is caught in the WEB ... FRODO leaves the
SWORD and THROWS HIMSELF through a narrow CREVICE . . .

EXT. PASS OF CIRITH UNGOL - DAY

ANGLE ON: FRODO stumbles out of SHELOB'S LAIR . . . Tumbling
onto COLD ROCK.

ANGLE ON: FRODO covered in COBWEBS, wild-eyed and drenched in
SWEAT . . . - H e looks up as GOLLUM lunges at him.  ;:

 GOLLUM
Got away did it, Precious? Not this time,
not this time!

GOLLUM and FRODO fight ... Rolling on the GROUND towards the
EDGE of a PRECIPICE . . .

          (CONTINUED)

      Final Revision - October, 2003 92.
CONTINUED:


FRODO pins GOLLUM on the ground, hands around his throat.

 SMEAGOL
      (pleading)
  It wasn't us! It wasn't us! Smeagol
  wouldn't hurt Master.

ANGLE ON: FRODO'S fingers squeeze tighter around GOLLUM'S
THROAT.

  SMEAGOL (cont'd)
  Smeagol promised. You must believe us. It
  was the Precious - the Precious made us to
  do it.

FRODO has a sudden moment of SELF REALISATION and releases
GOLLUM, horrified at his VIOLENCE.

ANGLE ON: GOLLUM cowering back . . . COUGHING and SPLUTTERING.

ANGLE ON: FRODO looking at SMEAGOL, in SHOCK, he gets to his
FEET.

  FRODO
       (shaky)
  I have to destroy it, Smeagol. I have to
  destroy it for both our sakes.

SMEAGOL stares at FRODO in DISBELIEF . . . in a FURY he LUNGES
at FRODO who falls backwards, dangerously close to the edge
of the PRECIPICE - GOLLUM tumbles over FRODO's BODY and FALLS
to the bottom of the RAVINE ...

EXT. PASS OF CIRITH UNGOL - NIGHT

FRODO, overcome with EXHAUSTION, stumbles down the steep
stairs of CIRITH UNGOL . . . He is full of REMORSE at his
TREATMENT of SAM ...

   FRODO
  I'm so sorry, Sam . . .

FRODO falls t o his knees --



 (CONTINUED)

        Final Revision - October, 2003 93
CONTINUED:


  FRODO (cont'd)
  . . . so sorry ...

EXT. FRODO'S DREAM, LOTHLORIEN - DAY

CLOSE ON: FRODO lands on SOFT GREEN GRASS.

SUN DRENCHED IMAGES: Of trees . . . of fields . . . of LOTHLORIEN
�*�



HAZY IMAGE: GALADRIEL walking towards him, BARE-FOOT on the
GR SS . . .
  A

 GALADRIEL V/0
  This task was appointed to you, Frodo of
  the Shire. If you do not find a way ... no-
  one will.

GALADRIEL leans down towards FRODO, OFFERING her hand ... for
a beat, FRODO stares at her ... torn, not wanting to go on,
wanting to lie down . . . But he knows what he must do.

ANGLE ON: FRODO . . . as he is LIFTED to HIS FEET.

ANGLE ON: FRODO - once again in the dark, rank, tunnels of
the PASS of CIRITH UNGOL . . . He goes on.

      CUT TO:

EXT. MINAS TIRITH STREETS - NIGHT

ANGLES ON: FLAMING MISSILES rain down on the CITY!

A DEEP BOOM!

GROND thuds against the MINAS TIRITH GATE . . . sending a -:
VIBRATION running through the city!   ;:

ANGLE ON: GANDALF, on SHADOWFAX, leads SEVERAL HUNDRED
GONDORIAN FOOT SOLDIERS down through the streets.

  GANDALF
  To the Gates! Man the Gates!

      CUT TO:

    Final Revision - October, 2003 94



EXT. MINAS TIRITH, COURT OF THE KINGS - NIGHT

PIPPIN watches as FARAMIR'S UNCONSCIOUS BODY is carried on
the STRETCHER by DENETHOR'S SERVANTS lead by DENETHOR . . . it
has the atmosphere of a FUNERAL.

INT. MINAS TIRITH, STEWARD'S TOMB - NIGHT

ANGLE ON: An IRON DOOR creaks OPEN . . . FARAMIR'S PROCESSION
enters a WIDE VAULTED CHAMBER.

The LANTERN LIG HT throws great SHADOWS upon the SHROUDED
WALLS of a wide  VAULTED CHAMBER. ROW upon ROW of MARBLE TOMBS
are visible in  the DIM LIGHT. Upon each TOMB lies a SLEEPING
FORM, carved in  STONE, hands folded.

DENETHOR speaks in a HUSHED VOICE . . .

 DENETHOR
     (whisper)
No tomb for Denethor and Faramir. No long
slow sleep of death embalmed . . . we shall
burn - like the heathen kings of old!

The SERVANTS place FARAMIR'S UNCONSCIOUS BODY on a STONE
TABLE in the centre of the CHAMBER. They stand, heads bowed
. . . as MOURNERS beside a bed of death.

DENETHOR turns to his SERVANTS.

 DENETHOR (cont'd)
Bring wood and oil . . .

  CUT TO:

EXT. MINAS TIRITH GATES - NIGHT

BOOOMM The GATE SPLINTERS under GROND'S mighty weight . . .
Behind the GATES the GONDORIAN FOOT SOLDIERS are FEARFUL ...

GANDALF rallies the line of BOWMEN as they wait in front of
the GREAT DOORS ... their COURAGE wavering with each CRASHING
B OW . . .
 L    .



         (CONTINUED)

     Final Revision - October, 2003 95.
CONTINUED:


  GANDALF
       (commanding)
  Steady! Steady!

SUDDENLY the FEARSOME HEAD protrudes into the MINAS TIRITH!

 GANDALF (cont'd)
  You are soldiers of Gondor! No matter what
  comes through that gate you will stand your
  ground!

Within MOMENTS the GATE is smashed and GIANT CAVE TROLLS
enter into the FIRST CIRCLE of MINAS TIRITH, under the
archway that no enemy had ever passed!

  GANDALF (cont'd)
       (yelling)
  Fire!

ROWS of ARCHERS fire off a VOLLEY of ARROWS but the TROLLS
continue to SMASH the FOOT SOLDIERS with their giant CLUBS
... ORCS swarm through the OPENING and the PITCHED, HAND-TO-
HAND BATTLE spills into FLAMES and BLACKENED, SMOULDERING
BUILDINGS . . . through the streets of MINAS TIRITH.

ANGLE ON: With a ROAR, GANDALF leads a COUNTER ATTACK on
SHADOWFAX, followed by SEVERAL HUNDRED GONDORIAN FOOT " "
SOLDIERS!

THOUSANDS OF ORCS swarm in through the CITY GATES ... the
FIRST LEVEL is breached!

    CUT TO:

EXT. PASS OF CIRITH UNGOL - DAY

ANGLE ON: FRODO STAGGERS through the PASS OF CIRITH UNGOL ...
the weight of the RING, dragging at his neck.

He MOVES FORWARD, fueled by a GRIM RESOLVE ...

ANGLE ON: FRODO starts climbing a STONE STAIRCASE that climbs
through a NARROW PASS ... TALL PEAKS rise on either side,
like pillars holding up a sagging sky.


          (CONTINUED)

   Final Revision - October, 2003 96.
CONTINUED:


AHEAD is the SUMMIT of CIRITH UNGOL ... and an ORC WATCH
TOWER! A FAINT LIGHT glows from within the STONE TOWER . . .
the PATH over the SUMMIT is in FULL VIEW of the ORCS.

FRODO stays CLOSE to the ROCK WALL, masked by SHADOWS.

LOW ANGLE: Behind FRODO, SHELOB APPEARS! With hideous
STEALTH, she follows FRODO ...

ANGLE ON: FRODO slowly climbing the STONE STAIRS . . . his GAZE
and CONCENTRATION on the ORC TOWER. Behind him, SHELOB
lurches into a HORRIBLE SCUTTLE down the SHEER ROCK FACE.

CLOSE ON: FRODO suddenly senses the LURKING MALICE . . . he
SPINS AROUND: Before he can react, SHELOB VICIOUSLY STABS
FRODO in the NECK with her monstrous abdominal STINGER!

FRODO instantly goes LIMP . . . SHELOB'S LEGS   catch him as he
     around him. With
falls ... she quickly starts WEAVING COBWEBS
great dexterity, she tumbles the LITTLE HOBB    IT over and over
in her LEGS, binding him in WEB from HEAD to     TOE!

SUDDENLY!... The RAZOR SHARP EDGE of a SWORD comes into shot.

REVEAL ON: SAMWISE GAMGEE stands before the GIANT SPIDER -
STING clutched in one hand, the SHINING PHIAL in the other!

SAM
Let him go, you filth!

SHELOB HISSES at SAM . . . DROPPING FRODO . . . he ROLLS down the
STAIRS in his WEB COCOON.

          SAM (cont'd)
          You will not touch him again!

SAM moves forward, a fell light in his normally friendly eyes


          SAM (cont'd)
          Come on and finish it!

SAM SWINGS the small sword . . . SLASHING upward!



         (CONTINUED)

     Final Revision - October, 2003 97
CONTINUED: (2)


ANGLE ON: SHELOB HISSES and REARS above SAM, her STINGER
dribbling with VENOM!

SAM ducks inside the arch of her LEGS and STABS STING into
one of her EYE CLUSTERS!

CLOSE ON: SHELOB SCREAMS, her MANDIBLES thrashing wildly,
GREEN OOZE trickling from her WOUNDED EYE.

With HIND LEGS, SHELOB picks SAM off the ground and TOSSES
him BACKWARDS! SAM lands heavily . . . and SHELOB POUNCES!

ANGLE ON: SHELOB heaves the great bag of her BELLY high above
SAM'S HEAD. As she splays her legs to drive her huge bulk
down on him, SAM lifts the ELVEN BLADE above his head,
holding it with TWO HANDS.

STING slides into SHELOB'S SOFT UNDERBELLY! A SHUDDER runs
through her! HEAVING up. again, she wrenches herself away from
the PAIN ... her LIMBS writhing beneath her.

ANGLE ON: JERKING and QUIVERING, SHELOB crawls to her HOLE,
leaving a trail of GREEN-YELLOW SLIME. She SQUEEZES down the
HOLE and DISAPPEARS ... the SOUND of her BUBBLING MISERY
fades.     . :

ANGLE ON: SAM RACES TO FRODO . . .

 SAM (cont'd)
     (worried)
Mr Frodo!  .

CLOSE ON: SAM RIPS COBWEBS away from FRODO'S HEAD . . . his
FACE is DEATHLY PALE.

SAM (cont'd)
     (panicking)
Oh no! Frodo!

CLOSE ON: FRODO'S PALE, LIFELESS FACE.

SAM (cont'd)
Mr Frodo! Wake up!

FRODO'S head LOLLS LIFELESSLY in SAM'S ARMS.

(CONTINUED)

     Final Revision - October, 2003 98.
CONTINUED: ( 3 )


SAM (cont'd)
     (desperate whisper)
Wake up . . . don't leave me here alone.
Don't go where I can't follow. Wake up!

CLOSE ON: FRODO STARING, UNMOVING.

 SAM (cont'd)
     (numbly)
Not asleep ... Dead.

SAM lays his FACE on FRODO'S CHEST . . . WEEPING SOFTLY.

CLOSE ON: STING'S BLADE GLOWS BLUE!

SOUNDTRACK: TRAMPING FEET approach . . . CLINKING METAL . . .
HARSH SHOUTS!

CLOSE ON: SAM looks up . . . looks back down FRODO.

CLOSE ON: SAM looks up at the ORC TOWER and then at STING
which is glowing BLUE! ORCS approach - SAM must make a
decision.

ANGLE ON: A SMALL PARTY of ORCS and URUK-HAI heading down the
STAIRS from the WATCH TOWER! . . . SHAGRAT leads the URUK-HAI,
and GORBAG leads the ORCS.

GORBAG spies FRODO'S BODY . . .

GORBAG
What's this? Looks like Old Shelob's been
having a bit of fun!

SHAGRAT
Killed another one, has she?

ANGLE ON: GORBAG peer curiously at FRODO as he leans down and
pokes at FRODO'S LIFELESS BODY.

GORBAG
No . . . this fellow ain't dead.

CLOSE ON: SAM, hidden:in a rock crevice, as SHOCK sweeps
across his FACE!
  ,.         (CONTINUED)

    Final Revision - October, 2003 99.
CONTINUED: ( 4 )


 SAM
      (to himself)
 Not dead!

 GORBAG
      (excited).
 She jabs them with her stinger and they go
 as limp as a boned fish. Then she has her
 way with them. That's how she likes to feed
 - fresh blood.
      (yelling)
 Get him to the Tower!

 SAM
 Samwise, you fool!

ANGLE ON: The ORCS GRUNT as they lift FRODO . . . and CARRY him
back towards the WATCH TOWER.

 ORC 2
 This fellow will be awake in a few hours.

 GORBAG
 Then he'll wish he'd never been born.

ORC LAUGHTER . . . FRODO is carried up the steep STAIRS .;.. .

     CUT TO:

INT. MINAS TIRITH/STEWARD'S TOMB - NIGHT

FROM the SHADOWS PIPPIN watches, aghast, as FARAMIR is lain
on a FUNERAL PYRE . . .

CLOSE ON: DENETHOR kisses FARAMIR'S sweating, FEVERED brow.

DENETHOR
The house of his spirit crumbles! He is
burning ... already burning.         7

ANGLE ON: BUNDLES of DRIED FIREWOOD are being stacked around
FARAMIR'S BODY.

ANGLE ON: PIPPIN, rushes forward, desperately PULLING the
FIREWOOD AWAY!
 (CONTINUED)

       Final Revision - October, 2003 100,
CONTINUED:


   PIPPIN
       (yelling)
  He's not dead! He's not dead!

DENETHOR grabs PIPPIN by the collar! He roughly carries him
towards the door.

  PIPPIN (cont'd)
  No! No! No! He's not dead. No!

   DENETHOR
       (menacing)
  Farewell Peregrin, son of Paladin . . . I
  release you from my service ...

DENETHOR throws PIPPIN outside!

  DENETHOR (cont'd)
  Go now and die in what way seems best to
  you.

DENETHOR SLAMS the DOOR SHUT!

   DENETHOR O.S
       (ordering)
  Pour oil on the wood!

       CUT TO:

EXT. MINAS TIRITH STREETS - NIGHT

ANGLE ON: PIPPIN RACES down the STEEP STREETS . . . passing
SOLDIERS running back from the BURNING CITY. GREAT BALLS of
FIRE are hurtling through the air . . . The city is in CHAOS.

   PIPPIN
       (yelling)
  Gandalf? ... Gandalf?

AMIDST the FLEEING SOLDIERS ...

  GANDALF
  Pull back - to the second level! Hurry! Get
  the women and children out of here - get
  them out!
   (CONTINUED)

   Final Revision - October, 2003 101.
CONTINUED:


PIPPIN desperately pushes against the TIDE of SOLDIERS
retreating from the FIGHTING.

       INTERCUT WITH:

EXT. PELENNOR FIELDS - NIGHT

GOTHMOG turns to his SECOND LIEUTENANT ...

  GOTHMOG
  Move into the city ... Kill all in your
  path.

       INTERCUT WITH:

EXT. MINAS TIRITH STREETS

As ORC run through the STREETS, MEN, WOMEN, and CHILDREN flee
. . . The PITCHED BATTLE continues . . .

  GANDALF
  Fight! Fight for your lives!

SUDDENLY! in the midst of the BATTLE, GANDALF turns . . .
SHRILL and CLEAR come the sounds of DISTANT HORNS! Off the
SIDE of MOUNT MILLDOLLUIN, they dimly ECHO - WAR HORNS of the
west ... ROHAN HAS COME!

      CUT TO:

EXT. PELENNOR FIELDS - DAWN

GOTHMOG turns at the sound of the DISTANT HORNS . . .    :


WIDE ON: 6000 HORSEMEN, lead by THEODEN and EOMER, step up to
the SKYLINE . . .

ANGLE ON: MINAS TIRITH lies less than a MILE AWAY, down a
gentle slope. Over 50,000 ORCS are swarming around the base
of the city . . . thick BLACK SMOKE belches from within it.

CLOSE ON: MERRY BLANCHES with FEAR . . . EOWYN puts a
comforting hand on his shoulder.



 (CONTINUED)

    Final Revision - October, 2003 102,
CONTINUED:


  EOWYN
       (whisper)
  Courage, Merry ... courage for our friends


Ont he BATTLE FIELD GOTHMOG walks among his troops ...

 GOTHMOG
  Form ranks you maggots! Form ranks! Pikes
  in front, lances behind.

The ORCS PREPARE for BATTLE.

ANGLE ON: THEODEN gallops in front of his ARMY, ISSUING
URGENT ORDERS to his CAPTAINS:

  THEODEN
       (urgent yells)
  Eomer! Take your Eored down the left flank
  . . . Gamling! Follow the King's banner down
  the centre. Grimbold, take your company
  right after we pass the wall. Forth and
  fear no darkness!

CLOSE ON: THEODEN rides to the front of his ARMY. He rises in
his stirrups, TALL and PROUD, yelling in a clear, LOUD VOICE


  THEODEN (cont'd)
       (stirring call)
  Arise, arise, Riders of Theoden! Spears
  shall be shaken, shields shall be
  splintered . . . a sword day, a red day ^ere
  the sun rises!

ANGLE ON: A RAY of SUNLIGHT escapes through the BLACK CLOUDS,
bathing the ROHIRRIM in GOLDEN LIGHT. WEAPONS and ARMOUR
GLEAMS . . . as 6000 HORSEMEN hold their SPEARS aloft!

Below, on PELENNOR FIELD, the ORC kneel and raise their
LANCES in READINESS ...

ANGLE ON: EOWYN, her arm around MERRY before her . . .



  (CONTINUED)

Final Revision - October, 2003 103,
CONTINUED: ( 2 )


   EOWYN
        (terrified)
   Whatever happens, stay with me. I'll look
   after you.

MERRY looks on in SHOCK ...

ANGLE ON: As THEODEN rides past the ranks of SOLDIERS he runs
his LANCE along their SPEARS ... The noise echoes through the
RANKS as the WEAPONS of other RIDERS CLATTER in response ...

   THEODEN
        (stirring call)
   Ride now, ride now, ride, ride for ruin and
   the world's ending!

T H EO DE N f ac es hi s E NE MY !

       THE ODEN ( cont'd )
   Death!

   ROHIRRIM
        (6000 voices)
   Death!         ... ..

CLOSE ON: MERRY is swept up in the emotion . .. he whips out
his LITTLE SWORD!

       THEODEN
   Death!

       MERRY
   Death!

       EOWYN
   Death!

   THEODEN
        (yelling)
   Death! Forth Eorlingas!

ALL the HORNS of the ROHIRRIM burst BLAST upon BLAST!




       (CONTINUED)

    Final Revision - October, 2003 104
CONTINUED: ( 3 )


ANGLE ON: The 6000 ROHIRRIM move off, a great WALL of HORSES
and SPEAR POINTS, building up to a GALLOP like a rising tide,
as they CHARGE TOWARDS THE 50,000 ORCS!

ANGLE ON: MERRY, wind blowing his hair, EOWYN'S ARM around
his chest . . . as he YELLS at the top of his lungs !

ANGLE ON: GOTHMOG marshalling his troops.

  GOTHMOG
  Fire!

The first VOLLEY of ARROWS hit the ROHAN SOLDIERS . . . The
charge continues . . .

  THEODEN
  Charge !

The second VOLLEY . . . GOTHMOG watches in HORRIFIED AWE as the
ROHAN ADVANCE CONTINUES . . . SUDDEN FEAR runs through the ORC
and URUK-HAI assembled on PELENNOR FIELD . . . The ROHAN charge
like MEN POSSESSED!

ANGLE ON: The WALL o    f ROHIRRIM HORSES and SPEARS is seemingly
unstoppable! Entire     ORC COMPANIES vanish under their hooves,
like sand beneath a     foaming breaker, as they RACE towards the
MAIN BODY of the ORC     ARMY!

ANGLES ON: ORC ARCHERS fire into the thundering ROHIRRIM . . .
ORC SPEARS  LOWER . . . then SUDDENLY the ROHIRRIM crash into
the ORCS a nd the screen is FILLED with hacking, SLASHING
SWORDS and CLASHING SHIELDS . . .

...    A JAW-DROPPING SIGHT!

EXT. MINAS TIRITH STREETS - DAWN

ANGLE ON: PIPPIN rushes towards GANDALF, dodging FLAMING
DEBRIS.

  PIPPIN
       (panicked yell)
  Gandalf!

GANDALF wheels around on SHADOWFAX . . .
(CONTINUED)

  Final Revision - October, 2003 105.
CONTINUED: ( 4 )


 PIPPIN (cont'd)
      (breathless)
 Denethor has lost his mind! He's burning
 Faramir alive!

GANDALF pulls PIPPIN onto SHADOWFAX.

 GANDALF
 Come! Quickly!

EXT. PELENNOR FIELDS - DAWN

The ROHAN charge is decimating the ENEMY!

    CUT TO:

INT. MINAS TIRITH STEWARD'.S TOMB - DAWN

LOW ANGLE POV: DENETHOR standing on the table astride
FARAMIR, pouring OIL over his OWN HEAD . . . It runs through
his hair and down his face, quickly soaking his ROBES.

CLOSE ON: FARAMIR, his eyes flicker open. As he tries to FOCUS
through his delirium, OIL splashes onto his CHEST and FACE.

 DENETHOR  ,-
 Set a fire in our flesh!

BUNDLES of OIL-SOAKED wood are STACKED all around them.

SERVANTS are holding FLAMING TORCHES, awaiting their orders
... DENETHOR nods to them:

The SERVANTS approach the PYRE, TORCHES held firmly.

AT THAT MOMENT: GANDALF and PIPPIN burst into the HALLOWS,
astride SHADOWFAX!

 GANDALF
      (yelling)
 Stay this madness!

The fearful SERVANTS back away from the PYRE ...



(CONTINUED)

      Final Revision - October, 2003 106,
CONTINUED:


CLOSE ON: With a ROAR, DENETHOR SNATCHES a FLAMING TORCH ...
and HURLS it at the PYRE!

WHOOSH! The PYRE IGNITES!

ANGLE ON: GANDALF GALLOPS toward the PYRE, knocking DENETHOR
to his FEET ... PIPPIN LEAPS from SHADOWFAX onto the BURNING
PYRE!

With a desperate strength, PIPPIN pushes FARAMIR off the
BURNING PYRE ... they tumble down the BUNDLES of WOOD, onto
the FLOOR! PIPPIN douses FLAMES on FARAMIR'S clothing.

DENETHOR SCREAMS with RAGE!

  DENETHOR
  No! Do not take my son from me!

DENETHOR leaps ACROSS THE PYRE, RIPPING and TUGGING at
PIPPIN! FIRE quickly spreads up DENETHOR'S OIL-SOAKED BACK as
he hauls PIPPIN off FARAMIR!

ANGLE ON: SHADOWFAX rears up and STRIKES at DENETHOR who
falls back onto the PYRE .

CLOSE ON: DENETHOR . . . he looks into his SON'S eyes . . . for a
BRIEF MOMENT SANITY returns.

     DENETHOR (cont'd)
        (whisper)
  Faramir . . .

ANGLE ON: FLAMES begin to ENGULF DENETHOR . . .

CLOSE ON: GANDALF pulls PIPPIN to safety . . . they look in
HORROR as . . .

SUDDENLY! DENETHOR lurches off the PYRE! Now a SCREAMING,
unguided BALL OF FLAME, he runs across the CHAMBER,
disappearing out of the door!




 (CONTINUED)

   Final Revision - October, 2003 107.
CONTINUED: ( 2 )


  CANDALF
      (grimly)
 So passes Denethor, Son of Ecthelion.

      CUT TO:

EXT. MINAS TIRITH - DAY

DENETHOR runs across the WHITE COURT atop MINAS TIRITH ...
and PLUMMETS straight over the 700 FOOT SHEER DROP into the
FLAMING CITY below!

EXT. PELENNOR FIELDS - DAY

PAN OFF: DENETHOR'S DEATH PLUNGE to the ROHIRRIM gaining the
upper hand - VAST NUMBERS of ORCS are SLAIN, or are FLEEING!

 EOMER
 Drive them into the river!

THEODEN STANDS PROUD in his saddle, YELLING to his ROHIRRIM!

  THEODEN        .
      (yelling)
 Make safe the city!

CLOSE ON: THEODEN . . . his look of JOY turns to HORROR! "

ANGLE ON: Across the VAST SEA of BATTLE come ...

. . . 20 MUMAKIL! MASSIVE elephant-like CREATURES, each
carrying a WAR-TOWER, packed with HARADRIM ARCHERS!

ANGLE ON: ROHIRRIM RIDERS PANICKING.

CLOSE ON: THEODEN on his HORSE, CIRCLING AMONGST THEM.

 THEODEN (cont'd)
 Reform the line...Reform the line!

ANGLE ON: ROHIRRIM HORSES MOVING BACK INTO LINE.

 THEODEN (cont'd)
      (to GAMLING)
 Sound the charge!
 (M�RE)    (CONTINUED)

     Final Revision - October, 2003 108
CONTINUED:
  THEODEN (cont'd)
       (sword raised)
  ... Charge!

ANGLE ON: ROHIRRIM RIDERS CHARGE TOWARDS THE LINE OF MUMAKIL!

ANGLES ON: The MUMAKIL     BELLOW as they are goaded into war,
driven mercilessly by     their brutal HARADRIM MASTERS. They
LUMBER into the SEA of     MEN, crushing RIDERS and HORSES beneath
their MASSIVE FEET! Th    eir SPIKED TUSKS swing wildly, sweeping
and impaling RIDERS!

HARADRIM ARCHERS are sending a RAIN of ARROWS into the
PANICKING ROHIRRIM!

EOWYN and MERRY are THROWN from their HORSE ...

EXT. MINAS TIRITH - DAWN

HIGH WIDE: The SIXTH LEVEL of the CITY . . . Smoke rising
around it, fires burning beneath it . . .

EXT. THE SIXTH GATE, MINAS TIRITH - DAWN

WIDE ON: A rabble of ORCS are clustered outside the SIXTH
GATE as TROLLS pound on its WOODEN DOORS with HUGE HAMMERS.

ANGLE ON: WOOD splinters . . . The DOORS are near breaking
point.

ANGLE ON: GANDALF and PIPPIN sit on stone steps . . . Both
covered in sweat and grime, bone-weary from fighting, spirits
and hearts bruised . . .

PIPPIN looks towards the WOODEN GATES at which a NUMBER of
SOLDIERS continue to build a BARRICADE . . .

   PIPPIN
       (quiet)
  I didn't think it would end this way . . .

GANDALF looks at the SMALL HOBBIT a beat.

   GANDALF
       (gently)
  End? No, the journey doesn't end here.


   (CONTINUED)

     Final Revision - October, 2003 109.
CONTINUED:


PIPPIN looks up at GANDALF, questioningly . . . .

  GANDALF (cont'd)
  Death is just another path, one that we all
  must take.

ANGLE ON: GANDALF looks down to see PIPPIN looking up at him
with fear in his eyes . . .

   GANDALF (cont'd)
       (remembering)
  The grey rain curtain of this world rolls
  back and all turns to silver glass . . .
       (to himself)
  and then you see it . . .

ANGLE ON: GANDALF breaks off, lost in reverie . . .

  PIPPIN
  What, Gandalf? See what?

  GANDALF
  White shores ... And beyond . . . A far green
  country under a swift sunrise.

PIPPIN stares up at the OLD WIZARD'S FACE, softened, quiet
and full of peace . . .

   PIPPIN
       (quiet)
  Well, that isn't so bad.

  GANDALF
       (gently)
  No . . . No, it isn't.

BOOM!

ANGLE ON: GANDALF and PIPPIN'S faces turn as the WOODEN DOORS
shudder under another BLOW.

      CUT TO:

   Final Revision - October, 2003 110,



EXT. PELENNOR FIELDS - DAY

ANGLE ON: The battlefield is in CHAOS as MUMAKIL decimate the
VALIANT ROHIRRIM . . .

CLOSE ON: THEODEN tries to rally his men amid the SEA of
CRYING MEN and NEIGHING HORSES!

THEODEN
     (yelling)
Rally to me! To me!

SUDDENLY the WITCH-KING SWOOPS down on his NAZGUL scooping up
THEODEN and his HORSE ... they CARTWHEEL into the AIR and
land in a heap ... the HORSE is .DEAD ... THEODEN lies DYING
beneath it.

ANGLE ON: The WITCH-KING swooping down on his FELL-BEAST!

The FELL-BEAST lands on THEODEN'S DEAD HORSE.

WITCH-KING
Feast on his flesh!

ANGLE ON: The FELL-BEAST opens it's WICKED JAWS . . . !

ANGLE ON: A ROHAN SOLDIER stands before the BEAST . . . it is
EOWYN!

          EOWYN
I will kill you if you touch him!

CLOSE ON: The WITCH-KING laughs . . .

          WITCH-KING
Do not come between the Nazgul and his
prey!

ANGLE ON: The FELL-BEAST lifts EOWYN from her feet ...

SUDDENLY! With a mighty SWORD BLOW, the FELL-BEAST'S HEAD is
SEVERED! The huge CREATURE crumples to the ground, VAST WINGS
out-stretched, sending the WITCH-KING sprawling!



          (CONTINUED)

   Final Revision - October, 2003 111,
CONTINUED:


ANGLE ON: The WITCH-KING rises out of the wreckage . . . tall
and threatening . . .

EOWYN stands before him,the FELL-BEAST'S BLOOD dripping from
her SWORD!

With a shrill SHRIEK of HATRED, he knocks EOWYN backwards
with his MACE! STUNNED EOWYN tries to stand and is hit once
again with another CRIPPLING BLOW . . .

ANGLE ON: The WITCH-KING laughs once again as he SMASHES his
MACE downward ... EOWYN tries to block the BLOW but her
SHIELD shatters into MANY PIECES!

The WITCH-KING towers over EOWYN ... raising his MACE for the
KILLING BLOW!

    CUT TO:

EXT. MINAS TIRITH DOCKS - DAY

ANGLE ON: an ORC COMMANDER hurrying on to the ANDUIN RIVER
DOCKS, close to the CITY. LARGE BLACK SHADOWS slide across
the DOCKS, as SAILING SHIPS approach O.S.

ANGLE ON: A sinister BLACK SAILED SHIP GLIDES into the "DOCKS
. . . 9 OTHER CORSAIR SHIPS follow behind.

CLOSE ON: The ORC COMMANDER ...

  ORC COMMANDER
       (angry)
  Late as usual! Get off your ships, you sea
  rats! There's knife work here needs doing.

ANGLE ON: ARAGORN leaping from the LEADING SHIP and charging
across the DOCKS, ROARING at the top of his LUNGS! He is
followed by LEGOLAS and GIMLI . . .

ANGLE ON: Surprised ORC REACTION to the THREE charging
towards THOUSANDS of ORCS!

          GIMLI
      � ��� Plenty for the both of us . . . May the best
          dwarf win!
       .   (CONTINUED)
       ;

     Final Revision - October, 2003 112.
CONTINUED:


ANGLE ON: The ARMY OF THE DEAD suddenly LEAP straight out of
the SIDES of the SHIPS! They charge ACROSS the SURFACE OF THE
WATER with FRIGHTENING SPEED, overtaking ARAGORN!

The ORCS SCREAM at the SIGHT of 5000 SPECTRAL WARRIORS!

ANGLE ON: The SPECTRAL WARRIORS SWARM into the flank of the
QRC ARMY! With a raging blood-lust, the UNDEAD climb over the
top of each other to try and reach the enemy, creating a kind
of.ROLLING MOUNTAIN of GHOULS that sweep all before them
away!

The ORCS have no defence as their WEAPONS CANNOT MAKE CONTACT
with the GHOSTS!

EXT. PELENNOR FIELDS - DAY

ANGLE ON: MERRY on the ground . . . He looks around to see THE
WITCH-KING standing over EOWYN, pulling her to her FEET!

   WITCH KING
  No man can kill me . . . Die!

ANGLE ON: MERRY driving his SWORD into the back of the WITCH-
KING'S KNEE! MERRY'S SWORD bursts into FLAME and his ARM is.
shot with PAIN . . .

EOWYN struggles to her feet . . . pulling off her HELMET:

CLOSE ON: EOWYN . . . her LONG HAIR tumbling onto her
shoulders!

  EOWYN
  I am no man!

With her last strength, EOWYN thrusts her SWORD into the
WITCH-KING'S FACE! EOWYN'S SWORD SHATTERS into MANY SHARDS!

The WITCH-KING topples back DEAD, a BLACK OOZE leaking from
his ROBES and ARMOUR! A shuddering CRY, fading into a SHRILL
WAIL passes with the WIND.

ARAGORN and LEGOLAS battle the ORC - LEGOLAS JUMPS onto the
BACK of a GIANT MUMAKIL bringing it down ... he lands on his
feet in front of GIMLI . . .
 (CONTINUED)

    Final Revision - October, 2003 113.
CONTINUED:


  GIMLI
  That still only counts as one!

The MUMAKIL react with terror as SPECTRAL WARRIORS climb up
their SIDES, routing the HARADRIM from their WAR-TOWERS!

ORCS flee in their THOUSANDS ... the TERRIFIED MUMAKIL
trampling them in their PANIC to ESCAPE!

ANGLE ON: The ARMY OF THE DEAD swarming over the CITY,
routing the ORCS!

ANGLE ON: EOWYN crawls to where THEODEN lays, mortally
wounded . . .

THEODEN looks up at EOWYN ... his breathing shallow ... his
vision clouded . . .

  THEODEN
       (gasping weakly)
  I know your face ... Eowyn ...

EOWYN smiles down at him as she GENTLY STROKES his FACE ...

 THEODEN (cont'd)
  My eyes darken ...

  EOWYN
  No . . . I am going to save you ...

   THEODEN
       (loving)
  You already did . . .
       (clutching her hand)
  My body is broken ... you have to let me go


  EOWYN
  N ...
   o

THEODEN touches her tear-stained face ...

  THEODEN
  I go to my fathers . . . in whose mighty
  company, I shall not now feel ashamed ...
  (CONTINUED)

     Final Revision - October, 2003 114
CONTINUED: (2)


THEODEN is DYING . . .

   THEODEN (cont'd)
 Eowyn?

THEODEN DIES ... EOWYN breaks down, SOBBING ... ALL AROUND is
a VISTA OF DEFEAT.

      CUT TO:

EXT. PELENNOR FIELDS, MINAS TIRITH - DAY

WIDE ON: PELENNOR FIELDS . . . strangely SILENT . . . all ORCS
have fled ... BATTLE DEBRIS and BODIES stretch as far as the
eye can see...

ABOVE MINAS TIRITH ... BLINDING SUN RAYS break through the
LOW CLOUDS!

ANGLE ON: GANDALF, LEGOLAS, GIMLI and PIPPIN watch as . . .
ARAGORN walks slowly across the FIELD OF BATTLE towards the
HIDEOUS GHOULS ...

 KING OF THE DEAD
 Release us.

 GIMLI
      (quietly)
 Bad idea. Very handy in a tight spot, these
 lads - despite the fact, they're dead!

KING OF THE DEAD
 You gave us your word.

 ARAGORN
 I hold your oath fulfilled . . . Go. Be at
 peace.

ANGLE ON: The ARMY OF THE DEAD slowly DISSOLVE INTO DUST, and
are immediately swept away by the four winds.

ARAGORN turns to GANDALF who bows his head in HOMAGE ...




  (CONTINUED)

      Final Revision - October, 2003 115.
CONTINUED:


PIPPIN, in his GONDORIAN armour, looks around at the
devastation ... his eyes full of SADNESS ... they suddenly
fix on something.

ANGLE ON: PIPPIN running through the RUIN of the BATTLE . . .
towards a SMALL FIGURE slumped on the ground ...

    PIPPIN
  Merry ...?

MERRY stares unseeing at PIPPIN ... HORROR and SHOCK erasing
all other memories from MERRY'S mind ... tears fall down
PIPPIN'S FACE as he looks on his FRIEND . . .

   PIPPIN (cont'd)
  Merry . . . it's me, it's Pippin . . .

  MERRY
       (groggy)
  I knew you'd find me.
       (disorientated)
  Are you going to leave me?

 PIPPIN
  No Merry, I'm going to look after you.

ANGLE ON: PIPPIN covers MERRY with a blanket . . .

     CUT TO:

EXT. TOWER OF CIRITH UNGOL - NIGHT

CAMERA RISES ... towards the dark ORC TOWER of CIRITH UNGOL.
A light glows from the TOPMOST WINDOW.

CAMERA reaches the TOWER, dissolving through the wall into...

�    CUT TO:

INT. TOWER OF CIRITH UNGOL/TOP ROOM - NIGHT

. . . a small cold ROOM. FRODO BAGGINS is UNCONSCIOUS on the
floor. His eyes suddenly flicker and he WAKES UP.


 (CONTINUED)

   Final Revision - October, 2003 116,
CONTINUED:


TILT UP . . . to reveal the ORC and URUK-HAI, GORBAG and
SHAGRAT, arguing over FRODO'S BELONGINGS and CLOTHES! GORBAG
is snatching for the MITHRIL VEST.

  SHAGRAT
  Hey! Hands off - that shiny shirt, that's
  mine.

   GORBAG
  It's going to the Great Eye, along with
  everything else . . .

ANGLE ON . . . FRODO as he realizes that he has been STRIPPED
down to his UNDERWEAR. He clutches at his throat.

... The RING HAS GONE!

  SHAGRAT
  I don't take orders from stinking Morgul
  rats!

GORBAG grabs for the MITHRIL VEST ...

  GORBAG
       (angry yell)
  You touch it, and I'll stick this blade in
  your guts!

ANGLE ON: GORBAG draws his SWORD, but SHAGRAT KICKS him
BACKWARDS with his foot! GORBAG FALLS THROUGH a TRAP DOOR
leading to the floor below!

      CUT TO:

INT. TOWER OF CIRITH UNGOL/GUARD ROOM - NIGHT

ANGLE ON: GORBAG lands in the GUARD ROOM with a CRASH,
creating SUDDEN ALARM amongst the ORCS and URUK-HAI stationed
there.

SHAGRAT leans through the TRAP DOOR ...

  SHAGRAT
       (yelling)
  The scum tried to knife me! Kill him!
  1          (CONTINUED)

   Final Revision - October, 2003 117,
CONTINUED:


SEVERAL URUK-HAI converge on GORBAG - he LASHES OUT, slashing
one across the throat with his SWORD!

The DEAD URUK-HAI topples backwards over the PARAPET . . .

   CUT TO:

EXT. TOWER OF CIRITH UNGOL/COURTYARD - NIGHT

... landing on top of URUK-HAI and ORCS in the courtyard
below. Within moments, a brutal CIVIL WAR breaks out between
the TWO COMPANIES stationed in CIRITH UNGOL!

EXT. PASS OF CIRITH UNGOL - NIGHT

ANGLE ON: SAM hurries towards the gate, fearful for FRODO.

   CUT TO:

EXT. TOWER OF CIRITH UNGOL/COURTYARD - NIGHT

SAM is confronted with the sight of over 50 SLAUGHTERED ORC
and URUK-HAI, strewn over the COURTYARD!

ANGLE ON: SAM pounds UP THE STAIRCASE . . . he suddenly PAUSES.
SEVERAL URUK-HAI are running DOWN TOWARDS HIM! He grips STING
and continues CHARGING UP - SCREAMING at the top of his
lungs!

ANGLE ON: The FOUR URUKS . . . they see a HUGE DISTORTED SHADOW
on the wall in front of them! They turn around and flee in
terror back to the top of the stairs!

SAM appears - and before the URUK-HAI can fully regain their
wits - he slays THREE ... YELLING:

 SAM
     (yelling . . . 1st URUK-HAI)  �
  ,
That's for Frodo!
     (yelling ... 2nd URUK-HAI)
And for the Shire!
     (yelling . . . 3rd URUK-HAI)
And that's for my old Gaffer!
          �        �   �    �
SAM runs into the TOWER . . .

    Final Revision - October, 2003 118,



INT. TOWER OF CIRITH UNGOL/TOP ROOM - NIGHT

ANGLE ON: FRODO struggling against his bonds, as GORBAG
climbs back into the room ... with VENGEANCE in his EVIL
EYES.

GORBAG
Stop your squeaking you dunghill rat!

CLOSE ON: GORBAG grabs FRODO'S hair and pulls his head back,
exposing his neck. He pulls out his SWORD, ready to cut
FRODO'S throat . . .

GORBAG (cont'd)
I'm gonna bleed you like a stuck pig!

SUDDENLY! GORBAG GASPS as STING is rammed into his back by
SAM!

SAM
Not if I stick you first!

GORBAG falls dead!

FRODO
     (joyous disbelief)
Sam!!!

ANGLE ON: FRODO . . . humbled by SAM'S unswerving loyalty.

 FRODO (cont'd)
Oh, Sam . . . I'm so sorry . . . sorry for
everything.

SAM quickly cuts FRODO free.

SAM
Come on.

FRODO
     (despairing)
It's too late. It's over . . . they've taken
it. Sam - they took the Ring!!



   (CONTINUED)

     Final Revision - October, 2003 119.
CONTINUED:


   SAM
       (quietly)
  Begging your pardon, but they haven't.

SAM pulls the RING from his pocket ...

   SAM (cont'd)
  I thought I ' d lost you . . . so I took it -
  only for safe-keeping.

CLOSE ON: FRODO looks at SAM amazed . . . his eyes drop to the
RN ...
 IG

  FRODO
  Give it to me.

SAM hesitates . . . . TENSION instantly builds between them.

  FRODO (cont'd)
  Give me the Ring, Sam.

SAM seems strangely reluctant . . . ON THE SOUNDTRACK to HUM of
the RING builds

  FRODO (cont'd)
  Sam! Give me the Ring.

CLOSE ON: SAM drops the RING into FRODO'S palm . . .

FRODO sags in RELIEF . . . he puts the RING back around his
nc . ..
 ek

   FRODO (cont'd)
  You must understand . . . The Ring is my
  burden . . . it will destroy you, Sam.

FRODO looks at SAM, pain in his eyes ...

SAM looks down at FRODO ... his plain HOBBIT face full of
compassion. SAM'S resolve hardens, a new strength takes hold.




      (CONTINUED)

    Final Revision - October, 2003 120
CONTINUED: (2)


SAM
Come on, Mr Frodo, we'd best find you some
clothes . . . you can't go walking through
Mordor in naught but your skin.

   CUT TO:

EXT. PASS OF CIRITH UN.GOL - NIGHT

FRODO and SAM are now dressed in FOUL-LOOKING ORC gear ...

ANGLE ON: FRODO and SAM turn east and walk over the SUMMIT of
CIRITH UNGOL ... into MORDOR.

CLOSE ON: FRODO and SAM . . . they STOP DEAD . . . STARING AHEAD:

ANGLE ON: MOUNT DOOM . . . 50 M,ILES AWAY - across the barren
GORGOROTH PLATEAU - the mountain is erupting streams of ASH
and LAVA high into the air, lighting the low cloud blanket of
MORDOR with a flickering ORANGE WASH.

With immense trepidation, FRODO and SAM head down the steep
path into the dark kingdom . . .

. . . TWO TINY FIGURES in a bleak, foreboding landscape. Before
them lies the PLAIN of GORGOROTH ... Their eyes are drawn to
the OMINOUS SILHOUETTE of MOUNT DOOM ...

SAM
We did it, Mr Frodo. We made it to Mordor.

ANGLE ON: FRODO's eyes travel down towards the HUNDREDS of
FIRES which glow on the PLAINS beneath them ... thousands
upon thousands of ORCS are encamped there .

FRODO
There are so many of them . . . So many.
We'll never get through unseen.

THEIR eyes are drawn to a DARK LOOMING SHAPE ... BARAD-DUR
. . . A RED LIGHT seems to sweep across the PLAIN ...

FRODO (cont'd)
    (terror)
It's him - the Eye.
          (CONTINUED)

    Final Revision - October, 2003 121.
CONTINUED:


The GREAT EYE OF SAURON!

SAM cannot see what FRODO sees. GENTLY, he urges FRODO on.

 SAM
  We have to go in there, Mr Frodo. There's
  nothing for it. Come on. Let's just make it
  down the hill for starters.

EXT. MINAS TIRITH, TOWER HALL - DAY

CLOSE ON: GANDALF stands in the TOWER HALL . . . seemingly
alone . . . he speaks quietly, doubt and fear edge his voice.

  GANDALF
  Frodo has passed beyond my sight. The
  darkness is deepening.

He turns and crosses the HALL to reveal the presence of
GIMLI, LEGOLAS, EOMER and ARAGORN . . .

ARAGORN, his back to GANDALF . . .

 ARAGORN
  If Sauron had the .Ring, we would know it.

CLOSE ON: GANDALF - still troubled, still worried . . .

         GANDALF
          It's only a matter of time. He has suffered
          a defeat, yes, but behind the walls of
          Mordor our enemy is regrouping.

GIMLI sits insolently on the SEAT of the STEWARD . . .

         GIMLI
          Let him stay there. Let him rot. Why should
          we care?

GANDALF looks across at the DWARF . . . His face ashen.

         GANDALF
          Because ten thousand Ores now stand between
          Frodo and Mount Doom.
          (MORE)
          (CONTINUED)

    Final Revision - October, 2003 122
CONTINUED:
  GANDALF (cont'd)
       (to himself)
  I have sent him to his death.

ANGLE ON: ARAGORN turns around suddenly . . .

  ARAGORN
  No.

GANDALF looks up sharply at ARAGORN . . .

 ARAGORN (cont'd)
  There is still hope for Frodo. He needs
  time and safe passage across the Plains of
  Gorgoroth. We can give him that.

  GANDALF
  How?

  ARAGORN
  Draw out Sauron' s armies - empty his lands.
  Then we gather our full strength and march
  on the Black Gate.

At this, GIMLI CHOKES on his pipe . . . EOMER steps forward.

  EOMER
  We cannot achieve victory from strength of
  arms .

  ARAGORN
  Not for ourselves . . . But we can give Frodo
  his chance if we keep Sauron' s eye fixed
  upon us. Keep him blind to all else that
  moves .

   LEGOLAS
  A diversion . . .

CLOSE ON: GANDALF speaks in a low tone to ARAGORN . . .

   GANDALF
       (doubtful)
  Sauron will suspect a trap. He will not
  take the bait!



 (CONTINUED)

  Final Revision - October, 2003 123.
CONTINUED: ( 2 )


 GIMLI
 Certainty of death. Small chance of
 success. What are we waiting for?

     CUT TO:

EXT. PELENNOR FIELDS - DUSK

CLOSE ON: ARAGORN wearing a BREAST PLATE emblazoned with the
WHITE TREE.

He rides at the head of a COLUMN of 500 FOOT SOLDIERS from
ROHAN and CONDOR ... leading them from the :RUINS of
OSGILIATH.

GANDALF, LEGOLAS, GIMLI, EOMER, MERRY and PIPPIN ride
directly behind him.

AHEAD OF THEM: The MOUNTAINS of MORDOR.

EXT. PLAINS OF GORGORTH - NIGHT

GREAT ARMIES of ORC and URUK-HAI stream across the PLAINS
from MORDOR . . .

EXT. ORC ROAD, MORDOR - NIGHT

WIDE SHOT: The VOLCANIC WASTELAND of the GORGOROTH FOOTHILLS.

FRODO and SAM, still disguised in the ORC ARMOUR, slide down
scree bank and land on the road below . . . their attention is
fixed on the PLAIN below ... thousands of ORCS can be seen
marching away from MT. DOOM . . .

 SAM
 Look, the Ores! They're moving off. You
 see, Mr Frodo - some luck at last.

EXT. GORGOROTH PLAIN, MORDOR - DAWN

FRODO and SAM ... moving across a HELLISH dry landscape of
twisted volcanic rock and STEAMING FISSURES.




          (CONTINUED)

    Final Revision - October, 2003 124
CONTINUED:


40 MILES AWAY, MOUNT DOOM rises out of the PLAIN . . . its feet
founded in ashen ruin, its huge cone rising to a great
height, where its reeking head is swathed in cloud.

EXT. BLACK GATES OF MORDOR - DAY

ARAGORN'S FORCE of 500 approaches the great BLACK GATES OF
MORDOR. He positions his troops about half a mile from the
GATES.

EXT. GORGOROTH PLAIN, MORDOR - DAY

ANGLE ON: FRODO slumped against a ROCK . . . he tries to DRINK
from his WATER BOTTLE . . . but finds it EMPTY.

  SAM
  Take mine . . . there's a few drops left.

FRODO gratefully takes a SMALL SIP from SAM'S BOTTLE . . .
hands it back.

 FRODO
  There'll be none left for the return
  journey.

 SAM
      (softly)
  I don't think there will be a return
  journey, Mr Frodo.

A moment of EYE CONTACT between FRODO and SAM as they
acknowledge what lies ahead.

SAM offers FRODO his hand . . . and PULLS HIM UP.

   CUT TO:

EXT. BLACK GATES OF MORDOR - DAY

At the BLACK GATES, ARAGORN musters his MEN . . .

   CUT TO:

    Final Revision - October, 2003 125,



EXT. PLAINS OF GORGOROTH - DAY

WIDE ON: FRODO and SAM staggering across the TORTURED
LANDSCAPE ... they are no longer WEARING the ORC ARMOUR.

CLOSE ON: FRODO is walking half-bowed, often stumbling . . . as
if his eyes not longer see the way before his feet.

His right HAND is pressed against his CHEST ... supporting a
HEAVY WEIGHT. His left HAND often rises, as if to ward off
some invisible blow. SAM watches him, CONCERN etched across
his FACE . . .

CLOSE ON: FRODO as a malevolent VOICE in his head calls to
him . . . "Baggins - Baggins" . . .

CLOSE ON: SAM looking behind him in time to see . . .

WIDE ON: A RAY of RED LIGHT stabs through the GLOOM and
begins to sweep over the BARREN LANDSCAPE . . .

   SAM
Fo o g td w
 rd , e on

SAM throws himself to the ground ... FRODO turns to the
light, unable to stop himself . . .

FRODO crumpling to the ground as the RED LIGHT hits him like
a SEARCHLIGHT.

EXT. BLACK GATES OF MORDOR - NIGHT

All is QUIET . . . No sign of the ENEMY . . .

 PIPPIN
     (wary)
Where are they?

ANGLE ON: GANDALF . . . watchful . . . alert. He nods at ARAGORN.

WIDE: ARAGORN, GANDALF, LEGOLAS, GIMLI, EOMER, MERRY and
PIPPIN galloping towards the BLACK GATES. They pull up less
than 50 yards from the TOWERING GATES . . .

       INTERCUT WITH:

    Final Revision - October, 2003 126.



EXT. PLAINS OF GORGOROTH - NIGHT

FRODO is slumped on the GROUND, unable to MOVE ...

       INTERCUT WITH:

EXT. BLACK GATES OF MORDOR - NIGHT

ANGLE ON: ARAGORN moves his HORSE forward.

         ARAGORN
          Let the lord of the Black Land come forth;
          let justice be done upon him.

From behind the HUGE GATES, the terrifying CHANTING and the
CLANGING of the ARMOUR of THOUSANDS ...

With the SOUND of TORTURED METAL, the MASSIVE GATES begin to
open . . . LEGOLAS, MERRY and EOMER look on in trepidation.

EXT. PLAINS OF GORGOROTH - NIGHT

With the EYE OF SAURON sweeping the PLAINS around them, SAM
gets to his feet ...

EXT. BLACK GATES OF MORDOR - NIGHT

The BLACK GATES of MORDOR SWING OPEN! SAURON'S ARMY of
300,000 ORCS MARCH OUT!

         ARAGORN
          Pull back! Pull back!

ANGLE ON: ARAGORN, GANDALF, LEGOLAS, GIMLI, EOMER, MERRY and
PIPPIN GALLOP back towards their SMALL ARMY as the ORC MASSES
slowly MARCH toward them.

Behind them, the EYE OF SAURON is directed toward THEM ...

   CUT TO:

EXT. PLAINS OF GORGOROTH - NIGHT

FRODO'S eyes open with a START ...

          (CONTINUED)

   Final Revision - October, 2003 127.
CONTINUED:


  SAM
  It's gone, Mr Frodo.

ANGLE ON: SAM crawls toward FRODO . . .

  SAM (cont'd)
  The light's passed on, away towards the
  North . . . something's drawn it's gaze.

FRODO and SAM stagger to their feet and move off.

      CUT TO:

EXT. BLACK GATES OF MORDOR - DAY

ANGLE ON: The MASSIVE ORC ARMY marching towards ARAGORN'S
MEN.

ANGLES ON: ARAGORN'S MEN . . . starting to WAVER as the ORCS
ENCIRCLE THEM. SOME MEN are backing away ... losing their
nerve.

ARAGORN GALLOPS in front of his ARMY . . .

  ARAGORN
  Hold your ground - hold your ground! Sons
  of Gondor - of Rohan . . . my brothers!

ANGLE ON: ARAGORN . . . he seems to fix each and everyone of
his MEN with his eyes.

 ARAGORN (cont'd)
  I see in your eyes the same fear that would
  take the heart of me. The day may come when
  the courage of Men fails; when we forsake
  our friends and break all bonds of
  fellowship; but it is not this day - an
  hour of wolves and shattered shields, when
  the Age of Man comes crashing down - but it
  is not this day!!! This day we fight! By
  all that you hold dear on this good earth -
  I bid you stand!

ARAGORN holds ANDURIL ALOFT!


  (CONTINUED)

    Final Revision - October, 2003 128.
CONTINUED:


  ARAGORN (cont'd)
  Men of the West!

      CUT TO:

EXT. MOUNT DOOM - NIGHT

FRODO and SAM are CLIMBING the face of MOUNT DOOM ...

The LANDSCAPE is VIOLENT ... RED HEAT hisses out of FISSURES,
the ROCK is JAGGED ... RAZOR SHARP ... ASH blankets the LAND.

RED LIGHTNING FORKS across the SKY with a DEAFENING CRACK!.

CLOSE ON: FRODO and SAM'S FEET dragging across the ASH . . .
Their PARCHED LIPS . . . SWEATING, DUSTY FACES.

FRODO TRIPS ... falls FACE-FIRST into the DUST ... SAM drops
beside him.

       INTERCUT WITH:

EXT. BLACK GATES OF MORDOR - DAY

HIGH WIDE: Of ARAGORN'S ARMY, totally SURROUNDED by 300,000
ORCS . . . poised for the order to ATTACK!

       INTERCUT WITH:

EXT. MT DOOM - NIGHT

FRODO slowly lifts his head and looks up . . .

FRODO'S POV: Looking .straight up the STEEP SLOPES of MOUNT
DOOM! . . . a huge mass of ash and slag and burned stone!

FRODO starts to CRAWL on his HANDS and KNEES! He hauls
himself a FEW PITIFUL FEET before SLUMPING in the ASH.

      CUT TO:

EXT. BLACK GATES OF MORDOR - NIGHT

ANGLE ON: GIMLI as he surveys the ARMY of MORDOR . . .

  (CONTINUED)

       Final Revision - October, 2003 129.
CONTINUED:


  GIMLI
  Never thought I ' d die fighting side by side
  with an Elf.

  LEGOLAS
       (quietly)
  What about side by side with a friend?

GIMLI looks up into the EYES of LEGOLAS, with whom he has
shared so much. The GRUFF DWARF smiles quietly . . . .

  GIMLI
  Aye - I could do that.

LEGOLAS drops his hand on GIMLI'S shoulder . . . SLOWLY they
turn and FACE the ENEMY TOGETHER.

       CUT TO:

EXT. GORGOROTH PLAIN, MORDOR - NIGHT

CLOSE ON: SAM crawls to FRODO who lies SLUMPED against the
rock-face . . . he turns him over, holding him in his ARMS.

   SAM
       (softly)
  Do you remember the Shire, Mr Frodo?
  . . . It'll be spring soon, and the orchards
  will be in blossom; and the birds will be
  nesting in the hazel thicket; and they'11
  be sowing the summer barley in the lower
  fields; and eating the first of the
  strawberries with cream.
       (looking down at FRODO)
  Do you remember the taste of strawberries?

CLOSE ON: FRODO shuts his eyes, his breath coming in GASPS.

  FRODO
       (weak whisper)
  No, Sam. I can't recall    the taste of food;
  nor the sound of water;     nor the touch of
  grass . . . I'm naked in   the dark.
       (rising panic)
  There's no veil between    me and the wheel of
  fire. I can see it with    my waking eyes.
  (CONTINUED)

   Final Revision - October, 2003 130,
CONTINUED:


CLOSE ON: SAM looks at FRODO with GRIM DETERMINATION.

 SAM
  Then let us be rid of it - once and for
  all! Come on, Mr Frodo. I can't carry it
  for you ... but I can carry you! Come on!

With that, SAM lifts FRODO on to his shoulders and starts to
CLIMB MOUNT DOOM! His plain hobbit-face grows stern, almost
grim, as the will hardens in him.

WIDE ON: TWO TINY HOBBITS on the ENDLESS shale SLOPES of the
MOUNTAIN ...

      CUT TO:

EXT. BLACK GATES OF MORDOR - DAY

ANGLE ON: ARAGORN and COMPANY watch as they are surrounded by
a tide of ORCS . . .

ARAGORN raises ANDURIL in the BROAD SWEEP as he walks forward
. . . he turns to FACE the OTHERS . . .

CLOSE ON: QUIET RESOLVE written on ARAGORN's face as he looks
into the EYES of the remaining members of the FELLOWSHIP ...

    ARAGORN
        (softly)
  For Frodo . . .

ANGLE ON: ARAGORN turning, SWORD-raised, he CHARGES FORWARD!

There is a moment of SILENCE . . . no-one else moves . . .
SUDDENLY a SHOUT goes up!

ANGLE ON: PIPPIN and MERRY charging forward . . . The rest of
the MEN following ...

ANGLE ON: ARAGORN crashing head on into a line of ORCS . . .

ANGLE ON: The blade of ANDURIL flashing as ARAGORN HACKS at
ORCS!

      CUT TO:

  Final Revision - October, 2003 131,



EXT. SLOPES OF MOUNT DOOM - DAY

WIDE: Like a small grey insect, SAM creeps up the slope with
FRODO on his back . . . foot by foot.

The mantling CLOUD swirls, revealing the cruel pinnacles and
iron crown of BARAD-DUR, the Dark Tower, in the distance.

CLOSE ON: SAM staggering under FRODO'S weight . . . STRONG ash-
laden WINDS are buffeting him as he slowly CLIMBS MOUNT DOOM.

The PLAIN of GORGOROTH lies 1000 FEET BELOW, wrapped in fume
and shadow.

A TREMOR ripples through the GROUND . . . a RED FLAME explodes
into the SKY . . .

ANGLE ON: SAM looks up - fearful the MOUNTAIN could explode
at any moment!

SAM POV: Through the THICK, FUME-LADEN AIR a set of STAIRS
can be made out . . .

SAM
     (growing excitement)
Look, Mr Frodo! We're almost there!       -.-.

SAM can't believe it - relief and joy flood through him . . .

          GOLLUM
          Clever Hobbits to climb so high!

SMACK!. OUT OF NOWHERE the figure of SMEAGOL crashes into them
sending SAM and FRODO sprawling.

ANGLE ON: SMEAGOL pounces on FRODO . . . his fingers wrapping
around his throat, snapping FRODO'S neck from side to side!

ANGLE ON: FRODO as he struggles to unlock the BONY, WHITE
FINGERS around his neck but SMEAGOL'S grip is too strong.

CLOSE ON: SMEAGOL'S fingers tightening around FRODO'S neck -
squeezing the life out of him . . .

WHACK! A ROCK connects with the SIDE of SMEAGOL'S head . . .
         (CONTINUED)

    Final Revision - October, 2003 132,
CONTINUED:


ANGLE ON: SAM jumps on a STUNNED SMEAGOL . . .

ANGLE ON: FRODO comes to . . .

        INTERCUT WITH:

EXT. BLACK GATES OF MORDOR - DAY

The BATTLE between MEN and ORCS rages on . . . From MORDOR,
high OVERHEAD, the NAZGUL fly out into the FRAY ...

        INTERCUT WITH:

EXT. SLOPES OF MOUNT DOOM - DAY

All the old HATRED between SAM and SMEAGOL boils over as they
FIGHT . . . SAM falls back . . . SMEAGOL BITING at his SHOULDER!
SAM pushes SMEAGOL away with his feet . . . rolls to his KNEES,
as SMEAGOL charges at him . . .

SAM slashes out with STING! He cuts SMEAGOL across the
stomach! SMEAGOL staggers back, SCREAMING with PAIN . . .

SAM looks around desperately for FRODO ...

  SAM
       (yelling desperately)
  Frodo!

FRODO has GONE!

ANGLE ON: FRODO RUNNING UP THE MOUNTAIN!

        INTERCUT WITH:

EXT. BLACK GATES OF MORDOR - DAY

FELLOWSHIP fight BRAVELY . . . a hideous screech rends the AIR!

ANGLE ON: GANDALF looks up to a NAZGUL diving straight toward
him!

CLOSE ON: GANDALF eyes flicker as a small MOTH flutters
across his line of sight.

(CONTINUED)

    Final Revision - October, 2003 133.
CONTINUED:


ANGLE ON: THE FELL BEAST - JAWS OPEN, TALONS EXTENDED!

Another cry rends the air as . . .

SMACK! The GIANT EAGLE, GWAHIR, SMASHES into the FELLBEAST,
it's claws ripping into the HIDEOUS MONSTER'S NECK!

ANGLE ON: PIPPIN in the midst of BATTLE looks up.

    PIPPIN
        (disbelieving)
  Eagles . . .

Above the BATTLE attack formation, more EAGLES appear . . .

          . . . PIPPIN (cont'd)
  The Eagles are coming! The Eagles are coming!

The EAGLES engage the NAZGUL!

      CUT TO-

EXT. DOOR OF SAMMATH NAUR, MOUNT DOOM - DAY

ANGLE ON: SAM is GASPING, his lungs EXPLODING as he RACES up
the SLOPES of MOUNT DOOM searching for FRODO.

ANGLE ON: SAM arriving at the STONE DOORWAY of SAMMATH NAUR
. . . leading into the MOUNTAIN!

SAM staggers into it!

INT. THE CRACK OF DOOM TUNNEL - DAY

ANGLE ON: SAM flinches against the FIERCE HEAT blasting down
the TUNNEL.

   SAM
       (yelling)
  Frodo!

SAM lurches forward ... towards an ORANGE GLOW deep in the
HEART of the MOUNTAIN.

   Final Revision - October, 2003 134



INT. CRACK OF DOOM - DAY

The HEAT is almost UNBEARABLE ... SAM sees FRODO in the
DISTANCE ...

 FRODO
 I'm here, Sam.

ANGLE ON: FRODO is standing on the EDGE of the CRACK OF DOOM
. . . a deep LAVA FILLED CHASM, in the very heart of ancient
SAURON'S FORGES, the greatest in Middle-earth.

The RAGING ORANGE GLARE from the CHASM turns FRODO into a
BLACK SILHOUETTE . . . standing TENSE and STILL.

FRODO holds the RING in his HAND . . . he RAISES IT, holding
it over the BUBBLING LAVA far below.-

 SAM
      (yelling)
 Destroy it - go on! Throw it in the fire!

CLOSE ON: FRODO . . . a STRANGE EXPRESSION on his face . . .

 SAM (cont'd)
 What are you waiting for? Just let it go!

ON THE SOUNDTRACK: The HUM of the RING grows louder and
louder! FRODO PULLS the RING close to his body as he turns to
SAM.

FRODO looks at SAM, the RING has finally taken him.

 FRODO
 The Ring is mine.

SAM SCREAMS as . . .

...    FRODO PUTS THE RING ON! He VANISHES!

 SAM
 No!        :

    CUT TO:

   Final Revision - October, 2003 135.



EXT. BLACK GATES OF MORDOR - DAY

With a storm of wings, the NAZGUL wheel around and hurtle
towards MOUNT DOOM!

In the midst of the BATTLE - GANDALF ... realising FRODO has
been seen . . .

         INTERCUT WITH:

INT. CRACK OF DOOM - DAY

CLOSE ON: SAM is SCREAMING for FRODO . . .

ANGLE ON: FOOTPRINTS moving across the ASH COVERED CAVERN
FLOOR!

SUDDENLY! GOLLUM smashes a ROCK down on SAM'S HEAD, knocking
him to the GROUND!

GOLLUM LEAPS on to the INVISIBLE FRODO!

CLOSE ON: FRODO'S FOOTPRINTS . . . staggering about under
GOLLUM'S WEIGHT!

ANGLE ON: GOLLUM clawing FRANTICALLY, riding on the BACK of
the INVISIBLE FRODO . . .

         INTERCUT WITH:

EXT. BLACK GATES OF MORDOR - DAY

ARAGORN turns and is confronted by an ARMOURED TROLL,
wielding an ENORMOUS MALLET . . .

         INTERCUT WITH:

INT. CRACK OF DOOM

GOLLUM suddenly LIFTS HIS HANDS to his face ... and BITES
HARD!

ANGLE ON: FRODO MATERIALIZES as he DROPS TO HIS KNEES,
clutching his BLEEDING HAND . . . he SCREAMS.

  (CONTINUED)

  Final Revision - October, 2003 136,
CONTINUED:


The FIRES below roar in anger, RED LIGHT blazes, and all the
cavern is filled with a great glare and heat.

       INTERCUT WITH:

EXT. BLACK GATES OF MORDOR - DAY

ANGLE ON: LEGOLAS as ARAGORN falls to the GROUND . . .

       INTERCUT WITH:

INT. CRACK OF DOOM - DAY

CLOSE ON: GOLLUM triumphantly HOLDS the RING ALOFT . . .
ECSTATIC!

CLOSE ON: GOLLUM dancing GLEEFULLY . . . PERILOUSLY close to
the EDGE OF THE CHASM!

       INTERCUT WITH:

EXT. BLACK GATES OF MORDOR - DAY

ARAGORN turns to see HUGE TROLL FEET moving CLOSER ...
LEGOLAS races toward him ...

INT. CRACK OF DOOM

GOLLUM still TRIUMPHANT . . . on the edge of the PRECIPICE ...
The FIERY LAVA casting an EVIL LIGHT . . . He jumps about in
DELIGHT . . .

 GOLLUM
  Precious! Precious!

ANGLE ON: FRODO rises slowly . . . his EYES lock on GOLLUM . . .
time seems to stand still as each regards the other ...

CLOSE ON: the RING glinting in GOLLUM'S HAND . . . BEAUTIFUL
... POWERFUL ... EVIL . . .

SUDDENLY! FRODO lunges at GOLLUM ...

FRODO thuds into GOLLUM, lifting him off his feet . . .

  (CONTINUED)

      Final Revision - October, 2003 137.
CONTINUED:


ANGLE ON: FRODO and GOLLUM locked in STRUGGLE plummet over
the EDGE OF THE CHASM.

         INTERCUT WITH:



EXT. BLACK GATES OF MORDOR - DAY

THUD! The HUGE FOOT of the CAVE TROLL lands on ARAGORN'S
chest. He STABS at. it ineffectually . . .

ANGLE ON: GANDALF in despair ...

         INTERCUT WITH:

INT. CRACK OF DOOM

SAM watches in HORROR as FRODO and GOLLUM ... disappear into
the CHASM! He staggers over . . .

SLOW MOTION: GOLLUM falls into the CRACK OF DOOM . . .
INSTANTLY engulfed in the CHURNING LAVA!

ANGLE ON: SAM leans into the CRACK OF DOOM . . .

ANGLE ON: FRODO clinging onto the ROCK FACE with his ONE GOOD
HAND!

The CAVERNS are SHAKING VIOLENTLY.

SAM desperately reaches for him . . . FRODO is too far down.

  SAM
  Give me your hand.

CLOSE ON: FRODO looks at SAM, his face impassive.

  SAM (cont'd)
  Take my hand!

FRODO struggles to reach SAM . . . he.can't reach WITH HIS
BLEEDING hand, and falls'back, still clinging valiantly to
the ROCK with his good hand . . .

 (CONTINUED)

     Final Revision - October, 2003 138,
CONTINUED:


 SAM (cont'd)
  No!

ANGLE ON: FRODO looks at SAM imploringly . . .

  SAM (cont'd)
  Don't you let go! Don't let go.
       (desperate)
  Reach!!!

ANGLE ON: FRODO reaches up once more and this time SAM GRASPS
his hand TIGHTLY .

CLOSE ON: The RING sits on the river of LAVA for a brief
moment, then SINKS away . . .

ANGLE ON: the EYE OF SAURON . . .

WIDE ON: Across the GREAT PLAINS - MOUNT DOOM is clearly
IMPLODING ...

         INTERCUT WITH:

EXT. BLACK GATES OF MORDOR - DAY

On the BATTLEFIELD, all eyes turn to MOUNT DOOM ...

ANGLE ON: The CAVE TROLL, with ARAGORN at his mercy, is
distracted by the SOUNDS emanating from MORDOR . . . he turns
in TERROR and RUNS OFF . . .

EXT. BARAD-DUR - DAY

ANGLE ON: The FELLOWSHIP turn to watch as the MASSIVE DARK
TOWER of SAURON shakes itself to pieces!

TOWERS FALL and WALLS CRUMBLE; vast spires of SMOKE and
spouting STEAM billow up!

The FOUNDATIONS explode apart ...

EXT. BLACK GATES OF MORDOR - DAY

The BLACK GATES collapse in a huge cloud of ASH!

 (CONTINUED)

     Final Revision - October, 2003 139.
CONTINUED:


THE ORCS are FLEEING in all DIRECTIONS . . . As the very
foundations of MORDOR collapse!

THE COMPANY watch as MOUNT DOOM explodes ... the reason for
their MISERY is clear . . . it's plain FRODO and SAM can never
survive the cataclysm ...

      CUT TO:

EXT. SLOPES OF MOUNT DOOM - DAY

The VOLCANO is ERUPTING, FIRE belches from it's riven summit,
sending LAVA streaming down it's sides..

ANGLE ON: FRODO and SAM stagger out of the SAMMATH NAUR DOOR
. . . all around ASH and MOLTEN ROCKS fall. The SKIES burst
into THUNDER, seared with LIGHTNING.

The screaming NAZGUL fall from the sky in FLAMES!

The ground is shaking so violently that FRODO and SAM can
barely stand.

FRODO stumbles . . . SAM helps him up . . . FRODO smiles.

   FRODO         .          ..
  It's gone . . . it's done.

SAM looks down at FRODO ... FRODO'S FACE is at PEACE ... his
BURDEN destroyed . . .

  SAM
  Yes, Mr. Frodo ... it's over now.

FRODO and SAM crawl onto a ROCK as LAVA streams towards them
. . . in seconds THEIR ROCK is an island in a sea of MOLTEN
FIRE.         ,'
    .

FRODO shuts his eyes . . .

  FRODO
       (remembering)
  I can see the Shire ... The Brandywine
  River, Bag End, Gandalf's fireworks . . . the
  lights in the Party Tree . . .
(CONTINUED)

     Final Revision - October, 2003 140.
CONTINUED:


    SAM
  Rosie Cotton dancing ... she had ribbons in
  her hair . . .
        (sobs)
  . . . if ever I was to marry someone . . . it
  would have been her . . . it would have been
  her.

FRODO glances at SAM . . . he is WEEPING.

CLOSE ON: FRODO wrapping an ARM around SAM'S SHOULDER.

  FRODO
       (calm)
  I'm glad to be with you, Samwise Gamgee . . .
  here at the end of all things.

HIGH WIDE: TWO TINY HOBBITS waiting to die amid a cataclysmic
landscape . . . LAVA erupts around them ... FIREBALLS rain down
from the sky.

We SLOWLY FADE TO BLACK ...

FADE UP:

SLOW MOTION: GWAIHIR, the GREAT EAGLE flaps towards CAMERA
. . . He bears GANDALF on his back, and is followed by TWO MORE
EAGLES.

WIDE SHOT . . . The EAGLES bravely fly amid the RAINING ASH and
MOLTEN ROCKS ... and SNATCH FRODO and SAM from the ROCK!

CLOSE ON: FRODO'S FACE . . . as the FIERY VOLCANO recedes away
beneath him . . . the wind ruffles his hair . . . he PASSES OUT.

FADE TO BLACK.

INT. MINAS TIRITH, HOUSES OF HEALING - DAY

SLOW MOTION ... FRODO'S eyes flutter open ... looking around
slowly his eyes alight on GANDALF ...

  FRODO
  Gandalf?


 (CONTINUED)

    Final Revision - October, 2003 141.
CONTINUED:


GANDALF'S face breaks into a smile ... then laughter ...

. . . as MERRY and PIPPIN run in . . . jumping on the bed and
hugging FRODO . . .

GIMLI and LEGOLAS enter the room . . . their joy is PLAIN . . .

ARAGORN joins them - the FELLOWSHIP is complete . . .

. . . finally FRODO'S eyes fall upon a FIGURE standing apart
from the others . . . it is SAM ...

CLOSE ON: FRODO'S and SAM'S eyes meet . . .

     CUT TO:

EXT. MINAS TIRITH, COURT OF THE KINGS - DAY

ANGLE ON: SWEEPING over the MINAS TIRITH WALLS, racing
towards the TOP of the CITY ... through a BLIZZARD of WHITE
FLOWER PETALS! MINAS TIRITH is restored . . . it gleams WHITE
in the BRIGHT SUN.

SOARING UP: to REVEAL the COURT OF THE KINGS, CROWDED with
4000 PEOPLE . . . cramming the WIDE PATH leading to the TOWER
HALL!          ;

CLOSE ON: The CROWN of CONDOR glints in the BRILLIANT
SUNSHINE . . .

GANDALF places the CROWN upon ARAGORN'S head.

  GANDALF
  Now come the days of the King ...

ARAGORN smiles up at GANDALF . . .

  GANDALF (cont'd):
       (softly to Aragorn)
  May they be blessed.

ARAGORN slowly RISES, turning to face the CROWD, who CHEER
and CLAP for their KING . . .



 (CONTINUED)

   Final Revision - October, 2003 142,
CONTINUED:


 ARAGORN
  This day does not belong to one man but to
  all. Let us together rebuild this world
  that we may share in the days of peace.

The CHEERS of his PEOPLE are DEAFENING ...

ARAGORN sings for his people ... Then WALKS in SLOW
PROCESSION down the WHITE PAVED PATH as the CROWD BOW their
heads in respect to their NEW KING ...

ARAGORN passes EOWYN and FARAMIR who bow before him ... EOMER
steps FORWARD to bow in respect ...

TRUMPETS SOUND as a PROCESSION of ELVES, dressed in
shimmering SILVERS and WHITES, led by LEGOLAS approach the
KING ... LEGOLAS gestures behind him . . .

CLOSE ON: ARAGORN'S eyes scan amongst the ELVES

ANGLE ON: A BANNER carried aloft bearing the WHITE TREE of
CONDOR in FULL FLOWER . . . the RANKS of ELVES part revealing:

ARWEN, eyes shining ... MORTAL now, but deeply in love ...
carrying the STANDARD of CONDOR ... ARAGORN kisses her

ELROND looks on . . . his face breaks into a smile.

ARAGORN and ARWEN embrace.

ANGLE ON: ARAGORN and ARWEN walking through the CROWD towards
four SMALL FIGURES who stand nervously at the end of the
AVENUE . . .

ANGLE ON: ARAGORN and ARWEN look on FRODO, SAM, MERRY and
PIPPIN, as they stand before them . . .

The FOUR HOBBITS, dressed in their OLD CLOTHES, clean and
mended, bow their heads ...

ARAGORN raises his HAND.

  ARAGORN (cont'd)
  My friends ... you bow to no-one.


          (CONTINUED)

   Final Revision - October, 2003 143,
CONTINUED: ( 2 )


ANGLE ON: ARAGORN drops on ONE KNEE, kneeling before THE
HOBBITS, his head bowed ... followed by all assembled there.

CLOSE ON: TEARS spring into FRODO'S EYES. He clutches SAM'S
shoulder as 4000 PEOPLE pay homage to the courage of two
little Hobbits from the Shire.

CAMERA RISES INTO THE AIR ... away from the CROWDED CITADEL,
until MINAS TIRITH becomes a SPECK in the LANDSCAPE ...

          CUT TO:



EXT. MIDDLE EARTH MAP - DAY

DISSOLVING into the PARCHMENT MAP of MIDDLE-EARTH ... Slowly
drifting across the MAP towards the WEST ...

FRODO V/0
And thus it was a Fourth Age of     Middle-
earth began, and the Fellowship     of the
Ring, though eternally bound by     friendship
and love, was ended.
Thirteen months to the day since    Gandalf      ,.
sent us on our long journey . . .

          CUT TO:

EXT. HOBBITON - DUSK

FRODO V/0
. . . we found ourselves looking upon a
familiar sight . . . We were home!

MATCHING MOVE: Revealing HOBBITON bathed in a WARM SUNSET ...
As FRODO, SAM, MERRY and PIPPIN ride into SHOT on PONIES ...
past ODO PROUDFOOT who shakes his head at the STRANGENESS of
their appearance.

INT. THE GREEN DRAGON INN - NIGHT

FRODO brings a round of drinks to the TABLE.



  (CONTINUED)

 Final Revision - October, 2003 144.
CONTINUED:


Nearby a HUGE FUSS is being made of a LARGE PUMPKIN which has
been brought in to be shown off.

ANGLE ON: The FOUR FRIENDS look at each other. A WORLD of
experience now separates from their fellow HOBBITS.

Seated at a long table, the FOUR FRIENDS raise their glasses
. . . SAM eye is suddenly caught!

ANGLE ON: ROSIE COTTON who is serving behind the BAR . . .

SAM steels himself and leaves to go and TALK to ROSIE ...

FRODO, MERRY and PIPPIN exchange smiles as . . .

 CUT TO:



EXT. HOBBITON - DAY

On a BEAUTIFUL sunny day, SAM and ROSIE are MARRIED ... With
their dearest FRIENDS gathered around them . . .

ROSIE throws a beautiful bouquet of FLOWERS . . . it's caught
by PIPPIN who smiles in embarrassment ...

       DISSOLVE TO:

INT. BAG END - DAY

FRODO walks through BAG END to his STUDY ...

FRODO V/0
          How do you pick up the threads of an old
          life? How do you go on, when in your heart
          you begin to understand. There is no going
          back. There are some things that time
          cannot mend. Some hurts that go too deep.
          That have taken hold.

ANGLE ON: FRODO . . . from behind. He is HUNCHED over a DESK...

PUSH IN . . . to reveal BILBO'S RED BOOK open on FRODO'S DESK.
He is WRITING in the LAST CHAPTERS ...
        (CONTINUED)

    Final Revision - October, 2003 145,
CONTINUED:
in careful neat HANDWRITING. FRODO turns back the pages,
REVEALING: There and Back Again - A Hobbit's Tale, by Bilbo
Baggins. He writes below it as SAM GAMGEE calls out from the
door:

SAM O.S
          Mr Frodo?

CLOSE ON: FRODO WINCES with a sharp GASP of PAIN . . . He puts �
the PEN down and CLUTCHES at his SHOULDER . . .

SAM has entered the ROOM and stands BEHIND FRODO ...

          SAM      .
    (concerned) -
          What is it?     -

CLOSE ON: FRODO . . . He is DRAWN and PALE.

          FRODO
          It's been four years to the day since
          Weathertop, Sam. It's never really healed.

CLOSE ON: SAM . . . at a loss for words. His EYES fall to the
BOOK.         .....'�

SAM   ,"
    (reading)
          "There and Back Again . . . A      Hobbit's Tale,
          by Bilbo Baggins".

TILT DOWN: to FRODO'S HANDWRITING:

SAM (cont'd)
    (reading)
          " . . . And The Lord of the Rings, by Frodo
          Baggins".
    (delighted)   :
          You've finished it!-

          FRODO
    (closing the book)
          Not quite . . . There's room for a little
          more.

       CUT TO:

  Final Revision - October, 2003 146.



EXT. HOBBITON FIELDS - EARLY MORNING

LYRICAL MUSIC OVER ...

A COLD WINTER'S MORNING ... Out of the FOG rattles a SMALL
COVERED WAGON; GANDALF is at the REINS.

ANGLE ON: FRODO, SAM, MERRY and PIPPIN are waiting on PONIES
for the WAGON . . . all are wearing their GREY ELVEN ROBES.

FRODO V/0
Bilbo once told me, the great stories never
end - that each of us must come and go in
the telling. His part in this tale was now
over. There would be no more journeys for
Bilbo. Save one.

CLOSE ON: GANDALF arrives in his CART . . .

         DISSOLVE TO:

EXT. WEST FARTHING - DAY

WIDE ON: The WAGON trundles along at a SEDATE PACE.

SAM, MERRY and PIPPIN ride behind, leading FRODO'S EMPTY
PONY.

 BILBO O.S.
     (frail)
Tell me again, lad. Where are we going?

FRODO O.S.
To the harbour, Bilbo. The Elves have
accorded you a special honour. A place on
the last ship to leave Middle-earth.

INT. WAGON - DAY

CLOSE ON: FRODO is SITTING in the WAGON . . . his ARM around
his UNCLE BILBO.

BILBO is extremely OLD and FRAIL. He is DOZING . . . his head
slumped.


(CONTINUED)

    Final Revision - October, 2003 147.
CONTINUED:


BILBO'S eyes flutter OPEN . . . with effort he raises his head


  BILBO
       (frail)
  Frodo ... Any chance of seeing that old
  ring of mine ... the one I gave you?

  FRODO
       (quietly)
  Sorry, Uncle . . . I'm afraid, I lost it.

  BILBO
       (frail)
  Oh . . . pity. I should like to have held it
  one last time.  �

BILBO nods back to sleep ... FRODO rests his head against
him.

  DISSOLVE TO:

EXT. THE GREY HAVENS - DUSK

ANGLE ON: FRODO, walking arm-in-arm with BILBO through a
beautiful ELVEN BOAT-HOUSE ... GANDALF follows with MERRY,
PIPPIN and SAM.

CLOSE ON: As BILBO looks up, he is STUNG by the BEAUTY before
hm . . .
 i

  BILBO
  Oh! Well, here's a sight I have never�seen
  before.

TRACKING: Passing under a beautiful ELVEN ARCHWAY . . .

. . . to reveal a WHITE SHIP, ready to depart from a WHITE
STONE DOCK.

ANGLE ON: ELROND, CELEBORN and GALADRIEL are waiting for
them.

The SETTING SUN slowly dropping behind the SEA ... visible
between the HEADLANDS of a beautiful INLET.
   (CONTINUED)

       Final Revision - October, 2003 148,
CONTINUED:


The lighting is beautiful . . . S U N streams through the sails,
casting an ethereal glow on THE GROUP as they walk onto the
DOCK.

BILBO bows in acknowledgement to ELROND, CELEBORN and
GALADRIEL, who return his GREETING.

 GALADRIEL
  The power of the Three Rings is ended. The
  time has come for the Dominion of Men.

  ELROND
       (ELVISH: with subtitles)
  I Aear can ven na mar.

  T he Sea calls us ho me.


ELROND holds out his ARMS to BILBO who suddenly seems MUCH
YOUNGER and SPRIGHTLIER . . . He sets off down the PATH TOWARD
his HOSTS . . .

  BILBO
  I think I'm quite ready for another
  adventure.

BILBO walks down toward the BOAT and BOARDS with ELROND . . .

ANGLE ON: FRODO looks up . . . GALADRIEL is watching him. She
SMILES, TURNS and BOARDS the BOAT . . .

GANDALF kneels before SAM, MERRY and PIPPIN - who are all
looking TEARFUL.

 GANDALF
  Farewell, my brave Hobbits. My work is now
  finished. Here at last, on the shores of
  the sea, comes the end of our Fellowship.

There is GREAT SADNESS . . . MERRY SNIFFLES LOUDLY.

  GANDALF (cont'd)
  I will not say: "do not weep", for not all
  tears are an evil.

CLOSE ON: GANDALF turns and walks away . . . FRODO is DOWNCAST
... SUDDENLY, GANDALF turns and looks toward him.

GANDALF (cont'd)
It is time, Frodo.

ANGLE ON: GANDALF looks at FRODO then turns and slowly walks
towards the GANGPLANK to board the SHIP.

SAM
     (alarmed)
What does he mean?

CLOSE ON: FRODO turns to SAM. . . .

 FRODO
     (gently)
We set out to save the Shire, and it has
been saved ... but not for me . . .

 SAM
     (shaken)
You don't mean that - you can't leave.

ANGLE ON: SAM looks down . . . FRODO is holding BILBO'S RED
JOURNAL out towards him.

FRODO
The last pages are for you, Sam.

SAM is SOBBING . . . MERRY and PIPPIN are DISTRAUGHT . . . .

FRODO hugs MERRY and PIPPIN, and last of all SAM . . . and
climbs on board the SHIP.

ANGLE ON: FRODO a look of WONDERMENT crosses his face . . . as
he STEPS FORWARD and ACCEPTS GANDALF'S HAND . . . finally
released from his pain, care falls from his face . . . he is
the young FRODO we first met so long ago.

SAM, MERRY and PIPPIN comfort each other as the WHITE SHIP
glides away from the DOCK ...

WIDE ON: The WHITE BOAT sails away towards the HEADLANDS,
disappearing into the GOLDEN LIGHT of the SETTING SUN.

ANGLE ON: SAM in growing darkness, still follows the
departing SHIP with his eyes, MERRY and PIPPIN are already
preparing to leave.

    CUT TO:

EXT. NO.3 BAGSHOT ROW - MORNING

ANGLE ON: SAM walks up the path towards his house . . .

A LITTLE GIRL toddles up to greet him.

 SAM
 Elanor!

He hugs his daughter . . .

 FRODO V/0
 My dear Sam. You cannot always be torn in
 two. You have to be one and whole for many
 years. You have so much enjoy and to be and
 to do. Because Sam, your part in the
 journey goes on.

ANGLE ON: ROSIE COTTON steps up and kisses SAM on the cheek
. . . she gives him a TINY BABY BOY to cradle.

 SAM
 Hello, little Frodo!

ANGLE ON: SAM with his FAMILY . . . he draws a deep breath:

SAM (cont'd)
Well ... I'm back.

SAM looks at his LOVELY FAMILY with GREAT HAPPINESS, tinged
with a little SADNESS . . .

SAM and ROSIE take the CHILDREN'S HANDS and enter BAGSHOT . . .
the BRIGHT YELLOW DOORWAY closes behind them.

FADE TO BLACK. 

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)