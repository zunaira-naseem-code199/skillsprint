import { useEffect, useState } from "react";
import { LogOut, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";

import SettingsCard from "../components/settings/SettingsCard";

import {
  getSettings,
  updateSettings,
} from "../services/settingsService";

function Settings() {
  const navigate = useNavigate();

  const [settings, setSettings] = useState({
    emailNotifications: true,
    dailyReminder: true,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const data = await getSettings();

      setSettings({
        emailNotifications: data.emailNotifications,
        dailyReminder: data.dailyReminder,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      await updateSettings({
        emailNotifications: settings.emailNotifications,
        dailyReminder: settings.dailyReminder,
      });

      alert("✅ Settings Updated Successfully");
    } catch (error) {
      console.log(error);
      alert("❌ Failed to update settings");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg sm:text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">

      {/* Header */}

      <div className="mb-8 sm:mb-10">

        <h1 className="text-3xl sm:text-4xl font-bold flex items-center gap-3">
          ⚙️ Settings
        </h1>

        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Manage your account preferences.
        </p>

      </div>

      {/* Settings Card */}

      <SettingsCard
        settings={settings}
        setSettings={setSettings}
      />

      {/* Buttons */}

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8">

        <button
          onClick={handleSave}
          className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl flex items-center justify-center gap-3 transition"
        >
          <Save size={20} />
          Save Settings
        </button>

        <button
          onClick={handleLogout}
          className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl flex items-center justify-center gap-3 transition"
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Settings;