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
- **Styling**: Tailwind CSS, Shadcn UI


## Machine Learning Models Used

In the sentiment analysis project, we have implemented the following machine learning models:

- **Logistic Regression**: A statistical model that uses a logistic function to model binary dependent variables. It's often used for binary classification tasks and provides a good baseline model.

- **Random Forest Classifier**: An ensemble learning method that operates by constructing a multitude of decision trees during training and outputting the class that is the mode of the classes (classification) of the individual trees.

- **Support Vector Machine (SVM)**: A powerful classification technique that finds the hyperplane that best divides a dataset into classes. SVM is particularly effective in high-dimensional spaces and is used for both classification and regression challenges.


## Getting Started


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
| https://modeltext.onrender.com/get_text/ | Performs Logistic Regression or Random Forest Classifier or SVM classification on single text data | POST | FormData with string input and model type | `{ result: string }` |

### Notes:
- All APIs expect a file upload in the FormData.
- The model2 API requires an additional "model" parameter in the FormData, which should be set to "log" for Logistic Regression or "svm" for Support Vector Machine.
- Error handling is implemented for all API calls, with a generic error message displayed if any request fails.
- The application uses React hooks (useState) to manage the state of API responses and loading/error states.


## Further Information

For more detailed information about our APIs and their usage, please refer to the API repositories:

- [Model API 1 (Random Forest Classifier)](https://github.com/UD11/cogni_model_api.git)
- [Model API 2 (Logistic Regression & Support Vector Machine(SVM))](https://github.com/UD11/model_api2.git)
- [Important Words](https://github.com/UD11/imp_words.git)
- [VADER Values](https://github.com/UD11/vader.git)
- [Word Lengths](https://github.com/UD11/wrd_len.git)
- [Model Text](https://github.com/UD11/modelText.git)



# File Upload and API Integration

This project demonstrates how to handle file uploads in a React application and integrate with multiple APIs to process the uploaded file. The code snippet provided is part of an event handler function that handles the submission of a file, sends it to different APIs for processing, and manages the response data.


## Overview

The `handleSubmit` function is an asynchronous function that is triggered when a user submits a file through a button click. It uploads the selected file to multiple APIs, retrieves the results, and updates the application state with the responses. This approach is useful in scenarios where there is a need to process a file using different models or services, such as text analysis, machine learning predictions, or data extraction.

## Usage

This function is designed to be used in a React component where users can upload a file and select a model option for processing. The function handles the following:

- Uploads the selected file to multiple APIs.
- Processes the file using different machine learning models depending on the user's selection along with other .
- Updates the component's state with the results from the APIs.

To integrate this function into a Nextjs project:

1. Initialize variables for storing responses and managing the state in your React component.

2. Use this function within a component that manages file uploads and model selections.

## API Information

The function sends the uploaded file to the following APIs:

- **Word Length API**: Processes the file to determine word lengths.
  - URL: `https://wrd-len.onrender.com/wrd_len/`
- **VADER API**: Analyzes the sentiment of the text (provides positive,negative, neutral and compound scores).
  - URL: `https://vader-edft.onrender.com/vader/`
- **Important Words API**: Identifies important words in the text.
  - URL: `https://imp-words.onrender.com/imp_words/`
- **Feature Count API**: Processes the file with either a Random Forest Classifier or another selected model (Logistic Regression or SVM) to count features.
  - URLs: 
    - `https://modelapi-dt3c.onrender.com/model/` (Random Forest Classifier)
    - `https://modelapi2.onrender.com/model2/` (Logistic Regression or SVM)

## Code Explanation

### Function Breakdown

- **File Upload and API Request**:
  - The function starts by creating a `FormData` object and appending the selected file to it.
  - Depending on the selected model option, it appends an additional field to specify the model type if it's not a Random Forest Classifier.

- **Fetching Data from APIs**:
  - The function uses `fetch` to send the file to the respective APIs.
  - It waits for all API responses using `Promise.all`, allowing for concurrent processing of the file by different APIs.

- **State Management**:
  - Upon successful API responses, the function updates the state with the data returned from the APIs.
  - If any API request fails, an error is caught and handled appropriately.

### Function Flow


1. **Loading and Modal State Management**: Sets loading state and closes any open modal before initiating the API requests.
2. **API Requests**: Based on the selected model, the function dynamically chooses the appropriate API and sends the file data.
3. **Response Handling**: Once all requests are completed, the function updates the state with the received data or handles any errors.
4. **Finalizing**: Resets the loading state once all operations are complete.

## Error Handling

- The function includes a `try-catch` block to handle potential errors during the API requests.
- If an error occurs (e.g., network issues or server errors), it logs the error to the console and updates the state with an error message to inform the user.

## Example

Here’s an example of how to use the `handleSubmit` function within a React component:

```tsx
import React, { useState } from 'react';

const MyComponent = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Random Forest Classifier');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  // Use handleSubmit function here (code snippet is provided below)

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="Random Forest Classifier">Random Forest Classifier</option>
        <option value="Logistic Regression">Logistic Regression</option>
        <option value="SVM">SVM</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {/* Display responseData here */}
    </div>
  );
};

export default MyComponent;
```

```tsx
 const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      setLoading(true);
      setIsModalOpen(false);
      setError(null);

      try {
        const fetchData = async (url: string, body: FormData) => {
          const response = await fetch(url, {
            method: "POST",
            body: body,
          });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        };

        const featureCountUrl =
          selectedOption === "Random Forest Classifier"
            ? "https://modelapi-dt3c.onrender.com/model/"
            : "https://modelapi2.onrender.com/model2/";

        if (selectedOption !== "Random Forest Classifier") {
          formData.append(
            "model",
            selectedOption === "Logistic Regression" ? "log" : "svm",
          );
        }

        const [lengthData, vaderData, wordWeightageData, featureCountData] =
          await Promise.all([
            fetchData("https://wrd-len.onrender.com/wrd_len/", formData),
            fetchData("https://vader-edft.onrender.com/vader/", formData),
            fetchData("https://imp-words.onrender.com/imp_words/", formData),
            fetchData(featureCountUrl, formData),
          ]);

        setResponseData(lengthData);
        setResponseVader(vaderData);
        setWordWeightageResponse(wordWeightageData);
        setFeatureCntResponse(featureCountData);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };
```

# API Status Checker Hook

This project contains a custom React hook, `useApiStatus`, that checks the status of multiple APIs and provides detailed status information for each API. The hook is useful for monitoring the availability of APIs used in your application and can be easily integrated into any React component.


## Overview

The `useApiStatus` hook fetches the status of several APIs from a list and returns an array of status objects. Each object contains the API's name, URL, status (loading, up, or down), and a description.

This hook can be useful in dashboards, admin panels, or any application that relies on multiple APIs and needs to provide status updates.

## Usage

To use the `useApiStatus` hook, simply import it into your React component and call it within the component's logic.

```tsx
import { useApiStatus } from "@/hooks/useApiStatus";

const ApiStatusComponent = () => {
  const apiStatuses = useApiStatus()

  return (
    <div>
      {apiStatuses.map(api => (
        <div key={api.id}>
          <h3>{api.name}</h3>
          <p>Status: {api.status}</p>
          <p>Description: {api.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ApiStatusComponent


```

This README offers a clear and thorough overview of the project, highlighting its key features, technology stack, setup instructions, and project structure. It's crafted to be both professional and accessible, ensuring that users and potential contributors can easily understand and engage with the project.