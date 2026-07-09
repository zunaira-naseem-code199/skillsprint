import { useEffect, useState } from "react";

function CertificateModal({
  isOpen,
  onClose,
  onSubmit,
  editingCertificate,
}) {
  const [formData, setFormData] = useState({
    title: "",
    issuer: "",
    issueDate: "",
    imageUrl: "",
    credentialUrl: "",
  });

  useEffect(() => {
    if (editingCertificate) {
      setFormData({
        title: editingCertificate.title || "",
        issuer: editingCertificate.issuer || "",
        issueDate: editingCertificate.issueDate
          ? editingCertificate.issueDate.slice(0, 10)
          : "",
        imageUrl: editingCertificate.imageUrl || "",
        credentialUrl: editingCertificate.credentialUrl || "",
      });
    } else {
      setFormData({
        title: "",
        issuer: "",
        issueDate: "",
        imageUrl: "",
        credentialUrl: "",
      });
    }
  }, [editingCertificate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-3xl w-full max-w-xl p-8 shadow-xl">

        <h2 className="text-3xl font-bold mb-8">
          {editingCertificate
            ? "✏ Edit Certificate"
            : "🏆 Add Certificate"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="title"
            placeholder="Certificate Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="text"
            name="issuer"
            placeholder="Issued By"
            value={formData.issuer}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="date"
            name="issueDate"
            value={formData.issueDate}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="text"
            name="imageUrl"
            placeholder="Certificate Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="text"
            name="credentialUrl"
            placeholder="Credential URL"
            value={formData.credentialUrl}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-6 py-3 rounded-xl"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl"
            >
              {editingCertificate
                ? "Update"
                : "Save"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default CertificateModal;