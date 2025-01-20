// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { PlusIcon, EyeIcon, Trash2Icon } from "lucide-react";

// interface Conlang {
//   id: string;
//   name: string;
//   description: string;
// }

// interface DictionaryEntry {
//   word: string;
//   meaning: string;
// }

// export const Table = () => {
//   const [conlangs, setConlangs] = useState<Conlang[]>([]);
//   const [search, setSearch] = useState("");
//   const [selectedConlangId, setSelectedConlangId] = useState<string | null>(null);
//   const [dictionary, setDictionary] = useState<DictionaryEntry[]>([]);
//   const [word, setWord] = useState("");
//   const [meaning, setMeaning] = useState("");
//   const [viewDictionary, setViewDictionary] = useState<boolean>(false);

//   useEffect(() => {
//     const fetchConlangs = async () => {
//       try {
//         const response = await fetch("/api/conlangs");
//         const data = await response.json();
//         setConlangs(data);
//       } catch (error) {
//         console.error("Error fetching conlangs:", error);
//       }
//     };

//     fetchConlangs();
//   }, []);

//   const handleDelete = async (id: string) => {
//     try {
//       const response = await fetch(`/api/conlangs/${id}`, { method: "DELETE" });

//       if (response.ok) {
//         setConlangs(conlangs.filter((conlang) => conlang.id !== id));
//       } else {
//         console.error("Failed to delete conlang.");
//       }
//     } catch (error) {
//       console.error("Error deleting conlang:", error);
//     }
//   };

//   const handleAddWord = async () => {
//     if (!word || !meaning || !selectedConlangId) return;

//     try {
//       const response = await fetch("/api/conlangs/add-word", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ conlangId: selectedConlangId, word, meaning }),
//       });

//       if (response.ok) {
//         const newEntry = await response.json();
//         setDictionary([...dictionary, newEntry]);
//         setWord("");
//         setMeaning("");
//       } else {
//         console.error("Failed to add word to dictionary");
//       }
//     } catch (error) {
//       console.error("Error adding word:", error);
//     }
//   };

//   const handleViewDictionary = async (conlangId: string) => {
//     try {
//       const response = await fetch(`/api/conlangs/${conlangId}/dictionary`);
//       if (response.ok) {
//         const data = await response.json();
//         setDictionary(data);
//         setViewDictionary(true);
//       } else {
//         console.error("Failed to fetch dictionary");
//       }
//     } catch (error) {
//       console.error("Error fetching dictionary:", error);
//     }
//   };

//   const filteredConlangs = conlangs.filter((conlang) =>
//     conlang.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="w-full max-w-3xl mx-auto">
//       <div className="mb-4 flex justify-between">
//         <input
//           type="text"
//           placeholder="Search Conlangs..."
//           className="w-full sm:w-64 rounded-md border px-4 py-2"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <ul className="space-y-2">
//         {filteredConlangs.map((conlang) => (
//           <li key={conlang.id} className="flex items-center justify-between rounded-md border p-4">
//             <div>
//               <h3 className="text-lg font-bold">{conlang.name}</h3>
//               <p className="text-sm text-muted-foreground">{conlang.description}</p>
//             </div>
//             <div className="flex space-x-2">
//               <Button variant="ghost" onClick={() => setSelectedConlangId(conlang.id)}>
//                 <PlusIcon className="h-5 w-5 mr-2" />
//               </Button>
//               <Button variant="ghost" onClick={() => handleViewDictionary(conlang.id)}>
//                 <EyeIcon className="h-5 w-5 mr-2" />
//               </Button>
//               <Button variant="danger" onClick={() => handleDelete(conlang.id)}>
//                 <Trash2Icon className="h-5 w-5" />
//               </Button>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {selectedConlangId && !viewDictionary && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-md w-96">
//             <h3 className="text-xl font-semibold mb-4">Add Word to Dictionary</h3>
//             <input
//               type="text"
//               placeholder="Word"
//               className="w-full p-2 border rounded-md"
//               value={word}
//               onChange={(e) => setWord(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Meaning"
//               className="w-full p-2 border rounded-md"
//               value={meaning}
//               onChange={(e) => setMeaning(e.target.value)}
//             />
//             <Button variant="primary" onClick={handleAddWord} className="w-full">
//               Add Word
//             </Button>
//             <Button variant="ghost" onClick={() => setSelectedConlangId(null)} className="w-full mt-2">
//               Close
//             </Button>
//           </div>
//         </div>
//       )}

//       {viewDictionary && selectedConlangId && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-md w-96">
//             <h3 className="text-xl font-semibold mb-4">Dictionary for {selectedConlangId}</h3>
//             <table className="w-full table-auto">
//               <thead>
//                 <tr>
//                   <th className="px-4 py-2 text-left">Word</th>
//                   <th className="px-4 py-2 text-left">Meaning</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {dictionary.map((entry, idx) => (
//                   <tr key={idx}>
//                     <td className="px-4 py-2">{entry.word}</td>
//                     <td className="px-4 py-2">{entry.meaning}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <Button variant="ghost" onClick={() => setViewDictionary(false)} className="w-full mt-2">
//               Close Dictionary
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };






"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon, EyeIcon, Trash2Icon } from "lucide-react";

interface Conlang {
  id: string;
  name: string;
  description: string;
}

interface DictionaryEntry {
  word: string;
  meaning: string;
}

export const Table = () => {
  const [conlangs, setConlangs] = useState<Conlang[]>([]);
  const [search, setSearch] = useState("");
  const [selectedConlangId, setSelectedConlangId] = useState<string | null>(null);
  const [dictionary, setDictionary] = useState<DictionaryEntry[]>([]);
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [viewDictionary, setViewDictionary] = useState(false);
  const [dictionarySearch, setDictionarySearch] = useState("");

  useEffect(() => {
    const fetchConlangs = async () => {
      try {
        const response = await fetch("/api/conlangs");
        if (response.ok) {
          const data = await response.json();
          setConlangs(data);
        } else {
          console.error("Failed to fetch conlangs:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching conlangs:", error);
      }
    };

    fetchConlangs();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/conlangs/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setConlangs((prev) => prev.filter((conlang) => conlang.id !== id));
        console.log(`Conlang with ID ${id} deleted successfully.`);
      } else {
        console.error(`Failed to delete conlang with ID ${id}:`, response.statusText);
      }
    } catch (error) {
      console.error("Error deleting conlang:", error);
    }
  };

  const handleViewDictionary = async (conlangId: string) => {
    console.log("Conlang ID:", conlangId); // Log the Conlang ID
    if (!conlangId) {
      console.error("No Conlang ID provided.");
      return;
    }

    try {
      const response = await fetch(`/api/conlangs/${conlangId}/dictionary`);

      if (!response.ok) {
        console.error("Failed to fetch dictionary:", response.statusText);
        return;
      }

      const data = await response.json();
      console.log("Fetched dictionary data:", data); // Log the fetched data
      setDictionary(data); // Update state with dictionary data
      setSelectedConlangId(conlangId); // Update selected conlang ID
      setViewDictionary(true); // Open the dictionary modal
    } catch (error) {
      console.error("Error fetching dictionary:", error);
    }
  };

  const handleAddWord = async () => {
    console.log("Attempting to add word...");
    console.log("Word:", word, "Meaning:", meaning, "Conlang ID:", selectedConlangId);
    if (!word || !meaning || !selectedConlangId) {
      console.error("Invalid input for adding word.");
      return;
    }

    try {
      const response = await fetch("/api/conlangs/add-word", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ conlangId: selectedConlangId, word, meaning }),
      });

      if (response.ok) {
        const newEntry = await response.json();
        setDictionary((prev) => [...prev, newEntry]);
        setWord("");
        setMeaning("");
        console.log("Word added successfully:", newEntry);
      } else {
        console.error("Failed to add word:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding word:", error);
    }
  };

  const filteredConlangs = conlangs.filter((conlang) =>
    conlang.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredDictionary = dictionary.filter(
    (entry) =>
      entry?.meaning?.toLowerCase().includes(dictionarySearch.toLowerCase())
  );
  

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-4 flex justify-between">
        <input
          type="text"
          placeholder="Search Conlangs..."
          className="w-full sm:w-64 rounded-md border px-4 py-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ul className="space-y-2">
        {filteredConlangs.map((conlang) => (
          <li key={conlang.id} className="flex items-center justify-between rounded-md border p-4">
            <div>
              <h3 className="text-lg font-bold">{conlang.name}</h3>
              <p className="text-sm text-muted-foreground">{conlang.description}</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" onClick={() => setSelectedConlangId(conlang.id)}>
                <PlusIcon className="h-5 w-5 mr-2" />
              </Button>
              <Button
                variant="ghost"
                className="flex items-center justify-center"
                onClick={() => handleViewDictionary(conlang.id)}
              >
                <EyeIcon className="h-5 w-5 mr-2" />
              </Button>
              <Button variant="secondary" onClick={() => handleDelete(conlang.id)}>
                <Trash2Icon className="h-5 w-5" />
              </Button>
            </div>
          </li>
        ))}
      </ul>

      {selectedConlangId && !viewDictionary && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-96">
            <h3 className="text-xl font-semibold mb-4">Add Word to Dictionary</h3>
            <input
  type="text"
  placeholder="Word"
  className="w-full p-2 border rounded-md mb-2"
  value={word}
  onChange={(e) => setWord(e.target.value)}
/>
<input
  type="text"
  placeholder="Meaning"
  className="w-full p-2 border rounded-md"
  value={meaning}
  onChange={(e) => setMeaning(e.target.value)}
/>
<input/>

            <Button variant="addword" onClick={handleAddWord} className="w-full">
              Add Word
            </Button>
            <Button variant="ghost" onClick={() => setSelectedConlangId(null)} className="w-full mt-2">
              Close
            </Button>
          </div>
        </div>
      )}

{viewDictionary && (
  <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-md w-96">
      <h3 className="text-xl font-semibold mb-4">Dictionary</h3>
      <input
        type="text"
        placeholder="Search by meaning..."
        className="w-full mb-4 p-2 border rounded-md"
        value={dictionarySearch}
        onChange={(e) => setDictionarySearch(e.target.value)}
      />
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left border-b">Word</th>
            <th className="px-4 py-2 text-left border-b">Meaning</th>
          </tr>
        </thead>
        <tbody>
          {filteredDictionary.map((entry, idx) => (
            <tr key={idx} className="border-b">
              <td className="px-4 py-2">{entry.word}</td>
              <td className="px-4 py-2">{entry.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        variant="ghost"
        onClick={() => {
          setViewDictionary(false);
          setSelectedConlangId(null);  // Deselect the current conlang
        }}
        className="w-full mt-2"
      >
        Close Dictionary
      </Button>
    </div>
  </div>
)}


    </div>
  );
};
