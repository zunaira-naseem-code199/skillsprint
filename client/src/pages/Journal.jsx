import { useEffect, useState } from "react";

import JournalStats from "../components/journal/JournalStats";
import JournalFilters from "../components/journal/JournalFilters";
import JournalList from "../components/journal/JournalList";
import JournalModal from "../components/journal/JournalModal";

import {
  getJournals,
  createJournal,
  updateJournal,
  deleteJournal,
} from "../services/journalService";

function Journal() {
  const [journals, setJournals] = useState([]);

  const [search, setSearch] = useState("");
  const [mood, setMood] = useState("All");

  const [isOpen, setIsOpen] = useState(false);
  const [editingJournal, setEditingJournal] =
    useState(null);

  // ===========================
  // Load Journals
  // ===========================

  const loadJournals = async () => {
    try {
      const data = await getJournals();
      setJournals(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadJournals();
  }, []);

  // ===========================
  // Create / Update
  // ===========================

  const handleSubmit = async (formData) => {
    try {
      if (editingJournal) {
        await updateJournal(
          editingJournal._id,
          formData
        );
      } else {
        await createJournal(formData);
      }

      setEditingJournal(null);
      loadJournals();
    } catch (error) {
      console.log(error);
    }
  };

  // ===========================
  // Delete
  // ===========================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this journal?"
    );

    if (!confirmDelete) return;

    try {
      await deleteJournal(id);
      loadJournals();
    } catch (error) {
      console.log(error);
    }
  };

  // ===========================
  // Edit
  // ===========================

  const handleEdit = (journal) => {
    setEditingJournal(journal);
    setIsOpen(true);
  };

  // ===========================
  // Filters
  // ===========================

  const filteredJournals = journals.filter(
    (journal) => {
      const matchesSearch =
        journal.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        journal.content
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesMood =
        mood === "All" ||
        journal.mood === mood;

      return matchesSearch && matchesMood;
    }
  );

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">

        <div>

          <h1 className="text-3xl md:text-4xl font-bold">
            📖 Journal
          </h1>

          <p className="text-slate-500 mt-2">
            Capture your daily learning journey.
          </p>

        </div>

        <button
          onClick={() => {
            setEditingJournal(null);
            setIsOpen(true);
          }}
          className="w-full md:w-auto bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl transition"
        >
          + New Journal
        </button>

      </div>

      {/* Stats */}

      <JournalStats
        journals={filteredJournals}
      />

      {/* Filters */}

      <JournalFilters
        search={search}
        setSearch={setSearch}
        mood={mood}
        setMood={setMood}
      />

      {/* List */}

      <JournalList
        journals={filteredJournals}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Modal */}

      <JournalModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setEditingJournal(null);
        }}
        onSubmit={handleSubmit}
        editingJournal={editingJournal}
      />

    </div>
  );
}

export default Journal;