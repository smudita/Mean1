var Product=require('./models/product');
var mongoose=require('mongoose');
mongoose
  .connect(

    "mongodb://127.0.0.1:27017/LoginDb",


    )
var products=[
  new Product({
  imagePath:'/assets/images/push.jpg',
  title:'pushups',
  description:"Place your hands on the floor slightly wider than shoulder width apart and extend your legs behind you. Brace your core and lower your body until your chest is just above the floor. Take two seconds to lower down and two seconds to press back up. Remember to keep your back flat throughout the movement, your elbows close to the sides of your torso, and to fully extend your elbows at the top of the pushup.",

}),
new Product({
 imagePath:'/assets/images/bench.jpg',
  title:'Bench Press',
  description:"Lie on a flat bench and grasp the bar slightly wider than shoulder width. Lower the bar to your chest while keeping your glutes and abs tightened, your elbows slightly tucked, and your back arched. When the bar touches your body, drive your feet into the floor to press the bar back up. Adjust your weights accordingly for each set.",

}),
new Product({
  imagePath:'/assets/images/overhead.jpg',
   title:'Overhead Press',
   description:"Set the bar up in a squat rack or cage, and grasp it just outside shoulder width. Take the bar off the rack and hold it at shoulder level with your forearms vertical. Squeeze the bar and brace your abs. Press the bar overhead, pushing your head forward and shrugging your traps as the bar passes your face.",

 }),
 new Product({
  imagePath:'/assets/images/pushpress.jpg',
   title:' Push Press',
   description:"Grab a barbell with an overhand grip and hold it at shoulder height. Keep your elbows up high and your upper arm parallel to the ground. Slightly bend your knees and drop down while keeping your torso upright and avoiding leaning forward. Explosively extend your knees and hips as you drive the barbell overhead and stand up tall. Slowly lower the barbell back to your shoulders before repeating.",

 }),
 new Product({
  imagePath:'/assets/images/incline.jpg',
   title:' Incline Bench Press',
   description:"Set an adjustable bench to a 30- to 45-degree angle and lie back on it with a dumbbell in each hand at shoulder level. Then arch your back, drive your feet into the floor, and press the weights over your chest.",

 }),
 new Product({
  imagePath:'/assets/images/clean.jpg',
   title:' Clean and Press',
   description:"Stand with feet shoulder width apart. Then, with your lower back arched, bend your hips back to lower your torso and grasp the bar with hands shoulder width. Extend your hips to lift the bar off the floor. When it gets past your knees, jump and shrug the bar so that momentum raises it and you catch it at shoulder level. Brace your abs and stand tall. Press the bar straight overhead",

 }),
 new Product({
  imagePath:'/assets/images/bentover.jpg',
   title:'Bentover Row',
   description:"Grasp the bar (or dumbbells) with an overhand grip and bend forward so torso is parallel to the floor. Squeeze your shoulder blades together and row the weight to your neck. This is different than a barbell row to your chest, so be sure to use less weight than you would for a barbell row.",

 }),
 new Product({
  imagePath:'/assets/images/pullup.png',
   title:' Pull Ups',
   description:"Grab the bar at (or slightly inside) shoulder width, with a supinated grip (palms facing you). While keeping core tight, pull yourself up until your chin is over the bar. Try not to use momentum to get your chin over the bar.",

 }),
 new Product({
  imagePath:'/assets/images/onearm.jpg',
   title:'One Arm Row',
   description:"Grab a dumbbell in one hand and stand in a staggered stance with one foot forward. Bend at your hips and knees and lower your torso until it’s almost parallel to the floor. Let the dumbbell hang at arm’s length from your shoulder. Without moving your torso, pull the dumbbell to the side of your torso, keeping elbow close to your side. Pause and squeeze at top of movement. Lower dumbbell back to start position.",

 }),
 new Product({
  imagePath:'/assets/images/dumbell curl.jpg',
   title:'Dumbell Curl',
   description:"Stand or set an adjustable bench to a 45- to 60-degree incline and lie back against it with a dumbbell in each hand. Hold the weights with your palms facing up and a braced core. Then, keeping your upper arms vertical, curl the weights up. Pause for a second and slowly allow the weights to return to the starting position with arms fully extended. Remember to keep your elbows tucked at your sides, to squeeze the biceps at the top of the lift, and to lower the weight until your arms are fully extended.",

 }),
 new Product({
  imagePath:'/assets/images/tri.jpg',
   title:'Triceps pushdown',
   description:"Attach a rope handle to the top pulley of a cable station and grasp an end in each hand. Push the weight down to lock out your elbows and then let your elbows drift back slightly on the way up so you feel a stretch in your triceps.",

 }),
 new Product({
  imagePath:'/assets/images/hammer.png',
   title:' Hammer Curls',
   description:"Hold a dumbbell in each hand with palms facing your sides and arms extended straight down. Keeping your upper arms against your sides, curl both weights at the same time, minimizing momentum used during the curl.",

 }),
 new Product({
  imagePath:'/assets/images/hangclean.jpg',
   title:' Hammer Clean',
   description:"Start by holding the bar against your body with your hands at shoulder-width on the bar. Keeping your back in its natural curve, bend your hips and knees (as you would in a squat), lowering the bar to just above your knees. Explosively extend your hips as if jumping, while at the same time shrugging your shoulders and pulling the bar straight up in front of your torso. As the bar reaches chest level, bend your elbows and flip your wrists to catch the bar at shoulder level. In this stance, your palms should face the ceiling, and your shoulders should be pointing foward. Make sure at this stage that your back is straight, and that the bar is at your center of gravity. Bend your hips and knees as you catch the bar to absorb the impact.",

 }),

];

var done=0;

for(var i=0;i<products.length;i++){
  products[i].save(function(err, result){
    done++;
    if(done==products.length){
      exit();
    }
  });
}
function exit(){
mongoose.disconnect();
}
