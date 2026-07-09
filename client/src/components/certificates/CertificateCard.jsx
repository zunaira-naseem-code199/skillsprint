import { Pencil, Trash2, ExternalLink } from "lucide-react";

function CertificateCard({
  certificate,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition">

      {/* Certificate Image */}

      <img
        src={
          certificate.imageUrl ||
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        }
        alt={certificate.title}
        className="w-full h-44 sm:h-52 object-cover"
      />

      {/* Content */}

      <div className="p-5 md:p-6">

        <h2 className="text-xl md:text-2xl font-bold text-slate-800 break-words">
          {certificate.title}
        </h2>

        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Issued by{" "}
          <span className="font-semibold">
            {certificate.issuer}
          </span>
        </p>

        <p className="text-gray-500 mt-2 text-sm">
          📅{" "}
          {new Date(
            certificate.issueDate
          ).toLocaleDateString()}
        </p>

        {/* Credential */}

        {certificate.credentialUrl && (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-violet-600 mt-4 hover:underline text-sm md:text-base break-all"
          >
            <ExternalLink size={18} />
            View Credential
          </a>
        )}

        {/* Buttons */}

        <div className="flex flex-col sm:flex-row gap-3 mt-6">

          <button
            onClick={() => onEdit(certificate)}
            className="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-xl w-full sm:w-auto"
          >
            <Pencil size={18} />
            Edit
          </button>

          <button
            onClick={() => onDelete(certificate._id)}
            className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl w-full sm:w-auto"
          >
            <Trash2 size={18} />
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default CertificateCard;