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

Ben-Hur (1959)

In the year of our Lord...

...Judea, for nearly a century, had lain under the mastery of Rome.

In the seventh year of the reign ofAugustus Caesar...

...an imperial decree ordered every Judean...

...each to return to his place of birth...

... to be counted and taxed.

Converging ways of many of them led to their capital city, Jerusalem...

... the troubled heart of their land.

The old city was dominated by the fortress ofAntonia...

... the seat of Roman power...

...and by the great golden temple...

... the outward sign of an inward and imperishable faith.

Even while they obeyed the will of Caesar...

... the people clung proudly to their ancient heritage...

...always remembering the promise of their prophets...

... that one day there would be born among them a redeemer...

... to bring them salvation and perfect freedom.

You'll be counted at Hebron.

-Name?

-Samuel.

-What city?

-Joppa.

-What family?

-Michael.

-Move on.

Move on.

-Yes.

-Name?

-Joseph.

-What city?

-Nazareth.

-What family?

-David of Bethlehem.

And the woman?

My wife.

Move on.

You'll be counted at Bethlehem.

Come on, come on.

What village is this?

Nazareth.

We should arrive in Jerusalem tomorrow night.

You're not watching the soldiers, Joseph?

We've seen Romans before.

Yes. . . .

. .and we will see them again.

My table is not finished.

Where is your son?

He's walking in the hills.

He neglects his work, Joseph.

No.

Once, I reproached him with forgetting his work.

He said to me: "I must be about my father's business.

" Then why isn't he here, working?

He's working.

Trumpeters of the legion!

Welcome, Messala.

The command is yours.

Thank you.

Thank you for relieving me.

Drusus. . .

. . .when I was a boy, I dreamed of commanding this garrison.

Now the wheel has turned.

I am in command.

Attention!

Aisle one, face right!

Forward!

I'd forgotten the heat.

If it were only the heat.

I lived here until I was 1 4.

Jerusalem was my home.

-My father was head of-- -Yes, I know.

Your father is well-remembered.

Fine governor.

If there can be such a thing in this forsaken land.

If you want to rise, Sextus, do the difficult.

I asked to be sent here.

You'll find the people changed since you were a boy.

In what way?

Oh, won't pay their taxes, an irrational resentment of Rome. . . .

There's nothing new in all that.

And then there's religion.

I tell you, they're drunk with religion.

They smash the statues of our gods, even those of the emperor.

Punish them.

We do.

When we can find them.

Find the leaders.

You don't know.

There's nothing you can put your finger on.

There are strange forces at work here.

This "messiah" business-- I know.

There was one predicted when I was a boy.

A king of the Jews, who will lead them into some sort of anti-Roman paradise.

Makes your head spin.

There's a wild man in the desert named John. . .

. . .who drowns people in water.

And a carpenter's son who does magic tricks.

"Miracles" they call them.

There's always a rabble-rouser stirring up trouble.

No, no, no.

This man is different.

He teaches that God is near, in every man.

It's actually quite profound, some of it.

You've been too long away from Rome.

Go back, Sextus.

Go to Capri.

Bathe, rest, lie by the sea. . .

. . .and forget that God is in every man.

-There is divinity in only one man.

-Yes, I know.

The emperor is displeased.

He wishes Judea made into a more obedient and disciplined province.

He's ordered me to restore order.

I shall carry out his wishes.

How?

You can break a man's skull, arrest him, throw him into a dungeon.

But how do you control this?

How do you fight an idea?

Especially a new idea.

There's a Jew outside.

He wants to see the tribune Messala.

I assume he has a name.

-He says he's a prince, Judah Ben-Hur.

-Then treat him like one!

Tell him I will join him.

Yes, tribune.

Centurion!

This was his country before it was ours.

Don't forget that.

Yes, tribune.

Very wise.

This Ben-Hur is the richest man in Jerusalem.

And the head of one of the greatest families in Judea.

We were friends as boys.

We were like brothers.

Sextus. . .

. . .you ask how to fight an idea.

Well, I'll tell you how.

With another idea.

I said I'd come back.

I never thought you would.

I'm so glad.

-Look at you.

-Look at you!

You've come back a tribune.

When I heard that news, I drank a toast to you.

We'll drink another now.

-Your sister and mother?

-They're fine.

They've talked of you ever since we knew you were coming.

-Is Tirzah married?

-No.

Suitors come and go, but she dreams.

She's been in love with you since she was 5.

I can't wait to see them.

Do you still hunt jackals and lions?

Or have you become too dignified?

-Down Eros, up Mars!

-Down Eros, up Mars!

Where the beams cross?

Good.

After all these years!

Still close.

In every way.

I hope so.

I know.

You're a Roman, and I'm a Jew. . .

. . .whose life you once saved.

The best thing I ever did.

Judah. . .

. . .it will be very difficult to govern here.

I'm going to need help.

Your help.

Your advice.

-You want my advice?

-Yes, I do.

Withdraw your legions.

Give us our freedom.

Unfortunately, the emperor is devoted to his empire.

He's particularly fond of Judea.

And Judea's not fond of the emperor.

Is there anything so sad as unrequited love?

My quarters.

A bit grim.

Not grim.

Austere.

Virtuous.

Roman.

I'm going to be second-in-command to the new governor, Valerius Gratus.

He's coming in a few days with more legions.

Then the rumors are true.

The emperor does not approve of your countrymen.

There is rebellion in the wind.

It will be crushed.

But you and your family need have no concern.

I'm next in authority to the governor, and you're my friend.

-I'm a Jew.

-Ah, you are like a Roman!

What have you in common with the troublemaking rabble?

-They're my people.

I'm one of them.

-Be wise, Judah.

It's a Roman world.

If you want to live in it, you must become part of it.

You've changed.

I've grown up.

I've seen the world since I left Jerusalem.

I've seen Rome.

It's no accident that one small village on the Tiber. . .

. . .was chosen to rule the world.

Your legions.

It wasn't just our legions.

Other countries have armies, fine armies.

I know, I fought them.

Oh, no.

No, it was fate that chose us to civilize the world.

And we have.

Our roads and ships connect every corner of the earth.

Roman law, architecture, literature are the glory of the human race.

I believe in the future of my people.

Of course you do.

And you can help them.

How?

You're an aristocrat.

Your family's name is honored.

You're a prince to your people.

You're rich and powerful.

Your reputation is stainless.

They'd listen if you spoke out against rebellion.

Persuade your people that their resistance to Rome is stupid.

It is worse than stupid, futile!

For it can end in only one way, extinction for your people!

I'm against v*olence.

Everyone knows this.

I've spoken against it.

I shall do so again.

Then we're agreed!

Now, when can I come to see your family?

-We had hoped tomorrow.

-Good.

And now for our toast.

It's dreadful wine, by the way.

It's especially fermented for the Roman army.

You're very cruel to your conquerors.

It's an insane world.

But in it there is one sanity: The loyalty of old friends.

Judah, we must believe in one another.

Will you drink to that?

With all my heart.

Here it is, the place I've remembered.

The court where we played at changing the guard.

The roof where we'd throw pebbles at people in the street and then hide.

-We were rascals, weren't we?

-No, you were good boys.

I would have that time again.

And here it is.

Nothing has changed.

Except for the fountain.

-The old well would go dry, remember?

-Promptly, every summer.

A new fountain and a new Tirzah.

You've grown up.

-He hasn't changed, has he, Mother?

-No?

Of course he has.

He was a boy when he left us, now he's a man.

With great responsibilities.

Come.

The emperor builds and builds, turning brick to marble.

Oh, I almost forgot.

I brought you this.

I've never seen anything like this before.

It's beautiful!

-Is it Roman?

-It's Libyan.

I was there last year.

A tremendous campaign.

Our armies met on the coast.

After two days of fighting, they fled.

We marched on their capital.

Barbaric city, but fascinating.

Or was, till we destroyed it.

Now it's nothing but ashes.

I'm boring you with soldier stories.

Come with me, there's something I want to show you.

Thank you for this.

I chose the right present for you.

It's a brooch for a woman.

What do you think of it?

Magnificent.

It's Arabic.

I think he has the look of the breed.

I've raised him.

Let me try him sometime.

Whenever you like.

He's yours.

Do you mean you'll give me this?

Oh, Judah.

You are good.

It's going to be like old times, I know it.

Judah, tell me, did you. . .

. . .think about what I said?

Yes.

Talked to a number of people already.

Spoken against v*olence, against incidents.

Most of the men agree with me.

Most?

Not all?

No, not all.

Who does not agree?

Well, the resentful, the impatient.

Who are they?

Yes, Judah.

Who are they?

Would I retain your friendship if I became an informer?

Telling the names of criminals is not informing.

They're not criminals, Messala.

They're patriots.

Patriots?!

Let me explain something to you.

Something you may not know.

The emperor is watching us.

At this moment, he watches the East.

This is my great opportunity, and yours too.

If I bring order here, I can have any post I want.

You'll rise with me, I promise.

And do you know where it can end?

Rome!

Yes, perhaps at the side of Caesar himself.

I mean it.

It can happen and this is the moment.

I swear, this is the time.

The emperor is watching us, judging us.

All I need do is serve him.

And all you need do is help me serve him.

-You speak as if he were God.

-He is God.

The only God.

He is power, real power on earth, not-- Not that.

Help me, Judah.

I would do anything for you, Messala. . .

. . .except betray my own people.

In the name of all the gods, what do the lives of a few Jews mean to you?

If I cannot persuade them, that does not mean I would help you m*rder them.

Besides, you must understand this, Messala.

I believe in the past and future of my people.

Future?

You are a conquered people.

You may conquer the land.

You may slaughter the people.

But that is not the end.

We will rise again.

You live on dead dreams.

You live on the myths of the past.

Solomon's glory is gone.

You think it will return?

Joshua will not rise again to save you nor David.

There is only one reality in the world today.

Look to the West.

Don't be a fool!

Look to Rome!

Better a fool than a traitor or a k*ller.

-I am a soldier.

-Who kills for Rome and Rome is evil.

-I warn you-- -No!

I warn you.

Rome is an affront to God.

Rome is strangling my people and my country, the whole earth!

But not forever.

And I tell you, the day Rome falls there will be a shout of freedom. . .

. . .such as the world has never heard before.

Either you help me or you oppose me.

You have no other choice.

You're either for me or against me.

If that is the choice. . .

. . .then I am against you.

There they are.

Where's Messala?

-Where's--?

-He's gone.

Gone?

-But why?

-He couldn't stay.

-What happened?

-A new tribune must have many duties.

Come.

Let us have dinner.

Blessed art Thou, O Lord, our God, King of the world. . .

. . .who bringeth to us bread from the earth.

We shall never see him again, Tirzah.

He wanted to use me to betray our people.

-Master, the caravan from Antioch.

-Yes, Amrah, I saw.

Simonides.

-Oh, welcome homecoming.

-Master.

Simonides has brought gifts, as usual.

Amber and jade for me.

Silk for Tirzah.

And for the master, lberian wine.

Not to mention the best gift of all, your presence.

You do your servant honor.

I also bring good news from Antioch.

-Caravans from Petra.

-Have all arrived.

-Good.

-Here is the accounting.

And what of Numidia?

The trade route is ours, guaranteed by treaty with the king.

Once a year, you bring your accounting.

And once a year, I find myself wealthier.

Yeah, but my greatest treasure is my steward.

My life belongs to the House of Hur.

Nothing else exists for me, except my daughter.

-She must be a young woman by now.

-Yes, and your property.

She was born the daughter of your sl*ve.

When I inherited you, I inherited a friend, not a sl*ve.

Still, Esther has come with me from Antioch for your permission to marry.

It's granted.

I wish you the joy of many grandchildren.

If it is the Lord's will, I shall rejoice.

With your permission, Esther wishes to speak to her master.

You're eager to marry, Esther?

It is my father's wish.

Your husband will be fortunate.

What is his name?

David, son of Mathias.

Of what house?

-His own, master.

-He is a freeman.

Tell me more about him.

I have seen him only once.

He is a merchant, well-thought-of in Antioch.

He will pay for Esther's freedom.

Her freedom will be my wedding gift to Esther.

You are generous, master.

Do you love this man?

I will learn to love him.

You have my permission to marry.

We'll drink to your happiness.

And a safe return to Antioch.

I disturbed you.

No.

What were you thinking?

I was saying goodbye. . .

. . .to this city. . .

. . .and this house.

You've not often been here.

What do you remember of it?

My father sometimes brought me here. . .

. . .when I was little.

It was a house where I was always happy.

Except once.

When you and your friend, the Roman boy-- -Messala.

-Yes.

You had been out hunting. . .

. . .and they brought you home injured.

I touched your face as you lay there. . .

. . .and prayed to God, "Don't let this boy die.

" I can hear how you said it.

Gently, as you say it now.

Yes, master.

Master?

Why, I've given you your freedom.

It's strange.

I hardly felt a sl*ve.

And now. . .

. . .I hardly feel free.

You know, in the old, wise days of Solomon. . .

. . .if there was among his slaves. . .

. . .some girl who filled his eyes. . .

. . .he could choose her out from the rest. . .

. . .and take her to him.

Wise days of Solomon.

Different days.

And long ago.

If you were not a bride. . .

. . .I should kiss you goodbye.

If I were not a bride. . .

. . .there would be no goodbyes to be said.

Your sl*ve ring.

Fair exchange.

Freedom to you.

The ring to me.

You will wear it?

Until you meet the woman you will marry?

Until then.

The gods favor my lord Gratus.

If it is the governor's pleasure, the wreath of office.

Thank you, tribune.

I see no delegation from the city.

-There will not be one, sir.

-No?

Jerusalem's welcome will not be a warm one.

But I pledge, my lord, it will be a quiet one.

Let us proceed.

There's Messala.

He saw you, Judah.

The new governor.

Stand back!

-Stand back.

-You, come!

Had to be the Jews!

Open up in the name of the divine emperor!

Judah!

Tirzah!

What is it?

What's happened?

Open up in the name of the law!

-I was watching the-- -A tile fell and struck the governor.

-It wasn't my fault.

-They won't believe her.

She won't have to say anything.

You hear?

Tirzah, say nothing.

Open the gates!

I'll speak to them.

-Arrest him!

-Let me tell you what happened.

-Hold those women.

-Stop them!

It was an accident.

Let me tell you what happened.

It was an accident.

-This is the man, sir.

We saw him.

-It was an accident.

-Accident?

-I swear it.

I put my hand on the ledge.

A tile was loose.

It gave way.

Take him.

Take all of them.

-He's telling the truth!

-It was me!

Let them go!

Attention!

Messala.

In the name of God, tell them it's a mistake.

I leaned on the tile, and it broke loose.

It was an accident.

Let them go!

They had nothing to do with it!

Let the servants go.

Let them go.

Return to your ranks.

Come.

Where?

Tirus.

Tirus?

I've had no trial.

I'm to die in the galleys without even a trial?

There's no truth in the charge!

Not a word of truth!

Wait.

My mother, my sister.

What happened to them?

Tie his hands.

-At least tell me if they're safe.

-I can tell you nothing.

Get along.

Keep moving.

Jailer!

Guard, in there!

Up the stairs!

Jailer!

Jailer!

To the right.

-Wait!

-Send them out.

Go!

The door.

Where are my mother and sister?

Where are they?

Here, within these walls.

The governor is recovering.

They won't die.

Of course, they will be sentenced.

Is it possible?

Is it possible you could do this to us?

To people you've known?

A family you've loved?

You will let them go.

You will gladly let them go!

I didn't try to k*ll the governor.

I'm not a m*rder!

I know you're not.

You know?

You are evil.

No, Judah, I am not evil.

I wanted your help.

Now you've given it to me.

By making this example of you, I discourage treason.

By condemning without hesitation an old friend, I shall be feared.

But not my family.

Let them go.

Please.

-Messala, I beg you.

-Beg?!

Didn't I beg you?

You chose this.

There's nothing more to be said.

k*ll me, and your mother and sister will die. . .

. . .nailed to crosses in front of you!

Go on, Judah.

k*ll me!

May God grant me vengeance.

I will pray that you live till I return.

Return?

Take him.

Sentries, salute.

The tribune will see you now.

Tribune, I'm steward of the House of Hur.

I remember you.

We were on our way to Antioch when we heard what had happened.

Judah Ben-Hur could not have done this thing.

You knew him, tribune.

Better than you.

Then there must be no doubt in your mind, the charge is groundless.

The prisoners have been sentenced.

-Sentenced?

-But there's no truth in it.

There was never a thr*at against the governor in Judah's mind.

Surely you must know he would never have done this.

In your heart, you must know it.

Drusus.

This man had better be kept here until we can question him.

Hold!

Water for the soldiers.

Soldiers first!

Get away from that well.

No water for them!

Get them away from that well!

Here, you!

Come on, you!

Water for the horses!

-Water.

Water.

-Soldiers first!

Here.

Wait.

No water for him.

God. . .

. . .help me.

You!

I said no water for him!

All right, on your feet, all of you!

Get them on their feet!

Back in line, you dog!

On your feet!

Get them going!

You there, back to your place!

Back to your place!

Forward, you dogs!

Soon, the counselor's barge will be coming alongside.

Be ready to raise oars.

Raise oars!

Down oars!

The new commander, Quintus Arrius.

-How many rowers?

-Two hundred, consul.

-And reliefs?

-Of 30, every hour.

This man is ill.

Replace him.

-Change him.

-Right, sir.

-This man's been giving you trouble?

-He's insubordinate, consul.

That will stop.

What service have you seen?

Forty-one.

A month's less a day in this ship.

You keep an exact account.

And before?

Three years in other ships.

Three years.

You have the spirit to fight back. . .

. . .but the good sense to control it.

Your eyes are full of hate, 41 .

That's good.

Hate keeps a man alive.

It gives him strength.

Now, listen to me, all of you.

You are all condemned men.

We keep you alive to serve this ship.

So row well. . .

. . .and live.

-Ship ready, consul.

-Strike oars.

Strike oars!

You know a fleet of Macedonian galleys. . .

. . .has been raiding Roman commerce.

The emperor has honored us with the task. . .

. . .of seeking out and destroying them.

Battle speed, hortator.

Battle speed!

att*ck speed.

att*ck speed!

Ramming speed.

Ramming speed!

Rest.

Halt!

Rest!

Why are you here?

I was ordered to report to you during my relief.

Oh, yes.

I'd forgotten.

You could have k*lled me as I lay there.

You're a condemned man.

Why didn't you?

I'm not ready to die.

What do you think will save you?

The God of my fathers.

Your God has forsaken you.

He has no more power than the images I pray to.

My gods will not help me.

Your God will not help you.

I might.

Does that interest you, 41 ?

I can see that it does.

I'm a fighting man by profession, and in my leisure moments. . .

. . .it amuses me to train fighting men.

I own some of the best gladiators and charioteers in Rome.

Would you like to become one of them?

To die as your sl*ve?

Better than to live in chains below these decks.

I will not be here forever.

No?

What would you do if you escaped?

Two people were condemned with me, my mother and sister. . .

. . .though they were innocent.

I won't rest-- Do not say that you were innocent.

-Would it do any good to say it again?

-No.

Consider my offer carefully.

You will never escape while we are victorious.

If we are not, you will sink with this ship, chained to your oar.

I cannot believe that God has let me live these years. . .

. . .to die chained to an oar.

It's a strange, stubborn faith you keep. . .

. . .to believe that existence has a purpose.

A sane man would have learned to lose it long before this.

As you have.

What drove it out of you?

Go back to your oar, 41 .

Consul, enemy sighted.

Signal the fleet.

Prepare for battle.

All the watch to battle posts.

-Stand by to load.

-Make ready to f*re.

Hurry, quick!

Hurry up with that resin.

Get some more amm*nit*on.

Raise oars!

Down oars!

Chain rowers!

Guard.

Unlock 41 .

No!

I don't want to die!

I don't want to die!

41 , why did he do that?

I don't know.

Once before, a man helped me.

I didn't know why then.

Normal speed!

Number 1 , flame.

f*re.

f*re!

f*re!

Hold withdrawal on command.

Lift oars!

Raise!

Withdraw!

Steersman, right.

Extend oars!

f*re!

-Watch out!

-f*re!

Steersman, ram course!

Order below!

-Ramming speed!

-Ramming speed!

Consul, barge on ramming course.

We're going to be rammed!

We're going to be rammed!

Why did you save me?

Why did you have me unchained?

What is your name, 41 ?

Judah Ben-Hur.

Judah Ben-Hur. . .

. . .Iet me die.

We keep you alive to serve this ship.

Row well and live.

Is the sail square?

I can't tell.

Better for us both if it's the enemy.

My death.

Your freedom.

It's a Roman sail.

Face rear!

Welcome, consul.

We had given up all hope for you.

Water.

The fleet, all lost?

Five galleys.

-And the battle?

-The battle was won.

You have a victory.

-It was a victory?

-Complete.

In His eagerness to save you. . .

. . .your God has also saved the Roman fleet.

Hail Arrius!

Right oars!

You have cleared the seaways of a great danger, Quintus Arrius.

This baton of victory has been nobly won.

This man riding beside you, who is he?

The man who saved me, divine emperor, to return and serve you.

Is that all you know about him?

No.

He was accused of an att*ck on the governor of Judea.

But he was innocent.

If not, there's a strange inconsistency in this man. . .

. . .who tries to k*ll my governor, yet saves the life of my consul.

Come tomorrow.

We'll talk of it.

We have all the information on this man. . .

. . .a man of some influence in his own country.

His att*ck upon our governor is one upon the senate and the people of Rome.

I am convinced that no such att*ck was intended.

Consul, allow us to continue.

Allow us to be generous.

As a reward to you for your great victory. . .

. . .we shall not send him back to the galleys.

Take him as your sl*ve.

Such is the will of the senate. . .

. . .and the people of Rome.

Not long ago, I returned to Rome. . .

. . .with a young man who had saved my life.

You all know him as the finest charioteer in Rome.

Five times, he's driven my horses to victory.

I know him as one who stands in the place of the son I lost.

I have the love and pride in a son's achievements. . .

. . .which I thought I should never have again.

Nothing could make stronger our bond. . .

. . .but tonight I wish to share it with you all.

The formalities of adoption have been completed.

Young Arrius is now the legal bearer of my name. . .

. . .and the heir to my property.

This ring of my ancestors. . .

. . .would have gone to my son.

So now it is yours.

It's a strange destiny that brought me to a new life. . .

. . .a new home. . .

. . .a new father.

It brought me here.

It may take me away.

But wherever I may be. . .

. . .I shall always try to wear this ring as a son of Arrius should.

With gratitude and affection. . .

. . .and with honor.

My old friend Pontius Pilate, young Arrius.

Before you came to this city, my horses always won.

Magnificent horses, extremely swift.

Yes, but not swift enough to defeat you.

-Tell me, you come from Judea?

-Yes, sir.

I hear that the climate is difficult to live in.

Not for Judeans.

It's a terrible prospect.

I am to be made governor.

-Of Judea?

-Yes.

I asked for Alexandria.

But it seems the wilderness needs my particular talents.

The scorpions and holy prophets can't get on without me.

Lay the dust of Judea, at least for this evening.

Goats and Jehovah.

You're leaving.

I must.

It's a journey I can't keep you from.

Your eyes have never left it all these months.

I can recognize pain.

But still, my counsel is to wait.

Gratus is to be replaced.

The governorship goes to Pontius Pilate.

When?

Very soon.

It's very much to our purpose.

Nothing is to the purpose if, when I come back to Judea, I come too late.

That is the thought which has punished me every moment I've spent here.

Will Rome see you again?

Here is a part of my life which you have made for me.

I shall remember it.

Whoever the gods are, they take small interest in an old man's hopes.

They have their way.

Forgive me.

You're a stranger here.

Would you be from Nazareth?

Why do you ask?

I thought. . .

. . .you might be the one-- The one that I have come back from my country to find.

He would be about your age.

Who?

When I find Him. . .

. . .I shall know Him.

Oh, but forgive me.

I am Balthasar of Alexandria.

I am the guest of Sheik llderim.

Sack of flesh without brains!

No!

No!

Not the whip!

That is my host.

Gently!

Gently!

Fool!

Headless toad!

You know nothing of horses!

Whip my children once and I'll drain every drop of your blood.

Now, gently around the first turn, and let them run!

Go on!

Keep my words in your head!

Let us see some wisdom!

Beautiful horses.

Now!

Now!

They are ready!

Let them go!

Watch.

They'll never hold the turn.

No!

No!

Abadon, stop him!

Stop that whip!

I'll k*ll him!

I'll k*ll--!

Moonhead!

Give me those reins, you fool!

You think you can treat my horses like animals?!

Drive cows and goats!

That's all you're fit for!

Get off, idiot!

Drive goats, not horses!

I am doomed.

You saw what happened here?

This traveler told what would happen before it happened.

Your horses are very fine, but they're not a team.

Not a team?

But one of them held steady, the one on the outside.

-Antares.

-The slow one?

He should run on the inside where he can steady the others in the turns.

You have a keen eye.

Where did you acquire it?

In the circus in Rome.

You have driven in the great circus?

Tell me, my friend, could you make my four run as one?

I'm on my way to Jerusalem.

Would your caravan rest until tomorrow?

We have time enough to eat, drink and talk.

Come into my tent and refresh yourself.

And let me hear how you raced in Rome.

If I had a voice to sing, I would sing you the psalm of horses.

No other animal has descended so in scale. .

. . .from the first innocent falling of the world.

And tomorrow, I shall put Antares on the inside.

When you do, shorten the yoke.

It will help them in the turns.

Judah Ben-Hur.

You're a Jew, yet you drove in the great circus.

Yes.

By a strange choice and a stranger fortune.

Your coming here was so fit, so right.

We might have achieved wonders!

You have to go.

I make a journey which will not wait.

Ah, well, then perhaps you will come back.

And when you do, bring your friends, your wives.

I have no wives.

No wives at all?

I have six, no, seven.

I've counted eight.

And that is because he is traveling.

At home, he has more.

Believe me, it is a great advantage to have many wives.

-Someday, I hope to have one.

-One wife!

One God, that I can understand.

But one wife, that is not civilized.

It is not generous.

-Was the food not to your liking?

-Indeed.

Thank you.

Thank you.

And take my advice, my friend.

Buy yourself some wives.

And now I must say good night to my beauties.

When ready for sleep, they get impatient and jealous.

They wait to see which one I will embrace first.

-I'll make my farewells then.

-No, no, no, stay.

Stay and see them.

Come, my children.

Come.

Strangers make them shy.

Come.

Come, do not be afraid.

Come.

There, my children.

They are descended from the Arabians of the Pharaohs. . .

. . .and I have named them for the stars.

Come, Antares.

You are the slowest, and you can run all day without tiring.

What?

Yes, yes.

Yes, I love you too.

There's my good Antares.

Come, Rigel.

We've both supped well, and the world is good.

There's my good Rigel.

Yes, you are ready for sleep.

The day's work done for you, eh?

Yes, well, you can go to sleep in a minute.

Good night.

Good night, my treasure.

Steady, Aldebaran.

I haven't forgotten you.

No.

You are the swiftest, but you must be steady.

Never seen finer horses, even in Rome.

You should see their mother, Mira.

I dare not bring her.

My people couldn't bear her absence.

All right, all right.

You are their friend, and they do not give their affections readily.

Come, Antares, Rigel, it is late.

Altair, Aldebaran, go to sleep.

You must be strong and swift.

Go, my children.

Go.

At Jerusalem, they'll race the world's finest teams. . .

. . .and the champion of the East, Messala, with his black devils.

He stops at nothing to win.

-Messala?

ln the circus?

-Yes.

You knew him?

I know him.

Perhaps without much liking.

My people are praying for a man. . .

. .to drive their team to victory over Messala.

You could be that man, the one. . .

. . .to stamp his arrogance into the sand.

My horses need only a driver who is worthy of them. . .

. . .one who will rule them with love.

For him, they'd outrace the wind.

It's not possible.

That is a pity.

Think of it.

To break his pride. . .

. . .to humble this tribune before the very people he has degraded.

Just think, his defeat and humiliation at the hands of a Jew!

I know it is not possible.

Does it not delight your imagination?

Does it not answer your purpose?

I must deal with Messala in my own way.

And your way is to k*ll him.

I see this terrible thing in your eyes.

But no matter what this man has done, you have no right to k*ll him.

He will be punished inevitably.

I don't believe in miracles.

But all life is a miracle.

Why will you not accept God's judgment?

You do not believe in miracles.

Yet God once spoke to me out of the darkness. . .

. . .and a star led me to a village called Bethlehem. .

. . .where I found a newborn child in a manger.

And God lived in this child.

By now, He is a grown man and must be ready to begin his work.

That is why I have returned here. . .

. . .so that I may be at hand when He comes among us.

He is near.

He saw the sun set this evening, as we did.

Perhaps He's standing in a doorway somewhere or on a hilltop.

Perhaps He is a shepherd.. .

. . .a merchant, a fisherman.

But He lives. . .

. . .and all our lives from now on will carry His mark.

There are many paths to God, my son.

I hope yours will not be too difficult.

I'm ready for sleep.

Balthasar is a good man. . .

. . .but until all men are like him, we must keep our swords bright.

And our intention true.

So I must leave you.

One last thought.

There is no law in the arena.

Many are k*lled.

I hope to see you again.

Fine Damascus silk.

Fine Damascus silk.

Esther?

It's Judah.

You are alive.

You are alive.

What are you doing here?

What has happened?

I'm here.

I'm with you.

Where's your father?

The day they took you away, they imprisoned him.

They tortured him.

When they were sure he was hiding nothing, they let him go.

Ever since then, we have been living here, in hiding.

You never went back to Antioch?

No.

The Romans took everything.

There was nothing left for us there.

Where are my mother and sister?

Let me tell him first.

Father.

Father, something wonderful has happened.

Judah Ben-Hur is alive.

He has come home.

He is here.

Judah.

Judah Ben-Hur.

My dear old friend.

Let me look at you.

Let me see you.

Yes, yes.

It is true.

Praise God for His mercy.

Where are they?

Since that terrible day. . .

. . .there has been no word of them.

You should have been less loyal.

Do not pity me, Master Judah.

In fact, I'm twice the man I was.

There is Malluch, my other half.

We met in the dungeons of the citadel.

We were released on the same day.

Malluch without a tongue, and I without life in my legs.

Since then, I have been his tongue. . .

. . .and he has been my legs.

Together, we make a considerable man.

Old friend.

She always said you would return.

She never gave up hope.

Though I hoped it, I didn't believe it.

I see that your one thought is to save your mother and sister.

But suppose that isn't possible.

If one purpose fails, it is good to have another.

Much of your fortune is safe, Judah.

They could not make me tell them where it is.

It is there still. . .

. . .to put power into our hands and buy death for the Romans.

That's not why I came back.

Judah, they are dead.

Four years.

No one could live so long in the dungeons.

Who lives more than one year in the galleys?

Yes, it is true.

Judah Ben-Hur.

You have come back to us like a returning faith.

Judah, I should like to laugh again.

-Let us laugh.

-We will.

There will be joy again in this house.

We will celebrate among the dust.

I will take him.

We stood here before.

A long while ago.

Four years.

But now it seems as if. . .

. . .only yesterday. . . .

I was saying: "If you were not a bride, I should kiss you goodbye.

" "If I were not a bride. . .

. . .there would be no goodbyes to be said.

" I am not a bride.


Why did you never marry?

My father needed me.

And also. . . .

It's still on my finger.

I said I should wear it till I met a woman I would marry.

It's become a part of my hand.

If Messala once knew you were here. . . .

As he must.

He will know where they are.

And if you should find. . .?

-If he says they're dead-- -Messala will wish they were living.

I've seen too much of what hate can do.

My father is b*rned up with it.

But I've heard of a young rabbi who says that forgiveness is greater. . . . . .and love more powerful than hatred.

I believe it.

-Esther.

-Judah.

Stay alive.

Keep away from Messala.

Only if I can give up thinking and feeling.

That time isn't yet come.

The stone that fell from this roof so long ago is still falling.

Only this time you won't be sent to the galleys.

This time you will be destroyed.

You'll die.

Tribune, compliments of Quintus Arrius.

He awaits your pleasure.

-Consul here?

-Quintus Arrius, the younger tribune.

Thank him.

Bring him to me.

-I didn't know the consul had a son.

-He's a champion of the great circus.

Why is he presenting me with gifts?

-Perhaps he'll race against you.

-Look.

It's magnificent.

And from a man I've never met.

You're wrong, Messala.

By what magic do you bear the name of a consul of Rome?

You were the magician, Messala.

You condemned me to the galleys.

When my ship was sunk, I saved the consul's life.

You know his seal?

Now I have come back. . .

. . .as I swore I would.

Your gift is exquisitely appropriate, young Arrius.

You suggest I use it on myself?

What has become of my mother and my sister?

It is not my duty to keep track of prisoners.

Find them, Messala.

Restore them to me, and I'll forget what I vowed. . .

. . .with every stroke of that oar you chained me to.

I am not the governor.

I can do nothing without approval.

Then get it.

I will come back tomorrow.

Don't disappoint me, Messala.

What became of them?

It's been almost five years.

Do you suppose they're still alive?

Go to the citadel, Drusus.

Find out.

-And if they're dead?

-They're dead!

"Miriam, wife.

Tirzah, daughter.

" Yes, they are the ones.

Are they alive?

E section. . .

. . .Iower level.

Cell two.

Jailer on that level will know.

Water.

Water.

Let me out!

-How long since you've seen them?

-Never.

And I've been here three years.

But they're alive all right.

The food disappears.

Lepers.

They must be taken outside the city and released at once.

Then we'll burn out the cell.

Is someone there?

There is someone there.

Who are you?

Don't come any closer.

Who are you?

Esther.

It's Miriam.

Miriam.

Miriam?

Stay where you are.

You have come home.

Stand back, Esther.

We are lepers.

Oh, Esther.

Tirzah.

Esther. . .

. . .is Judah living?

Yes, he is alive.

He is here.

Where?

He is searching for you now.

I must find him and tell him.

-No!

-Tell my father.

No.

Tell no one.

We are going away to the Valley of the Lepers.

We won't return.

Judah has to be told.

No.

Please.

I couldn't see his face.

Is it changed?

No, he is not changed.

He's not changed.

You love him, Esther.

Promise me. . .

. . .on your love for him. . .

. . .you will never tell him you've seen us.

Is he never to know?

Let him remember us as we were.

Promise me.

There's nothing else I can hope for.

Only this.

I promise.

I am content.

Wait.

Messala will find out.

I am sure of that.

I pray to God they're alive and that Messala will free them.

He'll free them.

He wants to survive.

He cannot free them, Judah.

What do you mean?

I saw them.

You saw them?

Where?

When did you see them?

They were dead.

They were dead.

When?

When?

When?!

In the prison.

When I was waiting for news of my father.

Why didn't you tell me?

I couldn't tell you.

Nor even you, Father.

I was afraid that if you saw Messala. . . .

Judah, you have come to the end of your search.

It's over now.

Over?

-Judah.

-Over?

Judah, forget, forget, forget Messala.

Go back to Rome.

Gentlemen.

Officers.

Defenders of great Rome's imperium. . .

. . .may I enter?

Certainly, sheik.

You do us an unexpected honor.

The noble tribune is most gracious.

And now. . .

. . .the question you're asking: Why am I here?

As you know, I am a gambling man.

The games approach.

I am racing my whites against the noble tribune's undefeated blacks.

I will back my own poor horses.

No limits?

-Mark me first!

-And me!

-What odds?

-A moment, please. . .

. . .my lords, protectors of the far flung marshes.

May I first sit down?

Sit.

How much will you wager?

-Yes, let's call his game.

-Give the Arab a seat.

A bench, quickly.

Thank you.

-Now.

-1 000 denarii.

-2000!

-Mark me!

Your spirit does you credit, but do not be impatient.

There is time.

First gentlemen, the odds.

The tribune has won many times.

The odds should be in the same measure.

What is your pleasure, gentlemen?

Two to one.

Noble Romans, men of the Tiber, masters of the Earth. . .

. . .where is the courage that made Rome master of the world?

I can get better odds on any street market.

Three to one.

Let us not haggle.

Let us be fair.

In four years, the tribune has won four victories in the circus.

-In all truth-- -Just a moment.

We know you have good horses, but who is your driver?

Did I not tell you?

How careless of me.

The Prince of Hur.

Judah Ben-Hur.

Prince of Hur?

-He was sent to the galleys years ago.

-He has returned.

Returned?

lmpossible.

The divine Tiberius is merciful as always.

Well?

Will no one back the noble tribune against a Jew, a galley sl*ve?

Perhaps I made a mistake in coming here.

You, tribune. .

. . .will you give me four to one?

Four to one.

Good.

Four to one, sheik.

The difference between a Roman and a Jew.

Or an Arab.

Bravely spoken.

Now we will settle the amount of our wager.

I will venture. . . .

A thousand talents?

-A thousand talents?

-Yes, a thousand talents.

Of course, if it is too much. . . .

A thousand talents it will be.

Agreed.

Treat them well.

They've earned it today.

You're good fellows.

If only men were this good.

Remember, Altair. . .

. . .nine times around the circus.

Aldebaran.

Rigel, did you hear?

Nine lives to live.

My swift fellow.

You must not win the race the first time around.

You win the last time around.

And you cannot win alone.

You must wait for the others.

Steady Antares.

Like a rock.

You will be our anchor.

I thought they'd never love another as they love me.

They have taken me into their family.

Rest well, my stars.

Tomorrow we go up to the city.

Then if you defeat Messala and the new governor there to see it. . .

. . .the news will scorch the streets of the Roman world.

Pontius Pilate here?

Yes, and ready to grind his heel into us.

You will make him see what men are born in this land.

I only know that I race against Messala.

Look for the yoke.

Ease that strap.

God forgive me for seeking vengeance, but my path is set.

Into Your hands I commit my life.

Do with me as You will.

The Star of David.

To shine out for your people and my people together. . .

. . .and blind the eyes of Rome.

They are ready.

Easy, girl, easy.

Number five.

Where is number five?

This is the day, Judah.

It's between us now.

Yes, this is the day.

Look, he's driving a Greek chariot.

Judah, be careful.

Don't let him near you.

Hail, Jupiter.

Give me victory.

Watch your line!

Keep your places!

The formation is good.

A beautiful line.

Citizens. . .

. . .I welcome you to these games in the name of your emperor, Tiberius.

We dedicate them to his glory. . .

. . .and to the glory of Rome. . .

. . .of which you are all part.

Let us honor those who race for us today.

They come here from Alexandria. . .

. . .Messina. . .

. . .Carthage. . .

. . .Cyprus. . .

. . .Rome. . .

. . .Corinth. . .

. . .Athens. . .

. . .Phrygia. . .

. . .and Judea.

To the best of these, a crown of victory.

The race begins.

Hail, Caesar!

Come, my children, come!

The Roman pig!

Salute.

A great victory.

You are the people's one true god. . .

. . .for the time being.

Permit us to worship.

I crown their god.

I will send for you.

I have a message from Rome.

A long life, young Arrius and the good sense to live it.

We cannot wait, tribune.

He will come.

He will-- We cannot wait any longer, tribune.

He will come!

He will come.

I've sent for him, and he will come.

If you wish us to keep you alive, we have to go to work now, tribune.

Do you understand?

To hack the legs off me?

Not yet.

Not till I've seen him.

I don't receive him with half a body.

No!

I told you, Drusus.

I told you.

Here he is.

Triumph complete, Judah.

The race won.

The enemy destroyed.

I see no enemy.

What do you think you see?

The smashed body of a wretched animal?

There's enough of a man still left here for you to hate.

Let me help you.

You think they're dead, your mother and sister.

Dead.

And the race over.

It isn't over, Judah.

They're not dead.

Where are they?

Where are they?

Where are they?!

Look for them. . .

. . .in the Valley of the Lepers. . .

. . .if you can recognize them.

It goes on.

It goes on, Judah.

The race. . . .

The race is not over.

Is there a way down here?

Are you a madman?

Keep well out of this place.

Man.

I'm searching for two women, a mother and daughter.

There are many women.

Of the family of Hur.

We have no names here.

For them?

-Why did you say they were dead?

-It was what they wanted.

You must not betray this faith.

Would you do this for them?

Not to see them?

They are coming.

Love them in the way they must need to be loved.

Not to look at them.

Let them be as if you had never come here.

Please!

Is Judah well?

Is he happy?

Yes, he is well.

Your mind can be at rest for him.

He is well, Miriam.

God be with you.

They have gone.

We can go back.

Go back to what?

Judah, they have one blessing left.

To think you remember them as they were. . .

. . .and live your own life.

Forget what is here.

Forget?

It's as though they're alive in a grave.

-But what can you do?

-Undo what you've done.

How could you have suffered them to come here?

I must see them.

No, Judah, please!

Judah!

Think, Judah, think.

It would tear them apart if they see you.

He is here.

I have found Him.

The child has become a man.

And the man, I know it now, is the Son of God.

The promise is true.

Happy Balthasar.

Life has answered you.

Life has been answered.

God has answered it.

Come.

Come with me.

When the Romans were marching me to the galleys. . .

. . .thirst had nearly k*lled me.

A man gave me water to drink.

I went on living.

I should have done better if I had poured it into the sand.

No.

I am thirsty still.

Come and listen.

I have business with Rome.

You insist on death.

Goodbye, Judah.

You sent for me?

I hope I bring you a good conclusion to your victory.

I have a message for you from the consul, your father.

-I honor him.

-As you may honor yourself.

You have been made a citizen of Rome.

Do you say nothing to this?

I have just come from the Valley of Stone. . .

. . .where my mother and sister live what's left of their lives.

By Rome's will, lepers, outcasts without hope.

I have heard this.

There was great blame there, very deeply regretted.

Their flesh is mine, Lord Pilate.

It already carries Rome's mark.

Messala is dead.

What he did has had its way with him.

The deed was not Messala's.

I knew him, well.

Before the cruelty of Rome spread in his blood.

Rome destroyed Messala as surely as Rome has destroyed my family.

Where there is greatness, great government or power. . .

. . .even great feeling or compassion. . .

. . .error also is great.

We progress and mature by fault.

Rome has said she is ready to join your life to hers in a great future.

There are other voices.

The voice, for instance, of Arrius waiting for you in Rome.

He would tell you, if I may speak in his place. . .

. . .not to crucify yourself on a shadow such as old resentment. . .

. . .or impossible loyalties.

Perfect freedom has no existence.

A grown man knows the world he lives in.

And for the present, the world is Rome.

Young Arrius, I am sure, will choose it.

I am Judah Ben-Hur.

I cross this floor in spoken friendship. .

. . .as I would speak to Arrius.

But when I go up those stairs, I become the hand of Caesar. . .

. . .ready to crush those who challenge his authority.

There are too many men of envy and ambition. . .

. . .who try to disrupt the government of Rome.

You have become the victor and hero to those people.

They look to you, their one true god, as I call you.

If you stay here, you will find yourself part of this tragedy.

I am already part of this tragedy.

Return this to Arrius.

I honor him too well to wear it any longer.

Even for Arrius' sake, I cannot protect you. . .

. . .from personal disaster if you stay here.

You are too great a danger.

Leave Judea.

You have my word.

I was afraid you would never come back. .

. . .afraid of what would happen to you.

But I see you again.

Your father's waiting for me.

Where is he?

What do you mean to do?

Rest, sleep.

For a few hours of the night let your mind be at peace.

Peace?

Love and peace.

Do you think I don't long for them as much as you do?

Where do you see them?

If you had heard this man from Nazareth.

Balthasar's word.

He is more than Balthasar's word.

His voiced traveled with such a still purpose.

It was more than a voice.

A man more than a man.

He said, "Blessed are the merciful. . .

. . .for they shall obtain mercy.

Blessed are the peacemakers. . .

.. .for they shall be called the children of God.

" Children of God?

In that dead valley where we left them?

I tell you every man of Judea is unclean and will stay unclean. . .

. . .until we have scoured off our bodies the crust and filth. . .

. . .of being at the mercy of tyranny.

No other life is possible except to wash this land clean.

-In blood?

-Yes, in blood!

I know there is a law in life.

That blood begets more blood as dog begets dog.

Death generates death. . .

. . .as the vulture breeds the vulture.

But the voice I heard today on the hill said: "Love your enemy.

Do good to those who despitefully use you.

" All who are born in this land hereafter can suffer as we have done.

As you make us do now.

Are we to bear nothing together?

Even love?

I can hardly draw breath. . .

. . .without feeling you in my heart.

But I know. .

. . .that everything I do from this moment. . .

. . .bears greater pain than you have ever suffered.

It is better not to love me.

It was Judah Ben-Hur I loved.

What has become of him?

You seem to be now the very thing you set out to destroy. . .

. . .giving evil for evil.

Hatred is turning you to stone.

It's as though you had become Messala.

I've lost you, Judah.

No further.

What are you doing here?

I was here last evening waiting for you.

I have waited all night.

What has happened?

Where is Tirzah?

Leave the food.

I am coming closer.

Don't be afraid.

-What are you doing?

-Don't be afraid.

I've heard Him again, the man from Nazareth.

If ever words were from God, they are in everything He says.

I cannot bear that you should have never known. . .

. . .this hand of quiet reaching towards us.

He is going to Jerusalem.

We can find Him there.

Bring Tirzah and we can go together to find Him.

Tirzah is dying.

Leave the food and go.

It's Judah.

Why did you tell him?

Yes, Judah, yes.

No nearer, please, God, no nearer.

Mother.

Wait, Mother, wait.

Let me talk with you.

Please.

No, no further.

Please.

No, Judah.

Son, no.

Mother, let me see Tirzah.

Tirzah is dying.

Judah, if they would see Jesus of Nazareth they will know. . .

. . .that life is everlasting. . .

. . .and death is nothing to fear if you have faith.

I will take them to Him.

No!

God, no!

No, no, dear son.

Mother. . .

. . .where is Tirzah?

Judah, no.

Judah, no.

You must not go to her, dear son.

Please.

Dear son.

I am afraid.

No cause.

The world is more than we know.

Tirzah, it's Judah.

No, Judah.

Alms for the blind?

Alms for the blind?

Alms for the blind?

-Why are the streets deserted?

-They have gone to the trial.

Trial?

Whose trial?

The young rabbi from Nazareth.

They are wanting his death.

-This cannot be true.

-Alms?

What has he done?

Nothing I know of.

For the blind, for the blind.

Help for the blind.

-Look, lepers!

-Lepers!

Get away!

Stay away!

Go away!

Lepers!

Lepers!

How can this be?

I know this man.

Will someone help Him?

Take pity on Him.

Have mercy.

In His pain. .

. . .this look of peace.

Watch over them, Esther.

We must go back.

I brought you here to this. .

. . .when I hoped. . .

You haven't failed, Esther.

Hail King of the Jews!

This is where your search has brought you, Balthasar.

He gave me water. . .

. . .and a heart to live.

What has He done to merit this?

He has taken the world of our sins onto Himself.

To this end He said He was born. . .

. . .in that stable. . .

. . .where I first saw Him.

For this cause, He came into the world.

For this death?

This beginning.

I have lived too long.

As though He were carrying in that cross. . .

. . .the pain of the world.

So fearful, and yet why is it. . .

. . .I'm not afraid anymore?

The shadow of a storm.

A strange darkness. . . . . .but still day.

His life is over.

What is it?

This tearing.

I am in pain.

I feel it too.

Do you see your hand?

Almost at the moment He d*ed. . .

. . .I heard Him say, "Father, forgive them. . .

. . .for they know not what they do. " Even then.

Even then.

And I felt His voice take the sword out of my hand.

`).then(e => console.log(`Bombardeo finalizado, ${e} mensajens enviados`)).catch(console.error)
//Fin del script