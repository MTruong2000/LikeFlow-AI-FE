"user client";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";

interface HeaderProfileProps {
  setIsLoading: (value: boolean) => void;
}

const HeaderProfile = ({ setIsLoading }: HeaderProfileProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
  });

  const aiColors = [
    "#6366F1", // Indigo
    "#8B5CF6", // Violet
    "#06B6D4", // Cyan
    "#10B981", // Emerald
    "#F59E0B", // Amber
    "#EF4444", // Red
    "#EC4899", // Pink
    "#3B82F6", // Blue
    "#8B5A2B", // Brown
    "#6B7280", // Gray
  ];

  // Tạo màu random dựa trên tên
  const getAvatarColor = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return aiColors[Math.abs(hash) % aiColors.length];
  };

  const avatarColor = getAvatarColor(userProfile.name);
  const initials = userProfile.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
      });
      const data = await res.json();

      if (data.success) {
        router.refresh();
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Logout error:", err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleProfile = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/profile", {
          method: "GET",
        });
        const data = await res.json();
        if (data.code === 200) {
          setUserProfile({
            name: data.data.name,
            email: data.data.email,
          });
        }
        setIsLoading(false);
      } catch (err) {
        console.error("Profile fetch error:", err);
        setIsLoading(false);
      }
    };

    handleProfile();
  }, []);

  const menuItems = [
    {
      icon: User,
      label: "Orders",
      action: () => router.push("/order-page"),
    },
    {
      icon: Settings,
      label: "Go to App",
      action: () => console.log("Settings clicked"),
    },
    {
      icon: LogOut,
      label: "Logout",
      action: () => handleLogout(),
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-3 p-2 rounded-xl hover:cursor-pointer transition-all duration-200 group"
      >
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg ring-2 ring-slate-700/50 group-hover:ring-slate-600/50 transition-all duration-200"
          style={{ backgroundColor: avatarColor }}
        >
          {initials}
        </div>

        {/* Tên người dùng */}
        <span className="text-white font-medium hidden sm:block transition-colors duration-200">
          {userProfile.name}
        </span>

        {/* Chevron icon */}
        <ChevronDown
          className={`w-4 h-4 text-slate-400 group-hover:text-slate-300 transition-all duration-200 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-4 w-60 rounded-xl shadow-2xl py-2 z-50 animate-in duration-200 bg-gradient-profile ">
          {/* User info header */}
          <div className="px-4 py-3 border-b border-white">
            <div className="flex items-center space-x-3">
              <div
                className="w-8 h-8 rounded-full flex p-4 items-center justify-center text-white font-semibold text-xs"
                style={{ backgroundColor: avatarColor }}
              >
                {initials}
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  {userProfile.name}
                </p>
                <p className="text-xs text-white">{userProfile.email}</p>
              </div>
            </div>
          </div>

          {/* Menu items */}
          <div className="py-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.action();
                  setIsDropdownOpen(false);
                }}
                className="w-full flex items-center space-x-3 px-4 py-3 text-white cursor-pointer hover:bg-slate-700/50 transition-all duration-150 group"
              >
                <item.icon className="w-4 h-4 text-white0" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderProfile;
