import { Bell, Calendar, Moon } from "lucide-react";

function SettingsCard({
  settings,
  setSettings,
}) {
  const handleToggle = (field) => {
    setSettings((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-5 sm:p-6 lg:p-8">

      {/* Heading */}

      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
        ⚙️ Preferences
      </h2>

      {/* Email Notifications */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-5 border-b">

        <div className="flex items-start gap-4">

          <Bell
            className="text-violet-600 flex-shrink-0 mt-1"
            size={22}
          />

          <div>

            <h3 className="font-semibold text-base sm:text-lg">
              Email Notifications
            </h3>

            <p className="text-sm text-gray-500">
              Receive updates via email.
            </p>

          </div>

        </div>

        <input
          type="checkbox"
          checked={settings.emailNotifications}
          onChange={() =>
            handleToggle("emailNotifications")
          }
          className="w-5 h-5 accent-violet-600 self-start sm:self-center"
        />

      </div>

      {/* Daily Reminder */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-5 border-b">

        <div className="flex items-start gap-4">

          <Calendar
            className="text-violet-600 flex-shrink-0 mt-1"
            size={22}
          />

          <div>

            <h3 className="font-semibold text-base sm:text-lg">
              Daily Reminder
            </h3>

            <p className="text-sm text-gray-500">
              Daily learning reminder.
            </p>

          </div>

        </div>

        <input
          type="checkbox"
          checked={settings.dailyReminder}
          onChange={() =>
            handleToggle("dailyReminder")
          }
          className="w-5 h-5 accent-violet-600 self-start sm:self-center"
        />

      </div>

      {/* Dark Theme */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-5">

        <div className="flex items-start gap-4">

          <Moon
            className="text-violet-600 flex-shrink-0 mt-1"
            size={22}
          />

          <div>

            <h3 className="font-semibold text-base sm:text-lg">
              Dark Theme
            </h3>

            <p className="text-sm text-gray-500">
              Coming Soon
            </p>

          </div>

        </div>

        <span className="self-start sm:self-center bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
          Coming Soon
        </span>

      </div>

    </div>
  );
}

export default SettingsCard;