function showEvent(eventId) {
    const eventDescriptions = {
        1: "At time 0 seconds, the universe began as a singularity, an infinitely small and hot point.",
        2: "At time 1 second, the universe started to cool, and subatomic particles began to form.",
        3: "At 3 minutes, nuclei of hydrogen and helium formed through nuclear fusion.",
        4: "At 300,000 years, the universe cooled enough for atoms to form, and light could travel freely.",
        5: "At 1 billion years, galaxies began to form, and the universe continued to expand."
    };

    const descriptionElement = document.getElementById('event-description');
    descriptionElement.textContent = eventDescriptions[eventId] || "No information available for this time.";
}