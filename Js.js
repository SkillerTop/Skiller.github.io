function main(){
  var div1 = document.createElement("div");
  document.body.appendChild(div1);
  div1.setAttribute("class","div1");

  var div2 = document.createElement("div");
  document.getElementsByClassName("div1")[0].appendChild(div2);
  div2.setAttribute("class","div2");

  var form1 = document.createElement("form");
  document.getElementsByClassName("div2")[0].appendChild(form1);
  form1.setAttribute("name","name1");
  form1.setAttribute("class","form1");

  var input1=document.createElement("input");
  document.getElementsByClassName("form1")[0].appendChild(input1);
  input1.setAttribute("type","text");
  input1.setAttribute("class","text");
  document.getElementsByClassName("div2")[0].appendChild(input1);

  var div3= document.createElement("div");
  document.getElementsByClassName("div2")[0].appendChild(div3);
  div3.setAttribute("class","div3");

  var div4 = document.createElement("div");
  div4.setAttribute("class","div4");
  document.getElementsByClassName("div3")[0].appendChild(div4);
  var p1 = document.createElement("p");
  document.getElementsByClassName("div4")[0].appendChild(p1);
  p1.setAttribute("class","p1");

  var answer = [   "It is certain", 
                   "It is decidedly so", 
                   "Without a doubt", 
                   "Yes - definitely",
                   "You may rely on it", 
                   "As I see it, yes", 
                   "Most likely", 
                   "Outlook good", 
                   "Yes", "Signs point to yes",
                   "Don't count on it", 
                   "My reply is no",
                   "My sources say no", 
                   "Outlook not so good",
                   "Very doubtful", 
                   "Reply hazy, try again", 
                   "Ask again later", 
                   "Better not tell you now",
                   "Cannot predict now", 
                   "Concentrate and ask again"];

       var p1 = document.getElementsByClassName("p1")[0];
       var input1 = document.getElementsByClassName("text")[0];
       div4.addEventListener("click", function() {
         if (input1.value.length < 1) {
           alert('Enter a question!');
         } else {
           p1.innerText = "";
           var num = Math.floor(Math.random() * Math.floor(answer.length));
           p1.innerText = answer[num];
         }
       });
    };
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

