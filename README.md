# Air Quality Monitoring Application

An interactive web application for air quality monitoring, surveys, and data visualization.

## Features

- **User Authentication**: Secure login and signup system
- **Interactive Air Quality Survey**: Personalized survey to assess local air quality
- **Data Visualization**: Multiple chart types for exploring air quality data
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Backend**: Flask (Python)
- **Database**: SQLite
- **Data Processing**: Pandas, NumPy
- **Visualization**: Chart.js
- **Frontend**: HTML, CSS, JavaScript
- **Web Server**: Gunicorn

## Installation

1. Clone this repository
2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Run the application:
   ```
   python main.py
   ```

## Deployment

### Local Deployment

The application can be run locally using:

```bash
gunicorn --bind 0.0.0.0:5000 --reuse-port --reload main:app
```

### Cloud Deployment

The application is ready for deployment on Replit. Simply use the "Deploy" button on Replit to make it accessible on the internet.

## Project Structure

- `app.py`: Main Flask application with routes and database setup
- `main.py`: Entry point for the application
- `templates/`: HTML templates for the web pages
- `static/`: CSS, JavaScript, and image files
- `air_quality.csv`: Sample dataset for air quality visualization
- `survey_responses.csv`: Storage for survey responses

## Usage Guide

1. **Sign Up/Login**: Create an account or login with existing credentials
2. **Home Page**: View information about air quality monitoring
3. **Air Quality Data**: Explore visualizations of air quality metrics
4. **Take Survey**: Complete the survey to get personalized air quality assessment
5. **Results**: View your air quality assessment with recommendations

## License

This project is licensed under the MIT License - see the LICENSE file for details.