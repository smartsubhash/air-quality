// This script handles the interactive elements on the survey page

// Initialize any dynamic elements when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Get the slider element
    const slider = document.getElementById('answer');
    
    // If this element exists on the page
    if (slider) {
        // Add additional styling to the slider value indicator based on the value
        slider.addEventListener('input', function() {
            const value = parseInt(slider.value);
            const answerText = document.getElementById('answer-text');
            
            // Define colors for different ranges
            let color = '#4CAF50'; // Green for low values (good)
            
            if (value > 7) {
                color = '#FF5733'; // Red for high values (bad)
            } else if (value > 4) {
                color = '#FFC300'; // Yellow for medium values
            }
            
            // Update the text color
            answerText.style.color = color;
            
            // Update label for different ranges
            let label = 'Low';
            if (value > 7) {
                label = 'High';
            } else if (value > 4) {
                label = 'Medium';
            }
            
            // Update the text
            answerText.textContent = `Value: ${value} (${label})`;
        });
        
        // Trigger the input event to set initial styling
        const event = new Event('input');
        slider.dispatchEvent(event);
    }
});
