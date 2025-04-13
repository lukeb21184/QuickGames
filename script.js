// Weekly rotation logic
document.addEventListener('DOMContentLoaded', () => {
    // Calculate current week number
    const oneJan = new Date(new Date().getFullYear(), 0, 1);
    const today = new Date();
    const currentWeek = Math.ceil((((today - oneJan) / 86400000) + oneJan.getDay() + 1) / 7);
    
    // Update week indicator
    const weekIndicator = document.getElementById('week-indicator');
    if (weekIndicator) {
        const gamesThisWeek = [
            "Tap Challenges",
            "Reaction Tests",
            "Word Puzzles"
        ];
        const weekIndex = (currentWeek - 1) % gamesThisWeek.length;
        weekIndicator.textContent = `Week ${currentWeek}: ${gamesThisWeek[weekIndex]}`;
    }
    
    // Load leaderboard from localStorage
    updateLeaderboard();
});

function updateLeaderboard() {
    // Leaderboard logic here
}
