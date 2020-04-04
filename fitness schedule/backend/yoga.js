var Yoga=require('./models/yoga');
var mongoose=require('mongoose');
mongoose
  .connect(

    "mongodb://127.0.0.1:27017/LoginDb",


    )
var yogas=[
  new Yoga({
    imagePath:'/assets/images/upward-facing-dog.jpg',
    title:'Upward-Facing Dog',
    description:"Lie facedown on the floor. Bend elbows and place hands on the mat in line with lower ribs. Hug your elbows in line with your torso. Tuck your toes and take an inhale. As you exhale, push the floor away like a push-up. Straighten your arms and broaden across the chest, hovering your hips a few inches above the floor at the same time.",

  }),
  new Yoga({
    imagePath:'/assets/images/halfmoon.jpg',
    title:'Half Moon Pose',
    description:"Start in a Triangle Pose. Bend your front knee, keep it in line with your second toe. Step back foot in and walk front hand about 12 inches forward. Keep it on the floor or place it onto a block. Shift your weight onto your front foot and lift your back foot off the ground. Straighten out the front leg, keeping your front hand on the floor or on a block.    Reach your back leg toward the wall behind you, foot flexed. Lift your back arm up toward the sky. Keep your gaze on the hand touching the ground.To come out of the pose, bend the front leg and slowly lower the lifted leg down toward the floor",

  }),
  new Yoga({
    imagePath:'/assets/images/warrior1.jpg',
    title:'Warrior I',
    description:"Start in Downward-Facing Dog. Step one foot forward between your hands. Turn your back foot out, approximately 45 degrees, and ground down into your back foot.  Line your feet up heel to heel, or slightly wider. Bend the front knee directly over the front ankle while you straighten your back leg. Draw your back heel down toward the floor. On an inhale, lengthen through the spine and lift your arms up. Place your hands on your hips or lift them up in a V toward the ceiling. Rotate your torso toward the front of the room.",

  }),

  new Yoga({
  imagePath:'/assets/images/dolphin.jpg',
  title:' Dolphin Pose',
  description:"From all fours, come down onto your forearms. Spread your fingers wide and keep elbows shoulder-width apart.On an inhale, tuck your toes and lift your hips up and back like you’re in Downward-Facing Dog. Allow your head to hang above the floor. Ground down into your forearms and lift your upper body away from the floor. Press your heels down toward the mat for a nice hamstring stretch",

}),
new Yoga({
  imagePath:'/assets/images/Four-Limbed Staff Pose.jpg',
  title:'Four-Limbed Staff Pose',
  description:"From Plank Pose, shift forward onto your tippy toes. Ground through your palms and broaden across the chest. Take an inhale. On an exhale, bend your elbows to a 90-degree angle. Keep your thighs lifted toward the ceiling. Imagine stretching your tailbone toward your heels as you lengthen through the spine. Hold your elbows in line with the torso. Gaze forward. To come out of the pose, release your knees to the ground. You can also keep your knees lifted and lower down onto your stomach for an extra ab challenge. Another option is to lift up and back to a Downward-Facing Dog and relax.",

}),

new Yoga({
  imagePath:'/assets/images/plank.jpg',
  title:'Plank Pose',
  description:"Start in Downward-Facing Dog. Shift forward so your shoulders are stacked over your wrists. Draw your navel in toward your spine and keep your hips from dropping. Reach heels back as you lengthen the crown of your head forward. Ground down into hands, pushing the floor away beneath you. Lengthen through the arms and broaden your chest.",

}),

new Yoga({
  imagePath:'/assets/images/Seated-Forward-Bend-Pose.jpg',
  title:'Seated Forward Fold',
  description:"Sit and straighten your legs out in front of you, grounding your thighs into the floor. Hinge at the hips to elongate your torso over your thighs. Grab hold of the outer edges of your feet.",

}),

new Yoga({
  imagePath:'/assets/images/bound-angle-pose.jpg',
  title:'Bound Angle Pose',
  description:"Sitting on the floor, bend knees and open them out to the side like a book. Join the soles of your feet together while sitting upright. Place fingertips on the floor directly behind you and lengthen up through the spine. You can also hold onto your ankles and hinge forward at the hips.",

}),

new Yoga({
  imagePath:'/assets/images/bound-angle-pose-.jpg',
  title:'Bridge Pose',
  description:"Lie faceup with knees bent, feet flat on the floor, and arms at your sides with palms facedown. Keep your feet parallel and hip-width apart, heels stacked under knees. On an inhale, activate through the legs and the glutes. Press the floor away with your feet and lift the hips off the floor toward the sky. If your shoulders are tight and you want more leverage, try holding the sides of your yoga mat and lifting your hips. You may also wish to interlace your fingers underneath your “bridge” and shimmy your shoulders under the chest. When you’re ready to come down, lift your heels up and slowly lower your hips back to the ground, one vertebra at a time.",

}),

new Yoga({
  imagePath:'/assets/images/tree-pose-.jpg',
  title:'Tree Pose',
  description:"Start in Mountain Pose. Find a fixed point in front of you and stare at it to help you balance. As you inhale, shift the weight into your left foot and lift your right foot an inch off the floor. Using your right hand, bring the foot to your shin or inner thigh. Avoid placing your foot directly on the knee. As you exhale, ground through the standing leg and lengthen through the crown of your head. Bring your palms to touch in front of your sternum into prayer hands.",

}),

new Yoga({
  imagePath:'/assets/images/warrior2.jpg',
  title:'Warrior II',
  description:"Stand with feet wide, 3–4 feet apart. Shift your right heel out so your toes are pointing slightly inward. Turn your left foot out 90 degrees. Line up your left heel with the arch of your right foot. Bend your left knee to a 90-degree angle, keeping the knee in line with the second toe to protect the knee joint. Stretch through your straight back leg and ground down into the back foot.On an inhale, bring arms to a T at shoulder height. Draw your shoulder blades down the back. Spread your fingers and keep palms facedown. Gaze over the front fingers. As you exhale, sink deeper into the stretch. Pro tip: To draw your shoulder blades down the back, rotate your palms face-up. Notice how that shifts your shoulders. Once settled, rotate your palms facedown.",

}),

new Yoga({
  imagePath:'/assets/images/downfacing.jpg',
  title:'Downward-Facing Dog',
  description:"From all fours, walk your hands 6 inches in front of you. Tuck your toes and lift your hips up and back to lengthen your spine. If your hamstrings are tight, keep your knees bent in order to bring your weight back into the legs.Spread your fingers wide, press into your hands, and rotate your arms so that your biceps are facing toward one another. Press your thighs back toward the wall behind you.",

}),

new Yoga({
  imagePath:'/assets/images/downdog.jpg',
  title:'Down Dog on a chair',
  description:"Place your hands on the back of a chair with palms shoulder-distance apart. Step your feet back until they align under hips, creating a right angle with your body, spine parallel with the floor.Ground through your feet and lift through thighs. Reach hips away from hands to lengthen the sides of your torso. Firm your outer arms in and lengthen through the crown of your head.",

}),

new Yoga({
  imagePath:'/assets/images/chair.jpg',
  title:'Chair Pose',
  description:"Start in Mountain Pose. As you inhale, raise your arms, spread your fingers, and reach up through your fingertips. As you exhale, sit back and down as if sitting into a chair.Shift your weight toward the heels and lengthen up through the spine. As you inhale, lift and lengthen through your arms. As you exhale, sit deeper into the pose.",

}),

new Yoga({
  imagePath:'/assets/images/mountainpose.jpg',
  title:'Mountain Pose',
  description:"Stand with your feet together or hip-width apart. Ground down through the four corners of your feet. Roll your shoulders away from your ears, draw your shoulder blades down your back, and lift the crown of your head.Engage your thighs, draw your belly button in, and lengthen up through the spine. Turn your palms facing the front of the room. Relax your jaw and unfurrow your brow. Breathe easy.",

}),

];

var done=0;

for(var i=0;i<yogas.length;i++){
  yogas[i].save(function(err, result){
    done++;
    if(done==yogas.length){
      exit();
    }
  });
}
function exit(){
mongoose.disconnect();
}
