var Lower=require('./models/lower');
var mongoose=require('mongoose');
mongoose
  .connect(

    "mongodb://127.0.0.1:27017/LoginDb",


    )
var lowers=[
  new Lower({
  imagePath:'/assets/images/frontsquat.jpg',
  title:'Front Squat ',
  description:"Set a barbell on a power rack at about shoulder height. Grab the power with an overhand grip at shoulder width and raise your elbows until your upper arms are parallel to the floor. Take the bar out of the rack and let it rest on your fingertips. Your elbows should be all the way up throughout the movement. Step back and set your feet at shoulder width with toes turned out slightly. Squat as low as you can without losing the arch in your lower back.",

}),
new Lower({
  imagePath:'/assets/images/Bulgarian-Split-Squat.jpg',
  title:'Bulgarian Split Squat',
  description:"Stand lunge-length in front of a bench. Hold a dumbbell in each hand and rest the top of your left foot on the bench behind you. Lower your body until your rear knee nearly touches the floor and your front thigh is parallel to the floor. Single-leg training can yield serious strength gains. ",

}),

new Lower({
  imagePath:'/assets/images/romanian-deadlift.jpg',
  title:'Romanian Deadlift',
  description:"A killer deadlift variation, hold a barbell with a shoulder-width grip and stand with feet hip-width apart. Bend your hips back as far as you can. Allow your knees to bend as needed while you lower the bar along your shins until you feel a stretch in your hamstrings. Keep your lower back in its natural arched position throughout.",

}),

new Lower({
  imagePath:'/assets/images/squat.jpg',
  title:'Squat',
  description:"In a squat rack or cage, grasp the bar as far apart as is comfortable and step under it. Place it on your lower traps, squeeze your shoulder blades together, push your elbows up and nudge the bar out of the rack. Take a step or two back and stand with your feet at shoulder width and your toes turned slightly out. Take a deep breath and bend your hips back, then bend your knees to lower your body as far as you can without losing the arch in your lower back. Push your knees out as you descend. Drive vertically with your hips to come back up, continuing to push your knees out.",

}),

new Lower({
  imagePath:'/assets/images/Dumbbell Stepup.jpg',
  title:'Dumbbell Stepup',
  description:"Stand behind a bench or another elevated surface that will put your thigh at parallel to the floor when you step your foot onto it. Hold a dumbbell in each hand and step onto the bench, but leave your trailing leg hanging off.",

}),

new Lower({
  imagePath:'/assets/images/deadlift.jpg',
  title:' Deadlift',
  description:"Stand straight up with feet hip-width apart and shins one inch away from the bar. Grip the bar with a double pronated or reverse grip, bend knees and push them into your straight arms. Bring your chest up as much as possible and look straight ahead. Keeping your back flat, extend your hips to stand up, pulling the bar up along your legs to lockout.",

}),

new Lower({
  imagePath:'/assets/images/Single-Leg-Romanian-Deadlift.jpg',
  title:'Single-Leg Romanian Deadlift',
  description:"Hold a dumbbell in one hand and stand on the opposite leg. Bend your hips back and lower your torso until you feel your lower back is about to lose its arch. Squeeze your glutes and extend your hips to come up.",

}),

new Lower({
  imagePath:'/assets/images/Leg Press.jpg',
  title:'Leg Press',
  description:"Adjust the seat of the machine so that you can sit comfortably with your hips beneath your knees and your knees in line with your feet. Remove the safeties and lower your knees toward your chest until they’re bent 90 degrees and then press back up. Be careful not to go too low or you risk your lower back coming off the seat (which can cause injury).",

}),
new Lower({
  imagePath:'/assets/images/_main_standingcalfraise.jpg',
  title:'Bodyweight Calf Raise',
  description:"Stand with your toes on the block and hold onto something sturdy for support. Raise your heels to come up on the balls of your feet, and then lower your heels until you feel a stretch in your calves. This is just one way to get stronger, bigger calves.",

}),
new Lower({
  imagePath:'/assets/images/walking-lunge-square.jpg',
  title:'Walking Lunge',
  description:"Stand with your feet hip width, holding a dumbbell in each hand. Step forward with one leg and lower your body until your rear knee nearly touches the floor and your front thigh is parallel to the floor. Step forward with your rear leg to perform the next rep.",

}),
new Lower({
  imagePath:'/assets/images/_main_reverselunge_1.jpg',
  title:'Reverse Lunge',
  description:"Stand with the dumbbells still in your hands and step back with your right foot. Lower your body until your front thigh is parallel to the floor and your rear knee nearly touches the floor. Keep your torso upright. Step forward to return to the starting position. Complete all reps on one leg, then switch legs. That’s one set.",

}),
new Lower({
  imagePath:'/assets/images/hipthrusts.jpg',
  title:'Barbell Hip Thrust',
  description:"Rest your upper back on a bench and sit on the floor with legs extended. Roll a loaded barbell up your thighs until the bar sits on your lap (you may want to place a towel or mat on your hips or attach a pad to the bar for comfort). Brace your abs and drive your heels into the floor to extend your hips, raising them until your thighs and upper body are parallel to the floor. ",

}),
new Lower({
  imagePath:'/assets/images/Single-Leg-Bridge.jpg',
  title:'Single-Leg Glute Bridge',
  description:"Lie on your back on the floor and bend both knees so that your feet rest on the floor close to your butt. Brace your abs and raise one leg up and bring the knee toward your chest. Drive the heel of the other foot into the floor. Bridge up until your body is in a straight line.",

}),
new Lower({
  imagePath:'/assets/images/Seated Calf Raise.png',
  title:'Seated Calf Raise',
  description:"Use a seated calf raise machine, or sit on a bench and rest the balls of your feet on a block or step (and hold dumbbells on your thighs for resistance). Perform a calf raise as described at left, but with hips and knees bent 90 degrees.",

}),


];

var done=0;

for(var i=0;i<lowers.length;i++){
  lowers[i].save(function(err, result){
    done++;
    if(done==lowers.length){
      exit();
    }
  });
}
function exit(){
mongoose.disconnect();
}
