"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Form = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/conlangs", {
        method: "POST",
        body: JSON.stringify({ name ,description}),
      });

      const data = await response.json();

      if (data.id) {
        toast.success("Conlang created!");
        setName("");
      } else {
        toast.success("Conlang created! Please Reload");
      }
    } catch (error) {
      toast.error("An error occurred while creating the conlang.");
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-0 max-w-full sm:max-w-lg mx-auto">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow-md"
      >
        {/* Input for Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-neutral-700"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter conlang name"
            required
          />
        </div>

          {/* Input for Name */}
          <div>
          <label
            htmlFor="description"
            className="block text-sm font-semibold text-neutral-700"
          >
            Description
          </label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter conlang name"
            required
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" variant="secondary" className="w-full text-sm py-2">
          Create Conlang
        </Button>
      </form>
    </div>
  );
};
