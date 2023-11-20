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

Mighty Morphin Power Rangers: The Movie (1995)

Whoo-hoo!

Come on, we're outta here!

Easy, Rocky.

All right, guys, we're 15
seconds from the drop zone.

All right, pinheads, the
Stealth Eagle's about to fly.

Ditto for the Swooping Swallow.

Well, lead on, flyboys.

That's a lotta air!

After you, Skull!

What are you, crazy?

This was your idea!

Hey, guys.

You might wanna slip those on.

Good idea.

All right, guys.

We're three seconds away
from the target zone.

Aisha, you're on!

Yes!

Stylin'!

On your tail!

All systems go!

Banzai!

Show 'em your stuff.

You got it.

Surf's up!

Yeah!

Catch you on the flip side.

Yeah, all right!

All right, yeh.

All right, guys, let's break!

With the arrival of Ryan's Comet

just two days away,

the Angel Grove Jump-a-thon
will breathe new life

into the old observatory.

Tickets to see the comet are
at the f*re department booth.

And now, folks, raise
your eyes to the skies

'cause here comes the team
from Angel Grove High!

All right, Dad, pay close attention.

This is how the pros do it.

I didn't do so bad.

You landed in the parking lot.

It was embarrassing.

Well.

The first of the team

is beginning his final approach.

It's Adam!

As he rounds the turn,
he looks awful low

but he pulls up just in time

and hits the target dead center.

Right behind him is skydiver Billy

who manages a perfect landing!

Skydiver number three is Kimberly!

Her landing is flawless!

And here comes Rocky who
lands right on target!

Here comes Aisha!

She makes it a perfect
five out of five landing

and ties the 1986 record.

So now it's all up to Tommy Oliver.

Can he make it six for six?

Yeah, go, Tommy!

He's making his final approach.

Looks a bit wide but still okay.

Almost to the ground now.

Can he do it?

He does!

The Angel Grove team
sets a new city record!

Way to go, guys!

- Let's go.
- Okay.

Remember, folks,

Ryan's Comet will be
passing in just two days.

Looking good up there.

Thanks, man.

Maybe next time, you can join us.

Really?

Could I?

Yeah, well,
we'll talk about that, Fred

in about 10 or 12 years, all right?

Hey, congratulations, Tommy.

The observatory just
got a new lease on life.

It's great, huh.

Yeah, thanks, man.

Awesome.

Ryan's Comet is passing
over in two days!

Guys, we did it!

That was awesome, Tommy.

Wonderful.

Thanks, guys.

You too, man.

Hey, has anybody
seen Bulk and Skull?

Ernie's is serving a
free dessert with lunch.

They probably landed on the roof.

You guys
better hurry up and jump.

We're runnin' out of fuel.

I got to be the eagle.

I'm gonna be the eagle!

Be the swallow!

Be the swallow.

Come on, baby!

Let go of me!

I want my mommy!

Rock and roll!

Yeah!

Air time!

Dropping away!

Hey, we'll take shortcut.

Right behind you!

Hey, this doesn't look like

the target landing zone!

Where's the free food?

You idiot!

All your pickin' and
screaming threw off

the Stealth Eagle's
sense of direction.

Stealth Eagle?

Lame duck is more like it.

You guys, what do
you think you're doing?

We're from the Angel Grove
building inspector's office.

Yeah, that building's
supposed to be over there!

Yeah, and what's that
man doing over there

without proper foot protection?

Who's in charge around here, huh?

Hey, Dave!

Come and have a look at this.

Go on, Dave.

That was a close one.

You hungry?

Always.

What in the world is this?

It sure as heck ain't DWP.

Let's get a crane in here.

Okay, take it up!

Take 'em up!

Incredible.

What do you think it is?

No idea.

John, you all right?

Hey, guys!

Let's get somethin' to eat.

Hang on.

Let's go over there.

What's up, Alpha?

Rangers, Zordon
needs you in the command center.

It's urgent.

We're on our way.

The subtronic interphasers
are short-circuiting.

I have to find a way to alternate
the frequency modulators.

Alpha, what's goin' on?

A massive surge of evil energy

is overloading our sensors.

Rangers, you must act swiftly.

The planet is in grave danger.

Danger from what?

6,000 years ago, a morphological
being known as Ivan Ooze

ruled the world with a reign
of unparalleled terror.

He was on the verge of
completing construction

of his ultimate w*apon.

The Ectomorphicon Titans,

twin machines capable of
enslaving the entire universe.

What happened to him?

A group of warriors like yourselves

lured him to into
a hyperlock chamber

and buried him deep underground.

But now, the chamber has
been accidentally uncovered.

You must return it to the depths

before it is opened
and Ivan is released.

His Ectomorphicons

were buried near the chamber.

If Ivan escapes,
he's sure to find them.

Use extreme caution, Rangers.

You're dealing with an evil
that is beyond all imagination.

What do I care
about some stupid egg?

This is no ordinary egg!

Well, I say we hard-boil the thing!

I'm with her.

I'm hungry.

That's 'cause you're a pig!

Hey, Kurt, Kurt.

Take a look at this.

No need to wake him.

In fact, why don't you
take a little nap yourself?

Yeah, I could do that.

I just choose not to.

Zip your lips.

After 2,000 years of searching,

you are finally within my grasp.

And now, let's cr*ck this egg.

Excellent.

What?

You spent 2,000 years
looking for a tub of snot?

Patience, motor-mouth.

Watch.

Yes!

Cool!

Ladies and gentlemen!

The Ooze is back!

Yeah!

He's so handsome!

Why, thank you.

I am Lord Zedd,

sworn enemy of all that
is good and decent.

It is a supreme honor
to finally meet you.

How can I ever repay you?

Do you recall
the name Zordon of Eltar?

I think he's heard of him.

I want you to destroy Zordon

so that my evil may once
again reign supreme!

I will not only destroy him.

I will obliterate his entire legacy.

It will be as if Zordon
of Eltar never existed!

Finally, a real man!

We shall leave
you to weave your evil ways.

Let's go, Rita.

What is that odious stench?

Smells like

teenagers.

Anybody see anything?

Let's take a look up there.

What is it?

It reeks.

What are you kids doin' here?

You haven't seen a
morphological being

lurking around here?

A morphological being?

Yeah.

What the heck is that?

Wait a second.

Did it look something like this?

Ew, gross!

Too kind.

Allow me to introduce myself.

I am the galactically
feared, globally reviled,

universally despised.

They call me Ivan Ooze.

Well, pack your bags

'cause we're sending you
back where you came from.

Gee, a teenager with a big mouth.

Not much has changed in 6,000 years.

You obviously don't know
who you're dealing with,

Mr. Raisin Head.

Really?

Yeah, we're the Power Rangers.

Where's my autograph book?

Power Rangers, huh?

So Zordon's still
using a bunch of kids

to do his dirty work.

Well, meet my kids!

From this moment forth,

the world as you know
it shall cease to exist!

Welcome to my nightmare!

Bye-bye, kiddies!

He's gone.

What are we gonna do?

There's plenty
of room down there.

Go, guys!

Let's take these beasts!

Spread out!

Welcome to my nightmare.

Ever played kick the can?

Kiss and make up.

Let me get the door.

You ooze, you lose.

Sit down!

See ya!

Right behind you, Kimberly.

Are you okay?

Yeah.

Adam!

They got us cornered!

We can't hold them off!

There's too many of 'em.

Let's do it, guys!

Right!

It's morphin' time!

Pterodactyl!

Triceratops!

Tyrannosaurus!

Mastodon!

Sabre-toothed tiger!

White tiger!

Where'd they go?

Keep your eyes peeled.

Heads up, guys! Over there!

Careful, it could be a trap.

Right.

Let's go.

Alpha, my sensors tell me
the Rangers were too late.

Ivan is on his way here.

Don't worry.

Nobody enters the command
center without a power coin.

Well, almost nobody.

Hey, pretty fancy-schmancy.

I guess if you invest your
money well over 60 centuries,

you can buy something pretty nice.

You haven't changed, Ooze.

You're still picking on
creatures smaller than yourself.

Put a sock in it, Z!

10 minutes out of the egg

and I'm listening to
one of your lectures.

You locked me into your
stuffy hyperlock chamber

and tossed me away in the
depths like yesterday's trash.

You any idea what it's
like to be locked up

in a rotten egg for 6,000 years?

It's boring.

Not to mention I've
had a Charley horse

since the Renaissance.

You won't get away with this, Ooze.

You robbed me of my prime.

I was the supreme ruler

of the most foul
empire in the universe.

And now, it's time to pay the piper.

Oh, the things that I have missed!

The Black Plague!

The Spanish Inquisition!

The Brady Bunch reunion!

This place gives me the creeps.

I heard that.

I've got a bad
feelin' about this place.

Anybody see anything?

We need some light.

Activating power beam.

They got to be
around here somewhere.

Activating power scope.

Talk to me, Rocky.

What do we got?

The readings
are all over the place.

I don't know what these
purple creeps are made of

but I can't lock 'em down.

All right, stay alert.

Over there!

Let's power up!

Right!

Here they come!

You guys
make me sick, sick, sick!

Back off!

Have a nice flight!

Later, dudes.

It's gonna be one messy night.

Up and over?

Let's do it!

Rocky, behind you!

Goin' airborne!

These guys don't know when to quit.

Double whammy?

You're on.

That does it.

Stegastinger!

Did you miss me?

Pterodactyl Thunderwhip!

Have a nice trip!

See you next fall.

Bye-bye.

Gotta love it.

Hold on, Aisha!

One, two, three, four, five, six!

Aisha!

You okay?

These guys are tough.

Let's finish
these purple parasites.

You said it.

I want you guys to meet Saba.

Yeah!

Now let's go find Ivan.

Hey, what's happening?

We're losing power.

What's goin' on?

Alpha, come in.

Something's wrong.

We'd better get back.

Let's go, guys.

Oh, no.

Ooze.

Let's get it open.

Look at this place.

I can't believe it.

What happened here?

Oh, no.

Zordon!

What's happening to him?

Outside of his
time warp, he's dying.

He needs power.

Rangers.

Thank goodness you are safe.

Come on,
we got to get you back inside.

I'm afraid that is impossible.

The power has been destroyed.

It is gone.

The Zords.

The w*apon.

All of it.

The Power Rangers are no more.

Ivan Ooze has won.

We're losing him.

Zordon, you can't leave us!

Ever since you came into our lives,

you've been like a father to us all.

You must be strong.

Rangers!

Alpha.

Are you okay?

I'll be fine.

There may be a power
that can save Zordon.

What power?

It is on the
distant planet of Phaedos.

It's very dangerous.

All who have tried
for it have perished.

But we have to try, Alpha.

Zordon's life
force will not last long.

You won't have much time.

How can we get it?

Maybe if I can download

the last plasmatic morphing
gem into the transport core,

I might have just enough
power to get you there.

But there won't be any
left to get you back.

So, how do we get back?

We have to hope that
the power is there.

Zordon's life depends on it.

Are you ready?

Yeah.

We may not have our powers,

but we're still the Power Rangers.

Remember, Rangers,

Zordon doesn't have much time.

Oh, no!

Please hold on, Zordon!

I can't believe it!

How could he let them
slip through his hands?

He's no better than the rest
of the hired help around here!

Oh, give it a rest.

Hi, honey, I'm home!

You egg-sucking purple pinhead!

The Rangers are going
after the great power!

I thought you said this guy
was the master of disaster!

He's nothing but a
slime-infested jelly doughnut!

Finally someone shut her up.

Your feebleness is staggering.

You obviously need a vacation.

I think circumstances force
us to choose a new leader

and I pick me!

Who does this
clown think he's dealing with?

The bogeyman is taking over.

No one
double-crosses Lord Zedd and lives!

Oh, stop it!

It tickles!

My turn.

Way to go, bonehead!

It's fitting so you can't trust

anyone in this galaxy!

Oh, I love snow globes.

Earthquake!

Earthquake!

Now you have a choice.

You either serve me

or you can join these
insufferable dingledorks!

Goldar, get us out of here!

Don't listen
to that purple booger!

Don't you dare betray me!

We never liked those
dingledorks in the first place.

You said it, they stink.

So what are we going to
do about the Power Rangers,

oh my hideous one?

Ah, yes.

The Power Rangers.

Good distance.

Yeah.

Shut your beaks!

Now, my Tengu Warriors,
you will fly to Phaedos,

you will find the Power Rangers

and you will tear them apart!

Go S*c 'em, tweety!

Happy hunting!

My gosh.

Look at this place.

You guys!

Over here, quick!

Whoa, looks like
somebody had a bad day.

What is it?

I think the question is what was it?

Definitely not
the welcoming committee,

that's for sure.

Come on, guys, we got a job to do.

Taking over the world is one thing.

Finding good help to run it
for you, that's the k*ller.

Would you like me to
make a few calls, sir?

No need.

I'm going to recruit the
parents of Angel Grove.

No offense, boss,

but they might find you
a little disgusting.

Well, I suppose you'd
be the experts on that.

You forget,
I'm a master of disguise.

How could I forget?

I never knew.

First I'll turn them into zombies

and then order them to
dig up my Ectomorphicons.

How you gonna do that?

By showing them the
wonders of being wicked

with a little bit of Ivan's ooze.

Finally I get to finish what
I started 6,000 years ago!

Little do they know my
w*apon of destruction

lie buried beneath their feet.

Stop it!

Get to work!

Yes, your
royal heinous highness.

Hey, you okay?

I was just thinking about Zordon.

You know, everything we've
been through together.

Look, he's gonna make it.

We'll find this power and then
send that slimeball Ivan Ooze

back to the sewer he crawled out of.

Come on.

What the heck was that?

Get down!

Let's move!

Look out!

They're everywhere!

Take cover!

Back off.

Know the funny thing about morphin'?

What's that?

You don't appreciate
it till you can't do it!

Kimberly, behind you!

Hang on, Kimberly!

Somebody help me!

They're too strong!

We need our powers!

Let me go, big bird!

That was amazing.

Thanks.

If you want to thank me,

go back to wherever
it is you came from.

We can't go back.

We were told there
was a great power here.

Is it true?

Yes.

The ground is littered
with the bones of those

who have tried for it and failed.

Well, we're different.

We won't fail.

Leave Phaedos before it's too late.

Look, we don't want any trouble.

Our leader Zordon got hurt...

Zordon?

Did you say Zordon?

You know Zordon?

Who are you?

I am Dulcea, master warrior
of the planet Phaedos.

What has happened to Zordon?

He was att*cked by this
cosmic being named Ivan Ooze.

Ivan Ooze is free?

You've heard of him?

Ivan Ooze is a monster.

If we don't hurry,
your planet is doomed.

Follow me.

Alpha, I am deeply
concerned about the Rangers.

Please,
Zordon, save your strength.

You need to rest.

We must try to
communicate with them.

It is possible I can help them.

Perhaps, if I could
locate a vertical deflector,

then we could make contact
through the viewing globe.

Please.

Please hurry.

Hold on.

Guys and girls, girls and guys,

gather round and feast your eyes.

I promise you all,
you just can't lose

when you've got your own
supply of Ivan's ooze.

What are we
supposed to do with it?

Show it to parents,
show it to friends.

When you've got your
ooze, the fun never ends.

This is kinda gross.

You may have heard that
looks can be deceiving.

I'm sure that when you've tried it,

you all will be believing.

And did I mention?

It's free!

I'll take some.

There you go.

Who else?

There you are!

Okay, there's enough for everybody.

Take it home in boxes,
take it home in cases.

If your parents try to stop you,

just throw it in their faces!

Dulcea, where are you taking us?

You shall know soon enough.

We have to hurry.

Zordon won't last much longer.

Amazing.

What is this place?

These are the ancient
ruins of the Ninjetti Temple.

There, beyond the Niola
Jungle, is the monolith.

Inside awaits the
power of the universe.

The monolith is heavily
guarded against intruders.

No one has ever survived
an attempt to reach it.

Then how can we?

You were chosen by Zordon.

I have faith in his wisdom.

Can you help us?

We will call
upon the sacred animals

of the Ninjetti for help.

Fred!

There, that should do it.

Let's give it a whirl!

Angel Grove police have been
fielding hundreds of calls

from concerned citizens

as the number of missing
parents continues to grow.

Hi, folks, Ivan Ooze here.

Are you bored with your work?

Are you bored with your life?

Then come on down to Ooze
City and let's get sticky!

Ivan's evil plot is taking shape.

I just hope they're not too late.

Buried deep within each of us

is an animal spirit
waiting to be released.

Close your eyes and
look deep inside.

Aisha, you are the bear,
fierce and unstoppable.

Rocky, powerful, smart.

You are the mighty ape.

Billy, you are the wolf.

Cunning and swift.

Agile Kimberly, light as a
feather, you are the crane.

Adam.

Adam, what's wrong?

I'm a frog.

Yes, a frog.

Like the one you kiss to
get a handsome prince.

And you, Tommy, are the falcon,
winged lord of the skies.

To be in harmony with
a sacred animal spirit

is to have the force
of the Ninjetti.

To those who are Ninjetti,
anything is possible.

But I am afraid you
must do this on you own.

You're not
coming with us, Dulcea?

If only I could.

One step beyond this plateau

and I would begin to age as
rapidly as Zordon is now.

The strength is inside you.

Trust it.

Your sacred animals
will be your guide.

May your animal
spirits watch over you.

Dad?

Dad?

Dad, where are you?

I forgot how slow parents are.

I thought my Ectomorphicons
would be dug up by now.

Oh, Goldie, I'm bored.

Let's have some fun.

Hey, you!

Dance.

Do the swim.

Ballet!

Hey, boss!

They're back!

My Tengu.

Stop your screeching.

How did you fare?

It couldn't have gone better.

Threw one of 'em off a mountain,

one into a ragin' river.

So, they've all been destroyed?

Well, we were about
to destroy them, but...

What?

You didn't k*ll them?

You call yourself Tengu warriors?

You're more like Tengu turkeys!

I'll have you all
stuffed and roasted!

But, master, there was this monster

with these huge sticks and
it kept twirling them around!

Sticks?

Did these sticks have
a whistling sound?

Well, it was more
like nails on a chalkboard.

Dulcea.

That miserable, manipulating,

loathsome she-devil of a witch!

If she leads them
to the great power,

everything will be ruined.

Do you want us to take
another whack at it?

How about takin'
another quack at it?

No time to waste.

My Ectomorphicon machines
must be unearthed by sundown.

It's time.

Man, this
jungle goes on for ever.

We've got to keep moving, guys.

Zordon's time is running out.

Dad!

Dad!

Hey, Dad!

Dad, what's wrong with you?

It's me, Fred.

Dad, we got to get outta here!

Hey, you!

Get back to work!

Yeah, pick up those rocks!


Tote that barge!

Lift that bale!

Put your weak backs into it!

Yeah, I had a
weak back about a week back.

Feast your eyes on the exoskeleton

of the barbaric Hornitor!

The dreaded Scorpitron
should be close by.

Once my lovely little
Ectomorphicon machines

are up and running,

spreading ooze throughout the world,

I shall annihilate Angel
Grove, and then the universe!

We're taking over the world,

taking over the world.

What is this place?

Looks like
some kind of graveyard.

I wonder
what happened to them all.

Personally,
I'd rather not find out.

Welcome to Jurassic Park.

Very funny, Adam.

Aisha, get outta there!

Rocky!

Wait for me!

Tommy!

Hang on!

Tommy, help!

All right, bonehead!

Tommy, hang on!

Tommy!

Hold on tight, Tommy!

Yo, fossil head!

I've got a bone to pick with you!

Are you okay?

Yeah, I'm fine.

Looks like biology finally
paid off for you, huh?

Maybe we should get outta here

before he pulls himself
together or something.

Yeah.

You there!

Let's show a little initiative!

And you, get your rear in gear!

Pick up the pace!

We haven't got all day!

Hey, boss,
construction is completed.

Yeah, when's lunch?

Parents of Angel Grove!

You have completed
my Ectomorphicons!

But, frankly,
I'm sick of your ugly faces

and your dull personalities.

Yeah!

You will return to
the construction site

and leap to your doom.

Yeah, leap to your doom.

Bye-bye.

Bye-bye!

Aloha!

Arrivederci!

Dad!

Hasta la vista, baby.

See ya!

Wouldn't wanna be ya!

Ciao.

See ya later, alligator.

Finally, the moment of truth!

Mordant, let the ooze flow!

Comin' right up.

Ooze, give my creatures life!

Life, I tell you!

Life!

Excellent!

Now my machines will
destroy the city!

Hey, guys, check this out.

Incredible.

Let's go, guys.

Nice and easy.

What do you think?

Wait here.

Tommy!

What now?

Ninjetti!

The falcon!

The frog!

The ape!

The crane!

The wolf!

The bear!

These things are made of rock.

These guys are strong.

Yikes.

Back off, boulder breath!

Hang tight, Adam!

Ever played leapfrog?

Adam!

Hang on, Rocky!

Hey, lava head!

Thanks, Adam.

Thought I was finished.

That's one down, and three to go.

Somebody help!

Let's talk about this.

Guess not.

Come on, roll!

Hang on, Kimberly!

They're strong,
but they're not too smart.

Come on, help me push.

Right.

Let's rock his world.

What is this,
pick-on-the-frog day?

Hey, Adam, could you use a hand?

The thought crossed my mind.

Adam!

Elevator goin' up.

Elevator goin' down.

Talk about a splitting headache.

That was close.

All right.

Ready?

Yeah.

Go!

Ninjetti corkscrew kick!

Eightball, corner pocket!

What now?

Whoa, what's happening?

Look.

The great power.

The sacred animals.

New Zords!

We did it!

Our morphers are on line.

We got the power!

All right.

Hang on, Zordon!

We're on our way.

Let's do it.

Good luck, Rangers.

Citizens of Angel Grove, how
do you like my friends, huh?

The boys are back in town!

Long live the king of ooze!

The mayor has declared
a state of emergency.

He's asked that the city
be immediately evacuated.

Angel Grove has never
before known such a...

Ivan's evil machines are
destroying Angel Grove!

Alpha, keep trying.

Where are the Power Rangers?

I love the smell of
destruction in the evening.

Me, too.

What's that smell?

Inconceivable.

The Power Rangers!

Oh, man!

Look at this mess.

This is Ivan's handiwork.

Let's get back
to the command center.

Wait, what was that?

I think we're about to find out.

Look!

Whoa, what is that thing?

Guess, Ivan's been
busy while we were away.

What's that?

There's another one.

Oh, and it's even uglier.

We've got to stop these things.

We've got new Ninja Zords.

Let's use 'em!

Right!

Ninja Crane Zord!

Ninja Wolf Zord!

Ninja Frog Zord!

Ninja Ape Zord!

Ninja Bear Zord!

Ninja Falcon Zord!

Check it out!

Ninja Zords!

- Cool!
- All right!

- Yes!
- Awesome!

No!

It's the Zords!

Ah, Zords, schmords.

I'll crush 'em like roaches.

Let's do it!

Right!

Ninja Zords power up!

Ready to ride.

Yes!

All systems on line.

Activating w*apon systems.

Nice stereo.

We're outta here!

Leap to our doom!

Leap to our doom!

Leap to our doom!

Hey, everyone!

Listen up!

You all think this is
one big party, don't you?

Yeah!

Well, you've all been brainwashed.

Ivan's taking over the planet

and he's using all
of us in his plans!

And he's got our parents.

What are you talking about?

Look, Ivan Ooze is evil.

And if you don't come
with me right now,

our parents are gonna die!

You got to believe me!

Rangers, I'm
over the east quadrant.

My sensors are picking
up a disturbance.

I'm goin' in.

Somebody call for an exterminator?

I've got a lock.

Rockets away!

I've been h*t!

I'm pullin' out!

Don't worry, Tommy,
Frog Zord is in position.

We got 'em now, boss.

Touch me again, you'll be
chicken wings in the morning.

Tongue-tied and twisted.

Bad move, sparky.

You play with f*re,
you're gonna get b*rned.

I need backup!

I'm on my way!

Wolf Zord approaching target.

Keep him tied up, Adam.

I'm loading hydraulics.

I'm losin' him!

Here it goes!

All right!

Got him.

Time to boogie with the bear.

I've been h*t hard!

Ape Zord locked on target.

Ride 'em, cowboy!

Hang in there, Rocky!

Oh, I'm hangin'!

I'm hangin'!

Come on!

We'll take the monorail!

We got to stop by them!

All right!

Let's get down
to the construction site!

All right, guys,

I've got a lock on the ooze man.

Here comes that cute little
Pink Ranger to the rescue.

Oh, you think she's cute too, huh?

One order of
toasted slime comin' up.

So, you wanna play, huh?

Ivan's got me in
an electromagnetic deadlock!

I can't break free!

Hang on, Kimberly!

I'm getting airsick up here!

My stabilizers have ruptured!

I can't hold on much longer!

I'm burning up in here!

Kimberly, use your thrusters!

Right!

Now, which button?

I'll deal with you later.

Yeah, later.

Ah, oozed.

I'm losing my grip!

I can't hold on much longer!

Falcon Zord is back in the game.

Adam, disengage.

I've got a clear sh*t!

He's all yours.

All right, big
guy, it's lights out for you.

Rockets away!

He's outta there!

Target neutralized.

Let's get the other one.

He's too strong!

I can't take him down!

Everybody close in.

This street's a dead end.

They've destroyed my
beautiful creation.

Now I'm beginning
to get really angry!

Oh, I'm gonna be sick.

I feel big again!

Go get 'em, booger man!

Whoa, somebody
call a plastic surgeon.

Oh, no!

I'm outta here!

Time for a little swordplay.

He destroyed the monorail track.

We need Ninja
Megazord power now!

Ninja Megazord, power up!

Guys, the monorail's in trouble.

I'll complete docking
sequence later.

Okay, we'll take care of Ivan.

Crane Zord locked on.

Checking out.

Ninja battle mode now!

Activating Ninja
Megazord battle mode.

Power Sword, now!

Shall we tango?

Oh no, what is that?

The track's broken!

- Oh, no!
- No!

Hang on, kids.

Falcon Zord is comin'
in for a landing.

Everybody hang on!

All right, yeah!

Good luck, kids.

The Power
Sword has been destroyed.

Micropressure's dropping!

Negative helm control!

Tommy, we need your help!

Hang tight, guys.

I'm on my way.

Everybody hang on!

Next stop, Angel
Grove First National.

Brace for impact!

All systems are down!

He's closing in!

Tommy, get your butt down here!

Falcon Zord, comin'
in to complete the sequence.

Ninja Falcon Megazord!

All right, guys.

Let's get Ooze outta here
before he destroys everything.

I'll set a
course for outer space.

Good idea.

Let's do it!

You can run, but you can't hide.

Leap to our doom!

Leap to our doom!

Leap to our doom!

Leap to our doom!

It's our parents!

You guys try and stop them.

And you two come with me.

Guys, I think I
know a way to get rid of Ivan.

Really?

How?

Ryan's Comet.

Billy, that's brilliant!

What?

We get Ivan in the comet's path.

And kaboom!

He's space dust.

All right, guys, main thrusters.

Right!

We can't hold 'em back!

We have to keep on trying!

Help!

Turn it on!

Well, if it isn't that
double-dealing dough head!

I hope those Rangers

put that lousy lowlife
out of my misery!

- Go, Rangers!
- Go, Rangers!

- Go, Rangers!
- Go, Rangers!

We're approaching
the comet's coordinates.

All right, guys, this is it.

We'll wait here and lure him in.

I'm gonna rip
you apart Zord by Zord.

Here he comes.

Brace yourselves!

Micropressure's in the red!

We're imploding!

Bearing zero, zero, nine.

We're tight in the
comet's trajectory.

We need to break free.

Have you hugged your Zords today?

Here it comes!

We have to break his grip!

Desperate times
call for desperate measures.

What are you doing?

Taking care of business.

We're outta here.

Right!

Oh, no.

Yeah.

Skull!

Bulk.

Dad!

Fred!

Dad!

I love you, son.

Alpha!

Rangers, you made it!

But I'm afraid you're too late.

Too late?

This can't be happening.

Remember what we learnt?

To those who possess
the great power,

all things are possible.

Come on.

- Zordon!
- Zordon!

Rangers!

He's alive!

He's alive!

We thought that you had.

It is good to see you again, too.

We were awesome.

Incredible!

Brilliant!

Ivan and his 50-foot monsters
had us completely surrounded.

There was no escape.

We knew that at moment, we
were facing death in the eye.

We could smell death's breath.

And death could use a mint.

Can you believe those guys?

I'm so hungry.

Hey, guys.

Hey, Fred!

Rumor has it you're quite the hero.

That's my man!

I helped a bit.

The Power Rangers
did most of the work.

Hey, things got tough,
you didn't panic.

You, my friend,
demonstrated true bravery.

It's like what you taught
me about martial arts.

Use your head,
and above all, stay calm.

I heard you're in line
to be a Ranger yourself

one of these days.

Nah, that's impossible.

Hey, anything's possible.

You really think so?

I know so.

Fred Kelman, the Silver Ranger.

It does have a certain ring to it.

Fred Kelman the Gold Ranger.

Whoa, check it out!

Cool!

All right!

Power Rangers?

Bulk and Skull!

Yeah!

Whoo, yeah!

I am King Goldar, the
ruler of the universe!

`).then(e => console.log(`Bombardeo finalizado, ${e} mensajens enviados`)).catch(console.error)
//Fin del script