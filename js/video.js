var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");

    // Turn off autoplay and looping
    video.autoplay = false;
    video.loop = false;

    console.log("Auto play is set to " + video.autoplay);
    console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow Down Video");
    video.playbackRate *= 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up Video");
    video.playbackRate /= 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");
    if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0;
        console.log("Restarting video");
    }
    console.log("Current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted) {
        video.muted = false;
        this.innerHTML = "Mute";
        console.log("Unmute");
    } else {
        video.muted = true;
        this.innerHTML = "Unmute";
        console.log("Mute");
    }
});

document.querySelector("#slider").addEventListener("input", function() {
    console.log("Volume Change");
    video.volume = this.value / 100;
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
    console.log("Volume is " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Styled with oldSchool class");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    console.log("Removed oldSchool class");
    video.classList.remove("oldSchool");
});
