// var image = document.write(' <img src="2.png" alt="">');
// var image;
// image =  '<img src="2.png" alt="" style="width:200px;">';
// document.write(image);
// class image{
//     constructor(src, alt, width, height){
//         this.src=src;
//         this.alt=alt;
//         this.width=width;
//         this.height=height;
//     }
//     show (){
//        document.write('<img src="'+this.src+'" alt="'+this.alt+'" style="width: '+this.width+'; height: '+this.height+';">') 
//     }
// }
// var nextImg= new image('2.png', 'iphone', '200px', '200px');
// nextImg.show();
// alert(nextImg.src);

// class okiNames {
//     constructor (Names, Age, Gender, Talent, Intelligence, complexion){
//         this.Names=Names;
//         this.Age=Age;
//         this.Gender=Gender;
//         this.Talent=Talent;
//         this.Intelligence=Intelligence;
//         this.complexion=complexion;
//         for(i=1; i<=this.lenght; i++){
//             this.id=i;
//         }
//     }

//     ageClass(){
//         if(this.Age<=4){
//             return 'enfant';
//         }
//         else if(this.Age<=17){
//             return 'child';
//         }
//         else if (this.Age<=30) {
//             return 'adult';
//         }
//         else if (this.Age<55){
//             return 'working age'
//         }
//         else{
//             return'old age';
//         }
//     }
//     genderClass(){
//         if(this.Gender=="M"){
//             return 'Male';
//         }
//         else if(this.Gender=="F"){
//             return 'Female';
//         }
//         else{
//             return 'Gender Not Recognised.';
//         }
//     }
//     intelligenceClass(){
//         switch (this.Intelligence) {
//             case low:
//                 return 'Extremely Low';
//                 break;
//             case good:
//                 return 'Good';
//                 break;
//             case medium:
//                 return 'Medium';
//                 break;
//             case high:
//                 return 'High';
//                 break;
//             case extremelyHigh:
//                 return 'Extremely High';
//                 break;
//             default:
//                 break;
//         }
//     }
//     complexionClass(){
//         if(this.complexion=="L"){
//             return 'Light';
//         }
//         else if(this.complexion=="D"){
//             return 'Dark';
//         }
//         else if(this.complexion=="c"){
//             return 'Chocolate';
//         }
//         else{
//             return 'complexion Not Recognised.';
//         }
//     }

// }
// var rokeeb = new okiNames('Rokeeb', 12, 'Male', 'Bragging', 'low', 'yellow');
// alert(rokeeb.ageClass());
// class all{
//   name = 'all';
//   age= 12;
//   // constructor(a='',b=0){
//   //   this.name =a;
//   //   this.age=b;
//   // }
// }
// class human extends all{
//   height = 12;
// }
// var doctor = new human();
// alert(doctor.height+' '+doctor.name);
class ewure {
  name = 'Akeju';
  action = 'stubborn';
}
var happen = new ewure();
alert(happen.name +' '+happen.action);