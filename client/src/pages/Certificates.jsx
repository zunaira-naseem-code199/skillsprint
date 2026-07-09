import { useEffect, useState } from "react";

import CertificateList from "../components/certificates/CertificateList";
import CertificateModal from "../components/certificates/CertificateModal";

import {
  getCertificates,
  createCertificate,
  updateCertificate,
  deleteCertificate,
} from "../services/certificateService";

function Certificates() {
  const [certificates, setCertificates] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const [editingCertificate, setEditingCertificate] =
    useState(null);

  const loadCertificates = async () => {
    try {
      const data = await getCertificates();
      setCertificates(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadCertificates();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      if (editingCertificate) {
        await updateCertificate(
          editingCertificate._id,
          formData
        );
      } else {
        await createCertificate(formData);
      }

      setEditingCertificate(null);

      loadCertificates();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete certificate?")) return;

    try {
      await deleteCertificate(id);
      loadCertificates();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (certificate) => {
    setEditingCertificate(certificate);
    setIsOpen(true);
  };

  return (
  <div className="p-4 md:p-6 lg:p-8">

    {/* Header */}

    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 mb-8">

      <div>

        <h1 className="text-3xl md:text-4xl font-bold">
          🏆 Certificates
        </h1>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Showcase your learning achievements.
        </p>

      </div>

      <button
        onClick={() => {
          setEditingCertificate(null);
          setIsOpen(true);
        }}
        className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl transition"
      >
        + Add Certificate
      </button>

    </div>

    <CertificateList
      certificates={certificates}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />

    <CertificateModal
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
        setEditingCertificate(null);
      }}
      onSubmit={handleSubmit}
      editingCertificate={editingCertificate}
    />

  </div>
);
}

export default Certificates;