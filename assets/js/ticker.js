document.addEventListener("DOMContentLoaded", () => {

    const ticker = document.getElementById("global-ticker");
    if (!ticker) return;

    const announcements = [
        /*'🚨 <strong>Ron Brown Summer Lunch Program:</strong> Was a great success, thank you to all the volunteers :)',
        '🎒 <strong>2026 Backpack Giveaway:</strong> Friday, August 7th at 11:30 AM in memory of Helen J. Stanfill!',*/
        '🎒 <strong>Womens Ministry:</strong> Monday 14th and 28th at 5:30pm,
        '🎒 <strong>AWANA:</strong> Wednesdays at 6:00pm,
        '📦 <strong>Food Pantry:</strong> Elisha\'s Closet distribution coming up next Friday @ 9:00am!',
        '🍎 <strong>Feeding America:</strong> Regional mass food distribution this Tuesday at the Community Center!',
        '📱 <strong>RightNow Media:</strong> Free access to 25,000+ Bible study videos! Text LWKY to 49775 to join.'
    ];

    function buildTrack() {
        return announcements
            .map(item => `<div class="ticker-item">${item}</div>`)
            .join("");
    }

    ticker.innerHTML = `
        <div class="ticker-wrap">
            <div class="ticker-content">
                ${buildTrack()}
                ${buildTrack()}
            </div>
        </div>
    `;

});
