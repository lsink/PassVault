// 
// 
// CAR ARRAYS START
//
// 

var TollsArray = [["ENTRY","","",1,2,3,4,5,6,"6A",7,"7A",8,"8A",9,10,11,12,13,"13A",14,"14A","14B","14C","15E","15W","15X","16E","16W","17S","17S","18E","18W"],

[1,"Green","","",0.80,1.40,1.90,2.35,3.70,"",2.85,3.15,3.45,3.70,4.30,4.40,4.80,5.35,6.20,6.20,7.20,8.25,8.40,8.85,7.65,7.90,8.15,8.40,8.40,"","",9.35,9.35],
[1,"Senior","","",0.80,1.40,1.90,2.35,3.70,"",2.85,3.15,3.45,3.70,4.30,4.40,4.80,5.35,6.20,6.20,7.20,8.25,8.40,8.85,7.65,7.90,8.15,8.40,8.40,"","",9.35,9.35],
[1,"Cash","","",1.35,2.15,2.90,3.60,5.45,"",4.35,4.60,5.15,5.45,6.50,6.65,7.25,8.05,9.10,9.10,10.65,12.30,12.55,13.30,11.25,11.80,12.25,12.55,12.55,"","",13.85,13.85],
[1,"E-Z (Off Peak)","","",0.90,1.60,2.15,2.65,4.15,"",3.20,3.50,3.85,4.15,4.80,4.90,5.35,5.95,6.90,6.90,8.05,9.20,9.35,9.85,8.50,8.80,9.10,9.35,9.35,"","",10.40,10.40],
[1,"E-Z (Peak)","","",1.35,2.15,2.90,3.60,5.45,"",4.35,4.60,5.15,5.45,6.50,6.65,7.25,8.05,9.10,9.10,10.65,12.30,12.55,13.30,11.25,11.80,12.25,12.55,12.55,"","",13.85,13.85],

[2,"Green","",0.80,"",0.80,1.20,1.70,3.15,"",1.95,2.35,2.85,3.20,3.45,3.70,4.10,4.80,5.35,5.35,6.30,7.65,7.90,8.10,6.75,7.20,7.65,7.90,7.90,"","",8.85,8.85],
[2,"Senior","",0.80,"",0.80,1.20,1.70,3.15,"",1.95,2.35,2.85,3.20,3.45,3.70,4.10,4.80,5.35,5.35,6.30,7.65,7.90,8.10,6.75,7.20,7.65,7.90,7.90,"","",8.85,8.85],
[2,"Cash","",1.35,"",1.35,1.65,2.45,4.60,"",3.00,3.60,4.35,4.75,5.15,5.45,6.10,7.25,8.05,8.05,9.55,11.25,11.80,12.00,10.25,10.65,11.30,11.80,11.80,"","",13.30,13.30],
[2,"E-Z (Off Peak)","",0.90,"",0.90,1.35,1.90,3.50,"",2.20,2.65,3.20,3.60,3.85,4.15,4.60,5.35,5.95,5.95,7.05,8.50,8.80,9.05,7.55,8.05,8.50,8.80,8.80,"","",9.85,9.85],
[2,"E-Z (Peak)","",1.35,"",1.35,1.65,2.45,4.60,"",3.00,3.60,4.35,4.75,5.15,5.45,6.10,7.25,8.05,8.05,9.55,11.25,11.80,12.00,10.25,10.65,11.30,11.80,11.80,"","",13.30,13.30],

[3,"Green","",1.40,0.80,"",0.55,1.00,2.35,"",1.40,1.70,1.95,2.70,2.85,3.15,3.20,4.10,4.80,4.80,5.85,6.75,7.20,7.40,6.20,6.30,6.95,7.20,7.20,"","",8.10,8.10],
[3,"Senior","",1.40,0.80,"",0.55,1.00,2.35,"",1.40,1.70,1.95,2.70,2.85,3.15,3.20,4.10,4.80,4.80,5.85,6.75,7.20,7.40,6.20,6.30,6.95,7.20,7.20,"","",8.10,8.10],
[3,"Cash","",2.15,1.35,"",0.90,1.45,3.60,"",2.15,2.45,3.00,4.00,4.35,4.60,4.75,6.10,7.25,7.25,8.80,10.25,10.65,11.00,9.10,9.55,10.15,10.65,10.65,"","",12.00,12.00],
[3,"E-Z (Off Peak)","",1.60,0.90,"",0.65,1.15,2.65,"",1.60,1.90,2.20,3.00,3.20,3.50,3.60,4.60,5.35,5.35,6.50,7.55,8.05,8.25,6.90,7.05,7.75,8.05,8.05,"","",9.05,9.05],
[3,"E-Z (Peak)","",2.15,1.35,"",0.90,1.45,3.60,"",2.15,2.45,3.00,4.00,4.35,4.60,4.75,6.10,7.25,7.25,8.80,10.25,10.65,11.00,9.10,9.55,10.15,10.65,10.65,"","",12.00,12.00],

[4,"Green","",1.90,1.20,0.55,"",0.55,1.90,"",1.00,1.20,1.70,1.95,2.35,2.70,2.85,3.45,4.30,4.30,5.20,6.30,6.50,6.75,5.85,6.05,6.30,6.50,6.50,"","",7.65,7.65],
[4,"Senior","",1.90,1.20,0.55,"",0.55,1.90,"",1.00,1.20,1.70,1.95,2.35,2.70,2.85,3.45,4.30,4.30,5.20,6.30,6.50,6.75,5.85,6.05,6.30,6.50,6.50,"","",7.65,7.65],
[4,"Cash","",2.90,1.65,0.90,"",0.90,2.90,"",1.45,1.65,2.45,3.00,3.60,4.00,4.35,5.15,6.50,6.50,7.55,9.55,9.70,10.25,8.80,9.05,9.55,9.70,9.70,"","",11.25,11.25],
[4,"E-Z (Off Peak)","",2.15,1.35,0.65,"",0.65,2.15,"",1.15,1.35,1.90,2.20,2.65,3.00,3.20,3.85,4.80,4.80,5.80,7.05,7.25,7.55,6.50,6.75,7.05,7.25,7.25,"","",8.50,8.50],
[4,"E-Z (Peak)","",2.90,1.65,0.90,"",0.90,2.90,"",1.45,1.65,2.45,3.00,3.60,4.00,4.35,5.15,6.50,6.50,7.55,9.55,9.70,10.25,8.80,9.05,9.55,9.70,9.70,"","",11.25,11.25],

[5,"Green","",2.35,1.70,1.00,0.55,"",1.40,"",0.55,0.80,1.20,1.70,1.90,1.95,2.35,3.15,3.70,3.70,4.80,6.05,6.20,6.30,5.20,5.35,5.85,6.20,6.20,"","",7.20,7.20],
[5,"Senior","",2.35,1.70,1.00,0.55,"",1.40,"",0.55,0.80,1.20,1.70,1.90,1.95,2.35,3.15,3.70,3.70,4.80,6.05,6.20,6.30,5.20,5.35,5.85,6.20,6.20,"","",7.20,7.20],
[5,"Cash","",3.60,2.45,1.45,0.90,"",2.15,"",0.90,1.35,1.65,2.45,2.90,3.00,3.60,4.60,5.45,5.45,7.25,9.05,9.10,9.55,7.55,8.05,8.65,9.10,9.10,"","",10.65,10.65],
[5,"E-Z (Off Peak)","",2.65,1.90,1.15,0.65,"",1.60,"",0.65,0.90,1.35,1.90,2.15,2.20,2.65,3.50,4.15,4.15,5.35,6.75,6.90,7.05,5.80,5.95,6.50,6.90,6.90,"","",8.05,8.05],
[5,"E-Z (Peak)","",3.60,2.45,1.45,0.90,"",2.15,"",0.90,1.35,1.65,2.45,2.90,3.00,3.60,4.60,5.45,5.45,7.25,9.05,9.10,9.55,7.55,8.05,8.65,9.10,9.10,"","",10.65,10.65],

[6,"Green","",3.70,3.15,2.35,1.90,1.40,"","",1.20,1.40,1.90,2.35,2.70,2.85,3.15,3.70,4.40,4.40,5.35,6.50,6.75,7.20,6.05,6.20,6.65,6.75,6.75,"","",7.90,7.90],
[6,"Senior","",3.70,3.15,2.35,1.90,1.40,"","",1.20,1.40,1.90,2.35,2.70,2.85,3.15,3.70,4.40,4.40,5.35,6.50,6.75,7.20,6.05,6.20,6.65,6.75,6.75,"","",7.90,7.90],
[6,"Cash","",5.45,4.60,3.60,2.90,2.15,"","",1.65,2.15,2.90,3.60,4.00,4.35,4.60,5.45,6.65,6.65,8.05,9.70,10.25,10.65,9.05,9.10,9.95,10.25,10.25,"","",11.80,11.80],
[6,"E-Z (Off Peak)","",4.15,3.50,2.65,2.15,1.60,"","",1.35,1.60,2.15,2.65,3.00,3.20,3.50,4.15,4.90,4.90,5.95,7.25,7.55,8.05,6.75,6.90,7.40,7.55,7.55,"","",8.80,8.80],
[6,"E-Z (Peak)","",5.45,4.60,3.60,2.90,2.15,"","",1.65,2.15,2.90,3.60,4.00,4.35,4.60,5.45,6.65,6.65,8.05,9.70,10.25,10.65,9.05,9.10,9.95,10.25,10.25,"","",11.80,11.80],

["6A","Green","","","","","","","",1.95,"","","","","","","","","","","","","","","","","","","","","",""],
["6A","Senior","","","","","","","",1.95,"","","","","","","","","","","","","","","","","","","","","",""],
["6A","Cash","","","","","","","",3.00,"","","","","","","","","","","","","","","","","","","","","",""],
["6A","E-Z (Off Peak)","","","","","","","",2.20,"","","","","","","","","","","","","","","","","","","","","",""],
["6A","E-Z (Peak)","","","","","","","",3.00,"","","","","","","","","","","","","","","","","","","","","",""],

[7,"Green","",2.85,1.95,1.40,1.00,0.55,1.20,"","",0.55,0.80,1.20,1.40,1.70,1.90,2.70,3.20,3.20,4.30,5.35,5.85,6.05,4.80,4.90,5.55,5.85,5.85,"","",6.50,6.50],
[7,"Senior","",2.85,1.95,1.40,1.00,0.55,1.20,"","",0.55,0.80,1.20,1.40,1.70,1.90,2.70,3.20,3.20,4.30,5.35,5.85,6.05,4.80,4.90,5.55,5.85,5.85,"","",6.50,6.50],
[7,"Cash","",4.35,3.00,2.15,1.45,0.90,1.65,"","",0.90,1.35,1.65,2.15,2.45,2.90,4.00,4.75,4.75,6.50,8.05,8.80,9.05,7.25,7.40,8.35,8.80,8.80,"","",9.70,9.70],
[7,"E-Z (Off Peak)","",3.20,2.20,1.60,1.15,0.65,1.35,"","",0.65,0.90,1.35,1.60,1.90,2.15,3.00,3.60,3.60,4.80,5.95,6.50,6.75,5.35,5.45,6.20,6.50,6.50,"","",7.25,7.25],
[7,"E-Z (Peak)","",4.35,3.00,2.15,1.45,0.90,1.65,"","",0.90,1.35,1.65,2.15,2.45,2.90,4.00,4.75,4.75,6.50,8.05,8.80,9.05,7.25,7.40,8.35,8.80,8.80,"","",9.70,9.70],

["7A","Green","",3.15,2.35,1.70,1.20,0.80,1.40,"",0.55,"",0.55,1.00,1.20,1.40,1.70,2.35,3.15,3.15,4.10,5.20,5.35,5.85,4.40,4.80,5.05,5.35,5.35,"","",6.30,6.30],
["7A","Senior","",3.15,2.35,1.70,1.20,0.80,1.40,"",0.55,"",0.55,1.00,1.20,1.40,1.70,2.35,3.15,3.15,4.10,5.20,5.35,5.85,4.40,4.80,5.05,5.35,5.35,"","",6.30,6.30],
["7A","Cash","",4.60,3.60,2.45,1.65,1.35,2.15,"",0.90,"",0.90,1.45,1.65,2.15,2.45,3.60,4.60,4.60,6.10,7.55,8.05,8.80,6.65,7.25,7.55,8.05,8.05,"","",9.55,9.55],
["7A","E-Z (Off Peak)","",3.50,2.65,1.90,1.35,0.90,1.60,"",0.65,"",0.65,1.15,1.35,1.60,1.90,2.65,3.50,3.50,4.60,5.80,5.95,6.50,4.90,5.35,5.65,5.95,5.95,"","",7.05,7.05],
["7A","E-Z (Peak)","",4.60,3.60,2.45,1.65,1.35,2.15,"",0.90,"",0.90,1.45,1.65,2.15,2.45,3.60,4.60,4.60,6.10,7.55,8.05,8.80,6.65,7.25,7.55,8.05,8.05,"","",9.55,9.55],

[8,"Green","",3.45,2.85,1.95,1.70,1.20,1.90,"",0.80,0.55,"",0.55,0.80,1.00,1.20,1.90,2.70,2.70,3.45,4.80,4.90,5.20,4.10,4.30,4.75,4.90,4.90,"","",6.05,6.05],
[8,"Senior","",3.45,2.85,1.95,1.70,1.20,1.90,"",0.80,0.55,"",0.55,0.80,1.00,1.20,1.90,2.70,2.70,3.45,4.80,4.90,5.20,4.10,4.30,4.75,4.90,4.90,"","",6.05,6.05],
[8,"Cash","",5.15,4.35,3.00,2.45,1.65,2.90,"",1.35,0.90,"",0.90,1.35,1.45,1.65,2.90,4.00,4.00,5.15,7.25,7.40,7.55,6.10,6.50,7.05,7.40,7.40,"","",9.05,9.05],
[8,"E-Z (Off Peak)","",3.85,3.20,2.20,1.90,1.35,2.15,"",0.90,0.65,"",0.65,0.90,1.15,1.35,2.15,3.00,3.00,3.85,5.35,5.45,5.80,4.60,4.80,5.30,5.45,5.45,"","",6.75,6.75],
[8,"E-Z (Peak)","",5.15,4.35,3.00,2.45,1.65,2.90,"",1.35,0.90,"",0.90,1.35,1.45,1.65,2.90,4.00,4.00,5.15,7.25,7.40,7.55,6.10,6.50,7.05,7.40,7.40,"","",9.05,9.05],

["8A","Green","",3.70,3.20,2.70,1.95,1.70,2.35,"",1.20,1.00,0.55,"",0.55,0.80,1.00,1.70,2.35,2.35,3.20,4.40,4.80,4.90,3.70,4.10,4.50,4.80,4.80,"","",5.85,5.85],
["8A","Senior","",3.70,3.20,2.70,1.95,1.70,2.35,"",1.20,1.00,0.55,"",0.55,0.80,1.00,1.70,2.35,2.35,3.20,4.40,4.80,4.90,3.70,4.10,4.50,4.80,4.80,"","",5.85,5.85],
["8A","Cash","",5.45,4.75,4.00,3.00,2.45,3.60,"",1.65,1.45,0.90,"",0.90,1.35,1.45,2.45,3.60,3.60,4.75,6.65,7.25,7.40,5.45,6.10,6.75,7.25,7.25,"","",8.80,8.80],
["8A","E-Z (Off Peak)","",4.15,3.60,3.00,2.20,1.90,2.65,"",1.35,1.15,0.65,"",0.65,0.90,1.15,1.90,2.65,2.65,3.60,4.90,5.35,5.45,4.15,4.60,5.05,5.35,5.35,"","",6.50,6.50],
["8A","E-Z (Peak)","",5.45,4.75,4.00,3.00,2.45,3.60,"",1.65,1.45,0.90,"",0.90,1.35,1.45,2.45,3.60,3.60,4.75,6.65,7.25,7.40,5.45,6.10,6.75,7.25,7.25,"","",8.80,8.80],

[9,"Green","",4.30,3.45,2.85,2.35,1.90,2.70,"",1.40,1.20,0.80,0.55,"",0.55,0.55,1.20,1.90,1.90,2.85,4.10,4.30,4.40,3.20,3.45,4.05,4.30,4.30,"","",5.20,5.20],
[9,"Senior","",4.30,3.45,2.85,2.35,1.90,2.70,"",1.40,1.20,0.80,0.55,"",0.55,0.55,1.20,1.90,1.90,2.85,4.10,4.30,4.40,3.20,3.45,4.05,4.30,4.30,"","",5.20,5.20],
[9,"Cash","",6.50,5.15,4.35,3.60,2.90,4.00,"",2.15,1.65,1.35,0.90,"",0.90,0.90,1.65,2.90,2.90,4.35,6.10,6.50,6.65,4.75,5.15,5.95,6.50,6.50,"","",7.55,7.55],
[9,"E-Z (Off Peak)","",4.80,3.85,3.20,2.65,2.15,3.00,"",1.60,1.35,0.90,0.65,"",0.65,0.65,1.35,2.15,2.15,3.20,4.60,4.80,4.90,3.60,3.85,4.50,4.80,4.80,"","",5.80,5.80],
[9,"E-Z (Peak)","",6.50,5.15,4.35,3.60,2.90,4.00,"",2.15,1.65,1.35,0.90,"",0.90,0.90,1.65,2.90,2.90,4.35,6.10,6.50,6.65,4.75,5.15,5.95,6.50,6.50,"","",7.55,7.55],

[10,"Green","",4.40,3.70,3.15,2.70,1.95,2.85,"",1.70,1.40,1.00,0.80,0.55,"",0.55,1.00,1.70,1.70,2.70,3.70,4.10,4.30,3.15,3.20,3.85,4.10,4.10,"","",4.90,4.90],
[10,"Senior","",4.40,3.70,3.15,2.70,1.95,2.85,"",1.70,1.40,1.00,0.80,0.55,"",0.55,1.00,1.70,1.70,2.70,3.70,4.10,4.30,3.15,3.20,3.85,4.10,4.10,"","",4.90,4.90],
[10,"Cash","",6.65,5.45,4.60,4.00,3.00,4.35,"",2.45,2.15,1.45,1.35,0.90,"",0.90,1.45,2.45,2.45,4.00,5.45,6.10,6.50,4.60,4.75,5.65,6.10,6.10,"","",7.40,7.40],
[10,"E-Z (Off Peak)","",4.90,4.15,3.50,3.00,2.20,3.20,"",1.90,1.60,1.15,0.90,0.65,"",0.65,1.15,1.90,1.90,3.00,4.15,4.60,4.80,3.50,3.60,4.30,4.60,4.60,"","",5.45,5.45], 
[10,"E-Z (Peak)","",6.65,5.45,4.60,4.00,3.00,4.35,"",2.45,2.15,1.45,1.35,0.90,"",0.90,1.45,2.45,2.45,4.00,5.45,6.10,6.50,4.60,4.75,5.65,6.10,6.10,"","",7.40,7.40],

[11,"Green","",4.80,4.10,3.20,2.85,2.35,3.15,"",1.90,1.70,1.20,1.00,0.55,0.55,"",0.55,1.20,1.20,1.95,3.20,3.45,3.70,2.70,2.85,3.20,3.45,3.45,"","",4.40,4.40],
[11,"Senior","",4.80,4.10,3.20,2.85,2.35,3.15,"",1.90,1.70,1.20,1.00,0.55,0.55,"",0.55,1.20,1.20,1.95,3.20,3.45,3.70,2.70,2.85,3.20,3.45,3.45,"","",4.40,4.40],
[11,"Cash","",7.25,6.10,4.75,4.35,3.60,4.60,"",2.90,2.45,1.65,1.45,0.90,0.90,"",0.90,1.65,1.65,3.00,4.75,5.15,5.45,4.00,4.35,4.80,5.15,5.15,"","",6.65,6.65],
[11,"E-Z (Off Peak)","",5.35,4.60,3.60,3.20,2.65,3.50,"",2.15,1.90,1.35,1.15,0.65,0.65,"",0.65,1.35,1.35,2.20,3.60,3.85,4.15,3.00,3.20,3.60,3.85,3.85,"","",4.90,4.90],
[11,"E-Z (Peak)","",7.25,6.10,4.75,4.35,3.60,4.60,"",2.90,2.45,1.65,1.45,0.90,0.90,"",0.90,1.65,1.65,3.00,4.75,5.15,5.45,4.00,4.35,4.80,5.15,5.15,"","",6.65,6.65],

[12,"Green","",5.35,4.80,4.10,3.45,3.15,3.70,"",2.70,2.35,1.90,1.70,1.20,1.00,0.55,"",0.80,0.80,1.70,2.85,3.15,3.20,1.95,2.35,2.85,3.15,3.15,"","",4.10,4.10],
[12,"Senior","",5.35,4.80,4.10,3.45,3.15,3.70,"",2.70,2.35,1.90,1.70,1.20,1.00,0.55,"",0.80,0.80,1.70,2.85,3.15,3.20,1.95,2.35,2.85,3.15,3.15,"","",4.10,4.10],
[12,"Cash","",8.05,7.25,6.10,5.15,4.60,5.45,"",4.00,3.60,2.90,2.45,1.65,1.45,0.90,"",1.20,1.20,2.45,4.35,4.60,4.75,3.00,3.60,4.15,4.60,4.60,"","",6.10,6.10],
[12,"E-Z (Off Peak)","",5.95,5.35,4.60,3.85,3.50,4.15,"",3.00,2.65,2.15,1.90,1.35,1.15,0.65,"",0.90,0.90,1.90,3.20,3.50,3.60,2.20,2.65,3.20,3.50,3.50,"","",4.60,4.60],
[12,"E-Z (Peak)","",8.05,7.25,6.10,5.15,4.60,5.45,"",4.00,3.60,2.90,2.45,1.65,1.45,0.90,"",1.20,1.20,2.45,4.35,4.60,4.75,3.00,3.60,4.15,4.60,4.60,"","",6.10,6.10],

[13,"Green","",6.20,5.35,4.80,4.30,3.70,4.40,"",3.20,3.15,2.70,2.35,1.90,1.70,1.20,0.80,"",0.55,1.00,1.95,2.35,2.70,1.40,1.70,2.10,2.35,2.35,"","",3.20,3.20],
[13,"Senior","",6.20,5.35,4.80,4.30,3.70,4.40,"",3.20,3.15,2.70,2.35,1.90,1.70,1.20,0.80,"",0.55,1.00,1.95,2.35,2.70,1.40,1.70,2.10,2.35,2.35,"","",3.20,3.20],
[13,"Cash","",9.10,8.05,7.25,6.50,5.45,6.65,"",4.75,4.60,4.00,3.60,2.90,2.45,1.65,1.20,"",0.90,1.45,3.00,3.60,4.00,2.15,2.45,3.20,3.60,3.60,"","",4.75,4.75],
[13,"E-Z (Off Peak)","",6.90,5.95,5.35,4.80,4.15,4.90,"",3.60,3.50,3.00,2.65,2.15,1.90,1.35,0.90,"",0.65,1.15,2.20,2.65,3.00,1.60,1.90,2.35,2.65,2.65,"","",3.60,3.60],
[13,"E-Z (Peak)","",9.10,8.05,7.25,6.50,5.45,6.65,"",4.75,4.60,4.00,3.60,2.90,2.45,1.65,1.20,"",0.90,1.45,3.00,3.60,4.00,2.15,2.45,3.20,3.60,3.60,"","",4.75,4.75],

["13A","Green","",6.20,5.35,4.80,4.30,3.70,4.40,"",3.20,3.15,2.70,2.35,1.90,1.70,1.20,0.80,0.55,"",0.55,1.95,2.35,2.70,1.40,1.70,2.10,2.35,2.35,"","",3.20,3.20], 
["13A","Senior","",6.20,5.35,4.80,4.30,3.70,4.40,"",3.20,3.15,2.70,2.35,1.90,1.70,1.20,0.80,0.55,"",0.55,1.95,2.35,2.70,1.40,1.70,2.10,2.35,2.35,"","",3.20,3.20], 
["13A","Cash","",9.10,8.05,7.25,6.50,5.45,6.65,"",4.75,4.60,4.00,3.60,2.90,2.45,1.65,1.20,0.90,"",0.90,3.00,3.60,4.00,2.15,2.45,3.20,3.60,3.60,"","",4.75,4.75], 
["13A","E-Z (Off Peak)","",6.90,5.95,5.35,4.80,4.15,4.90,"",3.60,3.50,3.00,2.65,2.15,1.90,1.35,0.90,0.65,"",0.65,2.20,2.65,3.00,1.60,1.90,2.35,2.65,2.65,"","",3.60,3.60],
["13A","E-Z (Peak)","",9.10,8.05,7.25,6.50,5.45,6.65,"",4.75,4.60,4.00,3.60,2.90,2.45,1.65,1.20,0.90,"",0.90,3.00,3.60,4.00,2.15,2.45,3.20,3.60,3.60,"","",4.75,4.75], 

[14,"Green","",7.20,6.30,5.85,5.20,4.80,5.35,"",4.30,4.10,3.45,3.20,2.85,2.70,1.95,1.70,1.00,0.55,"",1.20,1.40,1.70,0.55,0.80,1.20,1.40,1.40,"","",2.35,2.35],
[14,"Senior","",7.20,6.30,5.85,5.20,4.80,5.35,"",4.30,4.10,3.45,3.20,2.85,2.70,1.95,1.70,1.00,0.55,"",1.20,1.40,1.70,0.55,0.80,1.20,1.40,1.40,"","",2.35,2.35],
[14,"Cash","",10.65,9.55,8.80,7.55,7.25,8.05,"",6.50,6.10,5.15,4.75,4.35,4.00,3.00,2.45,1.45,0.90,"",1.65,2.15,2.45,0.90,1.35,1.75,2.15,2.15,"","",3.60,3.60],
[14,"E-Z (Off Peak)","",8.05,7.05,6.50,5.80,5.35,5.95,"",4.80,4.60,3.85,3.60,3.20,3.00,2.20,1.90,1.15,0.65,"",1.35,1.60,1.90,0.65,0.90,1.35,1.60,1.60,"","",2.65,2.65],
[14,"E-Z (Peak)","",10.65,9.55,8.80,7.55,7.25,8.05,"",6.50,6.10,5.15,4.75,4.35,4.00,3.00,2.45,1.45,0.90,"",1.65,2.15,2.45,0.90,1.35,1.75,2.15,2.15,"","",3.60,3.60],

["14A","Green","",8.25,7.65,6.75,6.30,6.05,6.50,"",5.35,5.20,4.80,4.40,4.10,3.70,3.20,2.85,1.95,1.95,1.20,"",0.55,0.80,1.70,1.90,2.35,2.70,2.70,"","",3.45,3.45],
["14A","Senior","",8.25,7.65,6.75,6.30,6.05,6.50,"",5.35,5.20,4.80,4.40,4.10,3.70,3.20,2.85,1.95,1.95,1.20,"",0.55,0.80,1.70,1.90,2.35,2.70,2.70,"","",3.45,3.45],
["14A","Cash","",12.30,11.25,10.25,9.55,9.05,9.70,"",8.05,7.55,7.25,6.65,6.10,5.45,4.75,4.35,3.00,3.00,1.65,"",0.90,1.35,2.45,2.90,3.50,4.00,4.00,"","",5.15,5.15],
["14A","E-Z (Off Peak)","",9.20,8.50,7.55,7.05,6.75,7.25,"",5.95,5.80,5.35,4.90,4.60,4.15,3.60,3.20,2.20,2.20,1.35,"",0.65,0.90,1.90,2.15,2.65,3.00,3.00,"","",3.85,3.85],
["14A","E-Z (Peak)","",12.30,11.25,10.25,9.55,9.05,9.70,"",8.05,7.55,7.25,6.65,6.10,5.45,4.75,4.35,3.00,3.00,1.65,"",0.90,1.35,2.45,2.90,3.50,4.00,4.00,"","",5.15,5.15],

["14B","Green","",8.40,7.90,7.20,6.50,6.20,6.75,"",5.85,5.35,4.90,4.80,4.30,4.10,3.45,3.15,2.35,2.35,1.40,0.55,"",0.55,1.90,1.95,2.60,2.85,2.85,"","",3.70,3.70],
["14B","Senior","",8.40,7.90,7.20,6.50,6.20,6.75,"",5.85,5.35,4.90,4.80,4.30,4.10,3.45,3.15,2.35,2.35,1.40,0.55,"",0.55,1.90,1.95,2.60,2.85,2.85,"","",3.70,3.70],
["14B","Cash","",12.55,11.80,10.65,9.70,9.10,10.25,"",8.80,8.05,7.40,7.25,6.50,6.10,5.15,4.60,3.60,3.60,2.15,0.90,"",0.90,2.90,3.00,4.00,4.35,4.35,"","",5.45,5.45],
["14B","E-Z (Off Peak)","",9.35,8.80,8.05,7.25,6.90,7.55,"",6.50,5.95,5.45,5.35,4.80,4.60,3.85,3.50,2.65,2.65,1.60,0.65,"",0.65,2.15,2.20,2.90,3.20,3.20,"","",4.15,4.15], 
["14B","E-Z (Peak)","",12.55,11.80,10.65,9.70,9.10,10.25,"",8.80,8.05,7.40,7.25,6.50,6.10,5.15,4.60,3.60,3.60,2.15,0.90,"",0.90,2.90,3.00,4.00,4.35,4.35,"","",5.45,5.45],

["14C","Green","",8.85,8.10,7.40,6.75,6.30,7.20,"",6.05,5.85,5.20,4.90,4.40,4.30,3.70,3.20,2.70,2.70,1.70,0.80,0.55,"",1.95,2.35,2.85,3.15,3.15,"","",4.10,4.10], 
["14C","Senior","",8.85,8.10,7.40,6.75,6.30,7.20,"",6.05,5.85,5.20,4.90,4.40,4.30,3.70,3.20,2.70,2.70,1.70,0.80,0.55,"",1.95,2.35,2.85,3.15,3.15,"","",4.10,4.10],  
["14C","Cash","",13.30,12.00,11.00,10.25,9.55,10.65,"",9.05,8.80,7.55,7.40,6.65,6.50,5.45,4.75,4.00,4.00,2.45,1.35,0.90,"",3.00,3.60,4.15,4.60,4.60,"","",6.10,6.10], 
["14C","E-Z (Off Peak)","",9.85,9.05,8.25,7.55,7.05,8.05,"",6.75,6.50,5.80,5.45,4.90,4.80,4.15,3.60,3.00,3.00,1.90,0.90,0.65,"",2.20,2.65,3.20,3.50,3.50,"","",4.60,4.60], 
["14C","E-Z (Peak)","",13.30,12.00,11.00,10.25,9.55,10.65,"",9.05,8.80,7.55,7.40,6.65,6.50,5.45,4.75,4.00,4.00,2.45,1.35,0.90,"",3.00,3.60,4.15,4.60,4.60,"","",6.10,6.10],

["15E","Green","",7.65,6.75,6.20,5.85,5.20,6.05,"",4.80,4.40,4.10,3.70,3.20,3.15,2.70,1.95,1.40,1.40,0.55,1.70,1.90,1.95,"",0.55,0.70,1.00,1.00,"","",1.90,1.90], 
["15E","Senior","",7.65,6.75,6.20,5.85,5.20,6.05,"",4.80,4.40,4.10,3.70,3.20,3.15,2.70,1.95,1.40,1.40,0.55,1.70,1.90,1.95,"",0.55,0.70,1.00,1.00,"","",1.90,1.90], 
["15E","Cash","",11.25,10.25,9.10,8.80,7.55,9.05,"",7.25,6.65,6.10,5.45,4.75,4.60,4.00,3.00,2.15,2.15,0.90,2.45,2.90,3.00,"",0.90,1.05,1.45,1.45,"","",2.90,2.90],
["15E","E-Z (Off Peak)","",8.50,7.55,6.90,6.50,5.80,6.75,"",5.35,4.90,4.60,4.15,3.60,3.50,3.00,2.20,1.60,1.60,0.65,1.90,2.15,2.20,"",0.65,0.80,1.15,1.15,"","",2.15,2.15], 
["15E","E-Z (Peak)","",11.25,10.25,9.10,8.80,7.55,9.05,"",7.25,6.65,6.10,5.45,4.75,4.60,4.00,3.00,2.15,2.15,0.90,2.45,2.90,3.00,"",0.90,1.05,1.45,1.45,"","",2.90,2.90], 

["15W","Green","",7.90,7.20,6.30,6.05,5.35,6.20,"",4.90,4.80,4.30,4.10,3.45,3.20,2.85,2.35,1.70,1.70,0.80,1.90,1.95,2.35,0.55,"",0.70,0.80,0.80,"","",1.70,1.70],
["15W","Senior","",7.90,7.20,6.30,6.05,5.35,6.20,"",4.90,4.80,4.30,4.10,3.45,3.20,2.85,2.35,1.70,1.70,0.80,1.90,1.95,2.35,0.55,"",0.70,0.80,0.80,"","",1.70,1.70],
["15W","Cash","",11.80,10.65,9.55,9.05,8.05,9.10,"",7.40,7.25,6.50,6.10,5.15,4.75,4.35,3.60,2.45,2.45,1.35,2.90,3.00,3.60,0.90,"",1.20,1.35,1.35,"","",2.45,2.45],
["15W","E-Z (Off Peak)","",8.80,8.05,7.05,6.75,5.95,6.90,"",5.45,5.35,4.80,4.60,3.85,3.60,3.20,2.65,1.90,1.90,0.90,2.15,2.20,2.65,0.65,"",0.80,0.90,0.90,"","",1.90,1.90], 
["15W","E-Z (Peak)","",11.80,10.65,9.55,9.05,8.05,9.10,"",7.40,7.25,6.50,6.10,5.15,4.75,4.35,3.60,2.45,2.45,1.35,2.90,3.00,3.60,0.90,"",1.20,1.35,1.35,"","",2.45,2.45], 

["15X","Green","",8.15,7.65,6.95,6.30,5.85,6.65,"",5.55,5.05,4.75,4.50,4.05,3.85,3.20,2.85,2.10,2.10,1.20,2.35,2.60,2.85,0.70,0.70,"",0.25,"","","",0.50,""],
["15X","Senior","",8.15,7.65,6.95,6.30,5.85,6.65,"",5.55,5.05,4.75,4.50,4.05,3.85,3.20,2.85,2.10,2.10,1.20,2.35,2.60,2.85,0.70,0.70,"",0.25,"","","",0.50,""],
["15X","Cash","",12.25,11.30,10.15,9.55,8.65,9.95,"",8.35,7.55,7.05,6.75,5.95,5.65,4.80,4.15,3.20,3.20,1.75,3.50,4.00,4.15,1.05,1.20,"",0.35,"","","",0.80,""],
["15X","E-Z (Off Peak)","",9.10,8.50,7.75,7.05,6.50,7.40,"",6.20,5.65,5.30,5.05,4.50,4.30,3.60,3.20,2.35,2.35,1.35,2.65,2.90,3.20,0.80,0.80,"",0.30,"","","",0.60,""],
["15X","E-Z (Peak)","",12.25,11.30,10.15,9.55,8.65,9.95,"",8.35,7.55,7.05,6.75,5.95,5.65,4.80,4.15,3.20,3.20,1.75,3.50,4.00,4.15,1.05,1.20,"",0.35,"","","",0.80,""],

["16E","Green","",8.40,7.90,7.20,6.50,6.20,6.75,"",5.85,5.35,4.90,4.80,4.30,4.10,3.45,3.15,2.35,2.35,1.40,2.70,2.85,3.15,1.00,0.80,0.25,"","","","","",""], 
["16E","Senior","",8.40,7.90,7.20,6.50,6.20,6.75,"",5.85,5.35,4.90,4.80,4.30,4.10,3.45,3.15,2.35,2.35,1.40,2.70,2.85,3.15,1.00,0.80,0.25,"","","","","",""], 
["16E","Cash","",12.55,11.80,10.65,9.70,9.10,10.25,"",8.80,8.05,7.40,7.25,6.50,6.10,5.15,4.60,3.60,3.60,2.15,4.00,4.35,4.60,1.45,1.35,0.35,"","","","","",""],
["16E","E-Z (Off Peak)","",9.35,8.80,8.05,7.25,6.90,7.55,"",6.50,5.95,5.45,5.35,4.80,4.60,3.85,3.50,2.65,2.65,1.60,3.00,3.20,3.50,1.15,0.90,0.30,"","","","","",""],
["16E","E-Z (Peak)","",12.55,11.80,10.65,9.70,9.10,10.25,"",8.80,8.05,7.40,7.25,6.50,6.10,5.15,4.60,3.60,3.60,2.15,4.00,4.35,4.60,1.45,1.35,0.35,"","","","","",""], 

["16W","Green","",8.40,7.90,7.20,6.50,6.20,6.75,"",5.85,5.35,4.90,4.80,4.30,4.10,3.45,3.15,2.35,2.35,1.40,2.70,2.85,3.15,1.00,0.80,"","","","","","",1.00],
["16W","Senior","",8.40,7.90,7.20,6.50,6.20,6.75,"",5.85,5.35,4.90,4.80,4.30,4.10,3.45,3.15,2.35,2.35,1.40,2.70,2.85,3.15,1.00,0.80,"","","","","","",1.00],
["16W","Cash","",12.55,11.80,10.65,9.70,9.10,10.25,"",8.80,8.05,7.40,7.25,6.50,6.10,5.15,4.60,3.60,3.60,2.15,4.00,4.35,4.60,1.45,1.35,"","","","","","",1.45],
["16W","E-Z (Off Peak)","",9.35,8.80,8.05,7.25,6.90,7.55,"",6.50,5.95,5.45,5.35,4.80,4.60,3.85,3.50,2.65,2.65,1.60,3.00,3.20,3.50,1.15,0.90,"","","","","","",1.15], 
["16W","E-Z (Peak)","",12.55,11.80,10.65,9.70,9.10,10.25,"",8.80,8.05,7.40,7.25,6.50,6.10,5.15,4.60,3.60,3.60,2.15,4.00,4.35,4.60,1.45,1.35,"","","","","","",1.45],

["17S","Green","","","","","","","","","","","","","","","","","","","","","","","","","","","","",1.70,"",""], 
["17S","Senior","","","","","","","","","","","","","","","","","","","","","","","","","","","","",1.70,"",""], 
["17S","Cash","","","","","","","","","","","","","","","","","","","","","","","","","","","","",2.75,"",""], 
["17S","E-Z (Off Peak)","","","","","","","","","","","","","","","","","","","","","","","","","","","","",1.90,"",""],
["17S","E-Z (Peak)","","","","","","","","","","","","","","","","","","","","","","","","","","","","",2.75,"",""], 

["17S","Green","","","","","","","","","","","","","","","","","","","","","","","","","","","",1.70,"","",""], 
["17S","Senior","","","","","","","","","","","","","","","","","","","","","","","","","","","",1.70,"","",""], 
["17S","Cash","","","","","","","","","","","","","","","","","","","","","","","","","","","",2.75,"","",""], 
["17S","E-Z (Off Peak)","","","","","","","","","","","","","","","","","","","","","","","","","","","",1.90,"","",""],
["17S","E-Z (Peak)","","","","","","","","","","","","","","","","","","","","","","","","","","","",2.75,"","",""], 

["18E","Green","",9.35,8.85,8.10,7.65,7.20,7.90,"",6.50,6.30,6.05,5.85,5.20,4.90,4.40,4.10,3.20,3.20,2.35,3.45,3.70,4.10,1.90,1.70,0.50,"","","","",""], 
["18E","Senior","",9.35,8.85,8.10,7.65,7.20,7.90,"",6.50,6.30,6.05,5.85,5.20,4.90,4.40,4.10,3.20,3.20,2.35,3.45,3.70,4.10,1.90,1.70,0.50,"","","","",""], 
["18E","Cash","",13.85,13.30,12.00,11.25,10.65,11.80,"",9.70,9.55,9.05,8.80,7.55,7.40,6.65,6.10,4.75,4.75,3.60,5.15,5.45,6.10,2.90,2.45,0.80,"","","","",""],
["18E","E-Z (Off Peak)","",10.40,9.85,9.05,8.50,8.05,8.80,"",7.25,7.05,6.75,6.50,5.80,5.45,4.90,4.60,3.60,3.60,2.65,3.85,4.15,4.60,2.15,1.90,0.60,"","","","",""],
["18E","E-Z (Peak)","",13.85,13.30,12.00,11.25,10.65,11.80,"",9.70,9.55,9.05,8.80,7.55,7.40,6.65,6.10,4.75,4.75,3.60,5.15,5.45,6.10,2.90,2.45,0.80,"","","","",""], 

["18W","Green","",9.35,8.85,8.10,7.65,7.20,7.90,"",6.50,6.30,6.05,5.85,5.20,4.90,4.40,4.10,3.20,3.20,2.35,3.45,3.70,4.10,1.90,1.70,"","",1.00,"","",""], 
["18W","Senior","",9.35,8.85,8.10,7.65,7.20,7.90,"",6.50,6.30,6.05,5.85,5.20,4.90,4.40,4.10,3.20,3.20,2.35,3.45,3.70,4.10,1.90,1.70,"","",1.00,"","",""],
["18W","Cash","",13.85,13.30,12.00,11.25,10.65,11.80,"",9.70,9.55,9.05,8.80,7.55,7.40,6.65,6.10,4.75,4.75,3.60,5.15,5.45,6.10,2.90,2.45,"","",1.45,"","",""],
["18W","E-Z (Off Peak)","",10.40,9.85,9.05,8.50,8.05,8.80,"",7.25,7.05,6.75,6.50,5.80,5.45,4.90,4.60,3.60,3.60,2.65,3.85,4.15,4.60,2.15,1.90,"","",1.15,"","",""], 
["18W","E-Z (Peak)","",13.85,13.30,12.00,11.25,10.65,11.80,"",9.70,9.55,9.05,8.80,7.55,7.40,6.65,6.10,4.75,4.75,3.60,5.15,5.45,6.10,2.90,2.45,"","",1.45,"","",""]];


var Mileage = 

[[,,"0","01","02","03","04","05","06",,"07","07A","08","08A","09","10","11","12","13","13A","14","14A","14B","14C","15E","15W","15X","16E","16W","18E","18W"], 

[,,"01","0","12","25","33","43","50",,"52","59","67","73","82","87","90","95","99","100","104","107","109","110","106","108","110","111","112",,,"118","118"], 

[,,"02","12","0","13","21","31","38",,"40","47","55","61","70","75","78","83","87","89","92","95","97","98","94","96","98","99","100",,,"105","105"], 

[,,"03","25","13","0","8","18","25",,"27","34","42","48","57","62","65","70","74","76","79","82","84","85","81","83","85","86","87",,,"92","92"], 

[,,"04","33","21","8","0","10","17",,"19","26","34","40","49","54","57","62","66","67","71","74","76","77","73","75","77","78","79",,,"84","84"], 

[,,"05","43","31","18","10","0","7",,"9","16","24","30","39","44","47","52","56","58","61","64","66","67","63","65","67","68","69",,,"74","74"], 

[,,"06","50","38","25","17","7","0",,"2","9","17","23","32","37","40","45","49","51","54","57","59","60","56","58","60","61","62",,,"67","67"], 

[,,"06A",,,,,,,"Entry Only / No Exit",,,,,,,,,,,,,,,,],

[,,"07","52","40","27","19","9","2",,"0","7","15","21","30","35","38","43","47","48","52","55","57","58","54","56","58","59","60",,,"65","65"], 

[,,"07A","59","47","34","26","16","9",,"7","0","7","13","22","27","30","35","39","42","44","47","49","50","46","48","50","51","52",,,"57","57"], 

[,,"08","67","55","42","34","24","17",,"15","7","0","6","15","20","23","28","32","34","37","40","42","43","39","41","43","44","45",,,"50","50"], 

[,,"08A","73","61","48","40","30","23",,"21","13","6","0","9","14","17","22","26","28","31","34","36","37","33","35","37","38","39",,,"44","44"], 

[,,"09","82","70","57","49","39","32",,"30","22","15","9","0","5","8","13","17","18","22","25","27","28","24","26","28","29","30",,,"35","35"], 

[,,"10","87","75","62","54","44","37",,"35","27","20","14","5","0","3","8","12","14","17","20","22","23","19","21","23","24","25",,,"30","30"], 

[,,"11","90","78","65","57","47","40",,"38","30","23","17","8","3","0","5","9","11","14","17","19","20","16","18","20","21","22",,,"27","27"], 

[,,"12","95","83","70","62","52","45",,"43","35","28","22","13","8","5","0","4","6","9","12","14","15","11","13","15","16","17",,,"22","22"], 

[,,"13","99","87","74","66","56","49",,"47","39","32","26","17","12","9","4","0","2","5","8","10","11","7","9","11","12","13",,,"18","18"], 

[,,"13A","100","89","76","67","58","51",,"48","42","34","28","18","14","11","6","2","0","3","7","9","9","5","7","10","11","11",,,"11","12"], 

[,,"14","104","92","79","71","61","54",,"52","44","37","31","22","17","14","9","5","3","0","3","5","6","2","4","6","7","8",,,"13","13"], 

[,,"14A","107","95","82","74","64","57",,"55","47","40","34","25","20","17","12","8","7","3","0","2","3","5","7","9","10","11",,,"16","16"], 

[,,"14B","109","97","84","76","66","59",,"57","49","42","36","27","22","19","14","10","9","5","2","0","1","7","9","11","12","13",,,"18","18"], 

[,,"14C","110","98","85","77","67","60",,"58","50","43","37","28","23","20","15","11","9","6","3","1","0","8","10","12","13","14",,,"19","19"], 

[,,"15E","106","94","81","73","63","56",,"54","46","39","33","24","19","16","11","7","5","2","5","7","8","0","2","4","5","6",,,"11","11"], 

[,,"15W","108","96","83","75","65","58",,"56","48","41","35","26","21","18","13","9","7","4","7","9","10","2","0","3","4","4",,,"9","9"], 

[,,"15X","110","98","85","77","67","60",,"58","50","43","39","28","23","20","15","11","10","6","9","11","12","4","3","0","2","2",,,"2","2"], 

[,,"16E","111","99","86","78","68","61",,"59","51","44","38","29","24","21","16","12","11","7","10","12","13","5","4","2","0","0",,,"0","0"], 

[,,"16W","112","100","87","79","69","62",,"60","52","45","39","30","25","22","17","13","11","8","11","13","14","6","4","2","0","0",,,"0","5"], 

[,,"17S",,,,,,,,,,,,,,,,,,,,,,,5,5,5,5,5,5,5],

[,,"17S",,,,,,,,,,,,,,,,,,,,,,,5,5,5,5,5,5,5],

[,,"18E","111","105","92","84","74","67",,"65","57","50","44","35","30","27","22","18","11","13","16","18","19","11","9","2","0","0",,,"0","0"], 

[,,"18W","113","105","92","84","74","67",,"65","57","50","44","35","30","27","22","18","12","13","16","18","19","11","9","2","0","5",,,"0","0"]];

//
//
//CAR FUNCTION
//
//
function button1_onclick(mForm) 
{

var temp;
var numlength;
var decimalpoint;
var entryTempHold = mForm.EntryInterchange.selectedIndex;
var exitTempHold = mForm.ExitInterchange.selectedIndex;


// take care of 6A and 17N/S situations:

switch (mForm.EntryInterchange.selectedIndex) {
  case 6:
    mForm.ExitInterchange.selectedIndex = 6; // 6 is the index which starts with 0!
    break;
  case 26:
    mForm.ExitInterchange.selectedIndex = 27;
    break;
  case 27:
    mForm.ExitInterchange.selectedIndex = 26;
    break;
}
switch (mForm.ExitInterchange.selectedIndex) 
{
  case 6:
    mForm.EntryInterchange.selectedIndex = 6;
    break;
  case 26:
    mForm.EntryInterchange.selectedIndex = 27;
    break;
  case 27:
    mForm.EntryInterchange.selectedIndex = 26;
    break;
}
if ((parseInt(mForm.EntryInterchange.selectedIndex) == parseInt(mForm.ExitInterchange.selectedIndex)) && (mForm.EntryInterchange.value != "9"))
{
  mForm.text1.value = "U-Turns Prohibited";
}
else
{
  mForm.text1.value = TollsArray[(mForm.ExitInterchange.value*5)-mForm.TransType.value][mForm.EntryInterchange.value];
  temp = "$" + mForm.text1.value
  if (temp.indexOf(".") == -1) temp = temp + ".";
  numlength=temp.length; // length of string
  decimalpoint=temp.indexOf("."); // position of decimal point starting with 0
  switch (numlength-decimalpoint)
  {
    case 1:
      temp = temp + "00";
      break;
    case 2:
      temp = temp + "0";
      break;
	case 3:
      temp = temp + "";
	break	
  }
  mForm.text1.value = temp;
}
mForm.text2.value = Mileage[mForm.ExitInterchange.value][mForm.EntryInterchange.value];

mForm.EntryInterchange.selectedIndex = entryTempHold;
mForm.ExitInterchange.selectedIndex = exitTempHold;

}
