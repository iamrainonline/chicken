import React, { useState } from "react";
import {
  Users,
  Newspaper,
  PlusCircle,
  Layout,
  Settings,
  List,
  Cctv,
  Radical,
} from "lucide-react";
import CreateUser from "./Items/CreateUser";
// Assuming this is imported from your actual API file

const AdminDashboard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeSection, setActiveSection] = useState("dashboard");

  const sidebarItems = [
    {
      icon: <Layout className="w-5 h-5" />,
      name: "Dashboard",
      section: "dashboard",
    },
    {
      icon: <Users className="w-5 h-5" />,
      name: "Create User",
      section: "create-user",
    },
    {
      icon: <Newspaper className="w-5 h-5" />,
      name: "View Posts",
      section: "view-posts",
    },
    {
      icon: <PlusCircle className="w-5 h-5" />,
      name: "Create Post",
      section: "create-post",
    },
    {
      icon: <List className="w-5 h-5" />,
      name: "Monitor Posts",
      section: "monitor-posts",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      name: "Settings",
      section: "settings",
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Newspaper className="w-8 h-8 text-slate-200" />,
                title: "Total Posts",
                value: "42",
                trend: "+12%",
                trendColor: "text-green-500",
              },
              {
                icon: <Users className="w-8 h-8 text-slate-200" />,
                title: "Total Users",
                value: "128",
                trend: "+8.3%",
                trendColor: "text-green-500",
              },
              {
                icon: <Cctv className="w-8 h-8 text-slate-200" />,
                title: "Monitoring",
                value: "691",
                trend: "+8.3%",
                trendColor: "text-green-500",
              },
              {
                icon: <Radical className="w-8 h-8 text-slate-200" />,
                title: "Heartbeat",
                value: "691",
                trend: "+8.3%",
                trendColor: "text-green-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-slate-800 
                  rounded-xl 
                  p-6 
                  shadow-lg 
                  transform 
                  transition-all 
                  duration-300 
                  hover:shadow-xl 
                  hover:bg-slate-700
                  cursor-pointer
                  border 
                  border-slate-700
                "
              >
                <div className="flex justify-between items-center">
                  <div>{item.icon}</div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm mb-2">{item.title}</p>
                    <h2 className="text-2xl font-bold text-slate-200">
                      {item.value}
                    </h2>
                    <p className={`text-sm ${item.trendColor}`}>{item.trend}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case "create-user":
        return <CreateUser />;
      default:
        return (
          <div className="bg-gray-100 p-6 rounded-xl text-slate-900">
            <h2 className="text-2xl font-bold">
              {sidebarItems.find((item) => item.section === activeSection)
                ?.name || "Section"}
            </h2>
            <p className="mt-4 text-slate-700">
              Content for{" "}
              {
                sidebarItems.find((item) => item.section === activeSection)
                  ?.name
              }{" "}
              is coming soon.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-10 ml-3">Admin Panel</h1>
        <nav>
          {sidebarItems.map((item) => (
            <button
              key={item.section}
              onClick={() => setActiveSection(item.section)}
              className={`
                w-full 
                flex 
                items-center 
                space-x-3 
                p-3 
                rounded-lg 
                mb-2 
                transition 
                duration-300
                ${
                  activeSection === item.section
                    ? "bg-slate-700 text-white"
                    : "hover:bg-slate-800 text-slate-300"
                }
              `}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 p-10 overflow-y-auto bg-gray-100">
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;
