"use client";

import { useState } from "react";

type AddWordFormProps = {
  conlangs: { id: number; name: string }[];
};

export const AddWordForm = ({ conlangs }: AddWordFormProps) => {
  const [formData, setFormData] = useState({
    conlangId: conlangs[0]?.id || "",
    word: "",
    meaning: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    const response = await fetch("/api/conlangs/add-word", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Word added successfully!");
      setFormData({ conlangId: conlangs[0]?.id || "", word: "", meaning: "" });
    } else {
      const error = await response.json();
      setStatus(`Error: ${error.error || "Failed to add word."}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Select Conlang</label>
        <select
          name="conlangId"
          value={formData.conlangId}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border rounded-md"
        >
          {conlangs.map((conlang) => (
            <option key={conlang.id} value={conlang.id}>
              {conlang.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Word</label>
        <input
          type="text"
          name="word"
          value={formData.word}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Meaning</label>
        <input
          type="text"
          name="meaning"
          value={formData.meaning}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Add Word
      </button>
      {status && <p className="mt-4 text-center text-sm text-gray-500">{status}</p>}
    </form>
  );
};
