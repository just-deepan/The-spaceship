Overview
This weather application allows users to input a city name and retrieve real-time weather data, including temperature, humidity, and wind speed.
It also displays a weather icon corresponding to the current weather conditions.

HTML Structure:

Document Setup: The document is structured with a <!DOCTYPE html> declaration and includes essential meta tags for character set and responsiveness.
Links: It links to an external stylesheet (style.css) and Google Fonts for typography.
Search Input: Contains an input field for users to enter the city name and a button to trigger the search.
Weather Display: Displays the current weather, including the city name, temperature, and associated weather icon.
Details Section: Shows humidity and wind speed in a structured layout.
Error Message: Includes an error message section that informs users when a city name is incorrect or not found.

CSS Styling:

Global Styles: Resets margins and padding and sets a default font family. The body is styled for a dark background with centered content.
Card Component: The main container for the weather application is styled with a gradient background, rounded corners, and padding.
Responsive Design: Media queries ensure that the application looks good on smaller screens by adjusting element sizes.
Error Message: Initially hidden and styled to be displayed in white when triggered.

JavaScript Functionality:

• Element Selection: Selects various DOM elements for later manipulation (search input, button, weather display, etc.).

• API Integration: Uses the OpenWeatherMap API to fetch weather data based on the user's input.

• Async Function: The checkWeather function is asynchronous, meaning it handles API calls efficiently. It uses fetch to retrieve weather data.

• Error Handling: Checks the response status. If the city is not found (404 error), it displays an error message and hides the weather details.
If successful, it updates the display with the city's name, temperature, humidity, wind speed, and the appropriate weather icon.

• Event Listener: Listens for clicks on the search button to trigger the weather check based on the input value.

Functionality Flow:

1. The user enters a city name and clicks the search button.
2. The application fetches weather data from the API using the provided city name.
3. If the city is valid, it displays the weather information; if not, it shows an error message.
