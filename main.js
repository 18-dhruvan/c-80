var display_student_array = [];
function submit(){
for(i=1;i<5;i++){
    var name = document.getElementById("name_of_the_student_"+i).value;
    console.log (name);
    display_student_array.push(name);
}
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
removecommas=display_student_array.join("  ")
document.getElementById("display_name_without_commas").innerHTML=removecommas ;


}