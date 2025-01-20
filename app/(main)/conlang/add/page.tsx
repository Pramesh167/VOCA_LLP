import { AddWordForm } from "@/components/AddWordForm";
import { getConlangs } from "@/db/queries";

const AddWordPage = async () => {
  const conlangs = await getConlangs();

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add Word to Conlang</h1>
      {conlangs.length > 0 ? (
        <AddWordForm conlangs={conlangs} />
      ) : (
        <p>No conlangs found. Please create a conlang first.</p>
      )}
    </div>
  );
};

export default AddWordPage;
