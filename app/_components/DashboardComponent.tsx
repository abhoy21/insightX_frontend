"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import {
  ReviewLengthCard,
  ReviewSentimentCard,
} from "./AverageReviewLengthComponent";
import FeatureCountCard from "./FeatureCountComponent";
import { BulbIcon, HotelReviewIcon, TextIcon, UploadIcon } from "./Icons";
import Loader from "./Loader"; // Assuming you have the Loader component from the previous code
import VaderValuesCard from "./VaderComponet";
import WordsWeightageChartComponent from "./WordsWeightChartComponent";

const DashboardComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenText, setIsModalOpenText] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [description, setDescription] = useState<string>("");
  const [reviewText, setReviewText] = useState<{ result: string }>({
    result: "",
  });
  const [selectedOption, setSelectedOption] = useState<string | "">("");
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setSelectedFile(event.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescription(e.target.value);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const [responseData, setResponseData] = useState<
    | {
        avg_len: number;
        max_len: number;
        min_len: number;
      }
    | 0
  >(0);

  const [responseVader, setResponseVader] = useState<
    | {
        avg_senti: number;
        avg_pos: number;
        avg_neg: number;
        avg_neu: number;
      }
    | 0
  >(0);

  const [wordweightageresponse, setWordWeightageResponse] = useState<{
    top_words: [string, number][];
  }>({ top_words: [] });

  const [featurecntresponse, setFeatureCntResponse] = useState<
    | {
        pred_cnt: Record<string, number>;
        feat_cnt: Record<
          string,
          {
            positive: number;
            negative: number;
          }
        >;
      }
    | {}
  >({});

  const defaultReviewLengthData = {
    avg_len: 0,
    max_len: 0,
    min_len: 0,
  };
  const defaultVaderData = {
    avg_senti: 0,
    avg_pos: 0,
    avg_neg: 0,
    avg_neu: 0,
  };

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

  const handleSubmitText = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();

    if (description) {
      const formData = new FormData();
      formData.append("text", description);

      setLoadingText(true);
      setError(null);

      try {
        const fetchData = async (url: string, body: FormData) => {
          const responseReviewText = await fetch(url, {
            method: "POST",
            body: body,
          });
          if (!responseReviewText)
            throw new Error("Network response was not ok");

          return responseReviewText.json();
        };

        if (selectedOption === "random_forest") {
          formData.append("model", "r");
        } else if (selectedOption === "logistic_regression") {
          formData.append("model", "l");
        } else {
          formData.append("model", "s");
        }

        const responseTextAnswer = await fetchData(
          "https://modeltext.onrender.com/get_text/",
          formData,
        );
        setReviewText(responseTextAnswer);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoadingText(false);
      }
    }
  };

  return (
    <div className='flex flex-col'>
      <header className='flex items-center h-16 px-4 border-b border-muted/20 shrink-0 md:px-6 bg-gradient-to-b from-[#ddeffc] to-[#ebf5fc]'>
        <Link
          href='/'
          className='flex items-center justify-center gap-2 text-lg font-semibold sm:text-base mr-4   py-3 mt-2 px-8 rounded-xl '
        >
          <HotelReviewIcon className='w-6 h-6' />
          <span className='text-xl bg-gradient-to-r from-blue-500 to-sky-500/45 bg-clip-text text-transparent'>
            InsightX
          </span>
        </Link>
        <div className='flex items-center gap-4 ml-auto'>
          <div className='relative flex-1'>
            <Button
              size='icon'
              variant='ghost'
              className='flex justify-between rounded-xl w-[160px] border border-gray-200 hover:border-sky-500 bg-gradient-to-tl from-blue-100 to-blue-100/25'
              onClick={() => setIsModalOpenText(true)}
            >
              <span className='ml-4 text-gray-400'>Text Input</span>
              <TextIcon className='w-5 h-5 text-sky-400 mr-4' />
            </Button>
          </div>
          <div className='flex items-center gap-2'>
            <input
              type='file'
              id='fileInput'
              style={{ display: "none" }}
              onChange={handleFileInputChange}
            />
            <Button
              size='icon'
              variant='ghost'
              className='flex justify-between rounded-xl w-[160px] border border-gray-200 hover:border-sky-500 bg-gradient-to-tl from-blue-100 to-blue-100/25'
              onClick={() => setIsModalOpen(true)}
            >
              <span className='ml-4 text-gray-400'>Uplaod File</span>
              <UploadIcon className='w-5 h-5 text-sky-400 mr-4' />
            </Button>
          </div>
          <div className='relative flex-1 rounded-full border border-gray-200 hover:border-sky-500 bg-gradient-to-tl from-blue-100 to-blue-100/25 p-2'>
            <Link href='status'>
              <BulbIcon className='w-5 h-5 text-sky-400' />
            </Link>
          </div>
        </div>
      </header>
      <>
        {isModalOpen && (
          <div
            className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-10'
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsModalOpen(false);
              }
            }}
          >
            <div className='bg-[#ebf5fc] w-full h-full max-w-2xl max-h-[500px] mx-4 p-6 rounded-3xl'>
              <h2 className='text-xl font-bold mb-4'>Upload File</h2>
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => {
                  const fileInput = document.getElementById("fileInput");
                  if (fileInput) {
                    (fileInput as HTMLInputElement).click();
                  }
                }}
                className='border-dashed border-2 h-[270px] border-gray-400 p-4 mb-4 cursor-pointer'
              >
                {selectedFile ? (
                  <p className='flex items-center justify-center text-xl font-bold text-gray-500 pt-20'>
                    {selectedFile.name}
                  </p>
                ) : (
                  <p className='flex items-center justify-center text-xl font-bold text-gray-500 pt-20'>
                    Drag and drop a file here or click to upload
                  </p>
                )}
                <input
                  type='file'
                  id='dragFileInput'
                  className='hidden'
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setSelectedFile(file);
                  }}
                />
              </div>
              <div className='relative mb-4'>
                <select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className='w-full p-3  rounded-xl bg-gradient-to-tl from-sky-200 to-sky-200/25 text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                  <option value='' disabled>
                    Select a model
                  </option>
                  <option value='Logistic Regression'>
                    Logistic Regression
                  </option>
                  <option value='Random Forest Classifier'>
                    Random Forest Classifier
                  </option>
                  <option value='Support Vector Machine(svm)'>
                    Support Vector Machine
                  </option>
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                  <svg
                    className='fill-current h-4 w-4'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                  </svg>
                </div>
              </div>
              <div className='flex justify-end'>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className='mr-2 px-4 py-2 bg-gradient-to-tl from-red-500 to-red-500/25 rounded-lg hover:bg-gray-300 custom-neumorphism transition-colors'
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!selectedFile || !selectedOption}
                  className={`px-4 py-2 rounded-md text-white transition-colors duration-300 ease-in-out 
                    ${
                      !selectedFile || !selectedOption
                        ? "bg-sky-500/25 cursor-not-allowed shadow-none"
                        : "bg-gradient-to-tl from-sky-500 to-sky-500/35 hover:bg-sky-600 backdrop-blur-md backdrop-saturate-150 custom-neumorphism shadow-lg"
                    }`}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}

        {isModalOpenText && (
          <div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsModalOpenText(false);
              }
            }}
          >
            <div className='bg-[#ebf5fc] w-full h-full max-w-[1500px] max-h-[500px] rounded-3xl shadow-lg'>
              <div className='grid grid-cols-2'>
                {/* Left Side: Text Input and Submit Button */}
                <div className='p-6'>
                  <h2 className='text-xl font-semibold mb-1'>
                    Enter your Review
                  </h2>
                  <p className='text-gray-400'>
                    Share your thoughts by writing a review, and see how our
                    analysis tool interprets your feedback. Test the results to
                    gain insights into the sentiment and key aspects of your
                    review.
                  </p>

                  <textarea
                    className='w-full p-2 mt-14 border border-gray-300 bg-[#e0f2ff] rounded-lg'
                    rows={7}
                    value={description}
                    placeholder='Type your description here...'
                    onChange={handleDescriptionChange}
                  ></textarea>
                  <div className='relative mb-4'>
                    <select
                      value={selectedOption}
                      onChange={handleOptionChange}
                      className='w-full p-3  rounded-xl bg-gradient-to-tl from-sky-200 to-sky-200/25 text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                      <option value='' disabled>
                        Select a model
                      </option>
                      <option value='logistic_regression'>
                        Logistic Regression
                      </option>
                      <option value='random_forest'>
                        Random Forest Classifier
                      </option>
                      <option value='svm'>Support Vector Machine</option>
                    </select>
                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                      <svg
                        className='fill-current h-4 w-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                      </svg>
                    </div>
                  </div>
                  <button
                    onClick={handleSubmitText}
                    disabled={!description || !selectedOption}
                    className={`px-4 py-2 rounded-md text-white transition-colors duration-300 ease-in-out 
                    ${
                      !description || !selectedOption
                        ? "bg-sky-500/25 cursor-not-allowed shadow-none"
                        : "bg-gradient-to-tl from-sky-500 to-sky-500/35 hover:bg-sky-600 backdrop-blur-md backdrop-saturate-150 custom-neumorphism shadow-lg"
                    }`}
                  >
                    Submit
                  </button>
                </div>
                {/* Right Side: Results Display */}
                <div className='bg-[#ebf5fc] text-sky-600 p-6 rounded-3xl border-l-4 border-gray-200 min-h-full'>
                  <h2 className='text-3xl font-semibold mb-4'>Results</h2>
                  <div className='min-h-full flex items-center justify-center'>
                    {loadingText ? (
                      <div className='loaderText'></div>
                    ) : error ? (
                      <div className='text-red-500'>{error}</div>
                    ) : (
                      <div className='flex flex-col items-center justify-center'>
                        {String(reviewText.result) === "0" && (
                          <p className='text-green-500 text-xl font-semibold'>
                            Positive response detected. We&apos;re glad you had
                            a good experience!
                            <br />
                            Your feedback helps us continue providing excellent
                            service. Thank you for sharing your positive
                            thoughts!
                          </p>
                        )}
                        {String(reviewText.result) === "1" && (
                          <p className='text-red-500 text-xl font-semibold'>
                            Your review indicates a negative experience.
                            We&apos;re sorry to hear that.
                            <br />
                            We strive to improve, and your feedback is
                            invaluable. Please consider providing more details
                            so we can better understand and address your
                            concerns.
                          </p>
                        )}
                        {!["0", "1"].includes(String(reviewText.result)) && (
                          <p className='text-gray-500 text-xl font-semibold'>
                            Write a review and select a model to get your
                            results
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
      <main className='flex flex-1 flex-col justify-center items-center gap-4 p-4 md:gap-8 md:p-6'>
        {loading ? (
          <Loader propsModelName={selectedOption} />
        ) : error ? (
          <div className='text-red-500'>{error}</div>
        ) : (
          <div>
            <div className='grid grid-cols-3 gap-4'>
              <div className='col-span-2'>
                <ReviewSentimentCard
                  featurecntresponse={featurecntresponse || {}}
                />
              </div>
              <VaderValuesCard data={responseVader || defaultVaderData} />
            </div>

            <div className='grid grid-cols-3 gap-4 mt-4'>
              <div className='col-span-2'>
                <ReviewLengthCard
                  data={responseData || defaultReviewLengthData}
                />

                <WordsWeightageChartComponent
                  wordweightageresponse={wordweightageresponse}
                />
              </div>
              <div className='col-span-1'>
                <FeatureCountCard
                  featurecntresponse={featurecntresponse || {}}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardComponent;
