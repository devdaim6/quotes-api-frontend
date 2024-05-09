"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Quote from "@/components/Quote";
import axios from "axios";
const categories = [
  "love",
  "coding",
  "sad",
  "motivational",
  "success",
  "islamic",
  "philosophy",
  "friendship",
  "humility",
  "humour",
  "lifeLesson",
  "literary",
  "nature",
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("random");
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuotes();
  }, [selectedCategory]);

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://flask-quotes.vercel.app/?type=${selectedCategory}`
      );
      if (response.status !== 200) {
        throw new Error("Failed to fetch quotes");
      }
      console.log(response.data);
      setQuotes([response.data]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleRefetch = () => {
    fetchQuotes();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className="max-w-3xl px-4 py-8 mx-auto text-black rounded-lg shadow-md">
        {quotes.length > 0 &&
          quotes?.map((quote, index) => (
            <Quote
              key={index}
              text={quote?.quote}
              book={quote?.book}
              author={quote?.author || quote?.source}
            />
          ))}
        <button
          onClick={handleRefetch}
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md"
        >
          {loading ? "Loading..." : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Home;
