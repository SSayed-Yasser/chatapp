let chats;

if ( localStorage.getItem("ssdd") == 1) {
    chats = JSON.parse(localStorage.getItem("aassdd"));
    data()
} else {
    chats = [{
        text: "Welcome to Chat app, enjoy your time",
    }];
    localStorage.setItem("aassdd",JSON.stringify(chats))
    data()
    let sayed;
    sayed = 1;
    localStorage.setItem("ssdd",sayed)
}

function data() {
    let chatsHTML = '';
chats.forEach((chat) => {
    chatsHTML += `
            <div class="chat-text-div">
                <p class="chat-text-h3">${chat.text}</p>
            </div>
    `;
});
document.querySelector('.main-chat').innerHTML = chatsHTML;
};

document.getElementById('input').value = localStorage.getItem("thetext");

function send() {
    const theText = document.getElementById('input').value;
    chats.push ({
        text: theText,
    });
    data()
    localStorage.setItem("aassdd",JSON.stringify(chats))
    localStorage.setItem("thetext",theText)
};

function delet() {
    let ffgg;
    ffgg = document.getElementById('input1').value;
    console.log(ffgg)
    chats.pop()
    data()
}
