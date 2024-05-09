import React from "react";

const Quote = ({ text, author, book }) => {
  return (
    <div className="p-6 mb-4">
      <p className="text-lg font-semibold">{text}</p>
      <p className="text-sm text-gray-500">~ {author}</p>
      {book && (
        <p className="text-sm text-gray-600" style={{ fontStyle: "italic" }}>
          - {book}
        </p>
      )}
    </div>
  );
};

export default Quote;
