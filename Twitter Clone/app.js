const form = document.querySelector("#shelterform")
form.addEventListener('submit', function(e){
    e.preventDefault();
    const user = form.elements.username.value;
    const tweet = form.elements.tweet.value;
    let tweetli = document.createElement("li");
    let userb = document.createElement("b");
    userb.innerText = user;
    tweetli.append(userb);
    tweetli.append(`- ${tweet}`)
    thoughts.append(tweetli);
    form.elements.username.value = '';
    form.elements.tweet.value = '';
})
