
    // function showMessage(mood) {
    //     let message = "";


    //     if (mood === 'happy') {
    //         message = "Keep smiling! Your happiness is contagious 😄";
    //     } else if (mood === 'sad') {
    //         message = "It's okay to feel low. Tomorrow will be brighter 🌈";
    //     } else if (mood === 'angry') {
    //         message = "Take a deep breath. Let it go. You're stronger than anger 💪";
    //     } else if (mood === 'anxious') {
    //         message = "Pause. Breathe. You're doing better than you think 🧘‍♂";
    //     }

    //     document.getElementById("message-box").innerText = message;

    //     // Save mood to localStorage
    //     let moodHistory = JSON.parse(localStorage.getItem("moods")) || [];
    //     let currentDate = new Date().toLocaleString();
    //     moodHistory.push({mood:mood, time:currentDate});
    //     localStorage.setItem("moods",JSON.stringify(moodHistory));
    // }

//      function saveMood(mood) {
//         console.log("Saving mood:", mood);
//         let moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];
//         let entry = {
//         time: new Date().toLocaleString(),
//         mood: mood
//     };
//         moodHistory.push(entry);
//         localStorage.setItem("moodHistory", JSON.stringify(moodHistory));
//         alert("Mood saved!");
//     }

//     document.getElementById("submitBtn").addEventListener("click", async () => {
//   const mood = document.getElementById("moodInput").value;

//   const response = await fetch("http://localhost:3000/api/suggestion", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ mood: mood })
//   });

//   const data = await response.json();
//   document.getElementById("suggestionBox").innerText = data.suggestion;
// });


function saveMood(mood) {
    console.log("Saving mood:", mood);
    let moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];
    let entry = {
        time: new Date().toLocaleString(),
        mood: mood
    };
    moodHistory.push(entry);
    localStorage.setItem("moodHistory", JSON.stringify(moodHistory));
    alert("Mood saved!");
}

document.getElementById("submitBtn").addEventListener("click", async () => {
    const mood = document.getElementById("moodInput").value;

    try {
        const response = await fetch("http://localhost:3000/api/suggestion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ mood: mood })
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        document.getElementById("suggestionBox").innerText = data.suggestion;

        // ✅ Call saveMood only if suggestion is successfully received
        saveMood(mood);
    } catch (error) {
        console.error("Error getting suggestion:", error);
        alert("❌ Failed to get suggestion. Please try again.");
    }
});
