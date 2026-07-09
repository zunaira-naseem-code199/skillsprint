import CertificateCard from "./CertificateCard";

function CertificateList({
  certificates,
  onEdit,
  onDelete,
}) {
  if (certificates.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 text-center">

        <h2 className="text-xl md:text-2xl font-bold text-gray-700">
          🏆 No Certificates Yet
        </h2>

        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Add your first certificate to showcase your achievements.
        </p>

      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

      {certificates.map((certificate) => (

        <CertificateCard
          key={certificate._id}
          certificate={certificate}
          onEdit={onEdit}
          onDelete={onDelete}
        />

      ))}

    </div>
  );
}

export default CertificateList;