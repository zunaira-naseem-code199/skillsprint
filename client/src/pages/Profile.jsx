import { useEffect, useState } from "react";
import {
  Camera,
  Mail,
  User,
  FileText,
  Save,
  Upload,
} from "lucide-react";

import {
  getProfile,
  updateProfile,
} from "../services/profileService";

function Profile() {
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    bio: "",
    profilePicture: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await getProfile();

      setFormData({
        fullName: data.fullName || "",
        email: data.email || "",
        bio: data.bio || "",
        profilePicture: data.profilePicture || "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(formData);

      alert("✅ Profile Updated Successfully");
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  const handleImageChange = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    setFormData((prev) => ({
      ...prev,
      profilePicture: reader.result,
    }));
  };

  reader.readAsDataURL(file);
};

  const initials = formData.fullName
    ? formData.fullName
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase()
    : "U";

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">

      <div className="mb-10">

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
          My Profile
        </h1>

        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Manage your personal information and account details.
        </p>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT CARD */}

        <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl">

          <div className="flex justify-center">

            {formData.profilePicture ? (

              <img
                src={formData.profilePicture}
                alt="Profile"
                className="w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-lg"
              />

            ) : (

              <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-white text-violet-700 flex items-center justify-center text-5xl font-bold shadow-lg">

                {initials}

              </div>

            )}

          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-center mt-6">

            {formData.fullName || "User"}

          </h2>

          <p className="text-center text-violet-100 mt-2">

            {formData.email}

          </p>

          <div className="mt-8 border-t border-violet-400 pt-6">

            <div className="flex items-start gap-3">

              <Mail size={20} />

              <span>{formData.email}</span>

            </div>

            <div className="flex items-start gap-3 mt-5">

              <FileText size={20} />

              <p className="leading-7">

                {formData.bio || "No bio added yet."}

              </p>

            </div>

          </div>

        </div>

        {/* RIGHT CARD */}

        <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-8">

            Edit Profile

          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-7"
          >

            {/* Full Name */}

            <div>

              <label className="font-semibold text-slate-700">

                Full Name

              </label>

              <div className="mt-2 flex items-center gap-3 border rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-violet-300">

                <User
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="flex-1 outline-none"
                  placeholder="Enter full name"
                />

              </div>

            </div>

            {/* Email */}

            <div>

              <label className="font-semibold text-slate-700">

                Email

              </label>

              <div className="mt-2 flex items-center gap-3 border rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-violet-300">

                <Mail
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 outline-none"
                  placeholder="Enter email"
                />

              </div>

            </div>
                        {/* Bio */}

            <div>

              <label className="font-semibold text-slate-700">

                Bio

              </label>

              <textarea
                rows="5"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell everyone something about yourself..."
                className="w-full mt-2 border rounded-2xl px-4 py-4 outline-none resize-none focus:ring-2 focus:ring-violet-300"
              />

            </div>

            {/* Profile Picture */}

            {/* Profile Picture */}

<div>

  <label className="font-semibold text-slate-700">

    Profile Picture

  </label>

  <div className="mt-3">

    <label className="flex flex-col sm:flex-row items-center justify-center gap-3 cursor-pointer bg-violet-50 hover:bg-violet-100 border-2 border-dashed border-violet-300 rounded-2xl py-6 transition text-center">

      <Upload
        size={24}
        className="text-violet-600"
      />

      <span className="font-semibold text-violet-700">
        Choose Image
      </span>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />

    </label>

  </div>

</div>

            {/* Preview */}

            {formData.profilePicture && (

              <div>

                <p className="font-semibold text-slate-700 mb-3">
                  Image Preview
                </p>

                <img
                  src={formData.profilePicture}
                  alt="Preview"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover border shadow"
                />

              </div>

            )}

            {/* Save Button */}

            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white py-4 rounded-2xl flex justify-center items-center gap-3 font-semibold text-base sm:text-lg"
            >

              <Save size={20} />

              Update Profile

            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Profile;