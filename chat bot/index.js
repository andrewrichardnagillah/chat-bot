function talk() {
    let know = {
        "who are you": "hello, Andrew here",
        "how are you": "good)",
        "what can i do for you": "remind me to code ",
        "your projects": "i have 20 projects in my github",
        "ok": "thankyou so much",
        "bye": "okay we will talk later",
    }

    let user = document.getElementById("userBox").value
    document.getElementById("chatLog").innerHTML = know[user] + "<br>"
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>"
    } else {
        document.getElementById("chatLog").innerHTML = "sorry , i didn't understand" + "<br>"
    }
}