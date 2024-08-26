# InsightX

## Overview

InsightX is a cutting-edge web application that provides businesses with actionable insights based on user feedback. Leveraging machine learning for sentiment analysis, this tool empowers decision-makers with data-driven recommendations.

## Features

- **ML-Powered Sentiment Analysis**: Utilize advanced machine learning algorithms to analyze user feedback and extract valuable insights.
- **Interactive Dashboard**: Visualize key metrics and trends through an intuitive, data-rich dashboard.
- **Decision Support**: Receive AI-generated recommendations to guide business strategies. (Coming Soon)
- **Elegant Landing Page**: Showcase the product's features and benefits through a beautifully designed landing page.

## Technology Stack

- **Frontend Framework**: Next.js
- **Styling**: Tailwind CSS
- **Charts**: Chart.js

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)


### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhoy21/insightX_frontend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd client
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and visit `http://localhost:3000`

## Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Project Structure

```
client/
├── app/
│   ├── _components/
│   │   ├── HeaderLandingPage.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Icons.tsx
│   │   ├── LandingPage.tsx
│   │   ├── Loader.tsx
│   │   ├── LongestCard.tsx
│   │   ├── ShortestCard.tsx
│   │   ├── TabButtonComponent.tsx
│   │   ├── TotalPredictionCount.tsx
│   │   ├── VaderComponet.tsx
│   │   └── WordsWeightChartComponent.tsx
│   ├── (home)/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── dashboard/
│       ├── layout.tsx
│       └── page.tsx
├── components/
├── lib/
├── node_modules/
├── public/
├── .eslintrc.json
├── .gitignore
├── components.json
├── favicon.ico
├── globals.css
├── layout.tsx
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```




## API Documentation

| API Endpoint | Description | Method | Request Body | Response |
|--------------|-------------|--------|--------------|----------|
| https://wrd-len.onrender.com/wrd_len/ | Calculates review length statistics | POST | FormData with file | `{ avg_len: number, max_len: number, min_len: number }` |
| https://vader-edft.onrender.com/vader/ | Performs VADER sentiment analysis | POST | FormData with file | `{ avg_senti: number, avg_pos: number, avg_neg: number, avg_neu: number }` |
| https://imp-words.onrender.com/imp_words/ | Extracts important words and their weightage | POST | FormData with file | `{ top_words: [string, number][] }` |
| https://modelapi-dt3c.onrender.com/model/ | Performs Random Forest classification | POST | FormData with file | `{ pred_cnt: Record<string, number>, feat_cnt: Record<string, { positive: number, negative: number }> }` |
| https://modelapi2.onrender.com/model2/ | Performs Logistic Regression or SVM classification | POST | FormData with file and model type | `{ pred_cnt: Record<string, number>, feat_cnt: Record<string, { positive: number, negative: number }> }` |

### Notes:
- All APIs expect a file upload in the FormData.
- The model2 API requires an additional "model" parameter in the FormData, which should be set to "log" for Logistic Regression or "svm" for Support Vector Machine.
- Error handling is implemented for all API calls, with a generic error message displayed if any request fails.
- The application uses React hooks (useState) to manage the state of API responses and loading/error states.


## Further Information

For more detailed information about our APIs and their usage, please refer to the API repositories:

- [Model API 2 (Logistic Regression & Support Vector Machine(SVM))](https://github.com/UD11/model_api2.git)
- [Model API 1 (Random Forest Classifier)](https://github.com/UD11/cogni_model_api.git)
- [Important Words](https://github.com/UD11/imp_words.git)
- [VADER Values](https://github.com/UD11/vader.git)
- [Word Lengths](https://github.com/UD11/wrd_len.git)



---

Developed with ❤️ by the InsightX Team
```

This README offers a clear and thorough overview of the project, highlighting its key features, technology stack, setup instructions, and project structure. It's crafted to be both professional and accessible, ensuring that users and potential contributors can easily understand and engage with the project.