function char_count(str,letter){
    var letter_count=0;
    for(var position=0;position<str.length;position++){
        if(str.charAt(position)==letter)
        {
            letter_count=letter_count+1;
        }
    }
    return letter_count;
}
console.log(char_count('nareswara','a'));
console.log(st.length);

