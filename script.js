var myName = "Anumudu Chukwuebuka Victor";
var courses = ["html", "CSS", "javaScript"];

console.log("My name is " + myName + ", I'm taking " + courses);

for(i = 0; i <= 200; i++){
    if(courses.length % 2 == 0){
        console.log(i);
        i++;
    } else{
        i++;
        if (i > 200) { 
            break; 
        }
        console.log(i);
    }
    
}